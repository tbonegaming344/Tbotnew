const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `knabbs`,
  aliases: [`knabbshelp`, `helpknabbs`, `knabbsdecks`, `decksmadebyknabbs`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("funnyflare")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("ff")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const ff = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpk")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
    const decks = ["funnyflare"];
     let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] = await db.query(`select funnyflare from sfdecks sf`);
    const user = await client.users.fetch("729709542623150123");
    const knabbs = new EmbedBuilder()
    .setTitle(`${user.displayName} Decks`)
    .setDescription(
      `My commands for decks made by ${user.displayName} are ${toBuildString}`
    )
    .setFooter({
      text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor("#88E788")
    const fflare = new EmbedBuilder()
    .setTitle(`${result[5].funnyflare}`)	
    .setDescription(`${result[3].funnyflare}`)
    .setFooter({text:`${result[2].funnyflare}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].funnyflare}`,
      inline: true
    },
    {
      name: "Archetype",
      value: `${result[0].funnyflare}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].funnyflare}`,
      inline: true
    })
  .setColor("#88E788")
  .setImage(`${result[4].funnyflare}`)
    const m = await message.channel.send({
      embeds: [knabbs],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ff" || i.customId == "funnyflare") {
        await i.update({ embeds: [fflare], components: [ff] });
    }
    else if (i.customId == "helpk" || i.customId == "help") {
        await i.update({ embeds: [knabbs], components: [row] });
    }
});
  },
};
