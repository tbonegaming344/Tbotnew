const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
let db = require("../../index.js");
const nohokaistars = require("../../Zombies/IF/nohokaistars.js");
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
    const allprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watertron")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wr100")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wr100 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpallp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ab")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ab = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("winrate100")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bct")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bct = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("abeans")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bcc")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bcc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetct")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bcz")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bcz = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetcc")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgk")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bgk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetcz")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgs")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bgs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetgk")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bnc")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bnc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetgs")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bro")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetnc")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsf")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetro")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsf")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bwk")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bwk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cank")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cank = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetwk")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("carr")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
	  const carr = new ActionRowBuilder().addComponents(
	   new ButtonBuilder()
	    .setCustomId("cancerknight")
		  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		  .setStyle(ButtonStyle.Primary),
	    new ButtonBuilder()
	    .setCustomId("chemo")
		  .setEmoji("<:arrowright:1271446796207525898>")
		  .setStyle(ButtonStyle.Primary)
	  );
    const chemo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("carroot")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cburn")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("chemotherapy")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dgloves")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dgloves = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cyburn")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("eject")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const eject = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dinogloves")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("flottery")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const flottery = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ejection")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fheal")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fheal = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("figlottery")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fmr")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fmr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("freezeheal")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fflare")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fflare = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymidrose")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g3n")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const g3n = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("funnyflare")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hburn")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("going3nuts")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("healcon")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const healcon = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healburn")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hmr")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hmr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healcontrol")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hotk")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hotk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healmidrose")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hland")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hland = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healthotk")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lsnap")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lsnap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("highlander")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lcbd")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lcbd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lasersnap")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mred")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mred = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lifecouldbedream")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mopr")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mopr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("msp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const msp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mopribus")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pts")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pts = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mspotk")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pb")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pawntrickstab")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("plmop")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const plmop = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pbeans")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pop")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pop = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("plantmop")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("psol")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const psol = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("popsicle")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("nut")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const nut = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psychosolstice")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("radio")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const radio = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("nuttin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("r2s")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const r2s = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("radiotherapy")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rfl")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rfl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ramp2seedling")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("smf")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const smf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("reflourished")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("shambc")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const shambc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savagemayflower")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sknight")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sknight = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("shamcontrolbc")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("srings")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const srings = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("shitknight")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stron")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stron = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("starrings")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tc")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("startron")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tlattail")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tlattail = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("toyotacontrolla")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wtron")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wtron = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("translattail")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allphelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const allpdecks = [
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
    ];
    let toBuildPString = "";
    for (let i = 0; i < allpdecks.length; i++) {
      toBuildPString += `\n**${allpdecks[i]}**`;
    }
    let Ccommands = Array.from(client.commands.values());
    let commands = Ccommands.filter((command) => {
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
    const budgetprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetwk2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bct2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bct2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetphelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bcc2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bcc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetct2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bcz2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bcz2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetcc2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgk2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bgk2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetcz2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgs2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bgs2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetgk2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bnc2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bnc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetgs2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bro2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bro2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetnc2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsf2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsf2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetro2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsp2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsp2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsf2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bwk2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bwk2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsp2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helppbudget")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const budgetpdecks = [
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
    ];
    let toBuildBudgetPString = "";
    for (let i = 0; i < budgetpdecks.length; i++) {
      toBuildBudgetPString += `\n<@1043528908148052089> **${budgetpdecks[i]}**`;
    }
    const compprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watertron2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ab2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ab2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("compphelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("chemo2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const chemo2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("abeans2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cburn2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cburn2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("chemotherapy2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("flottery2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const flottery2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cyburn2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("healcon2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const healcon2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("figlottery2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hmr2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hmr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healcontrol2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pts2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pts2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healmidrose2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("radio2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const radio2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pawntrickstab2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rfl2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rfl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("radiotherapy2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("shambc2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const shambc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("reflourished2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tc2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("shamcontrolbc2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wtron2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wtron2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("toyotacontrolla2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helppcomp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const comppdecks = [
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
    ];
    let toBuildCompPString = "";
    for (let i = 0; i < comppdecks.length; i++) {
      toBuildCompPString += `\n<@1043528908148052089> **${comppdecks[i]}**`;
    }
    const ladderprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pbeans2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("carr2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
	const carr2 = new ActionRowBuilder().addComponents(
	new ButtonBuilder()
		.setCustomId("helppladder")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		.setStyle(ButtonStyle.Primary),
	new ButtonBuilder()
		.setCustomId("eject2")
		.setEmoji("<:arrowright:1271446796207525898>")
		.setStyle(ButtonStyle.Primary)
	);
    const eject2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("carroot2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fmr2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fmr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ejection2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g3n2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const g3n2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymidrose2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mred2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mred2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("going3nuts2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pb2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ladderphelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
  );
    const ladderpdecks = [
	    "carroot",
      "ejection",
      "frymidrose",
      "going3nuts",
      "midred",
      "pbeans"
    ];
    let toBuildLadderPString = "";
    for (let i = 0; i < ladderpdecks.length; i++) {
      toBuildLadderPString += `\n<@1043528908148052089> **${ladderpdecks[i]}**`;
    }
    const memeprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("translattail2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wr1002")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wr1002 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("memephelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cank2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cank2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("winrate1002")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dgloves2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dgloves2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cancerknight2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fheal2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fheal2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dinogloves2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fflare2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fflare2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("freezeheal2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hburn2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hburn2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("funnyflare2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hotk2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hotk2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healburn2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hland2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hland2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healthotk2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lsnap2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lsnap2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("highlander2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lcbd2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lcbd2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lasersnap2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mopr2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mopr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lifecouldbedream2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("msp2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const msp2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mopribus2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("nut2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const nut2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mspotk2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("plmop2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const plmop2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("nuttin2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pop2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pop2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("plantmop2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("psol2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const psol2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("popsicle2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("r2s2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const r2s2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psychosolstice2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("smf2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const smf2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ramp2seedling2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sknight2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sknight2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savagemayflower2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("srings2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const srings2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("shitknight2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stron2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stron2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("starrings2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tlattail2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tlattail2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("startron2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helppmeme")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const memepdecks = [
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
    ];
    let toBuildMemePString = "";
    for (let i = 0; i < memepdecks.length; i++) {
      toBuildMemePString += `\n<@1043528908148052089> **${memepdecks[i]}**`;
    }
    const aggroprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watertron3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ab3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ab3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helppaggro")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dgloves3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dgloves3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("abeans3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pb3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dinogloves3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wtron3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wtron3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pbeans3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aggrophelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const aggropdecks = [
      "abeans", 
      "dinogloves", 
      "pbeans", 
      "watertron"
    ];
    let toBuildAggroPString = "";
    for (let i = 0; i < aggropdecks.length; i++) {
      toBuildAggroPString += `\n<@1043528908148052089> **${aggropdecks[i]}**`;
    }
    const comboprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("translattail3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bcc3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bcc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helppcombo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("carr3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
	const carr3 = new ActionRowBuilder().addComponents(
	new ButtonBuilder()
		.setCustomId("budgetcc3")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		.setStyle(ButtonStyle.Primary),
	new ButtonBuilder()
		.setCustomId("cburn3")
		.setEmoji("<:arrowright:1271446796207525898>")
		.setStyle(ButtonStyle.Primary)
	);
    const cburn3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("carroot3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fheal3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fheal3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cyburn3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fflare3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fflare3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("freezeheal3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("healcon3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const g3n3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("funnyflare3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hburn3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hburn3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("going3nuts3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hotk3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hotk3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healburn3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lsnap3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lsnap3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healthotk3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mred3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mred3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lasersnap3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mopr3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mopr3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("msp3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const msp3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mopribus3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("nut3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const nut3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mspotk3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("plmop3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const plmop3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("nuttin3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("psol3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const psol3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("plantmop3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("r2s3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const r2s3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psychosolstice3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("smf3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const smf3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ramp2seedling3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("srings3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const srings3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savagemayflower3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stron3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stron3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("starrings3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tlattail3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tlattail3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("startron3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combophelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const combopdecks = [
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
    ];
    let toBuildComboPString = "";
    for (let i = 0; i < combopdecks.length; i++) {
      toBuildComboPString += `\n<@1043528908148052089> **${combopdecks[i]}**`;
    }
    const controlprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("toyotacontrolla3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cank3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cank3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helppcontrol")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("chemo3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const chemo3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cancerknight3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("eject3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const eject3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("chemotherapy3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("healcon3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const healcon3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ejection3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pts3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const pts3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healcontrol3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pop3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pop3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pawntrickstab3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("radio3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const radio3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("popsicle3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("shambc3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const shambc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("radiotherapy3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sknight3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sknight3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("shamcontrolbc3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tc3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("shitknight3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("controlphelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const controlpdecks = [
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
    ];
    let toBuildControlPString = "";
    for (let i = 0; i < controlpdecks.length; i++) {
      toBuildControlPString += `\n<@1043528908148052089> **${controlpdecks[i]}**`;
    }
    const midrangeprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("startron4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cburn4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cburn4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helppmidrange")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("flottery3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const flottery3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cyburn4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g3n4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const fflare4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("flottery3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g3n4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const g3n4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("funnyflare4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hburn4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hburn4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("going3nuts4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hmr3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hmr3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healburn4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hotk4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hotk4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healmidrose3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hland3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hland3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("healthotk4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lsnap4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lsnap4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("highlander3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mred4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mred4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lasersnap4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mopr4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mopr4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midred4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("psol4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const psol4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mopribus4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("r2s4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const r2s4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psychosolstice4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rfl3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rfl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ramp2seedling4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("srings4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const srings4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("reflourished3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stron4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stron4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("starrings4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midrangephelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const midrangepdecks = [
      "cyburn",
      "figlottery",
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
    ];
    let toBuildMidrangePString = "";
    for (let i = 0; i < midrangepdecks.length; i++) {
      toBuildMidrangePString += `\n<@1043528908148052089> **${midrangepdecks[i]}**`;
    }
    const tempoprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("translattail4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wr1003")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wr1003 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tempophelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bct3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bct3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("winrate1003")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bcz3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bcz3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetct3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgk3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bgk3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetcz3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgs3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bgs3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetgk3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bnc3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bnc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetgs3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bro3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bro3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetnc3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsf3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsf3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetro3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsp3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsp3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsf3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bwk3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bwk3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsp3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("carr4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
	const carr4 = new ActionRowBuilder().addComponents(
	new ButtonBuilder()
		.setCustomId("budgetwk3")
		.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
		.setStyle(ButtonStyle.Primary),
	new ButtonBuilder()
		.setCustomId("fmr3")
		.setEmoji("<:arrowright:1271446796207525898>")
		.setStyle(ButtonStyle.Primary)
	);
    const fmr3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("carroot4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lcbd3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lcbd3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymidrose3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tlattail4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tlattail4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lifecouldbedream3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpptempo")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tempopdecks = [
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
      "frymidrose",
      "lifecouldbedream",
      "translattail",
    ];
    let toBuildTempoPString = "";
    for (let i = 0; i < tempopdecks.length; i++) {
      toBuildTempoPString += `\n<@1043528908148052089> **${tempopdecks[i]}**`;
    }
    const allzrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("zmoss")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sav")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sav = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("allzhelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agr")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savage")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agor")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agor = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("agraves")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agoragor")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agoragor = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagor")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfmg")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfmg = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagoragor")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfpc")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfpc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfmidgargs")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bas")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bas = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfplankcontrol")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );

    const bfw = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bastet")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfwrap")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfwrap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("binaryflagwar")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bbolt")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bbolt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("blobfishwrappers")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bducks")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bducks = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("boltbolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("brad")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const brad = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bonusducks")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bbf")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bbf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("brady")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("beb")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const beb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetbf")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bif")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bif = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgeteb")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bim")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bim = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetif")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bnt")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bnt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetim")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bpb")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bpb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetnt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("brb")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const brb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetpb")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsb")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetrb")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsb")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bykm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bykm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsm")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bzm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bzm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetykm")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bust")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bust = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetzm")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cog")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cog = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bustbolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cbait")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cbait = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("coggerazzi")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cleap")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cleap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("congabait")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cboy")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cboy = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("conjureleap")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dmech")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dmech = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cryoboy")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("flo")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const flo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dozzamech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ftimps")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ftimps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("floss")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gburn")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frozentelimps")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gtech")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gtech = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargburn")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gstar22")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gstar22 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargolithtech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gom")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gom = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargstar22")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gps")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gomorrah")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gstache")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gstache = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravepiratestache")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hibird")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hbird = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravestache")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hter")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hter = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hibird")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hor")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hor = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himpter")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("homo")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const homo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("horts")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hgargs")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hgargs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("homophobia")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ibox")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ibox = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("huntgargs")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("igbc")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const igbc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("icebox")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kscope")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const kscope = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("igmablobchum")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lt")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kaleidoscope")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ltbr")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ltbr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ladytuna")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ltime")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ltime = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lockthebathroom")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mcon")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mcon = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lunchtime")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mscope")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mscope = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mechacontrol")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("nhks")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const nhks = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mechascope")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("npa")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const npa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("nohokaistars")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("otksw")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const otksw = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("noplayingallowed")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyeeyz")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pyeeyz = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkswabbie")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pfeast")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pfeast = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pablosyeeyzs")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pmop")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pmop = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pbfeast")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("propackage")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const propackage = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("petmop")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rac")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rac = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("professorpackage")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rpackage")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rpackage = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("racism")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rticia")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rticia = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("raiserpackage")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("syard")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const syard = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rampticia")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sea")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sea = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("schoolyard")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("svery")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const svery = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("seacret")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stars")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stars = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("slavery")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("spl")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const spl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("spacestars")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sticia")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sticia = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("splimps")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sbandits")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sbandits = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("stacheticia")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("slord")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const slord = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunbandits")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("timps")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const timps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunlord")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("timpssb")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const timpssb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("telimps")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("terrifyster")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const terrifyster = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("telimpssb")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tstache")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tstache = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("terrifytricksterazzi")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tmech")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tmech = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickstache")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ubolt")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ubolt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickmech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("umech")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const umech = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackabolt")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vster")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const vster = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackamech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wsports")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wsports = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wph")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wph = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ycmartin")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ycmartin = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("whalepharaoh")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yemartin")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const yemartin = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngcatmartin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykmartin")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ykmartin = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngeggmartin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("zm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const zm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpzall")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const allzdecks = [
      "22savage",
      "agraves",
      "antiagor",
      "antiagoragor",
      "bfmidgargs",
      "bfplankcontrol",
      "bastet",
      "binaryflagwar",
      "blobfishwrappers",
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
    ];
    let toBuildZString = "";
    for (let i = 0; i < allzdecks.length; i++) {
      toBuildZString += `\n**${allzdecks[i]}**`;
    }
    const budgetzrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetzm2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bbf2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bbf2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpbudgetz")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("beb2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const beb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetbf2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bif2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bif2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgeteb2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bim2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bim2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetif2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bnt2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bnt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetim2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bpb2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bpb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetnt2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("brb2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const brb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetpb2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsb2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetrb2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsm2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsb2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bykm2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bykm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsm2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bzm2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bzm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetykm2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpzbudget")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const budgetzdecks = [
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
    ];
    let toBuildBudgetZString = "";
    for (let i = 0; i < budgetzdecks.length; i++) {
      toBuildBudgetZString += `\n<@1043528908148052089> **${budgetzdecks[i]}**`;
    }
    const compzrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackabolt2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfwrap2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfwrap2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpzcomp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bust2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bust2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("blobfishwrappers2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gburn2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gburn2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bustbolt2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ibox2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ibox2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargburn2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ltbr2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ltbr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("icebox2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kscope2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const kscope2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lockthebathroom2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyeeyz2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pyeeyz2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kaleidoscope2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("nhks2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const nhks2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pablosyeeyzs2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("sea22")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const sea2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("nohokaistars2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stars2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stars2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("seacret2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("timps2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const timps2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("spacestars2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tstache2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tstache2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("telimps2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ubolt2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ubolt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickstache2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("compzhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const compzdecks = [
      "blobfishwrappers",
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
    ];
    let toBuildCompZString = "";
    for (let i = 0; i < compzdecks.length; i++) {
      toBuildCompZString += `\n<@1043528908148052089> **${compzdecks[i]}**`;
    }
    const ladderzrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngcatmartin2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agr2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpzladder")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfmg2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfmg2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("agraves2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfpc2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfpc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfmidgargs2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfplankcontrol2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bbolt2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bbolt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("binaryflagwar2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("brad2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const brad2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("boltbolt2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cboy2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cboy2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("brady2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gstar222")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gstar222 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cryoboy2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gom2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gom2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargstar222")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gps2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gps2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gomorrah2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gstache2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gstache2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravepiratestache2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hbird2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hbird2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravestache2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hor2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hor2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hibird2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mbolt2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mbolt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("horts2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mcon2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mcon2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("marxbolt2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mscope2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mscope2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mechacontrol2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("propackage2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const propackage2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mechascope2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rpackage2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rpackage2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("professorpackage2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("syard2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const syard2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("raiserpackage2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("spl2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const spl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("schoolyard2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("timpssb2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const timpssb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("splimps2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tmech2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tmech2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("telimpssb2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vster2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const vster2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickmech2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ycmartin2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ycmartin2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ladderzhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ladderzdecks = [
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
    ];
    let toBuildLadderZString = "";
    for (let i = 0; i < ladderzdecks.length; i++) {
      toBuildLadderZString += `\n<@1043528908148052089> **${ladderzdecks[i]}**`;
    }
    const memezrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("zmoss2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sav2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sav2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpzmeme")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agor2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agor2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savage2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agoragor2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agoragor2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagor2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bas2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bas2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagoragor2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cog2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cog2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bastet2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cbait2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cbait2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("coggerazzi2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cleap2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cleap2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("congabait2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dmech2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dmech2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("conjureleap2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("flo2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const flo2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dozzamech2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ftimps2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ftimps2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("floss2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gtech2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gtech2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frozentelimps2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hter2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hter2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargolithtech2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("homo2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const homo2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himpter2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hgargs2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hgargs2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("homophobia2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("igbc2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const igbc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("huntgargs2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lt2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lt2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("igmablobchum2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ltime2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ltime2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ladytuna2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("npa2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const npa2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lunchtime2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pfeast2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pfeast2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("noplayingallowed2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pmop2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pmop2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pbfeast2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("otksw2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const otksw2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("petmop2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rac2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rac2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkswabbie2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rticia2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rticia2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("racism2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("svery2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const svery2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rampticia2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sbandits2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sbandits2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("slavery2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("slord2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const slord2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunbandits2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sticia2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sticia2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunlord2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("terrifyster2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const terrifyster2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("stacheticia2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("umech2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const umech2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("terrifytricksterazzi2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wsports2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wsports2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackamech2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wph2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wph2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yemartin2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const yemartin2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("whalepharaoh2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykmartin2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ykmartin2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngeggmartin2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("zm2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const zm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("memezhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const memezdecks = [
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
    ];
    let toBuildMemeZString = "";
    for (let i = 0; i < memezdecks.length; i++) {
      toBuildMemeZString += `\n<@1043528908148052089> **${memezdecks[i]}**`;
    }
    const aggrozrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickmech3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agr3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agr3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpzaggro")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bbf3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bbf3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("agraves3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("beb3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const beb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetbf3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bif3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bif3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgeteb3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("brb3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const brb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetif3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bzm3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bzm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetrb3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dmech3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const dmech3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetzm3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gps3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gps3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dozzamech3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("homo3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const homo3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravepiratestache3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mbolt3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mbolt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("homophobia3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("syard3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const syard3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("marxbolt3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sea3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sea3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("schoolyard3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("svery3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const svery3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("seacret3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("spl3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const spl3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("slavery3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tmech3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tmech3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("splimps3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aggrozhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const aggrozdecks = [
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
    ];
    let toBuildAggroZString = "";
    for (let i = 0; i < aggrozdecks.length; i++) {
      toBuildAggroZString += `\n<@1043528908148052089> **${aggrozdecks[i]}**`;
    }
    const combozrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("zmoss3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sav3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sav3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpzcombo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agor3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agor3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savage3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agoragor3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agoragor3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagor3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bas3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bas3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagoragor3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bastet3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfwrap3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfwrap3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("binaryflagwar3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bbolt3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bbolt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("blobfishwrappers3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bducks3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bducks3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("boltbolt3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bpb3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bpb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bonusducks3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bykm3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bykm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetpb3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bust3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bust3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetykm3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cog3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cog3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bustbolt3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cbait3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cbait3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("coggerazzi3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cboy3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cboy3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("congabait3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("flo3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const flo3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cryoboy3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ftimps3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ftimps3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("floss3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gps4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gps4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frozentelimps3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gburn3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gburn3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravepiratestache4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gstache3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gstache3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargburn3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hbird3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hbird3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gravestache3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hter3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hter3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hibird3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hor3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hor3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himpter3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("igbc3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const igbc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("horts3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mscope3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mscope3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("igmablobchum3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("otksw3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const otksw3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mechascope3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyeeyz3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pyeeyz3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkswabbie3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rticia3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rticia3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pablosyeeyzs3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stars3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stars3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rampticia3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sticia3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sticia3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rampticia3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sbandits3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sbandits3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("stacheticia3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("slord3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const slord3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunbandits3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("timps3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const timps3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunlord3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("timpssb3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const timpssb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("telimps3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("terrifyster3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const terrifyster3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("telimpssb3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tstache3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tstache3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("terrifytricksterazzi3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("umech3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const umech3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickstache3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vster3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const vster3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackamech3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wsports3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wsports3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wph3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wph3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ycmartin3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ycmartin3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("whalepharaoh3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yemartin3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const yemartin3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngcatmartin3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykmartin3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ykmartin3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngeggmartin3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("zm3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const zm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combozhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const combozdecks = [
      "antiagor",
      "antiagoragor",
      "bastet",
      "binaryflagwar",
      "blobfishwrappers",
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
    ];
    let toBuildComboZString = "";
    for (let i = 0; i < combozdecks.length; i++) {
      toBuildComboZString += `\n<@1043528908148052089> **${combozdecks[i]}**`;
    }
    const controlzrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("whalepharaoh3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agoragor4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const agoragor4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpzcontrol")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfpc3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfpc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagoragor4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfwrap4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfwrap4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfplankcontrol3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bducks4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bducks4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("blobfishwrappers4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bust4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bust4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bonusducks4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ftimps4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ftimps4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bustbolt4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hgargs3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hgargs3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frozentelimps4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kscope3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const kscope3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frozentelimps4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mcon3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mcon3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kaleidoscope3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mscope4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mscope4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mechacontrol3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("npa3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const npa3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mechascope4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pfeast3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pfeast3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("noplayingallowed3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sbandits4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sbandits4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pbfeast3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("timps4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const timps4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunbandits4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("timpssb4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const timpssb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("telimps4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ubolt4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ubolt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("telimpssb4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("umech4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const umech4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackabolt3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wph4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wph4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uncrackamech4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("controlzhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const controlzdecks = [
      "antiagoragor",
      "bfplankcontrol",
      "blobfishwrappers",
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
    ];
    let toBuildControlZString = "";
    for (let i = 0; i < controlzdecks.length; i++) {
      toBuildControlZString += `\n<@1043528908148052089> **${controlzdecks[i]}**`;
    }
    const midrangezrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sav4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sav4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpzmid")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bas4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bas4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("savage4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfmg3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfmg3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bastet4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfmidgargs3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bbolt4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bbolt4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("binaryflagwar4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bykm4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bykm4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("boltbolt4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cbait4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cbait4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetykm4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cboy4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cboy4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("congabait4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gburn4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gburn4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cryoboy4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gtech3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gtech3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargburn4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gstar223")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gstar223 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargolithtech3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gom3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const gom3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gargstar223")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hbird4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hbird4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gomorrah3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hter4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hter4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hibird4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hor4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hor4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himpter4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ibox3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ibox3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("horts4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("igbc4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const igbc4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("icebox3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lt3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("igmablobchum4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ltime3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ltime3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ladytuna3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyeeyz4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pyeeyz4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lunchtime3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pmop3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pmop3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pablosyeeyzs4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("nhks3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const nhks3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("petmop3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("stars4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const stars4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("nohokaistars3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("slord4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const slord4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("spacestars4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tstache4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tstache4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunlord4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vster4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const vster4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickstache4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wsports4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wsports4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ycmartin4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ycmartin4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("watersports4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykmartin4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ykmartin4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngcatmartin4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midzhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );

    const midrangezdecks = [
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
    ];
    let toBuildMidrangeZString = "";
    for (let i = 0; i < midrangezdecks.length; i++) {
      toBuildMidrangeZString += `\n<@1043528908148052089> **${midrangezdecks[i]}**`;
    }
    const tempozrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("terrifytricksterazzi4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("brad3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const brad3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpztempo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bim3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bim3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("brady3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bnt3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bnt3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetim3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsm3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetnt3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsb3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsm3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cog4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cog4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgetsb3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cleap3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const cleap3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("coggerazzi4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ltbr3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ltbr3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("conjureleap3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("propackage3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const propackage3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lockthebathroom3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rac3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rac3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("professorpackage3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rpackage3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rpackage3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("racism3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("terrifyster4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const terrifyster4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("raiserpackage3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tempozhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tempozdecks = [
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
    ];
    let toBuildTempoZString = "";
    for (let i = 0; i < tempozdecks.length; i++) {
      toBuildTempoZString += `\n<@1043528908148052089> **${tempozdecks[i]}**`;
    }

    const embed = new EmbedBuilder()
      .setTitle("Tbot Database")
      .setDescription(
        `Please select option from select menus below to access the database
Note: the decks are in alphabetical order not by hero and there are ${commands.length} commands in the database with ${allpdecks.length} plant decks and ${allzdecks.length} zombie decks`
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
      .setFooter({ text: "Credit to Iceiboi for deck type explainations" });
    const allpdecksEmbed = new EmbedBuilder()
      .setTitle("All Plant Decks")
      .setDescription(`My plant Decks are ${toBuildPString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to naviagte through all the plant decks or ping tbot with one of the decknames above to see a specific plant deck 
Note: there are ${allpdecks.length} plant decks in the database`,
      });
    const budgetpdecksEmbed = new EmbedBuilder()
      .setTitle("Budget Plant Decks")
      .setDescription(`My budget plant decks are ${toBuildBudgetPString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the budget plant decks or use the commands above to see a specific budget plant deck
Note: there are ${budgetpdecks.length} budget plant decks in the database`,
      });
    const comppdecksEmbed = new EmbedBuilder()
      .setTitle("Competitive Plant Decks")
      .setDescription(`My competitive plant decks are ${toBuildCompPString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the competitive plant decks or use the commands above to see a specific competitive plant deck
Note: there are ${comppdecks.length} competitive plant decks in the database`,
      });
    const ladderpdecksEmbed = new EmbedBuilder()
      .setTitle("Ladder Plant Decks")
      .setDescription(`My ladder plant decks are ${toBuildLadderPString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the ladder plant decks or use the commands above to see a specific ladder plant deck
Note: there are ${ladderpdecks.length} ladder plant decks in the database`,
      });
    const memepdecksEmbed = new EmbedBuilder()
      .setTitle("Meme Plant Decks")
      .setDescription(`My meme plant decks are ${toBuildMemePString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the meme plant decks or use the commands above to see a specific meme plant deck
Note: there are ${memepdecks.length} meme plant decks in the database`,
      });
    const aggropdecksEmbed = new EmbedBuilder()
      .setTitle("Aggro Plant Decks")
      .setDescription(`My aggro plant decks are ${toBuildAggroPString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the aggro plant decks or use the commands above to see a specific aggro plant deck
Note: there are ${aggropdecks.length} aggro plant decks in the database`,
      });
    const combopdecksEmbed = new EmbedBuilder()
      .setTitle("Combo Plant Decks")
      .setDescription(`My combo plant decks are ${toBuildComboPString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the combo plant decks or use the commands above to see a specific combo plant deck
Note: there are ${combopdecks.length} combo plant decks in the database`,
      });
    const controlpdecksEmbed = new EmbedBuilder()
      .setTitle("Control Plant Decks")
      .setDescription(`My control plant decks are ${toBuildControlPString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the control plant decks or use the commands above to see a specific control plant deck
Note: there are ${controlpdecks.length} control plant decks in the database`,
      });
    const midrangepdecksEmbed = new EmbedBuilder()
      .setTitle("Midrange Plant Decks")
      .setDescription(`My midrange plant decks are ${toBuildMidrangePString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the midrange plant decks or use the commands above to see a specific midrange plant deck
Note: there are ${midrangepdecks.length} midrange plant decks in the database`,
      });
    const tempopdecksEmbed = new EmbedBuilder()
      .setTitle("Tempo Plant Decks")
      .setDescription(`My tempo plant decks are ${toBuildTempoPString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the tempo plant decks or use the commands above to see a specific tempo plant deck
Note: there are ${tempopdecks.length} tempo plant decks in the database`,
      });

    const allzdecksEmbed = new EmbedBuilder()
      .setTitle("All Zombie Decks")
      .setDescription(`My zombie decks are ${toBuildZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the zombie decks or use the commands above to see a specific zombie deck(PS: ping Tbot with deckname to see specific decks!)
Note: there are ${allzdecks.length} zombie decks in the database`,
      });
    const budgetzdecksEmbed = new EmbedBuilder()
      .setTitle("Budget Zombie Decks")
      .setDescription(`My budget zombie decks are ${toBuildBudgetZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the budget zombie decks or use the commands above to see a specific budget zombie deck
Note: there are ${budgetzdecks.length} budget zombie decks in the database`,
      });
    const compzdecksEmbed = new EmbedBuilder()
      .setTitle("Competitive Zombie Decks")
      .setDescription(`My competitive zombie decks are ${toBuildCompZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the competitive zombie decks or use the commands above to see a specific competitive zombie deck
Note: there are ${compzdecks.length} competitive zombie decks in the database`,
      });
    const ladderzdecksEmbed = new EmbedBuilder()
      .setTitle("Ladder Zombie Decks")
      .setDescription(`My ladder zombie decks are ${toBuildLadderZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the ladder zombie decks or use the commands above to see a specific ladder zombie deck
Note: there are ${ladderzdecks.length} ladder zombie decks in the database`,
      });
    const memezdecksEmbed = new EmbedBuilder()
      .setTitle("Meme Zombie Decks")
      .setDescription(`My meme zombie decks are ${toBuildMemeZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the meme zombie decks or use the commands above to see a specific meme zombie deck
Note: there are ${memezdecks.length} meme zombie decks in the database`,
      });
    const aggrozdecksEmbed = new EmbedBuilder()
      .setTitle("Aggro Zombie Decks")
      .setDescription(`My aggro zombie decks are ${toBuildAggroZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the aggro zombie decks or use the commands above to see a specific aggro zombie deck
Note: there are ${aggrozdecks.length} aggro zombie decks in the database`,
      });
    const combozdecksEmbed = new EmbedBuilder()
      .setTitle("Combo Zombie Decks")
      .setDescription(`My combo zombie decks are ${toBuildComboZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the combo zombie decks or use the commands above to see a specific combo zombie deck
Note: there are ${combozdecks.length} combo zombie decks in the database`,
      });
    const controlzdecksEmbed = new EmbedBuilder()
      .setTitle("Control Zombie Decks")
      .setDescription(`My control zombie decks are ${toBuildControlZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the control zombie decks or use the commands above to see a specific control zombie deck
Note: there are ${controlzdecks.length} control zombie decks in the database`,
      });
    const midrangezdecksEmbed = new EmbedBuilder()
      .setTitle("Midrange Zombie Decks")
      .setDescription(`My midrange zombie decks are ${toBuildMidrangeZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the midrange zombie decks or use the commands above to see a specific midrange zombie deck
Note: there are ${midrangezdecks.length} midrange zombie decks in the database`,
      });
    const tempozdecksEmbed = new EmbedBuilder()
      .setTitle("Tempo Zombie Decks")
      .setDescription(`My tempo zombie decks are ${toBuildTempoZString}`)
      .setColor("Random")
      .setFooter({
        text: `Click the buttons below to navigate through all the tempo zombie decks or use the commands above to see a specific tempo zombie deck
Note: there are ${tempozdecks.length} tempo zombie decks in the database`,
      });
    const m = await message.channel.send({
      embeds: [embed],
      components: [selectrow],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    let [result] = await db.query(`select * from bcdecks bc
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
		let carroot = new EmbedBuilder()
      .setTitle(`${result[5].carroot}`)
      .setDescription(`${result[3].carroot}`)
      .setFooter({ text: `${result[2].carroot}` })
      .addFields({
          name: "Deck Type",
          value: `${result[6].carroot}`,
          inline: true
      }, {
          name: "Archetype",
          value: `${result[0].carroot}`,
          inline: true
      }, {
          name: "Deck Cost",
          value: `${result[1].carroot}`,
          inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].carroot}`);
    let shamcontrolbc = new EmbedBuilder()
      .setTitle(`${result[5].shamcontrol}`)
      .setDescription(`${result[3].shamcontrol}`)
      .setFooter({ text: `${result[2].shamcontrol}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].shamcontrol}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].shamcontrol}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].shamcontrol}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].shamcontrol}`);
    let budgetct = new EmbedBuilder()
      .setTitle(`${result[5].budgetct}`)
      .setDescription(`${result[3].budgetct}`)
      .setFooter({ text: `${result[2].budgetct}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetct}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetct}`,
          inline: true,
        },
        { name: "Deck Cost", value: `${result[1].budgetct}`, inline: true }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetct}`);
    let going3nuts = new EmbedBuilder()
      .setTitle(`${result[5].going3nuts}`)
      .setDescription(`${result[3].going3nuts}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].going3nuts}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].going3nuts}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].going3nuts}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].going3nuts}`,
          inline: true,
        }
      )
      .setImage(`${result[4].going3nuts}`);
    let startron = new EmbedBuilder()
      .setTitle(`${result[5].startron}`)
      .setDescription(`${result[3].startron}`)
      .setFooter({ text: `${result[2].startron}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].startron}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].startron}`,
          inline: true,
        },
        { name: "Deck Cost", value: `${result[1].startron}`, inline: true }
      )
      .setImage(`${result[4].startron}`)
      .setColor("Random");
    let watertron = new EmbedBuilder()
      .setTitle(`${result[5].watertron}`)
      .setDescription(`${result[3].watertron}`)
      .setFooter({ text: `${result[2].watertron}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].watertron}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].watertron}`,
          inline: true,
        },
        { name: "Deck Cost", value: `${result[1].watertron}`, inline: true }
      )
      .setImage(`${result[4].watertron}`)
      .setColor("Random");
    let budgetcc = new EmbedBuilder()
      .setTitle(`${result[5].budgetcc}`)
      .setDescription(`${result[3].budgetcc}`)
      .setFooter({ text: `${result[2].budgetcc}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetcc}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetcc}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetcc}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetcc}`);
    let lifecouldbedream = new EmbedBuilder()
      .setTitle(`${result[5].lcbd}`)
      .setDescription(`${result[3].lcbd}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].lcbd}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].lcbd}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].lcbd}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].lcbd}`,
          inline: true,
        }
      )
      .setImage(`${result[4].lcbd}`);
    let mspotk = new EmbedBuilder()
      .setTitle(`${result[5].mspotk}`)
      .setDescription(`${result[3].mspotk}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].mspotk}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].mspotk}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].mspotk}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].mspotk}`,
          inline: true,
        }
      )
      .setImage(`${result[4].mspotk}`);
    let plantmop = new EmbedBuilder()
      .setTitle(`${result[5].plantmop}`)
      .setDescription(`${result[3].plantmop}`)
      .setFooter({ text: `${result[2].plantmop}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].plantmop}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].plantmop}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].plantmop}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].plantmop}`);
    let reflourished = new EmbedBuilder()
      .setTitle(`${result[5].reflourished}`)
      .setDescription(`${result[3].reflourished}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].reflourished}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].reflourished}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].reflourished}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].reflourished}`,
          inline: true,
        }
      )
      .setImage(`${result[4].reflourished}`);
    let healcontrol = new EmbedBuilder()
      .setTitle(`${result[5].apotk}`)
      .setDescription(`${result[3].apotk}`)
      .setFooter({ text: `${result[2].apotk}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].apotk}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].apotk}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].apotk}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].apotk}`);
    let budgetcz = new EmbedBuilder()
      .setTitle(`${result[5].budgetcz}`)
      .setDescription(`${result[3].budgetcz}`)
      .setFooter({ text: `${result[2].budgetcz}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetcz}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetcz}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetcz}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetcz}`);
    let lasersnap = new EmbedBuilder()
      .setTitle(`${result[5].lasersnap}`)
      .setDescription(`${result[3].lasersnap}`)
      .setFooter({ text: `${result[2].lasersnap}` })
      .setColor("Random")
      .setImage(`${result[4].lasersnap}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].lasersnap}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].lasersnap}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].lasersnap}`,
          inline: true,
        }
      );
    let midred = new EmbedBuilder()
      .setTitle(`${result[5].midred}`)
      .setDescription(`${result[3].midred}`)
      .setFooter({ text: `${result[2].midred}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].midred}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].midred}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].midred}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].midred}`);
    let mopribus = new EmbedBuilder()
      .setTitle(`${result[5].mopribus}`)
      .setDescription(`${result[3].mopribus}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].mopribus}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].mopribus}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].mopribus}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].mopribus}` })
      .setImage(`${result[4].mopribus}`);
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
      const dinogloves= new EmbedBuilder()
      .setTitle(`${result[5].dinogloves}`)
      .setDescription(`${result[3].dinogloves}`)
      .setFooter({ text: `${result[2].dinogloves}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].dinogloves}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].dinogloves}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].dinogloves}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].dinogloves}`);
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
    let pawntrickstab = new EmbedBuilder()
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
    let winrate100 = new EmbedBuilder()
      .setTitle(`${result[5].wr100}`)
      .setDescription(`${result[3].wr100}`)
      .setFooter({ text: `${result[2].wr100}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].wr100}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].wr100}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].wr100}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].wr100}`);
    let abeans = new EmbedBuilder()
      .setTitle(`${result[5].abeans}`)
      .setDescription(`${result[3].abeans}`)
      .setFooter({ text: `${result[2].abeans}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].abeans}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].abeans}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].abeans}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].abeans}`);
    let budgetgs = new EmbedBuilder()
      .setTitle(`${result[5].budgetgs}`)
      .setDescription(`${result[3].budgetgs}`)
      .setFooter({ text: `${result[2].budgetgs}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetgs}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetgs}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetgs}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetgs}`);
        let pbeans = new EmbedBuilder()
              .setTitle(`${result[5].pbeans}`)
              .setDescription(`${result[3].pbeans}`)
              .setColor("Random")
              .addFields({
              name: "Deck Type",
              value: `${result[6].pbeans}`,
              inline: true
              },
              {
              name: "Archetype",
              value: `${result[0].pbeans}`,
              inline: true
              },
              {
              name: "Deck Cost", 
              value:`${result[1].pbeans}`,
              inline: true
              })
              .setFooter({text: `${result[2].pbeans}`})
              .setImage(`${result[4].pbeans}`)
    let savagemayflower = new EmbedBuilder()
      .setTitle(`${result[5].savagemayflower}`)
      .setDescription(`${result[3].savagemayflower}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].savagemayflower}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].savagemayflower}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].savagemayflower}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].savagemayflower}` })
      .setImage(`${result[4].savagemayflower}`);
    let starrings = new EmbedBuilder()
      .setTitle(`${result[5].sovietonion}`)
      .setDescription(`${result[3].sovietonion}`)
      .setFooter({ text: `${result[2].sovietonion}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].sovietonion}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].sovietonion}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].sovietonion}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].sovietonion}`);
    //budgetnc
    let budgetnc = new EmbedBuilder()
      .setTitle(`${result[5].budgetnc}`)
      .setDescription(`${result[3].budgetnc}`)
      .setFooter({ text: `${result[2].budgetnc}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetnc}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetnc}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetnc}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetnc}`);
    let cyburn = new EmbedBuilder()
      .setTitle(`${result[5].cyburn}`)
      .setDescription(`${result[3].cyburn}`)
      .setFooter({ text: `${result[2].cyburn}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].cyburn}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].cyburn}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].cyburn}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].cyburn}`);


    let toyotacontrolla = new EmbedBuilder()
      .setTitle(`${result[5].toyotacontrolla}`)
      .setDescription(`${result[3].toyotacontrolla}`)
      .setFooter({ text: `${result[2].toyotacontrolla}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].toyotacontrolla}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].toyotacontrolla}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].toyotacontrolla}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].toyotacontrolla}`);
    let translattail = new EmbedBuilder()
      .setTitle(`${result[5].translattail}`)
      .setDescription(`${result[3].translattail}`)
      .setFooter({ text: `${result[2].translattail}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].translattail}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].translattail}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].translattail}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].translattail}`);
    let budgetro = new EmbedBuilder()
      .setTitle(`${result[5].budgetro}`)
      .setDescription(`${result[3].budgetro}`)
      .setFooter({ text: `${result[2].budgetro}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetro}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetro}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetro}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetro}`);
    let freezeheal = new EmbedBuilder()
      .setTitle(`${result[5].freezeheal}`)
      .setDescription(`${result[3].freezeheal}`)
      .setFooter({ text: `${result[2].freezeheal}` })
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].freezeheal}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].freezeheal}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].freezeheal}`,
          inline: true,
        }
      )
      .setImage(`${result[4].freezeheal}`);
    let frymidrose = new EmbedBuilder()
      .setTitle(`${result[5].frymidrose}`)
      .setDescription(`${result[3].frymidrose}`)
      .setFooter({ text: `${result[2].frymidrose}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].frymidrose}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].frymidrose}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].frymidrose}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].frymidrose}`);
    let healmidrose = new EmbedBuilder()
      .setTitle(`${result[5].hmr}`)
      .setDescription(`${result[3].hmr}`)
      .setFooter({ text: `${result[2].hmr}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].hmr}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].hmr}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].hmr}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].hmr}`);
    let budgetsf = new EmbedBuilder()
      .setTitle(`${result[5].budgetswarmsf}`)
      .setDescription(`${result[3].budgetswarmsf}`)
      .setFooter({ text: `${result[2].budgetswarmsf}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetswarmsf}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetswarmsf}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetswarmsf}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetswarmsf}`);
    let ejection = new EmbedBuilder()
      .setTitle(`${result[5].ejection}`)
      .setDescription(`${result[3].ejection}`)
      .setFooter({ text: `${result[2].ejection}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].ejection}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].ejection}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].ejection}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].ejection}`);
    let funnyflare = new EmbedBuilder()
      .setTitle(`${result[5].funnyflare}`)
      .setDescription(`${result[3].funnyflare}`)
      .setFooter({ text: `${result[2].funnyflare}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].funnyflare}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].funnyflare}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].funnyflare}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].funnyflare}`);
    let healburn = new EmbedBuilder()
      .setTitle(`${result[5].healburn}`)
      .setDescription(`${result[3].healburn}`)
      .setFooter({ text: `${result[2].healburn}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].healburn}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].healburn}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].healburn}`,
          inline: true,
        }
      )
      .setImage(`${result[4].healburn}`)

      .setColor("Random");

    let figlottery = new EmbedBuilder()
      .setTitle(`${result[5].healmidflare}`)
      .setDescription(`${result[3].healmidflare}`)
      .setFooter({ text: `${result[2].healmidflare}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].healmidflare}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].healmidflare}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].healmidflare}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].healmidflare}`);

    let psychosolstice = new EmbedBuilder()
      .setTitle(`${result[5].psychosolstice}`)
      .setDescription(`${result[3].psychosolstice}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].psychosolstice}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].psychosolstice}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].psychosolstice}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].psychosolstice}`,
          inline: true,
        }
      )
      .setImage(`${result[4].psychosolstice}`);
    let ramp2seedling = new EmbedBuilder()
      .setTitle(`${result[5].ramp2seedling}`)
      .setDescription(`${result[3].ramp2seedling}`)
      .setFooter({ text: `${result[2].ramp2seedling}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].ramp2seedling}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].ramp2seedling}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].ramp2seedling}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].ramp2seedling}`);
    let budgetsp = new EmbedBuilder()
      .setTitle(`${result[5].budgetburstsp}`)
      .setDescription(`${result[3].budgetburstsp}`)
      .setFooter({ text: `${result[2].budgetburstsp}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetburstsp}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetburstsp}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetburstsp}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetburstsp}`);
    let nuttin = new EmbedBuilder()
      .setTitle(`${result[5].nutting}`)
      .setDescription(`${result[3].nutting}`)
      .setFooter({ text: `${result[2].nutting}` })
      .setColor("Random")
      .setImage(`${result[4].nutting}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].nutting}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].nutting}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].nutting}`,
          inline: true,
        }
      );
    let radiotherapy = new EmbedBuilder()
      .setTitle(`${result[5].radiotherapy}`)
      .setDescription(`${result[3].radiotherapy}`)
      .setFooter({ text: `${result[2].radiotherapy}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].radiotherapy}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].radiotherapy}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].radiotherapy}`,
          inline: true,
        }
      )
      .setImage(`${result[4].radiotherapy}`);
       const popsicle = new EmbedBuilder()
              .setTitle(`${result[5].popsicle}`)
              .setDescription(`${result[3].popsicle}`)
              .setFooter({text: `${result[2].popsicle}`})
                  .setColor("Random")
                  .setImage(`${result[4].popsicle}`)
                      .addFields({
                          name: "Deck Type",
                          value: `${result[6].popsicle}`,
                          inline: true
                      },{
                          name: "Archetype",
                          value: `${result[0].popsicle}`,
                          inline: true
                      },{
                          name: "Deck Cost", 
                          value: `${result[1].popsicle}`,
                          inline: true
                      })
    let budgetwk = new EmbedBuilder()
      .setTitle(`${result[5].budgetwkmidheal}`)
      .setDescription(`${result[3].budgetwkmidheal}`)
      .setFooter({ text: `${result[2].budgetwkmidheal}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetwkmidheal}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetwkmidheal}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetwkmidheal}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetwkmidheal}`);
    let cancerknight = new EmbedBuilder()
      .setTitle("Cancer Knight")
      .setTitle(`${result[5].cancerknight}`)
      .setDescription(`${result[3].cancerknight}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].cancerknight}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].cancerknight}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].cancerknight}`,
          inline: true,
        }
      )
      .setImage(`${result[4].cancerknight}`)
      .setFooter({ text: `${result[2].cancerknight}` });
    let chemotherapy = new EmbedBuilder()
      .setTitle(`${result[5].chemotherapy}`)
      .setDescription(`${result[3].chemotherapy}`)
      .setFooter({ text: `${result[2].chemotherapy}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].chemotherapy}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].chemotherapy}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].chemotherapy}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].chemotherapy}`);
    let highlander = new EmbedBuilder()
      .setTitle(`${result[5].highlander}`)
      .setDescription(`${result[3].highlander}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].highlander}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].highlander}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].highlander}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].highlander}`,
          inline: true,
        }
      )
      .setImage(`${result[4].highlander}`);
    let shitknight = new EmbedBuilder()
      .setTitle(`${result[5].shitknight}`)
      .setDescription(`${result[3].shitknight}`)
      .setFooter({ text: `${result[2].shitknight}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].shitknight}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].shitknight}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].shitknight}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].shitknight}`);
    let bfmidgargs = new EmbedBuilder()
      .setTitle(`${result[5].bfmidgargs}`)
      .setDescription(`${result[3].bfmidgargs}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].bfmidgargs}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].bfmidgargs}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].bfmidgargs}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].bfmidgargs}`,
          inline: true,
        }
      )
      .setImage(`${result[4].bfmidgargs}`);
    let bfplankcontrol = new EmbedBuilder()
      .setTitle(`${result[5].bfplankcontrol}`)
      .setDescription(`${result[3].bfplankcontrol}`)
      .setFooter({ text: `${result[2].bfplankcontrol}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].bfplankcontrol}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].bfplankcontrol}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].bfplankcontrol}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].bfplankcontrol}`);
    let budgetbf = new EmbedBuilder()
      .setTitle(`${result[5].budgetbf}`)
      .setDescription(`${result[3].budgetbf}`)
      .setFooter({ text: `${result[2].budgetbf}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetbf}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetbf}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetbf}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetbf}`);
    let gargolithtech = new EmbedBuilder()
      .setTitle(`${result[5].gargolithtech}`)
      .setDescription(`${result[3].gargolithtech}`)
      .setFooter({ text: `${result[2].gargolithtech}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gargolithtech}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gargolithtech}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gargolithtech}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].gargolithtech}`);
    let himps = new EmbedBuilder()
      .setTitle(`${result[5].himps}`)
      .setDescription(`${result[3].himps}`)
      .setFooter({ text: `${result[2].himps}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].himps}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].himps}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].himps}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].himps}`);
    let lockthebathroom = new EmbedBuilder()
      .setTitle(`${result[5].lockin}`)
      .setDescription(`${result[3].lockin}`)
      .setFooter({ text: `${result[2].lockin}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].lockin}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].lockin}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].lockin}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].lockin}`);
    let lunchtime = new EmbedBuilder()
      .setTitle(`${result[5].midpets}`)
      .setDescription(`${result[3].midpets}`)
      .setColor("Random")
      .setImage(`${result[4].midpets}`)
      .setFooter({ text: `${result[2].midpets}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].midpets}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].midpets}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].midpets}`,
          inline: true,
        }
      );
    let petmop = new EmbedBuilder()
      .setTitle(`${result[5].petmop}`)
      .setDescription(`${result[3].petmop}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].petmop}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].petmop}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].petmop}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].petmop}`,
          inline: true,
        }
      )
      .setImage(`${result[4].petmop}`);
    let racism = new EmbedBuilder()
      .setTitle(`${result[5].racism}`)
      .setDescription(`${result[3].racism}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].racism}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].racism}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].racism}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].racism}` })
      .setImage(`${result[4].racism}`);
    let raiserpackage = new EmbedBuilder()
      .setTitle(`${result[5].raiserpackage}`)
      .setDescription(`${result[3].raiserpackage}`)
      .setFooter({ text: `${result[2].raiserpackage}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].raiserpackage}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].raiserpackage}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].raiserpackage}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].raiserpackage}`);
    let slavery = new EmbedBuilder()
      .setTitle(`${result[5].slavery}`)
      .setDescription(`${result[3].slavery}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].slavery}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].slavery}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].slavery}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].slavery}`,
          inline: true,
        }
      )
      .setImage(`${result[4].slavery}`);
    let watersports = new EmbedBuilder()
      .setTitle(`${result[5].watersports}`)
      .setDescription(`${result[3].watersports}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].watersports}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].watersports}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].watersports}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].watersports}`,
          inline: true,
        }
      )
      .setImage(`${result[4].watersports}`);
    let budgeteb = new EmbedBuilder()
      .setTitle(`${result[5].budgetburn}`)
      .setDescription(`${result[3].budgetburn}`)
      .setFooter({ text: `${result[2].budgetburn}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetburn}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetburn}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetburn}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetburn}`);
    let gargstar22 = new EmbedBuilder()
      .setTitle(`${result[5].gargstar22}`)
      .setDescription(`${result[3].gargstar22}`)
      .setFooter({ text: `${result[2].gargstar22}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gargstar22}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gargstar22}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gargstar22}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].gargstar22}`);
      const huntgargs = new EmbedBuilder()
      .setTitle(`${result[5].huntgargs}`)
      .setDescription(`${result[3].huntgargs}`)
      .setFooter({ text: `${result[2].huntgargs}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].huntgargs}`,
        inline: true
      },{ 
        name: "Archetype", 
        value: `${result[0].huntgargs}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].huntgargs}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].huntgargs}`);
    //No Playing Allowed
    let noplayingallowed = new EmbedBuilder()
      .setTitle(`${result[5].noplayingallowed}`)
      .setDescription(`${result[3].noplayingallowed}`)
      .setFooter({ text: `${result[2].noplayingallowed}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].noplayingallowed}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].noplayingallowed}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].noplayingallowed}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].noplayingallowed}`);
    // Seacret
    let seacret = new EmbedBuilder()
      .setTitle(`${result[5].seacret}`)
      .setDescription(`${result[3].seacret}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].seacret}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].seacret}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].seacret}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].seacret}`,
          inline: true,
        }
      )
      .setImage(`${result[4].seacret}`);
    let budgetsb = new EmbedBuilder()
      .setTitle(`${result[5].budgetsb}`)
      .setDescription(`${result[3].budgetsb}`)
      .setFooter({ text: `${result[2].budgetsb}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetsb}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetsb}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetsb}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetsb}`);
    let telimpssb = new EmbedBuilder()
      .setTitle(`${result[5].telimpssb}`)
      .setDescription(`${result[3].telimpssb}`)
      .setFooter({ text: `	${result[2].telimpssb}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].telimpssb}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].telimpssb}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].telimpssb}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].telimpssb}`);
    let blobfishwrappers = new EmbedBuilder()
      .setTitle(`${result[5].blobfishwrappers}`)
      .setDescription(`${result[3].blobfishwrappers}`)
      .setFooter({ text: `${result[2].blobfishwrappers}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].blobfishwrappers}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].blobfishwrappers}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].blobfishwrappers}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].blobfishwrappers}`);
    let budgetykm = new EmbedBuilder()
      .setTitle(`${result[5].budgetykm}`)
      .setDescription(`${result[3].budgetykm}`)
      .setFooter({ text: `${result[2].budgetykm}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetykm}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetykm}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetykm}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetykm}`);
    let conjureleap = new EmbedBuilder()
      .setTitle(`${result[5].conjureleap}`)
      .setDescription(`${result[3].conjureleap}`)
      .setFooter({ text: `${result[2].conjureleap}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].conjureleap}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].conjureleap}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].conjureleap}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].conjureleap}`);
    const cryoboy = new EmbedBuilder()
      .setTitle(`${result[5].cyroboy}`)
      .setDescription(`${result[3].cyroboy}`)
      .setFooter({ text: `${result[2].cyroboy}` })
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].cyroboy}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].cyroboy}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].cyroboy}`,
          inline: true,
        }
      )
      .setImage(`${result[4].cyroboy}`);
    let frozentelimps = new EmbedBuilder()
      .setTitle(`${result[5].frozentelimps}`)
      .setDescription(`${result[3].frozentelimps}`)
      .setColor("Random")
      .setImage(`${result[4].frozentelimps}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].frozentelimps}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].frozentelimps}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].frozentelimps}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].frozentelimps}` });
    let gravepiratestache = new EmbedBuilder()
      .setTitle(`${result[5].gps}`)
      .setDescription(`${result[3].gps}`)
      .setColor("Random")
      .setImage(`${result[4].gps}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gps}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gps}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gps}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].gps}` });
    let gravestache = new EmbedBuilder()
      .setTitle(`${result[5].gravestache}`)
      .setDescription(`${result[3].gravestache}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gravestache}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gravestache}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gravestache}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].gravestache}` })
      .setColor("Random")
      .setImage(`${result[4].gravestache}`);
    let otkswabbie = new EmbedBuilder()
      .setTitle(`${result[5].otkswabbie}`)
      .setDescription(`${result[3].otkswabbie}`)
      .setFooter({ text: `${result[2].otkswabbie}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].otkswabbie}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].otkswabbie}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].otkswabbie}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].otkswabbie}`);
    let telimps = new EmbedBuilder()
      .setTitle(`${result[5].telimps}`)
      .setDescription(`${result[3].telimps}`)
      .setFooter({ text: `${result[2].telimps}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].telimps}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].telimps}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].telimps}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].telimps}`);
    let youngkenmartin = new EmbedBuilder()
      .setTitle(`${result[5].ykm}`)
      .setDescription(`${result[3].ykm}`)
      .setFooter({ text: `${result[2].ykm}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].ykm}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].ykm}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].ykm}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].ykm}`);
    let budgetif = new EmbedBuilder()
      .setTitle(`${result[5].budgetif}`)
      .setDescription(`${result[3].budgetif}`)
      .setFooter({ text: `${result[2].budgetif}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetif}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetif}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetif}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetif}`);
      const nohonkaistars = new EmbedBuilder()
        .setTitle(`${result[5].nohokaistars}`)
        .setDescription(`${result[3].nohokaistars}`)
        .setFooter({ text: `${result[2].nohokaistars}` })
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6].nohokaistars}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0].nohokaistars}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1].nohokaistars}`,
            inline: true,
          }
        )
        .setColor("Random")
        .setImage(`${result[4].nohokaistars}`);
    let spacestars = new EmbedBuilder()
      .setTitle(`${result[5].spacestars}`)
      .setDescription(`${result[3].spacestars}`)
      .setFooter({ text: `${result[2].spacestars}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].spacestars}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].spacestars}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].spacestars}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].spacestars}`);
    let splimps = new EmbedBuilder()
      .setTitle(`${result[5].splimps}`)
      .setDescription(`${result[3].splimps}`)
      .setFooter({ text: `${result[2].splimps}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].splimps}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].splimps}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].splimps}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].splimps}`);
    let savage22 = new EmbedBuilder()
      .setTitle(`${result[5].savage22}`)
      .setDescription(`${result[3].savage22}`)
      .setFooter({ text: `${result[2].savage22}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].savage22}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].savage22}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].savage22}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].savage22}`);
    let bastet = new EmbedBuilder()
      .setTitle(`${result[5].bastet}`)
      .setDescription(`${result[3].bastet}`)
      .setFooter({ text: `${result[2].bastet}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].bastet}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].bastet}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].bastet}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].bastet}`);
    let budgetim = new EmbedBuilder()
      .setTitle(`${result[5].budgetim}`)
      .setDescription(`${result[3].budgetim}`)
      .setFooter({ text: `${result[2].budgetim}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetim}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetim}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetim}`,
          inline: true,
        }
      )
      .setImage(`${result[4].budgetim}`)
      .setColor("Random");

    let mechascope = new EmbedBuilder()
      .setTitle(`${result[5].otkmecha}`)
      .setDescription(`${result[3].otkmecha}`)
      .setFooter({ text: `${result[2].otkmecha}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].otkmecha}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].otkmecha}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].otkmecha}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].otkmecha}`);
    let kaleidoscope = new EmbedBuilder()
      .setTitle(`${result[5].otktrickster}`)
      .setDescription(`${result[3].otktrickster}`)
      .setFooter({ text: `${result[2].otktrickster}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].otktrickster}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].otktrickster}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].otktrickster}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].otktrickster}`);
    let rampticia = new EmbedBuilder()
      .setTitle(`${result[5].rampticia}`)
      .setDescription(`${result[3].rampticia}`)
      .setFooter({ text: `${result[2].rampticia}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].rampticia}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].rampticia}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].rampticia}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].rampticia}`);
    let stacheticia = new EmbedBuilder()
      .setTitle(`${result[5].stacheticia}`)
      .setDescription(`${result[3].stacheticia}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].stacheticia}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].stacheticia}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].stacheticia}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].stacheticia}` })
      .setImage(`${result[4].stacheticia}`);
    let youngcatmartin = new EmbedBuilder()
      .setTitle(`${result[5].ycm}`)
      .setDescription(`${result[3].ycm}`)
      .setFooter({ text: `${result[2].ycm}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].ycm}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].ycm}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].ycm}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].ycm}`);
    let agraves = new EmbedBuilder()
      .setTitle(`${result[5].agraves}`)
      .setDescription(`${result[3].agraves}`)
      .setFooter({ text: `${result[2].agraves}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].agraves}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].agraves}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].agraves}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].agraves}`);
    let antiagor = new EmbedBuilder()
      .setTitle(`${result[5].antiagor}`)
      .setDescription(`${result[3].antiagor}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].antiagor}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].antiagor}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].antiagor}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].antiagor}` })
      .setColor("Random")
      .setImage(`${result[4].antiagor}`);
    let antiagoragor = new EmbedBuilder()
      .setImage(`${result[4].antiagoragor}`)
      .setTitle(`${result[5].antiagoragor}`)
      .setDescription(`${result[3].antiagoragor}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].antiagoragor}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].antiagoragor}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].antiagoragor}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].antiagoragor}` });
    let budgetnt = new EmbedBuilder()
      .setTitle(`${result[5].budgetnt}`)
      .setDescription(`${result[3].budgetnt}`)
      .setFooter({ text: `${result[2].budgetnt}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetnt}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetnt}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetnt}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetnt}`);
    //Floss
    let floss = new EmbedBuilder()
      .setTitle(`${result[5].floss}`)
      .setDescription(`${result[3].floss}`)
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].floss}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].floss}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].floss}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].floss}` })
      .setImage(`${result[4].floss}`);
    let gomorrah = new EmbedBuilder()
      .setTitle(`${result[5].gomorrah}`)
      .setDescription(`${result[3].gomorrah}`)
      .setFooter({ text: `${result[2].gomorrah}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gomorrah}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gomorrah}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gomorrah}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].gomorrah}`);
    let icebox = new EmbedBuilder()
      .setTitle(`${result[5].icebox}`)
      .setDescription(`${result[3].icebox}`)
      .setFooter({ text: `${result[2].icebox}` })
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].icebox}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].icebox}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].icebox}`,
          inline: true,
        }
      )
      .setImage(`${result[4].icebox}`);
    let ladytuna = new EmbedBuilder()
      .setTitle(`${result[5].ladytuna}`)
      .setDescription(`${result[3].ladytuna}`)
      .setFooter({ text: `${result[2].ladytuna}` })
      .setColor("Random")
      .setImage(`${result[4].ladytuna}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].ladytuna}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].ladytuna}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].ladytuna}`,
          inline: true,
        }
      );
    let schoolyard = new EmbedBuilder()
      .setTitle(`${result[5].schoolyard}`)
      .setDescription(`${result[3].schoolyard}`)
      .setFooter({ text: `${result[2].schoolyard}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].schoolyard}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].schoolyard}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].schoolyard}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].schoolyard}`);
    let sunlord = new EmbedBuilder()
      .setTitle(`${result[5].wimps}`)
      .setDescription(`${result[3].wimps}`)
      .setFooter({ text: `${result[2].wimps}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].wimps}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].wimps}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].wimps}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].wimps}`);
    let bonusducks = new EmbedBuilder()
      .setTitle(`${result[5].bonusducks}`)
      .setDescription(`${result[3].bonusducks}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].bonusducks}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].bonusducks}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].bonusducks}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].bonusducks}`,
          inline: true,
        }
      )
      .setImage(`${result[4].bonusducks}`);
    let budgetpb = new EmbedBuilder()
      .setTitle(`${result[5].budgetpb}`)
      .setDescription(`${result[3].budgetpb}`)
      .setFooter({ text: `${result[2].budgetpb}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetpb}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetpb}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetpb}`,
          inline: true,
        }
      )
      .setImage(`${result[4].budgetpb}`)
      .setColor("Random");
    let congabait = new EmbedBuilder()
      .setTitle(`${result[5].congabait}`)
      .setDescription(`${result[3].congabait}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].congabait}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].congabait}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].congabait}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].congabait}`,
          inline: true,
        }
      )
      .setImage(`${result[4].congabait}`);
    let hibird = new EmbedBuilder()
      .setTitle(`${result[5].hibird}`)
      .setDescription(`${result[3].hibird}`)
      .setFooter({ text: `${result[2].hibird}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].hibird}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].hibird}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].hibird}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].hibird}`);
    let pbfeast = new EmbedBuilder()
      .setTitle(`${result[5].pbfeast}`)
      .setDescription(`${result[3].pbfeast}`)
      .setFooter({ text: `${result[2].pbfeast}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].pbfeast}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].pbfeast}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].pbfeast}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].pbfeast}`);
    let professorpackage = new EmbedBuilder()
      .setTitle(`${result[5].professorpackage}`)
      .setDescription(`${result[3].professorpackage}`)
      .setFooter({ text: `${result[2].professorpackage}` })
      .setColor("Random")
      .setImage(`${result[4].professorpackage}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].professorpackage}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].professorpackage}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].professorpackage}`,
          inline: true,
        }
      );
    let trickstache = new EmbedBuilder()
      .setTitle(`${result[5].trickstache}`)
      .setDescription(`${result[3].trickstache}`)
      .setFooter({ text: `${result[2].trickstache}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].trickstache}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].trickstache}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].trickstache}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].trickstache}`);
    let valkster = new EmbedBuilder()
      .setTitle(`${result[5].valkster}`)
      .setDescription(`${result[3].valkster}`)
      .setFooter({ text: `${result[2].valkster}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].valkster}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].valkster}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].valkster}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].valkster}`);
    //YoungEggMartin
    let youngeggmartin = new EmbedBuilder()
      .setTitle(`${result[5].youngeggmartin}`)
      .setDescription(`${result[3].youngeggmartin}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].youngeggmartin}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].youngeggmartin}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].youngeggmartin}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].youngeggmartin}`,
          inline: true,
        }
      )
      .setImage(`${result[4].youngeggmartin}`);
    let boltbolt = new EmbedBuilder()
      .setTitle(`${result[5].boltbolt}`)
      .setDescription(`${result[3].boltbolt}`)
      .setFooter({ text: `${result[2].boltbolt}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].boltbolt}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].boltbolt}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].boltbolt}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].boltbolt}`);
    let budgetrb = new EmbedBuilder()
      .setTitle(`${result[5].budgetrb}`)
      .setDescription(`${result[3].budgetrb}`)
      .setFooter({ text: `${result[2].budgetrb}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetrb}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetrb}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetrb}`,
          inline: true,
        }
      )
      .setImage(`${result[4].budgetrb}`)
      .setColor("Random");
    let bustbolt = new EmbedBuilder()
      .setTitle(`${result[5].bustbolt}`)
      .setDescription(`${result[3].bustbolt}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].bustbolt}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].bustbolt}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].bustbolt}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].bustbolt}`,
          inline: true,
        }
      )
      .setImage(`${result[4].bustbolt}`);
    let igmablobchum = new EmbedBuilder()
      .setTitle(`${result[5].igmablobchum}`)
      .setDescription(`${result[3].igmablobchum}`)
      .setFooter({ text: `${result[2].igmablobchum}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].igmablobchum}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].igmablobchum}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].igmablobchum}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].igmablobchum}`);
    let marxbolt = new EmbedBuilder()
      .setTitle(`${result[5].marxbolt}`)
      .setDescription(`${result[3].marxbolt}`)
      .setFooter({ text: `${result[2].marxbolt}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].marxbolt}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].marxbolt}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].marxbolt}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].marxbolt}`);
    let mechacontrol = new EmbedBuilder()
      .setTitle(`${result[5].mechacontrol}`)
      .setDescription(`${result[3].mechacontrol}`)
      .setFooter({ text: `${result[2].mechacontrol}` })
      .setColor("Random")
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].mechacontrol}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].mechacontrol}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].mechacontrol}`,
          inline: true,
        }
      )
      .setImage(`${result[4].mechacontrol}`);
    let coggerazzi = new EmbedBuilder()
      .setTitle(`${result[5].poggerrazzi}`)
      .setDescription(`${result[3].poggerrazzi}`)
      .setFooter({ text: `${result[2].poggerrazzi}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].poggerrazzi}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].poggerrazzi}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].poggerrazzi}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].poggerrazzi}`);
    let sunbandits = new EmbedBuilder()
      .setTitle(`${result[5].sunbandits}`)
      .setDescription(`${result[3].sunbandits}`)
      .setFooter({ text: `${result[2].sunbandits}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].sunbandits}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].sunbandits}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].sunbandits}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].sunbandits}`);
    let terrifytricksterazzi = new EmbedBuilder()
      .setTitle(`${result[5].terrifytricksterazzi}`)
      .setDescription(`${result[3].terrifytricksterazzi}`)
      .setFooter({ text: `${result[2].terrifytricksterazzi}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].terrifytricksterazzi}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].terrifytricksterazzi}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].terrifytricksterazzi}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].terrifytricksterazzi}`);
    let uncrackabolt = new EmbedBuilder()
      .setTitle(`${result[5].uncrackabolt}`)
      .setDescription(`${result[3].uncrackabolt}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].uncrackabolt}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].uncrackabolt}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].uncrackabolt}`,
          inline: true,
        }
      )
      .setFooter({ text: `${result[2].uncrackabolt}` })
      .setColor("Random")
      .setImage(`${result[4].uncrackabolt}`);
    let budgetsm = new EmbedBuilder()
      .setTitle(`${result[5].budgetsm}`)
      .setDescription(`${result[3].budgetsm}`)
      .setFooter({ text: `${result[2].budgetsm}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetsm}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetsm}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetsm}`,
          inline: true,
        }
      )
      .setImage(`${result[4].budgetsm}`)
      .setColor("Random");
    let homophobia = new EmbedBuilder()
      .setTitle(`${result[5].homophobia}`)
      .setDescription(`${result[3].homophobia}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].homophobia}` })
      .setImage(`${result[4].homophobia}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].homophobia}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].homophobia}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].homophobia}`,
          inline: true,
        }
      );
    let horts = new EmbedBuilder()
      .setTitle(`${result[5].horts}`)
      .setDescription(`${result[3].horts}`)
      .setFooter({ text: `${result[2].horts}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].horts}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].horts}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].horts}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].horts}`);
    let pablosyeezys = new EmbedBuilder()
      .setTitle(`${result[5].pablosyeezys}`)
      .setDescription(`${result[3].pablosyeezys}`)
      .setFooter({ text: `${result[2].pablosyeezys}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].pablosyeezys}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].pablosyeezys}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].pablosyeezys}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].pablosyeezys}`);
    let whalepharaoh = new EmbedBuilder()
      .setTitle(`${result[5].whalepharaoh}`)
      .setDescription(`${result[3].whalepharaoh}`)
      .setFooter({ text: `${result[2].whalepharaoh}` })
      .setColor("Random")
      .setImage(`${result[4].whalepharaoh}`)
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].whalepharaoh}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].whalepharaoh}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].whalepharaoh}`,
          inline: true,
        }
      );

    let binaryflagwar = new EmbedBuilder()
      .setTitle(`${result[5].binaryflagwar}`)
      .setDescription(`${result[3].binaryflagwar}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].binaryflagwar}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].binaryflagwar}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].binaryflagwar}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].binaryflagwar}`,
          inline: true,
        }
      )
      .setImage(`${result[4].binaryflagwar}`);
    let brady = new EmbedBuilder()
      .setTitle(`${result[5].brady}`)
      .setDescription(`${result[3].brady}`)
      .setFooter({ text: `${result[2].brady}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].brady}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].brady}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].brady}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].brady}`);
    let budgetzm = new EmbedBuilder()
      .setTitle(`${result[5].budgetzm}`)
      .setDescription(`${result[3].budgetzm}`)
      .setFooter({ text: `${result[2].budgetzm}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].budgetzm}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].budgetzm}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].budgetzm}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].budgetzm}`);
    let dozzamech = new EmbedBuilder()
      .setTitle(`${result[5].dozzamech}`)
      .setDescription(`${result[3].dozzamech}`)
      .setFooter({ text: `${result[2].dozzamech}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].dozzamech}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].dozzamech}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].dozzamech}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].dozzamech}`);
    let uncrackamech = new EmbedBuilder()
      .setTitle(`${result[5].feastmech}`)
      .setDescription(`${result[3].feastmech}`)
      .setColor("Random")
      .setImage(`${result[4].feastmech}`)
      .setFooter({ text: `${result[2].feastmech}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].feastmech}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].feastmech}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].feastmech}`,
          inline: true,
        }
      );
    let gargburn = new EmbedBuilder()
      .setTitle(`${result[5].gargburn}`)
      .setDescription(`${result[3].gargburn}`)
      .setFooter({ text: `${result[2].gargburn}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].gargburn}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].gargburn}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].gargburn}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].gargburn}`);
    let trickmech = new EmbedBuilder()
      .setTitle(`${result[5].trickmech}`)
      .setDescription(`${result[3].trickmech}`)
      .setFooter({ text: `${result[2].trickmech}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].trickmech}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].trickmech}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].trickmech}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].trickmech}`);
    //Zmoss
    let zmoss = new EmbedBuilder()
      .setTitle(`${result[5].zmoss}`)
      .setDescription(`${result[3].zmoss}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].zmoss}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].zmoss}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].zmoss}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].zmoss}`,
          inline: true,
        }
      )
      .setImage(`${result[4].zmoss}`);
    collector.on("collect", async (i) => {
    if(i.customId == "starter") {
        const value = i.values[0];
        if (value == "budgetpdecks") {
          await i.update({
            embeds: [budgetpdecksEmbed],
            components: [budgetprow],
          });
        }
        else if (value == "comppdecks") {
          await i.update({ embeds: [comppdecksEmbed], components: [compprow] });
        }
        else if (value == "ladderpdecks") {
          await i.update({
            embeds: [ladderpdecksEmbed],
            components: [ladderprow],
          });
        }
        else if (value == "memepdecks") {
          await i.update({ embeds: [memepdecksEmbed], components: [memeprow] });
        }
        else if (value == "aggropdecks") {
          await i.update({
            embeds: [aggropdecksEmbed],
            components: [aggroprow],
          });
        }
        else if (value == "combopdecks") {
          await i.update({
            embeds: [combopdecksEmbed],
            components: [comboprow],
          });
        }
       else if (value == "controlpdecks") {
          await i.update({
            embeds: [controlpdecksEmbed],
            components: [controlprow],
          });
        }
        else if (value == "midrangepdecks") {
          await i.update({
            embeds: [midrangepdecksEmbed],
            components: [midrangeprow],
          });
        }
        else if (value == "tempopdecks") {
          await i.update({
            embeds: [tempopdecksEmbed],
            components: [tempoprow],
          });
        }
        else if (value == "budgetzdecks") {
          await i.update({
            embeds: [budgetzdecksEmbed],
            components: [budgetzrow],
          });
        }
       else if (value == "compzdecks") {
          await i.update({ embeds: [compzdecksEmbed], components: [compzrow] });
        }
       else if (value == "ladderzdecks") {
          await i.update({
            embeds: [ladderzdecksEmbed],
            components: [ladderzrow],
          });
        }
        else if (value == "memezdecks") {
          await i.update({ embeds: [memezdecksEmbed], components: [memezrow] });
        }
        else if (value == "aggrozdecks") {
          await i.update({
            embeds: [aggrozdecksEmbed],
            components: [aggrozrow],
          });
        }
        else if (value == "combozdecks") {
          await i.update({
            embeds: [combozdecksEmbed],
            components: [combozrow],
          });
        }
       else if (value == "controlzdecks") {
          await i.update({
            embeds: [controlzdecksEmbed],
            components: [controlzrow],
          });
        }
        else if (value == "midrangezdecks") {
          await i.update({
            embeds: [midrangezdecksEmbed],
            components: [midrangezrow],
          });
        }
        else if (value == "tempozdecks") {
          await i.update({
            embeds: [tempozdecksEmbed],
            components: [tempozrow],
          });
        }
        else if (value == "allpdecks") {
          await i.update({ embeds: [allpdecksEmbed], components: [allprow] });
        }
       else if (value == "allzdecks") {
          await i.update({ embeds: [allzdecksEmbed], components: [allzrow] });
        }
      }
       if(i.customId == "helppbudget" || i.customId == "budgetphelp") {
        await i.update({
          embeds: [budgetpdecksEmbed],
          components: [budgetprow],
        });
      }
      else if(i.customId == "helppcomp" || i.customId == "compphelp") {
        await i.update({ embeds: [comppdecksEmbed], components: [compprow] });
      }
      else if(i.customId == "helppladder" || i.customId == "ladderphelp") {
        await i.update({
          embeds: [ladderpdecksEmbed],
          components: [ladderprow],
        });
      }
      else if(i.customId == "helppmeme" || i.customId == "memephelp") {
        await i.update({ embeds: [memepdecksEmbed], components: [memeprow] });
      }
      else if(i.customId == "helppaggro" || i.customId == "aggrophelp") {
        await i.update({ embeds: [aggropdecksEmbed], components: [aggroprow] });
      }
      else if(i.customId == "helppcombo" || i.customId == "combophelp") {
        await i.update({ embeds: [combopdecksEmbed], components: [comboprow] });
      }
      else if(i.customId == "helppcontrol" || i.customId == "controlphelp") {
        await i.update({
          embeds: [controlpdecksEmbed],
          components: [controlprow],
        });
      }
      else if(i.customId == "helppmidrange" || i.customId == "midrangephelp") {
        await i.update({
          embeds: [midrangepdecksEmbed],
          components: [midrangeprow],
        });
      }
      else if(i.customId == "helpptempo" || i.customId == "tempophelp") {
        await i.update({ embeds: [tempopdecksEmbed], components: [tempoprow] });
      }
      else if(i.customId == "helpzbudget" || i.customId == "helpbudgetz") {
        await i.update({
          embeds: [budgetzdecksEmbed],
          components: [budgetzrow],
        });
      }
      else if(i.customId == "helpzcomp" || i.customId == "compzhelp") {
        await i.update({ embeds: [compzdecksEmbed], components: [compzrow] });
      }
      else if(i.customId == "helpzladder" || i.customId == "ladderzhelp") {
        await i.update({
          embeds: [ladderzdecksEmbed],
          components: [ladderzrow],
        });
      }
      else if(i.customId == "helpzmeme" || i.customId == "memezhelp") {
        await i.update({ embeds: [memezdecksEmbed], components: [memezrow] });
      }
      else if(i.customId == "helpzaggro" || i.customId == "aggrozhelp") {
        await i.update({ embeds: [aggrozdecksEmbed], components: [aggrozrow] });
      }
      else if(i.customId == "helpzcombo" || i.customId == "combozhelp") {
        await i.update({ embeds: [combozdecksEmbed], components: [combozrow] });
      }
      else if(i.customId == "helpzcontrol" || i.customId == "controlzhelp") {
        await i.update({
          embeds: [controlzdecksEmbed],
          components: [controlzrow],
        });
      }
      else if(i.customId == "helpzmid" || i.customId == "midzhelp") {
        await i.update({
          embeds: [midrangezdecksEmbed],
          components: [midrangezrow],
        });
      }
      else if(i.customId == "helpztempo" || i.customId == "tempozhelp") {
        await i.update({ embeds: [tempozdecksEmbed], components: [tempozrow] });
      }
      else if(i.customId == "helpallp" || i.customId == "allphelp") {
        await i.update({ embeds: [allpdecksEmbed], components: [allprow] });
      }
      else if(i.customId == "helpzall" || i.customId == "allzhelp") {
        await i.update({ embeds: [allzdecksEmbed], components: [allzrow] });
      }
      else if(i.customId == "wr100" || i.customId == "winrate100") {
        await i.update({ embeds: [winrate100], components: [wr100] });
      }
      else if(i.customId == "wr1002" || i.customId == "winrate1002") {
        await i.update({ embeds: [winrate100], components: [wr1002] });
      }
      else if(i.customId == "wr1003" || i.customId == "winrate1003") {
        await i.update({ embeds: [winrate100], components: [wr1003] });
      }
      else if(i.customId == "ab" || i.customId == "abeans") {
        await i.update({ embeds: [abeans], components: [ab] });
      }
      else if(i.customId == "ab2" || i.customId == "abeans2") {
        await i.update({ embeds: [abeans], components: [ab2] });
      }
      else if(i.customId == "ab3" || i.customId == "abeans3") {
        await i.update({ embeds: [abeans], components: [ab3] });
      }
      else if(i.customId == "healcon" || i.customId == "healcontrol"){
        await i.update({embeds: [healcontrol], components: [healcon]})
      }
      else if(i.customId == "healcon2" || i.customId == "healcontrol2"){
        await i.update({embeds: [healcontrol], components: [healcon2]})
      }
      else if(i.customId == "healcon3" || i.customId == "healcontrol3"){
        await i.update({embeds: [healcontrol], components: [healcon3]})
      }
  
      else if(i.customId == "bct" || i.customId == "budgetct") {
        await i.update({ embeds: [budgetct], components: [bct] });
      }
      else if(i.customId == "bct2" || i.customId == "budgetct2") {
        await i.update({ embeds: [budgetct], components: [bct2] });
      }
      else if(i.customId == "bct3" || i.customId == "budgetct3") {
        await i.update({ embeds: [budgetct], components: [bct3] });
      }
      else if(i.customId == "bcc" || i.customId == "budgetcc") {
        await i.update({ embeds: [budgetcc], components: [bcc] });
      }
      else if(i.customId == "bcc2" || i.customId == "budgetcc2") {
        await i.update({ embeds: [budgetcc], components: [bcc2] });
      }
      else if(i.customId == "bcc3" || i.customId == "budgetcc3") {
        await i.update({ embeds: [budgetcc], components: [bcc3] });
      }
      else if(i.customId == "bcz" || i.customId == "budgetcz") {
        await i.update({ embeds: [budgetcz], components: [bcz] });
      }
      else if(i.customId == "bcz2" || i.customId == "budgetcz2") {
        await i.update({ embeds: [budgetcz], components: [bcz2] });
      }
      else if(i.customId == "bcz3" || i.customId == "budgetcz3") {
        await i.update({ embeds: [budgetcz], components: [bcz3] });
      }
      else if(i.customId == "bgk" || i.customId == "budgetgk") {
        await i.update({ embeds: [budgetgk], components: [bgk] });
      }
      else if(i.customId == "bgk2" || i.customId == "budgetgk2") {
        await i.update({ embeds: [budgetgk], components: [bgk2] });
      }
      else if(i.customId == "bgk3" || i.customId == "budgetgk3") {
        await i.update({ embeds: [budgetgk], components: [bgk3] });
      }
      else if(i.customId == "bgs" || i.customId == "budgetgs") {
        await i.update({ embeds: [budgetgs], components: [bgs] });
      }
      else if(i.customId == "bgs2" || i.customId == "budgetgs2") {
        await i.update({ embeds: [budgetgs], components: [bgs2] });
      }
      else if(i.customId == "bgs3" || i.customId == "budgetgs3") {
        await i.update({ embeds: [budgetgs], components: [bgs3] });
      }
      else if(i.customId == "bnc" || i.customId == "budgetnc") {
        await i.update({ embeds: [budgetnc], components: [bnc] });
      }
      else if(i.customId == "bnc2" || i.customId == "budgetnc2") {
        await i.update({ embeds: [budgetnc], components: [bnc2] });
      }
      else if(i.customId == "bnc3" || i.customId == "budgetnc3") {
        await i.update({ embeds: [budgetnc], components: [bnc3] });
      }
      else if(i.customId == "bro" || i.customId == "budgetro") {
        await i.update({ embeds: [budgetro], components: [bro] });
      }
      else if(i.customId == "bro2" || i.customId == "budgetro2") {
        await i.update({ embeds: [budgetro], components: [bro2] });
      }
      else if(i.customId == "bro3" || i.customId == "budgetro3") {
        await i.update({ embeds: [budgetro], components: [bro3] });
      }
      else if(i.customId == "bsf" || i.customId == "budgetsf") {
        await i.update({ embeds: [budgetsf], components: [bsf] });
      }
      else if(i.customId == "bsf2" || i.customId == "budgetsf2") {
        await i.update({ embeds: [budgetsf], components: [bsf2] });
      }
      else if(i.customId == "bsf3" || i.customId == "budgetsf3") {
        await i.update({ embeds: [budgetsf], components: [bsf3] });
      }
      else if(i.customId == "bsp" || i.customId == "budgetsp") {
        await i.update({ embeds: [budgetsp], components: [bsp] });
      }
      else if(i.customId == "bsp2" || i.customId == "budgetsp2") {
        await i.update({ embeds: [budgetsp], components: [bsp2] });
      }
      else if(i.customId == "bsp3" || i.customId == "budgetsp3") {
        await i.update({ embeds: [budgetsp], components: [bsp3] });
      }
      else if(i.customId == "bwk" || i.customId == "budgetwk") {
        await i.update({ embeds: [budgetwk], components: [bwk] });
      }
      else if(i.customId == "bwk2" || i.customId == "budgetwk2") {
        await i.update({ embeds: [budgetwk], components: [bwk2] });
      }
      else if(i.customId == "bwk3" || i.customId == "budgetwk3") {
        await i.update({ embeds: [budgetwk], components: [bwk3] });
      }
      else if(i.customId == "cank" || i.customId == "cancerknight") {
        await i.update({ embeds: [cancerknight], components: [cank] });
      }
      else if(i.customId == "cank2" || i.customId == "cancerknight2") {
        await i.update({ embeds: [cancerknight], components: [cank2] });
      }
      else if(i.customId == "cank3" || i.customId == "cancerknight3") {
        await i.update({ embeds: [cancerknight], components: [cank3] });
      }
      else if(i.customId == "chemo" || i.customId == "chemotherapy") {
        await i.update({ embeds: [chemotherapy], components: [chemo] });
      }
      else if(i.customId == "chemo2" || i.customId == "chemotherapy2") {
        await i.update({ embeds: [chemotherapy], components: [chemo2] });
      }
      else if(i.customId == "chemo3" || i.customId == "chemotherapy3") {
        await i.update({ embeds: [chemotherapy], components: [chemo3] });
      }
      else if(i.customId == "cburn" || i.customId == "cyburn") {
        await i.update({ embeds: [cyburn], components: [cburn] });
      }
      else if(i.customId == "cburn2" || i.customId == "cyburn2") {
        await i.update({ embeds: [cyburn], components: [cburn2] });
      }
      else if(i.customId == "cburn3" || i.customId == "cyburn3") {
        await i.update({ embeds: [cyburn], components: [cburn3] });
      }
      else if(i.customId == "cburn4" || i.customId == "cyburn4") {
        await i.update({ embeds: [cyburn], components: [cburn4] });
      }
      else if(i.customId == "eject" || i.customId == "ejection") {
        await i.update({ embeds: [ejection], components: [eject] });
      }
      else if(i.customId == "eject2" || i.customId == "ejection2") {
        await i.update({ embeds: [ejection], components: [eject2] });
      }
      else if(i.customId == "eject3" || i.customId == "ejection3") {
        await i.update({ embeds: [ejection], components: [eject3] });
      }
      else if(i.customId == "elus" || i.customId == "elusives") {
        await i.update({ embeds: [elusives], components: [elus] });
      }
      else if(i.customId == "elus2" || i.customId == "elusives2") {
        await i.update({ embeds: [elusives], components: [elus2] });
      }
      else if(i.customId == "elus3" || i.customId == "elusives3") {
        await i.update({ embeds: [elusives], components: [elus3] });
      }
      else if(i.customId == "elus4" || i.customId == "elusives4") {
        await i.update({ embeds: [elusives], components: [elus4] });
      }
      else if(i.customId == "fheal" || i.customId == "freezeheal") {
        await i.update({ embeds: [freezeheal], components: [fheal] });
      }
      else if(i.customId == "fheal2" || i.customId == "freezeheal2") {
        await i.update({ embeds: [freezeheal], components: [fheal2] });
      }
      else if(i.customId == "fheal3" || i.customId == "freezeheal3") {
        await i.update({ embeds: [freezeheal], components: [fheal3] });
      }
      else if(i.customId == "fmr" || i.customId == "frymidrose") {
        await i.update({ embeds: [frymidrose], components: [fmr] });
      }
      else if(i.customId == "fmr2" || i.customId == "frymidrose2") {
        await i.update({ embeds: [frymidrose], components: [fmr2] });
      }
      else if(i.customId == "fmr3" || i.customId == "frymidrose3") {
        await i.update({ embeds: [frymidrose], components: [fmr3] });
      }
      else if(i.customId == "fflare" || i.customId == "funnyflare") {
        await i.update({ embeds: [funnyflare], components: [fflare] });
      }
      else if(i.customId == "fflare2" || i.customId == "funnyflare2") {
        await i.update({ embeds: [funnyflare], components: [fflare2] });
      }
      else if(i.customId == "fflare3" || i.customId == "funnyflare3") {
        await i.update({ embeds: [funnyflare], components: [fflare3] });
      }
      else if(i.customId == "fflare4" || i.customId == "funnyflare4") {
        await i.update({ embeds: [funnyflare], components: [fflare3] });
      }
      else if(i.customId == "g3n" || i.customId == "going3nuts") {
        await i.update({ embeds: [going3nuts], components: [g3n] });
      }
      else if(i.customId == "g3n2" || i.customId == "going3nuts2") {
        await i.update({ embeds: [going3nuts], components: [g3n2] });
      }
      else if(i.customId == "g3n3" || i.customId == "going3nuts3") {
        await i.update({ embeds: [going3nuts], components: [g3n3] });
      }
      else if(i.customId == "g3n4" || i.customId == "going3nuts4") {
        await i.update({ embeds: [going3nuts], components: [g3n4] });
      }
      else if(i.customId == "hburn" || i.customId == "healburn") {
        await i.update({ embeds: [healburn], components: [hburn] });
      }
      else if(i.customId == "hburn2" || i.customId == "healburn2") {
        await i.update({ embeds: [healburn], components: [hburn2] });
      }
      else if(i.customId == "hburn3" || i.customId == "healburn3") {
        await i.update({ embeds: [healburn], components: [hburn3] });
      }
      else if(i.customId == "hburn4" || i.customId == "healburn4") {
        await i.update({ embeds: [healburn], components: [hburn4] });
      }
      else if(i.customId == "flottery" || i.customId == "figlottery") {
        await i.update({ embeds: [figlottery], components: [flottery] });
      }
      else if(i.customId == "flottery2" || i.customId == "figlottery2") {
        await i.update({ embeds: [figlottery], components: [flottery2] });
      }
      else if(i.customId == "flottery3" || i.customId == "figlottery3") {
        await i.update({ embeds: [figlottery], components: [flottery3] });
      }
      else if(i.customId == "hmr" || i.customId == "healmidrose") {
        await i.update({ embeds: [healmidrose], components: [hmr] });
      }
      else if(i.customId == "hmr2" || i.customId == "healmidrose2") {
        await i.update({ embeds: [healmidrose], components: [hmr2] });
      }
      else if(i.customId == "hmr3" || i.customId == "healmidrose3") {
        await i.update({ embeds: [healmidrose], components: [hmr3] });
      }
      else if(i.customId == "hland" || i.customId == "highlander") {
        await i.update({ embeds: [highlander], components: [hland] });
      }
      else if(i.customId == "hland2" || i.customId == "highlander2") {
        await i.update({ embeds: [highlander], components: [hland2] });
      }
      else if(i.customId == "hland3" || i.customId == "highlander3") {
        await i.update({ embeds: [highlander], components: [hland3] });
      }
      else if(i.customId == "lcbd" || i.customId == "lifecouldbedream") {
        await i.update({ embeds: [lifecouldbedream], components: [lcbd] });
      }
      else if(i.customId == "lcbd2" || i.customId == "lifecouldbedream2") {
        await i.update({ embeds: [lifecouldbedream], components: [lcbd2] });
      }
      else if(i.customId == "lcbd3" || i.customId == "lifecouldbedream3") {
        await i.update({ embeds: [lifecouldbedream], components: [lcbd3] });
      }
      else if(i.customId == "mred" || i.customId == "midred") {
        await i.update({ embeds: [midred], components: [mred] });
      }
      else if(i.customId == "mred2" || i.customId == "midred2") {
        await i.update({ embeds: [midred], components: [mred2] });
      }
      else if(i.customId == "mred3" || i.customId == "midred3") {
        await i.update({ embeds: [midred], components: [mred3] });
      }
      else if(i.customId == "mred4" || i.customId == "midred4") {
        await i.update({ embeds: [midred], components: [mred4] });
      }
      else if(i.customId == "mopr" || i.customId == "mopribus") {
        await i.update({ embeds: [mopribus], components: [mopr] });
      }
      else if(i.customId == "mopr2" || i.customId == "mopribus2") {
        await i.update({ embeds: [mopribus], components: [mopr2] });
      }
      else if(i.customId == "mopr3" || i.customId == "mopribus3") {
        await i.update({ embeds: [mopribus], components: [mopr3] });
      }
      else if(i.customId == "mopr4" || i.customId == "mopribus4") {
        await i.update({ embeds: [mopribus], components: [mopr4] });
      }
      else if(i.customId == "msp" || i.customId == "mspotk") {
        await i.update({ embeds: [mspotk], components: [msp] });
      }
      else if(i.customId == "msp2" || i.customId == "mspotk2") {
        await i.update({ embeds: [mspotk], components: [msp2] });
      }
      else if(i.customId == "msp3" || i.customId == "mspotk3") {
        await i.update({ embeds: [mspotk], components: [msp3] });
      }
      else if(i.customId == "plmop" || i.customId == "plantmop") {
        await i.update({ embeds: [plantmop], components: [plmop] });
      }
      else if(i.customId == "plmop2" || i.customId == "plantmop2") {
        await i.update({ embeds: [plantmop], components: [plmop2] });
      }
      else if(i.customId == "plmop3" || i.customId == "plantmop3") {
        await i.update({ embeds: [plantmop], components: [plmop3] });
      }
      else if(i.customId == "psol" || i.customId == "psychosolstice") {
        await i.update({ embeds: [psychosolstice], components: [psol] });
      }
      else if(i.customId == "psol2" || i.customId == "psychosolstice2") {
        await i.update({ embeds: [psychosolstice], components: [psol2] });
      }
      else if(i.customId == "psol3" || i.customId == "psychosolstice3") {
        await i.update({ embeds: [psychosolstice], components: [psol3] });
      }
      else if(i.customId == "psol4" || i.customId == "psychosolstice4") {
        await i.update({ embeds: [psychosolstice], components: [psol4] });
      }
      else if(i.customId == "radio" || i.customId == "radiotherapy") {
        await i.update({ embeds: [radiotherapy], components: [radio] });
      }
      else if(i.customId == "radio2" || i.customId == "radiotherapy2") {
        await i.update({ embeds: [radiotherapy], components: [radio2] });
      }
      else if(i.customId == "radio3" || i.customId == "radiotherapy3") {
        await i.update({ embeds: [radiotherapy], components: [radio3] });
      }
      else if(i.customId == "r2s" || i.customId == "ramp2seedling") {
        await i.update({ embeds: [ramp2seedling], components: [r2s] });
      }
      else if(i.customId == "r2s2" || i.customId == "ramp2seedling2") {
        await i.update({ embeds: [ramp2seedling], components: [r2s2] });
      }
      else if(i.customId == "r2s3" || i.customId == "ramp2seedling3") {
        await i.update({ embeds: [ramp2seedling], components: [r2s3] });
      }
      else if(i.customId == "r2s4" || i.customId == "ramp2seedling4") {
        await i.update({ embeds: [ramp2seedling], components: [r2s4] });
      }
      else if(i.customId == "smf" || i.customId == "savagemayflower") {
        await i.update({ embeds: [savagemayflower], components: [smf] });
      }
      else if(i.customId == "smf2" || i.customId == "savagemayflower2") {
        await i.update({ embeds: [savagemayflower], components: [smf2] });
      }
      else if(i.customId == "smf3" || i.customId == "savagemayflower3") {
        await i.update({ embeds: [savagemayflower], components: [smf3] });
      }
      else if(i.customId == "shambc" || i.customId == "shamcontrolbc") {
        await i.update({ embeds: [shamcontrolbc], components: [shambc] });
      }
      else if(i.customId == "shambc2" || i.customId == "shamcontrolbc2") {
        await i.update({ embeds: [shamcontrolbc], components: [shambc2] });
      }
      else if(i.customId == "shambc3" || i.customId == "shamcontrolbc3") {
        await i.update({ embeds: [shamcontrolbc], components: [shambc3] });
      }
      else if(i.customId == "sknight" || i.customId == "shitknight") {
        await i.update({ embeds: [shitknight], components: [sknight] });
      }
      else if(i.customId == "sknight2" || i.customId == "shitknight2") {
        await i.update({ embeds: [shitknight], components: [sknight2] });
      }
      else if(i.customId == "sknight3" || i.customId == "shitknight3") {
        await i.update({ embeds: [shitknight], components: [sknight3] });
      }
      else if(i.customId == "srings" || i.customId == "starrings") {
        await i.update({ embeds: [starrings], components: [srings] });
      }
      else if(i.customId == "srings2" || i.customId == "starrings2") {
        await i.update({ embeds: [starrings], components: [srings2] });
      }
      else if(i.customId == "srings3" || i.customId == "starrings3") {
        await i.update({ embeds: [starrings], components: [srings3] });
      }
      else if(i.customId == "srings4" || i.customId == "starrings4") {
        await i.update({ embeds: [starrings], components: [srings4] });
      }
      else if(i.customId == "stron" || i.customId == "startron") {
        await i.update({ embeds: [startron], components: [stron] });
      }
      else if(i.customId == "stron2" || i.customId == "startron2") {
        await i.update({ embeds: [startron], components: [stron2] });
      }
      else if(i.customId == "stron3" || i.customId == "startron3") {
        await i.update({ embeds: [startron], components: [stron3] });
      }
      else if(i.customId == "stron4" || i.customId == "startron4") {
        await i.update({ embeds: [startron], components: [stron4] });
      }
      else if(i.customId == "tc" || i.customId == "toyotacontrolla") {
        await i.update({ embeds: [toyotacontrolla], components: [tc] });
      }
      else if(i.customId == "tc2" || i.customId == "toyotacontrolla2") {
        await i.update({ embeds: [toyotacontrolla], components: [tc2] });
      }
      else if(i.customId == "tc3" || i.customId == "toyotacontrolla3") {
        await i.update({ embeds: [toyotacontrolla], components: [tc3] });
      }
      else if(i.customId == "tlattail" || i.customId == "translattail") {
        await i.update({ embeds: [translattail], components: [tlattail] });
      }
      else if(i.customId == "tlattail2" || i.customId == "translattail2") {
        await i.update({ embeds: [translattail], components: [tlattail2] });
      }
      else if(i.customId == "tlattail3" || i.customId == "translattail3") {
        await i.update({ embeds: [translattail], components: [tlattail3] });
      }
      else if(i.customId == "tlattail4" || i.customId == "translattail4") {
        await i.update({ embeds: [translattail], components: [tlattail4] });
      }
      else if(i.customId == "wtron" || i.customId == "watertron") {
        await i.update({ embeds: [watertron], components: [wtron] });
      }
      else if(i.customId == "wtron2" || i.customId == "watertron2") {
        await i.update({ embeds: [watertron], components: [wtron2] });
      }
      else if(i.customId == "wtron3" || i.customId == "watertron3") {
        await i.update({ embeds: [watertron], components: [wtron3] });
      }
      else if(i.customId == "agr" || i.customId == "agraves") {
        await i.update({ embeds: [agraves], components: [agr] });
      }
      else if(i.customId == "agr2" || i.customId == "agraves2") {
        await i.update({ embeds: [agraves], components: [agr2] });
      }
      else if(i.customId == "agr3" || i.customId == "agraves3") {
        await i.update({ embeds: [agraves], components: [agr3] });
      }
      else if(i.customId == "agor" || i.customId == "antiagor") {
        await i.update({ embeds: [antiagor], components: [agor] });
      }
      else if(i.customId == "agor2" || i.customId == "antiagor2") {
        await i.update({ embeds: [antiagor], components: [agor2] });
      }
      else if(i.customId == "agor3" || i.customId == "antiagor3") {
        await i.update({ embeds: [antiagor], components: [agor3] });
      }
      else if(i.customId == "agoragor" || i.customId == "antiagoragor") {
        await i.update({ embeds: [antiagoragor], components: [agoragor] });
      }
      else if(i.customId == "agoragor2" || i.customId == "antiagoragor2") {
        await i.update({ embeds: [antiagoragor], components: [agoragor2] });
      }
      else if(i.customId == "agoragor3" || i.customId == "antiagoragor3") {
        await i.update({ embeds: [antiagoragor], components: [agoragor3] });
      }
      else if(i.customId == "agoragor4" || i.customId == "antiagoragor4") {
        await i.update({ embeds: [antiagoragor], components: [agoragor4] });
      }
      else if(i.customId == "bfmg" || i.customId == "bfmidgargs") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg] });
      }
      else if(i.customId == "bfmg2" || i.customId == "bfmidgargs2") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg2] });
      }
      else if(i.customId == "bfmg3" || i.customId == "bfmidgargs3") {
        await i.update({ embeds: [bfmidgargs], components: [bfmg3] });
      }
      else if(i.customId == "bfpc" || i.customId == "bfplankcontrol") {
        await i.update({ embeds: [bfplankcontrol], components: [bfpc] });
      }
      else if(i.customId == "bfpc2" || i.customId == "bfplankcontrol2") {
        await i.update({ embeds: [bfplankcontrol], components: [bfpc2] });
      }
      else if(i.customId == "bfpc3" || i.customId == "bfplankcontrol3") {
        await i.update({ embeds: [bfplankcontrol], components: [bfpc3] });
      }
      else if(i.customId == "bas" || i.customId == "bastet") {
        await i.update({ embeds: [bastet], components: [bas] });
      }
      else if(i.customId == "bas2" || i.customId == "bastet2") {
        await i.update({ embeds: [bastet], components: [bas2] });
      }
      else if(i.customId == "bas3" || i.customId == "bastet3") {
        await i.update({ embeds: [bastet], components: [bas3] });
      }
      else if(i.customId == "bas4" || i.customId == "bastet4") {
        await i.update({ embeds: [bastet], components: [bas4] });
      }
      else if(i.customId == "bfw" || i.customId == "binaryflagwar") {
        await i.update({ embeds: [binaryflagwar], components: [bfw] });
      }
      else if(i.customId == "bfw2" || i.customId == "binaryflagwar2") {
        await i.update({ embeds: [binaryflagwar], components: [bfw2] });
      }
      else if(i.customId == "bfw3" || i.customId == "binaryflagwar3") {
        await i.update({ embeds: [binaryflagwar], components: [bfw3] });
      }
      else if(i.customId == "bfw4" || i.customId == "binaryflagwar4") {
        await i.update({ embeds: [binaryflagwar], components: [bfw4] });
      }
      else if(i.customId == "bfwrap" || i.customId == "blobfishwrappers") {
        await i.update({ embeds: [blobfishwrappers], components: [bfwrap] });
      }
      else if(i.customId == "bfwrap2" || i.customId == "blobfishwrappers2") {
        await i.update({ embeds: [blobfishwrappers], components: [bfwrap2] });
      }
      else if(i.customId == "bfwrap3" || i.customId == "blobfishwrappers3") {
        await i.update({ embeds: [blobfishwrappers], components: [bfwrap3] });
      }
      else if(i.customId == "bfwrap4" || i.customId == "blobfishwrappers4") {
        await i.update({ embeds: [blobfishwrappers], components: [bfwrap4] });
      }
      else if(i.customId == "bbolt" || i.customId == "boltbolt") {
        await i.update({ embeds: [boltbolt], components: [bbolt] });
      }
      else if(i.customId == "bbolt2" || i.customId == "boltbolt2") {
        await i.update({ embeds: [boltbolt], components: [bbolt2] });
      }
      else if(i.customId == "bbolt3" || i.customId == "boltbolt3") {
        await i.update({ embeds: [boltbolt], components: [bbolt3] });
      }
      else if(i.customId == "bbolt4" || i.customId == "boltbolt4") {
        await i.update({ embeds: [boltbolt], components: [bbolt4] });
      }
      else if(i.customId == "bducks" || i.customId == "bonusducks") {
        await i.update({ embeds: [bonusducks], components: [bducks] });
      }
      else if(i.customId == "bducks2" || i.customId == "bonusducks2") {
        await i.update({ embeds: [bonusducks], components: [bducks2] });
      }
      else if(i.customId == "bducks3" || i.customId == "bonusducks3") {
        await i.update({ embeds: [bonusducks], components: [bducks3] });
      }
      else if(i.customId == "bducks4" || i.customId == "bonusducks4") {
        await i.update({ embeds: [bonusducks], components: [bducks4] });
      }
      else if(i.customId == "brad" || i.customId == "brady") {
        await i.update({ embeds: [brady], components: [brad] });
      }
      else if(i.customId == "brad2" || i.customId == "brady2") {
        await i.update({ embeds: [brady], components: [brad2] });
      }
      else if(i.customId == "brad3" || i.customId == "brady3") {
        await i.update({ embeds: [brady], components: [brad3] });
      }
      else if(i.customId == "bbf" || i.customId == "budgetbf") {
        await i.update({ embeds: [budgetbf], components: [bbf] });
      }
      else if(i.customId == "bbf2" || i.customId == "budgetbf2") {
        await i.update({ embeds: [budgetbf], components: [bbf2] });
      }
      else if(i.customId == "bbf3" || i.customId == "budgetbf3") {
        await i.update({ embeds: [budgetbf], components: [bbf3] });
      }
      else if(i.customId == "beb" || i.customId == "budgeteb") {
        await i.update({ embeds: [budgeteb], components: [beb] });
      }
      else if(i.customId == "beb2" || i.customId == "budgeteb2") {
        await i.update({ embeds: [budgeteb], components: [beb2] });
      }
      else if(i.customId == "beb3" || i.customId == "budgeteb3") {
        await i.update({ embeds: [budgeteb], components: [beb3] });
      }
      else if(i.customId == "bif" || i.customId == "budgetif") {
        await i.update({ embeds: [budgetif], components: [bif] });
      }
      else if(i.customId == "bif2" || i.customId == "budgetif2") {
        await i.update({ embeds: [budgetif], components: [bif2] });
      }
      else if(i.customId == "bif3" || i.customId == "budgetif3") {
        await i.update({ embeds: [budgetif], components: [bif3] });
      }
      else if(i.customId == "bim" || i.customId == "budgetim") {
        await i.update({ embeds: [budgetim], components: [bim] });
      }
      else if(i.customId == "bim2" || i.customId == "budgetim2") {
        await i.update({ embeds: [budgetim], components: [bim2] });
      }
      else if(i.customId == "bim3" || i.customId == "budgetim3") {
        await i.update({ embeds: [budgetim], components: [bim3] });
      }
      else if(i.customId == "bnt" || i.customId == "budgetnt") {
        await i.update({ embeds: [budgetnt], components: [bnt] });
      }
      else if(i.customId == "bnt2" || i.customId == "budgetnt2") {
        await i.update({ embeds: [budgetnt], components: [bnt2] });
      }
      else if(i.customId == "bnt3" || i.customId == "budgetnt3") {
        await i.update({ embeds: [budgetnt], components: [bnt3] });
      }
      else if(i.customId == "bpb" || i.customId == "budgetpb") {
        await i.update({ embeds: [budgetpb], components: [bpb] });
      }
      else if(i.customId == "bpb2" || i.customId == "budgetpb2") {
        await i.update({ embeds: [budgetpb], components: [bpb2] });
      }
      else if(i.customId == "bpb3" || i.customId == "budgetpb3") {
        await i.update({ embeds: [budgetpb], components: [bpb3] });
      }
      else if(i.customId == "brb" || i.customId == "budgetrb") {
        await i.update({ embeds: [budgetrb], components: [brb] });
      }
      else if(i.customId == "brb2" || i.customId == "budgetrb2") {
        await i.update({ embeds: [budgetrb], components: [brb2] });
      }
      else if(i.customId == "brb3" || i.customId == "budgetrb3") {
        await i.update({ embeds: [budgetrb], components: [brb3] });
      }
      else if(i.customId == "bsb" || i.customId == "budgetsb") {
        await i.update({ embeds: [budgetsb], components: [bsb] });
      }
      else if(i.customId == "bsb2" || i.customId == "budgetsb2") {
        await i.update({ embeds: [budgetsb], components: [bsb2] });
      }
      else if(i.customId == "bsb3" || i.customId == "budgetsb3") {
        await i.update({ embeds: [budgetsb], components: [bsb3] });
      }
      else if(i.customId == "bsm" || i.customId == "budgetsm") {
        await i.update({ embeds: [budgetsm], components: [bsm] });
      }
      else if(i.customId == "bsm2" || i.customId == "budgetsm2") {
        await i.update({ embeds: [budgetsm], components: [bsm2] });
      }
      else if(i.customId == "bsm3" || i.customId == "budgetsm3") {
        await i.update({ embeds: [budgetsm], components: [bsm3] });
      }
      else if(i.customId == "bykm" || i.customId == "budgetykm") {
        await i.update({ embeds: [budgetykm], components: [bykm] });
      }
      else if(i.customId == "bykm2" || i.customId == "budgetykm2") {
        await i.update({ embeds: [budgetykm], components: [bykm2] });
      }
      else if(i.customId == "bykm3" || i.customId == "budgetykm3") {
        await i.update({ embeds: [budgetykm], components: [bykm3] });
      }
      else if(i.customId == "bykm4" || i.customId == "budgetykm4") {
        await i.update({ embeds: [budgetykm], components: [bykm4] });
      }
      else if(i.customId == "bzm" || i.customId == "budgetzm") {
        await i.update({ embeds: [budgetzm], components: [bzm] });
      }
      else if(i.customId == "bzm2" || i.customId == "budgetzm2") {
        await i.update({ embeds: [budgetzm], components: [bzm2] });
      }
      else if(i.customId == "bzm3" || i.customId == "budgetzm3") {
        await i.update({ embeds: [budgetzm], components: [bzm3] });
      }
      else if(i.customId == "bust" || i.customId == "bustbolt") {
        await i.update({ embeds: [bustbolt], components: [bust] });
      }
      else if(i.customId == "bust2" || i.customId == "bustbolt2") {
        await i.update({ embeds: [bustbolt], components: [bust2] });
      }
      else if(i.customId == "bust3" || i.customId == "bustbolt3") {
        await i.update({ embeds: [bustbolt], components: [bust3] });
      }
      else if(i.customId == "bust4" || i.customId == "bustbolt4") {
        await i.update({ embeds: [bustbolt], components: [bust4] });
      }
      else if(i.customId == "cog" || i.customId == "coggerazzi") {
        await i.update({ embeds: [coggerazzi], components: [cog] });
      }
      else if(i.customId == "cog2" || i.customId == "coggerazzi2") {
        await i.update({ embeds: [coggerazzi], components: [cog2] });
      }
      else if(i.customId == "cog3" || i.customId == "coggerazzi3") {
        await i.update({ embeds: [coggerazzi], components: [cog3] });
      }
      else if(i.customId == "cog4" || i.customId == "coggerazzi4") {
        await i.update({ embeds: [coggerazzi], components: [cog4] });
      }
      else if(i.customId == "cbait" || i.customId == "congabait") {
        await i.update({ embeds: [congabait], components: [cbait] });
      }
      else if(i.customId == "cbait2" || i.customId == "congabait2") {
        await i.update({ embeds: [congabait], components: [cbait2] });
      }
      else if(i.customId == "cbait3" || i.customId == "congabait3") {
        await i.update({ embeds: [congabait], components: [cbait3] });
      }
      else if(i.customId == "cbait4" || i.customId == "congabait4") {
        await i.update({ embeds: [congabait], components: [cbait4] });
      }
      else if(i.customId == "cleap" || i.customId == "conjureleap") {
        await i.update({ embeds: [conjureleap], components: [cleap] });
      }
      else if(i.customId == "cleap2" || i.customId == "conjureleap2") {
        await i.update({ embeds: [conjureleap], components: [cleap2] });
      }
      else if(i.customId == "cleap3" || i.customId == "conjureleap3") {
        await i.update({ embeds: [conjureleap], components: [cleap3] });
      }
      else if(i.customId == "cboy" || i.customId == "cryoboy") {
        await i.update({ embeds: [cryoboy], components: [cboy] });
      }
      else if(i.customId == "cboy2" || i.customId == "cryoboy2") {
        await i.update({ embeds: [cryoboy], components: [cboy2] });
      }
      else if(i.customId == "cboy3" || i.customId == "cryoboy3") {
        await i.update({ embeds: [cryoboy], components: [cboy3] });
      }
      else if(i.customId == "cboy4" || i.customId == "cryoboy4") {
        await i.update({ embeds: [cryoboy], components: [cboy4] });
      }
      else if(i.customId == "dmech" || i.customId == "dozzamech") {
        await i.update({ embeds: [dozzamech], components: [dmech] });
      }
      else if(i.customId == "dmech2" || i.customId == "dozzamech2") {
        await i.update({ embeds: [dozzamech], components: [dmech2] });
      }
      else if(i.customId == "dmech3" || i.customId == "dozzamech3") {
        await i.update({ embeds: [dozzamech], components: [dmech3] });
      }
      else if(i.customId == "flo" || i.customId == "floss") {
        await i.update({ embeds: [floss], components: [flo] });
      }
      else if(i.customId == "flo2" || i.customId == "floss2") {
        await i.update({ embeds: [floss], components: [flo2] });
      }
      else if(i.customId == "flo3" || i.customId == "floss3") {
        await i.update({ embeds: [floss], components: [flo3] });
      }
      else if(i.customId == "ftimps" || i.customId == "frozentelimps") {
        await i.update({ embeds: [frozentelimps], components: [ftimps] });
      }
      else if(i.customId == "ftimps2" || i.customId == "frozentelimps2") {
        await i.update({ embeds: [frozentelimps], components: [ftimps2] });
      }
      else if(i.customId == "ftimps3" || i.customId == "frozentelimps3") {
        await i.update({ embeds: [frozentelimps], components: [ftimps3] });
      }
      else if(i.customId == "ftimps4" || i.customId == "frozentelimps4") {
        await i.update({ embeds: [frozentelimps], components: [ftimps4] });
      }
      else if(i.customId == "gburn" || i.customId == "gargburn") {
        await i.update({ embeds: [gargburn], components: [gburn] });
      }
      else if(i.customId == "gburn2" || i.customId == "gargburn2") {
        await i.update({ embeds: [gargburn], components: [gburn2] });
      }
      else if(i.customId == "gburn3" || i.customId == "gargburn3") {
        await i.update({ embeds: [gargburn], components: [gburn3] });
      }
      else if(i.customId == "gburn4" || i.customId == "gargburn4") {
        await i.update({ embeds: [gargburn], components: [gburn4] });
      }
      else if(i.customId == "gtech" || i.customId == "gargolithtech") {
        await i.update({ embeds: [gargolithtech], components: [gtech] });
      }
      else if(i.customId == "gtech2" || i.customId == "gargolithtech2") {
        await i.update({ embeds: [gargolithtech], components: [gtech2] });
      }
      else if(i.customId == "gtech3" || i.customId == "gargolithtech3") {
        await i.update({ embeds: [gargolithtech], components: [gtech3] });
      }
      else if(i.customId == "gstar22" || i.customId == "gargstar22") {
        await i.update({ embeds: [gargstar22], components: [gstar22] });
      }
      else if(i.customId == "gstar222" || i.customId == "gargstar222") {
        await i.update({ embeds: [gargstar22], components: [gstar222] });
      }
      else if(i.customId == "gstar223" || i.customId == "gargstar223") {
        await i.update({ embeds: [gargstar22], components: [gstar223] });
      }
      else if(i.customId == "gom" || i.customId == "gomorrah") {
        await i.update({ embeds: [gomorrah], components: [gom] });
      }
      else if(i.customId == "gom2" || i.customId == "gomorrah2") {
        await i.update({ embeds: [gomorrah], components: [gom2] });
      }
      else if(i.customId == "gom3" || i.customId == "gomorrah3") {
        await i.update({ embeds: [gomorrah], components: [gom3] });
      }
      else if(i.customId == "gps" || i.customId == "gravepiratestache") {
        await i.update({ embeds: [gravepiratestache], components: [gps] });
      }
      else if(i.customId == "gps2" || i.customId == "gravepiratestache2") {
        await i.update({ embeds: [gravepiratestache], components: [gps2] });
      }
      else if(i.customId == "gps3" || i.customId == "gravepiratestache3") {
        await i.update({ embeds: [gravepiratestache], components: [gps3] });
      }
      else if(i.customId == "gps4" || i.customId == "gravepiratestache4") {
        await i.update({ embeds: [gravepiratestache], components: [gps4] });
      }
      else if(i.customId == "gstache" || i.customId == "gravestache") {
        await i.update({ embeds: [gravestache], components: [gstache] });
      }
      else if(i.customId == "gstache2" || i.customId == "gravestache2") {
        await i.update({ embeds: [gravestache], components: [gstache2] });
      }
      else if(i.customId == "gstache3" || i.customId == "gravestache3") {
        await i.update({ embeds: [gravestache], components: [gstache3] });
      }
      else if(i.customId == "hbird" || i.customId == "hibird") {
        await i.update({ embeds: [hibird], components: [hbird] });
      }
      else if(i.customId == "hbird2" || i.customId == "hibird2") {
        await i.update({ embeds: [hibird], components: [hbird2] });
      }
      else if(i.customId == "hbird3" || i.customId == "hibird3") {
        await i.update({ embeds: [hibird], components: [hbird3] });
      }
      else if(i.customId == "hbird4" || i.customId == "hibird4") {
        await i.update({ embeds: [hibird], components: [hbird4] });
      }
      else if(i.customId == "hter" || i.customId == "himpter") {
        await i.update({ embeds: [himps], components: [hter] });
      }
      else if(i.customId == "hter2" || i.customId == "himpter2") {
        await i.update({ embeds: [himps], components: [hter2] });
      }
      else if(i.customId == "hter3" || i.customId == "himpter3") {
        await i.update({ embeds: [himps], components: [hter3] });
      }
      else if(i.customId == "hter4" || i.customId == "himpter4") {
        await i.update({ embeds: [himps], components: [hter4] });
      }
      else if(i.customId == "hor" || i.customId == "horts") {
        await i.update({ embeds: [horts], components: [hor] });
      }
      else if(i.customId == "hor2" || i.customId == "horts2") {
        await i.update({ embeds: [horts], components: [hor2] });
      }
      else if(i.customId == "hor3" || i.customId == "horts3") {
        await i.update({ embeds: [horts], components: [hor3] });
      }
      else if(i.customId == "hor4" || i.customId == "horts4") {
        await i.update({ embeds: [horts], components: [hor4] });
      }
      else if(i.customId == "homo" || i.customId == "homophobia") {
        await i.update({ embeds: [homophobia], components: [homo] });
      }
      else if(i.customId == "homo2" || i.customId == "homophobia2") {
        await i.update({ embeds: [homophobia], components: [homo2] });
      }
      else if(i.customId == "homo3" || i.customId == "homophobia3") {
        await i.update({ embeds: [homophobia], components: [homo3] });
      }
      else if(i.customId == "ibox" || i.customId == "icebox") {
        await i.update({ embeds: [icebox], components: [ibox] });
      }
      else if(i.customId == "ibox2" || i.customId == "icebox2") {
        await i.update({ embeds: [icebox], components: [ibox2] });
      }
      else if(i.customId == "ibox3" || i.customId == "icebox3") {
        await i.update({ embeds: [icebox], components: [ibox3] });
      }
      else if(i.customId == "igbc" || i.customId == "igmablobchum") {
        await i.update({ embeds: [igmablobchum], components: [igbc] });
      }
      else if(i.customId == "igbc2" || i.customId == "igmablobchum2") {
        await i.update({ embeds: [igmablobchum], components: [igbc2] });
      }
      else if(i.customId == "igbc3" || i.customId == "igmablobchum3") {
        await i.update({ embeds: [igmablobchum], components: [igbc3] });
      }
      else if(i.customId == "igbc4" || i.customId == "igmablobchum4") {
        await i.update({ embeds: [igmablobchum], components: [igbc4] });
      }
      else if(i.customId == "ltbr" || i.customId == "lockthebathroom") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr] });
      }
      else if(i.customId == "ltbr2" || i.customId == "lockthebathroom2") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr2] });
      }
      else if(i.customId == "ltbr3" || i.customId == "lockthebathroom3") {
        await i.update({ embeds: [lockthebathroom], components: [ltbr3] });
      }
      else if(i.customId == "tmech" || i.customId == "trickmech") {
        await i.update({ embeds: [trickmech], components: [tmech] });
      }
      else if(i.customId == "tmech2" || i.customId == "trickmech2") {
        await i.update({ embeds: [trickmech], components: [tmech2] });
      }
      else if(i.customId == "tmech3" || i.customId == "trickmech3") {
        await i.update({ embeds: [trickmech], components: [tmech3] });
      }
      else if(i.customId == "mbolt" || i.customId == "marxbolt") {
        await i.update({ embeds: [marxbolt], components: [mbolt] });
      }
      else if(i.customId == "mbolt2" || i.customId == "marxbolt2") {
        await i.update({ embeds: [marxbolt], components: [mbolt2] });
      }
      else if(i.customId == "mbolt3" || i.customId == "marxbolt3") {
        await i.update({ embeds: [marxbolt], components: [mbolt3] });
      }
      else if(i.customId == "mcon" || i.customId == "mechacontrol") {
        await i.update({ embeds: [mechacontrol], components: [mcon] });
      }
      else if(i.customId == "mcon2" || i.customId == "mechacontrol2") {
        await i.update({ embeds: [mechacontrol], components: [mcon2] });
      }
      else if(i.customId == "mcon3" || i.customId == "mechacontrol3") {
        await i.update({ embeds: [mechacontrol], components: [mcon3] });
      }
      else if(i.customId == "mscope" || i.customId == "mechascope") {
        await i.update({ embeds: [mechascope], components: [mscope] });
      }
      else if(i.customId == "mscope2" || i.customId == "mechascope2") {
        await i.update({ embeds: [mechascope], components: [mscope2] });
      }
      else if(i.customId == "mscope3" || i.customId == "mechascope3") {
        await i.update({ embeds: [mechascope], components: [mscope3] });
      }
      else if(i.customId == "mscope4" || i.customId == "mechascope4") {
        await i.update({ embeds: [mechascope], components: [mscope4] });
      }
      else if(i.customId == "ltime" || i.customId == "lunchtime") {
        await i.update({ embeds: [lunchtime], components: [ltime] });
      }
      else if(i.customId == "ltime2" || i.customId == "lunchtime2") {
        await i.update({ embeds: [lunchtime], components: [ltime2] });
      }
      else if(i.customId == "ltime3" || i.customId == "lunchtime3") {
        await i.update({ embeds: [lunchtime], components: [ltime3] });
      }
      else if(i.customId == "npa" || i.customId == "noplayingallowed") {
        await i.update({ embeds: [noplayingallowed], components: [npa] });
      }
      else if(i.customId == "npa2" || i.customId == "noplayingallowed2") {
        await i.update({ embeds: [noplayingallowed], components: [npa2] });
      }
      else if(i.customId == "npa3" || i.customId == "noplayingallowed3") {
        await i.update({ embeds: [noplayingallowed], components: [npa3] });
      }
      else if(i.customId == "otksw" || i.customId == "otkswabbie") {
        await i.update({ embeds: [otkswabbie], components: [otksw] });
      }
      else if(i.customId == "otksw2" || i.customId == "otkswabbie2") {
        await i.update({ embeds: [otkswabbie], components: [otksw2] });
      }
      else if(i.customId == "otksw3" || i.customId == "otkswabbie3") {
        await i.update({ embeds: [otkswabbie], components: [otksw3] });
      }
      else if(i.customId == "kscope" || i.customId == "kaleidoscope") {
        await i.update({ embeds: [kaleidoscope], components: [kscope] });
      }
      else if(i.customId == "kscope2" || i.customId == "kaleidoscope2") {
        await i.update({ embeds: [kaleidoscope], components: [kscope2] });
      }
      else if(i.customId == "kscope3" || i.customId == "kaleidoscope3") {
        await i.update({ embeds: [kaleidoscope], components: [kscope3] });
      }
      else if(i.customId == "pyeeyz" || i.customId == "pablosyeeyzs") {
        await i.update({ embeds: [pablosyeezys], components: [pyeeyz] });
      }
      else if(i.customId == "pyeeyz2" || i.customId == "pablosyeeyzs2") {
        await i.update({ embeds: [pablosyeezys], components: [pyeeyz2] });
      }
      else if(i.customId == "pyeeyz3" || i.customId == "pablosyeeyzs3") {
        await i.update({ embeds: [pablosyeezys], components: [pyeeyz3] });
      }
      else if(i.customId == "pyeeyz4" || i.customId == "pablosyeeyzs4") {
        await i.update({ embeds: [pablosyeezys], components: [pyeeyz4] });
      }
      else if(i.customId == "pfeast" || i.customId == "pbfeast") {
        await i.update({ embeds: [pbfeast], components: [pfeast] });
      }
      else if(i.customId == "pfeast2" || i.customId == "pbfeast2") {
        await i.update({ embeds: [pbfeast], components: [pfeast2] });
      }
      else if(i.customId == "pfeast3" || i.customId == "pbfeast3") {
        await i.update({ embeds: [pbfeast], components: [pfeast3] });
      }
      else if(i.customId == "pmop" || i.customId == "petmop") {
        await i.update({ embeds: [petmop], components: [pmop] });
      }
      else if(i.customId == "pmop2" || i.customId == "petmop2") {
        await i.update({ embeds: [petmop], components: [pmop2] });
      }
      else if(i.customId == "pmop3" || i.customId == "petmop3") {
        await i.update({ embeds: [petmop], components: [pmop3] });
      }
  
      else if(i.customId == "propackage" || i.customId == "professorpackage") {
        await i.update({
          embeds: [professorpackage],
          components: [propackage],
        });
      }
      else if(i.customId == "propackage2" || i.customId == "professorpackage2") {
        await i.update({
          embeds: [professorpackage],
          components: [propackage2],
        });
      }
      else if(i.customId == "propackage3" || i.customId == "professorpackage3") {
        await i.update({
          embeds: [professorpackage],
          components: [propackage3],
        });
      }
      else if(i.customId == "rac" || i.customId == "racism") {
        await i.update({ embeds: [racism], components: [rac] });
      }
      else if(i.customId == "rac2" || i.customId == "racism2") {
        await i.update({ embeds: [racism], components: [rac2] });
      }
      else if(i.customId == "rac3" || i.customId == "racism3") {
        await i.update({ embeds: [racism], components: [rac3] });
      }
      else if(i.customId == "rpackage" || i.customId == "raiserpackage") {
        await i.update({ embeds: [raiserpackage], components: [rpackage] });
      }
      else if(i.customId == "rpackage2" || i.customId == "raiserpackage2") {
        await i.update({ embeds: [raiserpackage], components: [rpackage2] });
      }
      else if(i.customId == "rpackage3" || i.customId == "raiserpackage3") {
        await i.update({ embeds: [raiserpackage], components: [rpackage3] });
      }
      else if(i.customId == "rticia" || i.customId == "rampticia") {
        await i.update({ embeds: [rampticia], components: [rticia] });
      }
      else if(i.customId == "rticia2" || i.customId == "rampticia2") {
        await i.update({ embeds: [rampticia], components: [rticia2] });
      }
      else if(i.customId == "rticia3" || i.customId == "rampticia3") {
        await i.update({ embeds: [rampticia], components: [rticia3] });
      }
      else if(i.customId == "syard" || i.customId == "schoolyard") {
        await i.update({ embeds: [schoolyard], components: [syard] });
      }
      else if(i.customId == "syard2" || i.customId == "schoolyard2") {
        await i.update({ embeds: [schoolyard], components: [syard2] });
      }
      else if(i.customId == "syard3" || i.customId == "schoolyard3") {
        await i.update({ embeds: [schoolyard], components: [syard3] });
      }
      else if(i.customId == "sea" || i.customId == "seacret") {
        await i.update({ embeds: [seacret], components: [sea] });
      }
      else if(i.customId == "sea2" || i.customId == "seacret2") {
        await i.update({ embeds: [seacret], components: [sea2] });
      }
      else if(i.customId == "sea3" || i.customId == "seacret3") {
        await i.update({ embeds: [seacret], components: [sea3] });
      }
      else if(i.customId == "svery" || i.customId == "slavery") {
        await i.update({ embeds: [slavery], components: [svery] });
      }
      else if(i.customId == "svery2" || i.customId == "slavery2") {
        await i.update({ embeds: [slavery], components: [svery2] });
      }
      else if(i.customId == "svery3" || i.customId == "slavery3") {
        await i.update({ embeds: [slavery], components: [svery3] });
      }
      else if(i.customId == "stars" || i.customId == "spacestars") {
        await i.update({ embeds: [spacestars], components: [stars] });
      }
      else if(i.customId == "stars2" || i.customId == "spacestars2") {
        await i.update({ embeds: [spacestars], components: [stars2] });
      }
      else if(i.customId == "stars3" || i.customId == "spacestars3") {
        await i.update({ embeds: [spacestars], components: [stars3] });
      }
      else if(i.customId == "stars4" || i.customId == "spacestars4") {
        await i.update({ embeds: [spacestars], components: [stars4] });
      }
      else if(i.customId == "spl" || i.customId == "splimps") {
        await i.update({ embeds: [splimps], components: [spl] });
      }
      else if(i.customId == "spl2" || i.customId == "splimps2") {
        await i.update({ embeds: [splimps], components: [spl2] });
      }
      else if(i.customId == "spl3" || i.customId == "splimps3") {
        await i.update({ embeds: [splimps], components: [spl3] });
      }
      else if(i.customId == "sticia" || i.customId == "stacheticia") {
        await i.update({ embeds: [stacheticia], components: [sticia] });
      }
      else if(i.customId == "sticia2" || i.customId == "stacheticia2") {
        await i.update({ embeds: [stacheticia], components: [sticia2] });
      }
      else if(i.customId == "sticia3" || i.customId == "stacheticia3") {
        await i.update({ embeds: [stacheticia], components: [sticia3] });
      }
      else if(i.customId == "saggro" || i.customId == "sushiaggro") {
        await i.update({ embeds: [sushiaggro], components: [saggro] });
      }
      else if(i.customId == "saggro2" || i.customId == "sushiaggro2") {
        await i.update({ embeds: [sushiaggro], components: [saggro2] });
      }
      else if(i.customId == "saggro3" || i.customId == "sushiaggro3") {
        await i.update({ embeds: [sushiaggro], components: [saggro3] });
      }
      else if(i.customId == "sbandits" || i.customId == "sunbandits") {
        await i.update({ embeds: [sunbandits], components: [sbandits] });
      }
      else if(i.customId == "sbandits2" || i.customId == "sunbandits2") {
        await i.update({ embeds: [sunbandits], components: [sbandits2] });
      }
      else if(i.customId == "sbandits3" || i.customId == "sunbandits3") {
        await i.update({ embeds: [sunbandits], components: [sbandits3] });
      }
      else if(i.customId == "sbandits4" || i.customId == "sunbandits4") {
        await i.update({ embeds: [sunbandits], components: [sbandits4] });
      }
      else if(i.customId == "slord" || i.customId == "sunlord") {
        await i.update({ embeds: [sunlord], components: [slord] });
      }
      else if(i.customId == "slord2" || i.customId == "sunlord2") {
        await i.update({ embeds: [sunlord], components: [slord2] });
      }
      else if(i.customId == "slord3" || i.customId == "sunlord3") {
        await i.update({ embeds: [sunlord], components: [slord3] });
      }
      else if(i.customId == "slord4" || i.customId == "sunlord4") {
        await i.update({ embeds: [sunlord], components: [slord4] });
      }
      else if(i.customId == "timps" || i.customId == "telimps") {
        await i.update({ embeds: [telimps], components: [timps] });
      }
      else if(i.customId == "timps2" || i.customId == "telimps2") {
        await i.update({ embeds: [telimps], components: [timps2] });
      }
      else if(i.customId == "timps3" || i.customId == "telimps3") {
        await i.update({ embeds: [telimps], components: [timps3] });
      }
      else if(i.customId == "timps4" || i.customId == "telimps4") {
        await i.update({ embeds: [telimps], components: [timps4] });
      }
      else if(i.customId == "timpssb" || i.customId == "telimpssb") {
        await i.update({ embeds: [telimpssb], components: [timpssb] });
      }
      else if(i.customId == "timpssb2" || i.customId == "telimpssb2") {
        await i.update({ embeds: [telimpssb], components: [timpssb2] });
      }
      else if(i.customId == "timpssb3" || i.customId == "telimpssb3") {
        await i.update({ embeds: [telimpssb], components: [timpssb3] });
      }
      else if(i.customId == "timpssb4" || i.customId == "telimpssb4") {
        await i.update({ embeds: [telimpssb], components: [timpssb4] });
      }
      else if(i.customId == "terrifyster" || i.customId == "terrifytricksterazzi") {
        await i.update({
          embeds: [terrifytricksterazzi],
          components: [terrifyster],
        });
      }
      else if (
        i.customId == "terrifyster2" ||
        i.customId == "terrifytricksterazzi2"
      ) {
        await i.update({
          embeds: [terrifytricksterazzi],
          components: [terrifyster2],
        });
      }
      else if (
        i.customId == "terrifyster3" ||
        i.customId == "terrifytricksterazzi3"
      ) {
        await i.update({
          embeds: [terrifytricksterazzi],
          components: [terrifyster3],
        });
      }
      else if (
        i.customId == "terrifyster4" ||
        i.customId == "terrifytricksterazzi4"
      ) {
        await i.update({
          embeds: [terrifytricksterazzi],
          components: [terrifyster4],
        });
      }
      else if(i.customId == "tstache" || i.customId == "trickstache") {
        await i.update({ embeds: [trickstache], components: [tstache] });
      }
      else if(i.customId == "tstache2" || i.customId == "trickstache2") {
        await i.update({ embeds: [trickstache], components: [tstache2] });
      }
      else if(i.customId == "tstache3" || i.customId == "trickstache3") {
        await i.update({ embeds: [trickstache], components: [tstache3] });
      }
      else if(i.customId == "tstache4" || i.customId == "trickstache4") {
        await i.update({ embeds: [trickstache], components: [tstache4] });
      }
      else if(i.customId == "ubolt" || i.customId == "uncrackabolt") {
        await i.update({ embeds: [uncrackabolt], components: [ubolt] });
      }
      else if(i.customId == "ubolt2" || i.customId == "uncrackabolt2") {
        await i.update({ embeds: [uncrackabolt], components: [ubolt2] });
      }
      else if(i.customId == "ubolt3" || i.customId == "uncrackabolt3") {
        await i.update({ embeds: [uncrackabolt], components: [ubolt3] });
      }
      else if(i.customId == "umech" || i.customId == "uncrackamech") {
        await i.update({ embeds: [uncrackamech], components: [umech] });
      }
      else if(i.customId == "umech2" || i.customId == "uncrackamech2") {
        await i.update({ embeds: [uncrackamech], components: [umech2] });
      }
      else if(i.customId == "umech3" || i.customId == "uncrackamech3") {
        await i.update({ embeds: [uncrackamech], components: [umech3] });
      }
      else if(i.customId == "umech4" || i.customId == "uncrackamech4") {
        await i.update({ embeds: [uncrackamech], components: [umech4] });
      }
      else if(i.customId == "vster" || i.customId == "valkster") {
        await i.update({ embeds: [valkster], components: [vster] });
      }
      else if(i.customId == "vster2" || i.customId == "valkster2") {
        await i.update({ embeds: [valkster], components: [vster2] });
      }
      else if(i.customId == "vster3" || i.customId == "valkster3") {
        await i.update({ embeds: [valkster], components: [vster3] });
      }
      else if(i.customId == "vster4" || i.customId == "valkster4") {
        await i.update({ embeds: [valkster], components: [vster4] });
      }
      else if(i.customId == "wsports" || i.customId == "watersports") {
        await i.update({ embeds: [watersports], components: [wsports] });
      }
      else if(i.customId == "wsports2" || i.customId == "watersports2") {
        await i.update({ embeds: [watersports], components: [wsports2] });
      }
      else if(i.customId == "wsports3" || i.customId == "watersports3") {
        await i.update({ embeds: [watersports], components: [wsports3] });
      }
      else if(i.customId == "wsports4" || i.customId == "watersports4") {
        await i.update({ embeds: [watersports], components: [wsports4] });
      }
      else if(i.customId == "wph" || i.customId == "whalepharaoh") {
        await i.update({ embeds: [whalepharaoh], components: [wph] });
      }
      else if(i.customId == "wph2" || i.customId == "whalepharaoh2") {
        await i.update({ embeds: [whalepharaoh], components: [wph2] });
      }
      else if(i.customId == "wph3" || i.customId == "whalepharaoh3") {
        await i.update({ embeds: [whalepharaoh], components: [wph3] });
      }
      else if(i.customId == "wph4" || i.customId == "whalepharaoh4") {
        await i.update({ embeds: [whalepharaoh], components: [wph4] });
      }
      else if(i.customId == "ycmartin" || i.customId == "youngcatmartin") {
        await i.update({ embeds: [youngcatmartin], components: [ycmartin] });
      }
      else if(i.customId == "ycmartin2" || i.customId == "youngcatmartin2") {
        await i.update({ embeds: [youngcatmartin], components: [ycmartin2] });
      }
      else if(i.customId == "ycmartin3" || i.customId == "youngcatmartin3") {
        await i.update({ embeds: [youngcatmartin], components: [ycmartin3] });
      }
      else if(i.customId == "ycmartin4" || i.customId == "youngcatmartin4") {
        await i.update({ embeds: [youngcatmartin], components: [ycmartin4] });
      }
      else if(i.customId == "yemartin" || i.customId == "youngeggmartin") {
        await i.update({ embeds: [youngeggmartin], components: [yemartin] });
      }
      else if(i.customId == "yemartin2" || i.customId == "youngeggmartin2") {
        await i.update({ embeds: [youngeggmartin], components: [yemartin2] });
      }
      else if(i.customId == "yemartin3" || i.customId == "youngeggmartin3") {
        await i.update({ embeds: [youngeggmartin], components: [yemartin3] });
      }
      else if(i.customId == "ykmartin" || i.customId == "youngkenmartin") {
        await i.update({ embeds: [youngkenmartin], components: [ykmartin] });
      }
      else if(i.customId == "ykmartin2" || i.customId == "youngkenmartin2") {
        await i.update({ embeds: [youngkenmartin], components: [ykmartin2] });
      }
      else if(i.customId == "ykmartin3" || i.customId == "youngkenmartin3") {
        await i.update({ embeds: [youngkenmartin], components: [ykmartin3] });
      }
      else if(i.customId == "ykmartin4" || i.customId == "youngkenmartin4") {
        await i.update({ embeds: [youngkenmartin], components: [ykmartin4] });
      }
      else if(i.customId == "zm" || i.customId == "zmoss") {
        await i.update({ embeds: [zmoss], components: [zm] });
      }
      else if(i.customId == "zm2" || i.customId == "zmoss2") {
        await i.update({ embeds: [zmoss], components: [zm2] });
      }
      else if(i.customId == "zm3" || i.customId == "zmoss3") {
        await i.update({ embeds: [zmoss], components: [zm3] });
      }
      else if(i.customId == "lt" || i.customId == "ladytuna") {
        await i.update({ embeds: [ladytuna], components: [lt] });
      }
      else if(i.customId == "lt2" || i.customId == "ladytuna2") {
        await i.update({ embeds: [ladytuna], components: [lt2] });
      }
      else if(i.customId == "lt3" || i.customId == "ladytuna3") {
        await i.update({ embeds: [ladytuna], components: [lt3] });
      }
      else if(i.customId == "lsnap" || i.customId == "lasersnap") {
        await i.update({ embeds: [lasersnap], components: [lsnap] });
      }
      else if(i.customId == "lsnap2" || i.customId == "lasersnap2") {
        await i.update({ embeds: [lasersnap], components: [lsnap2] });
      }
      else if(i.customId == "lsnap3" || i.customId == "lasersnap3") {
        await i.update({ embeds: [lasersnap], components: [lsnap3] });
      }
      else if(i.customId == "lsnap4" || i.customId == "lasersnap4") {
        await i.update({ embeds: [lasersnap], components: [lsnap4] });
      }
      else if(i.customId == "hotk" || i.customId == "healthotk") {
        await i.update({ embeds: [healthotk], components: [hotk] });
      }
      else if(i.customId == "hotk2" || i.customId == "healthotk2") {
        await i.update({ embeds: [healthotk], components: [hotk2] });
      }
      else if(i.customId == "hotk3" || i.customId == "healthotk3") {
        await i.update({ embeds: [healthotk], components: [hotk3] });
      }
      else if(i.customId == "hotk4" || i.customId == "healthotk4") {
        await i.update({ embeds: [healthotk], components: [hotk4] });
      }
      else if(i.customId == "pts" || i.customId == "pawntrickstab") {
        await i.update({ embeds: [pawntrickstab], components: [pts] });
      }
      else if(i.customId == "pts2" || i.customId == "pawntrickstab2") {
        await i.update({ embeds: [pawntrickstab], components: [pts2] });
      }
      else if(i.customId == "pts3" || i.customId == "pawntrickstab3") {
        await i.update({ embeds: [pawntrickstab], components: [pts3] });
      }
      else if(i.customId == "nut" || i.customId == "nuttin") {
        await i.update({ embeds: [nuttin], components: [nut] });
      }
      else if(i.customId == "nut2" || i.customId == "nuttin2") {
        await i.update({ embeds: [nuttin], components: [nut2] });
      }
      else if(i.customId == "nut3" || i.customId == "nuttin3") {
        await i.update({ embeds: [nuttin], components: [nut3] });
      }
      else if(i.customId == "rfl" || i.customId == "reflourished") {
        await i.update({ embeds: [reflourished], components: [rfl] });
      }
      else if(i.customId == "rfl2" || i.customId == "reflourished2") {
        await i.update({ embeds: [reflourished], components: [rfl2] });
      }
      else if(i.customId == "rfl3" || i.customId == "reflourished3") {
        await i.update({ embeds: [reflourished], components: [rfl3] });
      }
      else if(i.customId == "sav" || i.customId == "savage") {
        await i.update({ embeds: [savage22], components: [sav] });
      }
      else if(i.customId == "sav2" || i.customId == "savage2") {
        await i.update({ embeds: [savage22], components: [sav2] });
      }
      else if(i.customId == "sav3" || i.customId == "savage3") {
        await i.update({ embeds: [savage22], components: [sav3] });
      }
      else if(i.customId == "sav4" || i.customId == "savage4") {
        await i.update({ embeds: [savage22], components: [sav4] });
      }
	  else if(i.customId == "carr" || i.customId == "carroot") {
		await i.update({ embeds: [carroot], components: [carr] });
	  }
	  else if(i.customId == "carr2" || i.customId == "carroot2") {
		await i.update({ embeds: [carroot], components: [carr2] });
	  }
	  else if(i.customId == "carr3" || i.customId == "carroot3") {
		await i.update({ embeds: [carroot], components: [carr3] });
	  }
	  else if(i.customId == "carr4" || i.customId == "carroot4") {
		await i.update({ embeds: [carroot], components: [carr4] });
	  }
    else if(i.customId == "hgargs" || i.customId == "huntgargs"){
      await i.update({ embeds: [huntgargs], components: [hgargs] });
    }
    else if(i.customId == "hgargs2" || i.customId == "huntgargs2"){
      await i.update({ embeds: [huntgargs], components: [hgargs2] });
    }
    else if(i.customId == "hgargs3" || i.customId == "huntgargs3"){
      await i.update({ embeds: [huntgargs], components: [hgargs3] });
    }
    else if(i.customId == "pb" || i.customId == "pbeans"){
      await i.update({ embeds: [pbeans], components: [pb] });
    }
    else if(i.customId == "pb2" || i.customId == "pbeans2"){
      await i.update({ embeds: [pbeans], components: [pb2] });
    }
    if(i.customId == "pb3" || i.customId == "pbeans3"){
      await i.update({ embeds: [pbeans], components: [pb3] });
    }
    else if(i.customId == "pop" || i.customId == "popsicle"){
      await i.update({ embeds: [popsicle], components: [pop] });
    }
    else if(i.customId == "pop2" || i.customId == "popsicle2"){
      await i.update({ embeds: [popsicle], components: [pop2] });
    }
    else if(i.customId == "pop3" || i.customId == "popsicle3"){
      await i.update({ embeds: [popsicle], components: [pop3] });
    }
    else if(i.customId == "dgloves" || i.customId == "dinogloves"){
      await i.update({embeds: [dinogloves], components: [dgloves]})
    }
    else if(i.customId == "dgloves2" || i.customId == "dinogloves2"){
      await i.update({embeds: [dinogloves], components: [dgloves2]})
    }
    else if(i.customId == "dgloves3" || i.customId == "dinogloves3"){
      await i.update({embeds: [dinogloves], components: [dgloves3]})
    }
    else if(i.customId == "nhks" || i.customId == "nohokaistars"){
      await i.update({embeds: [nohokaistars], components: [nhks]})
    }
    else if(i.customId == "nhks2" || i.customId == "nohokaistars2"){
      await i.update({embeds: [nohokaistars], components: [nhks2]})
    }
    else if(i.customId == "nhks3" || i.customId == "nohokaistars3"){
      await i.update({embeds: [nohokaistars], components: [nhks3]})
    }
    });
  },
};
