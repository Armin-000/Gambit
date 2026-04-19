import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock3,
  ShieldCheck,
  ArrowRight,
  Droplets,
  Wrench,
  Bath,
  Flame,
  TimerReset,
  Award,
  HeartHandshake,
  Sparkles,
  Mail,
  BadgeCheck,
  SunMedium,
  Building2,
} from "lucide-react";
import "./App.css";

const navItems = [
  { label: "O nama", href: "#o-nama" },
  { label: "Usluge", href: "#usluge" },
  { label: "Zašto nas", href: "#zasto-nas" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  {
    icon: Droplets,
    title: "Vodoinstalacije",
    text: "Izvedba vodovodnih i odvodnih instalacija u novogradnji, adaptacijama i poslovnim objektima.",
  },
  {
    icon: Flame,
    title: "Sustavi grijanja",
    text: "Ugradnja i izvedba sustava centralnog grijanja za stambene i poslovne prostore.",
  },
  {
    icon: Flame,
    title: "Podno grijanje",
    text: "Ugradnja podnog grijanja kao funkcionalnog rješenja za ravnomjernu raspodjelu topline u prostoru.",
  },
  {
    icon: Flame,
    title: "Plinske instalacije",
    text: "Izvođenje i prilagodba plinskih instalacija u skladu s tehničkim zahtjevima i važećim propisima.",
  },
  {
    icon: SunMedium,
    title: "Solarni sustavi",
    text: "Ugradnja solarnih sustava za pripremu tople vode i podršku sustavima grijanja.",
  },
  {
    icon: Building2,
    title: "Kotlovnice",
    text: "Izvedba, opremanje i povezivanje kotlovnica sa sustavima grijanja i pripadajućim instalacijama.",
  },
  {
    icon: Bath,
    title: "Renovacija kupaonica",
    text: "Kompletna izvedba kupaonica, uključujući instalacije, sanitarije i pripremu prostora za završne radove.",
  },
  {
    icon: Wrench,
    title: "Sanitarije i oprema",
    text: "Ugradnja i zamjena sanitarne opreme, armatura, bojlera i drugih elemenata instalacijskog sustava.",
  },
  {
    icon: TimerReset,
    title: "Održavanje i tehnička podrška",
    text: "Stručna tehnička podrška, redovni servisi i sanacija kvarova uz dugoročnu pouzdanost sustava.",
  },
];

const reasons = [
  {
    icon: Clock3,
    title: "Poštivanje rokova",
    text: "Radovi se izvode u skladu s dogovorenim rokovima i planiranom dinamikom.",
  },
  {
    icon: HeartHandshake,
    title: "Odgovoran pristup",
    text: "Svakom projektu pristupa se pažljivo, uz uvažavanje potreba prostora i investitora.",
  },
  {
    icon: ShieldCheck,
    title: "Pouzdana izvedba",
    text: "Radovi se temelje na iskustvu, tehničkom znanju i provjerenim rješenjima.",
  },
  {
    icon: Sparkles,
    title: "Urednost na radu",
    text: "Tijekom izvođenja radova vodi se računa o urednosti i organizaciji prostora.",
  },
];

const aboutFeatures = [
  {
    icon: Award,
    title: "Iskustvo",
    text: "Dugogodišnje iskustvo u izvođenju instalaterskih radova na različitim vrstama objekata.",
  },
  {
    icon: BadgeCheck,
    title: "Provjereni materijali",
    text: "Korištenje kvalitetnih materijala i opreme prilagođenih namjeni sustava.",
  },
  {
    icon: HeartHandshake,
    title: "Suradnja s klijentima",
    text: "Jasna komunikacija i dogovor tijekom svih faza izvođenja radova.",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "Zorzići 42e, Viškovo, 51216",
    href: "https://maps.google.com/?q=Zorzici+42e+Viskovo",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+385 99 213 0174",
    href: "tel:+385992130174",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "gambitinstalacije@gmail.com",
    href: "mailto:gambitinstalacije@gmail.com",
  },
  {
    icon: Clock3,
    label: "Radno vrijeme",
    value: "Pon – Pet: 08:00 – 16:00",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <div className="logo">
              <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#3B88C3"
                  d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"
                />
                <path
                  fill="#FFF"
                  d="M25.66 15.915c1.953 0 2.729.992 2.729 2.977c0 5.984-3.906 10.48-10.108 10.48c-6.294 0-10.666-4.992-10.666-11.41c0-6.449 4.341-11.41 10.666-11.41c4.682 0 8.526 2.201 8.526 4.372c0 1.333-.836 2.17-1.922 2.17c-2.108 0-2.542-2.263-6.604-2.263c-3.875 0-5.829 3.379-5.829 7.131c0 3.782 1.892 7.132 5.829 7.132c2.45 0 5.272-1.365 5.272-4.899h-3.164c-1.271 0-2.17-.899-2.17-2.17c0-1.302.992-2.108 2.17-2.108h5.271z"
                />
              </svg>
            </div>
            <div className="brand-text">
              <div className="brand-title">Gambit</div>
              <div className="brand-subtitle">INSTALACIJE D.O.O</div>
            </div>
          </a>

          <nav className="nav desktop-nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="tel:+385992130174" className="phone-link desktop-phone">
              <Phone size={16} />
              <span>Nazovite nas</span>
            </a>

            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28 }}
            >
              <div className="mobile-menu-top">
                <div className="mobile-menu-brand">Izbornik</div>
                <button
                  className="mobile-close-btn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Zatvori izbornik"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="mobile-nav">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mobile-menu-contact">
                <a href="tel:+385992130174" className="mobile-contact-link">
                  <Phone size={16} />
                  <span>+385 99 213 0174</span>
                </a>
                <a
                  href="mailto:gambitinstalacije@gmail.com"
                  className="mobile-contact-link"
                >
                  <Mail size={16} />
                  <span>gambitinstalacije@gmail.com</span>
                </a>
              </div>

              <a href="#kontakt" className="btn btn-primary mobile-menu-btn">
                Zatraži ponudu
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main id="top">
        <section className="hero">
          <div className="hero-overlay" />
          <div className="container hero-inner">
            <motion.div
              className="hero-content"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.7 }}
            >
              <div className="hero-badge">
                <ShieldCheck size={15} />
                <span>25 godina rada i iskustva</span>
              </div>

              <h1 className="hero-title">
                Instalaterske usluge
                <span>za stambene i poslovne objekte.</span>
              </h1>

              <p className="hero-text">
                Gambit Instalacije d.o.o. pruža usluge vodoinstalacija, sustava
                grijanja, podnog grijanja, plinskih instalacija, solarnih
                sustava, kotlovnica i sanitarnih rješenja uz pouzdan i
                profesionalan pristup radu.
              </p>

              <div className="hero-buttons">
                <a href="#kontakt" className="btn btn-primary">
                  Zatraži ponudu
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-value">25+</div>
                  <div className="stat-label">godina iskustva</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">1.500+</div>
                  <div className="stat-label">izvedenih radova</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">Rijeka</div>
                  <div className="stat-label">i okolica</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="o-nama" className="section light-section">
          <div className="container about-grid">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="about-image-wrap"
            >
              <img
                className="about-image"
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"
                alt="Moderna kupaonica"
              />
              <div className="about-floating-card">
                <div className="floating-number">25</div>
                <div className="floating-title">Godina rada</div>
                <div className="floating-subtitle">Rijeka i okolica</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="about-content"
            >
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>O nama</span>
              </div>

              <h2 className="section-title">
                Dugogodišnje iskustvo
                <br />
                i pouzdan pristup radu.
              </h2>

              <p className="section-text">
                Gambit Instalacije d.o.o. je tvrtka iz Saršona kraj Rijeke koja
                se više od četrdeset godina bavi izvođenjem vodoinstalaterskih
                radova, sustava grijanja, plinskih instalacija i uređenjem
                sanitarnih prostora.
              </p>

              <p className="section-text">
                Radovi se izvode na novogradnji, adaptacijama i postojećim
                objektima, uz fokus na funkcionalnost, sigurnost i trajnost
                ugrađenih sustava.
              </p>

              <div className="about-features">
                {aboutFeatures.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="feature-row">
                      <div className="feature-icon-box light-icon-box">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="feature-title">{item.title}</h3>
                        <p className="feature-text">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="usluge" className="section light-section">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="section-head section-head-left"
            >
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>Usluge</span>
              </div>

              <h2 className="section-title">
                Instalaterski radovi
                <br />
                za različite vrste objekata.
              </h2>

              <p className="section-text section-text-wide">
                U ponudi su vodoinstalaterski radovi, grijanje, plinske
                instalacije, solarni sustavi, kotlovnice, sanitarna oprema te
                održavanje.
              </p>
            </motion.div>

            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="service-card"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                  >
                    <div className="service-icon">
                      <Icon size={22} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-text">{service.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="zasto-nas" className="section reasons-section">
          <div className="reasons-overlay" />
          <div className="container reasons-inner">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="section-head section-head-left reasons-head"
            >
              <div className="section-kicker">
                <span className="kicker-line" />
                <span>Zašto nas</span>
              </div>

              <h2 className="section-title section-title-white">
                Jasna organizacija rada
                <br />
                i izvedba prema dogovoru.
              </h2>

              <p className="section-text section-text-white section-text-wide">
                U radu se naglasak stavlja na odgovornost, tehničku ispravnost,
                urednost i dobru komunikaciju tijekom izvođenja projekta.
              </p>
            </motion.div>

            <div className="reasons-grid">
              {reasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="reason-card"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <div className="reason-icon">
                      <Icon size={18} />
                    </div>
                    <h3 className="reason-title">{item.title}</h3>
                    <p className="reason-text">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="kontakt" className="section light-section">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="section-head section-head-center"
            >
              <div className="section-kicker section-kicker-center">
                <span className="kicker-line" />
                <span>Kontakt</span>
              </div>

              <h2 className="section-title section-title-center">
                Kontakt za ponude
                <br />
                i dogovor radova.
              </h2>

              <p className="section-text section-text-center section-text-wide center-text-block">
                Za ponude, informacije i dogovor izvođenja radova, javite nam se
                putem telefona, e-maila ili posjetite lokaciju prema dogovoru.
              </p>
            </motion.div>

            <div className="contact-grid">
              <div className="contact-info">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="feature-icon-box light-icon-box">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="contact-label">{item.label}</div>
                        <div className="contact-value">{item.value}</div>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="contact-card contact-card-link"
                      target={item.label === "Adresa" ? "_blank" : undefined}
                      rel={item.label === "Adresa" ? "noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="contact-card">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="contact-cta-card">
                <div className="contact-cta-badge">
                  <BadgeCheck size={16} />
                  <span>Brz kontakt za ponude</span>
                </div>

                <h3 className="contact-cta-title">
                  Trebate ponudu ili
                  <br />
                  dogovor izvođenja?
                </h3>

                <p className="contact-cta-text">
                  Kontaktirajte nas izravno i u kratkom roku dogovorite termin,
                  procjenu radova ili dodatne informacije o uslugama.
                </p>

                <a
                  href="tel:+385992130174"
                  className="btn btn-primary contact-cta-button"
                >
                  <Phone size={16} />
                  Nazovite odmah
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-content">
              <div className="footer-left">
                <a href="#top" className="footer-brand-wrap">
                  <div className="logo footer-logo">
                    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="#3B88C3"
                        d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"
                      />
                      <path
                        fill="#FFF"
                        d="M25.66 15.915c1.953 0 2.729.992 2.729 2.977c0 5.984-3.906 10.48-10.108 10.48c-6.294 0-10.666-4.992-10.666-11.41c0-6.449 4.341-11.41 10.666-11.41c4.682 0 8.526 2.201 8.526 4.372c0 1.333-.836 2.17-1.922 2.17c-2.108 0-2.542-2.263-6.604-2.263c-3.875 0-5.829 3.379-5.829 7.131c0 3.782 1.892 7.132 5.829 7.132c2.45 0 5.272-1.365 5.272-4.899h-3.164c-1.271 0-2.17-.899-2.17-2.17c0-1.302.992-2.108 2.17-2.108h5.271z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="footer-brand">Gambit Instalacije d.o.o.</div>
                    <div className="footer-note">Vodoinstalacije, grijanje i sanitarna rješenja</div>
                  </div>
                </a>
              </div>

              <div className="footer-center">
                <a href="#o-nama" className="footer-link">O nama</a>
                <a href="#usluge" className="footer-link">Usluge</a>
                <a href="#zasto-nas" className="footer-link">Zašto nas</a>
                <a href="#kontakt" className="footer-link">Kontakt</a>
              </div>

              <div className="footer-right">
                <a href="tel:+385992130174" className="footer-link">+385 99 213 0174</a>
                <a href="mailto:gambitinstalacije@gmail.com" className="footer-link">
                  gambitinstalacije@gmail.com
                </a>
                <span className="footer-text">Zorzići 42e, Viškovo</span>
              </div>
            </div>

            <div className="footer-bottom">
              <span className="footer-text">
                © {new Date().getFullYear()} Gambit Instalacije d.o.o. Sva prava pridržana.
              </span>
              <a href="#top" className="footer-back-top">
                Povratak na vrh
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}