const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  const db = require("../../index.js");
 const buildDeckEmbed = require("../../Utilities/buildDeckEmbed.js");
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
          const decks = ["gargstar22"];
          const color = "Blue";
           let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
          const [rows] = await db.query(`SELECT * FROM ebdecks where creator like '%oceanman%'`);
          if (!rows || rows.length === 0) {
      return message.channel.send("No OceanMan decks found in the database.");
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
          const user = await client.users.fetch("585648378290110469");
          const oceanman = new EmbedBuilder()
            .setTitle(`${user.displayName} Decks`)
            .setDescription(
              `My commands for decks made by ${user.displayName} are ${toBuildString}`
            )
            .setFooter({
              text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
            })
            .setThumbnail(user.displayAvatarURL())
            .setColor(color);
            const gargstar22 = buildDeckEmbed(normalized[0].raw, color);
          const m = await message.channel.send({ embeds: [oceanman], components: [row] });
          const iFilter = (i) => i.user.id === message.author.id;
          const collector = m.createMessageComponentCollector({ filter: iFilter });
          collector.on("collect", async (i) => {
            if (i.customId == "gstar22" || i.customId == "gargstar22") {
              await i.update({ embeds: [gargstar22], components: [gstar22] });
            }
            else if (i.customId == "helpoceanman" || i.customId == "help") {
              await i.update({ embeds: [oceanman], components: [row] });
            }
          });
        },
      };