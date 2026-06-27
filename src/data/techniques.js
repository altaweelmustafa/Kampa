export const CATEGORIES = {
  position: [
    "Closed Guard",
    "Open Guard",
    "Half Guard",
    "Full Mount",
    "Side Control",
    "Back Control",
    "Turtle",
  ],
  type: ["Submission", "Sweep", "Escape", "Pass", "Takedown", "Transition"],
  side: ["Offense", "Defense"],
};

export const ALL_FILTERS = Object.entries(CATEGORIES).map(([group, items]) => ({
  group,
  label: group.charAt(0).toUpperCase() + group.slice(1),
  items,
}));

export const techniques = [
  {
    id: "T-001",
    name: "Armbar from Closed Guard",
    categories: ["Closed Guard", "Submission", "Offense"],
    description: "Break posture, pivot hips perpendicular, extend the arm across your hips.",
    svgType: "armbar",
  },
  {
    id: "T-002",
    name: "Triangle Choke",
    categories: ["Closed Guard", "Submission", "Offense"],
    description: "Shoot the hips, lock the figure-four with one arm trapped, finish with hip extension.",
    svgType: "triangle",
  },
  {
    id: "T-003",
    name: "Hip Escape (Shrimp)",
    categories: ["Full Mount", "Escape", "Defense"],
    description: "Bridge and shrimp to recover guard from bottom mount position.",
    svgType: "shrimp",
  },
  {
    id: "T-004",
    name: "Rear Naked Choke",
    categories: ["Back Control", "Submission", "Offense"],
    description: "Secure seatbelt grip, slide choking arm under chin, palm-to-bicep finish.",
    svgType: "rnc",
  },
  {
    id: "T-005",
    name: "Scissor Sweep",
    categories: ["Closed Guard", "Sweep", "Offense"],
    description: "Break posture, cross-sleeve grip, scissor legs to take top position.",
    svgType: "scissor",
  },
  {
    id: "T-006",
    name: "Americana Lock",
    categories: ["Full Mount", "Submission", "Offense"],
    description: "Keylock applied from top mount. Wrist to the mat, figure-four the arm.",
    svgType: "americana",
  },
  {
    id: "T-007",
    name: "Single Leg X Sweep",
    categories: ["Open Guard", "Sweep", "Offense"],
    description: "Enter single leg X, extend bottom leg and pull ankle to off-balance.",
    svgType: "slx",
  },
  {
    id: "T-008",
    name: "Side Control Escape",
    categories: ["Side Control", "Escape", "Defense"],
    description: "Frame on chin, shrimp to create space, recover half guard or full guard.",
    svgType: "scescape",
  },
  {
    id: "T-009",
    name: "Guillotine Choke",
    categories: ["Open Guard", "Takedown", "Submission", "Offense"],
    description: "Arm-in or high elbow guillotine — wrap, pull guard, arch and finish.",
    svgType: "guillotine",
  },
  {
    id: "T-010",
    name: "Double Leg Takedown",
    categories: ["Takedown", "Offense"],
    description: "Level change, penetration step, drive through the hips, finish to side control.",
    svgType: "double",
  },
  {
    id: "T-011",
    name: "Kimura from Half Guard",
    categories: ["Half Guard", "Submission", "Offense"],
    description: "Underhook to kimura grip, roll to dog-fight, finish the shoulder lock.",
    svgType: "kimura",
  },
  {
    id: "T-012",
    name: "Berimbolo",
    categories: ["Open Guard", "Back Control", "Transition", "Advanced"],
    description: "De La Riva hook, invert under opponent, take the back while spinning.",
    svgType: "berimbolo",
  },
];
