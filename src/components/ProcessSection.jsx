import "./ProcessSection.css";
import SectionHeading from "./SectionHeading";

export default function ProcessSection({ processSteps, processBoard }) {
  return (
    <section id="process" className="section-block">
      <SectionHeading
        eyebrow="Our Process"
        title="We make working with us easy and effective."
        lead="From the very first call to project launch and beyond, our process is built to deliver clarity, speed, and results."
      />
      <div className="process-layout">
        <div className="timeline">
          {processSteps.map((step, index) => (
            <article className="timeline-item" key={step.title}>
              <span className="step-index">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="chip-row">
                  {step.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <aside className="process-board" aria-label="Discussion board">
          <p className="board-title">Points</p>
          {processBoard.map((item) => (
            <article className="board-item" key={item.title}>
              <div className="avatar-stack" aria-hidden="true">
                <span />
                <span />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.status}</p>
              </div>
            </article>
          ))}
          <button className="button button-ghost board-btn">Join an Exploration Call</button>
        </aside>
      </div>
    </section>
  );
}
