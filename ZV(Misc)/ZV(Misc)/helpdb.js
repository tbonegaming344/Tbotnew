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
 *
 * @param {string} title the title of the embed
 * @param {string} description the description of the embed
 * @param {string} image an image on the embed
 * @param {string} footer the text on the bottom of the embed
 * @returns {EmbedBuilder} the embed object
 */
function CreatePlantHelpEmbed(title, description, image, footer) {
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
function CreateZombieHelpEmbed(title, description, image, footer) {
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
    `competitivedecks`,
    `ladder`,
    `ladderdecks`,
    `aggro`,
    `aggrodecks`,
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
        "abeans",
        "chemotherapy",
        "cyburn",
        "figlottery",
        "healcontrol",
        "healmidrose",
        "logbait",
        "pawntrickstab",
        "radiotherapy",
        "shamcontrolbc",
        "toyotacontrolla",
        "watertron",
      ],
      ladderDecks: [
        "carroot",
        "frymidrose",
        "going3nuts",
        "midred",
        "pbeans",
      ],
      memeDecks: [
        "100%winrate",
        "cancerknight",
        "dinogloves",
        "freezeheal",
        "funnyflare",
        "healburn",
        "healthotk",
        "highlander",
        "lasersnap",
        "lifecouldbedream",
        "mopribus",
        "mspotk",
        "nuttin",
        "plantmop",
        "popsicle",
        "psychosolstice",
        "ramp2seedling",
        "reflourished",
        "savagemayflower",
        "shitknight",
        "starrings",
        "startron",
        "translattail",
      ],
      aggroDecks: [
        "abeans",
        "budgetcc",
        "budgetct",
        "budgetnc",
        "budgetsf",
        "dinogloves",
        "logbait",
        "pbeans",
        "watertron",
      ],
      comboDecks: [
        "budgetcc",
        "budgetcz",
        "carroot",
        "cyburn",
        "freezeheal",
        "funnyflare",
        "going3nuts",
        "healburn",
        "healthotk",
        "lasersnap",
        "midred",
        "mopribus",
        "mspotk",
        "nuttin",
        "plantmop",
        "psychosolstice",
        "ramp2seedling",
        "reflourished",
        "savagemayflower",
        "starrings",
        "startron",
        "translattail",
      ],
      controlDecks: [
        "cancerknight",
        "chemotherapy",
        "healcontrol",
        "pawntrickstab",
        "popsicle",
        "radiotherapy",
        "shamcontrolbc",
        "shitknight",
        "toyotacontrolla",
      ],
      midrangeDecks: [
        "budgetcz",
        "budgetgk",
        "budgetro",
        "budgetsp",
        "budgetwk",
        "cyburn",
        "figlottery",
        "frymidrose",
        "funnyflare",
        "going3nuts",
        "healburn",
        "healmidrose",
        "healthotk",
        "highlander",
        "lasersnap",
        "midred",
        "mopribus",
        "psychosolstice",
        "ramp2seedling",
        "starrings",
        "startron",
      ],
      tempoDecks: [
        "100%winrate",
        "carroot",
        "lifecouldbedream",
        "translattail",
      ],
      allDecks: [
        "100%winrate",
        "abeans",
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
        "cancerknight",
        "carroot",
        "chemotherapy",
        "cyburn",
        "dinogloves",
        "figlottery",
        "freezeheal",
        "frymidrose",
        "funnyflare",
        "going3nuts",
        "healburn",
        "healcontrol",
        "healmidrose",
        "healthotk",
        "highlander",
        "lasersnap",
        "lifecouldbedream",
        "logbait",
        "midred",
        "mopribus",
        "mspotk",
        "pawntrickstab",
        "pbeans",
        "plantmop",
        "popsicle",
        "psychosolstice",
        "nuttin",
        "radiotherapy",
        "ramp2seedling",
        "reflourished",
        "savagemayflower",
        "shamcontrolbc",
        "shitknight",
        "starrings",
        "startron",
        "toyotacontrolla",
        "translattail",
        "watertron",
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
        "bustbolt",
        "gargburn",
        "icebox",
        "lockthebathroom",
        "kaleidoscope",
        "pablosyeezys",
        "nohokaistars",
        "seacret",
        "spacestars",
        "telimps",
        "trickstache",
        "uncrackabolt",
      ],
      ladderDecks: [
        "agraves",
        "bfmidgargs",
        "bfplankcontrol",
        "binaryflagwar",
        "boltbolt",
        "brady",
        "cryoboy",
        "gargstar22",
        "gomorrah",
        "gravepiratestache",
        "gravestache",
        "horts",
        "marxbolt",
        "mechacontrol",
        "professorpackage",
        "raiserpackage",
        "schoolyard",
        "splimps",
        "telimpssb",
        "trickmech",
        "valkster",
      ],
      memeDecks: [
        "22savage",
        "antiagor",
        "banhammer",
        "bastet",
        "bonusducks",
        "coggerazzi",
        "congabait",
        "conjureleap",
        "dozzamech",
        "floss",
        "frozentelimps",
        "gargolithtech",
        "himpter",
        "huntgargs",
        "igmablobchum",
        "ladytuna",
        "lunchtime",
        "noplayingallowed",
        "pbfeast",
        "petmop",
        "otkswabbie",
        "rampticia",
        "sunbandits",
        "sunlord",
        "terrifytricksterazzi",
        "uncrackamech",
        "watersports",
        "whalepharaoh",
        "youngeggmartin",
        "youngkenmartin",
        "zmoss",
      ],
      aggroDecks: [
        "agraves",
        "budgetbf",
        "budgeteb",
        "budgetif",
        "budgetnt",
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
        "antiagor",
        "banhammer",
        "bastet",
        "binaryflagwar",
        "boltbolt",
        "bonusducks",
        "budgetim",
        "budgetnt",
        "budgetpb",
        "budgetsm",
        "budgetykm",
        "budgetzm",
        "bustbolt",
        "coggerazzi",
        "congabait",
        "cryoboy",
        "floss",
        "frozentelimps",
        "gargburn",
        "gravepiratestache",
        "gravestache",
        "himpter",
        "horts",
        "igmablobchum",
        "mechascope",
        "otkswabbie",
        "pablosyeezys",
        "rampticia",
        "spacestars",
        "sunbandits",
        "sunlord",
        "telimps",
        "telimpssb",
        "terrifytricksterazzi",
        "trickstache",
        "uncrackamech",
        "valkster",
        "watersports",
        "whalepharaoh",
        "youngeggmartin",
        "youngkenmartin",
        "zmoss",
      ],
      controlDecks: [
        "bfplankcontrol",
        "bonusducks",
        "budgetim",
        "bustbolt",
        "frozentelimps",
        "huntgargs",
        "kaleidoscope",
        "mechacontrol",
        "mechascope",
        "noplayingallowed",
        "pbfeast",
        "sunbandits",
        "telimps",
        "telimpssb",
        "uncrackabolt",
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
        "congabait",
        "cryoboy",
        "gargburn",
        "gargolithtech",
        "gargstar22",
        "gomorrah",
        "himpter",
        "horts",
        "icebox",
        "igmablobchum",
        "ladytuna",
        "lunchtime",
        "pablosyeezys",
        "petmop",
        "nohokaistars",
        "spacestars",
        "sunlord",
        "trickstache",
        "valkster",
        "watersports",
        "youngkenmartin",
      ],
      tempoDecks: [
        "brady",
        "coggerazzi",
        "conjureleap",
        "lockthebathroom",
        "professorpackage",
        "raiserpackage",
        "terrifytricksterazzi",
      ],
      allDecks: [
        "22savage",
        "agraves",
        "antiagor",
        "banhammer",
        "bfmidgargs",
        "bfplankcontrol",
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
        "bustbolt",
        "coggerazzi",
        "congabait",
        "conjureleap",
        "cryoboy",
        "dozzamech",
        "floss",
        "frozentelimps",
        "gargburn",
        "gargolithtech",
        "gargstar22",
        "gomorrah",
        "gravepiratestache",
        "gravestache",
        "himpter",
        "horts",
        "huntgargs",
        "icebox",
        "igmablobchum",
        "kaleidoscope",
        "ladytuna",
        "lockthebathroom",
        "lunchtime",
        "marxbolt",
        "mechacontrol",
        "mechascope",
        "nohokaistars",
        "noplayingallowed",
        "otkswabbie",
        "pablosyeezys",
        "pbfeast",
        "petmop",
        "professorpackage",
        "raiserpackage",
        "rampticia",
        "schoolyard",
        "seacret",
        "spacestars",
        "splimps",
        "sunbandits",
        "sunlord",
        "telimps",
        "telimpssb",
        "terrifytricksterazzi",
        "trickstache",
        "trickmech",
        "uncrackabolt",
        "uncrackamech",
        "valkster",
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
    const allprow = new CreateButtons("watertron", "wr100");
    const wr100 = new CreateButtons("helpallp", "ab");
    const ab = new CreateButtons("winrate100", "bct");
    const bct = new CreateButtons("abeans", "bcc");
    const bcc = new CreateButtons("budgetct", "bcz");
    const bcz = new CreateButtons("budgetcc", "bgk");
    const bgk = new CreateButtons("budgetcz", "bgs");
    const bgs = new CreateButtons("budgetgk", "bnc");
    const bnc = new CreateButtons("budgetgs", "bro");
    const bro = new CreateButtons("budgetnc", "bsf");
    const bsf = new CreateButtons("budgetro", "bsp");
    const bsp = new CreateButtons("budgetsf", "bwk");
    const bwk = new CreateButtons("budgetsp", "cank");
    const cank = new CreateButtons("budgetwk", "carr");
    const carr = new CreateButtons("cancerknight", "chemo");
    const chemo = new CreateButtons("carroot", "cburn");
    const cburn = new CreateButtons("chemotherapy", "dgloves");
    const dgloves = new CreateButtons("cyburn", "flottery");
    const flottery = new CreateButtons("dinogloves", "fheal");
    const fheal = new CreateButtons("figlottery", "fmr");
    const fmr = new CreateButtons("freezeheal", "fflare");
    const fflare = new CreateButtons("frymidrose", "g3n");
    const g3n = new CreateButtons("funnyflare", "hburn");
    const hburn = new CreateButtons("going3nuts", "healcon");
    const healcon = new CreateButtons("healburn", "hmr");
    const hmr = new CreateButtons("healcontrol", "hotk");
    const hotk = new CreateButtons("healmidrose", "hland");
    const hland = new CreateButtons("healthotk", "lsnap");
    const lsnap = new CreateButtons("highlander", "lcbd");
    const lcbd = new CreateButtons("lasersnap", "lbait");
    const lbait = new CreateButtons("lifecouldbedream", "mred");
    const mred = new CreateButtons("logbait", "mopr");
    const mopr = new CreateButtons("midred", "msp");
    const msp = new CreateButtons("mopribus", "pts");
    const pts = new CreateButtons("mspotk", "pb");
    const pb = new CreateButtons("pawntrickstab", "plmop");
    const plmop = new CreateButtons("pbeans", "pop");
    const pop = new CreateButtons("plantmop", "psol");
    const psol = new CreateButtons("popsicle", "nut");
    const nut = new CreateButtons("psychosolstice", "radio");
    const radio = new CreateButtons("nuttin", "r2s");
    const r2s = new CreateButtons("radiotherapy", "rfl");
    const rfl = new CreateButtons("ramp2seedling", "smf");
    const smf = new CreateButtons("reflourished", "shambc");
    const shambc = new CreateButtons("savagemayflower", "sknight");
    const sknight = new CreateButtons("shamcontrolbc", "srings");
    const srings = new CreateButtons("shitknight", "stron");
    const stron = new CreateButtons("starrings", "tc");
    const tc = new CreateButtons("startron", "tlattail");
    const tlattail = new CreateButtons("toyotacontrolla", "wtron");
    const wtron = new CreateButtons("translattail", "allphelp");
    const budgetprow = new CreateButtons("budgetwk2", "bcc2");
    const bcc2 = new CreateButtons("budgetphelp", "bct2");
    const bct2 = new CreateButtons("budgetcc2", "bcz2");
    const bcz2 = new CreateButtons("budgetct2", "bgk2");
    const bgk2 = new CreateButtons("budgetcz2", "bgs2");
    const bgs2 = new CreateButtons("budgetgk2", "bnc2");
    const bnc2 = new CreateButtons("budgetgs2", "bro2");
    const bro2 = new CreateButtons("budgetnc2", "bsf2");
    const bsf2 = new CreateButtons("budgetro2", "bsp2");
    const bsp2 = new CreateButtons("budgetsf2", "bwk2");
    const bwk2 = new CreateButtons("budgetsp2", "helppbudget");
    const compprow = new CreateButtons("watertron2", "ab2");
    const ab2 = new CreateButtons("compphelp", "chemo2");
    const chemo2 = new CreateButtons("abeans2", "cburn2");
    const cburn2 = new CreateButtons("chemotherapy2", "flottery2");
    const flottery2 = new CreateButtons("cyburn2", "healcon2");
    const healcon2 = new CreateButtons("figlottery2", "hmr2");
    const hmr2 = new CreateButtons("healcontrol2", "lbait2");
    const lbait2 = new CreateButtons("healmidrose2", "pts2");
    const pts2 = new CreateButtons("logbait2", "radio2");
    const radio2 = new CreateButtons("pawntrickstab2", "shambc2");
    const shambc2 = new CreateButtons("radiotherapy2", "tc2");
    const tc2 = new CreateButtons("shamcontrolbc2", "wtron2");
    const wtron2 = new CreateButtons("toyotacontrolla2", "helppcomp");
    const ladderprow = new CreateButtons("pbeans2", "carr2");
    const carr2 = new CreateButtons("helppladder", "fmr2");
    const fmr2 = new CreateButtons("carroot2", "g3n2");
    const g3n2 = new CreateButtons("frymidrose2", "mred2");
    const mred2 = new CreateButtons("going3nuts2", "pb2");
    const pb2 = new CreateButtons("midred2", "ladderphelp");
    const memeprow = new CreateButtons("translattail2", "wr1002");
    const wr1002 = new CreateButtons("memephelp", "cank2");
    const cank2 = new CreateButtons("winrate1002", "dgloves2");
    const dgloves2 = new CreateButtons("cancerknight2", "fheal2");
    const fheal2 = new CreateButtons("dinogloves2", "fflare2");
    const fflare2 = new CreateButtons("freezeheal2", "hburn2");
    const hburn2 = new CreateButtons("funnyflare2", "hotk2");
    const hotk2 = new CreateButtons("healburn2", "hland2");
    const hland2 = new CreateButtons("healthotk2", "lsnap2");
    const lsnap2 = new CreateButtons("highlander2", "lcbd2");
    const lcbd2 = new CreateButtons("lasersnap2", "mopr2");
    const mopr2 = new CreateButtons("lifecouldbedream2", "msp2");
    const msp2 = new CreateButtons("mopribus2", "nut2");
    const nut2 = new CreateButtons("mspotk2", "plmop2");
    const plmop2 = new CreateButtons("nuttin2", "pop2");
    const pop2 = new CreateButtons("plantmop2", "psol2");
    const psol2 = new CreateButtons("popsicle2", "r2s2");
    const r2s2 = new CreateButtons("psychosolstice2", "rfl2");
    const rfl2 = new CreateButtons("ramp2seedling2", "smf2");
    const smf2 = new CreateButtons("reflourished2", "sknight2");
    const sknight2 = new CreateButtons("savagemayflower2", "srings2");
    const srings2 = new CreateButtons("shitknight2", "stron2");
    const stron2 = new CreateButtons("starrings2", "tlattail2");
    const tlattail2 = new CreateButtons("startron2", "helppmeme");
    const aggroprow = new CreateButtons("watertron3", "ab3");
    const ab3 = new CreateButtons("helppaggro", "bcc3");
    const bcc3 = new CreateButtons("abeans3", "bct3");
    const bct3 = new CreateButtons("budgetcc3", "bnc3");
    const bnc3 = new CreateButtons("budgetct3", "bsf3");
    const bsf3 = new CreateButtons("budgetct3", "dgloves3");
    const dgloves3 = new CreateButtons("budgetsf3", "lbait3");
    const lbait3 = new CreateButtons("dinogloves3", "pb3");
    const pb3 = new CreateButtons("logbait3", "wtron3");
    const wtron3 = new CreateButtons("pbeans3", "aggrophelp");
    const comboprow = new CreateButtons("translattail3", "bcc4");
    const bcc4 = new CreateButtons("helppcombo", "bcz3");
    const bcz3 = new CreateButtons("budgetcc4", "carr3");
    const carr3 = new CreateButtons("budgetcz3", "cburn3");
    const cburn3 = new CreateButtons("carroot3", "fheal3");
    const fheal3 = new CreateButtons("cyburn3", "fflare3");
    const fflare3 = new CreateButtons("freezeheal3", "g3n3");
    const g3n3 = new CreateButtons("funnyflare3", "hburn3");
    const hburn3 = new CreateButtons("going3nuts3", "hotk3");
    const hotk3 = new CreateButtons("healburn3", "lsnap3");
    const lsnap3 = new CreateButtons("healthotk3", "mred3");
    const mred3 = new CreateButtons("lasersnap3", "mopr3");
    const mopr3 = new CreateButtons("midred3", "msp3");
    const msp3 = new CreateButtons("mopribus3", "nut3");
    const nut3 = new CreateButtons("mspotk3", "plmop3");
    const plmop3 = new CreateButtons("nuttin3", "psol3");
    const psol3 = new CreateButtons("plantmop3", "r2s3");
    const r2s3 = new CreateButtons("psychosolstice3", "rfl3");
    const rfl3 = new CreateButtons("ramp2seedling3", "smf3");
    const smf3 = new CreateButtons("reflourished3", "srings3");
    const srings3 = new CreateButtons("savagemayflower3", "stron3");
    const stron3 = new CreateButtons("starrings3", "tlattail3");
    const tlattail3 = new CreateButtons("startron3", "helppcombo");
    const controlprow = new CreateButtons("toyotacontrolla3", "cank3");
    const cank3 = new CreateButtons("helppcontrol", "chemo3");
    const chemo3 = new CreateButtons("cancerknight3", "healcon3");
    const healcon3 = new CreateButtons("chemotherapy3", "pts3");
    const pts3 = new CreateButtons("healcontrol3", "pop3");
    const pop3 = new CreateButtons("popsicle3", "radio3");
    const radio3 = new CreateButtons("pawntrickstab3", "shambc3");
    const shambc3 = new CreateButtons("radiotherapy3", "sknight3");
    const sknight3 = new CreateButtons("shamcontrolbc3", "tc3");
    const tc3 = new CreateButtons("shitknight3", "controlphelp");
    const midrangeprow = new CreateButtons("startron4", "bcz4");
    const bcz4 = new CreateButtons("helppmidrange", "bgk3");
    const bgk3 = new CreateButtons("budgetcz4", "bgs3");
    const bgs3 = new CreateButtons("budgetgk3", "bro3");
    const bro3 = new CreateButtons("budgetgs3", "bsp3");
    const bsp3 = new CreateButtons("budgetro3", "bwk3");
    const bwk3 = new CreateButtons("budgetro3", "cburn4");
    const cburn4 = new CreateButtons("budgetwk3", "flottery3");
    const flottery3 = new CreateButtons("cyburn4", "fmr3");
    const fmr3 = new CreateButtons("figlottery3", "fflare4");
    const fflare4 = new CreateButtons("frymidrose3", "g3n4");
    const g3n4 = new CreateButtons("funnyflare4", "hburn4");
    const hburn4 = new CreateButtons("going3nuts4", "hmr3");
    const hmr3 = new CreateButtons("healburn4", "hotk4");
    const hotk4 = new CreateButtons("healmidrose3", "hland3");
    const hland3 = new CreateButtons("healthotk4", "lsnap4");
    const lsnap4 = new CreateButtons("highlander3", "mred4");
    const mred4 = new CreateButtons("lasersnap4", "mopr4");
    const mopr4 = new CreateButtons("midred4", "psol4");
    const psol4 = new CreateButtons("mopribus4", "r2s4");
    const r2s4 = new CreateButtons("psychosolstice4", "srings4");
    const srings4 = new CreateButtons("ramp2seedling4", "stron4");
    const stron4 = new CreateButtons("starrings4", "midrangephelp");
    const tempoprow = new CreateButtons("translattail4", "wr1003");
    const wr1003 = new CreateButtons("tempophelp", "carr4");
    const carr4 = new CreateButtons("winrate1003", "lcbd3");
    const lcbd3 = new CreateButtons("carroot4", "tlattail4");
    const tlattail4 = new CreateButtons("lifecouldbedream3", "helpptempo");
    const allzrow = new CreateButtons("zmoss", "sav");
    const sav = new CreateButtons("allzhelp", "agr");
    const agr = new CreateButtons("savage", "agor");
    const agor = new CreateButtons("agraves", "bhammer");
    const bhammer = new CreateButtons("antiagor", "bfmg");
    const bfmg = new CreateButtons("banhammer", "bfpc");
    const bfpc = new CreateButtons("bfmidgargs", "bas");
    const bas = new CreateButtons("bfplankcontrol", "bfw");
    const bfw = new CreateButtons("bastet", "bbolt");
    const bbolt = new CreateButtons("binaryflagwar", "bducks");
    const bducks = new CreateButtons("boltbolt", "brad");
    const brad = new CreateButtons("bonusducks", "bbf");
    const bbf = new CreateButtons("brady", "beb");
    const beb = new CreateButtons("budgetbf", "bif");
    const bif = new CreateButtons("budgeteb", "bim");
    const bim = new CreateButtons("budgetif", "bnt");
    const bnt = new CreateButtons("budgetim", "bpb");
    const bpb = new CreateButtons("budgetnt", "brb");
    const brb = new CreateButtons("budgetpb", "bsb");
    const bsb = new CreateButtons("budgetrb", "bsm");
    const bsm = new CreateButtons("budgetsb", "bykm");
    const bykm = new CreateButtons("budgetsm", "bzm");
    const bzm = new CreateButtons("budgetykm", "bust");
    const bust = new CreateButtons("budgetzm", "cog");
    const cog = new CreateButtons("bustbolt", "cbait");
    const cbait = new CreateButtons("coggerazzi", "cleap");
    const cleap = new CreateButtons("congabait", "cboy");
    const cboy = new CreateButtons("conjureleap", "dmech");
    const dmech = new CreateButtons("cryoboy", "flo");
    const flo = new CreateButtons("dozzamech", "ftimps");
    const ftimps = new CreateButtons("floss", "gburn");
    const gburn = new CreateButtons("frozentelimps", "gtech");
    const gtech = new CreateButtons("gargburn", "gstar22");
    const gstar22 = new CreateButtons("gargolithtech", "gom");
    const gom = new CreateButtons("gargstar22", "gps");
    const gps = new CreateButtons("gomorrah", "gstache");
    const gstache = new CreateButtons("gravepiratestache", "hter");
    const hter = new CreateButtons("gravestache", "hor");
    const hor = new CreateButtons("himpter", "hgargs");
    const hgargs = new CreateButtons("horts", "ibox");
    const ibox = new CreateButtons("huntgargs", "igbc");
    const igbc = new CreateButtons("icebox", "kscope");
    const kscope = new CreateButtons("igmablobchum", "lt");
    const lt = new CreateButtons("kaleidoscope", "ltbr");
    const ltbr = new CreateButtons("ladytuna", "ltime");
    const ltime = new CreateButtons("lockthebathroom", "mbolt");
    const mbolt = new CreateButtons("lunchtime", "mcon");
    const mcon = new CreateButtons("marxbolt", "mscope");
    const mscope = new CreateButtons("mechacontrol", "nhks");
    const nhks = new CreateButtons("mechascope", "npa");
    const npa = new CreateButtons("nohokaistars", "otksw");
    const otksw = new CreateButtons("noplayingallowed", "pyeeyz");
    const pyeeyz = new CreateButtons("otkswabbie", "pbfeast");
    const pfeast = new CreateButtons("pablosyeezys", "pmop");
    const pmop = new CreateButtons("pbfeast", "propackage");
    const propackage = new CreateButtons("petmop", "rpackage");
    const rpackage = new CreateButtons("professorpackage", "rticia");
    const rticia = new CreateButtons("raiserpackage", "syard");
    const syard = new CreateButtons("rampticia", "sea");
    const sea = new CreateButtons("schoolyard", "stars");
    const stars = new CreateButtons("seacret", "spl");
    const spl = new CreateButtons("spacestars", "sbandits");
    const sbandits = new CreateButtons("splimps", "slord");
    const slord = new CreateButtons("sunbandits", "timps");
    const timps = new CreateButtons("sunlord", "timpssb");
    const timpssb = new CreateButtons("telimps", "terrifyster");
    const terrifyster = new CreateButtons("telimpssb", "tstache");
    const tstache = new CreateButtons("terrifytricksterazzi", "tmech");
    const tmech = new CreateButtons("trickstache", "ubolt");
    const ubolt = new CreateButtons("trickmech", "umech");
    const umech = new CreateButtons("uncrackabolt", "vster");
    const vster = new CreateButtons("uncrackamech", "wsports");
    const wsports = new CreateButtons("valkster", "wph");
    const wph = new CreateButtons("watersports", "yemartin");
    const yemartin = new CreateButtons("whalepharaoh", "ykmartin");
    const ykmartin = new CreateButtons("youngeggmartin", "zm");
    const zm = new CreateButtons("youngkenmartin", "helpzall");
    const budgetzrow = new CreateButtons("budgetzm2", "bbf2");
    const bbf2 = new CreateButtons("helpbudgetz", "beb2");
    const beb2 = new CreateButtons("budgetbf2", "bif2");
    const bif2 = new CreateButtons("budgeteb2", "bim2");
    const bim2 = new CreateButtons("budgetif2", "bnt2");
    const bnt2 = new CreateButtons("budgetim2", "bpb2");
    const bpb2 = new CreateButtons("budgetnt2", "brb2");
    const brb2 = new CreateButtons("budgetpb2", "bsb2");
    const bsb2 = new CreateButtons("budgetrb2", "bsm2");
    const bsm2 = new CreateButtons("budgetsb2", "bykm2");
    const bykm2 = new CreateButtons("budgetykm2", "bzm2");
    const bzm2 = new CreateButtons("budgetsm2", "helpzbudget");
    const compzrow = new CreateButtons("uncrackabolt2", "bust2");
    const bust2 = new CreateButtons("helpzcomp", "gburn2");
    const gburn2 = new CreateButtons("bustbolt2", "ibox2");
    const ibox2 = new CreateButtons("gargburn2", "ltbr2");
    const ltbr2 = new CreateButtons("icebox2", "kscope2");
    const kscope2 = new CreateButtons("lockthebathroom2", "pyeeyz2");
    const pyeeyz2 = new CreateButtons("kaleidoscope2", "nhks2");
    const nhks2 = new CreateButtons("pablosyeezys2", "sea2");
    const sea2 = new CreateButtons("nohokaistars2", "stars2");
    const stars2 = new CreateButtons("seacret2", "timps2");
    const timps2 = new CreateButtons("spacestars2", "tstache2");
    const tstache2 = new CreateButtons("telimps2", "ubolt2");
    const ubolt2 = new CreateButtons("trickstache2", "compzhelp");
    const ladderzrow = new CreateButtons("valkster2", "agr2");
    const agr2 = new CreateButtons("helpzladder", "bfmg2");
    const bfmg2 = new CreateButtons("agraves2", "bfpc2");
    const bfpc2 = new CreateButtons("bfmidgargs2", "bfw2");
    const bfw2 = new CreateButtons("bfplankcontrol2", "bbolt2");
    const bbolt2 = new CreateButtons("binaryflagwar2", "brad2");
    const brad2 = new CreateButtons("boltbolt2", "cboy2");
    const cboy2 = new CreateButtons("brady2", "gstar222");
    const gstar222 = new CreateButtons("cryoboy2", "gom2");
    const gom2 = new CreateButtons("gargstar222", "gps2");
    const gps2 = new CreateButtons("gomorrah2", "gstache2");
    const gstache2 = new CreateButtons("gravepiratestache2", "hor2");
    const hor2 = new CreateButtons("gravestache2", "mbolt2");
    const mbolt2 = new CreateButtons("horts2", "mcon2");
    const mcon2 = new CreateButtons("marxbolt2", "mscope2");
    const mscope2 = new CreateButtons("mechacontrol2", "propackage2");
    const propackage2 = new CreateButtons("mechascope2", "rpackage2");
    const rpackage2 = new CreateButtons("professorpackage2", "syard2");
    const syard2 = new CreateButtons("raiserpackage2", "spl2");
    const spl2 = new CreateButtons("schoolyard2", "timpssb2");
    const timpssb2 = new CreateButtons("splimps2", "tmech2");
    const tmech2 = new CreateButtons("telimpssb2", "vster2");
    const vster2 = new CreateButtons("trickmech2", "ladderzhelp");
    const memezrow = new CreateButtons("zmoss2", "sav2");
    const sav2 = new CreateButtons("helpzmeme", "agor2");
    const agor2 = new CreateButtons("savage2", "bhammer2");
    const bhammer2 = new CreateButtons("antiagor2", "bas2");
    const bas2 = new CreateButtons("banhammer2", "bducks2");
    const bducks2 = new CreateButtons("bastet2", "bif2");
    const cog2 = new CreateButtons("bonusducks2", "cbait2");
    const cbait2 = new CreateButtons("coggerazzi2", "cleap2");
    const cleap2 = new CreateButtons("congabait2", "dmech2");
    const dmech2 = new CreateButtons("conjureleap2", "flo2");
    const flo2 = new CreateButtons("dozzamech2", "ftimps2");
    const ftimps2 = new CreateButtons("floss2", "gtech2");
    const gtech2 = new CreateButtons("frozentelimps2", "hter2");
    const hter2 = new CreateButtons("gargolithtech2", "hgargs2");
    const hgargs2 = new CreateButtons("himpter2", "igbc2");
    const igbc2 = new CreateButtons("huntgargs2", "lt2");
    const lt2 = new CreateButtons("igmablobchum2", "ltime2");
    const ltime2 = new CreateButtons("ladytuna2", "npa2");
    const npa2 = new CreateButtons("lunchtime2", "pfeast2");
    const pfeast2 = new CreateButtons("noplayingallowed2", "pmop2");
    const pmop2 = new CreateButtons("pbfeast2", "otksw2");
    const otksw2 = new CreateButtons("petmop2", "rticia2");
    const rticia2 = new CreateButtons("otkswabbie2", "sticia2");
    const sbandits2 = new CreateButtons("rampticia2", "slord2");
    const slord2 = new CreateButtons("sunbandits2", "terrifyster2");
    const terrifyster2 = new CreateButtons("sunlord2", "umech2");
    const umech2 = new CreateButtons("terrifytricksterazzi2", "wsports2");
    const wsports2 = new CreateButtons("uncrackamech2", "wph2");
    const wph2 = new CreateButtons("watersports2", "yemartin2");
    const yemartin2 = new CreateButtons("whalepharaoh2", "ykmartin2");
    const ykmartin2 = new CreateButtons("youngeggmartin2", "zm2");
    const zm2 = new CreateButtons("youngkenmartin2", "memezhelp");
    const aggrozrow = new CreateButtons("trickmech3", "agr3");
    const agr3 = new CreateButtons("helpzaggro", "bbf3");
    const bbf3 = new CreateButtons("agraves3", "beb3");
    const beb3 = new CreateButtons("budgetbf3", "bif3");
    const bif3 = new CreateButtons("budgeteb3", "bnt3");
    const bnt3 = new CreateButtons("budgetif3", "bsm3");
    const bsm3 = new CreateButtons("budgetnt3", "bzm3");
    const bzm3 = new CreateButtons("budgetsm3", "dmech3");
    const dmech3 = new CreateButtons("budgetzm3", "gps3");
    const gps3 = new CreateButtons("dozzamech3", "mbolt3");
    const mbolt3 = new CreateButtons("gravepiratestache3", "syard3");
    const syard3 = new CreateButtons("marxbolt3", "sea3");
    const sea3 = new CreateButtons("schoolyard3", "spl3");
    const spl3 = new CreateButtons("seacret3", "tmech3");
    const tmech3 = new CreateButtons("splimps3", "aggrozhelp");
    const combozrow = new CreateButtons("zmoss3", "sav3");
    const sav3 = new CreateButtons("helpzcombo", "agor3");
    const agor3 = new CreateButtons("savage3", "bhammer3");
    const bhammer3 = new CreateButtons("antiagor3", "bas3");
    const bas3 = new CreateButtons("banhammer3", "bfw3");
    const bfw3 = new CreateButtons("bastet3", "bbolt3");
    const bbolt3 = new CreateButtons("binaryflagwar3", "bducks3");
    const bducks3 = new CreateButtons("boltbolt3", "bim3");
    const bim3 = new CreateButtons("bonusducks3", "bnt4");
    const bnt4 = new CreateButtons("budgetim3", "bpb3");
    const bpb3 = new CreateButtons("budgetnt4", "bsm4");
    const bsm4 = new CreateButtons("budgetpb3", "bykm3");
    const bykm3 = new CreateButtons("budgetsm4", "bzm4");
    const bzm4 = new CreateButtons("budgetykm3", "bust3");
    const bust3 = new CreateButtons("budgetykm3", "cog3");
    const cog3 = new CreateButtons("bustbolt3", "cbait3");
    const cbait3 = new CreateButtons("coggerazzi3", "cboy3");
    const cboy3 = new CreateButtons("congabait3", "flo3");
    const flo3 = new CreateButtons("cryoboy3", "ftimps3");
    const ftimps3 = new CreateButtons("floss3", "gps4");
    const gps4 = new CreateButtons("frozentelimps3", "gburn3");
    const gburn3 = new CreateButtons("gravepiratestache4", "gstache3");
    const gstache3 = new CreateButtons("gargburn3", "hter3");
    const hter3 = new CreateButtons("gravestache3", "hor3");
    const hor3 = new CreateButtons("himpter3", "igbc3");
    const igbc3 = new CreateButtons("horts3", "mscope3");
    const mscope3 = new CreateButtons("igmablobchum3", "otksw3");
    const otksw3 = new CreateButtons("mechascope3", "pyeeyz3");
    const pyeeyz3 = new CreateButtons("otkswabbie3", "rticia3");
    const rticia3 = new CreateButtons("pablosyeezys3", "stars3");
    const stars3 = new CreateButtons("rampticia3", "sbandits3");
    const sbandits3 = new CreateButtons("spacestars3", "slord3");
    const slord3 = new CreateButtons("sunbandits3", "timps3");
    const timps3 = new CreateButtons("sunlord3", "timpssb3");
    const timpssb3 = new CreateButtons("telimps3", "terrifyster3");
    const terrifyster3 = new CreateButtons("telimpssb3", "tstache3");
    const tstache3 = new CreateButtons("terrifytricksterazzi3", "umech3");
    const umech3 = new CreateButtons("trickstache3", "vster3");
    const vster3 = new CreateButtons("uncrackamech3", "wsports3");
    const wsports3 = new CreateButtons("valkster3", "wph3");
    const wph3 = new CreateButtons("watersports3", "yemartin3");
    const yemartin3 = new CreateButtons("whalepharaoh3", "ykmartin3");
    const ykmartin3 = new CreateButtons("youngeggmartin3", "zm3");
    const zm3 = new CreateButtons("youngkenmartin3", "combozhelp");
    const controlzrow = new CreateButtons("whalepharaoh3", "bfpc3");
    const bfpc3 = new CreateButtons("helpzcontrol", "bducks4");
    const bducks4 = new CreateButtons("bfplankcontrol3", "bim4");
    const bim4 = new CreateButtons("bonusducks4", "bust4");
    const bust4 = new CreateButtons("budgetim4", "ftimps4");
    const ftimps4 = new CreateButtons("bustbolt4", "hgargs3");
    const hgargs3 = new CreateButtons("frozentelimps4", "kscope3");
    const kscope3 = new CreateButtons("frozentelimps4", "mcon3");
    const mcon3 = new CreateButtons("kaleidoscope3", "mscope4");
    const mscope4 = new CreateButtons("mechacontrol3", "npa3");
    const npa3 = new CreateButtons("mechascope4", "pfeast3");
    const pfeast3 = new CreateButtons("noplayingallowed3", "sbandits4");
    const sbandits4 = new CreateButtons("pbfeast3", "timps4");
    const timps4 = new CreateButtons("sunbandits4", "timpssb4");
    const timpssb4 = new CreateButtons("telimps4", "ubolt3");
    const ubolt3 = new CreateButtons("telimpssb4", "umech4");
    const umech4 = new CreateButtons("uncrackabolt3", "wph4");
    const wph4 = new CreateButtons("uncrackamech4", "controlzhelp");
    const midrangezrow = new CreateButtons("youngkenmartin4", "sav4");
    const sav4 = new CreateButtons("helpzmid", "bhammer4");
    const bhammer4 = new CreateButtons("savage4", "bas4");
    const bas4 = new CreateButtons("banhammer4", "bfmg3");
    const bfmg3 = new CreateButtons("bastet4", "bfw4");
    const bfw4 = new CreateButtons("bfmidgargs3", "brb3");
    const brb3 = new CreateButtons("binaryflagwar4", "bsb3");
    const bsb3 = new CreateButtons("budgetrb3", "bbolt4");
    const bbolt4 = new CreateButtons("budgetsb3", "bykm4");
    const bykm4 = new CreateButtons("boltbolt4", "cbait4");
    const cbait4 = new CreateButtons("budgetykm4", "cboy4");
    const cboy4 = new CreateButtons("congabait4", "gburn4");
    const gburn4 = new CreateButtons("cryoboy4", "gtech3");
    const gtech3 = new CreateButtons("gargburn4", "gstar223");
    const gstar223 = new CreateButtons("gargolithtech3", "gom3");
    const gom3 = new CreateButtons("gargstar223", "hter4");
    const hter4 = new CreateButtons("gomorrah3", "hor4");
    const hor4 = new CreateButtons("himpter4", "ibox3");
    const ibox3 = new CreateButtons("horts4", "igbc4");
    const igbc4 = new CreateButtons("icebox3", "lt3");
    const lt3 = new CreateButtons("igmablobchum4", "ltime3");
    const ltime3 = new CreateButtons("ladytuna3", "pyeeyz4");
    const pyeeyz4 = new CreateButtons("lunchtime3", "pmop3");
    const pmop3 = new CreateButtons(" pablosyeezys4", "nhks3");
    const nhks3 = new CreateButtons("petmop3", "stars4");
    const stars4 = new CreateButtons("nohokaistars3", "slord4");
    const slord4 = new CreateButtons("spacestars4", "tstache4");
    const tstache4 = new CreateButtons("sunlord4", "vster4");
    const vster4 = new CreateButtons("trickstache4", "wsports4");
    const wsports4 = new CreateButtons("valkster4", "ykmartin4");
    const ykmartin4 = new CreateButtons("watersports4", "midzhelp");
    const tempozrow = new CreateButtons("terrifytricksterazzi4", "brad3");
    const brad3 = new CreateButtons("helpztempo", "cog4");
    const cog4 = new CreateButtons("brady3", "cleap3");
    const cleap3 = new CreateButtons("coggerazzi4", "ltbr3");
    const ltbr3 = new CreateButtons("conjureleap3", "propackage3");
    const propackage3 = new CreateButtons("lockthebathroom3", "rpackage3");
    const rpackage3 = new CreateButtons("professorpackage3", "terrifyster4");
    const terrifyster4 = new CreateButtons("raiserpackage3", "tempozhelp");
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
    const allpdecksEmbed = new CreatePlantHelpEmbed(
      "All Plant Decks",
      `My plant decks are ${toBuildPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the plant decks or ping tbot with one of the decknames above to see a specific plant deck
Note: there are ${plantDecks.allDecks.length} plant decks in the database`
    );
    const budgetpdecksEmbed = new CreatePlantHelpEmbed(
      "Budget Plant Decks",
      `My budget plant decks are ${toBuildBudgetPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the budget plant decks or ping tbot with one of the decknames above to see a specific budget plant deck
Note: there are ${plantDecks.budgetDecks.length} budget plant decks in the database`
    );
    const comppdecksEmbed = new CreatePlantHelpEmbed(
      "Competitive Plant Decks",
      `My competitive plant decks are ${toBuildCompPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the competitive plant decks or ping tbot with one of the decknames above to see a specific competitive plant deck
Note: there are ${plantDecks.competitiveDecks.length} competitive plant decks in the database`
    );
    const ladderpdecksEmbed = new CreatePlantHelpEmbed(
      "Ladder Plant Decks",
      `My ladder plant decks are ${toBuildLadderPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the ladder plant decks or ping tbot with one of the decknames above to see a specific ladder plant deck
Note: there are ${plantDecks.ladderDecks.length} ladder plant decks in the database`
    );
    const memepdecksEmbed = new CreatePlantHelpEmbed(
      "Meme Plant Decks",
      `My meme plant decks are ${toBuildMemePString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the meme plant decks or ping tbot with one of the decknames above to see a specific meme plant deck
Note: there are ${plantDecks.memeDecks.length} meme plant decks in the database`
    );
    const aggropdecksEmbed = new CreatePlantHelpEmbed(
      "Aggro Plant Decks",
      `My aggro plant decks are ${toBuildAggroPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the aggro plant decks or ping tbot with one of the decknames above to see a specific aggro plant deck
Note: there are ${plantDecks.aggroDecks.length} aggro plant decks in the database`
    );
    const combopdecksEmbed = new CreatePlantHelpEmbed(
      "Combo Plant Decks",
      `My combo plant decks are ${toBuildComboPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the combo plant decks or ping tbot with one of the decknames above to see a specific combo plant deck
Note: there are ${plantDecks.comboDecks.length} combo plant decks in the database`
    );
    const controlpdecksEmbed = new CreatePlantHelpEmbed(
      "Control Plant Decks",
      `My control plant decks are ${toBuildControlPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the control plant decks or use the commands above to see a specific control plant deck
Note: there are ${plantDecks.controlDecks.length} control plant decks in the database`
    );
    const midrangepdecksEmbed = new CreatePlantHelpEmbed(
      "Midrange Plant Decks",
      `My midrange plant decks are ${toBuildMidrangePString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the midrange plant decks or use the commands above to see a specific midrange plant deck
Note: there are ${plantDecks.midrangeDecks.length} midrange plant decks in the database`
    );
    const tempopdecksEmbed = new CreatePlantHelpEmbed(
      "Tempo Plant Decks",
      `My tempo plant decks are ${toBuildTempoPString}`,
      "https://media.discordapp.net/attachments/1152624944262414436/1356024336313614448/allplants.webp?ex=67eb0f93&is=67e9be13&hm=9fc04fef1acefae03b1cc550c7ec882da5adf4096a1d246edfc90c2b2a3c7af4&=&format=webp",
      `Click the buttons below to navigate through all the tempo plant decks or use the commands above to see a specific tempo plant deck
Note: there are ${plantDecks.tempoDecks.length} tempo plant decks in the database`
    );
    const allzdecksEmbed = new CreateZombieHelpEmbed(
      "All Zombie Decks",
      `My zombie decks are ${toBuildZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the zombie decks or use the commands above to see a specific zombie deck(PS: ping Tbot with deckname to see specific decks!)
Note: there are ${zombieDecks.allDecks.length} zombie decks in the database`
    );
    const budgetzdecksEmbed = new CreateZombieHelpEmbed(
      "Budget Zombie Decks",
      `My budget zombie decks are ${toBuildBudgetZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the budget zombie decks or use the commands above to see a specific budget zombie deck
Note: there are ${zombieDecks.budgetDecks.length} budget zombie decks in the database`
    );
    const compzdecksEmbed = new CreateZombieHelpEmbed(
      "Competitive Zombie Decks",
      `My competitive zombie decks are ${toBuildCompZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the competitive zombie decks or use the commands above to see a specific competitive zombie deck
Note: there are ${zombieDecks.competitiveDecks.length} competitive zombie decks in the database`
    );
    const ladderzdecksEmbed = new CreateZombieHelpEmbed(
      "Ladder Zombie Decks",
      `My ladder zombie decks are ${toBuildLadderZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the ladder zombie decks or use the commands above to see a specific ladder zombie deck
Note: there are ${zombieDecks.ladderDecks.length} ladder zombie decks in the database`
    );
    const memezdecksEmbed = new CreateZombieHelpEmbed(
      "Meme Zombie Decks",
      `My meme zombie decks are ${toBuildMemeZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the meme zombie decks or use the commands above to see a specific meme zombie deck
Note: there are ${zombieDecks.memeDecks.length} meme zombie decks in the database`
    );
    const aggrozdecksEmbed = new CreateZombieHelpEmbed(
      "Aggro Zombie Decks",
      `My aggro zombie decks are ${toBuildAggroZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the aggro zombie decks or use the commands above to see a specific aggro zombie deck
Note: there are ${zombieDecks.aggroDecks.length} aggro zombie decks in the database`
    );
    const combozdecksEmbed = new CreateZombieHelpEmbed(
      "Combo Zombie Decks",
      `My combo zombie decks are ${toBuildComboZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the combo zombie decks or use the commands above to see a specific combo zombie deck
Note: there are ${zombieDecks.comboDecks.length} combo zombie decks in the database`
    );
    const controlzdecksEmbed = new CreateZombieHelpEmbed(
      "Control Zombie Decks",
      `My control zombie decks are ${toBuildControlZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the control zombie decks or use the commands above to see a specific control zombie deck
Note: there are ${zombieDecks.controlDecks.length} control zombie decks in the database`
    );
    const midrangezdecksEmbed = new CreateZombieHelpEmbed(
      "Midrange Zombie Decks",
      `My midrange zombie decks are ${toBuildMidrangeZString}`,
      "https://media.discordapp.net/attachments/1044626284346605588/1358181176644337664/zombieheroes.jpg?ex=67f2e84a&is=67f196ca&hm=1998b9baa5733c6b6e3ce7366675a4789b8e8fe1b6ed33b47ffa5a21ac0da800&=&format=webp",
      `Click the buttons below to navigate through all the midrange zombie decks or use the commands above to see a specific midrange zombie deck
Note: there are ${zombieDecks.midrangeDecks.length} midrange zombie decks in the database`
    );
    const tempozdecksEmbed = new CreateZombieHelpEmbed(
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
    function CreatePlantDeckEmbed(result, deckName) {
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
    const carroot = new CreatePlantDeckEmbed(result, "carroot");
    const shamcontrolbc = new CreatePlantDeckEmbed(result, "shamcontrol");
    const budgetct = new CreatePlantDeckEmbed(result, "budgetct");
    const going3nuts = new CreatePlantDeckEmbed(result, "going3nuts");
    const startron = new CreatePlantDeckEmbed(result, "startron");
    const watertron = new CreatePlantDeckEmbed(result, "watertron");
    const budgetcc = new CreatePlantDeckEmbed(result, "budgetcc");
    const lifecouldbedream = new CreatePlantDeckEmbed(result, "lcbd");
    const logbait = new CreatePlantDeckEmbed(result, "logbait");
    const mspotk = new CreatePlantDeckEmbed(result, "mspotk");
    const plantmop = new CreatePlantDeckEmbed(result, "plantmop");
    const reflourished = new CreatePlantDeckEmbed(result, "reflourished");
    const healcontrol = new CreatePlantDeckEmbed(result, "apotk");
    const budgetcz = new CreatePlantDeckEmbed(result, "budgetcz");
    const lasersnap = new CreatePlantDeckEmbed(result, "lasersnap");
    const midred = new CreatePlantDeckEmbed(result, "midred");
    const mopribus = new CreatePlantDeckEmbed(result, "mopribus");
    const budgetgk = new CreatePlantDeckEmbed(result, "budgetgk");
    const dinogloves = new CreatePlantDeckEmbed(result, "dinogloves");
    const healthotk = new CreatePlantDeckEmbed(result, "healthotk");
    const pawntrickstab = new CreatePlantDeckEmbed(result, "pawntrickstab");
    const winrate100 = new CreatePlantDeckEmbed(result, "wr100");
    const abeans = new CreatePlantDeckEmbed(result, "abeans");
    const budgetgs = new CreatePlantDeckEmbed(result, "budgetgs");
    const pbeans = new CreatePlantDeckEmbed(result, "pbeans");
    const savagemayflower = new CreatePlantDeckEmbed(result, "savagemayflower");
    const starrings = new CreatePlantDeckEmbed(result, "sovietonion");
    const budgetnc = new CreatePlantDeckEmbed(result, "budgetnc");
    const cyburn = new CreatePlantDeckEmbed(result, "cyburn");
    const toyotacontrolla = new CreatePlantDeckEmbed(result, "toyotacontrolla");
    const translattail = new CreatePlantDeckEmbed(result, "translattail");
    const budgetro = new CreatePlantDeckEmbed(result, "budgetro");
    const freezeheal = new CreatePlantDeckEmbed(result, "freezeheal");
    const frymidrose = new CreatePlantDeckEmbed(result, "frymidrose");
    const healmidrose = new CreatePlantDeckEmbed(result, "hmr");
    const budgetsf = new CreatePlantDeckEmbed(result, "budgetswarmsf");
    const funnyflare = new CreatePlantDeckEmbed(result, "funnyflare");
    const healburn = new CreatePlantDeckEmbed(result, "healburn");
    const figlottery = new CreatePlantDeckEmbed(result, "healmidflare");
    const psychosolstice = new CreatePlantDeckEmbed(result, "psychosolstice");
    const ramp2seedling = new CreatePlantDeckEmbed(result, "ramp2seedling");
    const budgetsp = new CreatePlantDeckEmbed(result, "budgetburstsp");
    const nuttin = new CreatePlantDeckEmbed(result, "nutting");
    const radiotherapy = new CreatePlantDeckEmbed(result, "radiotherapy");
    const popsicle = new CreatePlantDeckEmbed(result, "popsicle");
    const budgetwk = new CreatePlantDeckEmbed(result, "budgetwkmidheal");
    const cancerknight = new CreatePlantDeckEmbed(result, "cancerknight");
    const chemotherapy = new CreatePlantDeckEmbed(result, "chemotherapy");
    const highlander = new CreatePlantDeckEmbed(result, "highlander");
    const shitknight = new CreatePlantDeckEmbed(result, "shitknight");
    /**
     * The CreateZombieDeckEmbed function creates an embed for a zombie deck.
     * @param {*} result - The result object containing deck information. 
     * @param {string} deckName - The name of the deck to create an embed for. 
     * @returns {EmbedBuilder} - The created embed for the zombie deck.
     */
    function CreateZombieDeckEmbed(result, deckName) {
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
    const bfmidgargs = new CreateZombieDeckEmbed(result, "bfmidgargs");
    const bfplankcontrol = new CreateZombieDeckEmbed(result, "bfplankcontrol");
    const budgetbf = new CreateZombieDeckEmbed(result, "budgetbf");
    const gargolithtech = new CreateZombieDeckEmbed(result, "gargolithtech");
    const himps = new CreateZombieDeckEmbed(result, "himps");
    const lockthebathroom = new CreateZombieDeckEmbed(result, "lockin");
    const lunchtime = new CreateZombieDeckEmbed(result, "midpets");
    const petmop = new CreateZombieDeckEmbed(result, "petmop");
    const banhammer = new CreateZombieDeckEmbed(result, "racism");
    const raiserpackage = new CreateZombieDeckEmbed(result, "raiserpackage");
    const watersports = new CreateZombieDeckEmbed(result, "watersports");
    const budgeteb = new CreateZombieDeckEmbed(result, "budgetburn");
    const gargstar22 = new CreateZombieDeckEmbed(result, "gargstar22");
    const huntgargs = new CreateZombieDeckEmbed(result, "huntgargs");
    const noplayingallowed = new CreateZombieDeckEmbed(
      result,
      "noplayingallowed"
    );
    const seacret = new CreateZombieDeckEmbed(result, "seacret");
    const budgetsb = new CreateZombieDeckEmbed(result, "budgetsb");
    const telimpssb = new CreateZombieDeckEmbed(result, "telimpssb");
    const budgetykm = new CreateZombieDeckEmbed(result, "budgetykm");
    const conjureleap = new CreateZombieDeckEmbed(result, "conjureleap");
    const cryoboy = new CreateZombieDeckEmbed(result, "cyroboy");
    const frozentelimps = new CreateZombieDeckEmbed(result, "frozentelimps");
    const gravepiratestache = new CreateZombieDeckEmbed(result, "gps");
    const gravestache = new CreateZombieDeckEmbed(result, "gravestache");
    const otkswabbie = new CreateZombieDeckEmbed(result, "otkswabbie");
    const telimps = new CreateZombieDeckEmbed(result, "telimps");
    const youngkenmartin = new CreateZombieDeckEmbed(result, "ykm");
    const budgetif = new CreateZombieDeckEmbed(result, "budgetif");
    const nohokaistars = new CreateZombieDeckEmbed(result, "nohokaistars");
    const spacestars = new CreateZombieDeckEmbed(result, "spacestars");
    const splimps = new CreateZombieDeckEmbed(result, "splimps");
    const savage22 = new CreateZombieDeckEmbed(result, "savage22");
    const bastet = new CreateZombieDeckEmbed(result, "bastet");
    const budgetim = new CreateZombieDeckEmbed(result, "budgetim");
    const mechascope = new CreateZombieDeckEmbed(result, "otkmecha");
    const kaleidoscope = new CreateZombieDeckEmbed(result, "otktrickster");
    const rampticia = new CreateZombieDeckEmbed(result, "rampticia");
    const agraves = new CreateZombieDeckEmbed(result, "agraves");
    const antiagor = new CreateZombieDeckEmbed(result, "antiagor");
    const budgetnt = new CreateZombieDeckEmbed(result, "budgetnt");
    const floss = new CreateZombieDeckEmbed(result, "floss");
    const gomorrah = new CreateZombieDeckEmbed(result, "gomorrah");
    const icebox = new CreateZombieDeckEmbed(result, "icebox");
    const ladytuna = new CreateZombieDeckEmbed(result, "ladytuna");
    const schoolyard = new CreateZombieDeckEmbed(result, "schoolyard");
    const sunlord = new CreateZombieDeckEmbed(result, "wimps");
    const bonusducks = new CreateZombieDeckEmbed(result, "bonusducks");
    const budgetpb = new CreateZombieDeckEmbed(result, "budgetpb");
    const congabait = new CreateZombieDeckEmbed(result, "congabait");
    const pbfeast = new CreateZombieDeckEmbed(result, "pbfeast");
    const professorpackage = new CreateZombieDeckEmbed(
      result,
      "professorpackage"
    );
    const trickstache = new CreateZombieDeckEmbed(result, "trickstache");
    const valkster = new CreateZombieDeckEmbed(result, "valkster");
    const youngeggmartin = new CreateZombieDeckEmbed(result, "youngeggmartin");
    const boltbolt = new CreateZombieDeckEmbed(result, "boltbolt");
    const budgetrb = new CreateZombieDeckEmbed(result, "budgetrb");
    const bustbolt = new CreateZombieDeckEmbed(result, "bustbolt");
    const igmablobchum = new CreateZombieDeckEmbed(result, "igmablobchum");
    const marxbolt = new CreateZombieDeckEmbed(result, "marxbolt");
    const mechacontrol = new CreateZombieDeckEmbed(result, "mechacontrol");
    const coggerazzi = new CreateZombieDeckEmbed(result, "poggerrazzi");
    const sunbandits = new CreateZombieDeckEmbed(result, "sunbandits");
    const terrifytricksterazzi = new CreateZombieDeckEmbed(
      result,
      "terrifytricksterazzi"
    );
    const uncrackabolt = new CreateZombieDeckEmbed(result, "uncrackabolt");
    const budgetsm = new CreateZombieDeckEmbed(result, "budgetsm");
    const horts = new CreateZombieDeckEmbed(result, "horts");
    const pablosyeezys = new CreateZombieDeckEmbed(result, "pablosyeezys");
    const whalepharaoh = new CreateZombieDeckEmbed(result, "whalepharaoh");
    const binaryflagwar = new CreateZombieDeckEmbed(result, "binaryflagwar");
    const brady = new CreateZombieDeckEmbed(result, "brady");
    const budgetzm = new CreateZombieDeckEmbed(result, "budgetzm");
    const dozzamech = new CreateZombieDeckEmbed(result, "dozzamech");
    const uncrackamech = new CreateZombieDeckEmbed(result, "feastmech");
    const gargburn = new CreateZombieDeckEmbed(result, "gargburn");
    const trickmech = new CreateZombieDeckEmbed(result, "trickmech");
    const zmoss = new CreateZombieDeckEmbed(result, "zmoss");
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
        ab: { embed: abeans, component: ab },
        abeans: { embed: abeans, component: ab },
        ab2: { embed: abeans, component: ab2 },
        abeans2: { embed: abeans, component: ab2 },
        ab3: { embed: abeans, component: ab3 },
        abeans3: { embed: abeans, component: ab3 },
        healcon: { embed: healcontrol, component: healcon },
        healcontrol: { embed: healcontrol, component: healcon },
        healcon2: { embed: healcontrol, component: healcon2 },
        healcontrol2: { embed: healcontrol, component: healcon2 },
        healcon3: { embed: healcontrol, component: healcon3 },
        healcontrol3: { embed: healcontrol, component: healcon3 },
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
        cank: { embed: cancerknight, component: cank },
        cancerknight: { embed: cancerknight, component: cank },
        cank2: { embed: cancerknight, component: cank2 },
        cancerknight2: { embed: cancerknight, component: cank2 },
        cank3: { embed: cancerknight, component: cank3 },
        cancerknight3: { embed: cancerknight, component: cank3 },
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
        flottery: { embed: figlottery, component: flottery },
        figlottery: { embed: figlottery, component: flottery },
        flottery2: { embed: figlottery, component: flottery2 },
        figlottery2: { embed: figlottery, component: flottery2 },
        flottery3: { embed: figlottery, component: flottery3 },
        figlottery3: { embed: figlottery, component: flottery3 },
        fheal: { embed: freezeheal, component: fheal },
        freezeheal: { embed: freezeheal, component: fheal },
        fheal2: { embed: freezeheal, component: fheal2 },
        freezeheal2: { embed: freezeheal, component: fheal2 },
        fheal3: { embed: freezeheal, component: fheal3 },
        freezeheal3: { embed: freezeheal, component: fheal3 },
        frymid: { embed: frymidrose, component: fmr },
        frymidrose: { embed: frymidrose, component: fmr },
        frymid2: { embed: frymidrose, component: fmr2 },
        frymidrose2: { embed: frymidrose, component: fmr2 },
        frymid3: { embed: frymidrose, component: fmr3 },
        frymidrose3: { embed: frymidrose, component: fmr3 },
        fflare: { embed: funnyflare, component: fflare },
        funnyflare: { embed: funnyflare, component: fflare },
        fflare2: { embed: funnyflare, component: fflare2 },
        funnyflare2: { embed: funnyflare, component: fflare2 },
        fflare3: { embed: funnyflare, component: fflare3 },
        funnyflare3: { embed: funnyflare, component: fflare3 },
        fflare4: { embed: funnyflare, component: fflare4 },
        funnyflare4: { embed: funnyflare, component: fflare4 },
        g3n: { embed: going3nuts, component: g3n },
        going3nuts: { embed: going3nuts, component: g3n },
        g3n2: { embed: going3nuts, component: g3n2 },
        going3nuts2: { embed: going3nuts, component: g3n2 },
        g3n3: { embed: going3nuts, component: g3n3 },
        going3nuts3: { embed: going3nuts, component: g3n3 },
        g3n4: { embed: going3nuts, component: g3n4 },
        going3nuts4: { embed: going3nuts, component: g3n4 },
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
        hland: { embed: highlander, component: hland },
        highlander: { embed: highlander, component: hland },
        hland2: { embed: highlander, component: hland2 },
        highlander2: { embed: highlander, component: hland2 },
        hland3: { embed: highlander, component: hland3 },
        highlander3: { embed: highlander, component: hland3 },
        lcbd: { embed: lifecouldbedream, component: lcbd },
        lifecouldbedream: { embed: lifecouldbedream, component: lcbd },
        lcbd2: { embed: lifecouldbedream, component: lcbd2 },
        lifecouldbedream2: { embed: lifecouldbedream, component: lcbd2 },
        lcbd3: { embed: lifecouldbedream, component: lcbd3 },
        lifecouldbedream3: { embed: lifecouldbedream, component: lcbd3 },
        mred: { embed: midred, component: mred },
        midred: { embed: midred, component: mred },
        mred2: { embed: midred, component: mred2 },
        midred2: { embed: midred, component: mred2 },
        mred3: { embed: midred, component: mred3 },
        midred3: { embed: midred, component: mred3 },
        mred4: { embed: midred, component: mred4 },
        midred4: { embed: midred, component: mred4 },
        mopr: { embed: mopribus, component: mopr },
        mopribus: { embed: mopribus, component: mopr },
        mopr2: { embed: mopribus, component: mopr2 },
        mopribus2: { embed: mopribus, component: mopr2 },
        mopr3: { embed: mopribus, component: mopr3 },
        mopribus3: { embed: mopribus, component: mopr3 },
        mopr4: { embed: mopribus, component: mopr4 },
        mopribus4: { embed: mopribus, component: mopr4 },
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
        r2s: { embed: ramp2seedling, component: r2s },
        ramp2seedling: { embed: ramp2seedling, component: r2s },
        r2s2: { embed: ramp2seedling, component: r2s2 },
        ramp2seedling2: { embed: ramp2seedling, component: r2s2 },
        r2s3: { embed: ramp2seedling, component: r2s3 },
        ramp2seedling3: { embed: ramp2seedling, component: r2s3 },
        r2s4: { embed: ramp2seedling, component: r2s4 },
        ramp2seedling4: { embed: ramp2seedling, component: r2s4 },
        smf: { embed: savagemayflower, component: smf },
        savagemayflower: { embed: savagemayflower, component: smf },
        smf2: { embed: savagemayflower, component: smf2 },
        savagemayflower2: { embed: savagemayflower, component: smf2 },
        smf3: { embed: savagemayflower, component: smf3 },
        savagemayflower3: { embed: savagemayflower, component: smf3 },
        shambc: { embed: shamcontrolbc, component: shambc },
        shamcontrolbc: { embed: shamcontrolbc, component: shambc },
        shambc2: { embed: shamcontrolbc, component: shambc2 },
        shamcontrolbc2: { embed: shamcontrolbc, component: shambc2 },
        shambc3: { embed: shamcontrolbc, component: shambc3 },
        shamcontrolbc3: { embed: shamcontrolbc, component: shambc3 },
        sknight: { embed: shitknight, component: sknight },
        shitknight: { embed: shitknight, component: sknight },
        sknight2: { embed: shitknight, component: sknight2 },
        shitknight2: { embed: shitknight, component: sknight2 },
        sknight3: { embed: shitknight, component: sknight3 },
        shitknight3: { embed: shitknight, component: sknight3 },
        srings: { embed: starrings, component: srings },
        starrings: { embed: starrings, component: srings },
        srings2: { embed: starrings, component: srings2 },
        starrings2: { embed: starrings, component: srings2 },
        srings3: { embed: starrings, component: srings3 },
        starrings3: { embed: starrings, component: srings3 },
        srings4: { embed: starrings, component: srings4 },
        starrings4: { embed: starrings, component: srings4 },
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
        tlattail: { embed: translattail, component: tlattail },
        translattail: { embed: translattail, component: tlattail },
        tlattail2: { embed: translattail, component: tlattail2 },
        translattail2: { embed: translattail, component: tlattail2 },
        tlattail3: { embed: translattail, component: tlattail3 },
        translattail3: { embed: translattail, component: tlattail3 },
        tlattail4: { embed: translattail, component: tlattail4 },
        translattail4: { embed: translattail, component: tlattail4 },
        wtron: { embed: watertron, component: wtron },
        watertron: { embed: watertron, component: wtron },
        wtron2: { embed: watertron, component: wtron2 },
        watertron2: { embed: watertron, component: wtron2 },
        wtron3: { embed: watertron, component: wtron3 },
        watertron3: { embed: watertron, component: wtron3 },
        agr: { embed: agraves, component: agr },
        agraves: { embed: agraves, component: agr },
        agr2: { embed: agraves, component: agr2 },
        agraves2: { embed: agraves, component: agr2 },
        agr3: { embed: agraves, component: agr3 },
        agraves3: { embed: agraves, component: agr3 },
        agor: { embed: antiagor, component: agor },
        antiagor: { embed: antiagor, component: agor },
        agor2: { embed: antiagor, component: agor2 },
        antiagor2: { embed: antiagor, component: agor2 },
        agor3: { embed: antiagor, component: agor3 },
        antiagor3: { embed: antiagor, component: agor3 },
        bfmg: { embed: bfmidgargs, component: bfmg },
        bfmidgargs: { embed: bfmidgargs, component: bfmg },
        bfmg2: { embed: bfmidgargs, component: bfmg2 },
        bfmidgargs2: { embed: bfmidgargs, component: bfmg2 },
        bfmg3: { embed: bfmidgargs, component: bfmg3 },
        bfmidgargs3: { embed: bfmidgargs, component: bfmg3 },
        bfpc: { embed: bfplankcontrol, component: bfpc },
        bfplankcontrol: { embed: bfplankcontrol, component: bfpc },
        bfpc2: { embed: bfplankcontrol, component: bfpc2 },
        bfplankcontrol2: { embed: bfplankcontrol, component: bfpc2 },
        bfpc3: { embed: bfplankcontrol, component: bfpc3 },
        bfplankcontrol3: { embed: bfplankcontrol, component: bfpc3 },
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
        bust: { embed: bustbolt, component: bust },
        bustbolt: { embed: bustbolt, component: bust },
        bust2: { embed: bustbolt, component: bust2 },
        bustbolt2: { embed: bustbolt, component: bust2 },
        bust3: { embed: bustbolt, component: bust3 },
        bustbolt3: { embed: bustbolt, component: bust3 },
        bust4: { embed: bustbolt, component: bust4 },
        bustbolt4: { embed: bustbolt, component: bust4 },
        cog: { embed: coggerazzi, component: cog },
        coggerazzi: { embed: coggerazzi, component: cog },
        cog2: { embed: coggerazzi, component: cog2 },
        coggerazzi2: { embed: coggerazzi, component: cog2 },
        cog3: { embed: coggerazzi, component: cog3 },
        coggerazzi3: { embed: coggerazzi, component: cog3 },
        cog4: { embed: coggerazzi, component: cog4 },
        coggerazzi4: { embed: coggerazzi, component: cog4 },
        cbait: { embed: congabait, component: cbait },
        congabait: { embed: congabait, component: cbait },
        cbait2: { embed: congabait, component: cbait2 },
        congabait2: { embed: congabait, component: cbait2 },
        cbait3: { embed: congabait, component: cbait3 },
        congabait3: { embed: congabait, component: cbait3 },
        cbait4: { embed: congabait, component: cbait4 },
        congabait4: { embed: congabait, component: cbait4 },
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
        gburn: { embed: gargburn, component: gburn },
        gargburn: { embed: gargburn, component: gburn },
        gburn2: { embed: gargburn, component: gburn2 },
        gargburn2: { embed: gargburn, component: gburn2 },
        gburn3: { embed: gargburn, component: gburn3 },
        gargburn3: { embed: gargburn, component: gburn3 },
        gburn4: { embed: gargburn, component: gburn4 },
        gargburn4: { embed: gargburn, component: gburn4 },
        gtech: { embed: gargolithtech, component: gtech },
        gargolithtech: { embed: gargolithtech, component: gtech },
        gtech2: { embed: gargolithtech, component: gtech2 },
        gargolithtech2: { embed: gargolithtech, component: gtech2 },
        gtech3: { embed: gargolithtech, component: gtech3 },
        gargolithtech3: { embed: gargolithtech, component: gtech3 },
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
        gstache: { embed: gravestache, component: gstache },
        gravestache: { embed: gravestache, component: gstache },
        gstache2: { embed: gravestache, component: gstache2 },
        gravestache2: { embed: gravestache, component: gstache2 },
        gstache3: { embed: gravestache, component: gstache3 },
        gravestache3: { embed: gravestache, component: gstache3 },
        hter: { embed: himps, component: hter },
        himpter: { embed: himps, component: hter },
        hter2: { embed: himps, component: hter2 },
        himpter2: { embed: himps, component: hter2 },
        hter3: { embed: himps, component: hter3 },
        himpter3: { embed: himps, component: hter3 },
        hter4: { embed: himps, component: hter4 },
        himpter4: { embed: himps, component: hter4 },
        hor: { embed: horts, component: hor },
        horts: { embed: horts, component: hor },
        hor2: { embed: horts, component: hor2 },
        horts2: { embed: horts, component: hor2 },
        hor3: { embed: horts, component: hor3 },
        horts3: { embed: horts, component: hor3 },
        hor4: { embed: horts, component: hor4 },
        horts4: { embed: horts, component: hor4 },
        ibox: { embed: icebox, component: ibox },
        icebox: { embed: icebox, component: ibox },
        ibox2: { embed: icebox, component: ibox2 },
        icebox2: { embed: icebox, component: ibox2 },
        ibox3: { embed: icebox, component: ibox3 },
        icebox3: { embed: icebox, component: ibox3 },
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
        otksw: { embed: otkswabbie, component: otksw },
        otkswabbie: { embed: otkswabbie, component: otksw },
        otksw2: { embed: otkswabbie, component: otksw2 },
        otkswabbie2: { embed: otkswabbie, component: otksw2 },
        otksw3: { embed: otkswabbie, component: otksw3 },
        otkswabbie3: { embed: otkswabbie, component: otksw3 },
        kscope: { embed: kaleidoscope, component: kscope },
        kaleidoscope: { embed: kaleidoscope, component: kscope },
        kscope2: { embed: kaleidoscope, component: kscope2 },
        kaleidoscope2: { embed: kaleidoscope, component: kscope2 },
        kscope3: { embed: kaleidoscope, component: kscope3 },
        kaleidoscope3: { embed: kaleidoscope, component: kscope3 },
        pyeeyz: { embed: pablosyeezys, component: pyeeyz },
        pablosyeezys: { embed: pablosyeezys, component: pyeeyz },
        pyeeyz2: { embed: pablosyeezys, component: pyeeyz2 },
        pablosyeezys2: { embed: pablosyeezys, component: pyeeyz2 },
        pyeeyz3: { embed: pablosyeezys, component: pyeeyz3 },
        pablosyeezys3: { embed: pablosyeezys, component: pyeeyz3 },
        pyeeyz4: { embed: pablosyeezys, component: pyeeyz4 },
        pablosyeezys4: { embed: pablosyeezys, component: pyeeyz4 },
        pfeast: { embed: pbfeast, component: pfeast },
        pbfeast: { embed: pbfeast, component: pfeast },
        pfeast2: { embed: pbfeast, component: pfeast2 },
        pbfeast2: { embed: pbfeast, component: pfeast2 },
        pfeast3: { embed: pbfeast, component: pfeast3 },
        pbfeast3: { embed: pbfeast, component: pfeast3 },
        pmop: { embed: petmop, component: pmop },
        petmop: { embed: petmop, component: pmop },
        pmop2: { embed: petmop, component: pmop2 },
        petmop2: { embed: petmop, component: pmop2 },
        pmop3: { embed: petmop, component: pmop3 },
        petmop3: { embed: petmop, component: pmop3 },
        propackage: { embed: professorpackage, component: propackage },
        professorpackage: { embed: professorpackage, component: propackage },
        propackage2: { embed: professorpackage, component: propackage2 },
        professorpackage2: { embed: professorpackage, component: propackage2 },
        propackage3: { embed: professorpackage, component: propackage3 },
        professorpackage3: { embed: professorpackage, component: propackage3 },
        bhammer: { embed: banhammer, component: bhammer },
        banhammer: { embed: banhammer, component: bhammer },
        bhammer2: { embed: banhammer, component: bhammer2 },
        banhammer2: { embed: banhammer, component: bhammer2 },
        bhammer3: { embed: banhammer, component: bhammer3 },
        banhammer3: { embed: banhammer, component: bhammer3 },
        bhammer4: { embed: banhammer, component: bhammer4 },
        banhammer4: { embed: banhammer, component: bhammer4 },
        rpackage: { embed: raiserpackage, component: rpackage },
        raiserpackage: { embed: raiserpackage, component: rpackage },
        rpackage2: { embed: raiserpackage, component: rpackage2 },
        raiserpackage2: { embed: raiserpackage, component: rpackage2 },
        rpackage3: { embed: raiserpackage, component: rpackage3 },
        raiserpackage3: { embed: raiserpackage, component: rpackage3 },
        rticia: { embed: rampticia, component: rticia },
        rampticia: { embed: rampticia, component: rticia },
        rticia2: { embed: rampticia, component: rticia2 },
        rampticia2: { embed: rampticia, component: rticia2 },
        rticia3: { embed: rampticia, component: rticia3 },
        rampticia3: { embed: rampticia, component: rticia3 },
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
        timpssb: { embed: telimpssb, component: timpssb },
        telimpssb: { embed: telimpssb, component: timpssb },
        timpssb2: { embed: telimpssb, component: timpssb2 },
        telimpssb2: { embed: telimpssb, component: timpssb2 },
        timpssb3: { embed: telimpssb, component: timpssb3 },
        telimpssb3: { embed: telimpssb, component: timpssb3 },
        timpssb4: { embed: telimpssb, component: timpssb4 },
        telimpssb4: { embed: telimpssb, component: timpssb4 },
        terrifyster: { embed: terrifytricksterazzi, component: terrifyster },
        terrifytricksterazzi: {
          embed: terrifytricksterazzi,
          component: terrifyster,
        },
        terrifyster2: { embed: terrifytricksterazzi, component: terrifyster2 },
        terrifytricksterazzi2: {
          embed: terrifytricksterazzi,
          component: terrifyster2,
        },
        terrifyster3: { embed: terrifytricksterazzi, component: terrifyster3 },
        terrifytricksterazzi3: {
          embed: terrifytricksterazzi,
          component: terrifyster3,
        },
        terrifyster4: { embed: terrifytricksterazzi, component: terrifyster4 },
        terrifytricksterazzi4: {
          embed: terrifytricksterazzi,
          component: terrifyster4,
        },
        tstache: { embed: trickstache, component: tstache },
        trickstache: { embed: trickstache, component: tstache },
        tstache2: { embed: trickstache, component: tstache2 },
        trickstache2: { embed: trickstache, component: tstache2 },
        tstache3: { embed: trickstache, component: tstache3 },
        trickstache3: { embed: trickstache, component: tstache3 },
        tstache4: { embed: trickstache, component: tstache4 },
        trickstache4: { embed: trickstache, component: tstache4 },
        ubolt: { embed: uncrackabolt, component: ubolt },
        uncrackabolt: { embed: uncrackabolt, component: ubolt },
        ubolt2: { embed: uncrackabolt, component: ubolt2 },
        uncrackabolt2: { embed: uncrackabolt, component: ubolt2 },
        ubolt3: { embed: uncrackabolt, component: ubolt3 },
        uncrackabolt3: { embed: uncrackabolt, component: ubolt3 },
        umech: { embed: uncrackamech, component: umech },
        uncrackamech: { embed: uncrackamech, component: umech },
        umech2: { embed: uncrackamech, component: umech2 },
        uncrackamech2: { embed: uncrackamech, component: umech2 },
        umech3: { embed: uncrackamech, component: umech3 },
        uncrackamech3: { embed: uncrackamech, component: umech3 },
        umech4: { embed: uncrackamech, component: umech4 },
        uncrackamech4: { embed: uncrackamech, component: umech4 },
        vster: { embed: valkster, component: vster },
        valkster: { embed: valkster, component: vster },
        vster2: { embed: valkster, component: vster2 },
        valkster2: { embed: valkster, component: vster2 },
        vster3: { embed: valkster, component: vster3 },
        valkster3: { embed: valkster, component: vster3 },
        vster4: { embed: valkster, component: vster4 },
        valkster4: { embed: valkster, component: vster4 },
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
        dgloves: { embed: dinogloves, component: dgloves },
        dinogloves: { embed: dinogloves, component: dgloves },
        dgloves2: { embed: dinogloves, component: dgloves2 },
        dinogloves2: { embed: dinogloves, component: dgloves2 },
        dgloves3: { embed: dinogloves, component: dgloves3 },
        dinogloves3: { embed: dinogloves, component: dgloves3 },
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
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Invalid button action", flags: MessageFlags.Ephemeral });
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