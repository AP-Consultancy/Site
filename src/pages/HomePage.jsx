import { useCallback, useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../components";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HERO_VIDEO_INTRO_MS = 1400;
const HERO_COPY_FALLBACK_MS = 5200;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const stats = [
  {
    title: "500+ Projects",
    text: "Companies have streamlined their workflows with AP Consultancy's AI solutions.",
  },
  {
    title: "50+ Developers",
    text: "Reducing manual work and boosting productivity through automation.",
  },
  {
    title: "98% Satisfaction",
    text: "Clients see improved efficiency within the first three months of usage.",
  },
];

const serviceCards = [
  {
    title: "IT Staff Augmentation",
    text: "Hire experienced developers across any tech stack to extend your team.",
  },
  {
    title: "Custom Software Development",
    text: "Tailor-made software built specifically to meet your goals.",
  },
  {
    title: "Web Development",
    text: "Fast, responsive, and SEO-optimized websites to help you grow online.",
  },
  {
    title: "Mobile Development",
    text: "Powerful mobile apps for iOS, Android, and cross-platform needs.",
  },
  {
    title: "UI/UX Development",
    text: "Intuitive, modern interfaces that engage users and build brand identity.",
  },
  {
    title: "Software Product Development",
    text: "From MVP to full-scale product launches, we turn your vision into reality.",
  },
];

const processRows = [
  {
    badge: "Join an Exploration Call",
    title: "Join An Exploration Call",
    body: "Let's connect over a discovery call to understand your business, goals, and technical requirements. We'll discuss timelines, team structure, technologies, budget, and the skill sets needed-so we can tailor the best approach for your project.",
    chips: ["Internal Task Bots", "100+ Automations"],
    videoSrc: "/videos/Join exploation call.mp4",
  },
  {
    badge: "AI Assistance",
    title: "Define Solution & Build the Right Team",
    body: "Based on your requirements, we'll propose the ideal tech solution and team structure. Within a few days, we finalize the engagement model, onboard your team, and align on deliverables and success metrics.",
    chips: ["Solutions", "Scaling"],
    videoSrc: "/videos/Define solutions.mp4",
  },
  {
    badge: "Sales & Marketing",
    title: "Kickoff & Track Performance",
    body: "Once the plan is approved, our team gets to work immediately. We'll deliver in agile sprints, track progress with regular updates, and adapt to feedback in real time-ensuring smooth execution and measurable results.",
    chips: ["Schedule", "Budget"],
    videoSrc: "/videos/track performance .mp4",
  },
];

const industries = [
  ["Healthcare", "Patient portals, health apps, and EMR systems."],
  ["EdTech", "E-learning platforms, LMS, and virtual classrooms."],
  ["Retail", "We build efficient commerce solutions, including e-commerce portals, POS systems, and inventory tools."],
  ["FinTech", "Digital wallets, payment gateways, loan management apps."],
  ["Restaurent", "Online ordering apps, reservation systems, loyalty programs."],
  ["Real State", "We build modern real estate solutions including property listing platforms and immersive virtual tour applications."],
];

const aiSteps = [
  {
    step: "Step 1.",
    title: "Analyzing workflow",
    text: "We find where AI can save you time and boost efficiency.",
    videoSrc: "/videos/Analyzing Workflow.mp4",
  },
  {
    step: "Step 2.",
    title: "Integrating Solutions",
    text: "We connect smart AI tools into your existing systems.",
    videoSrc: "/videos/integrating solutions.mp4",
  },
  {
    step: "Step 3.",
    title: "Regular Maintenance",
    text: "We keep your AI running smooth and always up to date.",
    videoSrc: "/videos/Regular Maintenance.mp4",
  },
];

function LoopingVideo({ src, className }) {
  const videoRef = useRef(null);
  const [ratioStyle, setRatioStyle] = useState(undefined);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = false;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const recover = () => {
      if (document.visibilityState === "visible" && !video.ended && video.paused) {
        tryPlay();
      }
    };

    const onEnded = () => {
      video.currentTime = 0;
      tryPlay();
    };

    const onLoadedDataOnce = () => {
      tryPlay();
    };

    const onLoadedMetadata = () => {
      const w = video.videoWidth;
      const h = video.videoHeight;
      if (w > 0 && h > 0) {
        setRatioStyle({ "--media-ratio": `${w} / ${h}` });
      }
    };

    tryPlay();
    onLoadedMetadata();
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("loadeddata", onLoadedDataOnce, { once: true });
    video.addEventListener("ended", onEnded);
    video.addEventListener("pause", recover);
    document.addEventListener("visibilitychange", recover);
    window.addEventListener("focus", recover);
    window.addEventListener("pageshow", recover);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("loadeddata", onLoadedDataOnce);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("pause", recover);
      document.removeEventListener("visibilitychange", recover);
      window.removeEventListener("focus", recover);
      window.removeEventListener("pageshow", recover);
    };
  }, [src]);

  return (
    <div className={className} style={ratioStyle}>
      <video ref={videoRef} autoPlay muted playsInline preload="auto" aria-hidden="true">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

const clientLogos = [
  { src: "/logos/Acuity_Analytics_idwIL6acVL_1 2.png", alt: "Acuity Analytics" },
  { src: "/logos/Bathfitter 3.png", alt: "Bathfitter" },
  { src: "/logos/download-Picsart-BackgroundRemover.png", alt: "Telus" },
  { src: "/logos/hdfc-bank-logo 1.png", alt: "HDFC Bank" },
  { src: "/logos/langchain-color.png", alt: "Langchain" },
  { src: "/logos/images-Picsart-BackgroundRemover.png", alt: "AstraZeneca" },
  { src: "/logos/Rocket-Learning_New-Logo-2-Picsart-BackgroundRemover-Picsart-AiImageEnhancer 2.png", alt: "Rocket Learning" },
  { src: "/logos/Screenshot 2026-04-17 234303-Picsart-BackgroundRemover.png", alt: "Salesforce" },
  { src: "/logos/surface1.png", alt: "Agility Insights" },
  { src: "/logos/tailoreed-logo 1.png", alt: "Propic" },
  { src: "/logos/93d068_433e38f1a5de49a18691bbd9077a0f5c~mv2-Picsart-AiImageEnhancer.png", alt: "AP Consultancy" },
];

export default function HomePage() {
  const heroRevealTimerRef = useRef(null);
  const heroVideoRef = useRef(null);
  const [heroCopyReady, setHeroCopyReady] = useState(() => prefersReducedMotion());

  const scheduleHeroCopy = useCallback(() => {
    if (prefersReducedMotion()) return;
    if (heroRevealTimerRef.current !== null) return;
    heroRevealTimerRef.current = window.setTimeout(() => {
      setHeroCopyReady(true);
      heroRevealTimerRef.current = null;
    }, HERO_VIDEO_INTRO_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (heroRevealTimerRef.current !== null) {
        window.clearTimeout(heroRevealTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = window.setTimeout(() => {
      setHeroCopyReady(true);
    }, HERO_COPY_FALLBACK_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return undefined;

    // Some browsers (notably iOS Safari) require the muted state to be set as a property
    // and may still reject autoplay until `play()` is attempted.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = false;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const resumeIfVisible = () => {
      if (document.visibilityState === "visible" && !video.ended && video.paused) {
        tryPlay();
      }
    };

    const onEnded = () => {
      video.currentTime = 0;
      tryPlay();
    };

    const onLoadedDataOnce = () => {
      tryPlay();
    };

    tryPlay();
    video.addEventListener("loadeddata", onLoadedDataOnce, { once: true });
    video.addEventListener("ended", onEnded);
    video.addEventListener("pause", resumeIfVisible);
    document.addEventListener("visibilitychange", resumeIfVisible);
    window.addEventListener("focus", resumeIfVisible);
    window.addEventListener("pageshow", resumeIfVisible);

    return () => {
      video.removeEventListener("loadeddata", onLoadedDataOnce);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("pause", resumeIfVisible);
      document.removeEventListener("visibilitychange", resumeIfVisible);
      window.removeEventListener("focus", resumeIfVisible);
      window.removeEventListener("pageshow", resumeIfVisible);
    };
  }, []);

  return (
    <div className="home-exact">
      <div
        className={`hx-hero${heroCopyReady ? " hx-hero--copy-ready" : ""}`}
      >
        <video
          ref={heroVideoRef}
          className="hx-hero-video"
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlaying={scheduleHeroCopy}
        >
          <source src="/videos/hero-background.webm" type="video/webm" />
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="hx-hero-overlay" aria-hidden="true" />
        <div className="hx-hero-copy">
          <div id="home" className="hx-badge hx-hero-intro-line" style={{ "--hx-stagger": "0ms" }}>
            <span className="hx-badge-brand">AP Consultancy</span>
            <span className="hx-badge-tagline">Your Trusted IT Partner</span>
          </div>
          <h1 className="hx-hero-title">
            <span className="hx-hero-intro-line" style={{ "--hx-stagger": "90ms" }}>
              Engineered for scale.
            </span>
            <span className="hx-hero-intro-line" style={{ "--hx-stagger": "180ms" }}>
              Trusted by millions of
            </span>
            <span className="hx-hero-intro-line hx-hero-title-accent" style={{ "--hx-stagger": "270ms" }}>
              Growing Enterprises.
            </span>
          </h1>
          <p className="hx-hero-intro-line hx-hero-lead" style={{ "--hx-stagger": "400ms" }}>
            Driving digital transformation with advanced IT solutions and expert support.
          </p>
          <div className="hx-actions hx-hero-intro-line" style={{ "--hx-stagger": "530ms" }}>
            <a href="#contact" className="button">Get Started Today</a>
          </div>
        </div>
      </div>

      <RevealOnScroll className="hx-logos" delay={0}>
        <p>Over 50+ business trust us</p>
        <div className="hx-logo-marquee">
          <div className="hx-logo-track">
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div className="hx-logo-item" key={`${logo.src}-${idx}`}>
                <img src={logo.src} alt={logo.alt} loading="eager" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll id="about" className="hx-about" delay={100}>
        <h2>Who We Are</h2>
        <p>AP Consultancy is a team of innovators dedicated to making AI automation simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions.</p>
      </RevealOnScroll>

      <section className="hx-grid3">
        {stats.map((item, idx) => (
          <RevealOnScroll className="hx-card" delay={idx * 100} key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </RevealOnScroll>
        ))}
      </section>

      <RevealOnScroll className="hx-section-head" delay={100}>
        <h2>How we help you get real results with AI</h2>
      </RevealOnScroll>

      <section className="hx-ai-steps">
        {aiSteps.map((item, idx) => (
          <RevealOnScroll className="hx-ai-card" delay={idx * 90} key={item.step}>
            <p className="hx-step-label">{item.step}</p>
            <LoopingVideo src={item.videoSrc} className="hx-ai-screen" />
          </RevealOnScroll>
        ))}
      </section>

      <RevealOnScroll className="hx-section-head hx-services-head" delay={110}>
        <h2>Industries We Serve</h2>
        <p>We bring domain-specific expertise and innovative solutions to transform businesses across diverse sectors.</p>
      </RevealOnScroll>

      <section id="services" className="hx-grid3">
        {serviceCards.map((item, idx) => (
          <RevealOnScroll className="hx-card" delay={idx * 80} key={item.title}>
            <span className="hx-card-icon" aria-hidden="true">✦</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </RevealOnScroll>
        ))}
      </section>

      <RevealOnScroll className="hx-section-head" delay={120}>
        <h2>Our Process</h2>
        <p>We make working with us easy and effective. From the very first call to project launch and beyond, our process is built to deliver clarity, speed, and results.</p>
      </RevealOnScroll>

      <section className="hx-process-list">
        {processRows.map((row, idx) => (
          <RevealOnScroll className={`hx-process-row ${idx % 2 ? "reverse" : ""}`} delay={idx * 120} key={row.title}>
            <LoopingVideo src={row.videoSrc} className="hx-process-image" />
            <div>
              <span className="hx-pill">{row.badge}</span>
              <h3>{row.title}</h3>
              <p>{row.body}</p>
              <div className="hx-chip-row">
                {row.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <RevealOnScroll className="hx-section-head" delay={100}>
        <span className="hx-pill">Portfolio</span>
        <h2>See How Our Smart Solutions Transforms Businesses</h2>
      </RevealOnScroll>

      <RevealOnScroll className="hx-case" delay={120}>
        <div className="hx-case-image" />
        <div>
          <h3>"Acuity Analytics scaled digital commerce through SaaS innovation"</h3>
          <p>
            Acuity Analytics partnered with us to modernize their platform experience and improve scalability. We focused on
            a robust SaaS architecture that supports faster product updates and more reliable customer journeys.
          </p>
          <ul>
            <li>Scalable SaaS Architecture</li>
            <li>Faster Release Cycles</li>
            <li>Improved Platform Reliability</li>
            <li>Better Digital Commerce Experience</li>
          </ul>
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="hx-case-more" delay={140}>
        <Link to="/portfolio" className="button">View More</Link>
      </RevealOnScroll>

      <RevealOnScroll className="hx-section-head" delay={120}>
        <h2>Industries We Serve</h2>
        <p>Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.</p>
      </RevealOnScroll>

      <section className="hx-grid3">
        {industries.map(([title, text], idx) => (
          <RevealOnScroll className="hx-card" delay={idx * 80} key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </RevealOnScroll>
        ))}
      </section>

      <RevealOnScroll className="hx-section-head" delay={120}>
        <h2>Why Choose AP Consultancy?</h2>
        <p>We combine cutting-edge technology with proven methodologies to deliver exceptional results</p>
      </RevealOnScroll>

      <section className="hx-grid3">
        {[
          ["Scalable Solutions", "Scalable solutions designed for your business goals"],
          ["Industry Expertise", "Proven experience across Entire six key industries"],
          ["Fast Delivery", "Rapid development cycles with continuous deployment"],
        ].map(([title, text], idx) => (
          <RevealOnScroll className="hx-card" delay={idx * 100} key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </RevealOnScroll>
        ))}
      </section>

      <RevealOnScroll id="contact" className="hx-cta" delay={120}>
        <h2>Get Started Today</h2>
        <p>Contact us for a free consultation and let's shape the future of your business together.</p>
        <Link to="/contact" className="button">Contact Us</Link>
      </RevealOnScroll>
    </div>
  );
}
