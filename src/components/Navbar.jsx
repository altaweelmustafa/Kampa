import { Tooltip } from "antd";

const NAV_LINKS = [
  { key: "home", icon: "fa-house", label: "Home" },
  { key: "techniques", icon: "fa-person-running", label: "Techniques" },
  { key: "about", icon: "fa-circle-info", label: "About" },
];

export default function Navbar({ page, onNavigate, onFilterOpen, onNewTechnique, total, filtered, activeCount }) {
  return (
    <nav className="navbar">
      {/* Far-left: filter toggle (only on techniques page) */}
      <div className="navbar__edge">
        {page === "techniques" ? (
          <Tooltip title="Filters" placement="right">
            <button className="navbar__filter-btn" onClick={onFilterOpen}>
              <i className="fa-solid fa-sliders" />
            </button>
          </Tooltip>
        ) : (
          <div className="navbar__filter-btn navbar__filter-btn--placeholder" />
        )}
      </div>

      {/* Wordmark */}
      <div
        className="navbar__wordmark"
        onClick={() => onNavigate("home")}
        style={{ cursor: "pointer" }}
      >
        <span className="navbar__title">KAMPA</span>
        <span className="navbar__subtitle">BJJ</span>
      </div>

      {/* Center nav links */}
      <div className="navbar__links">
        {NAV_LINKS.map((link) => (
          <button
            key={link.key}
            className={`navbar__link${page === link.key ? " navbar__link--active" : ""}`}
            onClick={() => onNavigate(link.key)}
          >
            <i className={`fa-solid ${link.icon}`} />
            {link.label}
          </button>
        ))}
      </div>

      {/* Right side */}
      <div className="navbar__right">
        {page === "techniques" && (
          <span className="navbar__count">
            {filtered} / {total}
            {activeCount > 0 && (
              <span className="navbar__active-badge">{activeCount} active</span>
            )}
          </span>
        )}
        <Tooltip title="Add technique" placement="left">
          <button className="navbar__new-btn" onClick={onNewTechnique}>
            <i className="fa-solid fa-plus" />
          </button>
        </Tooltip>
      </div>
    </nav>
  );
}
