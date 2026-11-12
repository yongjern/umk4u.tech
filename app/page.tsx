import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  Clock3,
  GraduationCap,
  MapPin,
  Signal,
  Wifi
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function WifiPreview() {
  return (
    <div className="app-window wifi-preview" role="img" aria-label="UMKWifi connection interface">
      <div className="window-bar">
        <span><i /><i /><i /></span>
        <b>wifi.umk4u.tech</b>
        <span className="window-state"><i /> Online</span>
      </div>
      <div className="signal-stage">
        <div className="signal-rings"><span /><span /><span /><Wifi /></div>
        <p>Campus network</p>
        <strong>You are connected</strong>
      </div>
      <div className="network-row">
        <Signal />
        <span><b>UMK-STUDENT</b><small>Secure network · Excellent signal</small></span>
        <Check />
        <em>Ready</em>
      </div>
    </div>
  );
}

function StudentPreview() {
  return (
    <div className="app-window student-preview" role="img" aria-label="MyUMK student dashboard interface">
      <div className="window-bar">
        <span><i /><i /><i /></span>
        <b>my.umk4u.tech</b>
        <span>Week 06 / 14</span>
      </div>
      <div className="student-shell">
        <aside><Image src="/logo_hq.png" alt="" width={32} height={32} /><span /><span /><span /><span /></aside>
        <div className="student-content">
          <div className="student-greeting"><small>Tuesday · 10 November</small><strong>Good morning, Aina.</strong></div>
          <div className="next-class-mini">
            <span><Clock3 /> Next class · 10:45 AM</span>
            <strong>Human Computer Interaction</strong>
            <small><MapPin /> DKP 2</small>
          </div>
          <div className="mini-actions"><span><BookOpen /> Coursework</span><span><GraduationCap /> Results</span></div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="skip-link" href="#top">Skip to content</a>
          <a className="brand" href="#top" aria-label="UMK4U home">
            <Image className="brand-mark" src="/logo_hq.png" alt="" width={40} height={40} priority />
            <span className="brand-name">UMK4U</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#umkwifi">UMKWifi</a>
            <a href="#myumk">MyUMK</a>
            <Link href="/blog">Blog</Link>
            <a href="#about">About</a>
          </nav>
          <a className="header-link" href="#umkwifi">See the tools <ArrowDown /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="shell hero-inner" data-enter>
            <div className="hero-copy">
              <p className="kicker">Independent student project · Universiti Malaysia Kelantan</p>
              <h1>Student tools<br />for UMK.</h1>
              <p className="hero-summary">Two web products for the tasks students repeat: connecting to campus Wi-Fi and finding university information.</p>
              <a className="primary-action" href="#umkwifi">See the tools <ArrowDown /></a>
            </div>
            <div className="hero-product-map" aria-label="UMK4U includes UMKWifi and MyUMK">
              <div className="map-line" />
              <a href="#umkwifi" className="map-product wifi-node"><span><Wifi /></span><b>UMKWifi</b><small>Campus connection</small></a>
              <a href="#myumk" className="map-product myumk-node"><span><GraduationCap /></span><b>MyUMK</b><small>Student information</small></a>
              <div className="map-core"><Image src="/logo_hq.png" alt="" width={72} height={72} /><span>2 products<br />1 student project</span></div>
            </div>
            <p className="hero-fact"><b>02</b><span>products available<br />on the web</span></p>
          </div>
        </section>

        <section className="product-section product-wifi section" id="umkwifi">
          <div className="shell product-grid">
            <div className="product-copy">
              <p className="section-number">01 / 02</p>
              <span className="product-icon"><Wifi /></span>
              <h2>Connect to UMK Wi-Fi.</h2>
              <p>UMKWifi puts the campus connection steps in one place, with instructions that work across common student devices.</p>
              <ul>
                <li><Check /> Follow the setup for your device</li>
                <li><Check /> Check the network details</li>
                <li><Check /> Fix common connection problems</li>
              </ul>
              <a className="product-link" href="https://wifi.umk4u.tech" target="_blank" rel="noreferrer">Open UMKWifi <ArrowUpRight /></a>
            </div>
            <WifiPreview />
          </div>
        </section>

        <section className="product-section product-myumk section" id="myumk">
          <div className="shell product-grid">
            <div className="product-copy">
              <p className="section-number">02 / 02</p>
              <span className="product-icon"><GraduationCap /></span>
              <h2>Keep student information close.</h2>
              <p>MyUMK brings academic links and useful campus information into one student-first dashboard.</p>
              <ul>
                <li><Check /> See the next class at a glance</li>
                <li><Check /> Reach coursework and results</li>
                <li><Check /> Find frequently used UMK links</li>
              </ul>
              <a className="product-link" href="https://my.umk4u.tech" target="_blank" rel="noreferrer">Open MyUMK <ArrowUpRight /></a>
            </div>
            <StudentPreview />
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="shell about-grid">
            <div className="about-heading">
              <p className="section-number">About UMK4U</p>
              <h2>Built from student routines.</h2>
            </div>
            <div className="about-copy">
              <p>UMK4U is an independent student project. It is built around the small tasks that take more time than they should during university life.</p>
              <p>The products are not official Universiti Malaysia Kelantan services. They are focused tools made for the UMK student community.</p>
              <div className="about-links"><a href="https://wifi.umk4u.tech">Open UMKWifi <ArrowUpRight /></a><a href="https://my.umk4u.tech">Open MyUMK <ArrowUpRight /></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="closing">
        <div className="shell footer-inner">
          <div className="footer-close"><h2>Two tools for<br />your next task.</h2><a className="primary-action" href="#umkwifi">See the tools <ArrowUpRight /></a></div>
          <div className="footer-directory">
            <a className="brand" href="#top"><Image className="brand-mark" src="/logo_hq.png" alt="" width={40} height={40} /><span className="brand-name">UMK4U</span></a>
            <div className="footer-links"><a href="https://wifi.umk4u.tech">UMKWifi</a><a href="https://my.umk4u.tech">MyUMK</a><Link href="/blog">Blog</Link><a href="#about">About</a></div>
            <p>Independent student project<br />Not an official UMK service</p>
          </div>
        </div>
      </footer>
    </>
  );
}
