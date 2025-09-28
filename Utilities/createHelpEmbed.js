const { EmbedBuilder } = require("discord.js");
function createHelpEmbed(title, description, thumbnail,color, footer, ) {
  const e = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor(color);
  if (footer) e.setFooter({ text: footer });
  return e;
}
module.exports = createHelpEmbed;