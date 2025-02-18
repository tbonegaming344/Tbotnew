const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    StringSelectMenuBuilder, 
    StringSelectMenuOptionBuilder,
    MessageFlags
  } = require("discord.js");
  let db = require("../../index.js")
  module.exports = {
    name: `maker`,
    aliases: [
      `decksmadebymaker`,
      `helpmaker`,
      `makerhelp`,
      `makerdecks`,
      `makerdecks`,
      `maker`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Maker's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Deck")
        .setValue("competitive")
        .setDescription('Some of the Best Decks in the game')
				.setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
        .setLabel("Ladder Deck")
        .setValue("ladder")
        .setDescription('Decks that mostly only good for ranked games')
					.setEmoji("<:ladder:1271503994857979964>"), 
          new StringSelectMenuOptionBuilder()
          .setLabel('Combo Deck')
					.setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
					.setValue('combo'), 
					new StringSelectMenuOptionBuilder()
					.setLabel('Control Deck')
					.setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
					.setValue('control'),
					new StringSelectMenuOptionBuilder()
					.setLabel('Midrange Deck')
					.setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
					.setValue('midrange')
      )
      const row = new ActionRowBuilder().addComponents(select)
      let decks = ["mechascope", "reflourished"];
      let toBuildString = "";
      for (let i = 0; i < decks.length; i++) {
        let deck = decks[i];
        toBuildString += `\n<@1043528908148052089> **${deck}**`;
      }
      let user = await client.users.fetch("854693227318870037");
        let [result] = await db.query(`select otkmecha, reflourished from imdecks im inner join ccdecks cc on im.deckinfo = cc.deckinfo`)
        let maker = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `To view the Decks Made By ${user.displayName} please select an option from the select menu below
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
        )
        .setThumbnail(user.displayAvatarURL())
        .setColor("Random");
        let mechascope = new EmbedBuilder()
        .setTitle(`${result[5].otkmecha}`)
        .setDescription(`${result[3].otkmecha}`)
        .setFooter({text: `${result[2].otkmecha}`})
                .addFields({
                    name: "Deck Type",
                    value: `${result[6].otkmecha}`,
                    inline: true
                },{
                    name: "Archetype", 
                    value: `${result[0].otkmecha}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].otkmecha}`,
                    inline: true
                })
            .setColor("Random")
            .setImage(`${result[4].otkmecha}`)
            let reflourished = new EmbedBuilder()
            .setTitle(`${result[5].reflourished}`)
            .setDescription(`${result[3].reflourished}`)
          .setColor("Random")
          .setFooter({ text: `${result[2].reflourished}` })
          .addFields({
            name: "Deck Type",
            value: `${result[6].reflourished}`,
            inline: true
          },
          {
            name: "Archetype",
            value: `${result[0].reflourished}`,
            inline: true
          },
            {
            name: "Deck Cost",
            value: `${result[1].reflourished}`,
            inline: true
          })
          .setImage(`${result[4].reflourished}`);
        const m = await message.channel.send({ embeds: [maker], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
           if(i.customId == "select"){
            const value = i.values[0];
            if(value == "competitive" || value == "midrange"){
              await i.reply({embeds: [reflourished], flags: MessageFlags.Ephemeral})
            }
            else if(value == "ladder" || value == "control" || value == "combo"){
              await i.reply({embeds: [mechascope], flags: MessageFlags.Ephemeral})
           }
          }
        }); 
    }
}