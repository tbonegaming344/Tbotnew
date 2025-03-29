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
function CreateHelpEmbed(title, description, thumbnail, footer){
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("Green");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `greenshadow`,
  aliases: [`gs`, `green`, `shadow`, `penelopea`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Green Shadow Decks")
        .setStyle(ButtonStyle.Success)
        .setEmoji("<a:GreenShadow:1100168011270328390>")
    );
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Green Shadow's Decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Plant Decks that are cheap for new players')
			.setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best  Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription("Decks that mostly only good for ranked games"), 
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
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Decks")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("All Green Shadow Decks")
      .setValue("all")
      .setDescription("View All Green Shadow Decks")
      .setEmoji("<a:GreenShadow:1100168011270328390>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const greenShadowDecks = {
      budgetDecks: ["budgetmopshadow"],
      competitiveDecks: ["abeans"],
      ladderDecks: ["pbeans"],
      memeDecks: ["100%winrate", "savagemayflower", "starrings"],
      aggroDecks: ["abeans", "pbeans"], 
      comboDecks: ["savagemayflower", "starrings"],
      midrangeDecks: ["starrings"],
      tempoDecks: ["100%winrate", "budgetmopshadow"], 
      allDecks:  [ "100%winrate", "abeans","budgetmopshadow", "pbeans", "savagemayflower", "starrings",]
    }
    function CreateButtons(leftButtonId, rightButtonId) {
      return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(leftButtonId)
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId(rightButtonId)
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
    }

    function BuildDeckString(decks) {
      return decks.map(deck => `\n<@1043528908148052089> **${deck}**`).join('');
    }
    const memerow = CreateButtons("starrings", "wr100")
    const wr100 = CreateButtons("helpmeme", "smf")
    const smf = CreateButtons("winrate100", "srings")
    const srings = CreateButtons("savagemayflower", "memehelp")
    const comborow = CreateButtons("starrings2", "smf2")
    const smf2 = CreateButtons("helpcombo", "srings2")
    const srings2 = CreateButtons("savagemayflower2", "combohelp")
    const temporow = CreateButtons("budgetmopshadow", "wr1002")
    const wr1002 = CreateButtons("helptempo", "bms")
    const bms = CreateButtons("winrate1002", "tempohelp")
    const aggrorow = CreateButtons("pbeans", "ab2")
    const ab2 = CreateButtons("aggrohelp", "pb")
    const pb = CreateButtons("abeans2", "helpaggro")
    const alldecksrow = CreateButtons("starrings4", "wr1003")
    const wr1003 = CreateButtons("helpall", "ab")
    const ab = CreateButtons("winrate1003", "bms2")
    const bms2 = CreateButtons("ab", "pb2")
    const pb2 = CreateButtons("bms2", "smf3")
    const smf3 = CreateButtons("pbeans2", "srings3")
    const srings3 = CreateButtons("smf3", "allhelp");
    const toBuildString = BuildDeckString(greenShadowDecks.allDecks)
    const toBuildAggroString = BuildDeckString(greenShadowDecks.aggroDecks)
    const toBuildMemeString = BuildDeckString(greenShadowDecks.memeDecks);
    const toBuildComboString = BuildDeckString(greenShadowDecks.comboDecks); 
    const toBuildTempoString = BuildDeckString(greenShadowDecks.tempoDecks);
    let gs = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/2/26/GreenShadowBYL.png/revision/latest?cb=20200704033327"
      )
      .setTitle(
        "Green Shadow | <:MegaGrow:1062501412992458802><:Smarty:1062502890448638022>"
      )
      .setDescription("**\\- Pea Hero  -**")
      .setColor("Green")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Big Chill <:Smarty:1062502890448638022>\n <:freeze:1323059404874055774>__Freeze__ a Zombie. \n Draw a card. \n Whirlwind <:Smarty:1062502890448638022> \n __Bounce__ a random Zombie. \n Embiggen <:MegaGrow:1062501412992458802> \n A Plant gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \n Precision Blast <:MegaGrow:1062501412992458802><:Smarty:1062502890448638022> \n Attack for 5 damage in the middle lane.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "Little known fact: When she takes off the cape and mask, she goes by the name Penelopea.",
        }
      );
      let embed = new CreateHelpEmbed(
        "Green Shadow Decks", 
        `To view the Green Shadow decks please select an option using the select menu below
Note: Green Shadow has ${greenShadowDecks.allDecks.length} decks in Tbot`, 
   "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png"
      )
        let allEmbed = new CreateHelpEmbed(
        "Green Shadow Decks",
        `My decks for Green Shadow(GS) are ${toBuildString}`,
        "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png",
        `To view the Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Green Shadow has ${greenShadowDecks.allDecks.length} decks in Tbot`,
        )
        let memeEmbed = new CreateHelpEmbed(
        "Green Shadow Meme Decks",
        `My meme decks for Green Shadow(GS) are ${toBuildMemeString}`,
        "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png",
        `To view the meme Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Green Shadow has ${greenShadowDecks.memeDecks.length} meme decks in Tbot`
        )
        let aggroEmbed = new CreateHelpEmbed(
          "Green Shadow Aggro Decks",
        `My aggro decks for Green Shadow(GS) are ${toBuildAggroString}`,
        "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png",
        `To view the aggro Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Green Shadow has ${greenShadowDecks.aggroDecks.length} aggro decks in Tbot`
        )
        let comboEmbed = new CreateHelpEmbed(
        "Green Shadow Combo Decks",
        `My combo decks for Green Shadow(GS) are ${toBuildComboString}`,
        "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png",
        `To view the combo Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Green Shadow has ${greenShadowDecks.comboDecks.length} combo decks in Tbot`
        )
        let tempoEmbed = new CreateHelpEmbed(
          "Green Shadow Tempo Decks", 
          `My tempo decks for Green Shadow(GS) are ${toBuildTempoString}`, 
          "https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png", 
          `To view the tempo Green Shadow decks please use the commands listed above or click on the buttons below to navigate through all tempo decks!
Note: Green Shadow has ${greenShadowDecks.tempoDecks.length} tempo decks in Tbot`
        )
      let [result] = await db.query(`SELECT * from gsdecks`);
      function CreateDeckEmbed(result, deckName) {
        const embed = new EmbedBuilder()
          .setTitle(`${result[5][deckName]}`)
          .setDescription(`${result[3][deckName]}`)
          .setFooter({ text: `${result[2][deckName]}` })
          .addFields(
            { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
            { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
            { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
          )
          .setColor("White");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
      let winrate100 = new CreateDeckEmbed(result, "wr100")
      let abeans = new CreateDeckEmbed(result, "abeans")
      let budgetgs = new CreateDeckEmbed(result, "budgetgs")
      let savagemayflower = new CreateDeckEmbed(result, "savagemayflower")
      let starrings = new CreateDeckEmbed(result, "sovietonion")
      const pbeans = new CreateDeckEmbed(result, "pbeans")
    const Filter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0]; 
        if(value == "budget"){
          await i.reply({embeds: [budgetgs], flags: MessageFlags.Ephemeral})
        }
        else if(value == "comp"){
          await i.reply({embeds: [abeans], flags: MessageFlags.Ephemeral})
        }
        else if(value == "ladder"){
          await i.reply({embeds: [pbeans], flags: MessageFlags.Ephemeral})
        }
        else if(value == "aggro"){
          await i.update({embeds: [aggroEmbed], components: [aggrorow]})
        }
        else if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        else if(value == "combo"){
          await i.update({embeds: [comboEmbed], components: [comborow]})
        }
        else if(value == "midrange"){
          await i.reply({embeds: [starrings], flags: MessageFlags.Ephemeral})
        }
        else if(value == "tempo"){
          await i.update({embeds: [tempoEmbed], components: [temporow]})
        }
        else if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
    }
    async function HandleButtonInteraction(i) {
      if( i.customId == "helpall" || i.customId == "allhelp"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      else if(i.customId == "memehelp" || i.customId == "helpmeme"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      else if( i.customId == "combohelp" || i.customId == "helpcombo"){
        await i.update({embeds: [comboEmbed], components: [comborow]})
      }
      else if(i.customId == "helpmid" || i.customId == "midhelp"){
        await i.update({embeds: [midrnageEmbed], components: [midrangerow]})
      }
      else if( i.customId == "helptempo" || i.customId == "tempohelp"){
        await i.update({embeds: [tempoEmbed], components: [temporow]})
      }
      else if(i.customId == "ab" || i.customId == "abeans"){
        await i.update({embeds: [abeans], components: [ab]})
      }
      else if(i.customId == "srings" || i.customId == "starrings"){
        await i.update({embeds: [starrings], components: [srings]})
      }
      else if(i.customId == "srings2" || i.customId == "starrings2"){
        await i.update({embeds: [starrings], components: [srings2]})
      }
      else if(i.customId == "srings3" || i.customId == "starrings3"){
        await i.update({embeds: [starrings], components: [srings3]})
      }
      else if(i.customId == "wr100" || i.customId == "winrate100"){
        await i.update({embeds: [winrate100], components: [wr100]})
      }
      else if(i.customId == "wr1002" || i.customId == "winrate1002"){
        await i.update({embeds: [winrate100], components: [wr1002]})
      }
      else if(i.customId == "wr1003" || i.customId == "winrate1003"){
        await i.update({embeds: [winrate100], components: [wr1003]})
      }
      else if(i.customId == "smf" || i.customId == "savagemayflower"){
        await i.update({embeds: [savagemayflower], components: [smf]})
      }
      else if(i.customId == "smf2" || i.customId == "savagemayflower2"){
        await i.update({embeds: [savagemayflower], components: [smf2]})
      }
      else if(i.customId == "smf3" || i.customId == "savagemayflower3"){
        await i.update({embeds: [savagemayflower], components: [smf3]})
      }
      else if(i.customId == "bms" || i.customId == "budgetmopshadow"){
        await i.update({embeds: [budgetgs], components: [bms]})
      }
      else if(i.customId == "bms2" || i.customId == "budgetmopshadow2"){
        await i.update({embeds: [budgetgs], components: [bms2]})
      }
      else if(i.customId == "helpaggro" || i.customId == "aggrohelp"){
        await i.update({embeds: [aggroEmbed], components: [aggrorow]})
      }
      else if(i.customId == "ab2" || i.customId == "abeans2"){
        await i.update({embeds: [abeans], components: [ab2]})
      }
      else if(i.customId == "pb" || i.customId == "pbeans"){
        await i.update({embeds: [pbeans], components: [pb]})
      }
      else if(i.customId == "pb2" || i.customId == "pbeans2"){
        await i.update({embeds: [pbeans], components: [pb2]})
      }
    }
    const m = await message.channel.send({ embeds: [gs], components: [cmd] });
    const collect = m.createMessageComponentCollector({ filter: Filter });
    collect.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      }
      else if (i.customId === "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
