const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  const db = require("../../index.js")
  module.exports = {
    name: `maker`,
    aliases: [
      `decksmadebymaker`,
      `helpmaker`,
      `makerhelp`,
      `makerdecks`,
      `makerdecks`,
      `maker`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("mechascope")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("ms")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const ms = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpm")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["mechascope"];
       let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
      const user = await client.users.fetch("854693227318870037");
        const [result] = await db.query(`select otkmecha from imdecks im`)
        const maker = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
           `My commands for decks created by ${user.displayName} are: ${toBuildString}`
        )
        .setThumbnail(user.displayAvatarURL())
        .setFooter({text: `Note: ${user.displayName} has ${decks.length} total decks in Tbot
To view the decks, click the buttons below or use the commands listed above.`})
        .setColor("Orange");
        const mechascope = new EmbedBuilder()
        .setTitle(`${result[5].otkmecha}`)
        .setDescription(`${result[3].otkmecha}`)
        .setFooter({text: `${result[2].otkmecha}`})
                .addFields({
                    name: "Deck Type",
                    value: `${result[6].otkmecha}`,
                    inline: true
                },{
                    name: "Archetype", 
                    value: `${result[0].otkmecha}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].otkmecha}`,
                    inline: true
                })
            .setColor("Orange")
            .setImage(`${result[4].otkmecha}`);
        const m = await message.channel.send({ embeds: [maker], components: [row] });
        const iFilter = (i) => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: iFilter });
        collector.on("collect", async (i) => {
           if(i.customId == "ms" || i.customId == "mechascope") {
            await i.update({embeds: [mechascope], components: [ms]})
          }
          else if(i.customId == "helpm" || i.customId == "help") {
            await i.update({embeds: [maker], components: [row]})
          }
        }); 
    }
}