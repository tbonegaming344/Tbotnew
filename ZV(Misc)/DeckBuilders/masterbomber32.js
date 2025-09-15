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
    name: `masterbomber32`,
    aliases: [
      `decksmadebymasterbomber32`,
      `helpmasterbomber32`,
      `masterbomber32help`,
      `masterbomber32decks`,
      `masterbomber32decks`,
      `masterbomber32`,
      `masterbomber`, 
      `mb32`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("bayonet")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("bay")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const bay = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpm")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["bayonet"];
       let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
      const user = await client.users.fetch("581158018557804550");
        const [rows] = await db.query(`select * from ccdecks where creator like '%masterbomber32%'`)
        if (!rows || rows.length === 0) {
      return message.channel.send("No Masterbomber32 decks found in the database.");
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
        const masterbomber32 = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
           `My commands for decks created by ${user.displayName} are: ${toBuildString}`
        )
        .setThumbnail(user.displayAvatarURL())
        .setFooter({text: `Note: ${user.displayName} has ${decks.length} total decks in Tbot
To view the decks, click the buttons below or use the commands listed above.`})
        .setColor("Orange");
        const bayonet = buildDeckEmbed(normalized[0]);
        const m = await message.channel.send({ embeds: [masterbomber32], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
           if(i.customId == "bay" || i.customId == "bayonet") {
            await i.update({embeds: [bayonet], components: [bay]})
          }
          else if(i.customId == "helpm" || i.customId == "help") {
            await i.update({embeds: [masterbomber32], components: [row]})
          }
        }); 
    }
}