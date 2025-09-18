const { EmbedBuilder } = require("discord.js");

function createCategoryEmbed(hero, categoryColor, name, deckNames, total, thumbnail) {
  const isAll = name.toLowerCase() === "all";
  const description =
    Array.isArray(deckNames) && deckNames.length
      ? deckNames.map((d) => `\n<@1043528908148052089> **${d}**`).join("")
      : "No decks available";
  return new EmbedBuilder()
    .setTitle(isAll ? `${hero} Decks` : `${hero} ${name} Decks`)
    .setDescription(
      isAll
        ? `All ${hero} decks in Tbot are:${description}`
        : `My ${name} decks for ${hero} are: ${description}`
    )
    .setThumbnail(thumbnail)
    .setColor(categoryColor)
    .setFooter({
      text: isAll
        ? `${hero} has ${total} total decks in Tbot\nPlease click on the buttons below to navigate through the decks.`
        : `${hero} has ${total} total ${name} decks in Tbot\nPlease click on the buttons below to navigate through the decks.`,
    });
}

module.exports = createCategoryEmbed;