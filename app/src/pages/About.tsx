import { Link } from 'react-router-dom'
import { PxBook, PxController, PxFlame, PxStar, PxUsers } from '../components/PxIcon'
import { useT } from '../i18n/I18n'

export default function About() {
  const t = useT()
  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">{t('about.eyebrow')}</span>
        <h1>{t('about.title')}</h1>

        <div className="card mt-6" style={{ background: 'var(--c-deep)' }}>
          <p style={{ fontSize: 24 }} dangerouslySetInnerHTML={{ __html: t('about.intro1.html') }} />
          <p style={{ fontSize: 24, marginTop: 16 }} dangerouslySetInnerHTML={{ __html: t('about.intro2.html') }} />
        </div>

        <h2 className="mt-8 mb-4">{t('about.pillars')}</h2>
        <div className="games-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          <Pillar icon={<PxController color="#ffcd75" size={24} />} title={t('about.engagement.title')} text={t('about.engagement.text')} />
          <Pillar icon={<PxUsers color="#f4b4c5" size={24} />} title={t('about.communication.title')} text={t('about.communication.text')} />
          <Pillar icon={<PxFlame color="#ef7d57" size={24} />} title={t('about.movement.title')} text={t('about.movement.text')} />
          <Pillar icon={<PxStar color="#a7f070" size={24} />} title={t('about.repetition.title')} text={t('about.repetition.text')} />
          <Pillar icon={<PxBook color="#73eff7" size={24} />} title={t('about.context.title')} text={t('about.context.text')} />
        </div>

        <h2 className="mt-8 mb-4">{t('about.quote')}</h2>
        <div className="quote">
          <p>{t('quote.text')}</p>
          <span className="author">{t('quote.author')}</span>
        </div>

        <div className="row mt-8">
          <Link to="/games" className="pix-btn">{t('about.cta1')}</Link>
          <Link to="/manager" className="pix-btn green">{t('about.cta2')}</Link>
        </div>
      </div>
    </section>
  )
}

function Pillar({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card">
      <div className="row mb-4">{icon} <h3 style={{ color: 'var(--c-sun)' }}>{title}</h3></div>
      <p className="muted">{text}</p>
    </div>
  )
}

