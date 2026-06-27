export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <div className="home-page__hero">
        <div className="home-page__eyebrow">
          <span className="home-page__eyebrow-line" />
          <span className="home-page__eyebrow-text">Brazilian Jiu-Jitsu</span>
          <span className="home-page__eyebrow-line" />
        </div>

        <h1 className="home-page__title">KAMPA</h1>
        <p className="home-page__tagline">
          Your personal technique library.<br />
        </p>

        <div className="home-page__actions">
          <button
            className="home-page__btn home-page__btn--primary"
            onClick={() => onNavigate("techniques")}
          >
            <i className="fa-solid fa-person-running" />
            Browse Techniques
          </button>
          <button
            className="home-page__btn home-page__btn--ghost"
            onClick={() => onNavigate("new")}
          >
            <i className="fa-solid fa-plus" />
            Add a Technique
          </button>
        </div>
      </div>

      <div className="home-page__stats">
        <div className="home-page__stat">
          <span className="home-page__stat-num">12</span>
          <span className="home-page__stat-label">techniques logged</span>
        </div>
        <div className="home-page__stat-divider" />
        <div className="home-page__stat">
          <span className="home-page__stat-num">4</span>
          <span className="home-page__stat-label">positions covered</span>
        </div>
        <div className="home-page__stat-divider" />
        <div className="home-page__stat">
          <span className="home-page__stat-num">3</span>
          <span className="home-page__stat-label">levels tracked</span>
        </div>
      </div>

      <div className="home-page__grid">
        {[
          { icon: "fa-shield-halved", label: "Defense", desc: "Escapes, frames, and survival positions." },
          { icon: "fa-bolt", label: "Offense", desc: "Submissions, sweeps, and takedowns." },
          { icon: "fa-rotate", label: "Transitions", desc: "Chain positions and control changes." },
          { icon: "fa-graduation-cap", label: "Fundamentals", desc: "The movements every game is built on." },
        ].map((item) => (
          <div
            key={item.label}
            className="home-page__feature"
            onClick={() => onNavigate("techniques")}
          >
            <i className={`fa-solid ${item.icon} home-page__feature-icon`} />
            <span className="home-page__feature-label">{item.label}</span>
            <span className="home-page__feature-desc">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
