const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
const db = require("../../index.js");
const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
module.exports = {
  name: `slewer`,
  aliases: [`decksmadebyslewer`, `slewerdecks`, `slewerhelp`, `helpslewer`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const color = "#d07be0";
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("portalgun")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pgun")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pgun = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpslewer")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["portalgun"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [rows] = await db.query(`select * from imdecks where creator like '%slewer%'`);
    if (!rows || rows.length === 0) {
      return message.channel.send("No Slewer decks found in the database.");
    }

    // normalize rows and key properties (added normalization fields)
    const normalized = rows.map((r) => {
      const rawType = (r.type || "").toString();
      const rawArch = (r.archetype || "").toString();
      const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove spaces/punctuation
      return {
        id: r.deckID ?? null,
        name: r.name ?? r.deckID ?? "Unnamed",
        type: rawType,
        archetype: rawArch,
        cost: r.cost ?? r.deckcost ?? "",
        typeNorm: normalize(rawType),
        archetypeNorm: normalize(rawArch),
        description: r.description ?? "",
        image: r.image ?? null,
        creator: r.creator ?? "",
        raw: r,
      };
    });
    const user = await client.users.fetch("780639126054633513");
    const slewer = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor(color);
    const portalgun = buildDeckEmbed(normalized[0], color);
    const m = await message.channel.send({ embeds: [slewer], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "pgun" || i.customId == "portalgun") {
        await i.update({ embeds: [portalgun], components: [pgun] });
      }
      else if (i.customId == "help" || i.customId == "helpslewer") {
        await i.update({ embeds: [slewer], components: [row] });
      }
    });
  },
};
