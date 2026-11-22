import { Reveal } from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Механика",
    text: "Сначала — ощущение. Прототип проверяет движение, ритм и вес: прыжок, удар, клик, шаг. Всё лишнее отсекается до продакшена.",
    tags: ["Prototype", "Game feel", "Input"],
  },
  {
    num: "02",
    title: "Системы",
    text: "Потом — связи. Инвентарь, экономика, квесты, сеть и сохранения собираются в архитектуру, которую можно расширять без боли.",
    tags: ["C#", "Architecture", "Save / Net"],
  },
  {
    num: "03",
    title: "Атмосфера",
    text: "Свет, звук, анимации и интерфейс работают на одно чувство. Мир должен читаться даже без текста — по силуэтам и цвету.",
    tags: ["Light", "Sound", "UI / UX"],
  },
  {
    num: "04",
    title: "Полировка",
    text: "Финальный слой: тайминги, отклик, краевые случаи, оптимизация. Именно здесь прототип становится игрой, в которую верят.",
    tags: ["Polish", "Optimization", "QA"],
  },
];

export function Process() {
  return (
    <section className="section" id="approach">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="section-head__index mono">04 / Подход</span>
            <h2 className="section-head__title">
              Как рождается
              <br />
              игра.
            </h2>
          </div>
          <p className="section-head__aside">
            Четыре слоя, которые превращают идею в ощутимый опыт. Без магии —
            только итерации, тесты и внимание к деталям.
          </p>
        </div>

        <div className="process">
          {steps.map((step, index) => (
            <Reveal key={step.num} delay={index * 0.06}>
              <div className="process__row">
                <span className="process__num">{step.num}</span>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__text">{step.text}</p>
                <div className="process__tags">
                  {step.tags.map((tag) => (
                    <span className="process__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
