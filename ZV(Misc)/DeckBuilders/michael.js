const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  const db = require("../../index.js"); 
  const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
  module.exports = {
    name: `michael`,
    aliases: [
      `decksmadebymichael`,
      `helpmichael`,
      `michaelhelp`,
      `michaeldecks`,
      `michaeldecks`,
      `michael`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("midgargs")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("midgarg")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const midgarg = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpm")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["midgargs"];
       let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
      const user = await client.users.fetch("695442102133456918");
        const [rows] = await db.query(`select * from smdecks where creator like '%michael%'`);
      if (!rows || rows.length === 0) {
        return message.channel.send("No Michael decks found in the database.");
      }
        const michael = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
           `My commands for decks created by ${user.displayName} are: ${toBuildString}
Note: ${user.displayName} has ${decks.length} total decks in Tbot
To view the decks, click the buttons below or use the commands listed above.`
        )
        .setThumbnail(user.displayAvatarURL())
        .setColor("#00FFFF");
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
        const midgargs = buildDeckEmbed(normalized[0].raw, "#00FFFF");
        const m = await message.channel.send({ embeds: [michael], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
           if(i.customId == "midgarg" || i.customId == "midgargs") {
            await i.update({embeds: [midgargs], components: [midgarg]})
          }
          else if(i.customId == "helpm" || i.customId == "help") {
            await i.update({embeds: [michael], components: [row]})
          }
        }); 
    }
}