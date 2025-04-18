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
function CreateHelpEmbed(title, description, thumbnail, footer) {
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
  name: `hugegigantacus`,
  aliases: [`hg`, `huge`, `gigantacus`, `huge-gigantacus`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const helphg = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("teleport")
        .setLabel("Teleport")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:teleport:1087160283534991472>"),
      new ButtonBuilder()
        .setCustomId("huge")
        .setLabel("Huge Gigantacus Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:hg:1087736553557725217>")
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder(
        "Select an option below to view Huge Gigantacus decklists"
      )
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
          .setLabel("Aggro Deck")
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
          .setLabel("Control Decks")
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
          .setLabel("All Huge Gigantacus Decks")
          .setValue("all")
          .setDescription("View all Huge Gigantacus decks")
          .setEmoji("<:hg:1087736553557725217>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const hugeGigantacusDecks = {
      budgetDecks: ["budgethg"],
      competitiveDecks: ["telimps"],
      ladderDecks: ["cryoboy", "gravepiratestache", "gravestache"],
      memeDecks: ["conjureleap", "frozentelimps", "otkswabbie", "ykm"],
      aggroDecks: ["gravepiratestache"],
      comboDecks: [
        "budgetykm",
        "cryoboy",
        "frozentelimps",
        "gravepiratestache",
        "gravestache",
        "otkswabbie",
        "telimps",
        "ykm",
      ],
      controlDecks: ["frozentelimps", "telimps"],
      midrangeDecks: ["cryoboy", "ykm"],
      tempoDecks: ["conjureleap"],
      allDecks: [
        "budgetykm",
        "conjureleap",
        "cryoboy",
        "frozentelimps",
        "gravepiratestache",
        "gravestache",
        "otkswabbie",
        "telimps",
        "ykm",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(hugeGigantacusDecks.allDecks);
    const toBuildLadderString = buildDeckString(
      hugeGigantacusDecks.ladderDecks
    );
    const toBuildMemeString = buildDeckString(hugeGigantacusDecks.memeDecks);
    const toBuildComboString = buildDeckString(hugeGigantacusDecks.comboDecks);
    const toBuildControlString = buildDeckString(
      hugeGigantacusDecks.controlDecks
    );
    const toBuildMidrangeString = buildDeckString(
      hugeGigantacusDecks.midrangeDecks
    );
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
    const alldecksrow = new CreateButtons("youngkenmartin", "bgus");
    const bgus = new CreateButtons("helpall", "cl");
    const cl = new CreateButtons("budgetgus", "cboy");
    const cboy = new CreateButtons("conjureleap", "ft");
    const ft = new CreateButtons("cryoboy", "gps");
    const gps = new CreateButtons("frozentelimps", "gs");
    const gs = new CreateButtons("gravepiratestache", "otks");
    const otks = new CreateButtons("gravestache", "ti");
    const ti = new CreateButtons("otkswabbie", "ykm");
    const ykm = new CreateButtons("telimps", "allhelp");
    const ladderrow = new CreateButtons("gravestache2", "cboy2");
    const cboy2 = new CreateButtons("helpladder", "gps2");
    const gps2 = new CreateButtons("cryoboy2", "gs2");
    const gs2 = new CreateButtons("gravepiratestache2", "ladderhelp");
    const memerow = new CreateButtons("youngkenmartin2", "cl2");
    const cl2 = new CreateButtons("helpmeme", "ft2");
    const ft2 = new CreateButtons("conjureleap2", "otks2");
    const otks2 = new CreateButtons("frozentelimps2", "ykm2");
    const ykm2 = new CreateButtons("otkswabbie2", "memehelp");
    const comborow = new CreateButtons("youngkenmartin3", "bgus2");
    const bgus2 = new CreateButtons("helpcombo", "cboy3");
    const cboy3 = new CreateButtons("budgetgus2", "ft3");
    const ft3 = new CreateButtons("cryoboy3", "gps3");
    const gps3 = new CreateButtons("frozentelimps3", "gs3");
    const gs3 = new CreateButtons("gravepiratestache3", "otks3");
    const otks3 = new CreateButtons("gravestache3", "ti2");
    const ti2 = new CreateButtons("otkswabbie3", "ykm3");
    const ykm3 = new CreateButtons("telimps2", "combohelp");
    const controlrow = new CreateButtons("telimps3", "ft4");
    const ft4 = new CreateButtons("helpcontrol", "ti3");
    const ti3 = new CreateButtons("frozentelimps4", "controlhelp");
    const midrangerow = new CreateButtons("youngkenmartin3", "cboy4");
    const cboy4 = new CreateButtons("helpmidrange", "ykm4");
    const ykm4 = new CreateButtons("cryoboy4", "midrangehelp");
    const embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
      )
      .setTitle(
        "Huge-Gigantacus | <:Brainy:1062500939908530246><:Sneaky:1062502187781075094>"
      )
      .setDescription("**\\- Science Imp Hero  -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Iron Boarder <:Brainy:1062500939908530246> \n 2<:Bullseye:1062501003313819678>/3<:Health:1062515540712751184>, <:Bullseye:1062501003313819678>Bullseye, **While in an Environment:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \n Teleportation Station <:Brainy:1062500939908530246> \n **Start of Turn:** If there's a Zombie here, gain a Teleport. \n Ice Moon <:Sneaky:1062502187781075094> \n Zombies here get <:Strikethrough:1062502987425140806>__Strikethrough__. \n **When played:** <:freeze:1323059404874055774>__Freeze__ all Plants here. \n Terror-Former 10,000 <:Brainy:1062500939908530246><:Sneaky:1062502187781075094> \n __Conjure__ an Environment and a trick. All Environment and Trick cards in your hand costs 1<:Brainz:1062503146745774183> less. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "Go on, tell him he's actually quite small. \n See what happens. \n You're not going to like it.",
        }
      )
      .setColor("#000000");

    const teleport = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/4/4c/Teleport_HD.png/revision/latest?cb=20181016041010"
      )
      .setTitle("Teleport | <:Brainy:1062500939908530246>")
      .setDescription("**\\- Science Trick  -**")
      .addFields(
        { name: "Stats", value: "1 <:Brainz:1062503146745774183>" },
        {
          name: "Ability",
          value:
            "You may play a Zombie when it's time for Tricks this turn. \n Draw a card.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Legendary**",
        },
        {
          name: "Flavor Text",
          value: `Feels like cheating.`,
        }
      )
      .setColor("Random");
    const allEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Decks",
      `My commands for Huge-Gigantacus(HG) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: there are ${hugeGigantacusDecks.allDecks.length} total decks for Huge Gigantacus in Tbot`
    );
    const helphgEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Decks",
      `To view the Huge Gigantacus decks please select an option from the select menu below!
  Note: there are ${hugeGigantacusDecks.allDecks.length} total decks for Huge Gigantacus in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349"
    );
    const ladderEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Ladder Decks",
      `My ladder decks for Huge-Gigantacus(HG) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the ladder Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
  Note: there are ${hugeGigantacusDecks.ladderDecks.length} ladder decks for Huge Gigantacus in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Meme Decks",
      `My meme decks for Huge-Gigantacus(HG) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the meme Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
  Note: there are ${hugeGigantacusDecks.memeDecks.length} meme decks for Huge Gigantacus in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Combo Decks",
      `My combo decks for Huge-Gigantacus(HG) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the combo Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
  Note: there are ${hugeGigantacusDecks.comboDecks.length} combo decks for Huge Gigantacus in Tbot`
    );
    const controlEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Control Decks",
      `My control decks for Huge-Gigantacus(HG) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the control Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all control decks!
  Note: there are ${hugeGigantacusDecks.controlDecks.length} control decks for Huge Gigantacus in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Huge Gigantacus Midrange Decks",
      `My midrange decks for Huge-Gigantacus(HG) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349",
      `To view the midrange Huge Gigantacus decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
  Note: there are ${hugeGigantacusDecks.midrangeDecks.length} midrange decks for Huge Gigantacus in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM hgdecks`);
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
        .setColor("#FFC0CB");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetykm = new CreateDeckEmbed(result, "budgetykm");
    const conjureleap = new CreateDeckEmbed(result, "conjureleap");
    const cryoboy = new CreateDeckEmbed(result, "cyroboy");
    const frozentelimps = new CreateDeckEmbed(result, "frozentelimps");
    const gravepiratestache = new CreateDeckEmbed(result, "gps");
    const gravestache = new CreateDeckEmbed(result, "gravestache");
    const otkswabbie = new CreateDeckEmbed(result, "otkswabbie");
    const telimps = new CreateDeckEmbed(result, "telimps");
    const youngkenmartin = new CreateDeckEmbed(result, "ykm");
    const m = await message.channel.send({
      embeds: [embed],
      components: [helphg],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
        await i.reply({ embeds: [budgetykm], flags: MessageFlags.Ephemeral });
      } else if (value == "comp") {
        await i.reply({ embeds: [telimps], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.reply({
          embeds: [gravepiratestache],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.reply({ embeds: [conjureleap], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }
    async function HandleButtonInteraction(i) {
      const buttonActions = {
        huge: { embed: helphgEmbed, component: row },
        helpall: { embed: allEmbed, component: alldecksrow },
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpladder: { embed: ladderEmbed, component: ladderrow },
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpmeme: { embed: memeEmbed, component: memerow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpcombo: { embed: comboEmbed, component: comborow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcontrol: { embed: controlEmbed, component: controlrow },
        controlhelp: { embed: controlEmbed, component: controlrow },
        helpmidrange: { embed: midrangeEmbed, component: midrangerow },
        midrangehelp: { embed: midrangeEmbed, component: midrangerow },
        bgus: { embed: budgetykm, component: bgus },
        budgetgus: { embed: budgetykm, component: bgus },
        bgus2: { embed: budgetykm, component: bgus2 },
        budgetgus2: { embed: budgetykm, component: bgus2 },
        cboy: { embed: cryoboy, component: cboy },
        cyroboy: { embed: cryoboy, component: cboy },
        cboy2: { embed: cryoboy, component: cboy2 },
        cyroboy2: { embed: cryoboy, component: cboy2 },
        cboy3: { embed: cryoboy, component: cboy3 },
        cyroboy3: { embed: cryoboy, component: cboy3 },
        cboy4: { embed: cryoboy, component: cboy4 },
        cyroboy4: { embed: cryoboy, component: cboy4 },
        cl: { embed: conjureleap, component: cl },
        conjureleap: { embed: conjureleap, component: cl },
        cl2: { embed: conjureleap, component: cl2 },
        conjureleap2: { embed: conjureleap, component: cl2 },
        ft: { embed: frozentelimps, component: ft },
        frozentelimps: { embed: frozentelimps, component: ft },
        ft2: { embed: frozentelimps, component: ft2 },
        frozentelimps2: { embed: frozentelimps, component: ft2 },
        ft3: { embed: frozentelimps, component: ft3 },
        frozentelimps3: { embed: frozentelimps, component: ft3 },
        ft4: { embed: frozentelimps, component: ft4 },
        frozentelimps4: { embed: frozentelimps, component: ft4 },
        gs: { embed: gravestache, component: gs },
        gravestache: { embed: gravestache, component: gs },
        gs2: { embed: gravestache, component: gs2 },
        gravestache2: { embed: gravestache, component: gs2 },
        gs3: { embed: gravestache, component: gs3 },
        gravestache3: { embed: gravestache, component: gs3 },
        gps: { embed: gravepiratestache, component: gps },
        gravepiratestache: { embed: gravepiratestache, component: gps },
        gps2: { embed: gravepiratestache, component: gps2 },
        gravepiratestache2: { embed: gravepiratestache, component: gps2 },
        gps3: { embed: gravepiratestache, component: gps3 },
        gravepiratestache3: { embed: gravepiratestache, component: gps3 },
        otks: { embed: otkswabbie, component: otks },
        otkswabbie: { embed: otkswabbie, component: otks },
        otks2: { embed: otkswabbie, component: otks2 },
        otkswabbie2: { embed: otkswabbie, component: otks2 },
        otks3: { embed: otkswabbie, component: otks3 },
        otkswabbie3: { embed: otkswabbie, component: otks3 },
        ti: { embed: telimps, component: ti },
        telimps: { embed: telimps, component: ti },
        ti2: { embed: telimps, component: ti2 },
        telimps2: { embed: telimps, component: ti2 },
        ti3: { embed: telimps, component: ti3 },
        telimps3: { embed: telimps, component: ti3 },
        ykm: { embed: youngkenmartin, component: ykm },
        youngkenmartin: { embed: youngkenmartin, component: ykm },
        ykm2: { embed: youngkenmartin, component: ykm2 },
        youngkenmartin2: { embed: youngkenmartin, component: ykm2 },
        ykm3: { embed: youngkenmartin, component: ykm3 },
        youngkenmartin3: { embed: youngkenmartin, component: ykm3 },
        ykm4: { embed: youngkenmartin, component: ykm4 },
        youngkenmartin4: { embed: youngkenmartin, component: ykm4 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unknown button interactiom",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "teleport") {
        await i.reply({ embeds: [teleport], flags: MessageFlags.Ephemeral });
      } else if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
