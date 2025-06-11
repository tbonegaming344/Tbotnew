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
        const [result] = await db.query(`select bayonet from ccdecks cc`)
        const masterbomber32 = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
           `My commands for decks created by ${user.displayName} are: ${toBuildString}`
        )
        .setThumbnail(user.displayAvatarURL())
        .setFooter({text: `Note: ${user.displayName} has ${decks.length} total decks in Tbot
To view the decks, click the buttons below or use the commands listed above.`})
        .setColor("Orange");
        const bayonet = new EmbedBuilder()
        .setTitle(`${result[5].bayonet}`)
        .setDescription(`${result[3].bayonet}`)
        .setFooter({text: `${result[2].bayonet}`})
                .addFields({
                    name: "Deck Type",
                    value: `${result[6].bayonet}`,
                    inline: true
                },{
                    name: "Archetype", 
                    value: `${result[0].bayonet}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].bayonet}`,
                    inline: true
                })
            .setColor("Orange")
            .setImage(`${result[4].bayonet}`);
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