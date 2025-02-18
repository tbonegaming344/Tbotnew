const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  let db = require("../../index.js");
  module.exports = {
    name: `oceanman`,
    aliases: [
      `decksmadebyoceanman`,
      `helpoceanman`,
      `oceanmanhelp`,
      `oceanmandecks`,
      `decksmadebyoceanman`,
      `helpoceanman`,
      `oceanmanhelp`,
      `oceanmandecks`,
    ],
    category: `DeckBuilders`,
    run: async(client, message, args)=> {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId("gargstar22")
              .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
              .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
              .setCustomId("gstar22")
              .setEmoji("<:arrowright:1271446796207525898>")
              .setStyle(ButtonStyle.Primary)
          );
          const gstar22= new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId("helpoceanman")
              .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
              .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
              .setCustomId("help")
              .setEmoji("<:arrowright:1271446796207525898>")
              .setStyle(ButtonStyle.Primary)
          );
          let decks = ["gargstar22"];
          let toBuildString = "";
          for (let i = 0; i < decks.length; i++) {
            let deck = decks[i];
            toBuildString += `\n<@1043528908148052089> **${deck}**`;
          }
          let [result] = await db.query(`SELECT gargstar22 FROM ebdecks`)
          let user = await client.users.fetch("585648378290110469");
          let oceanman = new EmbedBuilder()
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
            let gargstar22 = new EmbedBuilder()
        .setTitle(`${result[5].gargstar22}`)
        .setDescription(`${result[3].gargstar22}`)
        .setFooter({ text: `${result[2].gargstar22}` })
        .addFields({
          name: "Deck Type",
          value: `${result[6].gargstar22}`,
          inline: true
        },{ 
          name: "Archetype", 
          value: `${result[0].gargstar22}`,
          inline: true
        },{ 
          name: "Deck Cost", 
          value: `${result[1].gargstar22}`,
          inline: true
        })
        .setColor("Random")
        .setImage(`${result[4].gargstar22}`);
          const m = await message.channel.send({ embeds: [oceanman], components: [row] });
          const iFilter = (i) => i.user.id === message.author.id;
          const collector = m.createMessageComponentCollector({ filter: iFilter });
          collector.on("collect", async (i) => {
            if (i.customId == "gstar22" || i.customId == "gargstar22") {
              await i.update({ embeds: [gargstar22], components: [gstar22] });
            }
            if (i.customId == "helpoceanman" || i.customId == "help") {
              await i.update({ embeds: [oceanman], components: [row] });
            }
          });
        },
      };