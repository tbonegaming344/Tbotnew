const { EmbedBuilder } = require("discord.js");
/**
 * @description Creates a category embed for a hero's decks
 * @param {*} hero the hero name
 * @param {*} categoryColor the color of the category
 * @param {*} name the name of the category
 * @param {*} deckNames the names of the decks
 * @param {*} total the total number of decks
 * @param {*} thumbnail the thumbnail image URL
 * @returns {EmbedBuilder} The constructed embed
 */
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
        : `My ${name} decks for ${hero} are: ${description}` ?
        `My ${name} ${hero} decks are: ${description}` :  "None available"
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