import { Link } from 'react-router-dom'
import { GAMES, gameTitle, gameTopic } from '../data/games'
import { getScene } from '../components/scenes'
import { PxArrow, PxBook, PxController, PxFlame, PxSpark, PxStar, PxUsers } from '../components/PxIcon'
import { useLang, useT } from '../i18n/I18n'

const HeroStage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shapeRendering="crispEdges" preserveAspectRatio="xMidYMid slice">
    {/* === Утреннее небо над Алматы === */}
    <rect x="0" y="0" width="64" height="4" fill="#1a1c2c" />
    <rect x="0" y="4" width="64" height="6" fill="#29274c" />
    <rect x="0" y="10" width="64" height="4" fill="#5d275d" />
    <rect x="0" y="14" width="64" height="4" fill="#b13e53" />
    <rect x="0" y="18" width="64" height="4" fill="#ef7d57" />
    <rect x="0" y="22" width="64" height="4" fill="#ffcd75" />

    {/* Звёзды на угасающем ночном небе */}
    <g fill="#f4f0e6">
      <rect x="4" y="2" width="1" height="1" />
      <rect x="14" y="3" width="1" height="1" />
      <rect x="24" y="1" width="1" height="1" />
      <rect x="40" y="2" width="1" height="1" />
      <rect x="54" y="4" width="1" height="1" />
    </g>

    {/* Восходящее солнце */}
    <g fill="#ffe066">
      <rect x="48" y="10" width="8" height="6" />
      <rect x="47" y="11" width="10" height="4" />
      <rect x="49" y="9" width="6" height="1" />
      <rect x="49" y="16" width="6" height="1" />
    </g>
    <rect x="50" y="11" width="4" height="4" fill="#fff6c9" />

    {/* Утренние облака — рассветно-розовые */}
    <g fill="#f4b4c5" opacity="0.85">
      <rect x="3" y="9" width="9" height="2" />
      <rect x="2" y="10" width="11" height="1" />
      <rect x="22" y="6" width="10" height="2" />
      <rect x="21" y="7" width="12" height="1" />
      <rect x="36" y="12" width="8" height="2" />
      <rect x="35" y="13" width="10" height="1" />
    </g>

    {/* === Дальний хребет Заилийского Алатау === */}
    <g fill="#5d275d">
      {/* Левая вершина */}
      <rect x="0"  y="30" width="14" height="14" />
      <rect x="2"  y="28" width="10" height="2" />
      <rect x="4"  y="26" width="6"  height="2" />
      <rect x="6"  y="24" width="2"  height="2" />
      {/* Главная высокая вершина (Талгар / Пик Молодёжный) */}
      <rect x="10" y="28" width="18" height="16" />
      <rect x="12" y="24" width="14" height="4" />
      <rect x="14" y="20" width="10" height="4" />
      <rect x="16" y="18" width="6"  height="2" />
      <rect x="18" y="16" width="2"  height="2" />
      {/* Средняя вершина */}
      <rect x="22" y="28" width="20" height="16" />
      <rect x="26" y="26" width="14" height="2" />
      <rect x="28" y="22" width="10" height="4" />
      <rect x="30" y="20" width="6"  height="2" />
      <rect x="32" y="18" width="2"  height="2" />
      {/* Правая вершина */}
      <rect x="38" y="30" width="18" height="14" />
      <rect x="40" y="26" width="14" height="4" />
      <rect x="42" y="24" width="10" height="2" />
      <rect x="44" y="22" width="6"  height="2" />
      <rect x="46" y="20" width="2"  height="2" />
      {/* Дальняя справа */}
      <rect x="52" y="32" width="12" height="12" />
      <rect x="54" y="30" width="8"  height="2" />
      <rect x="56" y="28" width="4"  height="2" />
    </g>

    {/* Снежные шапки */}
    <g fill="#f4f0e6">
      <rect x="4"  y="26" width="6" height="2" />
      <rect x="6"  y="24" width="2" height="2" />

      <rect x="14" y="20" width="10" height="2" />
      <rect x="16" y="18" width="6"  height="2" />
      <rect x="18" y="16" width="2"  height="2" />
      <rect x="12" y="22" width="3"  height="2" />
      <rect x="22" y="22" width="3"  height="2" />

      <rect x="28" y="22" width="8" height="2" />
      <rect x="30" y="20" width="6" height="2" />
      <rect x="32" y="18" width="2" height="2" />
      <rect x="26" y="24" width="3" height="2" />
      <rect x="36" y="24" width="3" height="2" />

      <rect x="42" y="24" width="8" height="2" />
      <rect x="44" y="22" width="6" height="2" />
      <rect x="46" y="20" width="2" height="2" />
      <rect x="40" y="26" width="3" height="2" />
      <rect x="50" y="26" width="3" height="2" />

      <rect x="54" y="30" width="6" height="2" />
      <rect x="56" y="28" width="4" height="2" />
    </g>

    {/* Тёплый утренний свет на снегу */}
    <g fill="#ffcd75" opacity="0.55">
      <rect x="46" y="20" width="2" height="2" />
      <rect x="44" y="22" width="4" height="2" />
      <rect x="32" y="18" width="2" height="2" />
      <rect x="30" y="20" width="3" height="2" />
      <rect x="56" y="28" width="4" height="2" />
    </g>

    {/* Ближний хребет — тёмные предгорья */}
    <g fill="#29274c">
      <rect x="0"  y="40" width="64" height="6" />
      <rect x="4"  y="38" width="14" height="2" />
      <rect x="20" y="36" width="10" height="4" />
      <rect x="22" y="34" width="6"  height="2" />
      <rect x="34" y="38" width="10" height="2" />
      <rect x="46" y="36" width="14" height="4" />
      <rect x="50" y="34" width="6"  height="2" />
    </g>

    {/* Степь / предгорье — почва Алматы */}
    <rect x="0" y="44" width="64" height="20" fill="#b97a56" />
    <rect x="0" y="44" width="64" height="2"  fill="#8a5a3a" />
    <rect x="0" y="46" width="64" height="1"  fill="#c69d6c" />

    {/* Травинки */}
    <g fill="#38b764">
      <rect x="4"  y="50" width="2" height="1" />
      <rect x="14" y="52" width="2" height="1" />
      <rect x="44" y="50" width="2" height="1" />
      <rect x="56" y="52" width="2" height="1" />
      <rect x="20" y="60" width="2" height="1" />
      <rect x="50" y="58" width="2" height="1" />
    </g>
    <g fill="#a7f070">
      <rect x="5"  y="49" width="1" height="1" />
      <rect x="45" y="49" width="1" height="1" />
      <rect x="21" y="59" width="1" height="1" />
    </g>

    {/* Каменный постамент */}
    <rect x="22" y="58" width="20" height="2" fill="#5d275d" />
    <rect x="20" y="60" width="24" height="4" fill="#29274c" />
    <rect x="20" y="60" width="24" height="1" fill="#5e5871" />

    {/* === ЗОЛОТОЙ ЧЕЛОВЕК (Алтын Адам) === */}
    {/* Древко копья позади тела */}
    <rect x="41" y="22" width="1" height="36" fill="#5e5871" />
    {/* Наконечник копья */}
    <g fill="#f4f0e6">
      <rect x="41" y="20" width="1" height="2" />
      <rect x="40" y="22" width="3" height="1" />
    </g>
    <rect x="41" y="21" width="1" height="1" fill="#ffcd75" />

    {/* Высокий конический головной убор (кулах) */}
    <g fill="#ffcd75">
      <rect x="32" y="20" width="1" height="2" />
      <rect x="31" y="22" width="3" height="2" />
      <rect x="30" y="24" width="5" height="2" />
      <rect x="29" y="26" width="7" height="2" />
      <rect x="28" y="28" width="9" height="2" />
    </g>
    {/* Блик на шапке */}
    <rect x="32" y="24" width="1" height="4" fill="#fff6c9" />
    {/* Орнамент-обод */}
    <rect x="28" y="29" width="9" height="1" fill="#ef7d57" />
    <rect x="30" y="27" width="1" height="1" fill="#b13e53" />
    <rect x="34" y="27" width="1" height="1" fill="#b13e53" />

    {/* Золотая маска / лицо */}
    <rect x="29" y="30" width="7" height="4" fill="#ffcd75" />
    <rect x="29" y="34" width="7" height="1" fill="#ef7d57" />
    {/* Глаза */}
    <rect x="30" y="31" width="1" height="1" fill="#0f1020" />
    <rect x="34" y="31" width="1" height="1" fill="#0f1020" />
    {/* Скулы / тень */}
    <rect x="29" y="33" width="1" height="1" fill="#ef7d57" />
    <rect x="35" y="33" width="1" height="1" fill="#ef7d57" />
    {/* Рот */}
    <rect x="31" y="33" width="3" height="1" fill="#b13e53" />

    {/* Шея */}
    <rect x="31" y="35" width="3" height="1" fill="#ef7d57" />

    {/* Торс — золотой кафтан/доспех */}
    <rect x="26" y="36" width="13" height="14" fill="#ffcd75" />
    {/* Контур */}
    <g fill="#5d275d">
      <rect x="26" y="36" width="1"  height="14" />
      <rect x="38" y="36" width="1"  height="14" />
      <rect x="26" y="36" width="13" height="1"  />
    </g>
    {/* Орнаментальные пластины */}
    <g fill="#ef7d57">
      <rect x="28" y="38" width="9" height="1" />
      <rect x="28" y="42" width="9" height="1" />
      <rect x="28" y="46" width="9" height="1" />
    </g>
    {/* Медальон / солнечный знак на груди */}
    <rect x="31" y="40" width="3" height="3" fill="#b13e53" />
    <rect x="32" y="41" width="1" height="1" fill="#ffe066" />

    {/* Пояс */}
    <rect x="26" y="48" width="13" height="2" fill="#5d275d" />
    <rect x="31" y="48" width="3"  height="2" fill="#ffe066" />
    <rect x="32" y="48" width="1"  height="1" fill="#fff6c9" />

    {/* Руки */}
    <g fill="#ffcd75">
      {/* Левая */}
      <rect x="24" y="37" width="2" height="11" />
      {/* Правая (на копье) */}
      <rect x="39" y="37" width="2" height="11" />
    </g>
    <g fill="#5d275d">
      <rect x="24" y="37" width="1" height="11" />
      <rect x="40" y="37" width="1" height="11" />
    </g>
    {/* Кисть на древке */}
    <rect x="39" y="44" width="3" height="2" fill="#ffcd75" />
    <rect x="39" y="44" width="3" height="1" fill="#ef7d57" />

    {/* Ноги */}
    <g fill="#ffcd75">
      <rect x="27" y="50" width="4" height="8" />
      <rect x="34" y="50" width="4" height="8" />
    </g>
    {/* Контур ног */}
    <g fill="#5d275d">
      <rect x="27" y="50" width="1" height="8" />
      <rect x="30" y="50" width="1" height="8" />
      <rect x="34" y="50" width="1" height="8" />
      <rect x="37" y="50" width="1" height="8" />
    </g>
    {/* Сапоги */}
    <g fill="#5d275d">
      <rect x="27" y="56" width="4" height="2" />
      <rect x="34" y="56" width="4" height="2" />
    </g>
    <rect x="28" y="57" width="2" height="1" fill="#ffcd75" />
    <rect x="35" y="57" width="2" height="1" fill="#ffcd75" />
  </svg>
)

const featured = ['kitchen-quest','case-file-x','tallest-tower','academic-journey']

export default function Home() {
  const t = useT()
  const lang = useLang()

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-pretitle">{t('hero.pretitle')}</span>
            <h1>
              <span className="accent">{t('hero.title.l1')}</span><br />
              <span className="accent2">{t('hero.title.l2')}</span>{' '}
              <span className="accent3">{t('hero.title.l3')}</span>
            </h1>
            <p className="hero-sub">{t('hero.sub')}</p>
            <div className="hero-cta">
              <Link to="/games" className="pix-btn">
                <PxController size={18} color="#1a1c2c" /> {t('hero.cta.play')}
              </Link>
              <Link to="/manager" className="pix-btn green">
                <PxSpark size={18} color="#1a1c2c" /> {t('hero.cta.manager')}
              </Link>
            </div>

            <div className="row mt-8" style={{ gap: 28 }}>
              <Stat icon={<PxBook color="#a7f070" />} value="15" label={t('hero.stat.games')} />
              <Stat icon={<PxUsers color="#f4b4c5" />} value="∞" label={t('hero.stat.students')} />
              <Stat icon={<PxFlame color="#ef7d57" />} value="B1" label={t('hero.stat.cefr')} />
            </div>
          </div>

          <div className="hero-stage">
            <HeroStage />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="quote">
          <p>{t('quote.text')}</p>
          <span className="author">{t('quote.author')}</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">{t('featured.eyebrow')}</span>
              <h2>{t('featured.title')}</h2>
            </div>
            <Link to="/games" className="pix-btn ghost sm">
              {t('featured.all')} <PxArrow size={14} />
            </Link>
          </div>

          <div className="games-grid">
            {GAMES.filter(g => featured.includes(g.id)).map(g => (
              <Link key={g.id} to={`/games/${g.id}`} className="game-card">
                <div className="game-card-screen">
                  {getScene(g)}
                  <div className="scan" />
                </div>
                <div className="game-card-body">
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <span className="game-card-no">{t('detail.quest')} #{g.number}</span>
                    <span className="tag green">{g.durationMin}</span>
                  </div>
                  <div className="game-card-title">{gameTitle(g, lang)}</div>
                  <div className="game-card-topic">{gameTopic(g, lang)}</div>
                  <div className="game-card-topic" style={{ fontSize: 18, opacity: 0.85 }}>{g.tagline[lang]}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dither-bg">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">{t('why.eyebrow')}</span>
              <h2>{t('why.title')}</h2>
            </div>
          </div>

          <div className="games-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            <Why icon={<PxController color="#ffcd75" size={28} />} title={t('why.game.title')} text={t('why.game.text')} />
            <Why icon={<PxFlame color="#ef7d57" size={28} />} title={t('why.body.title')} text={t('why.body.text')} />
            <Why icon={<PxUsers color="#f4b4c5" size={28} />} title={t('why.team.title')} text={t('why.team.text')} />
            <Why icon={<PxStar color="#a7f070" size={28} />} title={t('why.zero.title')} text={t('why.zero.text')} />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="divider">{t('divider.demo')}</div>
      </div>
    </>
  )
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="row" style={{ gap: 10 }}>
      {icon}
      <div>
        <div className="pixel-font" style={{ fontSize: 18, color: 'var(--c-sun)' }}>{value}</div>
        <div className="pixel-font" style={{ fontSize: 8, color: 'var(--c-bone)' }}>{label}</div>
      </div>
    </div>
  )
}

function Why({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card">
      <div className="row mb-4">{icon} <h3 style={{ color: 'var(--c-sun)' }}>{title}</h3></div>
      <p style={{ color: 'var(--c-bone)' }}>{text}</p>
    </div>
  )
}

