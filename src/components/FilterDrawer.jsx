import { Drawer, Checkbox, Badge } from "antd";
import { ALL_FILTERS } from "../data/techniques";

function FilterGroup({ groupData, active, onToggle }) {
  return (
    <div className="filter-group">
      <span className="filter-group__label">{groupData.label}</span>
      <div className="filter-group__items">
        {groupData.items.map((item) => {
          const isActive = active.includes(item);
          return (
            <label key={item} className="filter-group__item">
              <Checkbox
                checked={isActive}
                onChange={() => onToggle(item)}
              />
              <span className={`filter-group__item-label${isActive ? " filter-group__item-label--active" : ""}`}>
                {item}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default function FilterDrawer({ open, onClose, activeFilters, onToggle, onClear }) {
  return (
    <Drawer
      placement="left"
      open={open}
      onClose={onClose}
      width={250}
      title={null}
      closeIcon={null}
      styles={{
        body: { padding: 0 },
        mask: { background: "rgba(0,0,0,0.5)" },
      }}
    >
      <div className="drawer__inner">
        <div className="drawer__header">
          <div className="drawer__header-left">
            <i className="fa-solid fa-sliders" style={{ color: "var(--teal)", fontSize: 13 }} />
            <span className="drawer__heading">Filter</span>
            {activeFilters.length > 0 && (
              <Badge count={activeFilters.length} />
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {activeFilters.length > 0 && (
              <button className="drawer__clear" onClick={onClear}>
                clear all
              </button>
            )}
            <button className="drawer__close" onClick={onClose}>
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </div>

        {ALL_FILTERS.map((group) => (
          <FilterGroup
            key={group.group}
            groupData={group}
            active={activeFilters}
            onToggle={onToggle}
          />
        ))}
      </div>
    </Drawer>
  );
}
