import { useEffect } from "react";
import TechniqueSVG from "./TechniqueSVG";
import TechniqueTag from "./TechniqueTag";

export default function TechniqueModal({ technique, onClose }) {
  // close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-card">
        <div className="modal-card__animation">
          <TechniqueSVG type={technique.svgType} scale={1.9} />
        </div>

        <div className="modal-card__body">
          <div className="modal-card__name">{technique.name}</div>
          <p className="modal-card__desc">{technique.description}</p>

          <div className="modal-card__tags">
            {technique.categories.map((cat) => (
              <TechniqueTag key={cat} cat={cat} size="md" />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
