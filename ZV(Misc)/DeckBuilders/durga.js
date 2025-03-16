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
  function CreateHelpEmbed(title, description, thumbnail, footer){
    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description)
      .setThumbnail(thumbnail)
      .setColor("Random");
    if (footer) {
      embed.setFooter({ text: `${footer}` });
    }
    return embed;
  }
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
          .setLabel("Ladder Decks")
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
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("All Decks")
        .setValue("all")
        .setDescription("View all decks created by Durga")
      );
      const row = new ActionRowBuilder().addComponents(select);
      const durgaDecks = {
        ladderDecks: ["bfplankcontrol", "pbeans"], 
        memeDecks: ["bastet"], 
        comboDecks: ["bastet"],
        controlDecks: ["bfplankcontrol"], 
        midrangeDecks: ["bastet"], 
        allDecks: ["bastet", "bfplankcontrol", "pbeans"]
      }
      function CreateButtons(leftButtonId, rightButtonId) {
        return new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId(leftButtonId)
            .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
            .setStyle(ButtonStyle.Primary),
          new ButtonBuilder()
            .setCustomId(rightButtonId)
            .setEmoji("<:arrowright:1271446796207525898>")
            .setStyle(ButtonStyle.Primary)
        );
      }
      const ladderrow = new CreateButtons("pbeans", "bfpc")
      const bfpc = new CreateButtons("helpladder", "pb")
      const pb = new CreateButtons("bfplankcontrol", "ladderhelp")
      const alldecksrow = new CreateButtons("pbeans2", "bas")
      const bas = new CreateButtons("helpall", "bfpc2")
      const bfpc2 = new CreateButtons("bastet", "pb2")
      const pb2 = new CreateButtons("bfplankcontrol2", "allhelp")
      function BuildDeckString(decks) {
        return decks.map(deck => `\n<@1043528908148052089> **${deck}**`).join('');
      }  
      const toBuildString = BuildDeckString(durgaDecks.allDecks)
      const ladderString = BuildDeckString(durgaDecks.ladderDecks)
      let user = await client.users.fetch("736455305457696779");
        let [result] = await db.query(`select bastet, bfplankcontrol, pbeans from 
          imdecks im inner join bfdecks bf on (im.deckinfo = bf.deckinfo)
          inner join gsdecks gs on (im.deckinfo = gs.deckinfo)`);
        const durga = new CreateHelpEmbed(
          `${user.displayName} Decks`, 
          `To view the Decks Made By ${user.displayName} please select an option from the select menu below
Note: ${user.displayName} has ${durgaDecks.allDecks.length} total decks in Tbot`, 
        user.displayAvatarURL()
        )
        const ladderEmbed = new CreateHelpEmbed(
          `${user.displayName} Ladder Decks`, 
          `My ladder decks made by Durga are to ${ladderString}`, 
          user.displayAvatarURL(),
          `To view the ladder decks made by ${user.displayName} please click on the buttons below or use commands listed above
Note: Durga has ${durgaDecks.ladderDecks.length} ladder decks in Tbot`
        )
        const allDecksEmbed = new CreateHelpEmbed(
          `${user.displayName} Decks`, 
          `My decks made by Durga are to ${toBuildString}`, 
          user.displayAvatarURL(),
          `To view all the decks made by ${user.displayName} please click on the buttons below or use commands listed above
Note: Durga has ${durgaDecks.allDecks.length} decks in Tbot`
        )
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
            .setColor("Random");
          const imageUrl = result[4][deckName];
          if (imageUrl) {
            embed.setImage(imageUrl);
          }
          return embed;
        }
        const bastet = new CreateDeckEmbed(result, "bastet")
        const bfplankcontrol = new CreateDeckEmbed(result, "bfplankcontrol")
        const pbeans = new CreateDeckEmbed(result, "pbeans")
        const m = await message.channel.send({ embeds: [durga], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        async function HandleSelectMenu(i) {
          const value = i.values[0];
          if(value == "control"){
            await i.reply({ embeds: [bfplankcontrol], flags: MessageFlags.Ephemeral });
          }
          else if(value == "ladder"){
            await i.update({embeds: [ladderEmbed], components: [ladderrow]})
          }
          else if(value == "meme" || value == "combo" || value == "midrange"){
            await i.reply({ embeds: [bastet], flags: MessageFlags.Ephemeral });
          }
          else if(value == "all"){
            await i.update({embeds: [allDecksEmbed], components: [alldecksrow]})
          }
        }
        async function HandleButtonInteraction(i) {
          if(i.customId == "pb" || i.customId == "pbeans"){
          await i.update({embeds: [pbeans], components: [pb]})
          }
          else if(i.customId == "bfpc" || i.customId == "bfplankcontrol"){
            await i.update({embeds: [bfplankcontrol], components: [bfpc]})
          }
          else if(i.customId == "helpladder" || i.customId == "ladderhelp"){
            await i.update({embeds: [ladderEmbed], components: [ladderrow]})
          }
         else if(i.customId == "bas" || i.customId == "bastet"){
          await i.update({embeds: [bastet], components: [bas]})
         } 
         else if(i.customId == "bfpc2" || i.customId == "bfplankcontrol2"){
          await i.update({embeds: [bfplankcontrol], components: [bfpc2]})
         }
         else if(i.customId == "pb2" || i.customId == "pbeans2"){
          await i.update({embeds: [pbeans], components: [pb2]})
         }
         else if(i.customId == "helpall" || i.customId == "allhelp"){
          await i.update({embeds: [allDecksEmbed], components: [alldecksrow]})
         }
        }
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
          if (i.customId === "select") {
            await HandleSelectMenu(i);
          } else {
            await HandleButtonInteraction(i);
          }
            });
    }
}