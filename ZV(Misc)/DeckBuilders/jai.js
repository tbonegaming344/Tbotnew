const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  let db = require("../../index.js");
  module.exports = {
    name: `jai`,
    aliases: [`decksmadebyjai`, `jaidecks`, `helpjai`, `jaihelp`],
    category: `DeckBuilders`,
    run: async (client, message, args) => {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("raiserpackage")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("rpack")
           .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      const rpack = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("helpj")
         .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId("help")
           .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
      let decks = ["raiserpackage"];
      let toBuildString = "";
      for (let i = 0; i < decks.length; i++) {
        toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
      }
      let [result] = await db.query(`SELECT raiserpackage FROM bfdecks`);
      let user = await client.users.fetch("1297610467333767299");
      let jai = new EmbedBuilder()
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
        let raiserpackage= new EmbedBuilder()
        .setTitle(`${result[5].raiserpackage}`)	
                .setDescription(`${result[3].raiserpackage}`)
        .setFooter({text: `${result[2].raiserpackage}`})
                .addFields({
                    name: "Deck Type", 
                    value: `${result[6].raiserpackage}`,
                    inline: true
                },{
                    name: "Archetype",
                    value: `${result[0].raiserpackage}`,
                    inline: true
                },{
                    name: "Deck Cost", 
                    value:`${result[1].raiserpackage}`,
                    inline: true
                })
            .setColor("Random")			
            .setImage(`${result[4].raiserpackage}`)
      const m = await message.channel.send({ embeds: [jai], components: [row] });
      const iFilter = (i) => i.user.id === message.author.id;
      const collector = m.createMessageComponentCollector({ filter: iFilter });
      collector.on("collect", async (i) => {
        if (i.customId == "rpack" || i.customId == "raiserpackage") {
          await i.update({ embeds: [raiserpackage], components: [rpack] });
        }
        if (i.customId == "helpj" || i.customId == "help") {
          await i.update({ embeds: [jai], components: [row] });
        }
      });
    },
  };