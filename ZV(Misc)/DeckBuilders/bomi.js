const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  const db = require("../../index.js");
  module.exports = {
    name: `bomi`,
    aliases: [
      `decksmadebybomi`,
      `helpbomi`,
      `bomihelp`,
      `bomidecks`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("conjureleap")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("cleap")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const cleap = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpb")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["conjureleap"];
      let toBuildString = "";
      for (const deck of decks) {
        toBuildString += `\n<@${client.user.id}> **${deck}**`;
      }
      const [result] = await db.query(`SELECT conjureleap FROM hgdecks`);
      const user = await client.users.fetch("1266489590106161246");
      const bomi = new EmbedBuilder()
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
        const conjureleap = new EmbedBuilder()
        .setTitle(`${result[5].conjureleap}`)
        .setDescription(`${result[3].conjureleap}`)
        .setFooter({text: `${result[2].conjureleap}`})
                .addFields({
                    name: "Deck Type", 
                    value: `${result[6].conjureleap}`,
                    inline: true
                },{
                    name: "Archetype",
                    value: `${result[0].conjureleap}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].conjureleap}`,
                    inline: true
                })
            .setColor("#90D5FF")
    .setImage(`${result[4].conjureleap}`)
      const m = await message.channel.send({
        embeds: [bomi],
        components: [row],
      });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if (i.customId == "cleap" || i.customId == "conjureleap") {
          await i.update({ embeds: [conjureleap], components: [cleap] });
        }
        else if (i.customId == "helpb" || i.customId == "help") {
          await i.update({ embeds: [bomi], components: [row] });
        }
      });
    },
  };