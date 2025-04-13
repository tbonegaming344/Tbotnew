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
    .setColor("#FFC0CB");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `rustbolt`,
  aliases: [`rb`, `rust`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helprb")
        .setLabel("Rustbolt Decks")
        .setStyle(ButtonStyle.Danger)
        .setEmoji("<:RustboltH:1088094706346491904>")
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Rustbolt decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("A deck that is cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Decks")
          .setValue("comp")
          .setDescription("Some of the best Decks in the game")
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
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
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
          .setLabel("Tempo Decks")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Rustbolt Decks")
          .setValue("all")
          .setDescription("View all Rustbolt decklists")
          .setEmoji("<:RustboltH:1088094706346491904>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const rustboltDecks = {
      budgetDecks: ["budgetrb"],
      competitiveDecks: ["bustbolt", "uncrackabolt"],
      ladderDecks: ["boltbolt", "marxbolt", "mechacontrol"],
      memeDecks: [
        "coggerazzi",
        "igmablobchum",
        "sunbandits",
        "terrifytricksterazzi",
      ],
      aggroDecks: ["marxbolt"],
      comboDecks: [
        "boltbolt",
        "bustbolt",
        "coggerazzi",
        "igmablobchum",
        "sunbandits",
        "terrifytricksterazzi",
      ],
      controlDecks: ["bustbolt", "mechacontrol", "sunbandits", "uncrackabolt"],
      midrangeDecks: ["boltbolt", "budgetrb", "igmablobchum"],
      tempoDecks: ["coggerazzi", "terrifytricksterazzi"],
      allDecks: [
        "boltbolt",
        "budgetrb",
        "bustbolt",
        "coggerazzi",
        "igmablobchum",
        "marxbolt",
        "mechacontrol",
        "sunbandits",
        "terrifytricksterazzi",
        "uncrackabolt",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(rustboltDecks.allDecks);
    const toBuildCompString = buildDeckString(rustboltDecks.competitiveDecks);
    const toBuildLadderString = buildDeckString(rustboltDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(rustboltDecks.memeDecks);
    const toBuildComboString = buildDeckString(rustboltDecks.comboDecks);
    const toBuildControlString = buildDeckString(rustboltDecks.controlDecks);
    const toBuildMidrangeString = buildDeckString(rustboltDecks.midrangeDecks);
    const toBuildTempoString = buildDeckString(rustboltDecks.tempoDecks);
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
    const alldecksrow = new CreateButtons("uncrackabolt", "bol");
    const bol = new CreateButtons("helpall", "brb");
    const brb = new CreateButtons("boltbolt", "bust");
    const bust = new CreateButtons("budgetrb", "cog");
    const cog = new CreateButtons("bustbolt", "igb");
    const igb = new CreateButtons("coggerazzi", "marx");
    const marx = new CreateButtons("igmablobchum", "mc");
    const mc = new CreateButtons("marxbolt", "sb");
    const sb = new CreateButtons("mechacontrol", "tster");
    const tster = new CreateButtons("sunbandits", "uncrack");
    const uncrack = new CreateButtons("terrifytricksterazzi", "allhelp");
    const comprow = new CreateButtons("uncrackabolt2", "bust2");
    const bust2 = new CreateButtons("comphelp", "uncrack2");
    const uncrack2 = new CreateButtons("bustbolt2", "helpcomp");
    const ladderrow = new CreateButtons("mechacontrol2", "bol2");
    const bol2 = new CreateButtons("ladderhelp", "marx2");
    const marx2 = new CreateButtons("boltbolt2", "mc2");
    const mc2 = new CreateButtons("marxbolt2", "helpladder");
    const memerow = new CreateButtons("terrifytricksterazzi2", "cog2");
    const cog2 = new CreateButtons("memehelp", "igb2");
    const igb2 = new CreateButtons("coggerazzi2", "sb2");
    const sb2 = new CreateButtons("igmablobchum2", "tster2");
    const tster2 = new CreateButtons("sunbandits2", "helpmeme");
    const comborow = new CreateButtons("terrifytricksterazzi3", "bol3");
    const bol3 = new CreateButtons("combohelp", "bust3");
    const bust3 = new CreateButtons("boltbolt3", "cog3");
    const cog3 = new CreateButtons("bustbolt3", "igb3");
    const igb3 = new CreateButtons("coggerazzi3", "sb3");
    const sb3 = new CreateButtons("igmablobchum3", "tster3");
    const tster3 = new CreateButtons("sunbandits3", "helpcombo");
    const controlrow = new CreateButtons("uncrackabolt3", "bust4");
    const bust4 = new CreateButtons("controlhelp", "mc3");
    const mc3 = new CreateButtons("bustbolt4", "sb4");
    const sb4 = new CreateButtons("mechacontrol3", "uncrack3");
    const uncrack3 = new CreateButtons("sunbandits4", "helpcontrol");
    const midrangerow = new CreateButtons("igmablobchum4", "bol4");
    const bol4 = new CreateButtons("midrangehelp", "brb2");
    const brb2 = new CreateButtons("boltbolt4", "igb4");
    const igb4 = new CreateButtons("budgetrb2", "helpmidrange");
    const temporow = new CreateButtons("terrifytricksterazzi4", "cog4");
    const cog4 = new CreateButtons("tempohelp", "tster4");
    const tster4 = new CreateButtons("coggerazzi4", "helptempo");
    const embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
      )
      .setTitle(
        "Rustbolt | <:Brainy:1062500939908530246><:Hearty:1062501636557242429>"
      )
      .setDescription("**\\- Science Hero  -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Heroic Health <:Hearty:1062501636557242429> \n Heal your Hero for 6. \n Cut Down To Size <:Brainy:1062500939908530246> \n Destroy a Plant that has 5<:Strength:1062501774612779039> or more. \n Rock Wall <:Hearty:1062501636557242429> \n A Zombie gets +5<:Health:1062515540712751184>. \n Shrink Ray <:Brainy:1062500939908530246><:Hearty:1062501636557242429> \n A Plant gets -3<:Strength:1062501774612779039>. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "He enjoys keeping his bolts tight and his screws loose.",
        }
      )
      .setColor("#FFC0CB");
    const alldecksEmbed = new CreateHelpEmbed(
      "Rustbolt Decks",
      `My commands for Rustbolt(RB) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: Rustbolt has ${rustboltDecks.allDecks.length} total decks in Tbot`
    );
    const helprb = new CreateHelpEmbed(
      "Rustbolt Decks",
      `To view the RustBolt decks please select an option from the select menu below!
  Note: Rustbolt has ${rustboltDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
    );
    const compEmbed = new CreateHelpEmbed(
      "Rustbolt Competitive Decks",
      `My commands for Rustbolt(RB) are ${toBuildCompString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt competitive decks please use the commands listed above or click on the buttons below to navigate through all competitive decks!
  Note: Rustbolt has ${rustboltDecks.competitiveDecks.length} total competitive decks in Tbot`
    );
    const ladderEmbed = new CreateHelpEmbed(
      "Rustbolt Ladder Decks",
      `My commands for Rustbolt(RB) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
  Note: Rustbolt has ${rustboltDecks.ladderDecks.length} total ladder decks in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Rustbolt Meme Decks",
      `My commands for Rustbolt(RB) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
  Note: Rustbolt has ${rustboltDecks.memeDecks.length} total meme decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      "Rustbolt Aggro Decks",
      `My commands for Rustbolt(RB) are ${toBuildAggroString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt aggro decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
  Note: Rustbolt has ${rustboltDecks.aggroDecks.length} total aggro decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Rustbolt Combo Decks",
      `My commands for Rustbolt(RB) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
  Note: Rustbolt has ${rustboltDecks.comboDecks.length} total combo decks in Tbot`
    );
    const controlEmbed = new CreateHelpEmbed(
      "Rustbolt Control Decks",
      `My commands for Rustbolt(RB) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
  Note: Rustbolt has ${rustboltDecks.controlDecks.length} total control decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Rustbolt Midrange Decks",
      `My commands for Rustbolt(RB) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
  Note: Rustbolt has ${rustboltDecks.midrangeDecks.length} total midrange decks in Tbot`
    );
    const tempoEmbed = new CreateHelpEmbed(
      "Rustbolt Tempo Decks",
      `My commands for Rustbolt(RB) are ${toBuildTempoString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt tempo decks please use the commands listed above or click on the buttons below to navigate through all tempo decks!
  Note: Rustbolt has ${rustboltDecks.tempoDecks.length} total tempo decks in Tbot`
    );
    const [result] = await db.query(`select * from rbdecks`);
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
        .setColor("Orange");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const boltbolt = new CreateDeckEmbed(result, "boltbolt");
    const budgetrb = new CreateDeckEmbed(result, "budgetrb");
    const bustbolt = new CreateDeckEmbed(result, "bustbolt");
    const igmablobchum = new CreateDeckEmbed(result, "igmablobchum");
    const marxbolt = new CreateDeckEmbed(result, "marxbolt");
    const mechacontrol = new CreateDeckEmbed(result, "mechacontrol");
    const coggerazzi = new CreateDeckEmbed(result, "poggerrazzi");
    const sunbandits = new CreateDeckEmbed(result, "sunbandits");
    const terrifytricksterazzi = new CreateDeckEmbed(
      result,
      "terrifytricksterazzi"
    );
    const uncrackabolt = new CreateDeckEmbed(result, "uncrackabolt");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "comp") {
        await i.update({ embeds: [compEmbed], components: [comprow] });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.reply({ embeds: [marxbolt], flags: MessageFlags.Ephemeral });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      } else if (value == "budget") {
        await i.reply({ embeds: [budgetrb], flags: MessageFlags.Ephemeral });
      }
    }
    async function HandleButtonInteraction(i) {
      const buttonActions = {
        helprb: { embed: helprb, component: row },
        helpall: { embed: alldecksEmbed, component: alldecksrow },
        allhelp: { embed: alldecksEmbed, component: alldecksrow },
        helpcomp: { embed: compEmbed, component: comprow },
        comphelp: { embed: compEmbed, component: comprow },
        helpladder: { embed: ladderEmbed, component: ladderrow },
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpmeme: { embed: memeEmbed, component: memerow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpaggro: { embed: aggroEmbed, component: aggrorow },
        aggrohelp: { embed: aggroEmbed, component: aggrorow },
        helpcombo: { embed: comboEmbed, component: comborow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcontrol: { embed: controlEmbed, component: controlrow },
        controlhelp: { embed: controlEmbed, component: controlrow },
        helpmidrange: { embed: midrangeEmbed, component: midrangerow },
        midrangehelp: { embed: midrangeEmbed, component: midrangerow },
        helptempo: { embed: tempoEmbed, component: temporow },
        tempohelp: { embed: tempoEmbed, component: temporow },
        bol: { embed: boltbolt, component: bol },
        boltbolt: { embed: boltbolt, component: bol },
        bol2: { embed: boltbolt, component: bol2 },
        boltbolt2: { embed: boltbolt, component: bol2 },
        bol3: { embed: boltbolt, component: bol3 },
        boltbolt3: { embed: boltbolt, component: bol3 },
        bol4: { embed: boltbolt, component: bol4 },
        boltbolt4: { embed: boltbolt, component: bol4 },
        brb: { embed: budgetrb, component: brb },
        budgetrb: { embed: budgetrb, component: brb },
        brb2: { embed: budgetrb, component: brb2 },
        budgetrb2: { embed: budgetrb, component: brb2 },
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
        igb: { embed: igmablobchum, component: igb },
        igmablobchum: { embed: igmablobchum, component: igb },
        igb2: { embed: igmablobchum, component: igb2 },
        igmablobchum2: { embed: igmablobchum, component: igb2 },
        igb3: { embed: igmablobchum, component: igb3 },
        igmablobchum3: { embed: igmablobchum, component: igb3 },
        igb4: { embed: igmablobchum, component: igb4 },
        igmablobchum4: { embed: igmablobchum, component: igb4 },
        marx: { embed: marxbolt, component: marx },
        marxbolt: { embed: marxbolt, component: marx },
        marx2: { embed: marxbolt, component: marx2 },
        marxbolt2: { embed: marxbolt, component: marx2 },
        mc: { embed: mechacontrol, component: mc },
        mechacontrol: { embed: mechacontrol, component: mc },
        mc2: { embed: mechacontrol, component: mc2 },
        mechacontrol2: { embed: mechacontrol, component: mc2 },
        mc3: { embed: mechacontrol, component: mc3 },
        mechacontrol3: { embed: mechacontrol, component: mc3 },
        sb: { embed: sunbandits, component: sb },
        sunbandits: { embed: sunbandits, component: sb },
        sb2: { embed: sunbandits, component: sb2 },
        sunbandits2: { embed: sunbandits, component: sb2 },
        sb3: { embed: sunbandits, component: sb3 },
        sunbandits3: { embed: sunbandits, component: sb3 },
        sb4: { embed: sunbandits, component: sb4 },
        sunbandits4: { embed: sunbandits, component: sb4 },
        tster: { embed: terrifytricksterazzi, component: tster },
        terrifytricksterazzi: { embed: terrifytricksterazzi, component: tster },
        tster2: { embed: terrifytricksterazzi, component: tster2 },
        terrifytricksterazzi2: {
          embed: terrifytricksterazzi,
          component: tster2,
        },
        tster3: { embed: terrifytricksterazzi, component: tster3 },
        terrifytricksterazzi3: {
          embed: terrifytricksterazzi,
          component: tster3,
        },
        tster4: { embed: terrifytricksterazzi, component: tster4 },
        terrifytricksterazzi4: {
          embed: terrifytricksterazzi,
          component: tster4,
        },
        uncrack: { embed: uncrackabolt, component: uncrack },
        uncrackabolt: { embed: uncrackabolt, component: uncrack },
        uncrack2: { embed: uncrackabolt, component: uncrack2 },
        uncrackabolt2: { embed: uncrackabolt, component: uncrack2 },
        uncrack3: { embed: uncrackabolt, component: uncrack3 },
        uncrackabolt3: { embed: uncrackabolt, component: uncrack3 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
