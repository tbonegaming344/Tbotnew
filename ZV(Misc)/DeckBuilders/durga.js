const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    StringSelectMenuBuilder, 
    StringSelectMenuOptionBuilder, 
    MessageFlags
  } = require("discord.js");
  let db = require("../../index.js");
const e = require("express");
  module.exports = {
    name: `durga`,
    aliases: [
      `decksmadebydurga`,
      `helpdurga`,
      `durgahelp`,
      `durgadecks`,
      `durgadecks`,
      `durga`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
     const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Durga's Decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription('Decks that mostly only good for ranked games')
					.setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setValue("meme")
          .setDescription('Decks that are built off a weird/fun combo'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setValue("combo")
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
          .setValue("control")
          .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setValue("midrange")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      );
      const row = new ActionRowBuilder().addComponents(select);
      let decks = ["bastet", "bfplankcontrol"];
      let toBuildString = "";
      for (let i = 0; i < decks.length; i++) {
        let deck = decks[i];
        toBuildString += `\n<@1043528908148052089> **${deck}**`;
      }
      const memedecks = ["bastet"];
      const midrangedecks = ["bastet"];
      const ladderdecks = ["bfplankcontrol"];
      const controldecks = ["bfplankcontrol"];
      const combodecks = ["bastet"];
      let user = await client.users.fetch("736455305457696779");
        let [result] = await db.query(`select bastet, bfplankcontrol from imdecks im inner join bfdecks bf on (im.deckinfo = bf.deckinfo)`);
        let durga = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `To view the Decks Made By ${user.displayName} please select an option from the select menu below
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
        )
        .setThumbnail(user.displayAvatarURL())
        .setColor("Random");
        let bastet = new EmbedBuilder()
        .setTitle(`${result[5].bastet}`)
        .setDescription(`${result[3].bastet}`)
        .setFooter({text: `${result[2].bastet}`})
        .addFields({
            name: "Deck Type",
            value: `${result[6].bastet}`,
            inline: true
        },{
            name: "Archetype", 
            value: `${result[0].bastet}`,
            inline: true
        },{
            name: "Deck Cost", 
            value: `${result[1].bastet}`,
            inline: true
        })
    .setColor("Random")
.setImage(`${result[4].bastet}`)
let bfplankcontrol = new EmbedBuilder()
.setTitle(`${result[5].bfplankcontrol}`)
.setDescription(`${result[3].bfplankcontrol}`)
.setFooter({text: `${result[2].bfplankcontrol}`})
            .addFields({
                name: "Deck Type",
                value: `${result[6].bfplankcontrol}`,
                inline: true
            },{
                name: "Archetype",
                value: `${result[0].bfplankcontrol}`,
                inline: true
            },{
                name: "Deck Cost", 
                value: `${result[1].bfplankcontrol}`,
                inline: true
            })
    .setColor("Random")
    .setImage(`${result[4].bfplankcontrol}`)
        const m = await message.channel.send({ embeds: [durga], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
            if(i.customId == "select"){
              const value = i.values[0];
              if(value == "ladder" || value == "control"){
                await i.reply({ embeds: [bfplankcontrol], flags: MessageFlags.Ephemeral });
              }
              if(value == "meme" || value == "combo" || value == "midrange"){
                await i.reply({ embeds: [bastet], flags: MessageFlags.Ephemeral });
              }
            }
        }); 
    }
}