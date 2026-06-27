import { Tooltip } from "antd";

export default function Navbar({ onFilterOpen, total, filtered, activeCount }) {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Tooltip title="Filters" placement="right">
          <button className="navbar__filter-btn" onClick={onFilterOpen}>
            <i className="fa-solid fa-sliders" />
          </button>
        </Tooltip>

        <div className="navbar__wordmark">
          <span className="navbar__title">KAMPA</span>
          <span className="navbar__subtitle">BJJ</span>
        </div>
      </div>

      <div className="navbar__count">
        {filtered} / {total}
        {activeCount > 0 && (
          <span className="navbar__active-badge">{activeCount} active</span>
        )}
      </div>
    </nav>
  );
}
