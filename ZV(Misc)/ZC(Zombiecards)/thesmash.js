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
  name: `thesmash`,
  aliases: [`smash`, `sm`, `ts`, `the-smash`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpsm")
        .setLabel("Smash Decks")
        .setStyle(ButtonStyle.Success)
        .setEmoji("<:The_SmashH:1088162519958425670>")
    );
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("whalepharaoh")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
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
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
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
    let ladderdecks = [
      "horts"
    ]
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
 
    let aggrodecks = [
      "homophobia",
    ]
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
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle(
        "The Smash | <:Hearty:1062501636557242429><:Beastly:1062500894744264714>"
      )
      .setDescription("** - Gargantuar Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Heroic Health <:Hearty:1062501636557242429> \n Heal your Hero for 6. \n Possessed <:Hearty:1062501636557242429> \n A Zombie gets +2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. \n Galvanize <:Beastly:1062500894744264714> \n A Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \n Slammin' Smackdown <:Hearty:1062501636557242429><:Beastly:1062500894744264714> \n Destroy a Plant with 4<:Strength:1062501774612779039> or less.  ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "The Smash enjoys...SMASHING!",
        }
      )
      .setColor("Random");
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
  .setImage(`${result[4].pablosyeezys}`);
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
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpsm") {
        await i.update({ embeds: [helpsm], components: [row] });
      }
      else if(i.customId == "select"){
        const value = i.values[0];
        if(value == "comp"){
          await i.reply({embeds: [pablosyeezys], flags: MessageFlags.Ephemeral})
        }
        else if(value == "ladder"){
          await i.reply({embeds: [horts], flags: MessageFlags.Ephemeral})
        }
        else if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        else if(value == "aggro"){
          await i.reply({embeds: [homophobia], flags: MessageFlags.Ephemeral})
        }
        else if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comborow]})
        }
        else if(value == "control"){
          await i.reply({embeds: [whalepharaoh], flags: MessageFlags.Ephemeral})
        }
        else if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
        }
        else if(value == "budget"|| value == "tempo"){
          await i.reply({embeds: [budgetsm], flags: MessageFlags.Ephemeral})
        }
        else if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
        }
      }
      else if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      else if (i.customId == "memehelp" || i.customId == "helpmeme"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      else if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      else if (i.customId == "midrangehelp" || i.customId == "helpmidrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      else if (i.customId == "tempohelp" || i.customId == "helptempo") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      }
      else if (i.customId == "bsm" || i.customId == "budgetsm") {
        await i.update({ embeds: [budgetsm], components: [bsm] });
      }
      else if (i.customId == "ho" || i.customId == "homophobia") {
        await i.update({ embeds: [homophobia], components: [ho] });
      }
      else if (i.customId == "ho2" || i.customId == "homophobia2") {
        await i.update({ embeds: [homophobia], components: [ho2] });
      }
      else if (i.customId == "ho3" || i.customId == "homophobia3") {
        await i.update({ embeds: [homophobia], components: [ho3] });
      }
      else if (i.customId == "hor" || i.customId == "horts") {
        await i.update({ embeds: [horts], components: [hor] });
      }
      else if (i.customId == "hor2" || i.customId =="horts2") {
        await i.update({ embeds: [horts], components: [hor2] });
      }
      else if (i.customId == "hor3" || i.customId == "horts3") {
        await i.update({ embeds: [horts], components: [hor3] });
      }
      else if (i.customId == "hor4" || i.customId == "horts4") {
        await i.update({ embeds: [horts], components: [hor4] });
      }
      else if (i.customId == "py" || i.customId == "pablosyeezys") {
        await i.update({ embeds: [pablosyeezys], components: [py] });
      }
      else if (i.customId == "py2" || i.customId == "pablosyeezys2") {
        await i.update({ embeds: [pablosyeezys], components: [py2] });
      }
      else if (i.customId == "py3" || i.customId == "pablosyeezys3") {
        await i.update({ embeds: [pablosyeezys], components: [py3] });
      }
      else if (i.customId == "py4" || i.customId == "pablosyeezys4"){
        await i.update({embeds: [pablosyeezys], components: [py4]})
      }
      else if (i.customId == "wp" || i.customId == "whalepharaoh") {
        await i.update({ embeds: [whalepharaoh], components: [wp] });
      }
      else if (i.customId == "wp2" || i.customId == "whalepharaoh2") {
        await i.update({ embeds: [whalepharaoh], components: [wp2] });
      }
      else if (i.customId == "wp3" || i.customId == "whalepharaoh3") {
        await i.update({ embeds: [whalepharaoh], components: [wp3] });
      }
    });
  },
};
