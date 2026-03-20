import { Link } from 'react-router-dom';
import './Steam.css';

export default function Steam() {
  const skyboundAsset = fileName => `${import.meta.env.BASE_URL}assets/skybound/${fileName}`;
  const tags = ['Open World', 'Action RPG', 'Airship Combat', 'Adventure', 'Story Rich', 'Fantasy'];

  const screenshots = [
    skyboundAsset('world-peak.jpg'),
    skyboundAsset('hero-crest.jpg'),
    skyboundAsset('world-mystic.jpg'),
    skyboundAsset('world-airship.jpg'),
  ];

  return (
    <div className="steam-route-page">
      <header className="steam-route-header">
        <div className="steam-route-shell">
          <h1>STEAM STORE</h1>
          <Link to="/" className="steam-route-back">
            Back To Official Site
          </Link>
        </div>
      </header>

      <main className="steam-route-main">
        <section className="steam-game-hero">
          <img src={skyboundAsset('world-ruins.jpg')} alt="Skybound Drifters key art with floating ruins" />
          <div className="steam-game-hero-overlay">
            <p>Now Available</p>
            <h2>Skybound Drifters</h2>
            <span>Ancient skies. Dangerous currents. One ship against the abyss.</span>
          </div>
        </section>

        <section className="steam-columns">
          <article className="steam-left">
            <h3>About This Game</h3>
            <p>
              Command The Gale Serpent, a battle-worn skyship navigating the fractured heavens. Recover lost Aeralith
              relics, secure alliances with sky tribes, and stop marauders from collapsing the floating world into ruin.
            </p>

            <div className="steam-tag-list">
              {tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <h4>Screenshots</h4>
            <div className="steam-shot-grid">
              {screenshots.map((src, index) => (
                <figure key={src}>
                  <img src={src} alt={`Skybound Drifters screenshot ${index + 1}`} />
                </figure>
              ))}
            </div>

            <h4>System Requirements</h4>
            <div className="steam-req-grid">
              <div>
                <h5>Minimum</h5>
                <ul>
                  <li>OS: Windows 10 64-bit</li>
                  <li>CPU: Intel Core i5-9600K</li>
                  <li>RAM: 12 GB</li>
                  <li>GPU: GTX 1660 Ti</li>
                  <li>Storage: 55 GB</li>
                </ul>
              </div>
              <div>
                <h5>Recommended</h5>
                <ul>
                  <li>OS: Windows 11 64-bit</li>
                  <li>CPU: Intel Core i7-12700K</li>
                  <li>RAM: 16 GB</li>
                  <li>GPU: RTX 3070</li>
                  <li>Storage: 55 GB SSD</li>
                </ul>
              </div>
            </div>
          </article>

          <aside className="steam-right">
            <div className="purchase-panel">
              <img src={skyboundAsset('steam-poster.jpg')} alt="Skyship silhouette in the sky" />
              <div className="purchase-copy">
                <p>Skybound Drifters</p>
                <span>Base Game</span>
              </div>
              <div className="price-row">
                <strong>$39.99</strong>
                <button type="button">Add to Cart</button>
              </div>
            </div>

            <div className="meta-panel">
              <div className="meta-item">
                <span>Release Date</span>
                <strong>March 19, 2026</strong>
              </div>
              <div className="meta-item">
                <span>Developer</span>
                <strong>Aeralith Forge Studio</strong>
              </div>
              <div className="meta-item">
                <span>Reviews</span>
                <strong>Very Positive (94%)</strong>
              </div>
              <div className="meta-item">
                <span>Languages</span>
                <strong>EN, ES, FR, JP, DE</strong>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="steam-route-footer">
        <p>
          2026 Aeralith Forge Studio. Steam and the Steam logo are trademarks and/or registered trademarks of Valve
          Corporation.
        </p>
      </footer>
    </div>
  );
}
