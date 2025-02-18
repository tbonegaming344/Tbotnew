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
  name: `helpsp`,
  aliases: [
    `sphelp`,
    `spcommands`,
    `commmandssp`,
    `spdecks`,
    `spudowhelp`,
    `helpspudow`,
    `spudowdecks`,
    `helpsd`,
    `sdhelp`,
  ],
  category: `Spudow(SP)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Spudow decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription("A Deck that is cheap for new players")
      .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("competitive")
      .setDescription("Some of the best Decks in the game")
      .setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Deck")
      .setDescription("Decks that are built off a weird/fun combo")
      .setValue("meme"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setDescription("attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.")
      .setValue("aggro"), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Combo Deck')
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue('combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Control Deck')
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue('control'),
      new StringSelectMenuOptionBuilder()
      .setLabel('Tempo Deck')
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
      .setValue('tempo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Spudow Decks")
      .setValue("all")
      .setDescription("View all the Spudow decks")
      .setEmoji("<:spudgun:1100168090110656582>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    let competitivedecks = [
      "radiotherapy",
    ]
    let combodecks = [
      "nutting",
    ]
    let controldecks = [
      "radiotherapy",
    ]
    let tempodecks = [
      "budgetburstsp", 
    ]
    let alldecksrow= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("radiotherapy3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bart")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let bart= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bsp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let bsp= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bartin")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("nut")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let nut = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("radio3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let radio3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("nuttin")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "bartin",
      "budgetsp",
      "nuttin",
      "radiotherapy",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719"
      )
      .setTitle("Spudow Decks")
      .setDescription(`To view the Spudow decks please select an option from the select menu below!
Note: Spudow has ${decks.length} total decks in Tbot`)
      .setColor("Random")
let allEmbed = new EmbedBuilder()
.setTitle("Spudow Decks")
.setDescription(`My decks for Spudow are ${toBuildString}`)
.setColor("Random")
.setThumbnail(
  "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719"
)
.setFooter({text:`To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
Note: Spudow has ${decks.length} decks in Tbot`})
    let [result] = await db.query(`SELECT * from spdecks`);
    let bartin = new EmbedBuilder()
      .setTitle(`${result[5].bartin}`)
      .setDescription(`${result[3].bartin}`)
      .setFooter({ text: `${result[2].bartin}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].bartin}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].bartin}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].bartin}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].bartin}`);
    let budgetsp = new EmbedBuilder()
      .setTitle(`${result[5].budgetburstsp}`)
      .setDescription(`${result[3].budgetburstsp}`)
      .setFooter({ text: `${result[2].budgetburstsp}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetburstsp}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetburstsp}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetburstsp}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetburstsp}`);
      let nuttin = new EmbedBuilder()
      .setTitle(`${result[5].nutting}`)
      .setDescription(`${result[3].nutting}`)
      .setFooter({text: `${result[2].nutting}`})
          .setColor("Random")
          .setImage(`${result[4].nutting}`)
              .addFields({
                  name: "Deck Type",
                  value: `${result[6].nutting}`,
                  inline: true
              },{
                  name: "Archetype",
                  value: `${result[0].nutting}`,
                  inline: true
              },{
                  name: "Deck Cost", 
                  value: `${result[1].nutting}`,
                  inline: true
              })
      let radiotherapy = new EmbedBuilder()
      .setTitle(`${result[5].radiotherapy}`)
      .setDescription(`${result[3].radiotherapy}`)
      .setFooter({text: `${result[2].radiotherapy}`})
      .addFields({
          name: "Deck Type",
          value: `${result[6].radiotherapy}`,
          inline: true
      },{
          name: "Archetype",
          value: `${result[0].radiotherapy}`,
          inline: true
      },{
          name: "Deck Cost", 
          value: `${result[1].radiotherapy}`,
          inline: true
      })	
      .setImage(`${result[4].radiotherapy}`)
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "budget" || value == "tempo"){
          await i.reply({embeds: [budgetsp], flags: MessageFlags.Ephemeral})
        }
        if(value == "competitive" || value == "control"){
          await i.reply({embeds: [radiotherapy], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme" || value == "combo"){
          await i.reply({embeds: [nuttin], flags: MessageFlags.Ephemeral})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
        if(value == "aggro"  || value == "ladder"){
          await i.reply({embeds: [bartin], flags: MessageFlags.Ephemeral})
        }
      }
      if(i.customId == "allhelp" || i.customId == "helpall"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      //Bartin
      if(i.customId == "bart" || i.customId == "bartin"){
       await i.update({embeds: [bartin], components: [bart]})
      }
      //Radiotherapy
      if(i.customId == "radio" || i.customId == "radiotherapy"){
        await i.update({embeds: [radiotherapy], components: [radio]})
      }
      if(i.customId == "radio2" || i.customId == "radiotherapy2"){
        await i.update({embeds: [radiotherapy], components: [radio2]})
      }
      if(i.customId == "radio3" || i.customId == "radiotherapy3"){
        await i.update({embeds: [radiotherapy], components: [radio3]})
      }
      //Budget SP
      if(i.customId == "bsp" || i.customId == "budgetsp"){
        await i.update({embeds: [budgetsp], components: [bsp]})
      }
      if(i.customId == "nut" || i.customId == "nuttin"){
        await i.update({embeds: [nuttin], components: [nut]})
      }
    });
  },
};
