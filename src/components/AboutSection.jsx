import "./AboutSection.css";
import SectionHeading from "./SectionHeading";
import logo from "../assets/ap-logo.svg";

export default function AboutSection() {
  return (
    <section className="about-root" id="about">
      <header className="about-hero">
        <img src={logo} alt="AP Consultancy" className="about-logo" />
        <button className="pill">About Us</button>
        <h1 className="about-title">About AP Consultancy</h1>
        <p className="about-sub">Empowering Businesses Through Technology</p>
        <p className="about-lead">
          At AP Consultancy, we are passionate problem-solvers, strategic thinkers, and tech innovators. As a
          dynamic IT solutions company, we specialize in delivering custom software development, web
          development, mobile app development, UI/UX design, and digital transformation services that help
          businesses grow, scale, and succeed in a digital-first world.
        </p>
      </header>

      <div className="trusted-by">
        <p className="small-center">Over 50+ businesses trust us</p>
        <div className="logos">
          <div className="logo-placeholder">Logoipsum</div>
          <div className="logo-placeholder">Logoipsum</div>
          <div className="logo-placeholder">Logoipsum</div>
          <div className="logo-placeholder">Logoipsum</div>
        </div>
      </div>

      <section className="what-we-do">
        <div className="section-intro">
          <button className="pill">Our Work</button>
          <h2>What We Do</h2>
          <p className="lead">
            We blend creativity, strategy, and technology to deliver custom solutions tailored to each
            client's unique needs. Whether you're building a product from scratch, automating a workflow,
            or enhancing customer engagement, our team ensures every project is aligned with your vision and
            business objectives.
          </p>
        </div>

        <div className="cards-row">
          <div className="card red">
            <h3>⚡ Our Mission</h3>
            <p>To empower businesses by delivering innovative, efficient, and scalable digital solutions.</p>
          </div>
          <div className="card">
            <h3>📊 Our Vision</h3>
            <p>To be recognized as a trusted global technology partner known for excellence, integrity, and client success.</p>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="section-intro small">
          <button className="pill">Our Values</button>
          <h2>The Values Behind AP Consultancy</h2>
          <p className="lead">Our values shape everything we do. From innovation to integrity, we build solutions that empower businesses and drive real impact.</p>
        </div>

        <div className="values-row">
          <div className="value-card">Innovation<p>We challenge the norm to build smarter, faster, and better solutions.</p></div>
          <div className="value-card">Collaboration<p>We believe in growing together with our clients, building trust and shared success.</p></div>
          <div className="value-card">Excellence<p>We hold ourselves to the highest standards in everything we do.</p></div>
          <div className="value-card">Integrity<p>We act with absolute honesty and transparency in every interaction.</p></div>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-box">
          <h2>Let's Build the Future Together</h2>
          <p>Contact us today to start your digital journey with confidence.</p>
          <a className="cta-button" href="/contact">Talk To Our Experts</a>
        </div>
      </section>
    </section>
  );
}
