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
    .setColor("#000000");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `impfinity`,
  aliases: [`if`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ifhelp")
        .setLabel("Impifinity(IF) Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:Impfinity:1087754523050774659>")
    );
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Impfinity's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
      .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription('Some of the Best Plant Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Impfinity Decks")
      .setValue("all")
      .setDescription('View all of Impfinity(IF) decks')
      .setEmoji("<:Impfinity:1087754523050774659>")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const impfinityDecks = {
      budgetDecks: ["budgetif"],
      competitiveDecks: ["nohokaistars", "spacestars"],
      ladderDecks: ["splimps"],
      aggroDecks: ["budgetif", "splimps"],
      comboDecks: ["spacestars"],
      midrangeDecks: ["nohokaistars", "spacestars"],
      allDecks: ["budgetif", "nohokaistars", "spacestars", "splimps"],
    }
    function buildDeckString(decks) {
      return decks.map(deck => `\n<@1043528908148052089> **${deck}**`).join('');
    }
    const toBuildString = buildDeckString(impfinityDecks.allDecks);
    const competitiveString = buildDeckString(impfinityDecks.competitiveDecks);
    const aggroString = buildDeckString(impfinityDecks.aggroDecks);
    const midrangeString = buildDeckString(impfinityDecks.midrangeDecks);
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
    const alldecksrow = new CreateButtons("splimps", "bif")
    const bif = new CreateButtons("helpall", "nhks")
    const nhks = new CreateButtons("budgetif", "stars")
    const stars = new CreateButtons("nohokaistars", "spl")
    const spl = new CreateButtons("spacestars", "allhelp")
    const competitiveRow = new CreateButtons("spacestars2", "nhks2")
    const nhks2 = new CreateButtons("helpcomp", "stars2")
    const stars2 = new CreateButtons("nohokaistars2", "comphelp")
    const aggroRow = new CreateButtons("splimps2", "bif2")
    const bif2 = new CreateButtons("helpaggro", "spl2")
    const spl2 = new CreateButtons("budgetif2", "aggrohelp")
    const midrangeRow = new CreateButtons("spacestars3", "nhks3")
    const nhks3 = new CreateButtons("helpmidrange", "stars3")
    const stars3 = new CreateButtons("nohokaistars3", "midrangehelp")
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/8/83/Impfinity.webp/revision/latest?cb=20220421015258"
      )
      .setTitle(
        "Impfinity | <:Sneaky:1062502187781075094><:Crazy:1062502046474973224>"
      )
      .setDescription("**\\-  Imp Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Super Stench <:Sneaky:1062502187781075094> \n All Zombies get <:Deadly:1062501985795964928>__Deadly__.  \n In-Crypted <:Sneaky:1062502187781075094> \n A Zombie hides in a __Gravestone__.  \n Brute Strength <:Crazy:1062502046474973224> \n A Zombie gets +3<:Strength:1062501774612779039>. \n Triple Threat <:Sneaky:1062502187781075094><:Crazy:1062502046474973224> \n Make two 2<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Impfinity Clones with __Amphibious__ in random lanes.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: `He believes good things come in small packages. And in threes.`,
        }
      )
      .setColor("Random");
      
      const alldecksEmbed = new CreateHelpEmbed(
        "Impfinity(IF) Decks",
        `My commands for Impfinity(IF) are ${toBuildString}`, 
        "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520",
        `To view the Impfinity decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: Impfinity has ${impfinityDecks.allDecks.length} total decks in Tbot`
      )
        const helpif = new CreateHelpEmbed(
          "Impfinity(IF) Decks",
          `To view the Impfinity decks please select an option from the select menu below!
  Note: Impfinity has ${impfinityDecks.allDecks.length} total decks in Tbot`,
          "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520"
        );
        const competitiveEmbed = new CreateHelpEmbed(
          "Impfinity Competitive Decks",
          `My competitive decks for Impfinity(IF) are ${competitiveString}`,
          "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520",
          `To view the Impfinity competitive decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: Impfinity has ${impfinityDecks.competitiveDecks.length} competitive decks in Tbot`
        );
        const aggroEmbed = new CreateHelpEmbed(
          "Impfinity Aggro Decks",
          `My aggro decks for Impfinity(IF) are ${aggroString}`,
          "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520",
          `To view the Impfinity aggro decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: Impfinity has ${impfinityDecks.aggroDecks.length} aggro decks in Tbot`
        );
        const midrangeEmbed = new CreateHelpEmbed(
          "Impfinity Midrange Decks",
          `My midrange decks for Impfinity(IF) are ${midrangeString}`,
          "https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520",
          `To view the Impfinity midrange decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: Impfinity has ${impfinityDecks.midrangeDecks.length} midrange decks in Tbot`
        );
  const [result] = await db.query(`SELECT * FROM ifdecks`);
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
      .setColor("Purple");
    const imageUrl = result[4][deckName];
    if (imageUrl) {
      embed.setImage(imageUrl);
    }
    return embed;
  }
  const budgetif = new CreateDeckEmbed(result, "budgetif");
  const nohokaistars = new CreateDeckEmbed(result, "nohokaistars");
  const spacestars = new CreateDeckEmbed(result, "spacestars");
  const splimps = new CreateDeckEmbed(result, "splimps");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i){
      if(i.customId == "select") {
        const value = i.values[0];
        if(value == "budget"){
          await i.reply({embeds: [budgetif], flags: MessageFlags.Ephemeral});
        }
        else if(value == "combo"){
          await i.reply({embeds: [spacestars], flags: MessageFlags.Ephemeral});
        }
        else if(value == "ladder"){
          await i.reply({embeds: [splimps], flags: MessageFlags.Ephemeral});
        }
        else if(value == "aggro"){
          await i.update({embeds: [aggroEmbed], components: [aggroRow]});
        }
        else if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]});
        }
        else if(value == "comp"){
          await i.update({embeds: [competitiveEmbed], components: [competitiveRow]});
        }
        else if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangeRow]});
        }
      }
    }
    async function HandleButtonInteraction(i){
      if (i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      else if (i.customId == "helpcomp" || i.customId == "comphelp"){
        await i.update({embeds: [competitiveEmbed], components: [competitiveRow]});
      }
      else if (i.customId == "helpmidrange" || i.customId == "midrangehelp"){
        await i.update({embeds: [midrangeEmbed], components: [midrangeRow]});
      }
      else if (i.customId == "helpaggro" || i.customId == "aggrohelp") {
        await i.update({ embeds: [aggroEmbed], components: [aggroRow] });
      }
      else if (i.customId == "bif" || i.customId == "budgetif") {
        await i.update({ embeds: [budgetif], components: [bif] });
      }
      else if (i.customId == "bif2" || i.customId == "budgetif2") {
        await i.update({ embeds: [budgetif], components: [bif2] });
      }
      else if (i.customId == "stars" || i.customId == "spacestars") {
        await i.update({ embeds: [spacestars], components: [stars] });
      }
      else if (i.customId == "stars2" || i.customId == "spacestars2") {
        await i.update({ embeds: [spacestars], components: [stars2] });
      }
      else if (i.customId == "stars3" || i.customId == "spacestars3") {
        await i.update({ embeds: [spacestars], components: [stars3] });
      }
      else if (i.customId == "spl" || i.customId == "splimps") {
        await i.update({ embeds: [splimps], components: [spl] });
      }
      else if (i.customId == "spl2" || i.customId == "splimps2") {
        await i.update({ embeds: [splimps], components: [spl2] });
      }
      else if (i.customId == "nhks" || i.customId == "nohokaistars") {
        await i.update({ embeds: [nohokaistars], components: [nhks] });
      }
      else if (i.customId == "nhks2" || i.customId == "nohokaistars2") {
        await i.update({ embeds: [nohokaistars], components: [nhks2] });
      }
      else if (i.customId == "nhks3" || i.customId == "nohokaistars3") {
        await i.update({ embeds: [nohokaistars], components: [nhks3] });
      }
      else if (i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ifhelp") {
        await i.update({ embeds: [helpif], components: [row] });
      }
      else if(i.customId == "select") {
        await HandleSelectMenu(i);
      }
      else{
        await HandleButtonInteraction(i);
      }
    });
  },
};
