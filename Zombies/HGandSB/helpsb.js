const {
  ActionRowBuilder,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
let db = require("../../index.js");
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#000000");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpsb`,
  aliases: [
    `sbcommands`,
    `commandssb`,
    `sbhelp`,
    `helpsuperbrainz`,
    `helpsuper`,
    `sbdecks`,
    `deckssb`,
    `superbrainzhelp`,
    `superbrainzdecks`,
  ],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Super Brainz decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
          .setValue("control")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
      );
    const row = new ActionRowBuilder().addComponents(select);
    const superBrainzDecks = {
      budgetDecks: ["budgetsb"],
      ladderDecks: ["telimpssb"],
      comboDecks: ["telimpssb"],
      controlDecks: ["telimpssb"],
      tempoDecks: ["budgetsb"],
      allDecks: ["budgetsb", "telimpssb"],
    };
    let helpsb = new CreateHelpEmbed(
      "Super Brainz Decks",
      `To view the SuperBrainz decks please select an option from the select menu below!
Note: There are ${superBrainzDecks.allDecks.length} total decks for Super Brainz in Tbot`,
      "https://static.wikia.nocookie.net/pvzheroes_gamepedia_en/images/3/37/Super_Brainz.png/revision/latest?cb=20160722160723"
    );
    let [result] = await db.query(`SELECT * FROM sbdecks`);
    function CreateDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
          { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
          { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
        )
        .setColor("#FFC0CB");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    let budgetsb = new CreateDeckEmbed(result, "budgetsb");
    let telimps = new CreateDeckEmbed(result, "telimpssb");
    const m = await message.channel.send({
      embeds: [helpsb],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        const value = i.values[0];
        if (value == "budget" || value == "tempo") {
          await i.reply({ embeds: [budgetsb], flags: MessageFlags.Ephemeral });
        }
        if (value == "ladder" || value == "combo" || value == "control") {
          await i.reply({ embeds: [telimps], flags: MessageFlags.Ephemeral });
        }
      }
    });
  },
};
