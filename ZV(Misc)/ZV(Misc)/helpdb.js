const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  MessageFlags,
} = require("discord.js");
const db = require("../../index.js");
/**
 * the createPlantHelpEmbed function creates an embed for the plant deck sections of the helpdb command
 * @param {string} title the title of the embed
 * @param {string} description the description of the embed
 * @param {string} image an image on the embed
 * @param {string} footer the text on the bottom of the embed
 * @returns {EmbedBuilder} the embed object
 */
function createPlantHelpEmbed(title, description, image, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(
      "https://media.discordapp.net/attachments/1044626284346605588/1358437770829369404/image.png?ex=67f3d743&is=67f285c3&hm=2344215f9820819eaa0870cc270f2a33fb1b3b7346b795d5daf814f797643c51&=&format=webp&quality=lossless"
    )
    .setImage(image)
    .setColor("Green");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
/**
 *
 * @param {string} title the title of the embed
 * @param {string} description the description of the embed
 * @param {string} thumbnail an image on the embed
 * @param {string} footer the text on the bottom of the embed
 * @returns {EmbedBuilder} the embed object
 */
function createZombieHelpEmbed(title, description, image, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(
      "https://media.discordapp.net/attachments/1044626284346605588/1358438184182092073/zombieicon.png?ex=67f3d7a5&is=67f28625&hm=c400aa1d11e623a426a0bfa881a55fb1250c353b9191725a79832528f4d56aa9&=&format=webp&quality=lossless"
    )
    .setImage(image)
    .setColor("Purple");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpdb`,
  aliases: [
    `dbhelp`,
    `dbcommands`,
    `dbdecks`,
    `ladderdeck`,
    `decksdb`,
    `database`,
    `db`,
    `databasedecks`,
    `databasehelp`,
    `helpdatabase`,
    `alldecks`,
    `competitive`,
    `comp`,
    `decks`,
    `decklists`, 
    `deck`,
    `competitivedecks`,
    `ladder`,
    `ladderdecks`,
    `aggro`,
    `aggrodecks`,
    `memeplantdecks`,
    `helpladder`,
    `allzombiedecks`,
    `allplantsdecks`,
    `meme`,
    `control`,
    `controldecks`,
    `combo`,
    `combodecks`,
    `midrange`,
    `midrangedecks`,
    `meme`,
    `memedecks`,
    `memedeck`,
    `memedb`,
    `tbotdb`,
    `helpaggro`,
    `competitivedecklists`,
    `competitiveplantdecks`,
    `budget`,
    `budgetdecks`,
    `helpmeme`,
    `ladderplantdecks`,
    `competitivezombiedecks`,
    `competitiveplants`,
    `all`,
    `budgethelp`,
    `plantdecks`,
    `zombiedecks`,
    `decklist`,
    `decklists`,
    `tempo`,
    `tempodecks`,
    `decktype`,
    `decktypes`,
    `archetype`,
    `archetypes`,
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("starter")
      .setPlaceholder(
        "Select an option below to view certain Decktypes or archtypes!"
      )
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Plant Decks")
          .setDescription("Plant Decks that are cheap for new players")
          .setEmoji("💰")
          .setValue("budgetpdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Plant Decks")
          .setDescription("Some of the Best Plant Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comppdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Plant Decks")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladderpdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Plant Decks")
          .setDescription("Plant Decks that are built off a weird/fun combo")
          .setValue("memepdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Zombie Decks")
          .setDescription("Zombie Decks that are cheap for new players")
          .setEmoji("💰")
          .setValue("budgetzdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Zombie Decks")
          .setDescription("Some of the Best Zombie Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("compzdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Zombie Decks")
          .setDescription("Zombie Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladderzdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Zombie Decks")
          .setDescription("Zombie Decks that are built off a weird/fun combo")
          .setValue("memezdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Plant Decks")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggropdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Plant Decks")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combopdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Plant Decks")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("controlpdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Plants Decks")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrangepdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Plant Decks")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempopdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Zombie Decks")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggrozdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Zombie Decks")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combozdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Zombie Decks")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("controlzdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Zombie Decks")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrangezdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Zombie Decks")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempozdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Plant Decks")
          .setDescription("An option to view all Plant Decks")
          .setEmoji("<:allplants:1325472845907623976>")
          .setValue("allpdecks"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Zombie Decks")
          .setDescription("An otion to view all Zombie Decks")
          .setEmoji("<:allzombies:1325472034687418481>")
          .setValue("allzdecks")
      );
    const selectrow = new ActionRowBuilder().addComponents(select);
    const plantDecks = {
      budgetDecks: [
        "budgetcc",
        "budgetct",
        "budgetcz",
        "budgetgk",
        "budgetgs",
        "budgetnc",
        "budgetro",
        "budgetsf",
        "budgetsp",
        "budgetwk",
      ],
      competitiveDecks: [
        "cartasbuenas",
        "chemotherapy",
        "cyburn",
        "espressoaggro",
        "healmidrose",
        "logbait",
        "neurotherapy",
        "radiotherapy",
        "toyotacontrolla",
        "venice",
      ],
      ladderDecks: [
        "bayonet",
        "carroot",
        "dinocounter",
        "goingnuts",
        "ginseng",
        "leafystrike",
        "pawntrickstab",
        "pbeans",
      ],
      memeDecks: [
        "100%winrate",
        "funnyflare",
        "healburn",
        "healthotk",
        "lasersnap",
        "leafstars",
        "lifecouldbedream",
        "mspotk",
        "nuttin",
        "plantmop",
        "popsicle",
        "psychosolstice",
        "recycling",
        "reflourished",
        "savagemayflower",
        "startron"
      ],
      aggroDecks: [
        "budgetcc",
        "budgetct",
        "budgetnc",
        "budgetsf",
        "cartasbuenas",
        "espressoaggro",
        "goingnuts",
        "logbait",
        "pbeans"
      ],
      comboDecks: [
        "bayonet",
        "budgetcc",
        "budgetcz",
        "carroot",
        "cyburn",
        "dinocounter",
        "funnyflare",
        "goingnuts",
        "healburn",
        "healthotk",
        "lasersnap",
        "leafstars",
        "mspotk",
        "nuttin",
        "plantmop",
        "psychosolstice",
        "reflourished",
        "savagemayflower",
        "startron",
        "venice"
      ],
      controlDecks: [
        "chemotherapy",
        "ginseng",
        "neurotherapy",
        "pawntrickstab",
        "popsicle",
        "radiotherapy",
        "toyotacontrolla",
      ],
      midrangeDecks: [
        "budgetcz",
        "budgetgk",
        "budgetro",
        "budgetsp",
        "budgetwk",
        "cyburn",
        "dinocounter",
        "funnyflare",
        "healburn",
        "healmidrose",
        "healthotk",
        "lasersnap",
        "leafstars",
        "psychosolstice",
        "recycling",
        "startron",
        "venice",
      ],
      tempoDecks: [
        "100%winrate",
        "bayonet",
        "carroot",
        "leafystrike",
        "lifecouldbedream",
      ],
      allDecks: [
        "100%winrate",
        "bayonet",
        "budgetct",
        "budgetcc",
        "budgetcz",
        "budgetgk",
        "budgetgs",
        "budgetnc",
        "budgetro",
        "budgetsf",
        "budgetsp",
        "budgetwk",
        "carroot",
        "cartasbuenas",
        "chemotherapy",
        "cyburn",
        "dinocounter",
        "espressoaggro",
        "funnyflare",
        "goingnuts",
        "ginseng",
        "healburn",
        "healmidrose",
        "healthotk",
        "lasersnap",
        "leafstars",
        "leafystrike",
        "lifecouldbedream",
        "logbait",
        "mspotk",
        "neurotherapy",
        "nuttin",
        "pawntrickstab",
        "pbeans",
        "plantmop",
        "popsicle",
        "psychosolstice",
        "radiotherapy",
        "recycling",
        "reflourished",
        "savagemayflower",
        "startron",
        "toyotacontrolla",
        "venice",
      ],
    };
    const zombieDecks = {
      budgetDecks: [
        "budgetbf",
        "budgeteb",
        "budgetif",
        "budgetim",
        "budgetnt",
        "budgetpb",
        "budgetrb",
        "budgetsb",
        "budgetsm",
        "budgetykm",
        "budgetzm",
      ],
      competitiveDecks: [
        "boltbolt",
        "cardsbolt",
        "lawnmower2",
        "limerence",
        "lockthebathroom",
        "pablosyeezys",
        "piport",
        "portalgun",
        "nohokaistars",
        "seacret",
        "slugged",
        "spacestars",
        "telimps",
        "trickstache",
      ],
      ladderDecks: [
        "bfmidgargs",
        "binaryflagwar",
        "brady",
        "cryoboy",
        "gargstar22",
        "gomorrah",
        "gravepiratestache",
        "luminous",
        "marxbolt",
        "mechacontrol",
        "schoolyard",
        "splimps",
        "trickmech"
      ],
      memeDecks: [
        "22savage",
        "banhammer",
        "bastet",
        "bonusducks",
        "conjureleap",
        "dozzamech",
        "floss",
        "frozentelimps",
        "himpter",
        "huntgargs",
        "igmablobchum",
        "ladytuna",
        "lunchtime",
        "mechagold",
        "noplayingallowed",
        "reversecatster",
        "sunbandits",
        "sunlord",
        "tangen",
        "uncrackamech",
        "uno",
        "watersports",
        "whalepharaoh",
        "youngeggmartin",
        "youngkenmartin",
        "zmoss",
      ],
      aggroDecks: [
        "budgetbf",
        "budgeteb",
        "budgetif",
        "budgetnt",
        "budgetpb",
        "budgetsm",
        "budgetzm",
        "dozzamech",
        "gravepiratestache",
        "marxbolt",
        "schoolyard",
        "seacret",
        "splimps",
        "trickmech",
      ],
      comboDecks: [
        "banhammer",
        "bastet",
        "binaryflagwar",
        "boltbolt",
        "bonusducks",
        "budgetim",
        "budgetnt",
        "budgetsm",
        "budgetykm",
        "budgetzm",
        "cardsbolt",
        "cryoboy",
        "floss",
        "frozentelimps",
        "gravepiratestache",
        "himpter",
        "igmablobchum",
        "lawnmower2",
        "mechascope",
        "pablosyeezys",
        "portalgun",
        "reversecatster",
        "spacestars",
        "sunbandits",
        "sunlord",
        "tangen",
        "telimps",
        "trickstache",
        "trickmech",
        "uncrackamech",
        "uno",
        "watersports",
        "whalepharaoh",
        "youngeggmartin",
        "youngkenmartin",
        "zmoss",
      ],
      controlDecks: [
        "bonusducks",
        "budgetim",
        "frozentelimps",
        "huntgargs",
        "mechacontrol",
        "mechagold",
        "mechascope",
        "noplayingallowed",
        "sunbandits",
        "uncrackamech",
        "whalepharaoh",
      ],
      midrangeDecks: [
        "22savage",
        "banhammer",
        "bastet",
        "bfmidgargs",
        "binaryflagwar",
        "boltbolt",
        "budgetrb",
        "budgetsb",
        "budgetykm",
        "cryoboy",
        "gargstar22",
        "gomorrah",
        "himpter",
        "igmablobchum",
        "ladytuna",
        "lawnmower2",
        "limerence",
        "luminous",
        "lunchtime",
        "pablosyeezys",
        "piport",
        "portalgun",
        "nohokaistars",
        "slugged",
        "spacestars",
        "sunlord",
        "tangen",
        "telimps",
        "trickstache",
        "uno",
        "watersports",
        "youngkenmartin",
      ],
      tempoDecks: [
        "brady",
        "cardsbolt",
        "conjureleap",
        "lockthebathroom",
        "luminous"
      ],
      allDecks: [
        "22savage",
        "banhammer",
        "bfmidgargs",
        "bastet",
        "binaryflagwar",
        "boltbolt",
        "bonusducks",
        "brady",
        "budgetbf",
        "budgeteb",
        "budgetif",
        "budgetim",
        "budgetnt",
        "budgetpb",
        "budgetrb",
        "budgetsb",
        "budgetsm",
        "budgetykm",
        "budgetzm",
        "cardsbolt",
        "conjureleap",
        "cryoboy",
        "dozzamech",
        "floss",
        "frozentelimps",
        "gargstar22",
        "gomorrah",
        "gravepiratestache",
        "himpter",
        "huntgargs",
        "igmablobchum",
        "ladytuna",
        "lawnmower2",
        "limerence",
        "lockthebathroom",
        "luminous",
        "lunchtime",
        "marxbolt",
        "mechacontrol",
        "mechagold",
        "mechascope",
        "nohokaistars",
        "noplayingallowed",
        "pablosyeezys",
        "piport",
        "reversecatster",
        "schoolyard",
        "seacret",
        "slugged",
        "spacestars",
        "splimps",
        "sunbandits",
        "sunlord",
        "tangen",
        "telimps",
        "trickstache",
        "trickmech",
        "uncrackamech",
        "uno",
        "watersports",
        "whalepharaoh",
        "youngeggmartin",
        "youngkenmartin",
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
    const toBuildPString = buildDeckString(plantDecks.allDecks);
    const toBuildBudgetPString = buildDeckString(plantDecks.budgetDecks);
    const toBuildCompPString = buildDeckString(plantDecks.competitiveDecks);
    const toBuildLadderPString = buildDeckString(plantDecks.ladderDecks);
    const toBuildMemePString = buildDeckString(plantDecks.memeDecks);
    const toBuildAggroPString = buildDeckString(plantDecks.aggroDecks);
    const toBuildComboPString = buildDeckString(plantDecks.comboDecks);
    const toBuildControlPString = buildDeckString(plantDecks.controlDecks);
    const toBuildMidrangePString = buildDeckString(plantDecks.midrangeDecks);
    const toBuildTempoPString = buildDeckString(plantDecks.tempoDecks);
    const toBuildZString = buildDeckString(zombieDecks.allDecks);
    const toBuildBudgetZString = buildDeckString(zombieDecks.budgetDecks);
    const toBuildCompZString = buildDeckString(zombieDecks.competitiveDecks);
    const toBuildLadderZString = buildDeckString(zombieDecks.ladderDecks);
    const toBuildMemeZString = buildDeckString(zombieDecks.memeDecks);
    const toBuildAggroZString = buildDeckString(zombieDecks.aggroDecks);
    const toBuildComboZString = buildDeckString(zombieDecks.comboDecks);
    const toBuildControlZString = buildDeckString(zombieDecks.controlDecks);
    const toBuildMidrangeZString = buildDeckString(zombieDecks.midrangeDecks);
    const toBuildTempoZString = buildDeckString(zombieDecks.tempoDecks);
    /**
     * The createButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
    function createButtons(leftButtonId, rightButtonId) {
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
    const allprow = createButtons("venice", "wr100");
    const wr100 = createButtons("helpallp", "bay");
    const bay = createButtons("winrate100", "bct");
    const bct = createButtons("bayonet", "bcc");
    const bcc = createButtons("budgetct", "bcz");
    const bcz = createButtons("budgetcc", "bgk");
    const bgk = createButtons("budgetcz", "bgs");
    const bgs = createButtons("budgetgk", "bnc");
    const bnc = createButtons("budgetgs", "bro");
    const bro = createButtons("budgetnc", "bsf");
    const bsf = createButtons("budgetro", "bsp");
    const bsp = createButtons("budgetsf", "bwk");
    const bwk = createButtons("budgetsp", "carr");
    const carr = createButtons("budgetwk", "cb");
    const cb = createButtons("carroot", "chemo");
    const chemo = createButtons("cartasbuenas", "cburn");
    const cburn = createButtons("chemotherapy", "dcounter");
    const dcounter = createButtons("cyburn", "eaggro");
    const eaggro = createButtons("dinocounter", "fflare");
    const fflare = createButtons("espressoaggro", "gnuts");
    const gnuts = createButtons("funnyflare", "gseg");
    const gseg = createButtons("goingnuts", "hburn");
    const hburn = createButtons("ginseng", "hmr");
    const hmr = createButtons("healburn", "hotk");
    const hotk = createButtons("healmidrose", "lsnap");
    const lsnap = createButtons("healthotk", "lstars");
    const lstars = createButtons("lasersnap", "lstrike");
    const lstrike = createButtons("leafstars", "lcbd");
    const lcbd = createButtons("leafystrike", "lbait");
    const lbait = createButtons("lifecouldbedream", "neuro");
    const neuro = createButtons("logbait", "nut");
    const nut = createButtons("neurotherapy", "msp");
    const msp = createButtons("logbait", "pts");
    const pts = createButtons("mspotk", "pb");
    const pb = createButtons("pawntrickstab", "plmop");
    const plmop = createButtons("pbeans", "pop");
    const pop = createButtons("plantmop", "psol");
    const psol = createButtons("popsicle", "radio");
    const radio = createButtons("psychosolstice", "recy");
    const recy = createButtons("radiotherapy", "rfl");
    const rfl = createButtons("recycling", "smf");
    const smf = createButtons("reflourished", "stron");
    const stron = createButtons("savagemayflower", "tc");
    const tc = createButtons("startron", "vce");
    const vce = createButtons("toyotacontrolla", "allphelp");
    const budgetprow = createButtons("budgetwk2", "bcc2");
    const bcc2 = createButtons("budgetphelp", "bct2");
    const bct2 = createButtons("budgetcc2", "bcz2");
    const bcz2 = createButtons("budgetct2", "bgk2");
    const bgk2 = createButtons("budgetcz2", "bgs2");
    const bgs2 = createButtons("budgetgk2", "bnc2");
    const bnc2 = createButtons("budgetgs2", "bro2");
    const bro2 = createButtons("budgetnc2", "bsf2");
    const bsf2 = createButtons("budgetro2", "bsp2");
    const bsp2 = createButtons("budgetsf2", "bwk2");
    const bwk2 = createButtons("budgetsp2", "helppbudget");
    const compprow = createButtons("venice2", "cb2");
    const cb2 = createButtons("compphelp", "chemo2");
    const chemo2 = createButtons("cartasbuenas2", "cburn2");
    const cburn2 = createButtons("chemotherapy2", "eaggro2");
    const eaggro2 = createButtons("cyburn2", "hmr2");
    const hmr2 = createButtons("espressoaggro2", "lbait2");
    const lbait2 = createButtons("healmidrose2", "neuro2");
    const neuro2 = createButtons("logbait2", "radio2");
    const radio2 = createButtons("neurotherapy2", "tc2");
    const tc2 = createButtons("radiotherapy2", "vce2");
    const vce2 = createButtons("toyotacontrolla2", "helppcomp");
    const ladderprow = createButtons("pbeans2", "bay2");
    const bay2 = createButtons("helppladder", "carr2");
    const carr2 = createButtons("bayonet2", "dcounter2");
    const dcounter2 = createButtons("carroot2", "gnuts2");
    const gnuts2 = createButtons("dinocounter2", "gseg2");
    const gseg2 = createButtons("goingnuts2", "lstars2");
    const lstars2 = createButtons("ginseng2", "lstrike2");
    const lstrike2 = createButtons("leafstars2", "pts2");
    const pts2 = createButtons("leafystrike2", "pb2");
    const pb2 = createButtons("pawntrickstab2", "ladderphelp");
    const memeprow = createButtons("startron2", "wr1002");
    const wr1002 = createButtons("memephelp", "fflare2");
    const fflare2 = createButtons("winrate1002", "hburn2");
    const hburn2 = createButtons("funnyflare2", "hotk2");
    const hotk2 = createButtons("healburn2", "lsnap2");
    const lsnap2 = createButtons("healthotk2", "lcbd2");
    const lcbd2 = createButtons("lasersnap2", "msp2");
    const msp2 = createButtons("lifecouldbedream2", "nut2");
    const nut2 = createButtons("mspotk2", "plmop2");
    const plmop2 = createButtons("nuttin2", "pop2");
    const pop2 = createButtons("plantmop2", "psol2");
    const psol2 = createButtons("popsicle2", "recy2");
    const recy2 = createButtons("psychosolstice2", "rfl2");
    const rfl2 = createButtons("recycling2", "smf2");
    const smf2 = createButtons("reflourished2", "stron2");
    const stron2 = createButtons("savagemayflower2", "helppmeme");
    const aggroprow = createButtons("pbeans3", "bcc3");
    const bcc3 = createButtons("helppaggro", "bct3");
    const bct3 = createButtons("budgetcc3", "bnc3");
    const bnc3 = createButtons("budgetct3", "bsf3");
    const bsf3 = createButtons("budgetct3", "cb3");
    const cb3 = createButtons("budgetsf3", "eaggro3");
    const eaggro3 = createButtons("cartasbuenas3", "gnuts3");
    const gnuts3 = createButtons("espressoaggro3", "hburn3");
    const lbait3 = createButtons("goingnuts3", "pb3");
    const pb3 = createButtons("logbait3", "aggrophelp");
    const comboprow = createButtons("venice3", "bay3");
    const bay3 = createButtons("helppcombo", "bcc4");
    const bcc4 = createButtons("bayonet3", "bcz3");
    const bcz3 = createButtons("budgetcc4", "carr3");
    const carr3 = createButtons("budgetcz3", "cburn3");
    const cburn3 = createButtons("carroot3", "dcounter3");
    const dcounter3 = createButtons("cyburn3", "fflare3");
    const fflare3 = createButtons("dinocounter3", "gnuts4");
    const gnuts4 = createButtons("funnyflare3", "hburn3");
    const hburn3 = createButtons("goingnuts4", "hotk3");
    const hotk3 = createButtons("healburn3", "lsnap3");
    const lsnap3 = createButtons("healthotk3", "lstars3");
    const lstars3 = createButtons("lasersnap3", "msp3");
    const msp3 = createButtons("leafstars3", "nut3");
    const nut3 = createButtons("mspotk3", "plmop3");
    const plmop3 = createButtons("nuttin3", "psol3");
    const psol3 = createButtons("plantmop3", "rfl3");
    const rfl3 = createButtons("psychosolstice3", "smf3");
    const smf3 = createButtons("reflourished3", "stron3");
    const stron3 = createButtons("savagemayflower3", "vce3");
    const vce3 = createButtons("startron3", "helppcombo");
    const controlprow = createButtons("toyotacontrolla3", "chemo3");
    const chemo3 = createButtons("helppcontrol", "gseg3");
    const gseg3 = createButtons("chemotherapy3", "neuro3");
    const neuro3 = createButtons("ginseng3", "pts3");
    const pts3 = createButtons("neurotherapy3", "pop3");
    const pop3 = createButtons("pawntrickstab3", "radio3");
    const radio3 = createButtons("popsicle3", "tc3");
    const tc3 = createButtons("radiotherapy3", "helpcontrolp");
    const midrangeprow = createButtons("venice4", "bcz4");
    const bcz4 = createButtons("helppmidrange", "bgk3");
    const bgk3 = createButtons("budgetcz4", "bgs3");
    const bgs3 = createButtons("budgetgk3", "bro3");
    const bro3 = createButtons("budgetgs3", "bsp3");
    const bsp3 = createButtons("budgetro3", "bwk3");
    const bwk3 = createButtons("budgetro3", "cburn4");
    const cburn4 = createButtons("budgetwk3", "dcounter4");
    const dcounter4 = createButtons("cyburn4", "fflare4");
    const fflare4 = createButtons("dinocounter4", "hburn4");
    const hburn4 = createButtons("funnyflare4", "hmr3");
    const hmr3 = createButtons("healburn4", "hotk4");
    const hotk4 = createButtons("healmidrose3", "lsnap4");
    const lsnap4 = createButtons("healthotk4", "lstars4");
    const lstars4 = createButtons("lasersnap4", "psol4");
    const psol4 = createButtons("leafstars4", "recy3");
    const recy3 = createButtons("psychosolstice4", "stron4");
    const stron4 = createButtons("recyling3", "vce4");
    const vce4 = createButtons("startron4", "midrangephelp");
    const tempoprow = createButtons("lifecouldbedream3", "wr1003");
    const wr1003 = createButtons("tempophelp", "bay4");
    const bay4 = createButtons("winrate1003", "carr4");
    const carr4 = createButtons("bayonet4", "lstrike3");
    const lstrike3 = createButtons("carroot4", "lcbd3");
    const lcbd3 = createButtons("leafystrike3", "helpptempo");
    const allzrow = createButtons("zmoss", "sav");
    const sav = createButtons("allzhelp", "bhammer");
    const bhammer = createButtons("savage", "bfmg");
    const bfmg = createButtons("banhammer", "bas");
    const bas = createButtons("bfmidgargs", "bfw");
    const bfw = createButtons("bastet", "brad");
    const bbolt = createButtons("binaryflagwar", "bducks");
    const bducks = createButtons("boltbolt", "brad");
    const brad = createButtons("bonusducks", "bbf");
    const bbf = createButtons("brady", "beb");
    const beb = createButtons("budgetbf", "bif");
    const bif = createButtons("budgeteb", "bim");
    const bim = createButtons("budgetif", "bnt");
    const bnt = createButtons("budgetim", "bpb");
    const bpb = createButtons("budgetnt", "brb");
    const brb = createButtons("budgetpb", "bsb");
    const bsb = createButtons("budgetrb", "bsm");
    const bsm = createButtons("budgetsb", "bykm");
    const bykm = createButtons("budgetsm", "bzm");
    const bzm = createButtons("budgetykm", "cbolt");
    const cbolt = createButtons("budgetzm", "cleap");
    const cleap = createButtons("cardsbolt", "cboy");
    const cboy = createButtons("conjureleap", "dmech");
    const dmech = createButtons("cryoboy", "flo");
    const flo = createButtons("dozzamech", "ftimps");
    const ftimps = createButtons("floss", "gstar22");
    const gstar22 = createButtons("frozentelimps", "gom");
    const gom = createButtons("gargstar22", "gps");
    const gps = createButtons("gomorrah", "hter");
    const hter = createButtons("gravepiratestache", "hgargs");
    const hgargs = createButtons("himpter", "igbc");
    const igbc = createButtons("huntgargs", "lime");
    const lime = createButtons("igmablobchum", "lt");
    const lt = createButtons("limerence", "lmower");
    const lmower = createButtons("ladytuns", "ltbr");
    const ltbr = createButtons("lawnmower", "lum");
    const lum = createButtons("lockthebathroom", "ltime");
    const ltime = createButtons("luminous", "mbolt");
    const mbolt = createButtons("lunchtime", "mcon");
    const mcon = createButtons("marxbolt", "mgold");
    const mgold = createButtons("mechacontrol", "mscope");
    const mscope = createButtons("mechagold", "nhks");
    const nhks = createButtons("mechascope", "npa");
    const npa = createButtons("nohokaistars", "pyeeyz");
    const pyeeyz = createButtons("noplayingallowed", "pip");
    const pip = createButtons("pablosyeezys", "pgun");
    const pgun = createButtons("piport", "rcatster");
    const rcatster = createButtons("portalgun", "syard");
    const syard = createButtons("reversecatster", "sea");
    const sea = createButtons("schoolyard", "slug");
    const slug = createButtons("seacret", "stars");
    const stars = createButtons("slugged", "spl");
    const spl = createButtons("spacestars", "sbandits");
    const sbandits = createButtons("splimps", "slord");
    const slord = createButtons("sunbandits", "tan");
    const tan = createButtons("sunlord", "timps");
    const timps = createButtons("tangen", "tstache");
    const tstache = createButtons("telimps", "tmech");
    const tmech = createButtons("trickstache", "umech");
    const umech = createButtons("trickmech", "un");
    const un = createButtons("uncrackamech", "wsports");
    const wsports = createButtons("uno", "wph");
    const wph = createButtons("watersports", "yemartin");
    const yemartin = createButtons("whalepharaoh", "ykmartin");
    const ykmartin = createButtons("youngeggmartin", "zm");
    const zm = createButtons("youngkenmartin", "helpzall");
    const budgetzrow = createButtons("budgetzm2", "bbf2");
    const bbf2 = createButtons("helpbudgetz", "beb2");
    const beb2 = createButtons("budgetbf2", "bif2");
    const bif2 = createButtons("budgeteb2", "bim2");
    const bim2 = createButtons("budgetif2", "bnt2");
    const bnt2 = createButtons("budgetim2", "bpb2");
    const bpb2 = createButtons("budgetnt2", "brb2");
    const brb2 = createButtons("budgetpb2", "bsb2");
    const bsb2 = createButtons("budgetrb2", "bsm2");
    const bsm2 = createButtons("budgetsb2", "bykm2");
    const bykm2 = createButtons("budgetsm2", "bzm2");
    const bzm2 = createButtons("budgetykm2", "helpzbudget");
    const compzrow = createButtons("trickstache2", "bbolt2");
    const bbolt2 = createButtons("helpzcomp", "cbolt2");
    const cbolt2 = createButtons("boltbolt2", "lmower2");
    const lmower2 = createButtons("cardsbolt2", "lime2");
    const lime2 = createButtons("lawnmower2", "ltbr2");
    const ltbr2 = createButtons("limerence2", "pyeeyz2");
    const pyeeyz2 = createButtons("lockthebathroom2", "pip2");
    const pip2 = createButtons("pablosyeezys2", "pgun2");
    const pgun2 = createButtons("piport2", "nhks2");
    const nhks2 = createButtons("portalgun2", "sea2");
    const sea2 = createButtons("nohokaistars2", "slug2");
    const slug2 = createButtons("seacret2", "stars2");
    const stars2 = createButtons("slugged2", "timps2");
    const timps2 = createButtons("spacestars2", "tstache2");
    const tstache2 = createButtons("telimps2", "compzhelp");
    const ladderzrow = createButtons("trickmech2", "bfmg2");
    const bfmg2 = createButtons("helpzladder", "bfw2");
    const bfw2 = createButtons("bfmidgargs2", "brad2");
    const brad2 = createButtons("binaryflagwar2", "cboy2");
    const cboy2 = createButtons("brady2", "gstar222");
    const gstar222 = createButtons("cryoboy2", "gom2");
    const gom2 = createButtons("gargstar222", "gps2");
    const gps2 = createButtons("gomorrah2", "lum2");
    const lum2 = createButtons("gravepiratestache2", "mbolt2");
    const mbolt2 = createButtons("luminous2", "mcon2");
    const mcon2 = createButtons("marxbolt2", "mscope2");
    const mscope2 = createButtons("mechacontrol2", "syard2");
    const syard2 = createButtons("mechascope2", "spl2");
    const spl2 = createButtons("schoolyard2", "tmech2");
    const tmech2 = createButtons("splimps2", "ladderzhelp");
    const memezrow = createButtons("zmoss2", "sav2");
    const sav2 = createButtons("helpzmeme", "bhammer2");
    const bhammer2 = createButtons("savage2", "bas2");
    const bas2 = createButtons("banhammer2", "bducks2");
    const bducks2 = createButtons("bastet2", "cleap2");
    const cleap2 = createButtons("bonusducks2", "dmech2");
    const dmech2 = createButtons("conjureleap2", "flo2");
    const flo2 = createButtons("dozzamech2", "ftimps2");
    const ftimps2 = createButtons("floss2", "hter2");
    const hter2 = createButtons("frozentelimps2", "hgargs2");
    const hgargs2 = createButtons("himpter2", "igbc2");
    const igbc2 = createButtons("huntgargs2", "lt2");
    const lt2 = createButtons("igmablobchum2", "ltime2");
    const ltime2 = createButtons("ladytuna2", "mgold2");
    const mgold2 = createButtons("lunchtime2", "npa2");
    const npa2 = createButtons("medcha", "rcatster2");
    const rcatster2 = createButtons("noplayingallowed2", "sbandits2");
    const sbandits2 = createButtons("reversecatster2", "slord2");
    const slord2 = createButtons("sunbandits2", "tan2");
    const tan2 = createButtons("sunlord2", "umech2");
    const umech2 = createButtons("tangen2", "un2");
    const un2 = createButtons("uncrackamech2", "wsports2");
    const wsports2 = createButtons("uno2", "wph2");
    const wph2 = createButtons("watersports2", "yemartin2");
    const yemartin2 = createButtons("whalepharaoh2", "ykmartin2");
    const ykmartin2 = createButtons("youngeggmartin2", "zm2");
    const zm2 = createButtons("youngkenmartin2", "memezhelp");
    const aggrozrow = createButtons("trickmech3", "bbf3");
    const bbf3 = createButtons("helpzaggro", "beb3");
    const beb3 = createButtons("budgetbf3", "bif3");
    const bif3 = createButtons("budgeteb3", "bnt3");
    const bnt3 = createButtons("budgetif3", "bpb3");
    const bpb3 = createButtons("budgetnt3", "bsm3");
    const bsm3 = createButtons("budgetpb3", "bzm3");
    const bzm3 = createButtons("budgetsm3", "dmech3");
    const dmech3 = createButtons("budgetzm3", "gps3");
    const gps3 = createButtons("dozzamech3", "mbolt3");
    const mbolt3 = createButtons("gravepiratestache3", "syard3");
    const syard3 = createButtons("marxbolt3", "sea3");
    const sea3 = createButtons("schoolyard3", "spl3");
    const spl3 = createButtons("seacret3", "tmech3");
    const tmech3 = createButtons("splimps3", "aggrozhelp");
    const combozrow = createButtons("zmoss3", "sav3");
    const sav3 = createButtons("helpzcombo", "bhammer3");
    const bhammer3 = createButtons("savage3", "bas3");
    const bas3 = createButtons("banhammer3", "bfw3");
    const bfw3 = createButtons("bastet3", "bbolt3");
    const bbolt3 = createButtons("binaryflagwar3", "bducks3");
    const bducks3 = createButtons("boltbolt3", "bim3");
    const bim3 = createButtons("bonusducks3", "bnt4");
    const bnt4 = createButtons("budgetim3", "bsm4");
    const bsm4 = createButtons("budgetnt4", "bykm3");
    const bykm3 = createButtons("budgetsm4", "bzm4");
    const bzm4 = createButtons("budgetykm3", "cbolt3");
    const cbolt3 = createButtons("budgetzm3", "cboy3");
    const cboy3 = createButtons("cardsbolt3", "flo3");
    const flo3 = createButtons("cryoboy3", "ftimps3");
    const ftimps3 = createButtons("floss3", "gps4");
    const gps4 = createButtons("frozentelimps3", "hter3");
    const hter3 = createButtons("gravepiratestache4", "igbc3");
    const igbc3 = createButtons("himpter3", "lmower3");
    const lmower3 = createButtons("igmablobchum3", "mscope3");
    const mscope3 = createButtons("lawnmower3", "pyeeyz3");
    const pyeeyz3 = createButtons("mechascope3", "pgun3");
    const pgun3 = createButtons("pablosyeezys3", "rcatster3");
    const rcatster3 = createButtons("portalgun3", "stars3");
    const stars3 = createButtons("reversecatster3", "sbandits3");
    const sbandits3 = createButtons("spacestars3", "slord3");
    const slord3 = createButtons("sunbandits3", "tan3");
    const tan3 = createButtons("sunlord3", "timps3");
    const timps3 = createButtons("tangen3", "tstache3");
    const tstache3 = createButtons("telimps3", "tmech4");
    const tmech4 = createButtons("trickstache3", "umech3");
    const umech3 = createButtons("trickmech4", "un3");
    const un3 = createButtons("uncrackamech3", "wsports3");
    const wsports3 = createButtons("uno3", "wph3");
    const wph3 = createButtons("watersports3", "yemartin3");
    const yemartin3 = createButtons("whalepharaoh3", "ykmartin3");
    const ykmartin3 = createButtons("youngeggmartin3", "zm3");
    const zm3 = createButtons("youngkenmartin3", "combozhelp");
    const controlzrow = createButtons("whalepharaoh3", "bducks4");
    const bducks4 = createButtons("helpzcontrol", "bim4");
    const bim4 = createButtons("bonusducks4", "ftimps4");
    const ftimps4 = createButtons("budgetim4", "hgargs3");
    const hgargs3 = createButtons("frozentelimps4", "mcon3");
    const mcon3 = createButtons("huntgargs3", "mgold3");
    const mgold3 = createButtons("mechacontrol3", "mscope4");
    const mscope4 = createButtons("mechagold3", "npa3");
    const npa3 = createButtons("mechascope4", "sbandits4");
    const sbandits4 = createButtons("noplayingallowed3", "umech4");
    const umech4 = createButtons("sunbandits4", "wph4");
    const wph4 = createButtons("uncrackamech4", "controlzhelp");
    const midrangezrow = createButtons("youngkenmartin4", "sav4");
    const sav4 = createButtons("helpzmid", "bhammer4");
    const bhammer4 = createButtons("savage4", "bas4");
    const bas4 = createButtons("banhammer4", "bfmg3");
    const bfmg3 = createButtons("bastet4", "bfw4");
    const bfw4 = createButtons("bfmidgargs3", "brb3");
    const brb3 = createButtons("binaryflagwar4", "bsb3");
    const bsb3 = createButtons("budgetrb3", "bbolt4");
    const bbolt4 = createButtons("budgetsb3", "bykm4");
    const bykm4 = createButtons("boltbolt4", "cboy4");
    const cboy4 = createButtons("budgetykm4", "gstar223");
    const gstar223 = createButtons("cryoboy4", "gom3");
    const gom3 = createButtons("gargstar223", "hter4");
    const hter4 = createButtons("gomorrah3", "igbc4");
    const igbc4 = createButtons("himpter4", "lmower4");
    const lmower4 = createButtons("igmablobchum4", "lime3");
    const lime3 = createButtons("lawnmower4", "lt3");
    const lt3 = createButtons("limerence3", "lum3");
    const lum3 = createButtons("ladytuna3", "ltime3");
    const ltime3 = createButtons("luminous3", "pyeeyz4");
    const pyeeyz4 = createButtons("lunchtime3", "pip3");
    const pip3 = createButtons("pablosyeezys4", "pgun4");
    const pgun4 = createButtons("piport3", "nhks3");
    const nhks3 = createButtons("portalgun4", "slug3");
    const slug3 = createButtons("nohokaistars3", "stars4");
    const stars4 = createButtons("slugged3", "slord4");
    const slord4 = createButtons("spacestars4", "tan4");
    const tan4 = createButtons("sunlord4", "timps4");
    const timps4 = createButtons("tangen4", "tstache4");
    const tstache4 = createButtons("telimps4", "un4");
    const un4 = createButtons("trickstache4", "wsports4");
    const wsports4 = createButtons("uno4", "ykmartin4");
    const ykmartin4 = createButtons("watersports4", "midzhelp");
    const tempozrow = createButtons("luminous4", "brad3");
    const brad3 = createButtons("helpztempo", "cbolt4");
    const cbolt4 = createButtons("brady3", "cleap3");
    const cleap3 = createButtons("cardsbolt4", "ltbr3");
    const ltbr3 = createButtons("conjureleap3", "lum4");
    const lum4 = createButtons("lockthebathroom3", "tempozhelp");
    const Ccommands = Array.from(client.commands.values());
    const commands = Ccommands.filter((command) => {
      if (
        command.category != "Miscellaneous" &&
        command.category != "DeckBuilders" &&
        command.category != "Zombie Cards" &&
        command.category != "Tricks Phase" &&
        command.category != "Plant Cards" &&
        !command.name.includes("help")
      ) {
        return command.name;
      }
    });
    const embed = new EmbedBuilder()
      .setTitle("Tbot Database")
      .setDescription(
        `Please select option from select menus below to access the database
Note: the decks are in alphabetical order not by hero and there are ${commands.length} commands in the database with ${plantDecks.allDecks.length} plant decks and ${zombieDecks.allDecks.length} zombie decks`
      )
      .setColor("Random")
      .addFields(
        {
          name: "Budget Decks",
          value:
            "Good for when you don't want to spend money on the game and don't have a lot of sparks or a lot of the rarest cards in the game, but aren't as good as the top decks at the highest level of the game.",
        },
        {
          name: "Competitive Decks",
          value: "Some of the best decks in the game.",
        },
        {
          name: "Ladder Decks",
          value:
            "Useful for Ranked Online Multiplayer, but crumbles into more competitive decks.",
        },
        {
          name: "Meme Decks",
          value:
            "Not designed to be competitive, and never was, even during the deck building process. Was simply made for weird/fun combos and wasn't made with any competitive meta in mind.",
        }
      )
      .setImage(
        "https://media.discordapp.net/attachments/1044626284346605588/1356022131225268255/allheroes.jpg?ex=67eb0d85&is=67e9bc05&hm=6b685aabe10a85ef7c80cf09bced40bf6b671fda726522be203c7d2372203344&=&format=webp&width=1872&height=758"
      )
      .setFooter({ text: "Credit to Iceiboi for deck type explainations" });
    const allpdecksEmbed = createPlantHelpEmbed(
      "All Plant Decks",
      `My plant decks are ${toBuildPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the plant decks or ping tbot with one of the decknames above to see a specific plant deck
Note: there are ${plantDecks.allDecks.length} plant decks in the database`
    );
    const budgetpdecksEmbed = createPlantHelpEmbed(
      "Budget Plant Decks",
      `My budget plant decks are ${toBuildBudgetPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the budget plant decks or ping tbot with one of the decknames above to see a specific budget plant deck
Note: there are ${plantDecks.budgetDecks.length} budget plant decks in the database`
    );
    const comppdecksEmbed = createPlantHelpEmbed(
      "Competitive Plant Decks",
      `My competitive plant decks are ${toBuildCompPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the competitive plant decks or ping tbot with one of the decknames above to see a specific competitive plant deck
Note: there are ${plantDecks.competitiveDecks.length} competitive plant decks in the database`
    );
    const ladderpdecksEmbed = createPlantHelpEmbed(
      "Ladder Plant Decks",
      `My ladder plant decks are ${toBuildLadderPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the ladder plant decks or ping tbot with one of the decknames above to see a specific ladder plant deck
Note: there are ${plantDecks.ladderDecks.length} ladder plant decks in the database`
    );
    const memepdecksEmbed = createPlantHelpEmbed(
      "Meme Plant Decks",
      `My meme plant decks are ${toBuildMemePString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the meme plant decks or ping tbot with one of the decknames above to see a specific meme plant deck
Note: there are ${plantDecks.memeDecks.length} meme plant decks in the database`
    );
    const aggropdecksEmbed = createPlantHelpEmbed(
      "Aggro Plant Decks",
      `My aggro plant decks are ${toBuildAggroPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the aggro plant decks or ping tbot with one of the decknames above to see a specific aggro plant deck
Note: there are ${plantDecks.aggroDecks.length} aggro plant decks in the database`
    );
    const combopdecksEmbed = createPlantHelpEmbed(
      "Combo Plant Decks",
      `My combo plant decks are ${toBuildComboPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the combo plant decks or ping tbot with one of the decknames above to see a specific combo plant deck
Note: there are ${plantDecks.comboDecks.length} combo plant decks in the database`
    );
    const controlpdecksEmbed = createPlantHelpEmbed(
      "Control Plant Decks",
      `My control plant decks are ${toBuildControlPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the control plant decks or use the commands above to see a specific control plant deck
Note: there are ${plantDecks.controlDecks.length} control plant decks in the database`
    );
    const midrangepdecksEmbed = createPlantHelpEmbed(
      "Midrange Plant Decks",
      `My midrange plant decks are ${toBuildMidrangePString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the midrange plant decks or use the commands above to see a specific midrange plant deck
Note: there are ${plantDecks.midrangeDecks.length} midrange plant decks in the database`
    );
    const tempopdecksEmbed = createPlantHelpEmbed(
      "Tempo Plant Decks",
      `My tempo plant decks are ${toBuildTempoPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the tempo plant decks or use the commands above to see a specific tempo plant deck
Note: there are ${plantDecks.tempoDecks.length} tempo plant decks in the database`
    );
    const allzdecksEmbed = createZombieHelpEmbed(
      "All Zombie Decks",
      `My zombie decks are ${toBuildZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the zombie decks or use the commands above to see a specific zombie deck(PS: ping Tbot with deckname to see specific decks!)
Note: there are ${zombieDecks.allDecks.length} zombie decks in the database`
    );
    const budgetzdecksEmbed = createZombieHelpEmbed(
      "Budget Zombie Decks",
      `My budget zombie decks are ${toBuildBudgetZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the budget zombie decks or use the commands above to see a specific budget zombie deck
Note: there are ${zombieDecks.budgetDecks.length} budget zombie decks in the database`
    );
    const compzdecksEmbed = createZombieHelpEmbed(
      "Competitive Zombie Decks",
      `My competitive zombie decks are ${toBuildCompZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the competitive zombie decks or use the commands above to see a specific competitive zombie deck
Note: there are ${zombieDecks.competitiveDecks.length} competitive zombie decks in the database`
    );
    const ladderzdecksEmbed = createZombieHelpEmbed(
      "Ladder Zombie Decks",
      `My ladder zombie decks are ${toBuildLadderZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the ladder zombie decks or use the commands above to see a specific ladder zombie deck
Note: there are ${zombieDecks.ladderDecks.length} ladder zombie decks in the database`
    );
    const memezdecksEmbed = createZombieHelpEmbed(
      "Meme Zombie Decks",
      `My meme zombie decks are ${toBuildMemeZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the meme zombie decks or use the commands above to see a specific meme zombie deck
Note: there are ${zombieDecks.memeDecks.length} meme zombie decks in the database`
    );
    const aggrozdecksEmbed = createZombieHelpEmbed(
      "Aggro Zombie Decks",
      `My aggro zombie decks are ${toBuildAggroZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the aggro zombie decks or use the commands above to see a specific aggro zombie deck
Note: there are ${zombieDecks.aggroDecks.length} aggro zombie decks in the database`
    );
    const combozdecksEmbed = createZombieHelpEmbed(
      "Combo Zombie Decks",
      `My combo zombie decks are ${toBuildComboZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the combo zombie decks or use the commands above to see a specific combo zombie deck
Note: there are ${zombieDecks.comboDecks.length} combo zombie decks in the database`
    );
    const controlzdecksEmbed = createZombieHelpEmbed(
      "Control Zombie Decks",
      `My control zombie decks are ${toBuildControlZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the control zombie decks or use the commands above to see a specific control zombie deck
Note: there are ${zombieDecks.controlDecks.length} control zombie decks in the database`
    );
    const midrangezdecksEmbed = createZombieHelpEmbed(
      "Midrange Zombie Decks",
      `My midrange zombie decks are ${toBuildMidrangeZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the midrange zombie decks or use the commands above to see a specific midrange zombie deck
Note: there are ${zombieDecks.midrangeDecks.length} midrange zombie decks in the database`
    );
    const tempozdecksEmbed = createZombieHelpEmbed(
      "Tempo Zombie Decks",
      `My tempo zombie decks are ${toBuildTempoZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the tempo zombie decks or use the commands above to see a specific tempo zombie deck
Note: there are ${zombieDecks.tempoDecks.length} tempo zombie decks in the database`
    );
    const m = await message.channel.send({
      embeds: [embed],
      components: [selectrow],
    });
    const [result] = await db.query(`select * from bcdecks bc
		inner join bfdecks bf
		on (bc.deckinfo = bf.deckinfo)
		inner join ccdecks cc 
		on (bc.deckinfo = cc.deckinfo)
		inner join ctdecks ct 
		on (bc.deckinfo = ct.deckinfo)
		inner join czdecks cz
		on (bc.deckinfo = cz.deckinfo)
		inner join ebdecks eb 
		on (bc.deckinfo = eb.deckinfo)
		inner join gkdecks gk 
		on (bc.deckinfo = gk.deckinfo)
		inner join gsdecks gs 
		on (bc.deckinfo = gs.deckinfo)
		inner join hgdecks hg
		on (bc.deckinfo = hg.deckinfo)
		inner join ifdecks fi 
		on (bc.deckinfo = fi.deckinfo)
		inner join imdecks im 
		on (bc.deckinfo = im.deckinfo)
		inner join ncdecks nc 
		on (bc.deckinfo = nc.deckinfo)
		inner join ntdecks nt 
		on (bc.deckinfo = nt.deckinfo)
		inner join pbdecks pb 
		on (bc.deckinfo = pb.deckinfo)
		inner join rbdecks rb 
		on (bc.deckinfo = rb.deckinfo)
		inner join rodecks ro 
		on (bc.deckinfo = ro.deckinfo)
		inner join sbdecks sb 
		on (bc.deckinfo = sb.deckinfo)
		inner join sfdecks sf 
		on (bc.deckinfo = sf.deckinfo)
		inner join smdecks sm 
		on (bc.deckinfo = sm.deckinfo)
		inner join spdecks sp 
		on (bc.deckinfo = sp.deckinfo)
		inner join wkdecks wk 
		on (bc.deckinfo = wk.deckinfo)
		inner join zmdecks zm
		on (bc.deckinfo = zm.deckinfo)`);
    /**
     * The CreatePlantDeckEmbed function creates an embed for a plant deck.
     * @param {*} result - The result object containing deck information.
     * @param {string} deckName - The name of the deck to create an embed for.
     * @returns {EmbedBuilder} - The created embed for the plant deck.
     */
    function createPlantDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
          { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
          { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
        )
        .setColor("Green");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const bayonet = createPlantDeckEmbed(result, "bayonet");
    const carroot = createPlantDeckEmbed(result, "carroot");
    const neurotherapy = createPlantDeckEmbed(result, "shamcontrol");
    const budgetct = createPlantDeckEmbed(result, "budgetct");
    const goingnuts = createPlantDeckEmbed(result, "going3nuts");
    const startron = createPlantDeckEmbed(result, "startron");
    const budgetcc = createPlantDeckEmbed(result, "budgetcc");
    const lifecouldbedream = createPlantDeckEmbed(result, "lcbd");
    const logbait = createPlantDeckEmbed(result, "logbait");
    const mspotk = createPlantDeckEmbed(result, "mspotk");
    const dinocounter = createPlantDeckEmbed(result, "dinocounter");
    const plantmop = createPlantDeckEmbed(result, "plantmop");
    const reflourished = createPlantDeckEmbed(result, "reflourished");
    const venice = createPlantDeckEmbed(result, "apotk");
    const budgetcz = createPlantDeckEmbed(result, "budgetcz");
    const lasersnap = createPlantDeckEmbed(result, "lasersnap");
    const budgetgk = createPlantDeckEmbed(result, "budgetgk");
    const ginseng = createPlantDeckEmbed(result, "ginseng");
    const healthotk = createPlantDeckEmbed(result, "healthotk");
    const pawntrickstab = createPlantDeckEmbed(result, "pawntrickstab");
    const winrate100 = createPlantDeckEmbed(result, "wr100");
    const cartasbuenas= createPlantDeckEmbed(result, "abeans");
    const budgetgs = createPlantDeckEmbed(result, "budgetgs");
    const pbeans = createPlantDeckEmbed(result, "pbeans");
    const savagemayflower = createPlantDeckEmbed(result, "savagemayflower");
    const leafstars= createPlantDeckEmbed(result, "sovietonion");
    const budgetnc = createPlantDeckEmbed(result, "budgetnc");
    const espressoaggro = createPlantDeckEmbed(result, "espressoaggro");
    const cyburn = createPlantDeckEmbed(result, "cyburn");
    const toyotacontrolla = createPlantDeckEmbed(result, "toyotacontrolla");
    const budgetro = createPlantDeckEmbed(result, "budgetro");
    const healmidrose = createPlantDeckEmbed(result, "hmr");
    const budgetsf = createPlantDeckEmbed(result, "budgetswarmsf");
    const recycling = createPlantDeckEmbed(result, "recycling");
    const funnyflare = createPlantDeckEmbed(result, "funnyflare");
    const healburn = createPlantDeckEmbed(result, "healburn");
    const psychosolstice = createPlantDeckEmbed(result, "psychosolstice");
    const budgetsp = createPlantDeckEmbed(result, "budgetburstsp");
    const nuttin = createPlantDeckEmbed(result, "nutting");
    const radiotherapy = createPlantDeckEmbed(result, "radiotherapy");
    const popsicle = createPlantDeckEmbed(result, "popsicle");
    const leafystrike = createPlantDeckEmbed(result, "leafystrike");
    const budgetwk = createPlantDeckEmbed(result, "budgetwkmidheal");
    const chemotherapy = createPlantDeckEmbed(result, "chemotherapy");
    /**
     * The CreateZombieDeckEmbed function creates an embed for a zombie deck.
     * @param {*} result - The result object containing deck information.
     * @param {string} deckName - The name of the deck to create an embed for.
     * @returns {EmbedBuilder} - The created embed for the zombie deck.
     */
    function createZombieDeckEmbed(result, deckName) {
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
    const bfmidgargs = createZombieDeckEmbed(result, "bfmidgargs");
    const budgetbf = createZombieDeckEmbed(result, "budgetbf");
    const himps = createZombieDeckEmbed(result, "himps");
    const lockthebathroom = createZombieDeckEmbed(result, "lockin");
    const lunchtime = createZombieDeckEmbed(result, "midpets");
    const banhammer = createZombieDeckEmbed(result, "racism");
    const watersports = createZombieDeckEmbed(result, "watersports");
    const budgeteb = createZombieDeckEmbed(result, "budgetburn");
    const gargstar22 = createZombieDeckEmbed(result, "gargstar22");
    const huntgargs = createZombieDeckEmbed(result, "huntgargs");
    const noplayingallowed = createZombieDeckEmbed(result, "noplayingallowed");
    const seacret = createZombieDeckEmbed(result, "seacret");
    const budgetsb = createZombieDeckEmbed(result, "budgetsb");
    const budgetykm = createZombieDeckEmbed(result, "budgetykm");
    const conjureleap = createZombieDeckEmbed(result, "conjureleap");
    const cryoboy = createZombieDeckEmbed(result, "cyroboy");
    const frozentelimps = createZombieDeckEmbed(result, "frozentelimps");
    const gravepiratestache = createZombieDeckEmbed(result, "gps");
    const telimps = createZombieDeckEmbed(result, "telimps");
    const youngkenmartin = createZombieDeckEmbed(result, "ykm");
    const budgetif = createZombieDeckEmbed(result, "budgetif");
    const nohokaistars = createZombieDeckEmbed(result, "nohokaistars");
    const spacestars = createZombieDeckEmbed(result, "spacestars");
    const splimps = createZombieDeckEmbed(result, "splimps");
    const uno = createZombieDeckEmbed(result, "uno");
    const savage22 = createZombieDeckEmbed(result, "savage22");
    const bastet = createZombieDeckEmbed(result, "bastet");
    const budgetim = createZombieDeckEmbed(result, "budgetim");
    const mechascope = createZombieDeckEmbed(result, "otkmecha");
    const lawnmower = createZombieDeckEmbed(result, "lawnmower");
    const portalgun = createZombieDeckEmbed(result, "portalgun");
    const budgetnt = createZombieDeckEmbed(result, "budgetnt");
    const floss = createZombieDeckEmbed(result, "floss");
    const gomorrah = createZombieDeckEmbed(result, "gomorrah");
    const piport = createZombieDeckEmbed(result, "piport");
    const slugged = createZombieDeckEmbed(result, "icebox");
    const ladytuna = createZombieDeckEmbed(result, "ladytuna");
    const schoolyard = createZombieDeckEmbed(result, "schoolyard");
    const sunlord = createZombieDeckEmbed(result, "wimps");
    const bonusducks = createZombieDeckEmbed(result, "bonusducks");
    const budgetpb = createZombieDeckEmbed(result, "budgetpb");
    const trickstache = createZombieDeckEmbed(result, "trickstache");
    const youngeggmartin = createZombieDeckEmbed(result, "youngeggmartin");
    const boltbolt = createZombieDeckEmbed(result, "boltbolt");
    const budgetrb = createZombieDeckEmbed(result, "budgetrb");
    const luminous = createZombieDeckEmbed(result, "luminous");
    const igmablobchum = createZombieDeckEmbed(result, "igmablobchum");
    const marxbolt = createZombieDeckEmbed(result, "marxbolt");
    const mechacontrol = createZombieDeckEmbed(result, "mechacontrol");
    const cardsbolt = createZombieDeckEmbed(result, "poggerrazzi");
    const sunbandits = createZombieDeckEmbed(result, "sunbandits");
    const budgetsm = createZombieDeckEmbed(result, "budgetsm");
    const pablosyeezys = createZombieDeckEmbed(result, "pablosyeezys");
    const whalepharaoh = createZombieDeckEmbed(result, "whalepharaoh");
    const binaryflagwar = createZombieDeckEmbed(result, "binaryflagwar");
    const brady = createZombieDeckEmbed(result, "brady");
    const budgetzm = createZombieDeckEmbed(result, "budgetzm");
    const mechagold = createZombieDeckEmbed(result, "mechagold");
    const dozzamech = createZombieDeckEmbed(result, "dozzamech");
    const uncrackamech = createZombieDeckEmbed(result, "feastmech");
    const reversecatster = createZombieDeckEmbed(result, "reversecatster");
    const trickmech = createZombieDeckEmbed(result, "trickmech");
    const zmoss = createZombieDeckEmbed(result, "zmoss");
    const limerence = createZombieDeckEmbed(result, "limerence");
    const tangen = createZombieDeckEmbed(result, "tangen");
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i - The interaction object
     */
    async function handleSelectMenu(i) {
      const selectMenuActions = {
        budgetpdecks: { embed: budgetpdecksEmbed, component: budgetprow },
        comppdecks: { embed: comppdecksEmbed, component: compprow },
        ladderpdecks: { embed: ladderpdecksEmbed, component: ladderprow },
        memepdecks: { embed: memepdecksEmbed, component: memeprow },
        aggropdecks: { embed: aggropdecksEmbed, component: aggroprow },
        combopdecks: { embed: combopdecksEmbed, component: comboprow },
        controlpdecks: { embed: controlpdecksEmbed, component: controlprow },
        midrangepdecks: { embed: midrangepdecksEmbed, component: midrangeprow },
        tempopdecks: { embed: tempopdecksEmbed, component: tempoprow },
        budgetzdecks: { embed: budgetzdecksEmbed, component: budgetzrow },
        compzdecks: { embed: compzdecksEmbed, component: compzrow },
        ladderzdecks: { embed: ladderzdecksEmbed, component: ladderzrow },
        memezdecks: { embed: memezdecksEmbed, component: memezrow },
        aggrozdecks: { embed: aggrozdecksEmbed, component: aggrozrow },
        combozdecks: { embed: combozdecksEmbed, component: combozrow },
        controlzdecks: { embed: controlzdecksEmbed, component: controlzrow },
        midrangezdecks: { embed: midrangezdecksEmbed, component: midrangezrow },
        tempozdecks: { embed: tempozdecksEmbed, component: tempozrow },
        allpdecks: { embed: allpdecksEmbed, component: allprow },
        allzdecks: { embed: allzdecksEmbed, component: allzrow },
      };
      const action = selectMenuActions[i.values[0]];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid selection",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helppbudget: { embed: budgetpdecksEmbed, component: budgetprow },
        budgetphelp: { embed: budgetpdecksEmbed, component: budgetprow },
        helppcomp: { embed: comppdecksEmbed, component: compprow },
        compphelp: { embed: comppdecksEmbed, component: compprow },
        helppladder: { embed: ladderpdecksEmbed, component: ladderprow },
        ladderphelp: { embed: ladderpdecksEmbed, component: ladderprow },
        helppmeme: { embed: memepdecksEmbed, component: memeprow },
        memephelp: { embed: memepdecksEmbed, component: memeprow },
        helppaggro: { embed: aggropdecksEmbed, component: aggroprow },
        aggrophelp: { embed: aggropdecksEmbed, component: aggroprow },
        helppcombo: { embed: combopdecksEmbed, component: comboprow },
        combophelp: { embed: combopdecksEmbed, component: comboprow },
        helppcontrol: { embed: controlpdecksEmbed, component: controlprow },
        controlphelp: { embed: controlpdecksEmbed, component: controlprow },
        helppmidrange: { embed: midrangepdecksEmbed, component: midrangeprow },
        midrangephelp: { embed: midrangepdecksEmbed, component: midrangeprow },
        helpptempo: { embed: tempopdecksEmbed, component: tempoprow },
        tempophelp: { embed: tempopdecksEmbed, component: tempoprow },
        helpzbudget: { embed: budgetzdecksEmbed, component: budgetzrow },
        helpbudgetz: { embed: budgetzdecksEmbed, component: budgetzrow },
        helpzcomp: { embed: compzdecksEmbed, component: compzrow },
        compzhelp: { embed: compzdecksEmbed, component: compzrow },
        helpzladder: { embed: ladderzdecksEmbed, component: ladderzrow },
        ladderzhelp: { embed: ladderzdecksEmbed, component: ladderzrow },
        helpzmeme: { embed: memezdecksEmbed, component: memezrow },
        memezhelp: { embed: memezdecksEmbed, component: memezrow },
        helpzaggro: { embed: aggrozdecksEmbed, component: aggrozrow },
        aggrozhelp: { embed: aggrozdecksEmbed, component: aggrozrow },
        helpzcombo: { embed: combozdecksEmbed, component: combozrow },
        combozhelp: { embed: combozdecksEmbed, component: combozrow },
        helpzcontrol: { embed: controlzdecksEmbed, component: controlzrow },
        controlzhelp: { embed: controlzdecksEmbed, component: controlzrow },
        helpzmid: { embed: midrangezdecksEmbed, component: midrangezrow },
        midzhelp: { embed: midrangezdecksEmbed, component: midrangezrow },
        helpztempo: { embed: tempozdecksEmbed, component: tempozrow },
        tempozhelp: { embed: tempozdecksEmbed, component: tempozrow },
        helpallp: { embed: allpdecksEmbed, component: allprow },
        allphelp: { embed: allpdecksEmbed, component: allprow },
        helpzall: { embed: allzdecksEmbed, component: allzrow },
        allzhelp: { embed: allzdecksEmbed, component: allzrow },
        wr100: { embed: winrate100, component: wr100 },
        winrate100: { embed: winrate100, component: wr100 },
        wr1002: { embed: winrate100, component: wr1002 },
        winrate1002: { embed: winrate100, component: wr1002 },
        wr1003: { embed: winrate100, component: wr1003 },
        winrate1003: { embed: winrate100, component: wr1003 },
        cb: { embed: cartasbuenas, component: cb },
        cartasbuenas: { embed: cartasbuenas, component: cb },
        cb2: { embed: cartasbuenas, component: cb2 },
        cartasbuenas2: { embed: cartasbuenas, component: cb2 },
        cb3: { embed: cartasbuenas, component: cb3 },
        cartasbuenas3: { embed: cartasbuenas, component: cb3 },
        vce: { embed: venice, component: vce },
        venice: { embed: venice, component: vce },
        vce2: { embed: venice, component: vce2 },
        venice2: { embed: venice, component: vce2 },
        vce3: { embed: venice, component: vce3 },
        venice3: { embed: venice, component: vce3 },
        vce4: { embed: venice, component: vce4 },
        venice4: { embed: venice, component: vce4 },
        bct: { embed: budgetct, component: bct },
        budgetct: { embed: budgetct, component: bct },
        bct2: { embed: budgetct, component: bct2 },
        budgetct2: { embed: budgetct, component: bct2 },
        bct3: { embed: budgetct, component: bct3 },
        budgetct3: { embed: budgetct, component: bct3 },
        bcc: { embed: budgetcc, component: bcc },
        budgetcc: { embed: budgetcc, component: bcc },
        bcc2: { embed: budgetcc, component: bcc2 },
        budgetcc2: { embed: budgetcc, component: bcc2 },
        bcc3: { embed: budgetcc, component: bcc3 },
        budgetcc3: { embed: budgetcc, component: bcc3 },
        bcc4: { embed: budgetcc, component: bcc4 },
        budgetcc4: { embed: budgetcc, component: bcc4 },
        bcz: { embed: budgetcz, component: bcz },
        budgetcz: { embed: budgetcz, component: bcz },
        bcz2: { embed: budgetcz, component: bcz2 },
        budgetcz2: { embed: budgetcz, component: bcz2 },
        bcz3: { embed: budgetcz, component: bcz3 },
        budgetcz3: { embed: budgetcz, component: bcz3 },
        bcz4: { embed: budgetcz, component: bcz4 },
        budgetcz4: { embed: budgetcz, component: bcz4 },
        bgk: { embed: budgetgk, component: bgk },
        budgetgk: { embed: budgetgk, component: bgk },
        bgk2: { embed: budgetgk, component: bgk2 },
        budgetgk2: { embed: budgetgk, component: bgk2 },
        bgk3: { embed: budgetgk, component: bgk3 },
        budgetgk3: { embed: budgetgk, component: bgk3 },
        bgs: { embed: budgetgs, component: bgs },
        budgetgs: { embed: budgetgs, component: bgs },
        bgs2: { embed: budgetgs, component: bgs2 },
        budgetgs2: { embed: budgetgs, component: bgs2 },
        bgs3: { embed: budgetgs, component: bgs3 },
        budgetgs3: { embed: budgetgs, component: bgs3 },
        bnc: { embed: budgetnc, component: bnc },
        budgetnc: { embed: budgetnc, component: bnc },
        bnc2: { embed: budgetnc, component: bnc2 },
        budgetnc2: { embed: budgetnc, component: bnc2 },
        bnc3: { embed: budgetnc, component: bnc3 },
        budgetnc3: { embed: budgetnc, component: bnc3 },
        bro: { embed: budgetro, component: bro },
        budgetro: { embed: budgetro, component: bro },
        bro2: { embed: budgetro, component: bro2 },
        budgetro2: { embed: budgetro, component: bro2 },
        bro3: { embed: budgetro, component: bro3 },
        budgetro3: { embed: budgetro, component: bro3 },
        bsf: { embed: budgetsf, component: bsf },
        budgetsf: { embed: budgetsf, component: bsf },
        bsf2: { embed: budgetsf, component: bsf2 },
        budgetsf2: { embed: budgetsf, component: bsf2 },
        bsf3: { embed: budgetsf, component: bsf3 },
        budgetsf3: { embed: budgetsf, component: bsf3 },
        bsp: { embed: budgetsp, component: bsp },
        budgetsp: { embed: budgetsp, component: bsp },
        bsp2: { embed: budgetsp, component: bsp2 },
        budgetsp2: { embed: budgetsp, component: bsp2 },
        bsp3: { embed: budgetsp, component: bsp3 },
        budgetsp3: { embed: budgetsp, component: bsp3 },
        bwk: { embed: budgetwk, component: bwk },
        budgetwk: { embed: budgetwk, component: bwk },
        bwk2: { embed: budgetwk, component: bwk2 },
        budgetwk2: { embed: budgetwk, component: bwk2 },
        bwk3: { embed: budgetwk, component: bwk3 },
        budgetwk3: { embed: budgetwk, component: bwk3 },
        chemo: { embed: chemotherapy, component: chemo },
        chemotherapy: { embed: chemotherapy, component: chemo },
        chemo2: { embed: chemotherapy, component: chemo2 },
        chemotherapy2: { embed: chemotherapy, component: chemo2 },
        chemo3: { embed: chemotherapy, component: chemo3 },
        chemotherapy3: { embed: chemotherapy, component: chemo3 },
        cburn: { embed: cyburn, component: cburn },
        cyburn: { embed: cyburn, component: cburn },
        cburn2: { embed: cyburn, component: cburn2 },
        cyburn2: { embed: cyburn, component: cburn2 },
        cburn3: { embed: cyburn, component: cburn3 },
        cyburn3: { embed: cyburn, component: cburn3 },
        cburn4: { embed: cyburn, component: cburn4 },
        cyburn4: { embed: cyburn, component: cburn4 },
        fflare: { embed: funnyflare, component: fflare },
        funnyflare: { embed: funnyflare, component: fflare },
        fflare2: { embed: funnyflare, component: fflare2 },
        funnyflare2: { embed: funnyflare, component: fflare2 },
        fflare3: { embed: funnyflare, component: fflare3 },
        funnyflare3: { embed: funnyflare, component: fflare3 },
        fflare4: { embed: funnyflare, component: fflare4 },
        funnyflare4: { embed: funnyflare, component: fflare4 },
        gnuts: { embed: goingnuts, component: gnuts },
        goingnuts: { embed: goingnuts, component: gnuts },
        gnuts2: { embed: goingnuts, component: gnuts2 },
        goingnuts2: { embed: goingnuts, component: gnuts2 },
        gnuts3: { embed: goingnuts, component: gnuts3 },
        goingnuts3: { embed: goingnuts, component: gnuts3 },
        gnuts4: { embed: goingnuts, component: gnuts4 },
        goingnuts4: { embed: goingnuts, component: gnuts4 },
        hburn: { embed: healburn, component: hburn },
        healburn: { embed: healburn, component: hburn },
        hburn2: { embed: healburn, component: hburn2 },
        healburn2: { embed: healburn, component: hburn2 },
        hburn3: { embed: healburn, component: hburn3 },
        healburn3: { embed: healburn, component: hburn3 },
        hburn4: { embed: healburn, component: hburn4 },
        healburn4: { embed: healburn, component: hburn4 },
        hmr: { embed: healmidrose, component: hmr },
        healmidrose: { embed: healmidrose, component: hmr },
        hmr2: { embed: healmidrose, component: hmr2 },
        healmidrose2: { embed: healmidrose, component: hmr2 },
        hmr3: { embed: healmidrose, component: hmr3 },
        healmidrose3: { embed: healmidrose, component: hmr3 },
        lcbd: { embed: lifecouldbedream, component: lcbd },
        lifecouldbedream: { embed: lifecouldbedream, component: lcbd },
        lcbd2: { embed: lifecouldbedream, component: lcbd2 },
        lifecouldbedream2: { embed: lifecouldbedream, component: lcbd2 },
        lcbd3: { embed: lifecouldbedream, component: lcbd3 },
        lifecouldbedream3: { embed: lifecouldbedream, component: lcbd3 },
        msp: { embed: mspotk, component: msp },
        mspotk: { embed: mspotk, component: msp },
        msp2: { embed: mspotk, component: msp2 },
        mspotk2: { embed: mspotk, component: msp2 },
        msp3: { embed: mspotk, component: msp3 },
        mspotk3: { embed: mspotk, component: msp3 },
        plmop: { embed: plantmop, component: plmop },
        plantmop: { embed: plantmop, component: plmop },
        plmop2: { embed: plantmop, component: plmop2 },
        plantmop2: { embed: plantmop, component: plmop2 },
        plmop3: { embed: plantmop, component: plmop3 },
        plantmop3: { embed: plantmop, component: plmop3 },
        psol: { embed: psychosolstice, component: psol },
        psychosolstice: { embed: psychosolstice, component: psol },
        psol2: { embed: psychosolstice, component: psol2 },
        psychosolstice2: { embed: psychosolstice, component: psol2 },
        psol3: { embed: psychosolstice, component: psol3 },
        psychosolstice3: { embed: psychosolstice, component: psol3 },
        psol4: { embed: psychosolstice, component: psol4 },
        psychosolstice4: { embed: psychosolstice, component: psol4 },
        radio: { embed: radiotherapy, component: radio },
        radiotherapy: { embed: radiotherapy, component: radio },
        radio2: { embed: radiotherapy, component: radio2 },
        radiotherapy2: { embed: radiotherapy, component: radio2 },
        radio3: { embed: radiotherapy, component: radio3 },
        radiotherapy3: { embed: radiotherapy, component: radio3 },
        smf: { embed: savagemayflower, component: smf },
        savagemayflower: { embed: savagemayflower, component: smf },
        smf2: { embed: savagemayflower, component: smf2 },
        savagemayflower2: { embed: savagemayflower, component: smf2 },
        smf3: { embed: savagemayflower, component: smf3 },
        savagemayflower3: { embed: savagemayflower, component: smf3 },
        neuro: { embed: neurotherapy, component: neuro },
        neurotherapy: { embed: neurotherapy, component: neuro },
        neuro2: { embed: neurotherapy, component: neuro2 },
        neurotherapy2: { embed: neurotherapy, component: neuro2 },
        neuro3: { embed: neurotherapy, component: neuro3 },
        neurotherapy3: { embed: neurotherapy, component: neuro3 },
        lstars: { embed: leafstars, component: lstars },
        leafstars: { embed: leafstars, component: lstars },
        lstars2: { embed: leafstars, component: lstars2 },
        leafstars2: { embed: leafstars, component: lstars2 },
        lstars3: { embed: leafstars, component: lstars3 },
        leafstars3: { embed: leafstars, component: lstars3 },
        lstars4: { embed: leafstars, component: lstars4 },
        leafstars4: { embed: leafstars, component: lstars4 },
        stron: { embed: startron, component: stron },
        startron: { embed: startron, component: stron },
        stron2: { embed: startron, component: stron2 },
        startron2: { embed: startron, component: stron2 },
        stron3: { embed: startron, component: stron3 },
        startron3: { embed: startron, component: stron3 },
        stron4: { embed: startron, component: stron4 },
        startron4: { embed: startron, component: stron4 },
        tc: { embed: toyotacontrolla, component: tc },
        toyotacontrolla: { embed: toyotacontrolla, component: tc },
        tc2: { embed: toyotacontrolla, component: tc2 },
        toyotacontrolla2: { embed: toyotacontrolla, component: tc2 },
        tc3: { embed: toyotacontrolla, component: tc3 },
        toyotacontrolla3: { embed: toyotacontrolla, component: tc3 },
        bfmg: { embed: bfmidgargs, component: bfmg },
        bfmidgargs: { embed: bfmidgargs, component: bfmg },
        bfmg2: { embed: bfmidgargs, component: bfmg2 },
        bfmidgargs2: { embed: bfmidgargs, component: bfmg2 },
        bfmg3: { embed: bfmidgargs, component: bfmg3 },
        bfmidgargs3: { embed: bfmidgargs, component: bfmg3 },
        bas: { embed: bastet, component: bas },
        bastet: { embed: bastet, component: bas },
        bas2: { embed: bastet, component: bas2 },
        bastet2: { embed: bastet, component: bas2 },
        bas3: { embed: bastet, component: bas3 },
        bastet3: { embed: bastet, component: bas3 },
        bas4: { embed: bastet, component: bas4 },
        bastet4: { embed: bastet, component: bas4 },
        bfw: { embed: binaryflagwar, component: bfw },
        binaryflagwar: { embed: binaryflagwar, component: bfw },
        bfw2: { embed: binaryflagwar, component: bfw2 },
        binaryflagwar2: { embed: binaryflagwar, component: bfw2 },
        bfw3: { embed: binaryflagwar, component: bfw3 },
        binaryflagwar3: { embed: binaryflagwar, component: bfw3 },
        bfw4: { embed: binaryflagwar, component: bfw4 },
        binaryflagwar4: { embed: binaryflagwar, component: bfw4 },
        bbolt: { embed: boltbolt, component: bbolt },
        boltbolt: { embed: boltbolt, component: bbolt },
        bbolt2: { embed: boltbolt, component: bbolt2 },
        boltbolt2: { embed: boltbolt, component: bbolt2 },
        bbolt3: { embed: boltbolt, component: bbolt3 },
        boltbolt3: { embed: boltbolt, component: bbolt3 },
        bbolt4: { embed: boltbolt, component: bbolt4 },
        boltbolt4: { embed: boltbolt, component: bbolt4 },
        bducks: { embed: bonusducks, component: bducks },
        bonusducks: { embed: bonusducks, component: bducks },
        bducks2: { embed: bonusducks, component: bducks2 },
        bonusducks2: { embed: bonusducks, component: bducks2 },
        bducks3: { embed: bonusducks, component: bducks3 },
        bonusducks3: { embed: bonusducks, component: bducks3 },
        bducks4: { embed: bonusducks, component: bducks4 },
        bonusducks4: { embed: bonusducks, component: bducks4 },
        brad: { embed: brady, component: brad },
        brady: { embed: brady, component: brad },
        brad2: { embed: brady, component: brad2 },
        brady2: { embed: brady, component: brad2 },
        brad3: { embed: brady, component: brad3 },
        brady3: { embed: brady, component: brad3 },
        bbf: { embed: budgetbf, component: bbf },
        budgetbf: { embed: budgetbf, component: bbf },
        bbf2: { embed: budgetbf, component: bbf2 },
        budgetbf2: { embed: budgetbf, component: bbf2 },
        bbf3: { embed: budgetbf, component: bbf3 },
        budgetbf3: { embed: budgetbf, component: bbf3 },
        beb: { embed: budgeteb, component: beb },
        budgeteb: { embed: budgeteb, component: beb },
        beb2: { embed: budgeteb, component: beb2 },
        budgeteb2: { embed: budgeteb, component: beb2 },
        beb3: { embed: budgeteb, component: beb3 },
        budgeteb3: { embed: budgeteb, component: beb3 },
        bif: { embed: budgetif, component: bif },
        budgetif: { embed: budgetif, component: bif },
        bif2: { embed: budgetif, component: bif2 },
        budgetif2: { embed: budgetif, component: bif2 },
        bif3: { embed: budgetif, component: bif3 },
        budgetif3: { embed: budgetif, component: bif3 },
        bim: { embed: budgetim, component: bim },
        budgetim: { embed: budgetim, component: bim },
        bim2: { embed: budgetim, component: bim2 },
        budgetim2: { embed: budgetim, component: bim2 },
        bim3: { embed: budgetim, component: bim3 },
        budgetim3: { embed: budgetim, component: bim3 },
        bim4: { embed: budgetim, component: bim4 },
        budgetim4: { embed: budgetim, component: bim4 },
        bnt: { embed: budgetnt, component: bnt },
        budgetnt: { embed: budgetnt, component: bnt },
        bnt2: { embed: budgetnt, component: bnt2 },
        budgetnt2: { embed: budgetnt, component: bnt2 },
        bnt3: { embed: budgetnt, component: bnt3 },
        budgetnt3: { embed: budgetnt, component: bnt3 },
        bnt4: { embed: budgetnt, component: bnt4 },
        budgetnt4: { embed: budgetnt, component: bnt4 },
        bpb: { embed: budgetpb, component: bpb },
        budgetpb: { embed: budgetpb, component: bpb },
        bpb2: { embed: budgetpb, component: bpb2 },
        budgetpb2: { embed: budgetpb, component: bpb2 },
        bpb3: { embed: budgetpb, component: bpb3 },
        budgetpb3: { embed: budgetpb, component: bpb3 },
        brb: { embed: budgetrb, component: brb },
        budgetrb: { embed: budgetrb, component: brb },
        brb2: { embed: budgetrb, component: brb2 },
        budgetrb2: { embed: budgetrb, component: brb2 },
        brb3: { embed: budgetrb, component: brb3 },
        budgetrb3: { embed: budgetrb, component: brb3 },
        bsb: { embed: budgetsb, component: bsb },
        budgetsb: { embed: budgetsb, component: bsb },
        bsb2: { embed: budgetsb, component: bsb2 },
        budgetsb2: { embed: budgetsb, component: bsb2 },
        bsb3: { embed: budgetsb, component: bsb3 },
        budgetsb3: { embed: budgetsb, component: bsb3 },
        bsm: { embed: budgetsm, component: bsm },
        budgetsm: { embed: budgetsm, component: bsm },
        bsm2: { embed: budgetsm, component: bsm2 },
        budgetsm2: { embed: budgetsm, component: bsm2 },
        bsm3: { embed: budgetsm, component: bsm3 },
        budgetsm3: { embed: budgetsm, component: bsm3 },
        bsm4: { embed: budgetsm, component: bsm4 },
        budgetsm4: { embed: budgetsm, component: bsm4 },
        bykm: { embed: budgetykm, component: bykm },
        budgetykm: { embed: budgetykm, component: bykm },
        bykm2: { embed: budgetykm, component: bykm2 },
        budgetykm2: { embed: budgetykm, component: bykm2 },
        bykm3: { embed: budgetykm, component: bykm3 },
        budgetykm3: { embed: budgetykm, component: bykm3 },
        bykm4: { embed: budgetykm, component: bykm4 },
        budgetykm4: { embed: budgetykm, component: bykm4 },
        bzm: { embed: budgetzm, component: bzm },
        budgetzm: { embed: budgetzm, component: bzm },
        bzm2: { embed: budgetzm, component: bzm2 },
        budgetzm2: { embed: budgetzm, component: bzm2 },
        bzm3: { embed: budgetzm, component: bzm3 },
        budgetzm3: { embed: budgetzm, component: bzm3 },
        bzm4: { embed: budgetzm, component: bzm4 },
        budgetzm4: { embed: budgetzm, component: bzm4 },
        cbolt: { embed: cardsbolt, component: cbolt },
        cardsbolt: { embed: cardsbolt, component: cbolt },
        cbolt2: { embed: cardsbolt, component: cbolt2 },
        cardsbolt2: { embed: cardsbolt, component: cbolt2 },
        cbolt3: { embed: cardsbolt, component: cbolt3 },
        cardsbolt3: { embed: cardsbolt, component: cbolt3 },
        cbolt4: { embed: cardsbolt, component: cbolt4 },
        cardsbolt4: { embed: cardsbolt, component: cbolt4 },
        cleap: { embed: conjureleap, component: cleap },
        conjureleap: { embed: conjureleap, component: cleap },
        cleap2: { embed: conjureleap, component: cleap2 },
        conjureleap2: { embed: conjureleap, component: cleap2 },
        cleap3: { embed: conjureleap, component: cleap3 },
        conjureleap3: { embed: conjureleap, component: cleap3 },
        cboy: { embed: cryoboy, component: cboy },
        cryoboy: { embed: cryoboy, component: cboy },
        cboy2: { embed: cryoboy, component: cboy2 },
        cryoboy2: { embed: cryoboy, component: cboy2 },
        cboy3: { embed: cryoboy, component: cboy3 },
        cryoboy3: { embed: cryoboy, component: cboy3 },
        cboy4: { embed: cryoboy, component: cboy4 },
        cryoboy4: { embed: cryoboy, component: cboy4 },
        dmech: { embed: dozzamech, component: dmech },
        dozzamech: { embed: dozzamech, component: dmech },
        dmech2: { embed: dozzamech, component: dmech2 },
        dozzamech2: { embed: dozzamech, component: dmech2 },
        dmech3: { embed: dozzamech, component: dmech3 },
        dozzamech3: { embed: dozzamech, component: dmech3 },
        flo: { embed: floss, component: flo },
        floss: { embed: floss, component: flo },
        flo2: { embed: floss, component: flo2 },
        floss2: { embed: floss, component: flo2 },
        flo3: { embed: floss, component: flo3 },
        floss3: { embed: floss, component: flo3 },
        ftimps: { embed: frozentelimps, component: ftimps },
        frozentelimps: { embed: frozentelimps, component: ftimps },
        ftimps2: { embed: frozentelimps, component: ftimps2 },
        frozentelimps2: { embed: frozentelimps, component: ftimps2 },
        ftimps3: { embed: frozentelimps, component: ftimps3 },
        frozentelimps3: { embed: frozentelimps, component: ftimps3 },
        ftimps4: { embed: frozentelimps, component: ftimps4 },
        frozentelimps4: { embed: frozentelimps, component: ftimps4 },
        gstar22: { embed: gargstar22, component: gstar22 },
        gargstar22: { embed: gargstar22, component: gstar22 },
        gstar222: { embed: gargstar22, component: gstar222 },
        gargstar222: { embed: gargstar22, component: gstar222 },
        gstar223: { embed: gargstar22, component: gstar223 },
        gargstar223: { embed: gargstar22, component: gstar223 },
        gom: { embed: gomorrah, component: gom },
        gomorrah: { embed: gomorrah, component: gom },
        gom2: { embed: gomorrah, component: gom2 },
        gomorrah2: { embed: gomorrah, component: gom2 },
        gom3: { embed: gomorrah, component: gom3 },
        gomorrah3: { embed: gomorrah, component: gom3 },
        gps: { embed: gravepiratestache, component: gps },
        gravepiratestache: { embed: gravepiratestache, component: gps },
        gps2: { embed: gravepiratestache, component: gps2 },
        gravepiratestache2: { embed: gravepiratestache, component: gps2 },
        gps3: { embed: gravepiratestache, component: gps3 },
        gravepiratestache3: { embed: gravepiratestache, component: gps3 },
        gps4: { embed: gravepiratestache, component: gps4 },
        gravepiratestache4: { embed: gravepiratestache, component: gps4 },
        hter: { embed: himps, component: hter },
        himpter: { embed: himps, component: hter },
        hter2: { embed: himps, component: hter2 },
        himpter2: { embed: himps, component: hter2 },
        hter3: { embed: himps, component: hter3 },
        himpter3: { embed: himps, component: hter3 },
        hter4: { embed: himps, component: hter4 },
        himpter4: { embed: himps, component: hter4 },
        slug: { embed: slugged, component: slug },
        slugged: { embed: slugged, component: slug },
        slug2: { embed: slugged, component: slug2 },
        slugged2: { embed: slugged, component: slug2 },
        slug3: { embed: slugged, component: slug3 },
        slugged3: { embed: slugged, component: slug3 },
        igbc: { embed: igmablobchum, component: igbc },
        igmablobchum: { embed: igmablobchum, component: igbc },
        igbc2: { embed: igmablobchum, component: igbc2 },
        igmablobchum2: { embed: igmablobchum, component: igbc2 },
        igbc3: { embed: igmablobchum, component: igbc3 },
        igmablobchum3: { embed: igmablobchum, component: igbc3 },
        igbc4: { embed: igmablobchum, component: igbc4 },
        igmablobchum4: { embed: igmablobchum, component: igbc4 },
        ltbr: { embed: lockthebathroom, component: ltbr },
        lockthebathroom: { embed: lockthebathroom, component: ltbr },
        ltbr2: { embed: lockthebathroom, component: ltbr2 },
        lockthebathroom2: { embed: lockthebathroom, component: ltbr2 },
        ltbr3: { embed: lockthebathroom, component: ltbr3 },
        lockthebathroom3: { embed: lockthebathroom, component: ltbr3 },
        tmech: { embed: trickmech, component: tmech },
        trickmech: { embed: trickmech, component: tmech },
        tmech2: { embed: trickmech, component: tmech2 },
        trickmech2: { embed: trickmech, component: tmech2 },
        tmech3: { embed: trickmech, component: tmech3 },
        trickmech3: { embed: trickmech, component: tmech3 },
        tmech4: { embed: trickmech, component: tmech4 },
        trickmech4: { embed: trickmech, component: tmech4 },
        mbolt: { embed: marxbolt, component: mbolt },
        marxbolt: { embed: marxbolt, component: mbolt },
        mbolt2: { embed: marxbolt, component: mbolt2 },
        marxbolt2: { embed: marxbolt, component: mbolt2 },
        mbolt3: { embed: marxbolt, component: mbolt3 },
        marxbolt3: { embed: marxbolt, component: mbolt3 },
        mcon: { embed: mechacontrol, component: mcon },
        mechacontrol: { embed: mechacontrol, component: mcon },
        mcon2: { embed: mechacontrol, component: mcon2 },
        mechacontrol2: { embed: mechacontrol, component: mcon2 },
        mcon3: { embed: mechacontrol, component: mcon3 },
        mechacontrol3: { embed: mechacontrol, component: mcon3 },
        mscope: { embed: mechascope, component: mscope },
        mechascope: { embed: mechascope, component: mscope },
        mscope2: { embed: mechascope, component: mscope2 },
        mechascope2: { embed: mechascope, component: mscope2 },
        mscope3: { embed: mechascope, component: mscope3 },
        mechascope3: { embed: mechascope, component: mscope3 },
        mscope4: { embed: mechascope, component: mscope4 },
        mechascope4: { embed: mechascope, component: mscope4 },
        ltime: { embed: lunchtime, component: ltime },
        lunchtime: { embed: lunchtime, component: ltime },
        ltime2: { embed: lunchtime, component: ltime2 },
        lunchtime2: { embed: lunchtime, component: ltime2 },
        ltime3: { embed: lunchtime, component: ltime3 },
        lunchtime3: { embed: lunchtime, component: ltime3 },
        npa: { embed: noplayingallowed, component: npa },
        noplayingallowed: { embed: noplayingallowed, component: npa },
        npa2: { embed: noplayingallowed, component: npa2 },
        noplayingallowed2: { embed: noplayingallowed, component: npa2 },
        npa3: { embed: noplayingallowed, component: npa3 },
        noplayingallowed3: { embed: noplayingallowed, component: npa3 },
        pgun: { embed: portalgun, component: pgun },
        portalgun: { embed: portalgun, component: pgun },
        pgun2: { embed: portalgun, component: pgun2 },
        portalgun2: { embed: portalgun, component: pgun2 },
        pgun3: { embed: portalgun, component: pgun3 },
        portalgun3: { embed: portalgun, component: pgun3 },
        pgun4: { embed: portalgun, component: pgun4 },
        portalgun4: { embed: portalgun, component: pgun4 },
        pyeeyz: { embed: pablosyeezys, component: pyeeyz },
        pablosyeezys: { embed: pablosyeezys, component: pyeeyz },
        pyeeyz2: { embed: pablosyeezys, component: pyeeyz2 },
        pablosyeezys2: { embed: pablosyeezys, component: pyeeyz2 },
        pyeeyz3: { embed: pablosyeezys, component: pyeeyz3 },
        pablosyeezys3: { embed: pablosyeezys, component: pyeeyz3 },
        pyeeyz4: { embed: pablosyeezys, component: pyeeyz4 },
        pablosyeezys4: { embed: pablosyeezys, component: pyeeyz4 },
        bhammer: { embed: banhammer, component: bhammer },
        banhammer: { embed: banhammer, component: bhammer },
        bhammer2: { embed: banhammer, component: bhammer2 },
        banhammer2: { embed: banhammer, component: bhammer2 },
        bhammer3: { embed: banhammer, component: bhammer3 },
        banhammer3: { embed: banhammer, component: bhammer3 },
        bhammer4: { embed: banhammer, component: bhammer4 },
        banhammer4: { embed: banhammer, component: bhammer4 },
        syard: { embed: schoolyard, component: syard },
        schoolyard: { embed: schoolyard, component: syard },
        syard2: { embed: schoolyard, component: syard2 },
        schoolyard2: { embed: schoolyard, component: syard2 },
        syard3: { embed: schoolyard, component: syard3 },
        schoolyard3: { embed: schoolyard, component: syard3 },
        sea: { embed: seacret, component: sea },
        seacret: { embed: seacret, component: sea },
        sea2: { embed: seacret, component: sea2 },
        seacret2: { embed: seacret, component: sea2 },
        sea3: { embed: seacret, component: sea3 },
        seacret3: { embed: seacret, component: sea3 },
        stars: { embed: spacestars, component: stars },
        spacestars: { embed: spacestars, component: stars },
        stars2: { embed: spacestars, component: stars2 },
        spacestars2: { embed: spacestars, component: stars2 },
        stars3: { embed: spacestars, component: stars3 },
        spacestars3: { embed: spacestars, component: stars3 },
        stars4: { embed: spacestars, component: stars4 },
        spacestars4: { embed: spacestars, component: stars4 },
        spl: { embed: splimps, component: spl },
        splimps: { embed: splimps, component: spl },
        spl2: { embed: splimps, component: spl2 },
        splimps2: { embed: splimps, component: spl2 },
        spl3: { embed: splimps, component: spl3 },
        splimps3: { embed: splimps, component: spl3 },
        sbandits: { embed: sunbandits, component: sbandits },
        sunbandits: { embed: sunbandits, component: sbandits },
        sbandits2: { embed: sunbandits, component: sbandits2 },
        sunbandits2: { embed: sunbandits, component: sbandits2 },
        sbandits3: { embed: sunbandits, component: sbandits3 },
        sunbandits3: { embed: sunbandits, component: sbandits3 },
        sbandits4: { embed: sunbandits, component: sbandits4 },
        sunbandits4: { embed: sunbandits, component: sbandits4 },
        slord: { embed: sunlord, component: slord },
        sunlord: { embed: sunlord, component: slord },
        slord2: { embed: sunlord, component: slord2 },
        sunlord2: { embed: sunlord, component: slord2 },
        slord3: { embed: sunlord, component: slord3 },
        sunlord3: { embed: sunlord, component: slord3 },
        slord4: { embed: sunlord, component: slord4 },
        sunlord4: { embed: sunlord, component: slord4 },
        timps: { embed: telimps, component: timps },
        telimps: { embed: telimps, component: timps },
        timps2: { embed: telimps, component: timps2 },
        telimps2: { embed: telimps, component: timps2 },
        timps3: { embed: telimps, component: timps3 },
        telimps3: { embed: telimps, component: timps3 },
        timps4: { embed: telimps, component: timps4 },
        telimps4: { embed: telimps, component: timps4 },
        tstache: { embed: trickstache, component: tstache },
        trickstache: { embed: trickstache, component: tstache },
        tstache2: { embed: trickstache, component: tstache2 },
        trickstache2: { embed: trickstache, component: tstache2 },
        tstache3: { embed: trickstache, component: tstache3 },
        trickstache3: { embed: trickstache, component: tstache3 },
        tstache4: { embed: trickstache, component: tstache4 },
        trickstache4: { embed: trickstache, component: tstache4 },
        umech: { embed: uncrackamech, component: umech },
        uncrackamech: { embed: uncrackamech, component: umech },
        umech2: { embed: uncrackamech, component: umech2 },
        uncrackamech2: { embed: uncrackamech, component: umech2 },
        umech3: { embed: uncrackamech, component: umech3 },
        uncrackamech3: { embed: uncrackamech, component: umech3 },
        umech4: { embed: uncrackamech, component: umech4 },
        uncrackamech4: { embed: uncrackamech, component: umech4 },
        wsports: { embed: watersports, component: wsports },
        watersports: { embed: watersports, component: wsports },
        wsports2: { embed: watersports, component: wsports2 },
        watersports2: { embed: watersports, component: wsports2 },
        wsports3: { embed: watersports, component: wsports3 },
        watersports3: { embed: watersports, component: wsports3 },
        wsports4: { embed: watersports, component: wsports4 },
        watersports4: { embed: watersports, component: wsports4 },
        wph: { embed: whalepharaoh, component: wph },
        whalepharaoh: { embed: whalepharaoh, component: wph },
        wph2: { embed: whalepharaoh, component: wph2 },
        whalepharaoh2: { embed: whalepharaoh, component: wph2 },
        wph3: { embed: whalepharaoh, component: wph3 },
        whalepharaoh3: { embed: whalepharaoh, component: wph3 },
        wph4: { embed: whalepharaoh, component: wph4 },
        whalepharaoh4: { embed: whalepharaoh, component: wph4 },
        yemartin: { embed: youngeggmartin, component: yemartin },
        youngeggmartin: { embed: youngeggmartin, component: yemartin },
        yemartin2: { embed: youngeggmartin, component: yemartin2 },
        youngeggmartin2: { embed: youngeggmartin, component: yemartin2 },
        yemartin3: { embed: youngeggmartin, component: yemartin3 },
        youngeggmartin3: { embed: youngeggmartin, component: yemartin3 },
        ykmartin: { embed: youngkenmartin, component: ykmartin },
        youngkenmartin: { embed: youngkenmartin, component: ykmartin },
        ykmartin2: { embed: youngkenmartin, component: ykmartin2 },
        youngkenmartin2: { embed: youngkenmartin, component: ykmartin2 },
        ykmartin3: { embed: youngkenmartin, component: ykmartin3 },
        youngkenmartin3: { embed: youngkenmartin, component: ykmartin3 },
        ykmartin4: { embed: youngkenmartin, component: ykmartin4 },
        youngkenmartin4: { embed: youngkenmartin, component: ykmartin4 },
        zm: { embed: zmoss, component: zm },
        zmoss: { embed: zmoss, component: zm },
        zm2: { embed: zmoss, component: zm2 },
        zmoss2: { embed: zmoss, component: zm2 },
        zm3: { embed: zmoss, component: zm3 },
        zmoss3: { embed: zmoss, component: zm3 },
        lt: { embed: ladytuna, component: lt },
        ladytuna: { embed: ladytuna, component: lt },
        lt2: { embed: ladytuna, component: lt2 },
        ladytuna2: { embed: ladytuna, component: lt2 },
        lt3: { embed: ladytuna, component: lt3 },
        ladytuna3: { embed: ladytuna, component: lt3 },
        lsnap: { embed: lasersnap, component: lsnap },
        lasersnap: { embed: lasersnap, component: lsnap },
        lsnap2: { embed: lasersnap, component: lsnap2 },
        lasersnap2: { embed: lasersnap, component: lsnap2 },
        lsnap3: { embed: lasersnap, component: lsnap3 },
        lasersnap3: { embed: lasersnap, component: lsnap3 },
        lsnap4: { embed: lasersnap, component: lsnap4 },
        lasersnap4: { embed: lasersnap, component: lsnap4 },
        hotk: { embed: healthotk, component: hotk },
        healthotk: { embed: healthotk, component: hotk },
        hotk2: { embed: healthotk, component: hotk2 },
        healthotk2: { embed: healthotk, component: hotk2 },
        hotk3: { embed: healthotk, component: hotk3 },
        healthotk3: { embed: healthotk, component: hotk3 },
        hotk4: { embed: healthotk, component: hotk4 },
        healthotk4: { embed: healthotk, component: hotk4 },
        pts: { embed: pawntrickstab, component: pts },
        pawntrickstab: { embed: pawntrickstab, component: pts },
        pts2: { embed: pawntrickstab, component: pts2 },
        pawntrickstab2: { embed: pawntrickstab, component: pts2 },
        pts3: { embed: pawntrickstab, component: pts3 },
        pawntrickstab3: { embed: pawntrickstab, component: pts3 },
        nut: { embed: nuttin, component: nut },
        nuttin: { embed: nuttin, component: nut },
        nut2: { embed: nuttin, component: nut2 },
        nuttin2: { embed: nuttin, component: nut2 },
        nut3: { embed: nuttin, component: nut3 },
        nuttin3: { embed: nuttin, component: nut3 },
        rfl: { embed: reflourished, component: rfl },
        reflourished: { embed: reflourished, component: rfl },
        rfl2: { embed: reflourished, component: rfl2 },
        reflourished2: { embed: reflourished, component: rfl2 },
        rfl3: { embed: reflourished, component: rfl3 },
        reflourished3: { embed: reflourished, component: rfl3 },
        sav: { embed: savage22, component: sav },
        savage: { embed: savage22, component: sav },
        sav2: { embed: savage22, component: sav2 },
        savage2: { embed: savage22, component: sav2 },
        sav3: { embed: savage22, component: sav3 },
        savage3: { embed: savage22, component: sav3 },
        sav4: { embed: savage22, component: sav4 },
        savage4: { embed: savage22, component: sav4 },
        carr: { embed: carroot, component: carr },
        carroot: { embed: carroot, component: carr },
        carr2: { embed: carroot, component: carr2 },
        carroot2: { embed: carroot, component: carr2 },
        carr3: { embed: carroot, component: carr3 },
        carroot3: { embed: carroot, component: carr3 },
        carr4: { embed: carroot, component: carr4 },
        carroot4: { embed: carroot, component: carr4 },
        hgargs: { embed: huntgargs, component: hgargs },
        huntgargs: { embed: huntgargs, component: hgargs },
        hgargs2: { embed: huntgargs, component: hgargs2 },
        huntgargs2: { embed: huntgargs, component: hgargs2 },
        hgargs3: { embed: huntgargs, component: hgargs3 },
        huntgargs3: { embed: huntgargs, component: hgargs3 },
        pb: { embed: pbeans, component: pb },
        pbeans: { embed: pbeans, component: pb },
        pb2: { embed: pbeans, component: pb2 },
        pbeans2: { embed: pbeans, component: pb2 },
        pb3: { embed: pbeans, component: pb3 },
        pbeans3: { embed: pbeans, component: pb3 },
        pop: { embed: popsicle, component: pop },
        popsicle: { embed: popsicle, component: pop },
        pop2: { embed: popsicle, component: pop2 },
        popsicle2: { embed: popsicle, component: pop2 },
        pop3: { embed: popsicle, component: pop3 },
        popsicle3: { embed: popsicle, component: pop3 },
        nhks: { embed: nohokaistars, component: nhks },
        nohokaistars: { embed: nohokaistars, component: nhks },
        nhks2: { embed: nohokaistars, component: nhks2 },
        nohokaistars2: { embed: nohokaistars, component: nhks2 },
        nhks3: { embed: nohokaistars, component: nhks3 },
        nohokaistars3: { embed: nohokaistars, component: nhks3 },
        lbait: { embed: logbait, component: lbait },
        logbait: { embed: logbait, component: lbait },
        lbait2: { embed: logbait, component: lbait2 },
        logbait2: { embed: logbait, component: lbait2 },
        lbait3: { embed: logbait, component: lbait3 },
        logbait3: { embed: logbait, component: lbait3 },
        rcatster: { embed: reversecatster, component: rcatster },
        reversecatster: { embed: reversecatster, component: rcatster },
        rcatster2: { embed: reversecatster, component: rcatster2 },
        reversecatster2: { embed: reversecatster, component: rcatster2 },
        rcatster3: { embed: reversecatster, component: rcatster3 },
        reversecatster3: { embed: reversecatster, component: rcatster3 },
        dcounter: { embed: dinocounter, component: dcounter },
        dinocounter: { embed: dinocounter, component: dcounter },
        dcounter2: { embed: dinocounter, component: dcounter2 },
        dinocounter2: { embed: dinocounter, component: dcounter2 },
        dcounter3: { embed: dinocounter, component: dcounter3 },
        dinocounter3: { embed: dinocounter, component: dcounter3 },
        dcounter4: { embed: dinocounter, component: dcounter4 },
        dinocounter4: { embed: dinocounter, component: dcounter4 },
        recy: { embed: recycling, component: recy },
        recycling: { embed: recycling, component: recy },
        recy2: { embed: recycling, component: recy2 },
        recycling2: { embed: recycling, component: recy2 },
        recy3: { embed: recycling, component: recy3 },
        recycling3: { embed: recycling, component: recy3 },
        lime: { embed: limerence, component: lime },
        limerence: { embed: limerence, component: lime },
        lime2: { embed: limerence, component: lime2 },
        limerence2: { embed: limerence, component: lime2 },
        lime3: { embed: limerence, component: lime3 },
        limerence3: { embed: limerence, component: lime3 },
        pip: { embed: piport, component: pip },
        piport: { embed: piport, component: pip },
        pip2: { embed: piport, component: pip2 },
        piport2: { embed: piport, component: pip2 },
        pip3: { embed: piport, component: pip3 },
        piport3: { embed: piport, component: pip3 },
        tan: { embed: tangen, component: tan },
        tangen: { embed: tangen, component: tan },
        tan2: { embed: tangen, component: tan2 },
        tangen2: { embed: tangen, component: tan2 },
        tan3: { embed: tangen, component: tan3 },
        tangen3: { embed: tangen, component: tan3 },
        tan4: { embed: tangen, component: tan4 },
        tangen4: { embed: tangen, component: tan4 },
        bay: {embed: bayonet, component: bay},
        bayonet: {embed: bayonet, component: bay},
        bay2: {embed: bayonet, component: bay2},
        bayonet2: {embed: bayonet, component: bay2},
        bay3: {embed: bayonet, component: bay3},
        bayonet3: {embed: bayonet, component: bay3},
        bay4: {embed: bayonet, component: bay4},
        bayonet4: {embed: bayonet, component: bay4}, 
        eaggro: { embed: espressoaggro, component: eaggro },
        espressoaggro: { embed: espressoaggro, component: eaggro },
        eaggro2: { embed: espressoaggro, component: eaggro2 },
        espressoaggro2: { embed: espressoaggro, component: eaggro2 },
        eaggro3: { embed: espressoaggro, component: eaggro3 },
        espressoaggro3: { embed: espressoaggro, component: eaggro3 },
        mgold: { embed: mechagold, component: mgold },
        mechagold: { embed: mechagold, component: mgold },
        mgold2: { embed: mechagold, component: mgold2 },
        mechagold2: { embed: mechagold, component: mgold2 },
        mgold3: {embed: mechagold, component: mgold3 },
        mechagold3: {embed: mechagold, component: mgold3 }, 
        lstrike: { embed: leafystrike, component: lstrike },
        leafystrike: { embed: leafystrike, component: lstrike },
        lstrike2: { embed: leafystrike, component: lstrike2 },
        leafystrike2: { embed: leafystrike, component: lstrike2 },
        lstrike3: { embed: leafystrike, component: lstrike3 },
        leafystrike3: { embed: leafystrike, component: lstrike3 }, 
        gseg: { embed: ginseng, component: gseg },
        ginseng: { embed: ginseng, component: gseg },
        gseg2: { embed: ginseng, component: gseg2 },
        ginseng2: { embed: ginseng, component: gseg2 },
        gseg3: { embed: ginseng, component: gseg3 },
        ginseng3: { embed: ginseng, component: gseg3 },
        un: { embed: uno, component: un },
        uno: { embed: uno, component: un },
        un2: { embed: uno, component: un2 },
        uno2: { embed: uno, component: un2 },
        un3: { embed: uno, component: un3 },
        uno3: { embed: uno, component: un3 },
        un4: { embed: uno, component: un4 },
        uno4: { embed: uno, component: un4 },
        lmower: { embed: lawnmower, component: lmower },
        lawnmower: { embed: lawnmower, component: lmower },
        lmower2: { embed: lawnmower, component: lmower2 },
        lawnmower2: { embed: lawnmower, component: lmower2 },
        lmower3: { embed: lawnmower, component: lmower3 },
        lawnmower3: { embed: lawnmower, component: lmower3 },
        lmower4: { embed: lawnmower, component: lmower4 },
        lawnmower4: { embed: lawnmower, component: lmower4 },
        lum: { embed: luminous, component: lum },
        luminous: { embed: luminous, component: lum },
        lum2: { embed: luminous, component: lum2 },
        luminous2: { embed: luminous, component: lum2 },
        lum3: { embed: luminous, component: lum3 },
        luminous3: { embed: luminous, component: lum3 },
        lum4: { embed: luminous, component: lum4 },
        luminous4: { embed: luminous, component: lum4 }
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button action",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "starter") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
