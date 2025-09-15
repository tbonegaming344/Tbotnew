const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder
} = require("discord.js");
const db = require("../../index.js");
function buildDeckEmbed(row) {
  const embed = new EmbedBuilder()
    .setTitle(row.name || "Unknown")
    .setDescription(row.description || "")
    .setFooter({ text: row.creator || "" })
    .addFields(
      {
        name: "Deck Type",
        value: `**__${row.type}__**` || "N/A",
        inline: true,
      },
      {
        name: "Archetype",
        value: `**__${row.archetype}__**` || "N/A",
        inline: true,
      },
      {
        name: "Deck Cost",
        value: `${row.cost} <:spar:1057791557387956274>` || "N/A",
        inline: true,
      }
    )
    .setColor("#e0e0de");

  if (
    row.image &&
    typeof row.image === "string" &&
    row.image.startsWith("http")
  ) {
    embed.setImage(row.image);
  }
  return embed;
}
module.exports = {
  name: `glassinabin`,
  aliases: [`glassdecks`, `glasshelp`, `helpglass`, `glass`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uno")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("un")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const un = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpg")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["uno"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [rows] = await db.query(`select * from ifdecks where creator like '%GlassInABin%'`);
     if (!rows || rows.length === 0) {
          return message.channel.send("No GlassInABin decks found in the database.");
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
    const user = await client.users.fetch("1384235669697724579");
    const glass = new EmbedBuilder()
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
    const uno = buildDeckEmbed(normalized[0]);
    const m = await message.channel.send({ embeds: [glass], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "un" || i.customId == "uno") {
        await i.update({ embeds: [uno], components: [un] });
      } else if (i.customId == "helpg" || i.customId == "help") {
        await i.update({ embeds: [glass], components: [row] });
      }
    });
  },
};