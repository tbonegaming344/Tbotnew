const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  const db = require("../../index.js");
  module.exports = {
    name: `autony`,
    aliases: [
      `decksmadebyautony`,
      `helpautony`,
      `autonyhelp`,
      `autonydecks`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("cardsbolt")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("cbolt")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const cbolt= new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpa")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["cardsbolt"];
      let toBuildString = "";
      for (const deck of decks) {
        toBuildString += `\n<@${client.user.id}> **${deck}**`;
      }
      const [result] = await db.query(`SELECT cardsbolt FROM rbdecks`);
      const user = await client.users.fetch("1266489590106161246");
      const autony = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `My commands for decks made by ${user.displayName} are ${toBuildString}`
        )
        .setFooter({
          text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
        })
        .setThumbnail(user.displayAvatarURL())
        .setColor("#90D5FF")
        const cardsbolt = new EmbedBuilder()
        .setTitle(`${result[5].cardsbolt}`)
        .setDescription(`${result[3].cardsbolt}`)
        .setFooter({text: `${result[2].cardsbolt}`})
                .addFields({
                    name: "Deck Type", 
                    value: `${result[6].cardsbolt}`,
                    inline: true
                },{
                    name: "Archetype",
                    value: `${result[0].cardsbolt}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].cardsbolt}`,
                    inline: true
                })
            .setColor("#90D5FF")
    .setImage(`${result[4].cardsbolt}`)
      const m = await message.channel.send({
        embeds: [autony],
        components: [row],
      });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if (i.customId == "cleap" || i.customId == "cardsbolt") {
          await i.update({ embeds: [cardsbolt], components: [cbolt] });
        }
        else if (i.customId == "helpa" || i.customId == "help") {
          await i.update({ embeds: [autony], components: [row] });
        }
      });
    },
  };