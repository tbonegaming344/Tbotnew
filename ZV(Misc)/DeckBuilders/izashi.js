const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  let db = require("../../index.js");
  module.exports = {
    name: `izashi`,
    aliases: [`decksmadebyizashi`, `izashidecks`, `helpizashi`, `izashihelp`],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("watersports")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("ws")
           .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const ws = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpi")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
           .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      let decks = ["watersports"];
      let toBuildString = "";
      for (const deck of decks) {
        toBuildString += `\n<@1043528908148052089> **${deck}**`;
      }
      let [result] = await db.query(`SELECT watersports FROM bfdecks`);
      let user = await client.users.fetch("459030035295109120");
      let izashi = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `My commands for decks made by ${user.displayName} are ${toBuildString}`
        )
        .setFooter({
          text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
        })
        .setThumbnail(user.displayAvatarURL())
        .setColor("#DAB1DA");
        let watersports = new EmbedBuilder()
		.setTitle(`${result[5].watersports}`)
		.setDescription(`${result[3].watersports}`)
		.setColor("#DAB1DA")
		.setFooter({text: `${result[2].watersports}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].watersports}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].watersports}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].watersports}`,
			inline: true
		})
		.setImage(`${result[4].watersports}`)
      const m = await message.channel.send({ embeds: [izashi], components: [row] });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if (i.customId == "ws" || i.customId == "watersports") {
          await i.update({ embeds: [watersports], components: [ws] });
        }
        else if (i.customId == "helpi" || i.customId == "help") {
          await i.update({ embeds: [izashi], components: [row] });
        }
      });
    },
  };
  