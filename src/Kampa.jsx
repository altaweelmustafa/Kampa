import { useState, useMemo } from "react";
import { ConfigProvider, Input, Tag, Empty } from "antd";
import Navbar from "./components/Navbar";
import FilterDrawer from "./components/FilterDrawer";
import TechniqueCard from "./components/TechniqueCard";
import TechniqueModal from "./components/TechniqueModal";
import { techniques } from "./data/techniques";
import "./styles/kampa.css";

// inject fonts & FA
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap";
document.head.appendChild(fontLink);

const faLink = document.createElement("link");
faLink.rel = "stylesheet";
faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
document.head.appendChild(faLink);

const antTheme = {
  token: {
    colorPrimary: "#1A7A8A",
    colorBgBase: "#0B1E3D",
    colorTextBase: "#F5F7FA",
    colorBorder: "#1C3157",
    colorBgContainer: "#102347",
    colorBgElevated: "#0F2850",
    fontFamily: "'IBM Plex Sans', sans-serif",
    borderRadius: 4,
    colorText: "#F5F7FA",
    colorTextSecondary: "#A8B4C8",
    colorTextPlaceholder: "#A8B4C8",
    colorFillSecondary: "#1C3157",
    colorIcon: "#A8B4C8",
  },
  components: {
    Input: {
      colorBgContainer: "#102347",
      colorBorder: "#1C3157",
      hoverBorderColor: "#1A7A8A",
      activeBorderColor: "#1A7A8A",
      colorText: "#F5F7FA",
      activeShadow: "none",
    },
    Card: {
      colorBgContainer: "#102347",
      colorBorderSecondary: "#1C3157",
    },
    Drawer: {
      colorBgElevated: "#0F2850",
    },
    Checkbox: {
      colorPrimary: "#1A7A8A",
      colorBorder: "#1C3157",
    },
    Badge: {
      colorBgContainer: "#0B1E3D",
    },
  },
};

export default function Kampa() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [selected, setSelected] = useState(null);

  const toggleFilter = (item) =>
    setActiveFilters((prev) =>
      prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
    );

  const clearFilters = () => setActiveFilters([]);

  const filtered = useMemo(() => {
    let list = techniques;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.categories.some((c) => c.toLowerCase().includes(q)) ||
          t.description.toLowerCase().includes(q)
      );
    }
    if (activeFilters.length > 0) {
      list = list.filter((t) =>
        activeFilters.every((f) => t.categories.includes(f))
      );
    }
    return list;
  }, [search, activeFilters]);

  return (
    <ConfigProvider theme={antTheme}>
      <Navbar
        onFilterOpen={() => setDrawerOpen(true)}
        total={techniques.length}
        filtered={filtered.length}
        activeCount={activeFilters.length}
      />

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeFilters={activeFilters}
        onToggle={toggleFilter}
        onClear={clearFilters}
      />

      <div className="page">
        {/* Search */}
        <div className="search-row">
          <Input
            prefix={
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "var(--white-dim)", fontSize: 13 }}
              />
            }
            placeholder="Search techniques, positions, types…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            allowClear
          />
        </div>

        {/* Active filter pills */}
        {activeFilters.length > 0 && (
          <div className="active-filters">
            {activeFilters.map((f) => (
              <Tag key={f} closable onClose={() => toggleFilter(f)}>
                {f}
              </Tag>
            ))}
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <Empty
            description="No techniques match your filters."
            style={{ marginTop: 80 }}
          />
        ) : (
          <div className="cards-grid">
            {filtered.map((t) => (
              <TechniqueCard
                key={t.id}
                technique={t}
                onClick={setSelected}
              />
            ))}
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selected && (
        <TechniqueModal
          technique={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </ConfigProvider>
  );
}
