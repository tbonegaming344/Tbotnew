const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js");
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
    let decks = ["budgetsb", "teleimpssb"];
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Super Brainz decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
			.setEmoji("💰"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
    )
    const row = new ActionRowBuilder().addComponents(select)
    const budgetdecks = ["budgetsb"]
    const ladderdecks = ["telimpssb"]
    const combodecks = ["telimpssb"]
    let controldecks = ["telimpssb"]
    const tempodecks = ["budgetsb"]
     let helpsb = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzheroes_gamepedia_en/images/3/37/Super_Brainz.png/revision/latest?cb=20160722160723"
      )
      .setTitle("Super Brainz Decks")
      .setDescription(`To view the SuperBrainz decks please select an option from the select menu below!
Note: There are ${decks.length} total decks for Super Brainz in Tbot`)
      .setColor("Random");
    let [result] = await db.query(`SELECT * FROM sbdecks`);
    let budgetsb= new EmbedBuilder()
      .setTitle(`${result[5].budgetsb}`)
      .setDescription(`${result[3].budgetsb}`)
      .setFooter({ text: `${result[2].budgetsb}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetsb}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetsb}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetsb}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetsb}`);
    let telimps = new EmbedBuilder()
      .setTitle(`${result[5].telimpssb}`)
      .setDescription(`${result[3].telimpssb}`)
      .setFooter({ text: `	${result[2].telimpssb}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].telimpssb}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].telimpssb}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].telimpssb}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].telimpssb}`);
    const m = await message.channel.send({
      embeds: [helpsb],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "budget" || value == "tempo"){
          await i.reply({embeds: [budgetsb], flags: MessageFlags.Ephemeral})
        }
        if(value == "ladder" || value == "combo" || value == "control"){
          await i.reply({embeds: [telimps], flags: MessageFlags.Ephemeral})
        }
      }
      

    });
  },
};
