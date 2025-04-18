const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
const db = require("../../index.js");
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#5a5547");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `dozza`,
  aliases: [`decksmadebydozza`, `helpdozza`, `dozzahelp`, `dozzadecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view dozza's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setEmoji("<:ladder:1271503994857979964>")
          .setDescription('Decks that mostly only good for ranked games'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription('Decks that are built off a weird/fun combo'), 
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
          .setLabel("All Decks")
          .setValue("all")
          .setDescription('View all of dozza\'s decks')
      );
    const row = new ActionRowBuilder().addComponents(select);
    const dozzaDecks = {
      ladderDecks: ["midred", "trickmech"],
      memeDecks: ["dozzamech", "highlander"],
      aggroDecks: ["dozzamech", "trickmech"],
      comboDecks: ["midred"],
      midrangeDecks: ["highlander", "midred"],
      allDecks: ["dozzamech", "highlander", "midred"],
    }
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildLadder = buildDeckString(dozzaDecks.ladderDecks);
    const toBuildMeme = buildDeckString(dozzaDecks.memeDecks);
    const toBuildAggro = buildDeckString(dozzaDecks.aggroDecks);
    const toBuildMid = buildDeckString(dozzaDecks.midrangeDecks);
    const toBuildString = buildDeckString(dozzaDecks.allDecks);
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
    const ladderrow = new CreateButtons("trickmech", "mr");
    const mr = new CreateButtons("ladderhelp", "tmech");
    const tmech = new CreateButtons("midred", "helpladder");
    const midrange = new CreateButtons("midred2", "hland");
    const hland = new CreateButtons("midhelp", "mr2");
    const mr2 = new CreateButtons("highlander", "helpmid");
    const meme = new CreateButtons("highlander2", "dm");
    const dm = new CreateButtons("memehelp", "hland2");
    const hland2 = new CreateButtons("dozzamech", "helpmeme");
    const aggrorow = new CreateButtons("trickmech2", "dm2");
    const dm2 = new CreateButtons("aggrohelp", "tmech2");
    const tmech2 = new CreateButtons("dozzamech2", "helpaggro");
    const alldecksrow = new CreateButtons("midred3", "dm3");
    const dm3 = new CreateButtons("allhelp", "hland3");
    const hland3 = new CreateButtons("dozzamech", "mr3");
    const mr3 = new CreateButtons("highlander3", "allhelp");
    const [result] = await db.query(`select dozzamech, highlander, 
midred, trickmech
from zmdecks zm 
inner join wkdecks wk 
on (zm.deckinfo = wk.deckinfo) 
inner join czdecks cz 
on (zm.deckinfo = cz.deckinfo)`);
const user = await client.users.fetch("1143937777763889324");
    const dozza = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: Dozza has ${dozzaDecks.allDecks.length} total decks in Tbot`,
        user.displayAvatarURL()
    );
  const ladderdozza = new CreateHelpEmbed(
    `${user.displayName} Ladder Decks`,
    `My ladder decks made by ${user.displayName} are ${toBuildLadder}`,
    user.displayAvatarURL(), 
    `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.ladderDecks.length} Ladder decks in Tbot`
  )
    const alldozza = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `My decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.allDecks.length} total decks in Tbot`
    )
      const middozza = new CreateHelpEmbed(
        `${user.displayName} Midrange Decks`,
        `My Midrange decks made by ${user.displayName} are ${toBuildMid}`,
        user.displayAvatarURL(),
        `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.midrangeDecks.length} Midrange decks in Tbot`
      )
      const memedozza = new CreateHelpEmbed(
        `${user.displayName} Meme Decks`,
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`,
        user.displayAvatarURL(),
        `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.memeDecks.length} Meme decks in Tbot`
      )
      const aggrodozza = new CreateHelpEmbed(
        `${user.displayName} Aggro Decks`,
        `My Aggro decks made by ${user.displayName} are ${toBuildAggro}`,
        user.displayAvatarURL(),
        `To view the Aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${dozzaDecks.aggroDecks.length} Aggro decks in Tbot`
      )
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
          .setColor("#5a5547");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
    const dozzamech = new CreateDeckEmbed(result, "dozzamech");
    const highlander = new CreateDeckEmbed(result, "highlander");
    const midred = new CreateDeckEmbed(result, "midred");
    const trickmech = new CreateDeckEmbed(result, "trickmech");
    const m = await message.channel.send({
      embeds: [dozza],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i){
      const value = i.values[0]
      if(value == "ladder"){
        await i.update({embeds: [ladderdozza], components: [ladderrow]});
      }
      else if(value == "combo"){
        await i.reply({embeds: [mred], flags: MessageFlags.Ephemeral})
      }
      else if(value == "midrange"){
        await i.update({embeds: [middozza], components: [midrange]});
      }
      else if(value == "meme"){
        await i.update({embeds: [memedozza], components: [meme]});
      }
      else if(value == "aggro"){
        await i.update({embeds: [aggrodozza], components: [aggrorow]});
      }
      else if(value == "all"){
        await i.update({embeds: [alldozza], components: [alldecksrow]})
      }
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        helpladder: {embed: ladderdozza, component: ladderrow},
        ladderhelp: {embed: ladderdozza, component: ladderrow},
        aggrohelp: {embed: aggrodozza, component: aggrorow},
        helpaggro: {embed: aggrodozza, component: aggrorow},
        memehelp: {embed: memedozza, component: meme},
        helpmeme: {embed: memedozza, component: meme},
        midhelp: {embed: middozza, component: midrange},
        helpmid: {embed: middozza, component: midrange},
        allhelp: {embed: alldozza, component: alldecksrow},
        helpall: {embed: alldozza, component: alldecksrow},
        mr: {embed: midred, component: mr},
        midred: {embed: midred, component: mr},
        mr2: {embed: midred, component: mr2},
        midred2: {embed: midred, component: mr2},
        mr3: {embed: midred, component: mr3},
        midred3: {embed: midred, component: mr3},
        hland: {embed: highlander, component: hland},
        highlander: {embed: highlander, component: hland},
        hland2: {embed: highlander, component: hland2},
        higlander2: {embed: highlander, component: hland2},
        hland3: {embed: highlander, component: hland3},
        highlander3: {embed: highlander, component: hland3},
        dm: {embed: dozzamech, component: dm},
        dozzamech: {embed: dozzamech, component: dm},
        dm2: {embed: dozzamech, component: dm2},
        dozzamech2: {embed: dozzamech, component: dm2},
        dm3: {embed: dozzamech, component: dm3},
        dozzamech3: {embed: dozzamech, component: dm3},
        tmech: {embed: trickmech, component: tmech},
        trickmech: {embed: trickmech, component: tmech},
        tmech2: {embed: trickmech, component: tmech2},
        trickmech2: {embed: trickmech, component: tmech2},
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Unknown Button Action", flags: MessageFlags.Ephemeral });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
    if(i.customId == "select"){
      await handleSelectMenu(i)
    }
    else {
      await handleButtonInteraction(i)
    }
    });
  },
};
