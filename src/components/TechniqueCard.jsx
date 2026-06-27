import { Card } from "antd";
import TechniqueSVG from "./TechniqueSVG";
import TechniqueTag from "./TechniqueTag";

export default function TechniqueCard({ technique, onClick }) {
  return (
    <Card
      className="technique-card"
      onClick={() => onClick(technique)}
    >
      <div className="card__animation">
        <TechniqueSVG type={technique.svgType} />
      </div>

      <span className="card__name">{technique.name}</span>
      <p className="card__desc">{technique.description}</p>

      <div className="card__tags">
        {technique.categories.map((cat) => (
          <TechniqueTag key={cat} cat={cat} />
        ))}
      </div>
    </Card>
  );
}
