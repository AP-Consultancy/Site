import "./StatsSection.css";

export default function StatsSection({ trustStats }) {
  return (
    <section className="section-block stats-grid" aria-label="Company statistics">
      {trustStats.map((stat) => (
        <article className="glass-card" key={stat.label}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </article>
      ))}
    </section>
  );
}
