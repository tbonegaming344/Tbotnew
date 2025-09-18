function matchesCategory(row, cat) {
  const t = row.typeNorm;
  const a = row.archetypeNorm;
  if (cat === "all") return true;
  if (cat === "comp")
    return (
      t.includes("competitive") ||
      t.includes("comp") ||
      a.includes("competitive") ||
      a.includes("comp")
    );
  if (cat === "budget") return t.includes("budget") || a.includes("budget");
  if (cat === "ladder") return t.includes("ladder") || a.includes("ladder");
  if (cat === "meme") return t.includes("meme") || a.includes("meme");
  if (cat === "combo") return t.includes("combo") || a.includes("combo");
  if (cat === "control") return a.includes("control") || t.includes("control");
  if (cat === "midrange")
    return (
      a.includes("midrange") ||
      t.includes("midrange") ||
      a.includes("mid") ||
      t.includes("mid")
    );
  if (cat === "tempo") return t.includes("tempo") || a.includes("tempo");
  if (cat === "aggro") return a.includes("aggro") || t.includes("aggro");
  return false;
}

module.exports = matchesCategory;