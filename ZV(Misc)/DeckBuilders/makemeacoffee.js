const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
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
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("recycling")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("recy")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const recy = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpcoffee")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["recycling"];
      let toBuildString = "";
      for (const deck of decks) {
        toBuildString += `\n<@1043528908148052089> **${deck}**`;
      }
      const [result] = await db.query(`select recycling from spdecks`);
      const user = await client.users.fetch("873583389322653736");
      const makemeacoffee = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `My commands for decks made by ${user.displayName} are ${toBuildString}`
        )
        .setFooter({
          text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
  Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
        })
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
      const m = await message.channel.send({
        embeds: [makemeacoffee],
        components: [row],
      });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if (i.customId == "recy" || i.customId == "recycling") {
          await i.update({ embeds: [recycling], components: [recy] });
        }
        else if(i.customId == "helpcoffee" || i.customId == "help") {
          await i.update({ embeds: [makemeacoffee], components: [row] });
        }
      });
    },
  };