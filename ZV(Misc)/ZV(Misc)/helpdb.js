const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const db = require("../../index.js");
const { resourceLimits } = require("worker_threads");
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
        "pawntrickstab",
        "radiotherapy",
        "reflourished",
        "shamcontrolbc",
        "toyotacontrolla",
        "watertron",
      ],
      ladderDecks: [
        "carroot",
        "ejection",
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
        "savagemayflower",
        "shitknight",
        "starrings",
        "startron",
        "translattail",
      ],
      aggroDecks: ["abeans", "dinogloves", "pbeans", "watertron"],
      comboDecks: [
        "budgetcc",
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
        "savagemayflower",
        "starrings",
        "startron",
        "translattail",
      ],
      controlDecks: [
        "cancerknight",
        "chemotherapy",
        "ejection",
        "healcontrol",
        "pawntrickstab",
        "popsicle",
        "radiotherapy",
        "shamcontrolbc",
        "shitknight",
        "toyotacontrolla",
      ],
      midrangeDecks: [
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
        "reflourished",
        "starrings",
        "startron",
      ],
      tempoDecks: [
        "100%winrate",
        "budgetct",
        "budgetcz",
        "budgetgk",
        "budgetgs",
        "budgetro",
        "budgetsf",
        "budgetsp",
        "budgetwk",
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
        "ejection",
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
        "pablosyeeyzs",
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
        "hibird",
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
        "youngcatmartin",
      ],
      memeDecks: [
        "22savage",
        "antiagor",
        "antiagoragor",
        "bastet",
        "coggerazzi",
        "congabait",
        "conjureleap",
        "dozzamech",
        "floss",
        "frozentelimps",
        "gargolithtech",
        "himpter",
        "homophobia",
        "huntgargs",
        "igmablobchum",
        "ladytuna",
        "lunchtime",
        "noplayingallowed",
        "pbfeast",
        "petmop",
        "otkswabbie",
        "racism",
        "rampticia",
        "slavery",
        "sunbandits",
        "sunlord",
        "stacheticia",
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
        "budgetrb",
        "budgetzm",
        "dozzamech",
        "gravepiratestache",
        "homophobia",
        "marxbolt",
        "schoolyard",
        "seacret",
        "slavery",
        "splimps",
        "trickmech",
      ],
      comboDecks: [
        "antiagor",
        "antiagoragor",
        "bastet",
        "binaryflagwar",
        "boltbolt",
        "bonusducks",
        "budgetpb",
        "budgetykm",
        "bustbolt",
        "coggerazzi",
        "congabait",
        "cryoboy",
        "floss",
        "frozentelimps",
        "gargburn",
        "gravepiratestache",
        "gravestache",
        "hibird",
        "himpter",
        "horts",
        "igmablobchum",
        "mechascope",
        "otkswabbie",
        "pablosyeeyzs",
        "rampticia",
        "spacestars",
        "stacheticia",
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
        "youngcatmartin",
        "youngeggmartin",
        "youngkenmartin",
        "zmoss",
      ],
      controlDecks: [
        "antiagoragor",
        "bfplankcontrol",
        "bonusducks",
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
        "bastet",
        "bfmidgargs",
        "binaryflagwar",
        "boltbolt",
        "budgetim",
        "budgetykm",
        "congabait",
        "cryoboy",
        "gargburn",
        "gargolithtech",
        "gargstar22",
        "gomorrah",
        "hibird",
        "himpter",
        "horts",
        "icebox",
        "igmablobchum",
        "ladytuna",
        "lunchtime",
        "pablosyeeyzs",
        "petmop",
        "nohokaistars",
        "spacestars",
        "sunlord",
        "trickstache",
        "valkster",
        "watersports",
        "youngcatmartin",
        "youngkenmartin",
      ],
      tempoDecks: [
        "brady",
        "budgetim",
        "budgetnt",
        "budgetsm",
        "budgetsb",
        "coggerazzi",
        "conjureleap",
        "lockthebathroom",
        "professorpackage",
        "racism",
        "raiserpackage",
        "terrifytricksterazzi",
      ],
      allDecks: [
        "22savage",
        "agraves",
        "antiagor",
        "antiagoragor",
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
        "hibird",
        "himpter",
        "homophobia",
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
        "pablosyeeyzs",
        "pbfeast",
        "petmop",
        "professorpackage",
        "racism",
        "raiserpackage",
        "rampticia",
        "schoolyard",
        "seacret",
        "slavery",
        "spacestars",
        "splimps",
        "stacheticia",
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
        "youngcatmartin",
        "youngeggmartin",
        "youngkenmartin",
        "zmoss",
      ],
    };
    /**
     *
     * @param {Array} decks an array of deck names
     * @returns {string} a string of all the deck names combined for the embed
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
     *
     * @param {string} leftButtonId the id of the left button to move back to the previous deck
     * @param {*} rightButtonId the id of the right button to move to the next deck
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
    const dgloves = new CreateButtons("cyburn", "eject");
    const eject = new CreateButtons("dinogloves", "flottery");
    const flottery = new CreateButtons("ejection", "fheal");
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
    const lcbd = new CreateButtons("lasersnap", "mred");
    const mred = new CreateButtons("lifecouldbedream", "mopr");
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
    const hmr2 = new CreateButtons("healcontrol2", "pts2");
    const pts2 = new CreateButtons("healmidrose2", "radio2");
    const radio2 = new CreateButtons("pawntrickstab2", "rfl2");
    const rfl2 = new CreateButtons("radiotherapy2", "shambc2");
    const shambc2 = new CreateButtons("reflourished2", "tc2");
    const tc2 = new CreateButtons("shamcontrolbc2", "wtron2");
    const wtron2 = new CreateButtons("toyotacontrolla2", "helppcomp");
    const ladderprow = new CreateButtons("pbeans2", "carr2");
    const carr2 = new CreateButtons("helppladder", "eject2");
    const eject2 = new CreateButtons("carroot2", "fmr2");
    const fmr2 = new CreateButtons("ejection2", "g3n2");
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
    const r2s2 = new CreateButtons("psychosolstice2", "smf2");
    const smf2 = new CreateButtons("ramp2seedling2", "sknight2");
    const sknight2 = new CreateButtons("savagemayflower2", "srings2");
    const srings2 = new CreateButtons("shitknight2", "stron2");
    const stron2 = new CreateButtons("starrings2", "tlattail2");
    const tlattail2 = new CreateButtons("startron2", "helppmeme");
    const aggroprow = new CreateButtons("watertron3", "ab3");
    const ab3 = new CreateButtons("helppaggro", "dgloves3");
    const dgloves3 = new CreateButtons("abeans3", "pb3");
    const pb3 = new CreateButtons("dinogloves3", "wtron3");
    const wtron3 = new CreateButtons("pbeans3", "aggrophelp");
    const comboprow = new CreateButtons("translattail3", "bcc3");
    const bcc3 = new CreateButtons("helppcombo", "carr3");
    const carr3 = new CreateButtons("budgetcc3", "cburn3");
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
    const r2s3 = new CreateButtons("psychosolstice3", "smf3");
    const smf3 = new CreateButtons("ramp2seedling3", "srings3");
    const srings3 = new CreateButtons("savagemayflower3", "stron3");
    const stron3 = new CreateButtons("starrings3", "tlattail3");
    const tlattail3 = new CreateButtons("startron3", "helppcombo");
    const controlprow = new CreateButtons("toyotacontrolla3", "cank3");
    const cank3 = new CreateButtons("helppcontrol", "chemo3");
    const chemo3 = new CreateButtons("cancerknight3", "eject3");
    const eject3 = new CreateButtons("chemotherapy3", "healcon3");
    const healcon3 = new CreateButtons("ejection3", "pts3");
    const pts3 = new CreateButtons("healcontrol3", "pop3");
    const pop3 = new CreateButtons("popsicle3", "radio3");
    const radio3 = new CreateButtons("pawntrickstab3", "shambc3");
    const shambc3 = new CreateButtons("radiotherapy3", "sknight3");
    const sknight3 = new CreateButtons("shamcontrolbc3", "tc3");
    const tc3 = new CreateButtons("shitknight3", "controlphelp");
    const midrangeprow = new CreateButtons("startron4", "cburn4");
    const cburn4 = new CreateButtons("helppmidrange", "flottery3");
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
    const r2s4 = new CreateButtons("psychosolstice4", "rfl3");
    const rfl3 = new CreateButtons("ramp2seelding4", "srings4");
    const srings4 = new CreateButtons("reflourished3", "stron4");
    const stron4 = new CreateButtons("starrings4", "midrangephelp");
    const tempoprow = new CreateButtons("translattail4", "wr1003");
    const wr1003 = new CreateButtons("tempophelp", "bct3");
    const bct3 = new CreateButtons("winrate1003", "bcz3");
    const bcz3 = new CreateButtons("budgetct3", "bgk3");
    const bgk3 = new CreateButtons("budgetcz3", "bgs3");
    const bgs3 = new CreateButtons("budgetgk3", "bnc3");
    const bnc3 = new CreateButtons("budgetgs3", "bro3");
    const bro3 = new CreateButtons("budgetnc3", "bsf3");
    const bsf3 = new CreateButtons("budgetro3", "bsp3");
    const bsp3 = new CreateButtons("budgetsf3", "bwk3");
    const bwk3 = new CreateButtons("budgetsp3", "carr4");
    const carr4 = new CreateButtons("budgetwk3", "lcbd3");
    const lcbd3 = new CreateButtons("carroot4", "tlattail4");
    const tlattail4 = new CreateButtons("lifecouldbedream3", "helpptempo");
    const allzrow = new CreateButtons("zmoss", "sav");
    const sav = new CreateButtons("allzhelp", "agr");
    const agr = new CreateButtons("savage", "agor");
    const agor = new CreateButtons("agraves", "agoragor");
    const agoragor = new CreateButtons("antiagor", "bfmg");
    const bfmg = new CreateButtons("antiagoragor", "bfpc");
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
    const gstache = new CreateButtons("gravepiratestache", "hbird");
    const hbird = new CreateButtons("gravestache", "hter");
    const hter = new CreateButtons("hibird", "hor");
    const hor = new CreateButtons("himpter", "homo");
    const homo = new CreateButtons("horts", "hgargs");
    const hgargs = new CreateButtons("homophobia", "ibox");
    const ibox = new CreateButtons("huntgargs", "igbc");
    const igbc = new CreateButtons("icebox", "kscope");
    const kscope = new CreateButtons("igmablobchum", "lt");
    const lt = new CreateButtons("kaleidoscope", "ltbr");
    const ltbr = new CreateButtons("ladytuna", "ltime");
    const ltime = new CreateButtons("lockthebathroom", "mcon");
    const mcon = new CreateButtons("lunchtime", "mscope");
    const mscope = new CreateButtons("mechacontrol", "nhks");
    const nhks = new CreateButtons("mechascope", "npa");
    const npa = new CreateButtons("nohokaistars", "otksw");
    const otksw = new CreateButtons("noplayingallowed", "pyeeyz");
    const pyeeyz = new CreateButtons("otkswabbie", "pbfeast");
    const pfeast = new CreateButtons("pablosyeeyzs", "pmop");
    const pmop = new CreateButtons("pbfeast", "propackage");
    const propackage = new CreateButtons("petmop", "rac");
    const rac = new CreateButtons("professorpackage", "rpackage");
    const rpackage = new CreateButtons("racism", "rticia");
    const rticia = new CreateButtons("raiserpackage", "syard");
    const syard = new CreateButtons("rampticia", "sea");
    const sea = new CreateButtons("schoolyard", "svery");
    const svery = new CreateButtons("seacret", "stars");
    const stars = new CreateButtons("slavery", "spl");
    const spl = new CreateButtons("spacestars", "sticia");
    const sticia = new CreateButtons("splimps", "sbandits");
    const sbandits = new CreateButtons("stacheticia", "slord");
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
    const wph = new CreateButtons("watersports", "ycmartin");
    const ycmartin = new CreateButtons("whalepharaoh", "yemartin");
    const yemartin = new CreateButtons("youngcatmartin", "ykmartin");
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
    const nhks2 = new CreateButtons("pablosyeeyzs2", "sea2");
    const sea2 = new CreateButtons("nohokaistars2", "stars2");
    const stars2 = new CreateButtons("seacret2", "timps2");
    const timps2 = new CreateButtons("spacestars2", "tstache2");
    const tstache2 = new CreateButtons("telimps2", "ubolt2");
    const ubolt2 = new CreateButtons("trickstache2", "compzhelp");
    const ladderzrow = new CreateButtons("youngcatmartin2", "agr2");
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
    const gstache2 = new CreateButtons("gravepiratestache2", "hbird2");
    const hbird2 = new CreateButtons("gravestache2", "hor2");
    const hor2 = new CreateButtons("hibird2", "mbolt2");
    const mbolt2 = new CreateButtons("horts2", "mcon2");
    const mcon2 = new CreateButtons("marxbolt2", "mscope2");
    const mscope2 = new CreateButtons("mechacontrol2", "propackage2");
    const propackage2 = new CreateButtons("mechascope2", "rpackage2");
    const rpackage2 = new CreateButtons("professorpackage2", "syard2");
    const syard2 = new CreateButtons("raiserpackage2", "spl2");
    const spl2 = new CreateButtons("schoolyard2", "timpssb2");
    const timpssb2 = new CreateButtons("splimps2", "tmech2");
    const tmech2 = new CreateButtons("telimpssb2", "vster2");
    const vster2 = new CreateButtons("trickmech2", "ycmartin2");
    const ycmartin2 = new CreateButtons("valkster2", "ladderzhelp");
    const memezrow = new CreateButtons("zmoss2", "sav2");
    const sav2 = new CreateButtons("helpzmeme", "agor2");
    const agor2 = new CreateButtons("savage2", "agoragor2");
    const agoragor2 = new CreateButtons("antiagor2", "bas2");
    const bas2 = new CreateButtons("antiagoragor2", "cog2");
    const cog2 = new CreateButtons("bastet2", "cbait2");
    const cbait2 = new CreateButtons("coggerazzi2", "cleap2");
    const cleap2 = new CreateButtons("congabait2", "dmech2");
    const dmech2 = new CreateButtons("conjureleap2", "flo2");
    const flo2 = new CreateButtons("dozzamech2", "ftimps2");
    const ftimps2 = new CreateButtons("floss2", "gtech2");
    const gtech2 = new CreateButtons("frozentelimps2", "hter2");
    const hter2 = new CreateButtons("gargolithtech2", "homo2");
    const homo2 = new CreateButtons("himpter2", "hgargs2");
    const hgargs2 = new CreateButtons("homophobia2", "igbc2");
    const igbc2 = new CreateButtons("huntgargs2", "lt2");
    const lt2 = new CreateButtons("igmablobchum2", "ltime2");
    const ltime2 = new CreateButtons("ladytuna2", "npa2");
    const npa2 = new CreateButtons("lunchtime2", "pfeast2");
    const pfeast2 = new CreateButtons("noplayingallowed2", "pmop2");
    const pmop2 = new CreateButtons("pbfeast2", "otksw2");
    const otksw2 = new CreateButtons("petmop2", "rac2");
    const rac2 = new CreateButtons("otkswabbie2", "rticia2");
    const rticia2 = new CreateButtons("racism2", "svery2");
    const svery2 = new CreateButtons("rampticia2", "sbandits2");
    const sbandits2 = new CreateButtons("slavery2", "slord2");
    const slord2 = new CreateButtons("sunbandits2", "sticia2");
    const sticia2 = new CreateButtons("sunlord2", "terrifyster2");
    const terrifyster2 = new CreateButtons("stacheticia2", "umech2");
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
    const bif3 = new CreateButtons("budgeteb3", "brb3");
    const brb3 = new CreateButtons("budgetif3", "bzm3");
    const bzm3 = new CreateButtons("budgetrb3", "dmech3");
    const dmech3 = new CreateButtons("budgetzm3", "gps3");
    const gps3 = new CreateButtons("dozzamech3", "homo3");
    const homo3 = new CreateButtons("gravepiratestache3", "mbolt3");
    const mbolt3 = new CreateButtons("homophobia3", "syard3");
    const syard3 = new CreateButtons("marxbolt3", "sea3");
    const sea3 = new CreateButtons("schoolyard3", "svery3");
    const svery3 = new CreateButtons("seacret3", "spl3");
    const spl3 = new CreateButtons("slavery3", "tmech3");
    const tmech3 = new CreateButtons("splimps3", "aggrozhelp");
    const combozrow = new CreateButtons("zmoss3", "sav3");
    const sav3 = new CreateButtons("helpzcombo", "agor3");
    const agor3 = new CreateButtons("savage3", "agoragor3");
    const agoragor3 = new CreateButtons("antiagor3", "bas3");
    const bas3 = new CreateButtons("antiagoragor3", "bfw3");
    const bfw3 = new CreateButtons("bastet3", "bbolt3");
    const bbolt3 = new CreateButtons("binaryflagwar3", "bducks3");
    const bducks3 = new CreateButtons("boltbolt3", "bpb3");
    const bpb3 = new CreateButtons("bonusducks3", "bykm3");
    const bykm3 = new CreateButtons("budgetpb3", "bust3");
    const bust3 = new CreateButtons("budgetykm3", "cog3");
    const cog3 = new CreateButtons("bustbolt3", "cbait3");
    const cbait3 = new CreateButtons("coggerazzi3", "cboy3");
    const cboy3 = new CreateButtons("congabait3", "flo3");
    const flo3 = new CreateButtons("cryoboy3", "ftimps3");
    const ftimps3 = new CreateButtons("floss3", "gps4");
    const gps4 = new CreateButtons("frozentelimps3", "gburn3");
    const gburn3 = new CreateButtons("gravepiratestache4", "gstache3");
    const gstache3 = new CreateButtons("gargburn3", "hbird3");
    const hbird3 = new CreateButtons("gravestache3", "hter3");
    const hter3 = new CreateButtons("hibird3", "hor3");
    const hor3 = new CreateButtons("himpter3", "igbc3");
    const igbc3 = new CreateButtons("horts3", "mscope3");
    const mscope3 = new CreateButtons("igmablobchum3", "otksw3");
    const otksw3 = new CreateButtons("mechascope3", "pyeeyz3");
    const pyeeyz3 = new CreateButtons("otkswabbie3", "rticia3");
    const rticia3 = new CreateButtons("pablosyeeyzs3", "stars3");
    const stars3 = new CreateButtons("rampticia3", "sticia3");
    const sticia3 = new CreateButtons("stacheticia3", "sbandits3");
    const sbandits3 = new CreateButtons("sunbandits3", "slord3");
    const slord3 = new CreateButtons("sunlord3", "timps3");
    const timps3 = new CreateButtons("telimps3", "terrifyster3");
    const terrifyster3 = new CreateButtons("telimpssb3", "tstache3");
    const tstache3 = new CreateButtons("terrifytricksterazzi3", "umech3");
    const umech3 = new CreateButtons("trickstache3", "vster3");
    const vster3 = new CreateButtons("uncrackamech3", "wsports3");
    const wsports3 = new CreateButtons("valkster3", "wph3");
    const wph3 = new CreateButtons("watersports3", "ycmartin3");
    const ycmartin3 = new CreateButtons("whalepharaoh3", "yemartin3");
    const yemartin3 = new CreateButtons("youngcatmartin3", "ykmartin3");
    const ykmartin3 = new CreateButtons("youngeggmartin3", "zm3");
    const zm3 = new CreateButtons("youngkenmartin3", "combozhelp");
    const controlzrow = new CreateButtons("whalepharaoh3", "agoragor4");
    const agoragor4 = new CreateButtons("helpzcontrol", "bfpc3");
    const bfpc3 = new CreateButtons("antiagoragor4", "bducks4");
    const bducks4 = new CreateButtons("bfplankcontrol3", "bust4");
    const bust4 = new CreateButtons("bonusducks4", "ftimps4");
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
    const sav4 = new CreateButtons("helpzmid", "bas4");
    const bas4 = new CreateButtons("savage4", "bfmg3");
    const bfmg3 = new CreateButtons("bastet4", "bfw4");
    const bfw4 = new CreateButtons("bfmidgargs3", "bbolt4");
    const bbolt4 = new CreateButtons("binaryflagwar4", "bykm4");
    const bykm4 = new CreateButtons("boltbolt4", "cbait4");
    const cbait4 = new CreateButtons("budgetykm4", "cboy4");
    const cboy4 = new CreateButtons("congabait4", "gburn4");
    const gburn4 = new CreateButtons("cryoboy4", "gtech3");
    const gtech3 = new CreateButtons("gargburn4", "gstar223");
    const gstar223 = new CreateButtons("gargolithtech3", "gom3");
    const gom3 = new CreateButtons("gargstar223", "hbird4");
    const hbird4 = new CreateButtons("gomorrah3", "hter4");
    const hter4 = new CreateButtons("hibird4", "hor4");
    const hor4 = new CreateButtons("himpter4", "ibox3");
    const ibox3 = new CreateButtons("horts4", "igbc4");
    const igbc4 = new CreateButtons("icebox3", "lt3");
    const lt3 = new CreateButtons("igmablobchum4", "ltime3");
    const ltime3 = new CreateButtons("ladytuna3", "pyeeyz4");
    const pyeeyz4 = new CreateButtons("lunchtime3", "pmop3");
    const pmop3 = new CreateButtons("pablosyeeyzs4", "nhks3");
    const nhks3 = new CreateButtons("petmop3", "stars4");
    const stars4 = new CreateButtons("nohokaistars3", "slord4");
    const slord4 = new CreateButtons("spacestars4", "tstache4");
    const tstache4 = new CreateButtons("sunlord4", "vster4");
    const vster4 = new CreateButtons("trickstache4", "wsports4");
    const wsports4 = new CreateButtons("valkster4", "ycmartin4");
    const ycmartin4 = new CreateButtons("watersports4", "ykmartin4");
    const ykmartin4 = new CreateButtons("youngcatmartin4", "midzhelp");
    const tempozrow = new CreateButtons("terrifytricksterazzi4", "brad3");
    const brad3 = new CreateButtons("helpztempo", "bim3");
    const bim3 = new CreateButtons("brady3", "bnt3");
    const bnt3 = new CreateButtons("budgetim3", "bsm3");
    const bsm3 = new CreateButtons("budgetnt3", "bsb3");
    const bsb3 = new CreateButtons("budgetsm3", "cog4");
    const cog4 = new CreateButtons("budgetsb3", "cleap3");
    const cleap3 = new CreateButtons("coggerazzi4", "ltbr3");
    const ltbr3 = new CreateButtons("conjureleap3", "propackage3");
    const propackage3 = new CreateButtons("lockthebathroom3", "rac3");
    const rac3 = new CreateButtons("professorpackage3", "rpackage3");
    const rpackage3 = new CreateButtons("racism3", "terrifyster4");
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
    const ejection = new CreatePlantDeckEmbed(result, "ejection");
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
    const racism = new CreateZombieDeckEmbed(result, "racism");
    const raiserpackage = new CreateZombieDeckEmbed(result, "raiserpackage");
    const slavery = new CreateZombieDeckEmbed(result, "slavery");
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
    const stacheticia = new CreateZombieDeckEmbed(result, "stacheticia");
    const youngcatmartin = new CreateZombieDeckEmbed(result, "ycm");
    const agraves = new CreateZombieDeckEmbed(result, "agraves");
    const antiagor = new CreateZombieDeckEmbed(result, "antiagor");
    const antiagoragor = new CreateZombieDeckEmbed(result, "antiagoragor");
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
    const hibird = new CreateZombieDeckEmbed(result, "hibird");
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
    const homophobia = new CreateZombieDeckEmbed(result, "homophobia");
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
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budgetpdecks") {
        await i.update({
          embeds: [budgetpdecksEmbed],
          components: [budgetprow],
        });
      } else if (value == "comppdecks") {
        await i.update({ embeds: [comppdecksEmbed], components: [compprow] });
      } else if (value == "ladderpdecks") {
        await i.update({
          embeds: [ladderpdecksEmbed],
          components: [ladderprow],
        });
      } else if (value == "memepdecks") {
        await i.update({ embeds: [memepdecksEmbed], components: [memeprow] });
      } else if (value == "aggropdecks") {
        await i.update({
          embeds: [aggropdecksEmbed],
          components: [aggroprow],
        });
      } else if (value == "combopdecks") {
        await i.update({
          embeds: [combopdecksEmbed],
          components: [comboprow],
        });
      } else if (value == "controlpdecks") {
        await i.update({
          embeds: [controlpdecksEmbed],
          components: [controlprow],
        });
      } else if (value == "midrangepdecks") {
        await i.update({
          embeds: [midrangepdecksEmbed],
          components: [midrangeprow],
        });
      } else if (value == "tempopdecks") {
        await i.update({
          embeds: [tempopdecksEmbed],
          components: [tempoprow],
        });
      } else if (value == "budgetzdecks") {
        await i.update({
          embeds: [budgetzdecksEmbed],
          components: [budgetzrow],
        });
      } else if (value == "compzdecks") {
        await i.update({ embeds: [compzdecksEmbed], components: [compzrow] });
      } else if (value == "ladderzdecks") {
        await i.update({
          embeds: [ladderzdecksEmbed],
          components: [ladderzrow],
        });
      } else if (value == "memezdecks") {
        await i.update({ embeds: [memezdecksEmbed], components: [memezrow] });
      } else if (value == "aggrozdecks") {
        await i.update({
          embeds: [aggrozdecksEmbed],
          components: [aggrozrow],
        });
      } else if (value == "combozdecks") {
        await i.update({
          embeds: [combozdecksEmbed],
          components: [combozrow],
        });
      } else if (value == "controlzdecks") {
        await i.update({
          embeds: [controlzdecksEmbed],
          components: [controlzrow],
        });
      } else if (value == "midrangezdecks") {
        await i.update({
          embeds: [midrangezdecksEmbed],
          components: [midrangezrow],
        });
      } else if (value == "tempozdecks") {
        await i.update({
          embeds: [tempozdecksEmbed],
          components: [tempozrow],
        });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "helppbudget" || i.customId == "budgetphelp") {
        await i.update({
          embeds: [budgetpdecksEmbed],
          components: [budgetprow],
        });
      } else if (i.customId == "helppcomp" || i.customId == "compphelp") {
        await i.update({ embeds: [comppdecksEmbed], components: [compprow] });
      } else if (i.customId == "helppladder" || i.customId == "ladderphelp") {
        await i.update({
          embeds: [ladderpdecksEmbed],
          components: [ladderprow],
        });
      } else if (i.customId == "helppmeme" || i.customId == "memephelp") {
        await i.update({ embeds: [memepdecksEmbed], components: [memeprow] });
      } else if (i.customId == "helppaggro" || i.customId == "aggrophelp") {
        await i.update({ embeds: [aggropdecksEmbed], components: [aggroprow] });
      } else if (i.customId == "helppcombo" || i.customId == "combophelp") {
        await i.update({ embeds: [combopdecksEmbed], components: [comboprow] });
      } else if (i.customId == "helppcontrol" || i.customId == "controlphelp") {
        await i.update({
          embeds: [controlpdecksEmbed],
          components: [controlprow],
        });
      } else if (
        i.customId == "helppmidrange" ||
        i.customId == "midrangephelp"
      ) {
        await i.update({
          embeds: [midrangepdecksEmbed],
          components: [midrangeprow],
        });
      } else if (i.customId == "helpptempo" || i.customId == "tempophelp") {
        await i.update({ embeds: [tempopdecksEmbed], components: [tempoprow] });
      } else if (i.customId == "helpzbudget" || i.customId == "helpbudgetz") {
        await i.update({
          embeds: [budgetzdecksEmbed],
          components: [budgetzrow],
        });
      } else if (i.customId == "helpzcomp" || i.customId == "compzhelp") {
        await i.update({ embeds: [compzdecksEmbed], components: [compzrow] });
      } else if (i.customId == "helpzladder" || i.customId == "ladderzhelp") {
        await i.update({
          embeds: [ladderzdecksEmbed],
          components: [ladderzrow],
        });
      } else if (i.customId == "helpzmeme" || i.customId == "memezhelp") {
        await i.update({ embeds: [memezdecksEmbed], components: [memezrow] });
      } else if (i.customId == "helpzaggro" || i.customId == "aggrozhelp") {
        await i.update({ embeds: [aggrozdecksEmbed], components: [aggrozrow] });
      } else if (i.customId == "helpzcombo" || i.customId == "combozhelp") {
        await i.update({ embeds: [combozdecksEmbed], components: [combozrow] });
      } else if (i.customId == "helpzcontrol" || i.customId == "controlzhelp") {
        await i.update({
          embeds: [controlzdecksEmbed],
          components: [controlzrow],
        });
      } else if (i.customId == "helpzmid" || i.customId == "midzhelp") {
        await i.update({
          embeds: [midrangezdecksEmbed],
          components: [midrangezrow],
        });
      } else if (i.customId == "helpztempo" || i.customId == "tempozhelp") {
        await i.update({ embeds: [tempozdecksEmbed], components: [tempozrow] });
      } else if (i.customId == "helpallp" || i.customId == "allphelp") {
        await i.update({ embeds: [allpdecksEmbed], components: [allprow] });
      } else if (i.customId == "helpzall" || i.customId == "allzhelp") {
        await i.update({ embeds: [allzdecksEmbed], components: [allzrow] });
      } else if (i.customId == "wr100" || i.customId == "winrate100") {
        await i.update({ embeds: [winrate100], components: [wr100] });
      } else if (i.customId == "wr1002" || i.customId == "winrate1002") {
        await i.update({ embeds: [winrate100], components: [wr1002] });
      } else if (i.customId == "wr1003" || i.customId == "winrate1003") {
        await i.update({ embeds: [winrate100], components: [wr1003] });
      } else if (i.customId == "ab" || i.customId == "abeans") {
        await i.update({ embeds: [abeans], components: [ab] });
      } else if (i.customId == "ab2" || i.customId == "abeans2") {
        await i.update({ embeds: [abeans], components: [ab2] });
      } else if (i.customId == "ab3" || i.customId == "abeans3") {
        await i.update({ embeds: [abeans], components: [ab3] });
      } else if (i.customId == "healcon" || i.customId == "healcontrol") {
        await i.update({ embeds: [healcontrol], components: [healcon] });
      } else if (i.customId == "healcon2" || i.customId == "healcontrol2") {
        await i.update({ embeds: [healcontrol], components: [healcon2] });
      } else if (i.customId == "healcon3" || i.customId == "healcontrol3") {
        await i.update({ embeds: [healcontrol], components: [healcon3] });
      } else if (i.customId == "bct" || i.customId == "budgetct") {
        await i.update({ embeds: [budgetct], components: [bct] });
      } else if (i.customId == "bct2" || i.customId == "budgetct2") {
        await i.update({ embeds: [budgetct], components: [bct2] });
      } else if (i.customId == "bct3" || i.customId == "budgetct3") {
        await i.update({ embeds: [budgetct], components: [bct3] });
      } else if (i.customId == "bcc" || i.customId == "budgetcc") {
        await i.update({ embeds: [budgetcc], components: [bcc] });
      } else if (i.customId == "bcc2" || i.customId == "budgetcc2") {
        await i.update({ embeds: [budgetcc], components: [bcc2] });
      } else if (i.customId == "bcc3" || i.customId == "budgetcc3") {
        await i.update({ embeds: [budgetcc], components: [bcc3] });
      } else if (i.customId == "bcz" || i.customId == "budgetcz") {
        await i.update({ embeds: [budgetcz], components: [bcz] });
      } else if (i.customId == "bcz2" || i.customId == "budgetcz2") {
        await i.update({ embeds: [budgetcz], components: [bcz2] });
      } else if (i.customId == "bcz3" || i.customId == "budgetcz3") {
        await i.update({ embeds: [budgetcz], components: [bcz3] });
      } else if (i.customId == "bgk" || i.customId == "budgetgk") {
        await i.update({ embeds: [budgetgk], components: [bgk] });
      } else if (i.customId == "bgk2" || i.customId == "budgetgk2") {
        await i.update({ embeds: [budgetgk], components: [bgk2] });
      } else if (i.customId == "bgk3" || i.customId == "budgetgk3") {
        await i.update({ embeds: [budgetgk], components: [bgk3] });
      } else if (i.customId == "bgs" || i.customId == "budgetgs") {
        await i.update({ embeds: [budgetgs], components: [bgs] });
      } else if (i.customId == "bgs2" || i.customId == "budgetgs2") {
        await i.update({ embeds: [budgetgs], components: [bgs2] });
      } else if (i.customId == "bgs3" || i.customId == "budgetgs3") {
        await i.update({ embeds: [budgetgs], components: [bgs3] });
      } else if (i.customId == "bnc" || i.customId == "budgetnc") {
        await i.update({ embeds: [budgetnc], components: [bnc] });
      } else if (i.customId == "bnc2" || i.customId == "budgetnc2") {
        await i.update({ embeds: [budgetnc], components: [bnc2] });
      } else if (i.customId == "bnc3" || i.customId == "budgetnc3") {
        await i.update({ embeds: [budgetnc], components: [bnc3] });
      } else if (i.customId == "bro" || i.customId == "budgetro") {
        await i.update({ embeds: [budgetro], components: [bro] });
      } else if (i.customId == "bro2" || i.customId == "budgetro2") {
        await i.update({ embeds: [budgetro], components: [bro2] });
      } else if (i.customId == "bro3" || i.customId == "budgetro3") {
        await i.update({ embeds: [budgetro], components: [bro3] });
      } else if (i.customId == "bsf" || i.customId == "budgetsf") {
        await i.update({ embeds: [budgetsf], components: [bsf] });
      } else if (i.customId == "bsf2" || i.customId == "budgetsf2") {
        await i.update({ embeds: [budgetsf], components: [bsf2] });
      } else if (i.customId == "bsf3" || i.customId == "budgetsf3") {
        await i.update({ embeds: [budgetsf], components: [bsf3] });
      } else if (i.customId == "bsp" || i.customId == "budgetsp") {
        await i.update({ embeds: [budgetsp], components: [bsp] });
      } else if (i.customId == "bsp2" || i.customId == "budgetsp2") {
        await i.update({ embeds: [budgetsp], components: [bsp2] });
      } else if (i.customId == "bsp3" || i.customId == "budgetsp3") {
        await i.update({ embeds: [budgetsp], components: [bsp3] });
      } else if (i.customId == "bwk" || i.customId == "budgetwk") {
        await i.update({ embeds: [budgetwk], components: [bwk] });
      } else if (i.customId == "bwk2" || i.customId == "budgetwk2") {
        await i.update({ embeds: [budgetwk], components: [bwk2] });
      } else if (i.customId == "bwk3" || i.customId == "budgetwk3") {
        await i.update({ embeds: [budgetwk], components: [bwk3] });
      } else if (i.customId == "cank" || i.customId == "cancerknight") {
        await i.update({ embeds: [cancerknight], components: [cank] });
      } else if (i.customId == "cank2" || i.customId == "cancerknight2") {
        await i.update({ embeds: [cancerknight], components: [cank2] });
      } else if (i.customId == "cank3" || i.customId == "cancerknight3") {
        await i.update({ embeds: [cancerknight], components: [cank3] });
      } else if (i.customId == "chemo" || i.customId == "chemotherapy") {
        await i.update({ embeds: [chemotherapy], components: [chemo] });
      } else if (i.customId == "chemo2" || i.customId == "chemotherapy2") {
        await i.update({ embeds: [chemotherapy], components: [chemo2] });
      } else if (i.customId == "chemo3" || i.customId == "chemotherapy3") {
        await i.update({ embeds: [chemotherapy], components: [chemo3] });
      } else if (i.customId == "cburn" || i.customId == "cyburn") {
        await i.update({ embeds: [cyburn], components: [cburn] });
      } else if (i.customId == "cburn2" || i.customId == "cyburn2") {
        await i.update({ embeds: [cyburn], components: [cburn2] });
      } else if (i.customId == "cburn3" || i.customId == "cyburn3") {
        await i.update({ embeds: [cyburn], components: [cburn3] });
      } else if (i.customId == "cburn4" || i.customId == "cyburn4") {
        await i.update({ embeds: [cyburn], components: [cburn4] });
      } else if (i.customId == "eject" || i.customId == "ejection") {
        await i.update({ embeds: [ejection], components: [eject] });
      } else if (i.customId == "eject2" || i.customId == "ejection2") {
        await i.update({ embeds: [ejection], components: [eject2] });
      } else if (i.customId == "eject3" || i.customId == "ejection3") {
        await i.update({ embeds: [ejection], components: [eject3] });
      } else if (i.customId == "elus" || i.customId == "elusives") {
        await i.update({ embeds: [elusives], components: [elus] });
      } else if (i.customId == "elus2" || i.customId == "elusives2") {
        await i.update({ embeds: [elusives], components: [elus2] });
      } else if (i.customId == "elus3" || i.customId == "elusives3") {
        await i.update({ embeds: [elusives], components: [elus3] });
      } else if (i.customId == "elus4" || i.customId == "elusives4") {
        await i.update({ embeds: [elusives], components: [elus4] });
      } else if (i.customId == "fheal" || i.customId == "freezeheal") {
        await i.update({ embeds: [freezeheal], components: [fheal] });
      } else if (i.customId == "fheal2" || i.customId == "freezeheal2") {
        await i.update({ embeds: [freezeheal], components: [fheal2] });
      } else if (i.customId == "fheal3" || i.customId == "freezeheal3") {
        await i.update({ embeds: [freezeheal], components: [fheal3] });
      } else if (i.customId == "fmr" || i.customId == "frymidrose") {
        await i.update({ embeds: [frymidrose], components: [fmr] });
      } else if (i.customId == "fmr2" || i.customId == "frymidrose2") {
        await i.update({ embeds: [frymidrose], components: [fmr2] });
      } else if (i.customId == "fmr3" || i.customId == "frymidrose3") {
        await i.update({ embeds: [frymidrose], components: [fmr3] });
      } else if (i.customId == "fflare" || i.customId == "funnyflare") {
        await i.update({ embeds: [funnyflare], components: [fflare] });
      } else if (i.customId == "fflare2" || i.customId == "funnyflare2") {
        await i.update({ embeds: [funnyflare], components: [fflare2] });
      } else if (i.customId == "fflare3" || i.customId == "funnyflare3") {
        await i.update({ embeds: [funnyflare], components: [fflare3] });
      } else if (i.customId == "fflare4" || i.customId == "funnyflare4") {
        await i.update({ embeds: [funnyflare], components: [fflare4] });
      } else if (i.customId == "g3n" || i.customId == "going3nuts") {
        await i.update({ embeds: [going3nuts], components: [g3n] });
      } else if (i.customId == "g3n2" || i.customId == "going3nuts2") {
        await i.update({ embeds: [going3nuts], components: [g3n2] });
      } else if (i.customId == "g3n3" || i.customId == "going3nuts3") {
        await i.update({ embeds: [going3nuts], components: [g3n3] });
      } else if (i.customId == "g3n4" || i.customId == "going3nuts4") {
        await i.update({ embeds: [going3nuts], components: [g3n4] });
      } else if (i.customId == "hburn" || i.customId == "healburn") {
        await i.update({ embeds: [healburn], components: [hburn] });
      } else if (i.customId == "hburn2" || i.customId == "healburn2") {
        await i.update({ embeds: [healburn], components: [hburn2] });
      } else if (i.customId == "hburn3" || i.customId == "healburn3") {
        await i.update({ embeds: [healburn], components: [hburn3] });
      } else if (i.customId == "hburn4" || i.customId == "healburn4") {
        await i.update({ embeds: [healburn], components: [hburn4] });
      } else if (i.customId == "flottery" || i.customId == "figlottery") {
        await i.update({ embeds: [figlottery], components: [flottery] });
      } else if (i.customId == "flottery2" || i.customId == "figlottery2") {
        await i.update({ embeds: [figlottery], components: [flottery2] });
      } else if (i.customId == "flottery3" || i.customId == "figlottery3") {
        await i.update({ embeds: [figlottery], components: [flottery3] });
      } else if (i.customId == "hmr" || i.customId == "healmidrose") {
        await i.update({ embeds: [healmidrose], components: [hmr] });
      } else if (i.customId == "hmr2" || i.customId == "healmidrose2") {
        await i.update({ embeds: [healmidrose], components: [hmr2] });
      } else if (i.customId == "hmr3" || i.customId == "healmidrose3") {
        await i.update({ embeds: [healmidrose], components: [hmr3] });
      } else if (i.customId == "hland" || i.customId == "highlander") {
        await i.update({ embeds: [highlander], components: [hland] });
      } else if (i.customId == "hland2" || i.customId == "highlander2") {
        await i.update({ embeds: [highlander], components: [hland2] });
      } else if (i.customId == "hland3" || i.customId == "highlander3") {
        await i.update({ embeds: [highlander], components: [hland3] });
      } else if (i.customId == "lcbd" || i.customId == "lifecouldbedream") {
        await i.update({ embeds: [lifecouldbedream], components: [lcbd] });
      } else if (i.customId == "lcbd2" || i.customId == "lifecouldbedream2") {
        await i.update({ embeds: [lifecouldbedream], components: [lcbd2] });
      } else if (i.customId == "lcbd3" || i.customId == "lifecouldbedream3") {
        await i.update({ embeds: [lifecouldbedream], components: [lcbd3] });
      } else if (i.customId == "mred" || i.customId == "midred") {
        await i.update({ embeds: [midred], components: [mred] });
      } else if (i.customId == "mred2" || i.customId == "midred2") {
        await i.update({ embeds: [midred], components: [mred2] });
      } else if (i.customId == "mred3" || i.customId == "midred3") {
        await i.update({ embeds: [midred], components: [mred3] });
      } else if (i.customId == "mred4" || i.customId == "midred4") {
        await i.update({ embeds: [midred], components: [mred4] });
      } else if (i.customId == "mopr" || i.customId == "mopribus") {
        await i.update({ embeds: [mopribus], components: [mopr] });
      } else if (i.customId == "mopr2" || i.customId == "mopribus2") {
        await i.update({ embeds: [mopribus], components: [mopr2] });
      } else if (i.customId == "mopr3" || i.customId == "mopribus3") {
        await i.update({ embeds: [mopribus], components: [mopr3] });
      } else if (i.customId == "mopr4" || i.customId == "mopribus4") {
        await i.update({ embeds: [mopribus], components: [mopr4] });
      } else if (i.customId == "msp" || i.customId == "mspotk") {
        await i.update({ embeds: [mspotk], components: [msp] });
      } else if (i.customId == "msp2" || i.customId == "mspotk2") {
        await i.update({ embeds: [mspotk], components: [msp2] });
      } else if (i.customId == "msp3" || i.customId == "mspotk3") {
        await i.update({ embeds: [mspotk], components: [msp3] });
      } else if (i.customId == "plmop" || i.customId == "plantmop") {
        await i.update({ embeds: [plantmop], components: [plmop] });
      } else if (i.customId == "plmop2" || i.customId == "plantmop2") {
        await i.update({ embeds: [plantmop], components: [plmop2] });
      } else if (i.customId == "plmop3" || i.customId == "plantmop3") {
        await i.update({ embeds: [plantmop], components: [plmop3] });
      } else if (i.customId == "psol" || i.customId == "psychosolstice") {
        await i.update({ embeds: [psychosolstice], components: [psol] });
      } else if (i.customId == "psol2" || i.customId == "psychosolstice2") {
        await i.update({ embeds: [psychosolstice], components: [psol2] });
      } else if (i.customId == "psol3" || i.customId == "psychosolstice3") {
        await i.update({ embeds: [psychosolstice], components: [psol3] });
      } else if (i.customId == "psol4" || i.customId == "psychosolstice4") {
        await i.update({ embeds: [psychosolstice], components: [psol4] });
      } else if (i.customId == "radio" || i.customId == "radiotherapy") {
        await i.update({ embeds: [radiotherapy], components: [radio] });
      } else if (i.customId == "radio2" || i.customId == "radiotherapy2") {
        await i.update({ embeds: [radiotherapy], components: [radio2] });
      } else if (i.customId == "radio3" || i.customId == "radiotherapy3") {
        await i.update({ embeds: [radiotherapy], components: [radio3] });
      } else if (i.customId == "r2s" || i.customId == "ramp2seedling") {
        await i.update({ embeds: [ramp2seedling], components: [r2s] });
      } else if (i.customId == "r2s2" || i.customId == "ramp2seedling2") {
        await i.update({ embeds: [ramp2seedling], components: [r2s2] });
      } else if (i.customId == "r2s3" || i.customId == "ramp2seedling3") {
        await i.update({ embeds: [ramp2seedling], components: [r2s3] });
      } else if (i.customId == "r2s4" || i.customId == "ramp2seedling4") {
        await i.update({ embeds: [ramp2seedling], components: [r2s4] });
      } else if (i.customId == "smf" || i.customId == "savagemayflower") {
        await i.update({ embeds: [savagemayflower], components: [smf] });
      } else if (i.customId == "smf2" || i.customId == "savagemayflower2") {
        await i.update({ embeds: [savagemayflower], components: [smf2] });
      } else if (i.customId == "smf3" || i.customId == "savagemayflower3") {
        await i.update({ embeds: [savagemayflower], components: [smf3] });
      } else if (i.customId == "shambc" || i.customId == "shamcontrolbc") {
        await i.update({ embeds: [shamcontrolbc], components: [shambc] });
      } else if (i.customId == "shambc2" || i.customId == "shamcontrolbc2") {
        await i.update({ embeds: [shamcontrolbc], components: [shambc2] });
      } else if (i.customId == "shambc3" || i.customId == "shamcontrolbc3") {
        await i.update({ embeds: [shamcontrolbc], components: [shambc3] });
      } else if (i.customId == "sknight" || i.customId == "shitknight") {
        await i.update({ embeds: [shitknight], components: [sknight] });
      } else if (i.customId == "sknight2" || i.customId == "shitknight2") {
        await i.update({ embeds: [shitknight], components: [sknight2] });
      } else if (i.customId == "sknight3" || i.customId == "shitknight3") {
        await i.update({ embeds: [shitknight], components: [sknight3] });
      } else if (i.customId == "srings" || i.customId == "starrings") {
        await i.update({ embeds: [starrings], components: [srings] });
      } else if (i.customId == "srings2" || i.customId == "starrings2") {
        await i.update({ embeds: [starrings], components: [srings2] });
      } else if (i.customId == "srings3" || i.customId == "starrings3") {
        await i.update({ embeds: [starrings], components: [srings3] });
      } else if (i.customId == "srings4" || i.customId == "starrings4") {
        await i.update({ embeds: [starrings], components: [srings4] });
      } else if (i.customId == "stron" || i.customId == "startron") {
        await i.update({ embeds: [startron], components: [stron] });
      } else if (i.customId == "stron2" || i.customId == "startron2") {
        await i.update({ embeds: [startron], components: [stron2] });
      } else if (i.customId == "stron3" || i.customId == "startron3") {
        await i.update({ embeds: [startron], components: [stron3] });
      } else if (i.customId == "stron4" || i.customId == "startron4") {
        await i.update({ embeds: [startron], components: [stron4] });
      } else if (i.customId == "tc" || i.customId == "toyotacontrolla") {
        await i.update({ embeds: [toyotacontrolla], components: [tc] });
      } else if (i.customId == "tc2" || i.customId == "toyotacontrolla2") {
        await i.update({ embeds: [toyotacontrolla], components: [tc2] });
      } else if (i.customId == "tc3" || i.customId == "toyotacontrolla3") {
        await i.update({ embeds: [toyotacontrolla], components: [tc3] });
      } else if (i.customId == "tlattail" || i.customId == "translattail") {
        await i.update({ embeds: [translattail], components: [tlattail] });
      } else if (i.customId == "tlattail2" || i.customId == "translattail2") {
        await i.update({ embeds: [translattail], components: [tlattail2] });
      } else if (i.customId == "tlattail3" || i.customId == "translattail3") {
        await i.update({ embeds: [translattail], components: [tlattail3] });
      } else if (i.customId == "tlattail4" || i.customId == "translattail4") {
        await i.update({ embeds: [translattail], components: [tlattail4] });
      } else if (i.customId == "wtron" || i.customId == "watertron") {
        await i.update({ embeds: [watertron], components: [wtron] });
      } else if (i.customId == "wtron2" || i.customId == "watertron2") {
        await i.update({ embeds: [watertron], components: [wtron2] });
      } else if (i.customId == "wtron3" || i.customId == "watertron3") {
        await i.update({ embeds: [watertron], components: [wtron3] });
      } else if (i.customId == "agr" || i.customId == "agraves") {
        await i.update({ embeds: [agraves], components: [agr] });
      } else if (i.customId == "agr2" || i.customId == "agraves2") {
        await i.update({ embeds: [agraves], components: [agr2] });
      } else if (i.customId == "agr3" || i.customId == "agraves3") {
        await i.update({ embeds: [agraves], components: [agr3] });
      } else if (i.customId == "agor" || i.customId == "antiagor") {
        await i.update({ embeds: [antiagor], components: [agor] });
      } else if (i.customId == "agor2" || i.customId == "antiagor2") {
        await i.update({ embeds: [antiagor], components: [agor2] });
      } else if (i.customId == "agor3" || i.customId == "antiagor3") {
        await i.update({ embeds: [antiagor], components: [agor3] });
      } else if (i.customId == "agoragor" || i.customId == "antiagoragor") {
        await i.update({ embeds: [antiagoragor], components: [agoragor] });
      } else if (i.customId == "agoragor2" || i.customId == "antiagoragor2") {
        await i.update({ embeds: [antiagoragor], components: [agoragor2] });
      } else if (i.customId == "agoragor3" || i.customId == "antiagoragor3") {
        await i.update({ embeds: [antiagoragor], components: [agoragor3] });
      } else if (i.customId == "agoragor4" || i.customId == "antiagoragor4") {
        await i.update({ embeds: [antiagoragor], components: [agoragor4] });
      } else if (i.customId == "bfmg" || i.customId == "bfmidgargs") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg] });
      } else if (i.customId == "bfmg2" || i.customId == "bfmidgargs2") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg2] });
      } else if (i.customId == "bfmg3" || i.customId == "bfmidgargs3") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg3] });
      } else if (i.customId == "bfpc" || i.customId == "bfplankcontrol") {
        await i.update({ embeds: [bfplankcontrol], components: [bfpc] });
      } else if (i.customId == "bfpc2" || i.customId == "bfplankcontrol2") {
        await i.update({ embeds: [bfplankcontrol], components: [bfpc2] });
      } else if (i.customId == "bfpc3" || i.customId == "bfplankcontrol3") {
        await i.update({ embeds: [bfplankcontrol], components: [bfpc3] });
      } else if (i.customId == "bas" || i.customId == "bastet") {
        await i.update({ embeds: [bastet], components: [bas] });
      } else if (i.customId == "bas2" || i.customId == "bastet2") {
        await i.update({ embeds: [bastet], components: [bas2] });
      } else if (i.customId == "bas3" || i.customId == "bastet3") {
        await i.update({ embeds: [bastet], components: [bas3] });
      } else if (i.customId == "bas4" || i.customId == "bastet4") {
        await i.update({ embeds: [bastet], components: [bas4] });
      } else if (i.customId == "bfw" || i.customId == "binaryflagwar") {
        await i.update({ embeds: [binaryflagwar], components: [bfw] });
      } else if (i.customId == "bfw2" || i.customId == "binaryflagwar2") {
        await i.update({ embeds: [binaryflagwar], components: [bfw2] });
      } else if (i.customId == "bfw3" || i.customId == "binaryflagwar3") {
        await i.update({ embeds: [binaryflagwar], components: [bfw3] });
      } else if (i.customId == "bfw4" || i.customId == "binaryflagwar4") {
        await i.update({ embeds: [binaryflagwar], components: [bfw4] });
      } else if (i.customId == "bbolt" || i.customId == "boltbolt") {
        await i.update({ embeds: [boltbolt], components: [bbolt] });
      } else if (i.customId == "bbolt2" || i.customId == "boltbolt2") {
        await i.update({ embeds: [boltbolt], components: [bbolt2] });
      } else if (i.customId == "bbolt3" || i.customId == "boltbolt3") {
        await i.update({ embeds: [boltbolt], components: [bbolt3] });
      } else if (i.customId == "bbolt4" || i.customId == "boltbolt4") {
        await i.update({ embeds: [boltbolt], components: [bbolt4] });
      } else if (i.customId == "bducks" || i.customId == "bonusducks") {
        await i.update({ embeds: [bonusducks], components: [bducks] });
      } else if (i.customId == "bducks2" || i.customId == "bonusducks2") {
        await i.update({ embeds: [bonusducks], components: [bducks2] });
      } else if (i.customId == "bducks3" || i.customId == "bonusducks3") {
        await i.update({ embeds: [bonusducks], components: [bducks3] });
      } else if (i.customId == "bducks4" || i.customId == "bonusducks4") {
        await i.update({ embeds: [bonusducks], components: [bducks4] });
      } else if (i.customId == "brad" || i.customId == "brady") {
        await i.update({ embeds: [brady], components: [brad] });
      } else if (i.customId == "brad2" || i.customId == "brady2") {
        await i.update({ embeds: [brady], components: [brad2] });
      } else if (i.customId == "brad3" || i.customId == "brady3") {
        await i.update({ embeds: [brady], components: [brad3] });
      } else if (i.customId == "bbf" || i.customId == "budgetbf") {
        await i.update({ embeds: [budgetbf], components: [bbf] });
      } else if (i.customId == "bbf2" || i.customId == "budgetbf2") {
        await i.update({ embeds: [budgetbf], components: [bbf2] });
      } else if (i.customId == "bbf3" || i.customId == "budgetbf3") {
        await i.update({ embeds: [budgetbf], components: [bbf3] });
      } else if (i.customId == "beb" || i.customId == "budgeteb") {
        await i.update({ embeds: [budgeteb], components: [beb] });
      } else if (i.customId == "beb2" || i.customId == "budgeteb2") {
        await i.update({ embeds: [budgeteb], components: [beb2] });
      } else if (i.customId == "beb3" || i.customId == "budgeteb3") {
        await i.update({ embeds: [budgeteb], components: [beb3] });
      } else if (i.customId == "bif" || i.customId == "budgetif") {
        await i.update({ embeds: [budgetif], components: [bif] });
      } else if (i.customId == "bif2" || i.customId == "budgetif2") {
        await i.update({ embeds: [budgetif], components: [bif2] });
      } else if (i.customId == "bif3" || i.customId == "budgetif3") {
        await i.update({ embeds: [budgetif], components: [bif3] });
      } else if (i.customId == "bim" || i.customId == "budgetim") {
        await i.update({ embeds: [budgetim], components: [bim] });
      } else if (i.customId == "bim2" || i.customId == "budgetim2") {
        await i.update({ embeds: [budgetim], components: [bim2] });
      } else if (i.customId == "bim3" || i.customId == "budgetim3") {
        await i.update({ embeds: [budgetim], components: [bim3] });
      } else if (i.customId == "bnt" || i.customId == "budgetnt") {
        await i.update({ embeds: [budgetnt], components: [bnt] });
      } else if (i.customId == "bnt2" || i.customId == "budgetnt2") {
        await i.update({ embeds: [budgetnt], components: [bnt2] });
      } else if (i.customId == "bnt3" || i.customId == "budgetnt3") {
        await i.update({ embeds: [budgetnt], components: [bnt3] });
      } else if (i.customId == "bpb" || i.customId == "budgetpb") {
        await i.update({ embeds: [budgetpb], components: [bpb] });
      } else if (i.customId == "bpb2" || i.customId == "budgetpb2") {
        await i.update({ embeds: [budgetpb], components: [bpb2] });
      } else if (i.customId == "bpb3" || i.customId == "budgetpb3") {
        await i.update({ embeds: [budgetpb], components: [bpb3] });
      } else if (i.customId == "brb" || i.customId == "budgetrb") {
        await i.update({ embeds: [budgetrb], components: [brb] });
      } else if (i.customId == "brb2" || i.customId == "budgetrb2") {
        await i.update({ embeds: [budgetrb], components: [brb2] });
      } else if (i.customId == "brb3" || i.customId == "budgetrb3") {
        await i.update({ embeds: [budgetrb], components: [brb3] });
      } else if (i.customId == "bsb" || i.customId == "budgetsb") {
        await i.update({ embeds: [budgetsb], components: [bsb] });
      } else if (i.customId == "bsb2" || i.customId == "budgetsb2") {
        await i.update({ embeds: [budgetsb], components: [bsb2] });
      } else if (i.customId == "bsb3" || i.customId == "budgetsb3") {
        await i.update({ embeds: [budgetsb], components: [bsb3] });
      } else if (i.customId == "bsm" || i.customId == "budgetsm") {
        await i.update({ embeds: [budgetsm], components: [bsm] });
      } else if (i.customId == "bsm2" || i.customId == "budgetsm2") {
        await i.update({ embeds: [budgetsm], components: [bsm2] });
      } else if (i.customId == "bsm3" || i.customId == "budgetsm3") {
        await i.update({ embeds: [budgetsm], components: [bsm3] });
      } else if (i.customId == "bykm" || i.customId == "budgetykm") {
        await i.update({ embeds: [budgetykm], components: [bykm] });
      } else if (i.customId == "bykm2" || i.customId == "budgetykm2") {
        await i.update({ embeds: [budgetykm], components: [bykm2] });
      } else if (i.customId == "bykm3" || i.customId == "budgetykm3") {
        await i.update({ embeds: [budgetykm], components: [bykm3] });
      } else if (i.customId == "bykm4" || i.customId == "budgetykm4") {
        await i.update({ embeds: [budgetykm], components: [bykm4] });
      } else if (i.customId == "bzm" || i.customId == "budgetzm") {
        await i.update({ embeds: [budgetzm], components: [bzm] });
      } else if (i.customId == "bzm2" || i.customId == "budgetzm2") {
        await i.update({ embeds: [budgetzm], components: [bzm2] });
      } else if (i.customId == "bzm3" || i.customId == "budgetzm3") {
        await i.update({ embeds: [budgetzm], components: [bzm3] });
      } else if (i.customId == "bust" || i.customId == "bustbolt") {
        await i.update({ embeds: [bustbolt], components: [bust] });
      } else if (i.customId == "bust2" || i.customId == "bustbolt2") {
        await i.update({ embeds: [bustbolt], components: [bust2] });
      } else if (i.customId == "bust3" || i.customId == "bustbolt3") {
        await i.update({ embeds: [bustbolt], components: [bust3] });
      } else if (i.customId == "bust4" || i.customId == "bustbolt4") {
        await i.update({ embeds: [bustbolt], components: [bust4] });
      } else if (i.customId == "cog" || i.customId == "coggerazzi") {
        await i.update({ embeds: [coggerazzi], components: [cog] });
      } else if (i.customId == "cog2" || i.customId == "coggerazzi2") {
        await i.update({ embeds: [coggerazzi], components: [cog2] });
      } else if (i.customId == "cog3" || i.customId == "coggerazzi3") {
        await i.update({ embeds: [coggerazzi], components: [cog3] });
      } else if (i.customId == "cog4" || i.customId == "coggerazzi4") {
        await i.update({ embeds: [coggerazzi], components: [cog4] });
      } else if (i.customId == "cbait" || i.customId == "congabait") {
        await i.update({ embeds: [congabait], components: [cbait] });
      } else if (i.customId == "cbait2" || i.customId == "congabait2") {
        await i.update({ embeds: [congabait], components: [cbait2] });
      } else if (i.customId == "cbait3" || i.customId == "congabait3") {
        await i.update({ embeds: [congabait], components: [cbait3] });
      } else if (i.customId == "cbait4" || i.customId == "congabait4") {
        await i.update({ embeds: [congabait], components: [cbait4] });
      } else if (i.customId == "cleap" || i.customId == "conjureleap") {
        await i.update({ embeds: [conjureleap], components: [cleap] });
      } else if (i.customId == "cleap2" || i.customId == "conjureleap2") {
        await i.update({ embeds: [conjureleap], components: [cleap2] });
      } else if (i.customId == "cleap3" || i.customId == "conjureleap3") {
        await i.update({ embeds: [conjureleap], components: [cleap3] });
      } else if (i.customId == "cboy" || i.customId == "cryoboy") {
        await i.update({ embeds: [cryoboy], components: [cboy] });
      } else if (i.customId == "cboy2" || i.customId == "cryoboy2") {
        await i.update({ embeds: [cryoboy], components: [cboy2] });
      } else if (i.customId == "cboy3" || i.customId == "cryoboy3") {
        await i.update({ embeds: [cryoboy], components: [cboy3] });
      } else if (i.customId == "cboy4" || i.customId == "cryoboy4") {
        await i.update({ embeds: [cryoboy], components: [cboy4] });
      } else if (i.customId == "dmech" || i.customId == "dozzamech") {
        await i.update({ embeds: [dozzamech], components: [dmech] });
      } else if (i.customId == "dmech2" || i.customId == "dozzamech2") {
        await i.update({ embeds: [dozzamech], components: [dmech2] });
      } else if (i.customId == "dmech3" || i.customId == "dozzamech3") {
        await i.update({ embeds: [dozzamech], components: [dmech3] });
      } else if (i.customId == "flo" || i.customId == "floss") {
        await i.update({ embeds: [floss], components: [flo] });
      } else if (i.customId == "flo2" || i.customId == "floss2") {
        await i.update({ embeds: [floss], components: [flo2] });
      } else if (i.customId == "flo3" || i.customId == "floss3") {
        await i.update({ embeds: [floss], components: [flo3] });
      } else if (i.customId == "ftimps" || i.customId == "frozentelimps") {
        await i.update({ embeds: [frozentelimps], components: [ftimps] });
      } else if (i.customId == "ftimps2" || i.customId == "frozentelimps2") {
        await i.update({ embeds: [frozentelimps], components: [ftimps2] });
      } else if (i.customId == "ftimps3" || i.customId == "frozentelimps3") {
        await i.update({ embeds: [frozentelimps], components: [ftimps3] });
      } else if (i.customId == "ftimps4" || i.customId == "frozentelimps4") {
        await i.update({ embeds: [frozentelimps], components: [ftimps4] });
      } else if (i.customId == "gburn" || i.customId == "gargburn") {
        await i.update({ embeds: [gargburn], components: [gburn] });
      } else if (i.customId == "gburn2" || i.customId == "gargburn2") {
        await i.update({ embeds: [gargburn], components: [gburn2] });
      } else if (i.customId == "gburn3" || i.customId == "gargburn3") {
        await i.update({ embeds: [gargburn], components: [gburn3] });
      } else if (i.customId == "gburn4" || i.customId == "gargburn4") {
        await i.update({ embeds: [gargburn], components: [gburn4] });
      } else if (i.customId == "gtech" || i.customId == "gargolithtech") {
        await i.update({ embeds: [gargolithtech], components: [gtech] });
      } else if (i.customId == "gtech2" || i.customId == "gargolithtech2") {
        await i.update({ embeds: [gargolithtech], components: [gtech2] });
      } else if (i.customId == "gtech3" || i.customId == "gargolithtech3") {
        await i.update({ embeds: [gargolithtech], components: [gtech3] });
      } else if (i.customId == "gstar22" || i.customId == "gargstar22") {
        await i.update({ embeds: [gargstar22], components: [gstar22] });
      } else if (i.customId == "gstar222" || i.customId == "gargstar222") {
        await i.update({ embeds: [gargstar22], components: [gstar222] });
      } else if (i.customId == "gstar223" || i.customId == "gargstar223") {
        await i.update({ embeds: [gargstar22], components: [gstar223] });
      } else if (i.customId == "gom" || i.customId == "gomorrah") {
        await i.update({ embeds: [gomorrah], components: [gom] });
      } else if (i.customId == "gom2" || i.customId == "gomorrah2") {
        await i.update({ embeds: [gomorrah], components: [gom2] });
      } else if (i.customId == "gom3" || i.customId == "gomorrah3") {
        await i.update({ embeds: [gomorrah], components: [gom3] });
      } else if (i.customId == "gps" || i.customId == "gravepiratestache") {
        await i.update({ embeds: [gravepiratestache], components: [gps] });
      } else if (i.customId == "gps2" || i.customId == "gravepiratestache2") {
        await i.update({ embeds: [gravepiratestache], components: [gps2] });
      } else if (i.customId == "gps3" || i.customId == "gravepiratestache3") {
        await i.update({ embeds: [gravepiratestache], components: [gps3] });
      } else if (i.customId == "gps4" || i.customId == "gravepiratestache4") {
        await i.update({ embeds: [gravepiratestache], components: [gps4] });
      } else if (i.customId == "gstache" || i.customId == "gravestache") {
        await i.update({ embeds: [gravestache], components: [gstache] });
      } else if (i.customId == "gstache2" || i.customId == "gravestache2") {
        await i.update({ embeds: [gravestache], components: [gstache2] });
      } else if (i.customId == "gstache3" || i.customId == "gravestache3") {
        await i.update({ embeds: [gravestache], components: [gstache3] });
      } else if (i.customId == "hbird" || i.customId == "hibird") {
        await i.update({ embeds: [hibird], components: [hbird] });
      } else if (i.customId == "hbird2" || i.customId == "hibird2") {
        await i.update({ embeds: [hibird], components: [hbird2] });
      } else if (i.customId == "hbird3" || i.customId == "hibird3") {
        await i.update({ embeds: [hibird], components: [hbird3] });
      } else if (i.customId == "hbird4" || i.customId == "hibird4") {
        await i.update({ embeds: [hibird], components: [hbird4] });
      } else if (i.customId == "hter" || i.customId == "himpter") {
        await i.update({ embeds: [himps], components: [hter] });
      } else if (i.customId == "hter2" || i.customId == "himpter2") {
        await i.update({ embeds: [himps], components: [hter2] });
      } else if (i.customId == "hter3" || i.customId == "himpter3") {
        await i.update({ embeds: [himps], components: [hter3] });
      } else if (i.customId == "hter4" || i.customId == "himpter4") {
        await i.update({ embeds: [himps], components: [hter4] });
      } else if (i.customId == "hor" || i.customId == "horts") {
        await i.update({ embeds: [horts], components: [hor] });
      } else if (i.customId == "hor2" || i.customId == "horts2") {
        await i.update({ embeds: [horts], components: [hor2] });
      } else if (i.customId == "hor3" || i.customId == "horts3") {
        await i.update({ embeds: [horts], components: [hor3] });
      } else if (i.customId == "hor4" || i.customId == "horts4") {
        await i.update({ embeds: [horts], components: [hor4] });
      } else if (i.customId == "homo" || i.customId == "homophobia") {
        await i.update({ embeds: [homophobia], components: [homo] });
      } else if (i.customId == "homo2" || i.customId == "homophobia2") {
        await i.update({ embeds: [homophobia], components: [homo2] });
      } else if (i.customId == "homo3" || i.customId == "homophobia3") {
        await i.update({ embeds: [homophobia], components: [homo3] });
      } else if (i.customId == "ibox" || i.customId == "icebox") {
        await i.update({ embeds: [icebox], components: [ibox] });
      } else if (i.customId == "ibox2" || i.customId == "icebox2") {
        await i.update({ embeds: [icebox], components: [ibox2] });
      } else if (i.customId == "ibox3" || i.customId == "icebox3") {
        await i.update({ embeds: [icebox], components: [ibox3] });
      } else if (i.customId == "igbc" || i.customId == "igmablobchum") {
        await i.update({ embeds: [igmablobchum], components: [igbc] });
      } else if (i.customId == "igbc2" || i.customId == "igmablobchum2") {
        await i.update({ embeds: [igmablobchum], components: [igbc2] });
      } else if (i.customId == "igbc3" || i.customId == "igmablobchum3") {
        await i.update({ embeds: [igmablobchum], components: [igbc3] });
      } else if (i.customId == "igbc4" || i.customId == "igmablobchum4") {
        await i.update({ embeds: [igmablobchum], components: [igbc4] });
      } else if (i.customId == "ltbr" || i.customId == "lockthebathroom") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr] });
      } else if (i.customId == "ltbr2" || i.customId == "lockthebathroom2") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr2] });
      } else if (i.customId == "ltbr3" || i.customId == "lockthebathroom3") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr3] });
      } else if (i.customId == "tmech" || i.customId == "trickmech") {
        await i.update({ embeds: [trickmech], components: [tmech] });
      } else if (i.customId == "tmech2" || i.customId == "trickmech2") {
        await i.update({ embeds: [trickmech], components: [tmech2] });
      } else if (i.customId == "tmech3" || i.customId == "trickmech3") {
        await i.update({ embeds: [trickmech], components: [tmech3] });
      } else if (i.customId == "mbolt" || i.customId == "marxbolt") {
        await i.update({ embeds: [marxbolt], components: [mbolt] });
      } else if (i.customId == "mbolt2" || i.customId == "marxbolt2") {
        await i.update({ embeds: [marxbolt], components: [mbolt2] });
      } else if (i.customId == "mbolt3" || i.customId == "marxbolt3") {
        await i.update({ embeds: [marxbolt], components: [mbolt3] });
      } else if (i.customId == "mcon" || i.customId == "mechacontrol") {
        await i.update({ embeds: [mechacontrol], components: [mcon] });
      } else if (i.customId == "mcon2" || i.customId == "mechacontrol2") {
        await i.update({ embeds: [mechacontrol], components: [mcon2] });
      } else if (i.customId == "mcon3" || i.customId == "mechacontrol3") {
        await i.update({ embeds: [mechacontrol], components: [mcon3] });
      } else if (i.customId == "mscope" || i.customId == "mechascope") {
        await i.update({ embeds: [mechascope], components: [mscope] });
      } else if (i.customId == "mscope2" || i.customId == "mechascope2") {
        await i.update({ embeds: [mechascope], components: [mscope2] });
      } else if (i.customId == "mscope3" || i.customId == "mechascope3") {
        await i.update({ embeds: [mechascope], components: [mscope3] });
      } else if (i.customId == "mscope4" || i.customId == "mechascope4") {
        await i.update({ embeds: [mechascope], components: [mscope4] });
      } else if (i.customId == "ltime" || i.customId == "lunchtime") {
        await i.update({ embeds: [lunchtime], components: [ltime] });
      } else if (i.customId == "ltime2" || i.customId == "lunchtime2") {
        await i.update({ embeds: [lunchtime], components: [ltime2] });
      } else if (i.customId == "ltime3" || i.customId == "lunchtime3") {
        await i.update({ embeds: [lunchtime], components: [ltime3] });
      } else if (i.customId == "npa" || i.customId == "noplayingallowed") {
        await i.update({ embeds: [noplayingallowed], components: [npa] });
      } else if (i.customId == "npa2" || i.customId == "noplayingallowed2") {
        await i.update({ embeds: [noplayingallowed], components: [npa2] });
      } else if (i.customId == "npa3" || i.customId == "noplayingallowed3") {
        await i.update({ embeds: [noplayingallowed], components: [npa3] });
      } else if (i.customId == "otksw" || i.customId == "otkswabbie") {
        await i.update({ embeds: [otkswabbie], components: [otksw] });
      } else if (i.customId == "otksw2" || i.customId == "otkswabbie2") {
        await i.update({ embeds: [otkswabbie], components: [otksw2] });
      } else if (i.customId == "otksw3" || i.customId == "otkswabbie3") {
        await i.update({ embeds: [otkswabbie], components: [otksw3] });
      } else if (i.customId == "kscope" || i.customId == "kaleidoscope") {
        await i.update({ embeds: [kaleidoscope], components: [kscope] });
      } else if (i.customId == "kscope2" || i.customId == "kaleidoscope2") {
        await i.update({ embeds: [kaleidoscope], components: [kscope2] });
      } else if (i.customId == "kscope3" || i.customId == "kaleidoscope3") {
        await i.update({ embeds: [kaleidoscope], components: [kscope3] });
      } else if (i.customId == "pyeeyz" || i.customId == "pablosyeeyzs") {
        await i.update({ embeds: [pablosyeezys], components: [pyeeyz] });
      } else if (i.customId == "pyeeyz2" || i.customId == "pablosyeeyzs2") {
        await i.update({ embeds: [pablosyeezys], components: [pyeeyz2] });
      } else if (i.customId == "pyeeyz3" || i.customId == "pablosyeeyzs3") {
        await i.update({ embeds: [pablosyeezys], components: [pyeeyz3] });
      } else if (i.customId == "pyeeyz4" || i.customId == "pablosyeeyzs4") {
        await i.update({ embeds: [pablosyeezys], components: [pyeeyz4] });
      } else if (i.customId == "pfeast" || i.customId == "pbfeast") {
        await i.update({ embeds: [pbfeast], components: [pfeast] });
      } else if (i.customId == "pfeast2" || i.customId == "pbfeast2") {
        await i.update({ embeds: [pbfeast], components: [pfeast2] });
      } else if (i.customId == "pfeast3" || i.customId == "pbfeast3") {
        await i.update({ embeds: [pbfeast], components: [pfeast3] });
      } else if (i.customId == "pmop" || i.customId == "petmop") {
        await i.update({ embeds: [petmop], components: [pmop] });
      } else if (i.customId == "pmop2" || i.customId == "petmop2") {
        await i.update({ embeds: [petmop], components: [pmop2] });
      } else if (i.customId == "pmop3" || i.customId == "petmop3") {
        await i.update({ embeds: [petmop], components: [pmop3] });
      } else if (
        i.customId == "propackage" ||
        i.customId == "professorpackage"
      ) {
        await i.update({
          embeds: [professorpackage],
          components: [propackage],
        });
      } else if (
        i.customId == "propackage2" ||
        i.customId == "professorpackage2"
      ) {
        await i.update({
          embeds: [professorpackage],
          components: [propackage2],
        });
      } else if (
        i.customId == "propackage3" ||
        i.customId == "professorpackage3"
      ) {
        await i.update({
          embeds: [professorpackage],
          components: [propackage3],
        });
      } else if (i.customId == "rac" || i.customId == "racism") {
        await i.update({ embeds: [racism], components: [rac] });
      } else if (i.customId == "rac2" || i.customId == "racism2") {
        await i.update({ embeds: [racism], components: [rac2] });
      } else if (i.customId == "rac3" || i.customId == "racism3") {
        await i.update({ embeds: [racism], components: [rac3] });
      } else if (i.customId == "rpackage" || i.customId == "raiserpackage") {
        await i.update({ embeds: [raiserpackage], components: [rpackage] });
      } else if (i.customId == "rpackage2" || i.customId == "raiserpackage2") {
        await i.update({ embeds: [raiserpackage], components: [rpackage2] });
      } else if (i.customId == "rpackage3" || i.customId == "raiserpackage3") {
        await i.update({ embeds: [raiserpackage], components: [rpackage3] });
      } else if (i.customId == "rticia" || i.customId == "rampticia") {
        await i.update({ embeds: [rampticia], components: [rticia] });
      } else if (i.customId == "rticia2" || i.customId == "rampticia2") {
        await i.update({ embeds: [rampticia], components: [rticia2] });
      } else if (i.customId == "rticia3" || i.customId == "rampticia3") {
        await i.update({ embeds: [rampticia], components: [rticia3] });
      } else if (i.customId == "syard" || i.customId == "schoolyard") {
        await i.update({ embeds: [schoolyard], components: [syard] });
      } else if (i.customId == "syard2" || i.customId == "schoolyard2") {
        await i.update({ embeds: [schoolyard], components: [syard2] });
      } else if (i.customId == "syard3" || i.customId == "schoolyard3") {
        await i.update({ embeds: [schoolyard], components: [syard3] });
      } else if (i.customId == "sea" || i.customId == "seacret") {
        await i.update({ embeds: [seacret], components: [sea] });
      } else if (i.customId == "sea2" || i.customId == "seacret2") {
        await i.update({ embeds: [seacret], components: [sea2] });
      } else if (i.customId == "sea3" || i.customId == "seacret3") {
        await i.update({ embeds: [seacret], components: [sea3] });
      } else if (i.customId == "svery" || i.customId == "slavery") {
        await i.update({ embeds: [slavery], components: [svery] });
      } else if (i.customId == "svery2" || i.customId == "slavery2") {
        await i.update({ embeds: [slavery], components: [svery2] });
      } else if (i.customId == "svery3" || i.customId == "slavery3") {
        await i.update({ embeds: [slavery], components: [svery3] });
      } else if (i.customId == "stars" || i.customId == "spacestars") {
        await i.update({ embeds: [spacestars], components: [stars] });
      } else if (i.customId == "stars2" || i.customId == "spacestars2") {
        await i.update({ embeds: [spacestars], components: [stars2] });
      } else if (i.customId == "stars3" || i.customId == "spacestars3") {
        await i.update({ embeds: [spacestars], components: [stars3] });
      } else if (i.customId == "stars4" || i.customId == "spacestars4") {
        await i.update({ embeds: [spacestars], components: [stars4] });
      } else if (i.customId == "spl" || i.customId == "splimps") {
        await i.update({ embeds: [splimps], components: [spl] });
      } else if (i.customId == "spl2" || i.customId == "splimps2") {
        await i.update({ embeds: [splimps], components: [spl2] });
      } else if (i.customId == "spl3" || i.customId == "splimps3") {
        await i.update({ embeds: [splimps], components: [spl3] });
      } else if (i.customId == "sticia" || i.customId == "stacheticia") {
        await i.update({ embeds: [stacheticia], components: [sticia] });
      } else if (i.customId == "sticia2" || i.customId == "stacheticia2") {
        await i.update({ embeds: [stacheticia], components: [sticia2] });
      } else if (i.customId == "sticia3" || i.customId == "stacheticia3") {
        await i.update({ embeds: [stacheticia], components: [sticia3] });
      } else if (i.customId == "saggro" || i.customId == "sushiaggro") {
        await i.update({ embeds: [sushiaggro], components: [saggro] });
      } else if (i.customId == "saggro2" || i.customId == "sushiaggro2") {
        await i.update({ embeds: [sushiaggro], components: [saggro2] });
      } else if (i.customId == "saggro3" || i.customId == "sushiaggro3") {
        await i.update({ embeds: [sushiaggro], components: [saggro3] });
      } else if (i.customId == "sbandits" || i.customId == "sunbandits") {
        await i.update({ embeds: [sunbandits], components: [sbandits] });
      } else if (i.customId == "sbandits2" || i.customId == "sunbandits2") {
        await i.update({ embeds: [sunbandits], components: [sbandits2] });
      } else if (i.customId == "sbandits3" || i.customId == "sunbandits3") {
        await i.update({ embeds: [sunbandits], components: [sbandits3] });
      } else if (i.customId == "sbandits4" || i.customId == "sunbandits4") {
        await i.update({ embeds: [sunbandits], components: [sbandits4] });
      } else if (i.customId == "slord" || i.customId == "sunlord") {
        await i.update({ embeds: [sunlord], components: [slord] });
      } else if (i.customId == "slord2" || i.customId == "sunlord2") {
        await i.update({ embeds: [sunlord], components: [slord2] });
      } else if (i.customId == "slord3" || i.customId == "sunlord3") {
        await i.update({ embeds: [sunlord], components: [slord3] });
      } else if (i.customId == "slord4" || i.customId == "sunlord4") {
        await i.update({ embeds: [sunlord], components: [slord4] });
      } else if (i.customId == "timps" || i.customId == "telimps") {
        await i.update({ embeds: [telimps], components: [timps] });
      } else if (i.customId == "timps2" || i.customId == "telimps2") {
        await i.update({ embeds: [telimps], components: [timps2] });
      } else if (i.customId == "timps3" || i.customId == "telimps3") {
        await i.update({ embeds: [telimps], components: [timps3] });
      } else if (i.customId == "timps4" || i.customId == "telimps4") {
        await i.update({ embeds: [telimps], components: [timps4] });
      } else if (i.customId == "timpssb" || i.customId == "telimpssb") {
        await i.update({ embeds: [telimpssb], components: [timpssb] });
      } else if (i.customId == "timpssb2" || i.customId == "telimpssb2") {
        await i.update({ embeds: [telimpssb], components: [timpssb2] });
      } else if (i.customId == "timpssb3" || i.customId == "telimpssb3") {
        await i.update({ embeds: [telimpssb], components: [timpssb3] });
      } else if (i.customId == "timpssb4" || i.customId == "telimpssb4") {
        await i.update({ embeds: [telimpssb], components: [timpssb4] });
      } else if (
        i.customId == "terrifyster" ||
        i.customId == "terrifytricksterazzi"
      ) {
        await i.update({
          embeds: [terrifytricksterazzi],
          components: [terrifyster],
        });
      } else if (
        i.customId == "terrifyster2" ||
        i.customId == "terrifytricksterazzi2"
      ) {
        await i.update({
          embeds: [terrifytricksterazzi],
          components: [terrifyster2],
        });
      } else if (
        i.customId == "terrifyster3" ||
        i.customId == "terrifytricksterazzi3"
      ) {
        await i.update({
          embeds: [terrifytricksterazzi],
          components: [terrifyster3],
        });
      } else if (
        i.customId == "terrifyster4" ||
        i.customId == "terrifytricksterazzi4"
      ) {
        await i.update({
          embeds: [terrifytricksterazzi],
          components: [terrifyster4],
        });
      } else if (i.customId == "tstache" || i.customId == "trickstache") {
        await i.update({ embeds: [trickstache], components: [tstache] });
      } else if (i.customId == "tstache2" || i.customId == "trickstache2") {
        await i.update({ embeds: [trickstache], components: [tstache2] });
      } else if (i.customId == "tstache3" || i.customId == "trickstache3") {
        await i.update({ embeds: [trickstache], components: [tstache3] });
      } else if (i.customId == "tstache4" || i.customId == "trickstache4") {
        await i.update({ embeds: [trickstache], components: [tstache4] });
      } else if (i.customId == "ubolt" || i.customId == "uncrackabolt") {
        await i.update({ embeds: [uncrackabolt], components: [ubolt] });
      } else if (i.customId == "ubolt2" || i.customId == "uncrackabolt2") {
        await i.update({ embeds: [uncrackabolt], components: [ubolt2] });
      } else if (i.customId == "ubolt3" || i.customId == "uncrackabolt3") {
        await i.update({ embeds: [uncrackabolt], components: [ubolt3] });
      } else if (i.customId == "umech" || i.customId == "uncrackamech") {
        await i.update({ embeds: [uncrackamech], components: [umech] });
      } else if (i.customId == "umech2" || i.customId == "uncrackamech2") {
        await i.update({ embeds: [uncrackamech], components: [umech2] });
      } else if (i.customId == "umech3" || i.customId == "uncrackamech3") {
        await i.update({ embeds: [uncrackamech], components: [umech3] });
      } else if (i.customId == "umech4" || i.customId == "uncrackamech4") {
        await i.update({ embeds: [uncrackamech], components: [umech4] });
      } else if (i.customId == "vster" || i.customId == "valkster") {
        await i.update({ embeds: [valkster], components: [vster] });
      } else if (i.customId == "vster2" || i.customId == "valkster2") {
        await i.update({ embeds: [valkster], components: [vster2] });
      } else if (i.customId == "vster3" || i.customId == "valkster3") {
        await i.update({ embeds: [valkster], components: [vster3] });
      } else if (i.customId == "vster4" || i.customId == "valkster4") {
        await i.update({ embeds: [valkster], components: [vster4] });
      } else if (i.customId == "wsports" || i.customId == "watersports") {
        await i.update({ embeds: [watersports], components: [wsports] });
      } else if (i.customId == "wsports2" || i.customId == "watersports2") {
        await i.update({ embeds: [watersports], components: [wsports2] });
      } else if (i.customId == "wsports3" || i.customId == "watersports3") {
        await i.update({ embeds: [watersports], components: [wsports3] });
      } else if (i.customId == "wsports4" || i.customId == "watersports4") {
        await i.update({ embeds: [watersports], components: [wsports4] });
      } else if (i.customId == "wph" || i.customId == "whalepharaoh") {
        await i.update({ embeds: [whalepharaoh], components: [wph] });
      } else if (i.customId == "wph2" || i.customId == "whalepharaoh2") {
        await i.update({ embeds: [whalepharaoh], components: [wph2] });
      } else if (i.customId == "wph3" || i.customId == "whalepharaoh3") {
        await i.update({ embeds: [whalepharaoh], components: [wph3] });
      } else if (i.customId == "wph4" || i.customId == "whalepharaoh4") {
        await i.update({ embeds: [whalepharaoh], components: [wph4] });
      } else if (i.customId == "ycmartin" || i.customId == "youngcatmartin") {
        await i.update({ embeds: [youngcatmartin], components: [ycmartin] });
      } else if (i.customId == "ycmartin2" || i.customId == "youngcatmartin2") {
        await i.update({ embeds: [youngcatmartin], components: [ycmartin2] });
      } else if (i.customId == "ycmartin3" || i.customId == "youngcatmartin3") {
        await i.update({ embeds: [youngcatmartin], components: [ycmartin3] });
      } else if (i.customId == "ycmartin4" || i.customId == "youngcatmartin4") {
        await i.update({ embeds: [youngcatmartin], components: [ycmartin4] });
      } else if (i.customId == "yemartin" || i.customId == "youngeggmartin") {
        await i.update({ embeds: [youngeggmartin], components: [yemartin] });
      } else if (i.customId == "yemartin2" || i.customId == "youngeggmartin2") {
        await i.update({ embeds: [youngeggmartin], components: [yemartin2] });
      } else if (i.customId == "yemartin3" || i.customId == "youngeggmartin3") {
        await i.update({ embeds: [youngeggmartin], components: [yemartin3] });
      } else if (i.customId == "ykmartin" || i.customId == "youngkenmartin") {
        await i.update({ embeds: [youngkenmartin], components: [ykmartin] });
      } else if (i.customId == "ykmartin2" || i.customId == "youngkenmartin2") {
        await i.update({ embeds: [youngkenmartin], components: [ykmartin2] });
      } else if (i.customId == "ykmartin3" || i.customId == "youngkenmartin3") {
        await i.update({ embeds: [youngkenmartin], components: [ykmartin3] });
      } else if (i.customId == "ykmartin4" || i.customId == "youngkenmartin4") {
        await i.update({ embeds: [youngkenmartin], components: [ykmartin4] });
      } else if (i.customId == "zm" || i.customId == "zmoss") {
        await i.update({ embeds: [zmoss], components: [zm] });
      } else if (i.customId == "zm2" || i.customId == "zmoss2") {
        await i.update({ embeds: [zmoss], components: [zm2] });
      } else if (i.customId == "zm3" || i.customId == "zmoss3") {
        await i.update({ embeds: [zmoss], components: [zm3] });
      } else if (i.customId == "lt" || i.customId == "ladytuna") {
        await i.update({ embeds: [ladytuna], components: [lt] });
      } else if (i.customId == "lt2" || i.customId == "ladytuna2") {
        await i.update({ embeds: [ladytuna], components: [lt2] });
      } else if (i.customId == "lt3" || i.customId == "ladytuna3") {
        await i.update({ embeds: [ladytuna], components: [lt3] });
      } else if (i.customId == "lsnap" || i.customId == "lasersnap") {
        await i.update({ embeds: [lasersnap], components: [lsnap] });
      } else if (i.customId == "lsnap2" || i.customId == "lasersnap2") {
        await i.update({ embeds: [lasersnap], components: [lsnap2] });
      } else if (i.customId == "lsnap3" || i.customId == "lasersnap3") {
        await i.update({ embeds: [lasersnap], components: [lsnap3] });
      } else if (i.customId == "lsnap4" || i.customId == "lasersnap4") {
        await i.update({ embeds: [lasersnap], components: [lsnap4] });
      } else if (i.customId == "hotk" || i.customId == "healthotk") {
        await i.update({ embeds: [healthotk], components: [hotk] });
      } else if (i.customId == "hotk2" || i.customId == "healthotk2") {
        await i.update({ embeds: [healthotk], components: [hotk2] });
      } else if (i.customId == "hotk3" || i.customId == "healthotk3") {
        await i.update({ embeds: [healthotk], components: [hotk3] });
      } else if (i.customId == "hotk4" || i.customId == "healthotk4") {
        await i.update({ embeds: [healthotk], components: [hotk4] });
      } else if (i.customId == "pts" || i.customId == "pawntrickstab") {
        await i.update({ embeds: [pawntrickstab], components: [pts] });
      } else if (i.customId == "pts2" || i.customId == "pawntrickstab2") {
        await i.update({ embeds: [pawntrickstab], components: [pts2] });
      } else if (i.customId == "pts3" || i.customId == "pawntrickstab3") {
        await i.update({ embeds: [pawntrickstab], components: [pts3] });
      } else if (i.customId == "nut" || i.customId == "nuttin") {
        await i.update({ embeds: [nuttin], components: [nut] });
      } else if (i.customId == "nut2" || i.customId == "nuttin2") {
        await i.update({ embeds: [nuttin], components: [nut2] });
      } else if (i.customId == "nut3" || i.customId == "nuttin3") {
        await i.update({ embeds: [nuttin], components: [nut3] });
      } else if (i.customId == "rfl" || i.customId == "reflourished") {
        await i.update({ embeds: [reflourished], components: [rfl] });
      } else if (i.customId == "rfl2" || i.customId == "reflourished2") {
        await i.update({ embeds: [reflourished], components: [rfl2] });
      } else if (i.customId == "rfl3" || i.customId == "reflourished3") {
        await i.update({ embeds: [reflourished], components: [rfl3] });
      } else if (i.customId == "sav" || i.customId == "savage") {
        await i.update({ embeds: [savage22], components: [sav] });
      } else if (i.customId == "sav2" || i.customId == "savage2") {
        await i.update({ embeds: [savage22], components: [sav2] });
      } else if (i.customId == "sav3" || i.customId == "savage3") {
        await i.update({ embeds: [savage22], components: [sav3] });
      } else if (i.customId == "sav4" || i.customId == "savage4") {
        await i.update({ embeds: [savage22], components: [sav4] });
      } else if (i.customId == "carr" || i.customId == "carroot") {
        await i.update({ embeds: [carroot], components: [carr] });
      } else if (i.customId == "carr2" || i.customId == "carroot2") {
        await i.update({ embeds: [carroot], components: [carr2] });
      } else if (i.customId == "carr3" || i.customId == "carroot3") {
        await i.update({ embeds: [carroot], components: [carr3] });
      } else if (i.customId == "carr4" || i.customId == "carroot4") {
        await i.update({ embeds: [carroot], components: [carr4] });
      } else if (i.customId == "hgargs" || i.customId == "huntgargs") {
        await i.update({ embeds: [huntgargs], components: [hgargs] });
      } else if (i.customId == "hgargs2" || i.customId == "huntgargs2") {
        await i.update({ embeds: [huntgargs], components: [hgargs2] });
      } else if (i.customId == "hgargs3" || i.customId == "huntgargs3") {
        await i.update({ embeds: [huntgargs], components: [hgargs3] });
      } else if (i.customId == "pb" || i.customId == "pbeans") {
        await i.update({ embeds: [pbeans], components: [pb] });
      } else if (i.customId == "pb2" || i.customId == "pbeans2") {
        await i.update({ embeds: [pbeans], components: [pb2] });
      }
      if (i.customId == "pb3" || i.customId == "pbeans3") {
        await i.update({ embeds: [pbeans], components: [pb3] });
      } else if (i.customId == "pop" || i.customId == "popsicle") {
        await i.update({ embeds: [popsicle], components: [pop] });
      } else if (i.customId == "pop2" || i.customId == "popsicle2") {
        await i.update({ embeds: [popsicle], components: [pop2] });
      } else if (i.customId == "pop3" || i.customId == "popsicle3") {
        await i.update({ embeds: [popsicle], components: [pop3] });
      } else if (i.customId == "dgloves" || i.customId == "dinogloves") {
        await i.update({ embeds: [dinogloves], components: [dgloves] });
      } else if (i.customId == "dgloves2" || i.customId == "dinogloves2") {
        await i.update({ embeds: [dinogloves], components: [dgloves2] });
      } else if (i.customId == "dgloves3" || i.customId == "dinogloves3") {
        await i.update({ embeds: [dinogloves], components: [dgloves3] });
      } else if (i.customId == "nhks" || i.customId == "nohokaistars") {
        await i.update({ embeds: [nohokaistars], components: [nhks] });
      } else if (i.customId == "nhks2" || i.customId == "nohokaistars2") {
        await i.update({ embeds: [nohokaistars], components: [nhks2] });
      } else if (i.customId == "nhks3" || i.customId == "nohokaistars3") {
        await i.update({ embeds: [nohokaistars], components: [nhks3] });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "starter") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
