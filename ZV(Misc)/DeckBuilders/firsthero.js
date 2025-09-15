const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
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
    .setColor("Orange");

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
  name: `firsthero`,
  aliases: [
    `decksmadebyfirsthero`,
    `helpfirsthero`,
    `firstherohelp`,
    `firstherodecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lawnmower")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gbeyond")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gbeyond = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpf")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lmower")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lmower = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gobeyond")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = ["gobeyond", "lawnmower2"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@${client.user.id}> **${deck}**`;
    }
    const [rows] =
      await db.query(`SELECT * from sfdecks where creator like '%first hero%'
        union all select * from zmdecks where creator like '%first hero%'`);
    if (!rows || rows.length === 0) {
      return message.channel.send("No First hero decks found in the database.");
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
    const user = await client.users.fetch("746716954466713630");
    const firsthero = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Orange");
    const gobeyond = buildDeckEmbed(normalized[0]);
    const lawnmower = buildDeckEmbed(normalized[1]);
    const m = await message.channel.send({
      embeds: [firsthero],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "lmower" || i.customId == "lawnmower") {
        await i.update({ embeds: [lawnmower], components: [lmower] });
      } else if (i.customId == "helpf" || i.customId == "help") {
        await i.update({ embeds: [firsthero], components: [row] });
      } else if (i.customId == "gobeyond" || i.customId == "gbeyond") {
        await i.update({ embeds: [gobeyond], components: [gbeyond] });
      }
    });
  },
};
