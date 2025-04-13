const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  let db = require("../../index.js");
  module.exports = {
    name: `hayri`,
    aliases: [`helphayri`, `hayrihelp`, `decksmadebyhayri`, `hayridecks`, `hariyana`],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("uncrackamech")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("um")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const um = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helph")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      let decks = ["uncrackamech"];
      let toBuildString = "";
      for (const deck in decks) {
        toBuildString += `\n<@1043528908148052089> **${deck}**`;
      }
      let [result] = await db.query(`select feastmech from zmdecks`)
      let user = await client.users.fetch("354293785980829696");
      let hayri = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("#d67fcc");
      let uncrackamech= new EmbedBuilder()
      .setTitle(`${result[5].feastmech}`)
      .setDescription(`${result[3].feastmech}`)
      .setColor("#d67fcc")
      .setImage(`${result[4].feastmech}`)
      .setFooter({ text: `${result[2].feastmech}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].feastmech}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].feastmech}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].feastmech}`,
        inline: true
      });
      const m = await message.channel.send({
        embeds: [hayri],
        components: [row],
      });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if (i.customId == "um" || i.customId == "uncrackamech") {
          await i.update({ embeds: [uncrackamech], components: [um] });
        }
        else if (i.customId == "helph" || i.customId == "help") {
          await i.update({ embeds: [hayri], components: [row] });
        }
      });
    },
  };