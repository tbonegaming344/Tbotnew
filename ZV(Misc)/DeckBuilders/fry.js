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
  name: `fryemup`,
  aliases: [
    `fryemupdecks`,
    `decksmadebyfry`,
    `frydecks`,
    `fry`,
    `fryemupdecks`,
    `helpfry`,
    `fryhelp`,
    `fryemuphelp`,
    `helpfryemup`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select  = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Fry's Decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
        .setLabel("Ladder Decks")
        .setValue("ladder")
        .setDescription('Decks that mostly only good for ranked games')
        .setEmoji("<:ladder:1271503994857979964>"), 
      new StringSelectMenuOptionBuilder()
        .setLabel("Meme Deck")
        .setValue("meme")
        .setDescription('Plant Decks that are built off a weird/fun combo'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Combo Deck")
        .setValue("combo")
        .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Midrange Decks")
        .setValue("midrange")
        .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
        new StringSelectMenuOptionBuilder()  
        .setLabel("Tempo Decks")
        .setValue("tempo")
        .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.') , 
        new StringSelectMenuOptionBuilder()
        .setLabel("All Decks")
        .setValue("all")
        .setDescription('All of Fryemup Decks')
      );
    const row = new ActionRowBuilder().addComponents(select);
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("frymidrose")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const frymidrose = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ladderhelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("raiserpackage")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const raiserpackage = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fmr")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("valk")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const valk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rpackage")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpladder")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let ladderdecks = [
      "frymidrose",
      "raiserpackage",
      "valkster",
    ]
    let toBuildLaderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      toBuildLaderString+= `\n<@1043528908148052089> **${ladderdecks[i]}**`;
    }
    const temporow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rpackage2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("conjureleap")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const conjureleap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tempohelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("raiserpackage2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const raiserpackage2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cleap")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helptempo")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let tempodecks = [
      "conjureleap",
      "raiserpackage",
    ]
    let toBuildTempoString = "";
    for (let i = 0; i < tempodecks.length; i++) {
      toBuildTempoString += `\n<@1043528908148052089> **${tempodecks[i]}**`;
    }
    let combodecks = [
      "valkster",
    ]
    let memedecks = [
      "conjureleap",
    ]
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fmr2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const fmr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmid")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("valk2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const valk2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymidrose2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpmidrange")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let midrangedecks = [
      "frymidrose",
      "valkster",
    ]
    let toBuildMid = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      toBuildMid += `\n<@1043528908148052089> **${midrangedecks[i]}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("conjureleap2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const conjureleap2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fmr3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const fmr3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cleap2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("raiserpackage3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const raiserpackage3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymidrose3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("valk3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const valk3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rpackage3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    let decks = [
      "conjureleap",
      "frymidrose",
      "raiserpackage",
      "valkster",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select conjureleap, frymidrose, 
raiserpackage, valkster
from hgdecks hg
inner join rodecks ro 
on (hg.deckinfo = ro.deckinfo)
inner join bfdecks bf
on (hg.deckinfo = bf.deckinfo)
inner join pbdecks pb
on (hg.deckinfo = pb.deckinfo)`);
    let user = await client.users.fetch("291752823891427329");
    let fry = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let midrangefry = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange decks made by ${user.displayName} are ${toBuildMid}`
      )
      .setFooter({
        text: `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${midrangedecks.length} Midrange decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let tempofry = new EmbedBuilder()
      .setTitle(`${user.displayName} Tempo Decks`)
      .setDescription(
        `My Tempo decks made by ${user.displayName} are ${toBuildTempoString}`
      )
      .setFooter({
        text: `To view the Tempo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${tempodecks.length} Tempo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let ladderfry = new EmbedBuilder()
      .setTitle(`${user.displayName} Ladder Decks`)
      .setDescription(
        `My Ladder decks made by ${user.displayName} are ${toBuildLaderString}`
      )
      .setFooter({
        text: `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${ladderdecks.length} Ladder decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let allfry = new EmbedBuilder()
      .setTitle(`All ${user.displayName}Decks`)
      .setDescription(
        `My All decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the All Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let cleap = new EmbedBuilder()
    .setTitle(`${result[5].conjureleap}`)	
    .setDescription(`${result[3].conjureleap}`)
.setFooter({text: `${result[2].conjureleap}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].conjureleap}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].conjureleap}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].conjureleap}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].conjureleap}`)
    let frymid = new EmbedBuilder()
    .setTitle(`${result[5].frymidrose}`)
    .setDescription(`${result[3].frymidrose}`)
    .setFooter({text: `${result[2].frymidrose}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].frymidrose}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].frymidrose}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].frymidrose}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].frymidrose}`)
    let rpack = new EmbedBuilder()
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
    let valkster = new EmbedBuilder()
    .setTitle(`${result[5].valkster}`)
	.setDescription(`${result[3].valkster}`)
	.setFooter({text: `${result[2].valkster}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].valkster}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].valkster}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].valkster}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].valkster}`)
    const t = await message.channel.send({ embeds: [fry], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = t.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
     if(i.customId == "select"){
      const value = i.values[0];
      if(value == "combo"){
        await i.reply({embeds: [valkster], flags: MessageFlags.Ephemeral})
      }
      if(value == "meme"){
        await i.reply({embeds: [cleap], flags: MessageFlags.Ephemeral})
      }
      if(value == "midrange"){
        await i.update({ embeds: [midrangefry], components: [midrangerow] });
      }
      if(value == "tempo"){
        await i.update({ embeds: [tempofry], components: [temporow] });
      }
      if(value == "ladder"){
        await i.update({ embeds: [ladderfry], components: [ladderrow] });
      }
      if(value == "all"){
        await i.update({ embeds: [allfry], components: [alldecksrow] });
      }
     }
      if (i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderfry], components: [ladderrow] });
      }
      if(i.customId == "fmr" || i.customId == "frymidrose"){
        await i.update({ embeds: [frymid], components: [frymidrose] });
      }
      if(i.customId == "rpackage" || i.customId == "raiserpackage"){
        await i.update({ embeds: [rpack], components: [raiserpackage] });
      }
      if(i.customId == "valk" || i.customId == "valkster"){
        await i.update({ embeds: [valkster], components: [valk] });
      }
      if (i.customId == "tempohelp" || i.customId == "helptempo") {
        await i.update({ embeds: [tempofry], components: [temporow] });
      }
      if(i.customId == "cleap" || i.customId == "conjureleap"){
        await i.update({ embeds: [cleap], components: [conjureleap] });
      }
      if(i.customId == "rpackage2" || i.customId == "raiserpackage2"){
        await i.update({ embeds: [rpack], components: [raiserpackage2] });
      }
      if(i.customId == "rpackage3" || i.customId == "raiserpackage3"){
        await i.update({ embeds: [rpack], components: [raiserpackage3] });
      }
      if(i.customId == "valk2" || i.customId == "valkster2"){
        await i.update({ embeds: [valkster], components: [valk2] });
      }
      if (i.customId == "helpmid" || i.customId == "helpmidrange") {
        await i.update({ embeds: [midrangefry], components: [midrangerow] });
      }
      if(i.customId == "fmr2" || i.customId == "frymidrose2"){
        await i.update({ embeds: [frymid], components: [fmr2] });
      }
      if(i.customId == "fmr3" || i.customId == "frymidrose3"){
        await i.update({ embeds: [frymid], components: [fmr3] });
      }
      if(i.customId == "valk3" || i.customId == "valkster3"){
        await i.update({ embeds: [valkster], components: [valk3] });
      }
      if(i.customId == "valk4" || i.customId == "valkster4"){
        await i.update({ embeds: [valkster], components: [valk4] });
      }
      if(i.customId == "helpall" || i.customId == "allhelp"){
        await i.update({embeds: [allfry], components: [alldecksrow]})
      }
      if(i.customId == "cleap2" || i.customId == "conjureleap2"){
        await i.update({embeds: [cleap], components: [conjureleap2]})
      }
    });
  },
};
