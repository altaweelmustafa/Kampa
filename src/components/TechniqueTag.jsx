import { Tag } from "antd";
import { CATEGORIES } from "../data/techniques";

const DARK_TEXT = "#141414";
const LIGHT_TEXT = "#EFEFEF";
const AMBER = "#ebc934";

const TAG_CONFIG = {
  // type
  Submission:  { bg: AMBER, text: DARK_TEXT },
  Sweep:       { bg: AMBER, text: DARK_TEXT },
  Escape:      { bg: AMBER, text: DARK_TEXT },
  Pass:        { bg: AMBER, text: DARK_TEXT },
  Takedown:    { bg: AMBER, text: DARK_TEXT },
  Transition:  { bg: AMBER, text: DARK_TEXT },
  // side
  Offense:     { bg: "#D62828", text: LIGHT_TEXT },
  Defense:     { bg: "#2EA84A", text: DARK_TEXT },
};

const POSITION_CONFIG = { bg: "#1A3A6B", text: LIGHT_TEXT };

function getConfig(cat) {
  return TAG_CONFIG[cat] || POSITION_CONFIG;
}

export default function TechniqueTag({ cat, closable, onClose, size = "sm" }) {
  const { bg, text } = getConfig(cat);

  return (
    <Tag
      closable={closable}
      onClose={onClose}
      style={{
        background: bg,
        borderColor: bg,
        color: text,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: size === "md" ? 13 : 12,
        padding: size === "md" ? "2px 10px" : "1px 8px",
        margin: 0,
        border: "1px solid " + bg,
      }}
    >
      {cat}
    </Tag>
  );
}
