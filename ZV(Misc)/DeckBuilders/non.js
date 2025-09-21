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
  name: `non`,
  aliases: [`nondecks`, `nonhelp`, `nonsequitur`, `nonsequiturhelp`, `nonsequiturdecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("zm")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("floss")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const flo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("zmoss")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const zm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("flo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const color = "Grey";
    const decks = ["floss", "zmoss"];
    let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [rows] = await db.query(`select * from zmdecks where creator like '%non%'
      union all select * from ntdecks where creator like '%non%'`);
    if (!rows || rows.length === 0) {
      return message.channel.send("No Non decks found in the database.");
    }
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
    const user = await client.users.fetch("1381608131766911078");
    const name = user.displayName;
    const non = new EmbedBuilder()
    .setTitle(`${name}'s Decks`)
    .setDescription(
      `My commands for decks made by ${name} are ${toBuildString}`
    )
    .setFooter({
      text: `To view the Decks Made By ${name} please use the commands listed above or click on the buttons below!
Note: ${name} has ${decks.length} total decks in Tbot`,
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor(color);
    const floss = buildDeckEmbed(normalized[0].raw, color);
    const zmoss = buildDeckEmbed(normalized[1].raw, color);
    const m = await message.channel.send({ embeds: [non], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId === "flo" || i.customId === "floss") {
        await i.update({ embeds: [floss], components: [flo] });
      }
      else if (i.customId === "zm" || i.customId === "zmoss") {
        await i.update({ embeds: [zmoss], components: [zm] });
      }
      else if(i.customId == "helpn" || i.customId == "help"){
        await i.update({embeds: [non], components: [row]});
      }
    });
  },
};
