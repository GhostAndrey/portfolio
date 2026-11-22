import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "./icons";
import { HeroCanvas } from "./HeroCanvas";
import { SplitWords } from "./SplitWords";
import { Magnetic } from "./Magnetic";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroCanvas />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__side" aria-hidden="true">
        <span className="mono hero__side-label">Selected work</span>
        <span className="hero__side-value">14 игр + 4 проекта</span>
        <span className="hero__side-dot" />
        <span className="mono hero__side-label">Unity / C#</span>
      </div>

      <div className="shell hero__inner">
        <div className="hero__eyebrow mono">
          <i />
          Game developer — Unity / C# — 2026
        </div>

        <h1 className="hero__title" id="hero-title">
          <span className="hero__line">
            <SplitWords text="ИГРЫ" className="hero__line-inner" delay={0.05} />
          </span>
          <span className="hero__line">
            <span className="hero__line-inner">
              <SplitWords text="С" delay={0.14} />{" "}
              <em>
                <SplitWords text="ХАРАКТЕРОМ" delay={0.2} stagger={0.045} />
              </em>
              <b>.</b>
            </span>
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__lead">
            <strong>14 игровых проектов</strong> — от кооперативной долины 5×5 км до
            хоррора в квартире с Авито. Плюс Go-сервисы, Telegram Mini App и
            инструменты автоматизации.
          </p>

          <div className="hero__actions">
            <Magnetic>
              <Link href="#work" className="btn btn--primary">
                <span>Смотреть работы</span>
                <span className="btn__arrow">
                  <ArrowDown size={14} />
                </span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="#about" className="btn btn--ghost">
                <span>Обо мне</span>
                <span className="btn__arrow">
                  <ArrowUpRight size={13} />
                </span>
              </Link>
            </Magnetic>
          </div>

          <div className="hero__scroll" aria-hidden="true">
            Scroll
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
