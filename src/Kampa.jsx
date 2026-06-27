import { useState, useMemo } from "react";
import { ConfigProvider, Input, Tag, Empty } from "antd";
import Navbar from "./components/Navbar";
import FilterDrawer from "./components/FilterDrawer";
import TechniqueCard from "./components/TechniqueCard";
import TechniqueModal from "./components/TechniqueModal";
import NewTechniqueModal from "./components/NewTechniqueModal";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { techniques as initialTechniques } from "./data/techniques";
import "./styles/kampa.css";

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
    colorPrimary: "#2EC4B6",
    colorBgBase: "#141414",
    colorTextBase: "#EFEFEF",
    colorBorder: "#2E2E2E",
    colorBgContainer: "#1C1C1C",
    colorBgElevated: "#181818",
    fontFamily: "'IBM Plex Sans', sans-serif",
    borderRadius: 4,
    colorText: "#EFEFEF",
    colorTextSecondary: "#7A7A7A",
    colorTextPlaceholder: "#7A7A7A",
    colorFillSecondary: "#2E2E2E",
    colorIcon: "#7A7A7A",
  },
  components: {
    Input: {
      colorBgContainer: "#1C1C1C",
      colorBorder: "#2E2E2E",
      hoverBorderColor: "#2EC4B6",
      activeBorderColor: "#2EC4B6",
      colorText: "#EFEFEF",
      activeShadow: "none",
    },
    Card: { colorBgContainer: "#1C1C1C", colorBorderSecondary: "#2E2E2E" },
    Drawer: { colorBgElevated: "#181818" },
    Checkbox: { colorPrimary: "#2EC4B6", colorBorder: "#2E2E2E" },
    Badge: { colorBgContainer: "#141414" },
  },
};

export default function Kampa() {
  const [page, setPage] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [techniques, setTechniques] = useState(initialTechniques);

  const navigate = (target) => {
    if (target === "new") { setShowNewModal(true); return; }
    setPage(target);
    if (target !== "techniques") {
      setSearch("");
      setActiveFilters([]);
    }
  };

  const toggleFilter = (item) =>
    setActiveFilters((prev) =>
      prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
    );

  const clearFilters = () => setActiveFilters([]);

  const handleAddTechnique = (newTechnique) => {
    setTechniques((prev) => [...prev, newTechnique]);
    setPage("techniques");
  };

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
  }, [search, activeFilters, techniques]);

  return (
    <ConfigProvider theme={antTheme}>
      <Navbar
        page={page}
        onNavigate={navigate}
        onFilterOpen={() => setDrawerOpen(true)}
        onNewTechnique={() => setShowNewModal(true)}
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

      {/* Pages */}
      {page === "home" && <HomePage onNavigate={navigate} />}

      {page === "about" && <AboutPage />}

      {page === "techniques" && (
        <div className="page">
          <div className="search-row">
            <Input
              prefix={<i className="fa-solid fa-magnifying-glass" style={{ color: "var(--white-dim)", fontSize: 13 }} />}
              placeholder="Search techniques, positions, types…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              allowClear
            />
          </div>

          {activeFilters.length > 0 && (
            <div className="active-filters">
              {activeFilters.map((f) => (
                <Tag key={f} closable onClose={() => toggleFilter(f)}>{f}</Tag>
              ))}
            </div>
          )}

          {filtered.length === 0 ? (
            <Empty description="No techniques match your filters." style={{ marginTop: 80 }} />
          ) : (
            <div className="cards-grid">
              {filtered.map((t) => (
                <TechniqueCard key={t.id} technique={t} onClick={setSelected} />
              ))}
            </div>
          )}
        </div>
      )}

      {selected && (
        <TechniqueModal technique={selected} onClose={() => setSelected(null)} />
      )}

      {showNewModal && (
        <NewTechniqueModal
          onClose={() => setShowNewModal(false)}
          onAdd={handleAddTechnique}
        />
      )}
    </ConfigProvider>
  );
}
