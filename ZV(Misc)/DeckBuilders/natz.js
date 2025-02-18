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
  module.exports = {
    name: `natz`,
    aliases: [
      `decksmadebynatz`,
      `helpnatz`,
      `natzhelp`,
      `natzdecks`,
      `natzdecks`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Please select an option below to view Natz Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Deck")
        .setDescription('Some of the best Decks in the game')
        .setEmoji("<:compemote:1325461143136764060>")
        .setValue("comp"), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Meme Deck")
        .setDescription("Decks that are built off a weird/fun combo")
        .setValue("meme"), 
        new StringSelectMenuOptionBuilder()
        .setLabel('Control Deck')
        .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
        .setValue('control'),
        new StringSelectMenuOptionBuilder()
        .setLabel('Midrange Deck')
        .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
        .setValue('midrange'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("All Natz Decks")
        .setDescription("An option to view all decks")
        .setValue("all")
      )
      const row = new ActionRowBuilder()
        .addComponents(select);
      const alldecksrow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("toyotacontrolla")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("lt")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const lt = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpnatz")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("tc")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const tc = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("ladytuna")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      let decks = ["ladytuna", "toyotacontrolla"];
      let toBuildString = "";
      for (let i = 0; i < decks.length; i++) {
        let deck = decks[i];
        toBuildString += `\n<@1043528908148052089> **${deck}**`;
      }
      let user = await client.users.fetch("608656205589512195");
        let [result] = await db.query(`select ladytuna, toyotacontrolla from ntdecks nt inner join ncdecks nc on nt.deckinfo = nc.deckinfo`);
        let natz = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `To view decks made by ${user.displayName} please select an option from the select menu below
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
        )
        .setThumbnail(user.displayAvatarURL())
        .setColor("Random");
        let alldecksEmbed = new EmbedBuilder()
        .setTitle(`All Decks Made By ${user.displayName}`)
        .setDescription(`My commands for decks made by ${user.displayName} are ${toBuildString}`)
        .setFooter({
          text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
        })
        .setThumbnail(user.displayAvatarURL())
        .setColor("Random");

        let toyotacontrolla = new EmbedBuilder()
        .setTitle(`${result[5].toyotacontrolla}`)
        .setDescription(`${result[3].toyotacontrolla}`)
        .setFooter({text: `${result[2].toyotacontrolla}`})
                .addFields({
                    name: "Deck Type",
                    value: `${result[6].toyotacontrolla}`,
                    inline: true
                },
                {
                    name: "Archetype",
                    value: `${result[0].toyotacontrolla}`,
                    inline: true
                },
                {
                    name: "Deck Cost", 
                    value:`${result[1].toyotacontrolla}`,
                    inline: true
                })
            .setColor("Random")		
            .setImage(`${result[4].toyotacontrolla}`)
            let ladytuna = new EmbedBuilder()
            .setTitle(`${result[5].ladytuna}`)
            .setDescription(`${result[3].ladytuna}`)
            .setFooter({text: `${result[2].ladytuna}`})
                .setColor("Random")
                .setImage(`${result[4].ladytuna}`)
                    .addFields({
                        name: "Deck Type",
                        value: `${result[6].ladytuna}`,
                        inline: true
                    },{
                        name: "Archetype",
                        value: `${result[0].ladytuna}`,
                        inline: true
                    },{
                        name: "Deck Cost", 
                        value: `${result[1].ladytuna}`,
                        inline: true
                    })
        const m = await message.channel.send({ embeds: [natz], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
            if (i.customId == "tc" || i.customId == "toyotacontrolla") {
                await i.update({ embeds: [toyotacontrolla], components: [tc] });
            }
            if (i.customId == "helpnatz" || i.customId == "help") {
                await i.update({ embeds: [natz], components: [alldecksrow] });
            }
            if(i.customId == "lt" || i.customId == "ladytuna"){
              await i.update({embeds: [ladytuna], components: [lt]})
            }
            if(i.customId == "select"){
              const value = i.values[0]
              if(value == "all"){
                await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
              }
              if(value == "comp" || value == "control"){
                await i.reply({embeds: [toyotacontrolla], flags: MessageFlags.Ephemeral})
              }
              if(value == "meme" || value == "midrange"){
                await i.reply({embeds: [ladytuna], flags: MessageFlags.Ephemeral})
              }
              
            }
        }); 
    }
}