import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <p className="footer__blurb">
              Андрей — геймдизайнер и Unity-разработчик из Минска. Игры, Go-сервисы,
              Telegram Mini App и инструменты автоматизации: от прототипа до
              рабочего продукта.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Ссылки в подвале">
            <div className="footer__col">
              <span className="footer__col-title">Разделы</span>
              <Link href="/#work" className="footer__link">
                Работы
              </Link>
              <Link href="/#more" className="footer__link">
                Остальные проекты
              </Link>
              <Link href="/#approach" className="footer__link">
                Подход
              </Link>
              <Link href="/#about" className="footer__link">
                Обо мне
              </Link>
              <Link href="/#contact" className="footer__link">
                Контакты
              </Link>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Ссылки</span>
              <a href="https://github.com/GhostAndrey" target="_blank" rel="noreferrer" className="footer__link">
                GitHub ↗
              </a>
              <a href="https://github.com/GhostAndrey/SubscriptionFirewall" target="_blank" rel="noreferrer" className="footer__link">
                Subscription Firewall ↗
              </a>
            </div>
          </nav>
        </div>

        <div className="footer__word" aria-hidden="true">
          АНДРЕЙ
        </div>

        <div className="footer__bottom">
          <span className="mono">© 2026. Сделано на Unity, Go и Next.js.</span>
          <Link href="/" className="footer__top-link mono">
            Наверх <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
