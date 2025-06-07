const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  const db = require("../../index.js")
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
          .setCustomId("piport")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("pip")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const pip = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpm")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["piport"];
       let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
      const user = await client.users.fetch("695442102133456918");
        const [result] = await db.query(`select piport from ntdecks nt`)
        const michael = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
           `My commands for decks created by ${user.displayName} are: ${toBuildString}
Note: ${user.displayName} has ${decks.length} total decks in Tbot
To view the decks, click the buttons below or use the commands listed above.`
        )
        .setThumbnail(user.displayAvatarURL())
        .setColor("#00FFFF");
        const piport = new EmbedBuilder()
        .setTitle(`${result[5].piport}`)
        .setDescription(`${result[3].piport}`)
        .setFooter({text: `${result[2].piport}`})
                .addFields({
                    name: "Deck Type",
                    value: `${result[6].piport}`,
                    inline: true
                },{
                    name: "Archetype", 
                    value: `${result[0].piport}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].piport}`,
                    inline: true
                })
            .setColor("#00FFFF")
            .setImage(`${result[4].piport}`);
        const m = await message.channel.send({ embeds: [michael], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
           if(i.customId == "pip" || i.customId == "piport") {
            await i.update({embeds: [piport], components: [pip]})
          }
          else if(i.customId == "helpm" || i.customId == "help") {
            await i.update({embeds: [michael], components: [row]})
          }
        }); 
    }
}