import { useState, useEffect, useRef } from "react";
import { Input, Checkbox } from "antd";
import { CATEGORIES } from "../data/techniques";

const { TextArea } = Input;

const EMPTY_FORM = {
  name: "",
  description: "",
  riveFile: null,
  riveName: "",
  categories: [],
};

export default function NewTechniqueModal({ onClose, onAdd }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");
  const riveInputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const toggleCat = (cat) => {
    setForm((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const handleSubmit = () => {
    if (!form.name.trim()) {
      setError("Technique name is required.");
      return;
    }
    if (form.categories.length === 0) {
      setError("Select at least one category.");
      return;
    }
    onAdd({
      id: `T-${String(Date.now()).slice(-3)}`,
      name: form.name.trim(),
      description: form.description.trim() || "No description yet.",
      riveFile: form.riveFile || null,
      categories: form.categories,
      svgType: "armbar",
    });
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="new-modal">
        {/* Header */}
        <div className="new-modal__header">
          <div className="new-modal__header-left">
            <i className="fa-solid fa-plus" style={{ color: "var(--teal)", fontSize: 13 }} />
            <span className="new-modal__title">New Technique</span>
          </div>
          <button className="drawer__close" onClick={onClose}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        {/* Body */}
        <div className="new-modal__body">
          {/* Name */}
          <div className="new-modal__field">
            <label className="new-modal__label">Name</label>
            <Input
              placeholder="e.g. Armbar from Closed Guard"
              value={form.name}
              onChange={(e) => { setForm((p) => ({ ...p, name: e.target.value })); setError(""); }}
              className="new-modal__input"
            />
          </div>

          {/* Description */}
          <div className="new-modal__field">
            <label className="new-modal__label">Description</label>
            <TextArea
              placeholder="Brief cue or setup note…"
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              autoSize={{ minRows: 2, maxRows: 4 }}
              className="new-modal__input"
            />
          </div>
          {/* Rive animation */}
          <div className="new-modal__field">
            <label className="new-modal__label">
              <i className="fa-solid fa-circle-play" style={{ marginRight: 6, color: "var(--teal)" }} />
              Rive Animation
            </label>

            <input
              type="file"
              accept=".riv"
              ref={riveInputRef}
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) setForm((p) => ({ ...p, riveFile: file, riveName: file.name }));
              }}
            />

            <div className="new-modal__file-row">
              <button
                className="new-modal__file-btn"
                onClick={() => riveInputRef.current.click()}
              >
                <i className="fa-solid fa-paperclip" />
                {form.riveName ? "Change file" : "Attach .riv file"}
              </button>
              {form.riveName && (
                <span className="new-modal__file-name">
                  <i className="fa-solid fa-file-circle-check" style={{ color: "var(--teal)", marginRight: 6 }} />
                  {form.riveName}
                </span>
              )}
            </div>

            <span className="new-modal__hint">
              Leave blank to use the default stick figure.
            </span>
          </div>
          {/* Categories */}
          <div className="new-modal__field">
            <label className="new-modal__label">Categories</label>
            <div className="new-modal__cats">
              {Object.entries(CATEGORIES).map(([group, items]) => (
                <div key={group} className="new-modal__cat-group">
                  <span className="new-modal__cat-group-label">{group}</span>
                  <div className="new-modal__cat-items">
                    {items.map((item) => (
                      <label key={item} className="new-modal__cat-item">
                        <Checkbox
                          checked={form.categories.includes(item)}
                          onChange={() => toggleCat(item)}
                        />
                        <span className="new-modal__cat-text">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {error && <p className="new-modal__error">{error}</p>}
        </div>

        {/* Footer */}
        <div className="new-modal__footer">
          <button className="modal-card__close" onClick={onClose}>cancel</button>
          <button className="new-modal__submit" onClick={handleSubmit}>
            <i className="fa-solid fa-plus" />
            Add Technique
          </button>
        </div>
      </div>
    </div>
  );
}
