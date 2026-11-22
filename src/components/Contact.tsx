"use client";

import { useState } from "react";
import { Magnetic } from "./Magnetic";
import { ArrowUpRight } from "./icons";

type Status = "idle" | "sending" | "ok" | "error";

const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");
const contactEndpoint = apiUrl ? `${apiUrl}/api/contact` : "/api/contact";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
      company: String(data.get("company") || ""),
    };

    setStatus("sending");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="contact">
          <div className="contact__grid">
            <div>
              <span className="section-head__index mono">05 / Контакт</span>
              <h2 className="contact__title">
                Есть идея?
                <br />
                Давайте <em>соберём</em>
                <br />
                <span className="stroke">игру.</span>
              </h2>
              <p className="contact__note">
                Меня зовут Андрей. Живу в Минске и учусь на геймдизайнера, а
                параллельно делаю игры на Unity и сервисы на Go. Открыт к
                интересным проектам: геймплей, системы, прототипы и доведение до
                релиза. Расскажите, что задумали — отвечу и предложу следующий шаг.
              </p>
              <div className="contact__links">
                <a
                  href="https://github.com/GhostAndrey"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  <span>GitHub / GhostAndrey</span>
                  <span className="btn__arrow">
                    <ArrowUpRight size={13} />
                  </span>
                </a>
              </div>
            </div>

            <form className="contact__form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Имя</label>
                <input id="name" name="name" type="text" placeholder="Как к вам обращаться" required maxLength={120} autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@studio.com" required maxLength={200} autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Пара слов о проекте, сроках и задаче"
                  required
                  maxLength={4000}
                />
              </div>

              <div className="field" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                <label htmlFor="company">Компания</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="contact__form-foot">
                <Magnetic>
                  <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                    <span>{status === "sending" ? "Отправка..." : "Отправить"}</span>
                    <span className="btn__arrow">
                      <ArrowUpRight size={13} />
                    </span>
                  </button>
                </Magnetic>
                <span
                  className={`contact__status ${status === "ok" ? "is-ok" : ""} ${
                    status === "error" ? "is-error" : ""
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status === "ok" && "Сообщение ушло. Спасибо!"}
                  {status === "error" && "Не удалось отправить — напишите в GitHub."}
                  {(status === "idle" || status === "sending") && "Обычно отвечаю в течение пары дней"}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
