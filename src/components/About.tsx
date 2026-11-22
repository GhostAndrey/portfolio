import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

const facts = [
  ["Город", "Минск, Беларусь"],
  ["Учёба", "Геймдизайн"],
  ["Движок", "Unity 2021 — 6.3"],
  ["Язык", "C# / Go"],
  ["Веб", "Next.js / React"],
  ["Формат", "PC · Web · Mobile"],
];

const stats = [
  { value: "13", label: "игровых проектов" },
  { value: "276", label: "скриптов в одном мире" },
  { value: "4", label: "игрока в кооперативе" },
  { value: "5×5", label: "км непрерывной долины" },
];

export function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="section-head__index mono">01 / Обо мне</span>
            <h2 className="section-head__title">
              Не просто
              <br />
              прототипы.
            </h2>
          </div>
          <p className="section-head__aside">
            Каждый проект — это законченная мысль: механика, которая ощущается,
            мир, который держит внимание, и код, который можно развивать.
          </p>
        </div>

        <div className="about__grid">
          <Reveal className="about__statement">
            Собираю миры, в которых хочется <em>остаться</em>{" "}
            <span className="stroke">подольше</span>.
          </Reveal>

          <Reveal className="about__aside" delay={0.12}>
            <div className="about__copy">
              <p>
                Меня зовут <strong>Андрей</strong>, мне 20 лет. Родился в
                Узбекистане, сейчас учусь в Минске на геймдизайнера и параллельно
                делаю игры на Unity.
              </p>
              <p>
                Начинал с маленьких лабораторных — Pong, карточки на память,
                раннер про мышь, — а сейчас строю <strong>Medieval Coop</strong>:
                кооперативный мир на 5×5 км с сотнями взаимосвязанных систем.
              </p>
              <p>
                Люблю игры, где механика и атмосфера работают вместе: монстр,
                у которого есть настроение; топор, который тупеет; свет, который
                предупреждает раньше звука. Пишу на C#, собираю уровни, настраиваю
                свет и довожу ощущения до нужного веса.
              </p>
              <p>
                Игры — не единственная часть работы. Этот сайт собран на{" "}
                <strong>Next.js</strong> и Go, Telegram Mini App — на React, а
                сервисы и тренажёры — на Go. Один и тот же подход: понятная
                архитектура, честные состояния и доведение до рабочего результата.
              </p>
            </div>

            <div className="about__facts">
              {facts.map(([label, value]) => (
                <div className="about__fact" key={label}>
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>

            <span className="about__sign">— Андрей / Unity developer</span>
          </Reveal>
        </div>

        <div className="stats">
          {stats.map((stat, index) => (
            <Reveal className="stat" key={stat.label} delay={index * 0.07}>
              <div className="stat__value">
                {/^\d+$/.test(stat.value) ? <CountUp value={stat.value} /> : stat.value}
              </div>
              <div className="stat__label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
