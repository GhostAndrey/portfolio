import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_IP = 5;

const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_PER_IP) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function formatMessage(payload: Payload): string {
  return [
    "Новое сообщение с портфолио",
    "",
    `Имя: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    payload.message,
  ].join("\n");
}

async function sendToTelegram(payload: Payload): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatMessage(payload),
      disable_web_page_preview: true,
    }),
  });
  return response.ok;
}

async function sendToWebhook(payload: Payload): Promise<boolean> {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return false;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source: "portfolio", ...payload }),
  });
  return response.ok;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Слишком много сообщений. Попробуйте позже." },
      { status: 429 }
    );
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Некорректный запрос." }, { status: 400 });
  }

  if (payload.company) {
    // Honeypot: pretend success for bots, do not deliver.
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (
    !name ||
    name.length > 120 ||
    !EMAIL_RE.test(email) ||
    email.length > 200 ||
    message.length < 10 ||
    message.length > 4000
  ) {
    return NextResponse.json({ error: "Проверьте поля формы." }, { status: 422 });
  }

  const clean: Payload = { name, email, message };

  try {
    if ((await sendToTelegram(clean)) || (await sendToWebhook(clean))) {
      return NextResponse.json({ ok: true });
    }
  } catch {
    return NextResponse.json({ error: "Не удалось отправить сообщение." }, { status: 502 });
  }

  return NextResponse.json(
    {
      error:
        "Форма не настроена. Задайте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID или CONTACT_WEBHOOK_URL.",
    },
    { status: 503 }
  );
}
