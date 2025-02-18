const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  let db = require("../../index.js");
  module.exports = {
    name: `firsthero`,
    aliases: [`firstherodecks`, `firstherohelp`, `helpfirsthero`],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("sbgear2")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("sbg2")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const sbg2 = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpf")
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      let decks = ["sbg2"];
      let toBuildString = "";
      for (let i = 0; i < decks.length; i++) {
        toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
      }
      let user = await client.users.fetch("746716954466713630");
      let [result] = await db.query(`SELECT sbg2 from zmdecks`);
      let firsthero = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `My commands for decks made by ${user.displayName} are ${toBuildString}`
        )
        .setFooter({
          text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
        })
        .setThumbnail(user.displayAvatarURL())
        .setColor("Random");
        let sbgear2 = new EmbedBuilder()
        .setTitle(`${result[5].sbg2}`)
        .setDescription(`${result[3].sbg2}`)
        .setFooter({text: `${result[2].sbg2}`})
                    .addFields({
                        name: "Deck Type",
                        value: `${result[6].sbg2}`,
                        inline: true
                    },{
                        name: "Archetype",
                        value: `${result[0].sbg2}`,
                        inline: true
                    },{
                        name: "Deck Cost", 
                        value: `${result[1].sbg2}`,
                        inline: true
                    })
            .setColor("Random")
            .setImage(`${result[4].sbg2}`)
      const m = await message.channel.send({
        embeds: [firsthero],
        components: [row],
      });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if (i.customId == "sbg2" || i.customId == "sbgear2") {
          await i.update({ embeds: [sbgear2], components: [sbg2] });
        }
        if (i.customId == "helpf" || i.customId == "help") {
          await i.update({ embeds: [firsthero], components: [row] });
        }
      });
    },
  };
  