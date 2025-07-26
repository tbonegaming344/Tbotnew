const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  const db = require("../../index.js");
  module.exports = {
    name: `firsthero`,
    aliases: [
      `decksmadebyfirsthero`,
      `helpfirsthero`,
      `firstherohelp`,
      `firstherodecks`,
    ],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("lawnmower")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("gbeyond")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const gbeyond = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpf")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("lmower")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)  
      );
      const lmower = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("gobeyond")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
         .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const decks = ["gobeyond", "lawnmower2"];
      let toBuildString = "";
      for (const deck of decks) {
        toBuildString += `\n<@${client.user.id}> **${deck}**`;
      }
      const [result] = await db.query(`SELECT gobeyond, lawnmower FROM sfdecks sf inner join zmdecks zm on (sf.deckinfo = zm.deckinfo)`);
      const user = await client.users.fetch("746716954466713630");
      const firsthero = new EmbedBuilder()
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
        const gobeyond = new EmbedBuilder()
        .setTitle(`${result[5].gobeyond}`)
        .setDescription(`${result[3].gobeyond}`)
        .setFooter({ text: `${result[2].gobeyond}` })
        .addFields({
          name: "Deck Type",
          value: `${result[6].gobeyond}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gobeyond}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gobeyond}`,
          inline: true,
        })
        .setColor("Orange")
        .setImage(`${result[4].gobeyond}`);
        const lawnmower = new EmbedBuilder()
        .setTitle(`${result[5].lawnmower}`)
        .setDescription(`${result[3].lawnmower}`)
        .setFooter({text: `${result[2].lawnmower}`})
                .addFields({
                    name: "Deck Type", 
                    value: `${result[6].lawnmower}`,
                    inline: true
                },{
                    name: "Archetype",
                    value: `${result[0].lawnmower}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value: `${result[1].lawnmower}`,
                    inline: true
                })
            .setColor("Orange")
    .setImage(`${result[4].lawnmower}`)
      const m = await message.channel.send({
        embeds: [firsthero],
        components: [row],
      });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if (i.customId == "lmower" || i.customId == "lawnmower") {
          await i.update({ embeds: [lawnmower], components: [lmower] });
        }
        else if (i.customId == "helpf" || i.customId == "help") {
          await i.update({ embeds: [firsthero], components: [row] });
        }
        else if (i.customId == "gobeyond" || i.customId == "gbeyond") {
          await i.update({ embeds: [gobeyond], components: [gbeyond] });
        }
      });
    },
  };