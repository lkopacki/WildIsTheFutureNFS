const SYMBOL_FIELD = "As_Is";

/* Colour scale, shared by every layer. Reorder or recolour freely. */
const CLASSES = [
  { value: "Wild", label: "Wild", color: "#0f4d3a" },
  { value: "Hatchery", label: "Hatchery", color: "#c2571f" },
  { value: "Non-Native", label: "Non-Native", color: "#6d4b93" },
];
const UNKNOWN_COLOR = "#9aa89f";

/* Species are told apart by dash, not colour. */
const GROUPS = [
  {
    id: "salmon", name: "Salmon", sub: "Chinook, coho, chum, sockeye",
    layers: [
      { id: "coho", name: "Coho", note: "", width: 2.4, pmtiles: "./data/coho.pmtiles", sourceLayer: "coho", bounds: [-124.5447, 41.996, -121.8375, 46.093] },
      { id: "chum", name: "Chum", note: "", width: 2.4, dash: [5, 2], pmtiles: "./data/chum.pmtiles", sourceLayer: "chum", bounds: [-124.3489, 43.3526, -123.5168, 46.024] },
      { id: "fall_chinook", name: "Fall Chinook", note: "", width: 2.4, dash: [3, 1.5], pmtiles: "./data/fall_chinook.pmtiles", sourceLayer: "fall_chinook", bounds: [-124.5447, 41.996, -122.1511, 46.0689] },
      { id: "spring_chinook", name: "Spring Chinook", note: "", width: 2.4, dash: [10, 2.5], pmtiles: "./data/spring_chinook.pmtiles", sourceLayer: "spring_chinook", bounds: [-124.4322, 41.9969, -121.8498, 46.0467] },
    ]
  },
  {
    id: "trout", name: "Steelhead and trout", sub: "Anadromous and resident",
    layers: [
      { id: "summer_steelhead", name: "Summer Steelhead", note: "", width: 2.4, dash: [1.5, 1.8], pmtiles: "./data/summer_steelhead.pmtiles", sourceLayer: "summer_steelhead", bounds: [-124.4321, 42.0082, -121.8375, 45.8569] },
      { id: "winter_steelhead", name: "Winter Steelhead", note: "", width: 2.4, dash: [8, 2, 1.5, 2], pmtiles: "./data/winter_steelhead.pmtiles", sourceLayer: "winter_steelhead", bounds: [-124.5447, 41.996, -121.8375, 46.0689] },
    ]
  },
  {
    id: "unsorted", name: "Not yet sorted", sub: "Assign these a group",
    layers: [
      { id: "all_species", name: "All Species", note: "", width: 2.4, pmtiles: "./data/all_species.pmtiles", sourceLayer: "all_species", bounds: [-124.5447, 41.996, -121.8375, 46.093] },
    ]
  },
];
