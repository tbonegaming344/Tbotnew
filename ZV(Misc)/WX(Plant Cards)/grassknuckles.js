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
  name: `grassknuckles`,
  aliases: [`gk`, `knuckles`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Grass Knuckles Decks")
        .setEmoji("<:FUCKLES:1100168498363240518>")
        .setStyle(ButtonStyle.Success)
    );
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Grass Knuckles decklists")
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
      .setLabel("Meme Deck")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Grass Knuckles Decks")
      .setValue("all")
      .setDescription('View all Grass Knuckles decks')
      .setEmoji("<:FUCKLES:1100168498363240518>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const budgetdecks = [
      "budgetgk"
    ];
    const combodecks = [
      "healthotk"
    ];
    const midrangedecks = [
     "healthotk"
    ];
    const tempodecks = [
      "budgetgk",
    ];
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pawntrickstab")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("bgk")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const bgk= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("hotk")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const hotk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("budgetgk")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("pts")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const pts = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healthotk")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary), 
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "budgetgk",
      "healthotk", 
      "pawntrickstab"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let gk = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist"
      )
      .setTitle(
        "Grass Knuckles | <:MegaGrow:1062501412992458802><:Guardian:1062501130501885973>"
      )
      .setDescription("**\\- Leafy Hero  -**")
      .setColor("Random")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Holo-Flora <:MegaGrow:1062501412992458802> \n Draw two cards. \nTime To Shine <:MegaGrow:1062501412992458802> \n A Plant does a Bonus Attack. \nRoot Wall <:Guardian:1062501130501885973> \n A Plant gets +2<:Health:1062515540712751184> and can't be hurt this turn. \nPower Pummel <:MegaGrow:1062501412992458802><:Guardian:1062501130501885973> \n Attack each Zombie on the ground for 2 damage.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "He's the best at what he does... and what he does is punching!",
        }
      );
     //Help GK Embed
     let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist"
      )
      .setTitle("Grass Knuckles Decks")
      .setDescription(`To view the Grass Knuckles decks please click on the buttons below!
Note: Grass Knuckles has ${decks.length} total decks in Tbot`)
      .setColor("Random")
 let allEmbed = new EmbedBuilder()
 .setThumbnail(
   "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist"
 )
 .setTitle("Grass Knuckles Decks")
 .setDescription(`My decks for Grass Knuckles(GK) are ${toBuildString}`)
 .setColor("Random")
 .setFooter({
   text: `To view the Grass Knuckles decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Grass Knuckles has ${decks.length} decks in Tbot`,
 });
    let [result] = await db.query(`SELECT * FROM gkdecks`);
    let budgetgk = new EmbedBuilder()
      .setTitle(`${result[5].budgetgk}`)
      .setDescription(`${result[3].budgetgk}`)
      .setFooter({ text: `${result[2].budgetgk}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetgk}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetgk}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetgk}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetgk}`);
      let healthotk = new EmbedBuilder()
      .setTitle(`${result[5].healthotk}`)
      .setDescription(`${result[3].healthotk}`)
      .setFooter({ text: `${result[2].healthotk}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].healthotk}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].healthotk}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].healthotk}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].healthotk}`);
      let pawntrickstab= new EmbedBuilder()
      .setTitle(`${result[5].pawntrickstab}`)
      .setDescription(`${result[3].pawntrickstab}`)
      .setFooter({ text: `${result[2].pawntrickstab}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].pawntrickstab}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].pawntrickstab}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].pawntrickstab}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].pawntrickstab}`);
    const m = await message.channel.send({ embeds: [gk], components: [cmd] });
    const iFilter = (i) => i.user.id == message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if(i.customId == "select"){
        const value = i.values[0]; 
        if(value == "budget" || value == "tempo"){
          await i.reply({embeds: [budgetgk], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme" || value == "combo" || value == "midrange"){
          await i.reply({embeds: [healthotk], flags: MessageFlags.Ephemeral})
        }
        if(value == "comp" || value == "control"){
          await i.reply({embeds: [pawntrickstab], flags: MessageFlags.Ephemeral})
        }
        if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
      }
     if(i.customId == "allhelp" || i.customId == "helpall"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
     }
     if(i.customId == "bgk" || i.customId == "budgetgk"){
        await i.update({embeds: [budgetgk], components: [bgk]})
     }
     if(i.customId == "hotk" || i.customId == "healthotk"){
        await i.update({embeds: [healthotk], components: [hotk]})
     }
      if(i.customId == "pts" || i.customId == "pawntrickstab"){
          await i.update({embeds: [pawntrickstab], components: [pts]})
      }
    });
  },
};
