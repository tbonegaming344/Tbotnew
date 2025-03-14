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
  name: `helpsm`,
  aliases: [
    `smhelp`,
    `smcommands`,
    `commandssm`,
    `helpsmash`,
    `smashcommands`,
    `smashhelp`,
    `smdecks`,
    `smashdecks`,
    `deckssm`,
    `deckssmash`,
    `helpts`,
    `helpthesmash`,
    `tshelp`,
    `smashlist`,
    `smashlists`,
  ],
  category: `Smash(SM)`,
  run: async (client, message, args) => {
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("whalepharaoh")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bob")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bob = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bobertsmash")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ho")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ho = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsm")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hor")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hor = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("homophobia")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("py")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const py = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("horts")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pablosyeezys")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "bobertsmash",
      "budgetsm",
      "homophobia",
      "horts",
      "pablosyeezys",
      "whalepharaoh",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Smash's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
			.setEmoji("💰"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Decks")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Smash Decks")
      .setValue("all")
      .setDescription('All of the Smash decks')
      .setEmoji("<:The_SmashH:1088162519958425670>")
    )
    const row = new ActionRowBuilder().addComponents(select);
    let budgetdecks = [
      "budgetsm"
    ]
    let compdecks = [
      "pablosyeezys",
    ]

    const ladderrow= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("horts2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bob2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bob2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpladder")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("hor2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const hor2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bobertsmash2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let ladderdecks = [
      "bobertsmash", 
      "horts"
    ]
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("whalepharaoh2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ho2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const ho2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("wp2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const wp2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("homophobia2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let memedecks = [
      "homophobia",
      "whalepharaoh"
    ]
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("homophobia3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bob3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const bob3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpaggro")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ho3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const ho3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bobertsmash3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("aggrohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
 
    let aggrodecks = [
      "bobertsmash",
      "homophobia",
    ]
    let toBuildAggroString = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      let deck = aggrodecks[i];
      toBuildAggroString += `\n<@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("whalepharaoh3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("hor3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const hor3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("py3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const py3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("horts3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("wp3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const wp3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pablosyeezys3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let combodecks = [
      "horts", 
      "pablosyeezys",
      "whalepharaoh"
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    let controldecks = [
      "whalepharaoh"
    ]
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pablosyeezys4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("hor4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const hor4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("midrangehelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("py4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const py4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("horts4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmidrange")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    let midrangedecks = [
      "horts",
      "pablosyeezys",
    ]
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    let tempodecks = [
      "budgetsm", 
    ]
    let helpsm = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle("Smash Decks")
      .setDescription(`To view the Smash decks please select an option from the select menu below!
Note: Smash has ${decks.length} total decks in Tbot`)
      .setColor("Random");
      let alldecksEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle("Smash Decks")
      .setDescription(`My commands for Smash(SM) are ${toBuildString}`)
      .setFooter({
        text: `To view the Smash decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Smash has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random");
      let ladderEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle("Smash Ladder Decks")
      .setDescription(`My ladder decks for Smash(SM) are ${toBuildLadderString}`)
      .setFooter({
        text: `To view the Smash ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Smash has ${ladderdecks.length} ladder decks in Tbot`,
      })
      .setColor("Random");
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle("Smash Meme Decks")
      .setDescription(`My meme decks for Smash(SM) are ${toBuildMemeString}`)
      .setFooter({
        text: `To view the Smash meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Smash has ${memedecks.length} meme decks in Tbot`,
      })
      .setColor("Random");
      let aggroEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle("Smash Aggro Decks")
      .setDescription(`My aggro decks for Smash(SM) are ${toBuildAggroString}`)
      .setFooter({
        text: `To view the Smash aggro decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Smash has ${aggrodecks.length} aggro decks in Tbot`,
      })
      .setColor("Random");
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle("Smash Combo Decks")
      .setDescription(`My combo decks for Smash(SM) are ${toBuildComboString}`)
      .setFooter({
        text: `To view the Smash combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Smash has ${combodecks.length} combo decks in Tbot`,
      })
      .setColor("Random");
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle("Smash Midrange Decks")
      .setDescription(`My midrange decks for Smash(SM) are ${toBuildMidrangeString}`)
      .setFooter({
        text: `To view the Smash midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Smash has ${midrangedecks.length} midrange decks in Tbot`,
      })
      .setColor("Random");
    let [result] = await db.query(`SELECT * FROM smdecks`);
    let bobertsmash = new EmbedBuilder()
    .setTitle(`${result[5].bobertsmash}`)
    .setDescription(`${result[3].bobertsmash}`)
    .setFooter({text: `${result[2].bobertsmash}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].bobertsmash}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].bobertsmash}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].bobertsmash}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].bobertsmash}`)
    let budgetsm = new EmbedBuilder()
  	.setTitle(`${result[5].budgetsm}`)	
			.setDescription(`${result[3].budgetsm}`)
	.setFooter({text: `${result[2].budgetsm}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].budgetsm}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].budgetsm}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].budgetsm}`,
				inline: true
			})	
			.setImage(`${result[4].budgetsm}`)
		.setColor("Random")		
    let homophobia = new EmbedBuilder()
    .setTitle(`${result[5].homophobia}`)
		.setDescription(`${result[3].homophobia}`)
		.setColor("Random")
		.setFooter({text: `${result[2].homophobia}`})
		.setImage(`${result[4].homophobia}`)
		.addFields({
			name: "Deck Type",
			value: `${result[6].homophobia}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].homophobia}`,
			inline: true
		},{
			name: "Deck Cost",
			value:`${result[1].homophobia}`,
			inline: true
		})
    let horts = new EmbedBuilder()
    .setTitle(`${result[5].horts}`)
    .setDescription(`${result[3].horts}`)
    .setFooter({text: `${result[2].horts}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].horts}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].horts}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].horts}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].horts}`);
    let pablosyeezys = new EmbedBuilder()
    .setTitle(`${result[5].pablosyeezys}`)	
    .setDescription(`${result[3].pablosyeezys}`)
.setFooter({text: `${result[2].pablosyeezys}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].pablosyeezys}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].pablosyeezys}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].pablosyeezys}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].pablosyeezys}`)
    let whalepharaoh= new EmbedBuilder()
    .setTitle(`${result[5].whalepharaoh}`)
    .setDescription(`${result[3].whalepharaoh}`)
    .setFooter({text: `${result[2].whalepharaoh}`})
      .setColor("Random")
      .setImage(`${result[4].whalepharaoh}`)
        .addFields({
          name: "Deck Type",
          value: `${result[6].whalepharaoh}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].whalepharaoh}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].whalepharaoh}`,
          inline: true
        })
    const m = await message.channel.send({
      embeds: [helpsm],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "comp"){
          await i.reply({embeds: [pablosyeezys], flags: MessageFlags.Ephemeral})
        }
        if(value == "ladder"){
          await i.update({embeds: [ladderEmbed], components: [ladderrow]})
        }
        if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        if(value == "aggro"){
          await i.update({embeds: [aggroEmbed], components: [aggrorow]})
        }
        if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comborow]})
        }
        if(value == "control"){
          await i.reply({embeds: [whalepharaoh], flags: MessageFlags.Ephemeral})
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
        }
        if(value == "budget"|| value == "tempo"){
          await i.reply({embeds: [budgetsm], flags: MessageFlags.Ephemeral})
        }
        if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
        }
      }
      if (i.customId == "bob"|| i.customId == "bobertsmash") {
        await i.update({ embeds: [bobertsmash], components: [bob] });
      }
      if (i.customId == "bob2"|| i.customId == "bobertsmash2") {
        await i.update({ embeds: [bobertsmash], components: [bob2] });
      }
      if (i.customId == "bob3"|| i.customId == "bobertsmash3") {
        await i.update({ embeds: [bobertsmash], components: [bob3] });
      }
      if ( i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      if( i.customId == "ladderhelp" || i.customId == "helpladder"){
        await i.update({embeds: [ladderEmbed], components: [ladderrow]})
      }
      if(i.customId == "memehelp" || i.customId == "helpmeme"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      if ( i.customId == "aggrohelp" || i.customId == "helpaggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      }
      if ( i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      if ( i.customId == "midrangehelp" || i.customId == "helpmidrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      if ( i.customId == "tempohelp" || i.customId == "helptempo") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      }
      if (i.customId == "bsm" || i.customId == "budgetsm") {
        await i.update({ embeds: [budgetsm], components: [bsm] });
      }
      if (i.customId == "ho" || i.customId == "homophobia") {
        await i.update({ embeds: [homophobia], components: [ho] });
      }
      if (i.customId == "ho2" || i.customId == "homophobia2") {
        await i.update({ embeds: [homophobia], components: [ho2] });
      }
      if (i.customId == "ho3" || i.customId == "homophobia3") {
        await i.update({ embeds: [homophobia], components: [ho3] });
      }
      if (i.customId == "hor" || i.customId == "horts") {
        await i.update({ embeds: [horts], components: [hor] });
      }
      if (i.customId == "hor2" || i.customId =="horts2") {
        await i.update({ embeds: [horts], components: [hor2] });
      }
      if (i.customId == "hor3" || i.customId == "horts3") {
        await i.update({ embeds: [horts], components: [hor3] });
      }
      if (i.customId == "hor4" || i.customId == "horts4") {
        await i.update({ embeds: [horts], components: [hor4] });
      }
      if (i.customId == "py" || i.customId == "pablosyeezys") {
        await i.update({ embeds: [pablosyeezys], components: [py] });
      }
      if (i.customId == "py2" || i.customId == "pablosyeezys2") {
        await i.update({ embeds: [pablosyeezys], components: [py2] });
      }
      if (i.customId == "py3" || i.customId == "pablosyeezys3") {
        await i.update({ embeds: [pablosyeezys], components: [py3] });
      }
      if(i.customId == "py4" || i.customId == "pablosyeezys4"){
        await i.update({embeds: [pablosyeezys], components: [py4]})
      }
      if (i.customId == "wp" || i.customId == "whalepharaoh") {
        await i.update({ embeds: [whalepharaoh], components: [wp] });
      }
      if (i.customId == "wp2" || i.customId == "whalepharaoh2") {
        await i.update({ embeds: [whalepharaoh], components: [wp2] });
      }
      if (i.customId == "wp3" || i.customId == "whalepharaoh3") {
        await i.update({ embeds: [whalepharaoh], components: [wp3] });
      }
    });
  },
};
