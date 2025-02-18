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
  name: `immorticia`,
  aliases: [`im`, `ticia`, `i’m`, `i'm`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("Zombats")
        .setLabel("Zombats")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:zombats:1087159395965734962>"),
      new ButtonBuilder()
        .setCustomId("imhelp")
        .setLabel("Immorticia Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:Immorticia_Website:1087749695322988634>")
    );
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngcatmartin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bas")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bas = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bim")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bim = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bastet")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kscope")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const kscope = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetim")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ms")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ms = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kaleidoscope")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rim")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rim = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkmecha")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stac")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stac = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rampticia")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ycm")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ycm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("stacheticia")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "bastet",
      "budgetim",
      "kaleidoscope",
      "mechascope",
      "rampticia",
      "stacheticia",
      "ycm",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Immorticia's decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
          .setLabel("Budget Decks")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription("Some of the best Decks in the game")
      .setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
					.setLabel('Ladder Decks')
					.setDescription('Decks that mostly only good for ranked games')
					.setEmoji("<:ladder:1271503994857979964>")
					.setValue('ladder'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setDescription("Decks that are built off a weird/fun combo")
      .setValue("meme"), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Combo Decks')
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue('combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Control Decks')
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue('control'),
      new StringSelectMenuOptionBuilder()
      .setLabel('Midrange Decks')
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      .setValue('midrange'),  
      new StringSelectMenuOptionBuilder()
      .setLabel("All Immorticia Decks")
      .setValue("all")
      .setDescription("View all the immorticia decks")
      .setEmoji("<:Immorticia_Website:1087749695322988634>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const budgetdecks = [
      "budgetim",
    ];
    const compdecks = [
      "kaleidoscope",
    ]
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("youngcatmartin2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ms2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ms2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ycm2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ycm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mechascope2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpladder")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ladderdecks = [
      "mechascope",
      "youngcatmartin"
    ]
    let toBuildLadderString = "";
    for(let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadderString += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("stacheticia2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bas2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bas2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("rim2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const rim2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bastet2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("stac2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const stac2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("rampticia2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const memedecks = [
      "bastet",
      "rampticia", 
      "stacheticia",
    ]
    let toBuildMemeString = "";
    for(let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents( 
      new ButtonBuilder()
      .setCustomId("youngcatmartin3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bas3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bas3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bim3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bim3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bastet3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ms3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ms3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetim3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("rim3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const rim3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mechascope3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("stac3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const stac3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("rampticia3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ycm3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ycm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("stacheticia3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const combodecks = [
      "bastet",
      "budgetim", 
      "mechascope", 
      "rampticia", 
      "stacheticia",
      "youngcatmartin"
    ]
    let toBuildComboString = "";
    for(let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildComboString += `\n<@1043528908148052089> **${deck}**`;
    }
    const controlrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mechascope4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("kscope3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const kscope3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("controlhelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ms4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ms4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("kaleidoscope3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcontrol")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const controldecks = [
      "kaleidoscope",
      "mechascope", 
    ]
    let toBuildControlString = "";
    for(let i = 0; i < controldecks.length; i++) {
      let deck = controldecks[i];
      toBuildControlString += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("youngcatmartin4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bas4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bas4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("midrangehelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("bim4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bim4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("bastet4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ycm4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ycm4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetim4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmidrange")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const midrangedecks = [
      "bastet",
      "budgetim", 
      "youngcatmartin"
    ]
    let toBuildMidrangeString = "";
    for(let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrangeString += `\n<@1043528908148052089> **${deck}**`;
    }
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      )
      .setTitle(
        "Immorticia | <:Brainy:1062500939908530246><:Beastly:1062500894744264714>"
      )
      .setDescription("**\\- Pet Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Summoning <:Brainy:1062500939908530246> \n Make a random Zombie that costs 2<:Brainz:1062503146745774183> or less. \n Evaporate <:Beastly:1062500894744264714> \n Destroy a damaged Plant. \n Draw a card. \n Acid Rain <:Beastly:1062500894744264714> \n All Plants on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Witch's Familiar <:Brainy:1062500939908530246><:Beastly:1062500894744264714> \n Make __Zom-Bats__. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "Yes, she's a Zombie AND a witch. She believes death is too short to limit oneself.",
        }
      )
      .setColor("Random");

    let bats = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/f/f5/Zom-Bats_%28Card%29.png/revision/latest/scale-to-width-down/250?cb=20161026140138"
      )
      .setTitle(
        "Zom-Bats | <:Brainy:1062500939908530246><:Beastly:1062500894744264714>"
      )
      .setDescription("**\\- Pet Zombie  -**")
      .addFields(
        {
          name: "Stats",
          value:
            "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>",
        },
        {
          name: "Trait",
          value: "__Amphibious__",
        },
        {
          name: "Ability",
          value: "When this hurts a Plant, draw a card.",
        },
        {
          name: "Set-Rarity",
          value: "**Token**",
        },
        {
          name: "Flavor Text",
          value: `Like chihuahuas with wings... and fangs... and a taste for Plants.`,
        }
      )
      .setColor("Random");
      let alldecksEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      )
      .setTitle("Immortica Decks")
      .setDescription(`My commands for Immorticia(IM) are ${toBuildString}`)
      .setFooter({
        text: `To view the Immorticia decks please use the commands listed above or click on the buttons below to navigate through all Immorticia decks!
Note: Immorticia has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random");
      let helpim = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      )
      .setTitle("Immortica Decks")
      .setDescription(`To view the Immorticia decks please select an option from the select menu below!
Note: Immorticia has ${decks.length} total decks in Tbot`)
      .setColor("Random");
      let ladderEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      )
      .setTitle("Immortica Ladder Decks")
      .setDescription(`My ladder decks for Immorticia(IM) are ${toBuildLadderString}`)
      .setFooter({
        text: `To view the ladder Immorticia decks please use the commands listed above or click on the buttons below to navigate through all ladder Immorticia decks!
Note: Immorticia has ${ladderdecks.length} ladder decks in Tbot`,
      })
      .setColor("Random");
      let memeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      )
      .setTitle("Immortica Meme Decks")
      .setDescription(`My meme decks for Immorticia(IM) are ${toBuildMemeString}`)
      .setFooter({
        text: `To view the meme Immorticia decks please use the commands listed above or click on the buttons below to navigate through all meme Immorticia decks!
Note: Immorticia has ${memedecks.length} meme decks in Tbot`,
      })
      .setColor("Random");
      let comboEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      )
      .setTitle("Immortica Combo Decks")
      .setDescription(`My combo decks for Immorticia(IM) are ${toBuildComboString}`)
      .setFooter({
        text: `To view the combo Immorticia decks please use the commands listed above or click on the buttons below to navigate through all combo Immorticia decks!
Note: Immorticia has ${combodecks.length} combo decks in Tbot`,
      })
      .setColor("Random");
      let controlEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      )
      .setTitle("Immortica Control Decks")
      .setDescription(`My control decks for Immorticia(IM) are ${toBuildControlString}`)
      .setFooter({
        text: `To view the control Immorticia decks please use the commands listed above or click on the buttons below to navigate through all control Immorticia decks!
Note: Immorticia has ${controldecks.length} control decks in Tbot`,
      })
      .setColor("Random");

      let midrangeEmbed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      )
      .setTitle("Immortica Midrange Decks")
      .setDescription(`My midrange decks for Immorticia(IM) are ${toBuildMidrangeString}`)
      .setFooter({
        text: `To view the midrange Immorticia decks please use the commands listed above or click on the buttons below to navigate through all midrange Immorticia decks!
Note: Immorticia has ${midrangedecks.length} midrange decks in Tbot`,
      })
      .setColor("Random");
    let [result] = await db.query(`SELECT * FROM imdecks`);
    let bastet = new EmbedBuilder()
    .setTitle(`${result[5].bastet}`)
    .setDescription(`${result[3].bastet}`)
    .setFooter({text: `${result[2].bastet}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].bastet}`,
      inline: true
    },{
      name: "Archetype", 
      value: `${result[0].bastet}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].bastet}`,
      inline: true
    })
  .setColor("Random")
.setImage(`${result[4].bastet}`)
    let budgetim = new EmbedBuilder()
      .setTitle(`${result[5].budgetim}`)
      .setDescription(`${result[3].budgetim}`)
      .setFooter({ text: `${result[2].budgetim}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetim}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetim}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetim}`,
          inline: true,
        }
      )
      .setImage(`${result[4].budgetim}`)
      .setColor("Random");


      let mechascope = new EmbedBuilder()
      .setTitle(`${result[5].otkmecha}`)
      .setDescription(`${result[3].otkmecha}`)
      .setFooter({text: `${result[2].otkmecha}`})
          .addFields({
            name: "Deck Type",
            value: `${result[6].otkmecha}`,
            inline: true
          },{
            name: "Archetype", 
            value: `${result[0].otkmecha}`,
            inline: true
          },{
            name: "Deck Cost", 
            value: `${result[1].otkmecha}`,
            inline: true
          })
        .setColor("Random")
        .setImage(`${result[4].otkmecha}`)
    let kaleidoscope= new EmbedBuilder()
      .setTitle(`${result[5].otktrickster}`)
      .setDescription(`${result[3].otktrickster}`)
      .setFooter({ text: `${result[2].otktrickster}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].otktrickster}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].otktrickster}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].otktrickster}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].otktrickster}`);
    let rampticia = new EmbedBuilder()
      .setTitle(`${result[5].rampticia}`)
      .setDescription(`${result[3].rampticia}`)
      .setFooter({ text: `${result[2].rampticia}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].rampticia}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].rampticia}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].rampticia}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].rampticia}`);
    let stacheticia = new EmbedBuilder()
      .setTitle(`${result[5].stacheticia}`)
      .setDescription(`${result[3].stacheticia}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].stacheticia}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].stacheticia}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].stacheticia}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].stacheticia}` })
      .setImage(`${result[4].stacheticia}`);
    let youngcatmartin = new EmbedBuilder()
      .setTitle(`${result[5].ycm}`)
      .setDescription(`${result[3].ycm}`)
      .setFooter({ text: `${result[2].ycm}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].ycm}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].ycm}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].ycm}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].ycm}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "Zombats") {
        await i.reply({ embeds: [bats], flags: MessageFlags.Ephemeral });
      }
      if (i.customId == "imhelp") {
        await i.update({ embeds: [helpim], components: [row] });
      }
      if(i.customId == "select"){
        const value = i.values[0]
        if(value == "all"){
          await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
        }
        if(value == "budget"){
          await i.reply({embeds: [budgetim], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp"){
          await i.reply({embeds: [kaleidoscope], flags: MessageFlags.Ephemeral})
        }
        if(value == "ladder"){
          await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
        }
        if(value == "meme"){
          await i.update({ embeds: [memeEmbed], components: [memerow] });
        }
        if(value == "combo"){
          await i.update({ embeds: [comboEmbed], components: [comborow] });
        }
        if(value == "control"){
          await i.update({ embeds: [controlEmbed],components: [controlrow] });
        }
        if(value == "midrange"){
          await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
        }
        if(value== "tempo"){
          await i.reply({embeds: [scimmort], flags: MessageFlags.Ephemeral})
        }
      }      
      if (i.customId == "bim" || i.customId == "budgetim") {
        await i.update({ embeds: [budgetim], components: [bim] });
      }
      if (i.customId == "bim2" || i.customId == "budgetim2") {
        await i.update({ embeds: [budgetim], components: [bim2] });
      }
      if (i.customId == "bim3" || i.customId == "budgetim3") {
        await i.update({ embeds: [budgetim], components: [bim3] });
      }
      if (i.customId == "bim4" || i.customId == "budgetim4") {
        await i.update({ embeds: [budgetim], components: [bim4] });
      }
      if ( i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      if( i.customId == "budgethelp" || i.customId == "helpbudget") {
        await i.update({ embeds: [budgetEmbed], components: [budgetrow] });
      }
      if ( i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      if (i.customId == "memehelp" || i.customId == "helpmeme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      }
      if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      if (i.customId == "controlhelp" || i.customId == "helpcontrol") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      }
      if ( i.customId == "midrangehelp" || i.customId == "helpmidrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      if (i.customId == "kscope" || i.customId == "kaleidoscope") {
        await i.update({ embeds: [kaleidoscope], components: [kscope] });
      }
      if (i.customId == "kscope2" || i.customId == "kaleidoscope2") {
        await i.update({ embeds: [kaleidoscope], components: [kscope2] });
      }
      if (i.customId == "kscope3" || i.customId == "kaleidoscope3") {
        await i.update({ embeds: [kaleidoscope], components: [kscope3] });
      }
      if (i.customId == "rim" || i.customId == "rampticia") {
        await i.update({ embeds: [rampticia], components: [rim] });
      }
      if (i.customId == "rim2" || i.customId == "rampticia2") {
        await i.update({ embeds: [rampticia], components: [rim2] });
      }
      if (i.customId == "rim3" || i.customId == "rampticia3") {
        await i.update({ embeds: [rampticia], components: [rim3] });
      }
      if (i.customId == "ycm" || i.customId == "youngcatmartin") {
        await i.update({ embeds: [youngcatmartin], components: [ycm] });
      }
      if (i.customId == "ycm2" || i.customId == "youngcatmartin2") {
        await i.update({ embeds: [youngcatmartin], components: [ycm2] });
      }
      if (i.customId == "ycm3" || i.customId == "youngcatmartin3") {
        await i.update({ embeds: [youngcatmartin], components: [ycm3] });
      }
      if (i.customId == "ycm4" || i.customId == "youngcatmartin4") {
        await i.update({ embeds: [youngcatmartin], components: [ycm4] });
      }
      if (i.customId == "stac" || i.customId == "stacheticia") {
        await i.update({ embeds: [stacheticia], components: [stac] });
      }
      if (i.customId == "stac2" || i.customId == "stacheticia2") {
        await i.update({ embeds: [stacheticia], components: [stac2] });
      }
      if (i.customId == "stac3" || i.customId == "stacheticia3") {
        await i.update({ embeds: [stacheticia], components: [stac3] });
      }
      if(i.customId == "bas" || i.customId == "bastet") {
        await i.update({embeds: [bastet], components: [bas]})
      }
      if(i.customId == "bas2" || i.customId == "bastet2") {
        await i.update({embeds: [bastet], components: [bas2]})
      }
      if(i.customId == "bas3" || i.customId == "bastet3") {
        await i.update({embeds: [bastet], components: [bas3]})
      }
      if(i.customId == "bas4" || i.customId == "bastet4") {
        await i.update({embeds: [bastet], components: [bas4]})
      }
      if(i.customId == "ms" || i.customId == "mechascope") {
        await i.update({embeds: [mechascope], components: [ms]})
      }
      if(i.customId == "ms2" || i.customId == "mechascope2") {
        await i.update({embeds: [mechascope], components: [ms2]})
      }
      if(i.customId == "ms3" || i.customId == "mechascope3") {
        await i.update({embeds: [mechascope], components: [ms3]})
      }
      if(i.customId == "ms4" || i.customId == "mechascope4") {
        await i.update({embeds: [mechascope], components: [ms4]})
      }
    });
  },
};
