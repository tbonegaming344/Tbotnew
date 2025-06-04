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
module.exports ={
  name: `wildisnub`,
  aliases: [
    `wildhelp`,
    `helpwild`,
    `wild1`,
    `decksmadebywild`,
    `wilddecks`,
    `wilddeck`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
   const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dinogloves")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dgloves")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dgloves = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpw")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wildDecks = {
      allDecks: ["dinogloves"],
    };
    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = BuildDeckString(wildDecks.allDecks);
    const user = await client.users.fetch("701053825628241951");
    const wild = new EmbedBuilder()
    .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Blue");
    const [result] =
      await db.query(`select dinogloves from gkdecks gk`);
     /**
     * The createDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
    function createDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
          { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
          { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
        )
        .setColor("Blue");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const dinogloves = createDeckEmbed(result, "dinogloves");
    const m = await message.channel.send({ embeds: [wild], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      if (i.customId == "dgloves" || i.customId == "dinogloves") {
        await i.update({ embeds: [dinogloves], components: [dgloves] });
      } else if (i.customId == "helpw" || i.customId == "help") {
        await i.update({ embeds: [wild], components: [row] });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
        await handleButtonInteraction(i);
    });
  },
};
