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
    .setColor("#964B00");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `wallknight`,
  aliases: [`wk`, `knight`, `wall-knight`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("WallKnight Decks")
        .setEmoji("<:wallnut:1100168145186062426>")
        .setStyle(ButtonStyle.Primary)
    );
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view WallKnight's Decklists")
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
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Plant Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All WallKnight Decks")
      .setValue("all")
      .setDescription('View all WallKnight decks in Tbot')
      .setEmoji("<:wallnut:1100168145186062426>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const wallKnightDecks = {
      budgetDecks: ["budgetwk"], 
      competitiveDecks: ["chemotherapy"],
      memeDecks: ["cancerknight", "highlander", "shitknight"],
      controlDecks: ["cancerknight", "chemotherapy"],
      midrangeDecks: ["highlander"],
      tempoDecks: ["budgetwk"], 
      allDecks: ["budgetwk", "cancerknight", "chemotherapy", "highlander", "shitknight"]
    }
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMemeString = buildDeckString(wallKnightDecks.memeDecks)
    const toBuildControlString = buildDeckString(wallKnightDecks.controlDecks)
    const toBuildString = buildDeckString(wallKnightDecks.allDecks)
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
    const memerow = new CreateButtons("shitknight", "cknight")
    const cknight = new CreateButtons("helpmeme", "hl")
    const hl = new CreateButtons("cancerknight", "sk")
    const sk = new CreateButtons("highlander", "allhelp")
    const controlrow = new CreateButtons("chemotherapy", "cknight2")
    const cknight2 = new CreateButtons("controlhelp", "chemo")
    const chemo = new CreateButtons("cancerknight", "helpcontrol")
    const alldecksrow = new CreateButtons("shitknight2", "bwk")
    const bwk = new CreateButtons("helpall", "cknight3")
    const cknight3 = new CreateButtons("budgetwk", "chemo2")
    const chemo2 = new CreateButtons("cancerknight3", "hl2")
    const hl2 = new CreateButtons("chemotherapy2", "sk2")
    const sk2 = new CreateButtons("highlander2", "allhelp")
    let wk = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/poohadventures/images/f/ff/WallHD.webp/revision/latest?cb=20210927051854"
      )
      .setTitle(
        "Wall-Knight | <:Guardian:1062501130501885973><:Solar:1062502678384607262>"
      )
      .setDescription("**\\- Nut Hero  -**")
      .setColor("#964B00")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Geyser <:Solar:1062502678384607262> \n Heal your Hero and all Plants for 4. \n Nut Signal <:Guardian:1062501130501885973> \n Make a __Wall-Nut__. Draw a card. \n Wall-Nut 0<:Strength:1062501774612779039>/6<:Health:1062515540712751184>, __Team-Up__ \n Bubble Up <:Guardian:1062501130501885973> \n Move a Plant. It gets +4<:Health:1062515540712751184>. \n Uncrackable <:Guardian:1062501130501885973><:Solar:1062502678384607262>\n You Hero can't be hurt this turn. Draw a card. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "He's a great guy - he just sometimes has a hard time coming out of his shell.",
        }
      );
      const embed = new CreateHelpEmbed(
        "WallKnight Decks",
        `To view the WallKnight decks please select an option from the select menu below!
  Note: WallKnight has ${wallKnightDecks.allDecks.length} total decks in Tbot`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945"
      )
        const allEmbed = new CreateHelpEmbed(
        "WallKnight Decks",
        `My decks for Wall Knight(WK) are ${toBuildString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945",
        `To view the Wall-Knight decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: WallKnight has ${wallKnightDecks.allDecks.length} decks in Tbot`
        )
        const memeEmbed = new CreateHelpEmbed(
        "WallKnight Meme Decks",
        `My meme decks for Wall Knight(WK) are ${toBuildMemeString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945",
        `To view the Wall-Knight meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
  Note: WallKnight has ${wallKnightDecks.memeDecks.length} meme decks in Tbot`
        )
        const controlEmbed = new CreateHelpEmbed(
        "WallKnight Control Decks",
        `My control decks for Wall Knight(WK) are ${toBuildControlString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945",
        `To view the Wall-Knight control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
  Note: WallKnight has ${wallKnightDecks.controlDecks.length} control decks in Tbot`
        )
      const [result] = await db.query(`SELECT * from wkdecks`);
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
           .setColor("Yellow");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
      const budgetwk = new CreateDeckEmbed(result, "budgetwkmidheal");
      const chemotherapy = new CreateDeckEmbed(result, "chemotherapy");
      const cancerknight = new CreateDeckEmbed(result, "cancerknight");
      const highlander = new CreateDeckEmbed(result, "highlander");
      const shitknight = new CreateDeckEmbed(result, "shitknight");
    const m = await message.channel.send({ embeds: [wk], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
        if(value == "budget" || value == "tempo"){
          await i.reply({embeds: [budgetwk], flags: MessageFlags.Ephemeral})
        }
        else if(value == "comp"){
          await i.reply({embeds: [chemotherapy], flags: MessageFlags.Ephemeral})
        }
        else if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        else if(value == "control"){
          await i.update({embeds: [controlEmbed], components: [controlrow]})
        }
        else if(value == "midrange"){
          await i.reply({embeds: [highlander], flags: MessageFlags.Ephemeral})
        }
        else if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
      }
      async function handleButtonInteraction(i){
         if(i.customId == "allhelp" || i.customId == "helpall"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
         }
         else if(i.customId == "memehelp" || i.customId == "helpmeme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
         }
         else if(i.customId == "combohelp" || i.customId == "helpcombo"){
          await i.update({embeds: [comboEmbed], components: [comborow]})
         }
         else if(i.customId == "controlhelp" || i.customId == "helpcontrol"){
          await i.update({embeds: [controlEmbed], components: [controlrow]})
         }
         else if(i.customId == "helpmid" || i.customId == "midhelp"){
          await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
         }
        else if(i.customId == "cknight" || i.customId == "cancerknight"){
          await i.update({embeds: [cancerknight], components: [cknight]})
        }
        else if(i.customId == "cknight2" || i.customId == "cancerknight2"){
          await i.update({embeds: [cancerknight], components: [cknight2]})
        }
        else if(i.customId == "cknight3" || i.customId == "cancerknight3"){
          await i.update({embeds: [cancerknight], components: [cknight3]})
        }
        else if(i.customId == "hl" || i.customId == "highlander"){
          await i.update({embeds: [highlander], components: [hl]})
        }
        else if(i.customId == "hl2" || i.customId == "highlander2"){
          await i.update({embeds: [highlander], components: [hl2]})
        }
        else if(i.customId == "sk" || i.customId == "shitknight"){
          await i.update({embeds: [shitknight], components: [sk]})
        }
        else if(i.customId == "sk2" || i.customId == "shitknight2"){
          await i.update({embeds: [shitknight], components: [sk2]})
        }
        else if(i.customId == "chemo" || i.customId == "chemotherapy"){
          await i.update({embeds: [chemotherapy], components: [chemo]})
        }
        else if(i.customId == "chemo2" || i.customId == "chemotherapy2"){
          await i.update({embeds: [chemotherapy], components: [chemo2]})
        }
        else if(i.customId == "bwk" || i.customId == "budgetwk"){
          await i.update({embeds: [budgetwk], components: [bwk]})
        }
      }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      }
      else if(i.customId == "select"){
        await HandleSelectMenu(i)
      }
     else {
      await handleButtonInteraction(i)
     }
    });
  },
};
