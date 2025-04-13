const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  let db = require("../../index.js");
  module.exports = {
    name: `contusion`,
    aliases: [
      `decksmadebycontusion`,
      `helpcontusion`,
      `contusionhelp`,
      `contusiondecks`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("brady")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("br")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const br = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpc")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      let decks = ["brady"];
      let toBuildString = "";
      for (const deck of decks) {
        toBuildString += `\n<@${client.user.id}> **${deck}**`;
      }
      let [result] = await db.query(`SELECT brady FROM zmdecks`);
      let user = await client.users.fetch("758481952725532692");
      let contusion = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(
          `My commands for decks made by ${user.displayName} are ${toBuildString}`
        )
        .setFooter({
          text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
        })
        .setThumbnail(user.displayAvatarURL())
        .setColor("Orange")
        let brady = new EmbedBuilder()
        .setTitle(`${result[5].brady}`)
        .setDescription(`${result[3].brady}`)
        .setFooter({text: `${result[2].brady}`})
                .addFields({
                    name: "Deck Type", 
                    value: `${result[6].brady}`,
                    inline: true
                },{
                    name: "Archetype",
                    value: `${result[0].brady}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].brady}`,
                    inline: true
                })
            .setColor("Orange")
    .setImage(`${result[4].brady}`)
      const m = await message.channel.send({
        embeds: [contusion],
        components: [row],
      });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if (i.customId == "br" || i.customId == "brady") {
          await i.update({ embeds: [brady], components: [br] });
        }
        else if (i.customId == "helpc" || i.customId == "help") {
          await i.update({ embeds: [contusion], components: [row] });
        }
      });
    },
  };
  