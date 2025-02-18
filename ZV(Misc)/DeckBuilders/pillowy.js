const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  let db = require("../../index.js");
  module.exports = {
    name: `pillowy`,
    aliases: [
      `decksmadebypillowy`,
      `helppillowy`,
      `pillowyhelp`,
      `pillowydecks`,
      `decksmadebypillowy`,
      `helppillowy`,
      `pillowyhelp`,
      `pillowydecks`,
    ],
    category: `DeckBuilders`,
    run: async(client, message, args)=> {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId("starrings")
              .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
              .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
              .setCustomId("srings")
              .setEmoji("<:arrowright:1271446796207525898>")
              .setStyle(ButtonStyle.Primary)
          );
          const srings= new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId("helppillowy")
              .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
              .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
              .setCustomId("help")
              .setEmoji("<:arrowright:1271446796207525898>")
              .setStyle(ButtonStyle.Primary)
          );
          let decks = ["starrings"];
          let toBuildString = "";
          for (let i = 0; i < decks.length; i++) {
            let deck = decks[i];
            toBuildString += `\n<@1043528908148052089> **${deck}**`;
          }
          let [result] = await db.query(`SELECT sovietonion FROM gsdecks`)
          let user = await client.users.fetch("1157720864679272549");
          let pillowy = new EmbedBuilder()
            .setTitle(`${user.displayName} Decks`)
            .setDescription(
              `My commands for decks made by ${user.displayName} are ${toBuildString}`
            )
            .setFooter({
              text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
            })
            .setThumbnail(user.displayAvatarURL())
            .setColor("Random");
            let tsunion = new EmbedBuilder()
        .setTitle(`${result[5].sovietonion}`)
        .setDescription(`${result[3].sovietonion}`)
        .setFooter({text: `${result[2].sovietonion}`})
        .addFields({
            name: "Deck Type",
            value: `${result[6].sovietonion}`,
            inline: true
        },
        {
            name: "Archetype",
            value: `${result[0].sovietonion}`,
            inline: true
        },
        {
            name: "Deck Cost", 
            value: `${result[1].sovietonion}`,
            inline: true
        })
        .setColor("Random")
        .setImage(`${result[4].sovietonion}`)
          const m = await message.channel.send({ embeds: [pillowy], components: [row] });
          const iFilter = (i) => i.user.id === message.author.id;
          const collector = m.createMessageComponentCollector({ filter: iFilter });
          collector.on("collect", async (i) => {
            if (i.customId == "srings" || i.customId == "starrings") {
              await i.update({ embeds: [tsunion], components: [srings] });
            }
            if (i.customId == "helppillowy" || i.customId == "help") {
              await i.update({ embeds: [pillowy], components: [row] });
            }
          });
        },
      };