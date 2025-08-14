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
  name: `franinja`,
  aliases: [`franinjadecks`, `franinjahelp`, `helpfraninja`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
   const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("pyromania")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("pyro")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const pyro= new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpf")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
    const decks = ["pyromania"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select pyromania from zmdecks`);
    const user = await client.users.fetch("488426862058405899");
    const fran = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My decks made by ${user.displayName} are ${toBuildString}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("#e0e0de")
      .setFooter({
        text: `To view Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`,
      });
const pyromania = new EmbedBuilder()
            .setTitle(`${result[5].pyromania}`)
            .setDescription(`${result[3].pyromania}`)
            .setColor("Red")
            .setFooter({ text: `${result[2].pyromania}` })
            .addFields({
                name: "Deck Type",
                value: `${result[6].pyromania}`,
                inline: true
            }, {
                name: "Archetype",
                value: `${result[0].pyromania}`,
                inline: true
            }, {
                name: "Deck Cost",
                value: `${result[1].pyromania}`,
                inline: true
            })
            .setImage(`${result[4].pyromania}`);
    const m = await message.channel.send({ embeds: [fran], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
    if (i.customId == "pyromania" || i.customId == "pyro") {
          await i.update({ embeds: [pyromania], components: [pyro] });
        }
        else if (i.customId == "helpf" || i.customId == "help") {
          await i.update({ embeds: [fran], components: [row] });
        }
    });
  },
};
