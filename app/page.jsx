"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bentoItems = [
  {
    title: "Brand systems that stay usable after launch.",
    text: "Naming, visual direction, and reusable rules for teams that move quickly.",
    image: "https://picsum.photos/seed/northline-brand-system/1200/900",
    className: "bentoItem bentoLarge",
  },
  {
    title: "Websites shaped around the first impression.",
    text: "Editorial pages, product stories, and focused landing experiences.",
    image: "https://picsum.photos/seed/northline-editorial-web/900/650",
    className: "bentoItem bentoWide",
  },
  {
    title: "Launch assets for every channel.",
    text: "Social crops, campaign visuals, and light motion systems with one voice.",
    image: "https://picsum.photos/seed/northline-launch-assets/900/900",
    className: "bentoItem bentoMedium",
  },
  {
    title: "Clear handoff.",
    text: "Simple documentation, tidy files, and practical guidance for the client team.",
    image: "https://picsum.photos/seed/northline-handoff/900/900",
    className: "bentoItem bentoSmall",
  },
];

const workflowItems = [
  {
    title: "We define the signal.",
    text: "A short discovery pass turns scattered notes into a practical creative brief.",
    image: "https://picsum.photos/seed/northline-notes/1200/900",
  },
  {
    title: "We build the core system.",
    text: "Typography, color, imagery, and motion are tested together before the site expands.",
    image: "https://picsum.photos/seed/northline-system/1200/900",
  },
  {
    title: "We prepare the launch.",
    text: "The final package includes page structure, content guidance, and reusable design patterns.",
    image: "https://picsum.photos/seed/northline-launch/1200/900",
  },
];

const marqueeItems = [
  "Identity",
  "Web",
  "Launch",
  "Motion",
  "Editorial",
  "Systems",
];

const stats = [
  { value: 48, suffix: "+", label: "Launches shipped since 2019." },
  { value: 12, suffix: " wk", label: "Average engagement, brief to live." },
  { value: 96, suffix: "%", label: "Of clients return for a follow-on." },
  { value: 4, suffix: "", label: "People in the studio, on every project." },
];

export default function Home() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".navShell", {
        y: -24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".heroKicker, .heroTitle, .heroCopy, .heroActions", {
        y: 36,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".heroImage", {
        scale: 0.88,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      });

      gsap.utils.toArray(".revealWord").forEach((word) => {
        gsap.fromTo(
          word,
          { opacity: 0.16 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: ".wordReveal",
              start: "top 75%",
              end: "bottom 45%",
              scrub: true,
            },
          },
        );
      });

      ScrollTrigger.matchMedia({
        "(min-width: 900px)": () => {
          ScrollTrigger.create({
            trigger: ".workflow",
            start: "top top",
            end: "bottom bottom",
            pin: ".workflowIntro",
            pinSpacing: false,
          });
        },
      });

      gsap.utils.toArray(".statValue").forEach((node) => {
        const target = Number(node.dataset.value);
        const counter = { current: 0 };
        gsap.to(counter, {
          current: target,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 82%",
            once: true,
          },
          onUpdate: () => {
            node.firstChild.nodeValue = Math.round(counter.current).toString();
          },
        });
      });

      gsap.from(".statItem", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".statsSection",
          start: "top 80%",
          once: true,
        },
      });

      gsap.utils.toArray(".workflowVisual").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.82, opacity: 0.55 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: image,
              start: "top 80%",
              end: "bottom 35%",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <main ref={root} className="siteShell">
      <nav className="navShell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Northline Studio home">
          Northline
        </a>
        <div className="navLinks">
          <a href="#compose">Services</a>
          <a href="#workflow">Process</a>
          <a href="#start">Contact</a>
        </div>
        <a className="navAction" href="#start">
          Inquire
        </a>
      </nav>

      <section id="top" className="heroSection">
        <div className="heroContent">
          <p className="heroKicker">Independent digital studio</p>
          <h1 className="heroTitle">
            <span>Quiet brands</span>
            <span>with a clear</span>
            <span>digital rhythm.</span>
          </h1>
          <p className="heroCopy">
            Northline Studio designs identities, websites, and launch systems
            for founders who need their first impression to feel considered.
          </p>
          <div className="heroActions">
            <a className="buttonPrimary" href="#compose">
              View services
            </a>
            <a className="buttonGhost" href="#start">
              Start a project
            </a>
          </div>
        </div>
        <div className="heroImageWrap" aria-hidden="true">
          <img
            className="heroImage"
            src="https://picsum.photos/seed/northline-studio-light/1500/1900"
            alt=""
          />
        </div>
      </section>

      <section id="compose" className="introSection">
        <p className="wordReveal" aria-label="We shape simple systems that make new companies easier to recognize, explain, and trust.">
          {"We shape simple systems that make new companies easier to recognize, explain, and trust."
            .split(" ")
            .map((word, index) => (
              <span className="revealWord" key={`${word}-${index}`}>
                {word}
              </span>
            ))}
        </p>
      </section>

      <section className="bentoSection" aria-labelledby="compose-heading">
        <div className="sectionHeader">
          <h2 id="compose-heading">Services for the first real version.</h2>
          <p>
            Strategy, identity, interface, and launch materials are treated as
            one connected system.
          </p>
        </div>

        <div className="bentoGrid">
          {bentoItems.map((item) => (
            <article className={item.className} key={item.title}>
              <div className="bentoMedia" aria-hidden="true">
                <img src={item.image} alt="" />
              </div>
              <div className="bentoCopy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statsSection" aria-label="Studio at a glance">
        <ol className="statsGrid">
          {stats.map((stat) => (
            <li className="statItem" key={stat.label}>
              <p className="statNumber">
                <span className="statValue" data-value={stat.value}>
                  {"0"}
                </span>
                <span className="statSuffix">{stat.suffix}</span>
              </p>
              <p className="statLabel">{stat.label}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="workflow" className="workflow">
        <div className="workflowIntro">
          <h2>A calm process for sharper launches.</h2>
          <p>
            Northline keeps the team small, the timeline clear, and the work
            focused on decisions that survive launch week.
          </p>
        </div>
        <div className="workflowStack">
          {workflowItems.map((item) => (
            <article className="workflowItem" key={item.title}>
              <div className="workflowVisualWrap">
                <img className="workflowVisual" src={item.image} alt="" />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="marqueeSection" aria-label="Studio services">
        <div className="marqueeTrack">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <footer id="start" className="footerSection">
        <div>
          <h2>Bring the next launch into focus.</h2>
          <p>
            Tell us what you are building, where the story feels unclear, and
            what needs to be ready for launch.
          </p>
        </div>
        <a className="buttonPrimary footerButton" href="#top">
          Return to top
        </a>
      </footer>
    </main>
  );
}
