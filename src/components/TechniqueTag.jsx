import { Tag } from "antd";
import { CATEGORIES } from "../data/techniques";

function getTagClass(cat) {
  if (CATEGORIES.type.includes(cat))     return "tag--type";
  if (cat === "Offense")                 return "tag--offense";
  if (cat === "Defense")                 return "tag--defense";
  if (CATEGORIES.level.includes(cat))    return "tag--level";
  return "tag--position";
}

export default function TechniqueTag({ cat, closable, onClose, size = "sm" }) {
  return (
    <Tag
      closable={closable}
      onClose={onClose}
      className={getTagClass(cat)}
      style={size === "md" ? { fontSize: 11, padding: "2px 10px" } : {}}
    >
      {cat}
    </Tag>
  );
}
