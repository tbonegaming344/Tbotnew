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
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("Red");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `nightcap`,
  aliases: [`nc`, `night`, `cap`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Night Cap Decks")
        .setEmoji("<:NCShrug:831993812788051978>")
        .setStyle(ButtonStyle.Primary)
    );
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("select an option below to view Nightcap's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
			.setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Deck")
      .setValue("meme")
      .setDescription('Plant Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Tempo Decks')
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Nightcap Decks")
      .setDescription("All of nightcap's decks")
      .setValue("all")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const nightcapDecks = {
      budgetDecks: ["budgetnc"], 
      competitiveDecks: ["cyburn", "toyotacontrolla"],
      memeDecks: ["translattail"],
      comboDecks: ["cyburn", "translattail"],
      controlDecks: ["toyotacontrolla"],
      midrangeDecks: ["cyburn"],
      tempoDecks: ["budgetnc", "translattail"], 
      allDecks: ["budgetnc", "cyburn", "toyotacontrolla", "translattail"]
    }
    
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildCompString = buildDeckString(nightcapDecks.competitiveDecks);
    const toBuildComboString = buildDeckString(nightcapDecks.memeDecks);
    const toBuildTempoString = buildDeckString(nightcapDecks.tempoDecks);
    const toBuildString = buildDeckString(nightcapDecks.allDecks);
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
    const compRow = new CreateButtons("toyotacontrolla", "cburn")
    const cburn = new CreateButtons("helpcomp", "tc")
    const tc = new CreateButtons("cyburn", "comphelp")
    const comboRow= new CreateButtons("translattail", "cburn2")
    const cburn2= new CreateButtons("helpcombo", "tl")
    const tl = new CreateButtons("cyburn2", "combohelp")
    const tempoRow= new CreateButtons("translattail2", "bnc")
    const bnc = new CreateButtons("helptempo", "tl2")
    const tl2 = new CreateButtons("budgetnc", "tempohelp")
    const alldecksrow = new CreateButtons("translattail3", "bnc2")
    const bnc2 = new CreateButtons("helpall", "cburn3")
    const cburn3 = new CreateButtons("budgetnc2", "tc2")
    const tc2 = new CreateButtons("cyburn3", "tl3")
    const tl3 = new CreateButtons("toyotacontrolla2", "allhelp")
    let nc = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
      .setTitle(
        "Nightcap | <:Kabloom:1062502137826910268><:Smarty:1062502890448638022>"
      )
      .setDescription("**\\- Mushroom Hero  -**")
      .setColor("Red")

      .addFields(
        {
          name: "Superpowers",
          value:
            "More Spore <:Kabloom:1062502137826910268> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Button Mushrooms in a lane of your choice. Then another  appears in a random lanes. \nWhirlwind <:Smarty:1062502890448638022> \n Bounce a random Zombie. \nStorm Front <:Kabloom:1062502137826910268> \n All Plants get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \nMush-Boom <:Kabloom:1062502137826910268><:Smarty:1062502890448638022> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Poison Mushroom with Anti-Hero 2. \n Do 2 damage to a Zombie there. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "He'a fun guy.",
        }
      );
      const embed = new CreateHelpEmbed(
        "Night Cap(NC) Decks",
        `To view the Night Cap decks please select an option from the select menu below!
  Note: Night Cap has ${nightcapDecks.allDecks.length} total decks in Tbot`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044"
      )
        const compEmbed = new CreateHelpEmbed(
        "Night Cap Competitive Decks",
        `My Competitive Decks for Night Cap(NC) are ${toBuildCompString}`, 
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044", 
        `To view the Competitive Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Competitive decks!
  Note: Night Cap has ${nightcapDecks.competitiveDecks.length} Competitive decks in Tbot`
        )
        const allEmbed = new CreateHelpEmbed(
        "Night Cap Decks",
        `My Decks for Night Cap(NC) are ${toBuildString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044",
        `To view the Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Night Cap decks!
  Note: Night Cap has ${nightcapDecks.allDecks.length} decks in Tbot`
        )
        const comboEmbed = new CreateHelpEmbed(
        "Night Cap Combo Decks",
        `My Combo Decks for Night Cap(NC) are ${toBuildComboString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044",
        `To view the Combo Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Combo decks!
  Note: Night Cap has ${nightcapDecks.comboDecks.length} Combo decks in Tbot`
        )
        const tempoEmbed = new CreateHelpEmbed(
          "Night Cap Tempo Decks", 
          `My Tempo Decks for Night Cap(NC) are ${toBuildTempoString}`, 
           "https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044", 
           `To view the Tempo Night Cap decks please use the commands listed above or click on the buttons below to navigate through all Tempo decks!
  Note: Night Cap has ${nightcapDecks.tempoDecks.length} Tempo decks in Tbot`
        )
      const [result] = await db.query(`SELECT * from ncdecks`);
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
      //budgetnc
      const budgetnc = new CreateDeckEmbed(result, "budgetnc")
      const cyburn = new CreateDeckEmbed(result, "cyburn")
      const toyotacontrolla = new CreateDeckEmbed(result, "toyotacontrolla")
      const translattail = new CreateDeckEmbed(result, "translattail")
    const m = await message.channel.send({ embeds: [nc], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i){
      const value = i.values[0];
      if(value == "budget"){
        await i.reply({embeds: [budgetnc], flags: MessageFlags.Ephemeral})
      }
      else if(value == "comp"){
        await i.update({embeds: [compEmbed], components: [compRow]})
      }
      else if(value == "all"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      else if(value == "meme"){
        await i.reply({embeds: [translattail], flags: MessageFlags.Ephemeral})
      }
      else if(value == "combo"){
        await i.update({embeds: [comboEmbed], components: [comboRow]})
      }
      else if(value == "control"){
        await i.reply({embeds: [toyotacontrolla], flags: MessageFlags.Ephemeral})
      }
      else if(value == "midrange"){
        await i.reply({embeds: [cyburn], flags: MessageFlags.Ephemeral})
      }
      else if(value == "tempo"){
        await i.update({embeds: [tempoEmbed], components: [tempoRow]})
    }
  }
  async function handleButtonInteraction(i){
    if(i.customId == "helpcomp" || i.customId == "comphelp"){
      await i.update({embeds: [compEmbed], components: [compRow]})
     }
     else if(i.customId == "allhelp" || i.customId == "helpall"){
      await i.update({embeds: [allEmbed], components: [alldecksrow]})
     }
     else if(i.customId == "helpmeme" || i.customId == "memehelp"){
      await i.update({embeds: [memeEmbed], components: [memeRow]})
     }
     else if(i.customId == "combohelp" || i.customId == "helpcombo"){
      await i.update({embeds: [comboEmbed], components: [comboRow]})
     }
     else if(i.customId == "helpmid" || i.customId == "midhelp"){
      await i.update({embeds: [midrangeEmbed], components: [midrangeRow]})
     }
     else if(i.customId == "helptempo" || i.customId == "tempohelp"){
      await i.update({embeds: [tempoEmbed], components: [tempoRow]})
     }
     else if(i.customId == "bnc" || i.customId == "budgetnc"){
      await i.update({embeds: [budgetnc], components: [bnc]})
     }
     else if(i.customId == "bnc2" || i.customId == "budgetnc2"){
      await i.update({embeds: [budgetnc], components: [bnc2]})
     }
     else if(i.customId == "cburn" || i.customId == "cyburn"){
      await i.update({embeds: [cyburn], components: [cburn]})
     }
     else if(i.customId == "cburn2" || i.customId == "cyburn2"){
      await i.update({embeds: [cyburn], components: [cburn2]})
     }
     else if(i.customId == "cburn3" || i.customId == "cyburn3"){
      await i.update({embeds: [cyburn], components: [cburn3]})
     }
     else if(i.customId == "tc" || i.customId == "toyotacontrolla"){
      await i.update({embeds: [toyotacontrolla], components: [tc]})
     }
     else if(i.customId == "tc2" || i.customId == "toyotacontrolla2"){
      await i.update({embeds: [toyotacontrolla], components: [tc2]})
     }
     else if(i.customId == "tl" || i.customId == "translattail"){
      await i.update({embeds: [translattail], components: [tl]})
     }
     else if(i.customId == "tl2" || i.customId == "translattail2"){
      await i.update({embeds: [translattail], components: [tl2]})
     }
     else if(i.customId == "tl3" || i.customId == "translattail3"){
      await i.update({embeds: [translattail], components: [tl3]})
     }
     else if(i.customId == "tl4" || i.customId == "translattail4"){
      await i.update({embeds: [translattail], components: [tl4]})
     }
  }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if(i.customId == "select"){
        await HandleSelectMenu(i)
    }
    else{
      await handleButtonInteraction(i)
    }
    });
  },
};
