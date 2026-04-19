import { useMemo } from 'react'
import type { CSSProperties } from 'react'
import './App.css'

function useGuest(): string | null {
  return useMemo(() => {
    if (typeof window === 'undefined') return null
    const raw = new URLSearchParams(window.location.search).get('for')
    const cleaned = raw?.replace(/\s+/g, ' ').trim()
    return cleaned && cleaned.length > 0 ? cleaned : null
  }, [])
}

function delay(seconds: number): CSSProperties {
  return { ['--d' as string]: `${seconds}s` } as CSSProperties
}

export default function App() {
  const guest = useGuest()

  return (
    <main className="page" aria-label="Engagement invitation">
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <article className="invitation">
        <div className="card-inner">
          <div className="corner corner--tl" aria-hidden="true" />
          <div className="corner corner--tr" aria-hidden="true" />
          <div className="corner corner--bl" aria-hidden="true" />
          <div className="corner corner--br" aria-hidden="true" />

          <header className="top fade" style={delay(0.05)}>
            <Sprig />
            <p className="overline">
              <span>Wedding</span>
            </p>
          </header>

          <section className="salutation fade" style={delay(0.25)}>
            {guest ? (
              <>
                <p className="salutation-label">This letter is written for</p>
                <h2 className="guest-name" title={guest}>
                  {guest}
                </h2>
                <p className="salutation-sub">
                  <em>with the warmest of affections</em>
                </p>
              </>
            ) : (
              <>
                <p className="salutation-label">A letter</p>
                <h2 className="guest-name">to our beloved</h2>
                <p className="salutation-sub hint-line">
                  <em>tip · append </em>
                  <code className="hint">?for=Oleg &amp; Julia</code>
                  <em> to personalise</em>
                </p>
              </>
            )}
          </section>

          <section className="names fade" style={delay(0.5)}>
            <p className="together">Together with their families</p>
            <h1 className="hero-names">
              <span className="name">Mykhailo</span>
              <span className="amp" aria-label="and">&amp;</span>
              <span className="name">Diana</span>
            </h1>
            <p className="invite">
              joyfully invite you to celebrate
              <br />
              the evening of their engagement
            </p>
          </section>

          <Divider />

          <section className="details fade" style={delay(0.8)}>
            <div className="detail">
              <p className="detail-label">When</p>
              <p className="detail-value">Saturday, the Twenty-Fifth of April</p>
              <p className="detail-sub">
                Two Thousand &amp; Twenty-Six
                <span className="bullet" aria-hidden="true">✦</span>
                Five o'clock in the evening
              </p>
            </div>

            <div className="detail-divider" aria-hidden="true" />

            <div className="detail">
              <p className="detail-label">Where</p>
              <a
                className="detail-value detail-location"
                href="https://maps.app.goo.gl/KCAfuD1PfechWmER9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
              >
                Riso Restaurant &amp; Terrace
              </a>
              <p className="detail-sub">
                Budapest
                <span className="bullet" aria-hidden="true">·</span>
                Hungary
              </p>
            </div>
          </section>

          <section className="rsvp-section fade" style={delay(1)}>
            <p className="closing">
              <em>Your presence is our greatest gift.</em>
            </p>
          </section>

          <footer className="foot fade" style={delay(1.15)}>
            <div className="monogram" aria-hidden="true">
              <span className="mono-letter">M</span>
              <span className="amp-small">&amp;</span>
              <span className="mono-letter">D</span>
            </div>
            <p className="foot-note">
              <span>Budapest</span>
              <span className="bullet" aria-hidden="true">·</span>
              <span>MMXXVI</span>
            </p>
          </footer>
        </div>
      </article>
    </main>
  )
}

function Sprig() {
  return (
    <svg
      className="sprig"
      viewBox="0 0 60 80"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M30 78 V 6" strokeWidth="0.6" />
      <path d="M30 60 C 18 58, 10 52, 8 42 C 18 44, 26 50, 30 58 Z" strokeWidth="0.6" fill="currentColor" fillOpacity="0.06" />
      <path d="M30 46 C 22 44, 16 40, 14 32 C 22 33, 28 37, 30 44 Z" strokeWidth="0.6" fill="currentColor" fillOpacity="0.06" />
      <path d="M30 32 C 24 30, 20 26, 19 20 C 25 21, 29 24, 30 30 Z" strokeWidth="0.6" fill="currentColor" fillOpacity="0.06" />
      <path d="M30 54 C 42 52, 50 46, 52 36 C 42 38, 34 44, 30 52 Z" strokeWidth="0.6" fill="currentColor" fillOpacity="0.06" />
      <path d="M30 40 C 38 38, 44 34, 46 26 C 38 27, 32 31, 30 38 Z" strokeWidth="0.6" fill="currentColor" fillOpacity="0.06" />
      <path d="M30 26 C 36 24, 40 20, 41 14 C 35 15, 31 18, 30 24 Z" strokeWidth="0.6" fill="currentColor" fillOpacity="0.06" />
      <circle cx="30" cy="6" r="1" fill="currentColor" />
    </svg>
  )
}

function Divider() {
  return (
    <div className="divider fade" style={delay(0.65)} aria-hidden="true">
      <svg viewBox="0 0 420 24" preserveAspectRatio="none">
        <line
          x1="0"
          y1="12"
          x2="165"
          y2="12"
          stroke="currentColor"
          strokeWidth="0.6"
          className="divider-line divider-line--l"
        />
        <g className="divider-ornament">
          <path
            d="M170 12 C 178 5, 190 5, 196 12 C 202 19, 214 19, 220 12"
            stroke="currentColor"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="210" cy="12" r="2.4" fill="currentColor" />
          <path
            d="M220 12 C 226 5, 238 5, 244 12 C 250 19, 262 19, 270 12"
            stroke="currentColor"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <line
          x1="255"
          y1="12"
          x2="420"
          y2="12"
          stroke="currentColor"
          strokeWidth="0.6"
          className="divider-line divider-line--r"
        />
      </svg>
    </div>
  )
}
