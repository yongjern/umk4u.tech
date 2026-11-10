import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  Clock3,
  ExternalLink,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Signal,
  Sparkles,
  Wifi
} from "lucide-react";

const products = [
  {
    id: "01",
    name: "UMKWifi",
    label: "Network utility",
    description: "Get connected to the campus network without the usual guesswork.",
    href: "https://wifi.umk4u.tech",
    accent: "orange",
    icon: Wifi,
    features: ["Guided Wi-Fi setup", "Device-ready instructions", "Fast troubleshooting"],
    preview: "wifi"
  },
  {
    id: "02",
    name: "MyUMK",
    label: "Student companion",
    description: "Your essential UMK information, organised into one calm place.",
    href: "https://my.umk4u.tech",
    accent: "red",
    icon: GraduationCap,
    features: ["Student-first dashboard", "Academic shortcuts", "Campus information"],
    preview: "student"
  }
] as const;

function WifiPreview() {
  return (
    <div className="product-preview wifi-preview" aria-hidden="true">
      <div className="preview-topbar"><span>UMKWifi</span><span className="status-pill"><i /> ONLINE</span></div>
      <div className="signal-stage">
        <div className="signal-rings"><span /><span /><span /><Wifi /></div>
        <p>Campus network</p><strong>Connected</strong>
      </div>
      <div className="network-row"><Signal /><span><b>UMK-STUDENT</b><small>Secure network · Excellent signal</small></span><Check /></div>
    </div>
  );
}

function StudentPreview() {
  return (
    <div className="product-preview student-preview" aria-hidden="true">
      <div className="preview-topbar"><span>MyUMK</span><span>WEEK 06 / 14</span></div>
      <div className="student-greeting"><small>TUESDAY · 10 NOV</small><strong>Good morning, Aina.</strong></div>
      <div className="next-class-mini">
        <span><Clock3 /> NEXT CLASS</span>
        <strong>Human Computer Interaction</strong>
        <small><MapPin /> DKP 2 · 10:45 AM</small>
      </div>
      <div className="mini-actions"><span><BookOpen /> Coursework</span><span><GraduationCap /> Results</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#products">Skip to products</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="UMK4U home">
            <span className="brand-mark">U4</span>
            <span className="brand-name">UMK4U</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#products">Products</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-link" href="#products">Explore tools <ArrowDown /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Independent tools for UMK students</p>
            <h1>University life,<br /><em>made simpler.</em></h1>
            <p className="hero-summary">Two focused products that remove friction from everyday campus life at Universiti Malaysia Kelantan.</p>
            <a className="primary-action" href="#products">Meet the products <ArrowDown /></a>
          </div>
          <div className="hero-system" aria-label="Two UMK4U products available">
            <div className="system-grid" />
            <div className="orbit orbit-one"><Wifi /></div>
            <div className="orbit orbit-two"><GraduationCap /></div>
            <div className="system-core"><span>02</span><small>PRODUCTS<br />ONE PURPOSE</small></div>
            <span className="coordinate coordinate-one">06.1254° N</span>
            <span className="coordinate coordinate-two">102.2375° E</span>
          </div>
          <div className="hero-footnote"><span>Built around real student needs</span><span>Scroll to discover</span></div>
        </section>

        <section className="products-section" id="products">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">The toolkit</p><h2>Small tools.<br />Meaningful difference.</h2></div>
              <p>Each product does one job well, with clear information and less time spent hunting through systems.</p>
            </div>

            <div className="product-list">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <article className={`product ${product.accent}`} key={product.name}>
                    <div className="product-index"><span>{product.id}</span><i /></div>
                    <div className="product-copy">
                      <span className="product-icon"><Icon /></span>
                      <p className="eyebrow">{product.label}</p>
                      <h3>{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <ul>
                        {product.features.map((feature) => <li key={feature}><Check /> {feature}</li>)}
                      </ul>
                      <a className="product-link" href={product.href} target="_blank" rel="noreferrer">
                        Open {product.name} <ArrowUpRight />
                      </a>
                      <span className="product-domain">{new URL(product.href).hostname}</span>
                    </div>
                    {product.preview === "wifi" ? <WifiPreview /> : <StudentPreview />}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-section shell" id="about">
          <div className="about-statement">
            <p className="eyebrow">Why UMK4U</p>
            <h2>Made close to the problem.</h2>
            <p>UMK4U is an independent student-focused initiative. We build practical digital products around the routines, questions, and frustrations students actually have.</p>
          </div>
          <div className="principles">
            <div><Sparkles /><span><strong>Focused</strong><small>One clear job per product.</small></span></div>
            <div><ShieldCheck /><span><strong>Respectful</strong><small>Useful without getting in your way.</small></span></div>
            <div><ExternalLink /><span><strong>Accessible</strong><small>Works wherever students are.</small></span></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <div><span className="brand-mark">U4</span><span><strong>UMK4U</strong><small>Built for students at Universiti Malaysia Kelantan.</small></span></div>
          <div className="footer-links"><a href="https://wifi.umk4u.tech">UMKWifi</a><a href="https://my.umk4u.tech">MyUMK</a></div>
          <p>Independent student project<br />Not an official UMK service</p>
        </div>
      </footer>
    </>
  );
}