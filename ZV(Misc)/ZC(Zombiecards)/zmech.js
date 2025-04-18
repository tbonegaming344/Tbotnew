const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const db = require("../../index.js");
/**
 * The CreateHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("Orange");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `zmech`,
  aliases: [`zm`, `mech`, `z-mech`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpzm")
        .setLabel("Zmech Decks")
        .setStyle(ButtonStyle.Danger)
        .setEmoji("<:zmech:1088189178224853063>")
    );
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Zmech's Decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
        .setLabel("Budget Deck")
        .setValue("budget")
        .setDescription("Decks that are cheap for new players")
        .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Deck")
        .setValue("comp")
        .setDescription("Some of the Best Decks in the game")
        .setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Ladder Decks")
        .setValue("ladder")
        .setDescription("Decks that mostly only good for ranked games")
        .setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Meme Decks")
        .setValue("meme")
        .setDescription("Decks that are built off a weird/fun combo"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Aggro Decks")
        .setValue("aggro")
        .setDescription(
          "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
        ),
      new StringSelectMenuOptionBuilder()
        .setLabel("Combo Decks")
        .setValue("combo")
        .setDescription(
          "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
        ),
      new StringSelectMenuOptionBuilder()
        .setLabel("Control Deck")
        .setValue("control")
        .setDescription(
          'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
        ),
      new StringSelectMenuOptionBuilder()
        .setLabel("Midrange Decks")
        .setValue("midrange")
        .setDescription(
          "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
        ),
      new StringSelectMenuOptionBuilder()
        .setLabel("Tempo Deck")
        .setValue("tempo")
        .setDescription(
          "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
        ),
      new StringSelectMenuOptionBuilder()
        .setLabel("All Zmech Decks")
        .setValue("all")
        .setDescription("View all Zmech decks in Tbot")
        .setEmoji("<:zmech:1088189178224853063>")
    );
  const row = new ActionRowBuilder().addComponents(select);
  const zmechDecks = {
    budgetDecks: ["budgetzm"],
    competitiveDecks: ["gargburn"],
    ladderDecks: ["binaryflagwar", "brady", "trickmech"],
    memeDecks: ["dozzamech", "uncrackamech", "zmoss"],
    aggroDecks: ["budgetzm", "dozzamech", "trickmech"],
    comboDecks: ["binaryflagwar", "budgetzm", "gargburn", "uncrackamech", "zmoss"],
    controlDecks: ["uncrackamech"],
    midrangeDecks: ["binaryflagwar", "gargburn"],
    tempoDecks: ["brady"],
    allDecks: [
      "binaryflagwar",
      "brady",
      "budgetzm",
      "dozzamech",
      "gargburn",
      "trickmech",
      "uncrackamech",
      "zmoss",
    ],
  };
   /**
     * The buildDeckString function takes an array of deck names and builds a string with each deck name on a new line, prefixed with the bot mention.
     * @param {Array} decks - The array of deck names to build the string from
     * @returns {string} - The string of deck names
     */
    function buildDeckString(decks) {
    return decks
      .map((deck) => `\n<@1043528908148052089> **${deck}**`)
      .join("");
  }
  const toBuildString = buildDeckString(zmechDecks.allDecks);
  const toBuildLadderString = buildDeckString(zmechDecks.ladderDecks);
  const toBuildMemeString = buildDeckString(zmechDecks.memeDecks);
  const toBuildAggroString = buildDeckString(zmechDecks.aggroDecks);
  const toBuildComboString = buildDeckString(zmechDecks.comboDecks);
  const toBuildMidrangeString = buildDeckString(zmechDecks.midrangeDecks);
  /**
     * The CreateButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button 
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
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
  const alldecksrow = new CreateButtons("zmoss", "bfw");
  const bfw = new CreateButtons("helpall", "br");
  const br = new CreateButtons("binaryflagwar", "bzm");
  const bzm = new CreateButtons("brady", "dm");
  const dm = new CreateButtons("budgetzm", "gb");
  const gb = new CreateButtons("dozzamech", "tm");
  const tm = new CreateButtons("gargburn", "um");
  const um = new CreateButtons("trickmech", "zm");
  const zm = new CreateButtons("uncrackamech", "allhelp");
  const ladderrow = new CreateButtons("trickmech2", "bfw2");
  const bfw2 = new CreateButtons("ladderhelp", "br2");
  const br2 = new CreateButtons("binaryflagwar2", "tm2");
  const tm2 = new CreateButtons("brady2", "helpladder");
  const memerow = new CreateButtons("zmoss2", "dm2");
  const dm2 = new CreateButtons("memehelp", "um2");
  const um2 = new CreateButtons("dozzamech2", "zm2");
  const zm2 = new CreateButtons("uncrackamech2", "helpmeme");
  const aggrorow = new CreateButtons("trickmech2", "bzm2");
  const bzm2 = new CreateButtons("aggrohelp", "dm3");
  const dm3 = new CreateButtons("budgetzm2", "tm3");
  const tm3 = new CreateButtons("dozzamech3", "helpaggro");
  const comborow = new CreateButtons("zmoss3", "bfw3");
  const bfw3 = new CreateButtons("combohelp", "bzm3");
  const bzm3 = new CreateButtons("binaryflagwar3", "gb2");
  const gb2 = new CreateButtons("budgetzm3", "um3");
  const um3 = new CreateButtons("gargburn2", "zm3");
  const zm3 = new CreateButtons("uncrackamech3", "helpcombo");
  const midrangerow = new CreateButtons("gargburn3", "bfw4");
  const bfw4 = new CreateButtons("midrangehelp", "gb3");
  const gb3 = new CreateButtons("binaryflagwar4", "helpmidrange");
  const embed = new EmbedBuilder()
      .setThumbnail(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
      )
      .setTitle(
        "Z-Mech | <:Hearty:1062501636557242429><:Crazy:1062502046474973224>"
      )
      .setDescription("**\\- Science Imp Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Rock Wall <:Hearty:1062501636557242429> \n A Zombie gets +5<:Health:1062515540712751184>. \n Brute Strength <:Crazy:1062502046474973224> \n A Zombie gets +3<:Strength:1062501774612779039>. \n Electrobolt <:Crazy:1062502046474973224> \n Do 3 damage to a Plant. \n Missile Madness <:Hearty:1062501636557242429><:Crazy:1062502046474973224> \n Do 3 damage to a Plant and 1 damage to all other Plants. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "Once watched giant mecha anime for 12 hours straight.",
        }
      )
      .setColor("Orange");
    const helpzm = new CreateHelpEmbed(
      "Zmech Decks",
      `To view the Zmech decks please select an option from the select menu below!
  Note: Zmech has ${zmechDecks.allDecks.length} total decks in Tbot`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
    );
    const alldecksEmbed = new CreateHelpEmbed(
      "Zmech Decks",
      `My commands for Zmech(ZM) are ${toBuildString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: Zmech has ${zmechDecks.allDecks.length} total decks in Tbot`
    );
    const ladderEmbed = new CreateHelpEmbed(
      "Zmech Ladder Decks",
      `My ladder decks for Zmech(ZM) are ${toBuildLadderString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
  Note: Zmech has ${zmechDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Zmech Meme Decks",
      `My meme decks for Zmech(ZM) are ${toBuildMemeString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
  Note: Zmech has ${zmechDecks.memeDecks.length} meme decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      "Zmech Aggro Decks",
      `My aggro decks for Zmech(ZM) are ${toBuildAggroString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech aggro decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
  Note: Zmech has ${zmechDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Zmech Combo Decks",
      `My combo decks for Zmech(ZM) are ${toBuildComboString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
  Note: Zmech has ${zmechDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Zmech Midrange Decks",
      `My midrange decks for Zmech(ZM) are ${toBuildMidrangeString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
  Note: Zmech has ${zmechDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM zmdecks`);
     /**
     * The CreateDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
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
    const binaryflagwar = new CreateDeckEmbed(result, "binaryflagwar");
    const brady = new CreateDeckEmbed(result, "brady");
    const budgetzm = new CreateDeckEmbed(result, "budgetzm");
    const dozzamech = new CreateDeckEmbed(result, "dozzamech");
    const uncrackamech = new CreateDeckEmbed(result, "feastmech");
    const gargburn = new CreateDeckEmbed(result, "gargburn");
    const trickmech = new CreateDeckEmbed(result, "trickmech");
    const zmoss = new CreateDeckEmbed(result, "zmoss");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "comp") {
        await i.reply({ embeds: [gargburn], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.reply({ embeds: [brady], flags: MessageFlags.Ephemeral });
      } else if (value == "control") {
        await i.reply({
          embeds: [uncrackamech],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "budget") {
        await i.reply({ embeds: [budgetzm], flags: MessageFlags.Ephemeral });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpzm: {embed: helpzm, component: row},
        allhelp: {embed: alldecksEmbed, component: alldecksrow}, 
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        ladderhelp: {embed: ladderEmbed, component: ladderrow},
        helpladder: {embed: ladderEmbed, component: ladderrow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpmeme: {embed: memeEmbed, component: memerow},
        aggrohelp: {embed: aggroEmbed, component: aggrorow},
        helpaggro: {embed: aggroEmbed, component: aggrorow},
        combohelp: {embed: comboEmbed, component: comborow},
        helpcombo: {embed: comboEmbed, component: comborow},
        midrangehelp: {embed: midrangeEmbed, component: midrangerow},
        helpmidrange: {embed: midrangeEmbed, component: midrangerow},
        bfw: {embed: binaryflagwar, component: bfw},
        binaryflagwar: {embed: binaryflagwar, component: bfw},
        bfw2: {embed: binaryflagwar, component: bfw2},
        binaryflagwar2: {embed: binaryflagwar, component: bfw2},
        bfw3: {embed: binaryflagwar, component: bfw3},
        binaryflagwar3: {embed: binaryflagwar, component: bfw3},
        bfw4: {embed: binaryflagwar, component: bfw4},
        binaryflagwar4: {embed: binaryflagwar, component: bfw4},
        br: {embed: brady, component: br},
        brady: {embed: brady, component: br},
        br2: {embed: brady, component: br2},
        brady2: {embed: brady, component: br2},
        bzm: {embed: budgetzm, component: bzm},
        budgetzm: {embed: budgetzm, component: bzm},
        bzm2: {embed: budgetzm, component: bzm2},
        budgetzm2: {embed: budgetzm, component: bzm2},
        bzm3: {embed: budgetzm, component: bzm3},
        budgetzm3: {embed: budgetzm, component: bzm3},
        dm: {embed: dozzamech, component: dm},
        dozzamech: {embed: dozzamech, component: dm},
        dm2: {embed: dozzamech, component: dm2},
        dozzamech2: {embed: dozzamech, component: dm2},
        dm3: {embed: dozzamech, component: dm3},
        dozzamech3: {embed: dozzamech, component: dm3},
        gb: {embed: gargburn, component: gb},
        gargburn: {embed: gargburn, component: gb},
        gb2: {embed: gargburn, component: gb2},
        gargburn2: {embed: gargburn, component: gb2},
        gb3: {embed: gargburn, component: gb3},
        gargburn3: {embed: gargburn, component: gb3},
        tm: {embed: trickmech, component: tm},
        trickmech: {embed: trickmech, component: tm},
        tm2: {embed: trickmech, component: tm2},
        trickmech2: {embed: trickmech, component: tm2},
        tm3: {embed: trickmech, component: tm3},
        trickmech3: {embed: trickmech, component: tm3},
        um: {embed: uncrackamech, component: um},
        uncrackamech: {embed: uncrackamech, component: um},
        um2: {embed: uncrackamech, component: um2},
        uncrackamech2: {embed: uncrackamech, component: um2},
        um3: {embed: uncrackamech, component: um3},
        uncrackamech3: {embed: uncrackamech, component: um3},
        zm: {embed: zmoss, component: zm},
        zmoss: {embed: zmoss, component: zm},
        zm2: {embed: zmoss, component: zm2},
        zmoss2: {embed: zmoss, component: zm2},
        zm3: {embed: zmoss, component: zm3},
        zmoss3: {embed: zmoss, component: zm3},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({ content: "Unknown button action", flags: MessageFlags.Ephemeral });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
     if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
