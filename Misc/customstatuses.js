const { EmbedBuilder } = require("discord.js");
const { formatStatusesAsFields } = require("../Utilities/formatStatusesAsFields");

module.exports = {
  name: "customstatuses",
  aliases: ["statuses", "status", "customstatus", "botstatuses"],
  category: "Miscellaneous",
  description: "View all static custom statuses used by Tbot",
  run: async (client, message, args) => {
    try {
      const fields = formatStatusesAsFields(25, 15);
      
      const embed = new EmbedBuilder()
        .setColor("Random")
        .setTitle("📊 Tbot Custom Statuses")
        .setDescription("Here are all the static custom statuses that Tbot uses (excluding dynamic ones with variables):")
        .addFields(fields)
        .setFooter({ text: `Total Static Statuses: ${fields.reduce((acc, field) => acc + field.value.split('\n').length, 0)}` });

      await message.reply({ embeds: [embed] });
    } catch (error) {
      console.error("Error displaying custom statuses:", error);
      await message.reply("An error occurred while fetching custom statuses.");
    }
  },
};
