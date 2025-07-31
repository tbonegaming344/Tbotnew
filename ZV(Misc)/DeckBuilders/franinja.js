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
     const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Please select an option below to view Franinja's Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comp"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setDescription("Decks that are generally only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder")
      )
      const row = new ActionRowBuilder().addComponents(select);
    const decks = ["marxbolt", "pyromania"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select marxbolt from rbdecks`);
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
      })
    const marxbolt = new EmbedBuilder()
      .setTitle(`${result[5].marxbolt}`)
      .setDescription(`${result[3].marxbolt}`)
      .setFooter({ text: `${result[2].marxbolt}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].marxbolt}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].marxbolt}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].marxbolt}`,
          inline: true,
        }
      )
      .setColor("#e0e0de")
      .setImage(`${result[4].marxbolt}`);
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
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "ladder") {
        await i.reply({embeds: [marxbolt], flags: MessageFlags.Ephemeral});
      } else if (value == "comp"){
        await i.reply({embeds: [pyromania], flags: MessageFlags.Ephemeral});
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } 
    });
  },
};
