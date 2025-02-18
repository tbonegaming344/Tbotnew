const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `igma`,
  aliases: [
    `igmadecks`,
    `igmahelp`,
    `helpigma`,
    `decksmadebyigma`,
    `igmarockers`,
    `decksigma`,
    `deckigma`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setDescription("Decks that are mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setDescription('Plant Decks that are built off a weird/fun combo')
          .setValue("meme"), 
          new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.')
          .setValue("aggro"),
          new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
          .setValue("combo"),
          new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
          .setValue("midrange")
      )
    const row = new ActionRowBuilder().addComponent(select);
    let ladderdecks = [
      "igmaburn",
    ]
    let toBuildTempo = "";
    for (let i = 0; i < tempodecks.length; i++) {
      toBuildTempo += `\n<@1043528908148052089> **${tempodecks[i]}**`;
    }
    let decks = [
      "igmablobchum",
      "igmaburn",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select igmablobchum, igmaburn
from rbdecks rb 
inner join ebdecks eb
on (rb.deckinfo = eb.deckinfo)`);
    let user = await client.users.fetch("447911877020876802");
    let igma = new EmbedBuilder()
      .setTitle("Igma Decks")
      .setDescription(`To view the Decks Made By Igma please click on the buttons below!
Note: Igma has ${decks.length} total decks in Tbot`)
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let ichum = new EmbedBuilder()
    .setTitle(`${result[5].igmablobchum}`)
    .setDescription(`${result[3].igmablobchum}`)
    .setFooter({text: `${result[2].igmablobchum}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].igmablobchum}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].igmablobchum}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].igmablobchum}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].igmablobchum}`)
    let iburn = new EmbedBuilder()
    .setTitle(`${result[5].igmaburn}`)	
    .setDescription(`${result[3].igmaburn}`)
.setFooter({text: `${result[2].igmaburn}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].igmaburn}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].igmaburn}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].igmaburn}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].igmaburn}`)
    const m = await message.channel.send({ embeds: [igma], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "ladder" || value == "aggro") {
          await i.reply({embeds: [iburn],flags: MessageFlags.Ephemeral});
        }
        if(value == "meme" || value == "combo" || value == "midrange") {
          await i.reply({embeds: [ichum], flags: MessageFlags.Ephemeral});
        }
      }
    });
  },
};
