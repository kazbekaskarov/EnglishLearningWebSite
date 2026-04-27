import { Link } from 'react-router-dom'
import { PxBook, PxController, PxFlame, PxStar, PxUsers } from '../components/PxIcon'

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">README.TXT</span>
        <h1>About the Quest</h1>

        <div className="card mt-6" style={{ background: 'var(--c-deep)' }}>
          <p style={{ fontSize: 24 }}>
            <b style={{ color: 'var(--c-sun)' }}>«Gamification: B1 Vocabulary Handbook for Teachers»</b> —
            это методическое руководство, объединяющее <b style={{ color: 'var(--c-leaf)' }}>15 тематических игр</b> для уровня B1.
            Каждая игра развивает лексическую компетенцию через коммуникацию, движение и командную работу.
          </p>
          <p style={{ fontSize: 24, marginTop: 16 }}>
            Сайт <b style={{ color: 'var(--c-pink)' }}>ENGAGE.exe</b> — цифровой компаньон хэндбука. Здесь вы найдёте
            интерактивные карточки игр, инструменты учителя (шумомер, таймер, рандомайзер) и материалы для печати.
          </p>
        </div>

        <h2 className="mt-8 mb-4">▸ The Pillars</h2>
        <div className="games-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          <Pillar icon={<PxController color="#ffcd75" size={24} />} title="Engagement" text="Игра вместо упражнения. Вовлечение — главный двигатель запоминания." />
          <Pillar icon={<PxUsers color="#f4b4c5" size={24} />} title="Communication" text="Каждая игра требует говорения и слушания — лексика прорастает через диалог." />
          <Pillar icon={<PxFlame color="#ef7d57" size={24} />} title="Movement" text="Кинестетика: ученики встают, ловят карточки, шлёпают, кричат." />
          <Pillar icon={<PxStar color="#a7f070" size={24} />} title="Repetition" text="Слова повторяются естественно через геймплей, а не через зубрёжку." />
          <Pillar icon={<PxBook color="#73eff7" size={24} />} title="Context" text="Каждое слово введено в ситуации, а не в изолированном списке." />
        </div>

        <h2 className="mt-8 mb-4">▸ Quote</h2>
        <div className="quote">
          <p>"Tell me and I forget, teach me and I may remember, involve me and I learn."</p>
          <span className="author">— Benjamin Franklin</span>
        </div>

        <div className="row mt-8">
          <Link to="/games" className="pix-btn">Explore the Library</Link>
          <Link to="/manager" className="pix-btn green">Open Manager</Link>
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

