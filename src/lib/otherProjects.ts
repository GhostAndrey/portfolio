export type OtherProject = {
  name: string;
  kind: string;
  year: string;
  status: string;
  summary: string;
  points: string[];
  tech: string[];
  accent: string;
  link?: { label: string; href: string };
};

export const otherProjects: OtherProject[] = [
  {
    name: "ASTRION",
    kind: "Telegram Mini App · игра",
    year: "2026",
    status: "В разработке",
    summary:
      "Многопользовательская аркада про корабли внутри Telegram: бой на Canvas, мета-слой со скинами и кейсами, кошелёк TON и серверный мультиплеер.",
    points: [
      "Клиент на React 18: один reducer, императивный canvas-движок боя и i18n на два языка.",
      "Серверная авторитетность: общий пакет симуляции для сервера, офлайна и предсказания, фиксированный тик 20 Гц, Socket.IO.",
      "Мета-прогрессия: 74 скина, кейсы, сезонные таблицы и синхронизация аккаунта через TON Connect.",
    ],
    tech: ["React 18", "Vite", "Canvas", "NestJS", "Socket.IO", "TON Connect"],
    accent: "#7C5CFF",
  },
  {
    name: "Subscription Firewall",
    kind: "Go-микросервис · финтех",
    year: "2026",
    status: "Открытый исходный код",
    summary:
      "Сервис находит регулярные подписки в потоке транзакций, выдаёт каждому мерчанту одноразовую виртуальную карту с месячным лимитом и ведёт её по всему жизненному циклу.",
    points: [
      "Детектор платежей: медианный интервал, стабильность сумм, валюта и подписочные MCC вместо ручных правил.",
      "Гексагональная архитектура, MySQL с outbox-очередью, оптимистичные блокировки и идемпотентный выпуск карт.",
      "Эксплуатация: Prometheus-метрики, OpenAPI, аудит с маскированием, graceful shutdown и 36 тестовых файлов.",
    ],
    tech: ["Go 1.27", "MySQL", "REST", "Prometheus", "OpenAPI", "Docker"],
    accent: "#00C2A8",
    link: {
      label: "github.com/GhostAndrey/SubscriptionFirewall",
      href: "https://github.com/GhostAndrey/SubscriptionFirewall",
    },
  },
  {
    name: "GoDojo",
    kind: "EdTech · офлайн-тренажёр",
    year: "2026",
    status: "Локальный релиз",
    summary:
      "Один бинарник для изучения Go: двуязычная теория, 23 раздела и 207 задач, встроенный редактор, песочница компиляции и геймификация прогресса.",
    points: [
      "Курс от «hello world» до HTTP-сервисов и продакшн-практик: у каждой темы примеры, подсказки и эталонные решения.",
      "Безопасный запуск кода: временный модуль, GOPROXY=off, таймаут и передача stdin; проверка задач через go test.",
      "Разбор ошибок компиляции и паник с отсылкой к теме курса, XP, уровни, серии дней и экспорт книги в автономный HTML.",
    ],
    tech: ["Go", "templ", "chi", "SQLite", "HTMX", "CodeMirror"],
    accent: "#38BDF8",
  },
  {
    name: "Avito Parser",
    kind: "Desktop · автоматизация",
    year: "2025",
    status: "Рабочий инструмент",
    summary:
      "Настольное приложение на Electron для сбора данных со страниц с антибот-защитой: антидетект-браузер, прокси, ротация IP и человекообразное поведение.",
    points: [
      "Puppeteer Stealth со сменой fingerprint, User-Agent и профиля на каждый заход.",
      "Прокси-пул и ротация мобильного IP, настраиваемые интервалы и процент отклонения времени.",
      "Случайные действия на странице, журнал выполнения и тест подключения в интерфейсе.",
    ],
    tech: ["Electron", "Node.js", "Puppeteer", "JavaScript"],
    accent: "#F97316",
  },
];
