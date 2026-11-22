import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell notfound">
      <span className="notfound__code">404</span>
      <h1 className="notfound__title">Такой уровень не сгенерировался.</h1>
      <p className="notfound__text">
        Страница потерялась между чанками. Вернитесь на главную — там все
        пятнадцать проектов на месте.
      </p>
      <Link href="/" className="btn btn--primary" style={{ marginTop: 30 }}>
        <span>На главную</span>
        <span className="btn__arrow">↗</span>
      </Link>
    </section>
  );
}
