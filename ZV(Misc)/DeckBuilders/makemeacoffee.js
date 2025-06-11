const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    MessageFlags,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
  } = require("discord.js");
  const db = require("../../index.js");
  module.exports = {
    name: `makemeacoffee`,
    aliases: [
      `decksmadebymakemeacoffee`,
      `makemeacoffeedecks`,
      `makemeacoffeehelp`,
      `helpmakemeacoffee`,
      `coffee`, 
      `makemeacoffeedeck`,
      `coffeedecks`
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const select = new StringSelectMenuBuilder()
           .setCustomId("select")
           .setPlaceholder(
             "Select an option below to view Make me a coffee's Decklists"
           )
           .addOptions(
            new StringSelectMenuOptionBuilder()
                      .setLabel("Ladder Decks")
                      .setDescription("Decks that are generally only good for ranked games")
                      .setEmoji("<:ladder:1271503994857979964>")
                      .setValue("ladder"),
             new StringSelectMenuOptionBuilder()
               .setLabel("Meme Decks")
               .setValue("meme")
               .setDescription("Decks that are built off a weird/fun combo"),
             new StringSelectMenuOptionBuilder()
               .setLabel("Combo Decks")
               .setValue("combo")
               .setDescription(
                 "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
               ),
             new StringSelectMenuOptionBuilder()
               .setLabel("Midrange Decks")
               .setValue("midrange")
               .setDescription(
                 "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
               ), 
                new StringSelectMenuOptionBuilder()
                         .setLabel("Tempo Deck")
                         .setDescription(
                           "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
                         )
                         .setValue("tempo")
           );
      const row = new ActionRowBuilder().addComponents(select);
      const decks = ["bayonet", "recycling"];
      let toBuildString = "";
      for (const deck of decks) {
        toBuildString += `\n<@1043528908148052089> **${deck}**`;
      }
      const [result] = await db.query(`select bayonet, recycling from ccdecks cc inner join 
        spdecks sp on cc.deckinfo = sp.deckinfo`);
      const user = await client.users.fetch("873583389322653736");
      const makemeacoffee = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `To view the decks made by ${user.displayName}, please select an option from the select menu below.
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
        )
        .setThumbnail(user.displayAvatarURL())
        .setColor("White");
        const recycling = new EmbedBuilder()
        .setTitle(`${result[5].recycling}`)
        .setDescription(`${result[3].recycling}`)
        .setFooter({ text: `${result[2].recycling}` })
        .addFields({
            name: "Deck Type",
            value: `${result[6].recycling}`,
            inline: true
        }, {
            name: "Archetype",
            value: `${result[0].recycling}`,
            inline: true
        }, {
            name: "Deck Cost",
            value: `${result[1].recycling}`,
            inline: true
        })
        .setColor("White")
        .setImage(`${result[4].recycling}`);
      const bayonet = new EmbedBuilder()
        .setTitle(`${result[5].bayonet}`)
        .setDescription(`${result[3].bayonet}`)
        .setFooter({ text: `${result[2].bayonet}` })
        .addFields({
          name: "Deck Type",
          value: `${result[6].bayonet}`,
          inline: true,
        }, {
          name: "Archetype",
          value: `${result[0].bayonet}`,
          inline: true,
        }, {
          name: "Deck Cost",
          value: `${result[1].bayonet}`,
          inline: true,
        })
        .setColor("White")
        .setImage(`${result[4].bayonet}`);
      const m = await message.channel.send({
        embeds: [makemeacoffee],
        components: [row],
      });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
       if(i.customId === "select") {
        const value = i.values[0];
        if(value == "ladder" || value == "combo" || value== "tempo"){
          await i.reply({embeds: [bayonet], flags: MessageFlags.Ephemeral});
        }
        else if(value == "meme" || value == "midrange") {
          await i.reply({embeds: [recycling], flags: MessageFlags.Ephemeral});
        }
      }
      });
    },
  };