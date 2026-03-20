import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const skyboundAsset = fileName => `${import.meta.env.BASE_URL}assets/skybound/${fileName}`;
  const [showIntro, setShowIntro] = useState(true);
  const [crestClicks, setCrestClicks] = useState(0);
  const [showApexOverlay, setShowApexOverlay] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const runes = useMemo(() => ['Ae', 'Ra', 'Lith', 'Vo', 'Nyr', 'Sol'], []);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 2800);

    return () => {
      window.clearTimeout(introTimer);
    };
  }, []);

  const handleCrestClick = () => {
    setCrestClicks(value => {
      const nextValue = value + 1;
      if (nextValue >= 5) {
        setShowApexOverlay(true);
        return 0;
      }

      return nextValue;
    });
  };

  const handleMouseMove = event => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    setParallax({ x, y });
  };

  const resetParallax = () => {
    setParallax({ x: 0, y: 0 });
  };

  const scrollToSection = sectionId => event => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="skybound-home"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetParallax}
      style={{
        '--mouse-x': parallax.x,
        '--mouse-y': parallax.y,
      }}
    >
      <div className="skybound-background-orb orb-one"></div>
      <div className="skybound-background-orb orb-two"></div>
      <div className="skybound-dust"></div>

      {showIntro && (
        <section className="intro-overlay" aria-live="polite">
          <div className="intro-card">
            <p className="intro-label">AERALITH PROLOGUE</p>
            <h2>Skybound Drifters</h2>
            <p>Wind channels stabilize. Ancient runes ignite. The Gale Serpent prepares to launch.</p>
            <button type="button" onClick={() => setShowIntro(false)}>
              Skip Intro
            </button>
          </div>
        </section>
      )}

      <nav className="skybound-nav">
        <div className="nav-shell">
          <Link to="/" className="skybound-logo">
            <span className="logo-mark">⟡</span>
            Skybound Drifters
          </Link>
          <div className="nav-links">
            <a href="#story" onClick={scrollToSection('story')}>
              Story
            </a>
            <a href="#features" onClick={scrollToSection('features')}>
              Features
            </a>
            <a href="#world" onClick={scrollToSection('world')}>
              World
            </a>
            <Link to="/steam" className="steam-link-btn">
              Steam Route
            </Link>
          </div>
        </div>
      </nav>

      <header className="hero-wrap" id="story">
        <div className="hero-copy">
          <p className="eyebrow">Epic Sky Fantasy Adventure</p>
          <h1>
            Ride The Gale Serpent
            <span>Through A Shattered Sky</span>
          </h1>
          <p className="hero-desc">
            In a world of drifting islands, ancient Aeralith crystals hold the sky together. Captain your rugged skyship
            through violent wind currents, forge alliances with sky tribes, and reclaim relics before marauders plunge
            the world into the abyss.
          </p>
          <div className="hero-cta">
            <a href="#world" onClick={scrollToSection('world')} className="btn-primary">
              Watch Story Teaser
            </a>
            <Link to="/steam" className="btn-ghost">
              View Steam Route
            </Link>
          </div>
        </div>

        <div className="hero-tilt-shell">
          <div
            className="hero-visual"
            onClick={handleCrestClick}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleCrestClick();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <img src={skyboundAsset('hero-crest.jpg')} alt="Luminous clouds over floating island peaks" />
            <div className="hero-overlay">
              <p>The Gale Serpent // Wind Channel: Unstable</p>
              <small>Tap the ship crest 5 times</small>
            </div>
          </div>
        </div>
      </header>

      {showApexOverlay && (
        <section className="apex-easter-egg-overlay" aria-live="assertive" role="dialog" aria-modal="true">
          <div className="apex-easter-egg-panel">
            <p className="apex-badge">Apex Transmission</p>
            <h2>Apex Systems rules</h2>
            <p className="apex-main-line">The MDC team is the best in the Universe.</p>
            <div className="apex-cumbia-stage" aria-label="Animated dancing cumbia character">
              <span className="apex-cumbia-character" role="img" aria-label="dancing cumbia character">
                🕺
              </span>
              <span className="apex-cumbia-shadow" aria-hidden="true"></span>
            </div>
            <button type="button" onClick={() => setShowApexOverlay(false)}>
              Continue Adventure
            </button>
          </div>
        </section>
      )}

      <section className="runes-band" aria-label="Ancient runes">
        {runes.map(rune => (
          <span key={rune}>{rune}</span>
        ))}
      </section>

      <section className="feature-section" id="features">
        <div className="section-head">
          <p className="eyebrow">What Awaits You</p>
          <h2>Sky-Forged Adventures Across The Aeralith Frontier</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Skyship Mastery</h3>
            <p>
              Pilot The Gale Serpent through razorwind storms, vertical vortexes, and collapsing island lanes with
              physics-driven navigation.
            </p>
          </article>
          <article className="feature-card">
            <h3>Tribe Alliances</h3>
            <p>
              Broker peace or rivalry with cloud nomads, rune archivists, and stormforged clans. Every pact changes your
              routes and support.
            </p>
          </article>
          <article className="feature-card">
            <h3>Relic Expeditions</h3>
            <p>
              Explore forbidden ruins in the upper thermals, decode ancient scripts, and restore dormant Aeralith
              conduits before they fade forever.
            </p>
          </article>
          <article className="feature-card">
            <h3>Marauder Hunt</h3>
            <p>
              Defend drifting cities from dark sky raiders whose crystal thefts destabilize the world one island at a
              time.
            </p>
          </article>
        </div>
      </section>

      <section className="world-section" id="world">
        <div className="section-head">
          <p className="eyebrow">Cinematic World</p>
          <h2>Glowing Horizons, Ancient Ruins, And Winds That Never Sleep</h2>
        </div>

        <div className="media-layout">
          <figure className="media-tall">
            <img src={skyboundAsset('world-airship.jpg')} alt="Airship crossing dramatic cloud layers" />
          </figure>
          <figure className="media-card">
            <img src={skyboundAsset('world-ruins.jpg')} alt="Ancient ruins glowing in warm sunset light" />
          </figure>
          <figure className="media-card">
            <img src={skyboundAsset('world-mystic.jpg')} alt="Floating lights and mystical sky atmosphere" />
          </figure>
          <figure className="media-wide">
            <img src={skyboundAsset('world-peak.jpg')} alt="Epic mountain skyline above the clouds" />
          </figure>
        </div>
      </section>

      <section className="quote-banner">
        <p>"When the Aeralith fades, even the sky forgets how to hold us."</p>
        <span>Captain of The Gale Serpent</span>
      </section>

      <footer className="skybound-footer">
        <div>
          <h3>Skybound Drifters</h3>
          <p>High adventure among the floating isles.</p>
        </div>
        <div className="footer-actions">
          <Link to="/steam">Visit Steam Route</Link>
          <a href="#story" onClick={scrollToSection('story')}>
            Back To Top
          </a>
        </div>
      </footer>
    </div>
  );
}
