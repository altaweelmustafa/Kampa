export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page__inner">

        <div className="about-page__header">
          <span className="about-page__label">About</span>
          <h2 className="about-page__title">What is Kampa?</h2>
        </div>

        <p className="about-page__lead">
          Kampa is a personal BJJ technique library built for grapplers who want
          to own their learning, not scroll through YouTube looking for something
          they half-remember from last class.
        </p>

        <div className="about-page__sections">
          <div className="about-page__section">
            <i className="fa-solid fa-layer-group about-page__section-icon" />
            <div>
              <h3 className="about-page__section-title">Log techniques as you learn them</h3>
              <p className="about-page__section-text">
                Every technique gets a card with a name, description, animated
                diagram, and category tags. Build the library at your own pace.
              </p>
            </div>
          </div>

          <div className="about-page__section">
            <i className="fa-solid fa-filter about-page__section-icon" />
            <div>
              <h3 className="about-page__section-title">Filter by position, type, or level</h3>
              <p className="about-page__section-text">
                Find exactly what you're looking for. Whether you need a sweep
                from closed guard or an escape from side control, the filter
                system gets you there fast.
              </p>
            </div>
          </div>

          <div className="about-page__section">
            <i className="fa-solid fa-person-falling about-page__section-icon" />
            <div>
              <h3 className="about-page__section-title">Animated diagrams</h3>
              <p className="about-page__section-text">
                Each card includes a 2D animation showing the movement
                concept. Not a substitute for drilling, but a useful memory cue
                when you can't remember which way the hips pivot.
              </p>
            </div>
          </div>

          <div className="about-page__section">
            <i className="fa-solid fa-code about-page__section-icon" />
            <div>
              <h3 className="about-page__section-title">Built with React + Ant Design</h3>
              <p className="about-page__section-text">
                Self-hosted, no backend, no accounts. Your techniques live in
                your codebase. Add them in the app or edit the data file directly.
              </p>
            </div>
          </div>
        </div>

        <div className="about-page__footer">
          <span className="about-page__footer-text">
            Built by <span className="about-page__footer-accent">dash</span> and <span className="about-page__footer-accent">sky</span>
            {" · "}
            <span className="about-page__footer-mono">v0.1.0</span>
          </span>
        </div>

      </div>
    </div>
  );
}
