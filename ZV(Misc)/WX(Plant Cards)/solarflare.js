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
  name: `solarflare`,
  aliases: [`sf`, `solar`, `flare`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Solar Flare Decks")
        .setEmoji("<:SFSip:1018934631531282532>")
        .setStyle(ButtonStyle.Danger)
    );
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Solar Flare's decklists")
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
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
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
      .setLabel("All Solar Flare Decks")
      .setValue("all")
      .setDescription('View all Solar Flare decks')
      .setEmoji("<:SFSip:1018934631531282532>")
    )
    const row =new ActionRowBuilder().addComponents(select)
    const decktypes = new ActionRowBuilder().addComponents(select)
    const budgetdecks = [
      "budgetswarmsf"
    ]
    const compdecks = [
      "figlottery",
    ]; 
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pyschopineclones")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("one")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const one = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpladder")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("eject")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const eject = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("oneone")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("pclones")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pclones = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ejection")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ladderdecks = [
      "101",
      "ejection", 
      "pyschopineclones"
    ];
    let toBuildLadderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }; 
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ramp2seedling")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ff")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ff = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hburn")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("funnyflare")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("psol")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const psol = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healburn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("r2s")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const r2s = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healburn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const memedecks = [
      "funnyflare", 
      "healburn", 
      "psychosolstice",
      "ramp2seedling"
    ];
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    };
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ramp2seedling2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("one2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const one2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hburn2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hburn2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("oneone2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("psol2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const psol2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healburn2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("pclones2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pclones2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("psychosolstice2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("r2s2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const r2s2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pyschopineclones2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const combodecks = [
      "oneone",
      "healburn", 
      "psychosolstice", 
      "pyschopineclones",
      "ramp2seedling"
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }; 
    const controlrow= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("funnyflare2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("eject2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const eject2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcontrol")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ff2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ff2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ejection2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("controlhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const controldecks = [
      "ejection", 
      "funnyflare"
    ]; 
    let toBuildControlString = "";
    for (let i = 0; i < controldecks.length; i++) {
      let deck = controldecks[i];
      toBuildControlString += `\n<@1043528908148052089> **${deck}**`;
    }; 
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ramp2seedling3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("flottery")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const flottery = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmid")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hburn3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hburn3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("figlottery")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("psol3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const psol3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healburn3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("pclones3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pclones3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("psychosolstice3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("r2s3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const r2s3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pyschopineclones3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("midhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const midrangedecks = [
      "figlottery",
      "healburn", 
      "psychosolstice", 
      "pyschopineclones",
      "ramp2seedling", 
    ];
    let toBuildMidrangeString = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const tempodecks = [
      "budgetswarmsf"
    ]
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ramp2seedling4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("one3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const one3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bsf")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bsf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("oneone3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("eject3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const eject3= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetsf")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("flottery2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const flottery2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ejection3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("ff3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ff3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("figlottery2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hburn4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hburn4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("funnyflare3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("psol4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const psol4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healburn4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("pclones4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pclones4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("psychosolstice4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("r2s4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const r2s4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pyschopineclones4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let decks = [ 
      "oneone",
      "budgetswarmsf",
      "ejection",
      "funnyflare",
      "healburn",
      "healmidflare",
      "psychosolstice",
      "pyschopineclones",
      "ramp2seedling",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let sf = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
      )
      .setTitle(
        "Solar Flare | <:Kabloom:1062502137826910268><:Solar:1062502678384607262>"
      )
      .setDescription("**\\- Flower Hero  -**")
      .setColor("Random")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Weed Whack <:Solar:1062502678384607262> \n A Zombie gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \n More Spore <:Kabloom:1062502137826910268> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Button Mushrooms in a lane of your choice. Then another  appears in a random lanes. \n Scorched Earth <:Solar:1062502678384607262> \n All Zombies on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Sunburn <:Kabloom:1062502137826910268><:Solar:1062502678384607262> \n Do 2 damage. \n You get +1<:Sun:1062501177679413409> for the rest of the game.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "When she's on fire, she's on FIRE. And so are the Zombies.",
        }
      );
      let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
      )
      .setTitle("Solar Flare Decks")
      .setDescription(`To view the Solar Flare decks please click on the buttons below!
Note: Solar Flare has ${decks.length} total decks in Tbot`)
      .setColor("Random")
      let ladderEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
      )
      .setTitle("Solar Flare Ladder Decks")
      .setDescription(`My ladder decks for Solar Flare(SF) are ${toBuildLadderString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the ladder Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Solar Flare has ${ladderdecks.length} ladder decks in Tbot`,
      });
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
      )
      .setTitle("Solar Flare Meme Decks")
      .setDescription(`My meme decks for Solar Flare(SF) are ${toBuildMemeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the meme Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Solar Flare has ${memedecks.length} meme decks in Tbot`,
      });
      let allEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
      )
      .setTitle("Solar Flare Decks")
      .setDescription(`My decks for Solar Flare(SF) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Solar Flare has ${decks.length} decks in Tbot`,
      });
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
      )
      .setTitle("Solar Flare Combo Decks")
      .setDescription(`My combo decks for Solar Flare(SF) are ${toBuildComboString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the combo Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Solar Flare has ${combodecks.length} combo decks in Tbot`,
      });  
      let controlEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
      )
      .setTitle("Solar Flare Control Decks")
      .setDescription(`My control decks for Solar Flare(SF) are ${toBuildControlString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the control Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: Solar Flare has ${controldecks.length} control decks in Tbot`,
      });
      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
      )
      .setTitle("Solar Flare Midrange Decks")
      .setDescription(`My midrange decks for Solar Flare(SF) are ${toBuildMidrangeString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the midrange Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Solar Flare has ${midrangedecks.length} midrange decks in Tbot`,
      });
    let [result] = await db.query(`SELECT * from sfdecks`);
    let oneone= new EmbedBuilder()
    .setTitle(`${result[5].oneone}`)
    .setDescription(`${result[3].oneone}`)
    .setFooter({ text: `${result[2].oneone}` })
    .setColor("Random")
    .setImage(`${result[4].oneone}`)
    .addFields({
      name: "Deck Type",
      value: `${result[6].oneone}`,
      inline: true,
    },
    {
      name: "Archetype",
      value: `${result[0].oneone}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].oneone}`,
      inline: true
    });
    let budgetsf = new EmbedBuilder()
      .setTitle(`${result[5].budgetswarmsf}`)
      .setDescription(`${result[3].budgetswarmsf}`)
      .setFooter({ text: `${result[2].budgetswarmsf}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetswarmsf}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetswarmsf}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetswarmsf}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetswarmsf}`);
    let ejection = new EmbedBuilder()
      .setTitle(`${result[5].ejection}`)
      .setDescription(`${result[3].ejection}`)
      .setFooter({ text: `${result[2].ejection}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].ejection}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].ejection}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].ejection}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].ejection}`);
    let funnyflare= new EmbedBuilder()
      .setTitle(`${result[5].funnyflare}`)
      .setDescription(`${result[3].funnyflare}`)
      .setFooter({ text: `${result[2].funnyflare}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].funnyflare}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].funnyflare}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].funnyflare}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].funnyflare}`);
    let healburn= new EmbedBuilder()
      .setTitle(`${result[5].healburn}`)
      .setDescription(`${result[3].healburn}`)
      .setFooter({ text: `${result[2].healburn}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].healburn}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].healburn}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].healburn}`,
          inline: true,
        }
      )
      .setImage(`${result[4].healburn}`)

      .setColor("Random");

    let healmidflare = new EmbedBuilder()
      .setTitle(`${result[5].healmidflare}`)
      .setDescription(`${result[3].healmidflare}`)
      .setFooter({ text: `${result[2].healmidflare}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].healmidflare}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].healmidflare}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].healmidflare}`,
          inline: true,
        }
      )
      .setColor("Random")
	  .setImage(`${result[4].healmidflare}`);
    
    let psychosolstice = new EmbedBuilder()
      .setTitle(`${result[5].psychosolstice}`)
      .setDescription(`${result[3].psychosolstice}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].psychosolstice}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].psychosolstice}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].psychosolstice}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].psychosolstice}`,
          inline: true,
        }
      )
      .setImage(`${result[4].psychosolstice}`);
      let pyschopineclone= new EmbedBuilder()
      .setTitle(`${result[5].psychopineclones}`)
      .setDescription(`${result[3].psychopineclones}`)
      .setFooter({text: `${result[2].psychopineclones}`})
            .addFields({
              name: "Deck Type",
              value: `${result[6].psychopineclones}`,
              inline: true
            },
            {
              name: "Archetype",
              value: `${result[0].psychopineclones}`,
              inline: true
            },{
              name: "Deck Cost", 
              value: `${result[1].psychopineclones}`,
              inline: true
            })
        .setColor("Random")
        .setImage(`${result[4].psychopineclones}`)
        let figlottery = new EmbedBuilder()
        .setTitle(`${result[5].healmidflare}`)
        .setDescription(`${result[3].healmidflare}`)
        .setFooter({ text: `${result[2].healmidflare}` })
        .addFields({
          name: "Deck Type",
          value: `${result[6].healmidflare}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].healmidflare}`,
          inline: true,
        },{ 
          name: "Deck Cost", 
          value: `${result[1].healmidflare}`,
          inline: true
        })
        .setColor("Random")
        .setImage(`${result[4].healmidflare}`);
    let ramp2seedling= new EmbedBuilder()
      .setTitle(`${result[5].ramp2seedling}`)
      .setDescription(`${result[3].ramp2seedling}`)
      .setFooter({ text: `${result[2].ramp2seedling}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].ramp2seedling}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].ramp2seedling}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].ramp2seedling}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].ramp2seedling}`)
    const m = await message.channel.send({ embeds: [sf], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "comp"){
          await i.reply({embeds: [figlottery], flags: MessageFlags.Ephemeral})
        }
        if(value == "ladder"){
          await i.update({embeds: [ladderEmbed], components: [ladderrow]})
        }
        if(value == "budget" || value == "tempo"){
          await i.reply({embeds: [budgetsf], flags: MessageFlags.Ephemeral})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
        if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comborow]})
        }
        if(value == "control"){
          await i.update({embeds: [controlEmbed], components: [controlrow]})
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
        } 
      }
      if( i.customId == "helpladder" || i.customId == "ladderhelp"){
        await i.update({embeds: [ladderEmbed], components: [ladderrow]})
      }
      if( i.customId == "allhelp" || i.customId == "helpall"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      if(i.customId == "memehelp" || i.customId == "helpmeme"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      if( i.customId == "helpcombo" || i.customId == "combohelp"){
        await i.update({embeds: [comboEmbed], components: [comborow]})
      } 
      if( i.customId == "helpcontrol" || i.customId == "controlhelp"){
        await i.update({embeds: [controlEmbed], components: [controlrow]})
      }
      if( i.customId == "helpmid" || i.customId == "midhelp"){
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
      }
      if(i.customId == "psol" || i.customId == "psychosolstice"){
        await i.update({embeds: [psychosolstice], components: [psol]})
      }
      if(i.customId == "psol2" || i.customId == "psychosolstice2"){
        await i.update({embeds: [psychosolstice], components: [psol2]})
      }
      if(i.customId == "psol3" || i.customId == "psychosolstice3"){
        await i.update({embeds: [psychosolstice], components: [psol3]})
      }
      if(i.customId == "psol4" || i.customId == "psychosolstice4"){
        await i.update({embeds: [psychosolstice], components: [psol4]})
      }
      if(i.customId == "flottery" || i.customId == "figlottery"){
        await i.update({embeds: [figlottery], components: [flottery]})
      }
      if(i.customId == "flottery2" || i.customId == "figlottery2"){
        await i.update({embeds: [figlottery], components: [flottery2]})
      }
      if(i.customId == "eject" || i.customId == "ejection"){
        await i.update({embeds: [ejection], components: [eject]})
      }
      if(i.customId == "eject2" || i.customId == "ejection2"){
        await i.update({embeds: [ejection], components: [eject2]})
      }
      if(i.customId == "eject3" || i.customId == "ejection3"){
        await i.update({embeds: [ejection], components: [eject3]})
      }
      if(i.customId == "r2s" || i.customId == "ramp2seedling"){
        await i.update({embeds: [ramp2seedling], components: [r2s]})
      }
      if(i.customId == "r2s2" || i.customId == "ramp2seedling2"){
        await i.update({embeds: [ramp2seedling], components: [r2s2]})
      }
      if(i.customId == "r2s3" || i.customId == "ramp2seedling3"){
        await i.update({embeds: [ramp2seedling], components: [r2s3]})
      }
      if(i.customId == "r2s4" || i.customId == "ramp2seedling4"){
        await i.update({embeds: [ramp2seedling], components: [r2s4]})
      }
      if(i.customId == "ff" || i.customId == "funnyflare"){
        await i.update({embeds: [funnyflare], components: [ff]})
      }
      if(i.customId == "ff2" || i.customId == "funnyflare2"){
        await i.update({embeds: [funnyflare], components: [ff2]})
      }
      if(i.customId == "ff3" || i.customId == "funnyflare3"){
        await i.update({embeds: [funnyflare], components: [ff3]})
      }
      if(i.customId == "hburn" || i.customId == "healburn"){
        await i.update({embeds: [healburn], components: [hburn]})
      }
      if(i.customId == "hburn2" || i.customId == "healburn2"){
        await i.update({embeds: [healburn], components: [hburn2]})
      }
      if(i.customId == "hburn3" || i.customId == "healburn3"){
        await i.update({embeds: [healburn], components: [hburn3]})
      }
      if(i.customId == "hburn4" || i.customId == "healburn4"){
        await i.update({embeds: [healburn], components: [hburn4]})
      }
      if(i.customId == "one" || i.customId == "oneone"){
        await i.update({embeds: [oneone], components: [one]})
      }
      if(i.customId == "one2" || i.customId == "oneone2"){
        await i.update({embeds: [oneone], components: [one2]})
      }
      if(i.customId == "one3" || i.customId == "oneone3"){
        await i.update({embeds: [oneone], components: [one3]})
      }
      if(i.customId == "pclones" || i.customId == "pyschopineclones"){
        await i.update({embeds: [pyschopineclone], components: [pclones]})
      }
      if(i.customId == "pclones2" || i.customId == "pyschopineclones2"){
        await i.update({embeds: [pyschopineclone], components: [pclones2]})
      }
      if(i.customId == "pclones3" || i.customId == "pyschopineclones3"){
        await i.update({embeds: [pyschopineclone], components: [pclones3]})
      }
      if(i.customId == "pclones4" || i.customId == "pyschopineclones4"){
        await i.update({embeds: [pyschopineclone], components: [pclones4]})
      }
      if(i.customId == "bsf" || i.customId == "budgetsf"){
        await i.update({embeds: [budgetsf], components: [bsf]})
      }
    });
  },
};
