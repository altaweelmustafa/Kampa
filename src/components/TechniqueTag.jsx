import { Tag } from "antd";
import { CATEGORIES } from "../data/techniques";

const C = {
  teal:   "#1A7A8A",
  red:    "#C0392B",
  amber:  "#D4880A",
  navy:   "#1C3157",
  white:  "#A8B4C8",
};

function getColor(cat) {
  if (CATEGORIES.type.includes(cat))  return C.teal;
  if (cat === "Offense")              return C.red;
  if (cat === "Defense")              return C.amber;
  if (CATEGORIES.level.includes(cat)) return C.navy;
  return C.navy;
}

export default function TechniqueTag({ cat, closable, onClose, size = "sm" }) {
  return (
    <Tag
      variant="solid"
      color={getColor(cat)}
      closable={closable}
      onClose={onClose}
      style={size === "md" ? { fontSize: 11, padding: "2px 10px" } : {}}
    >
      {cat}
    </Tag>
  );
}
