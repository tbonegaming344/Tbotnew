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
 * The createHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function createHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#6679d9");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `shortbow`,
  aliases: [
    `decksmadebyshortbow`,
    `shortbowdecks`,
    `shortbowhelp`,
    `helpshortbow`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Please select an option below to view ShortBow's Decks")
      .addOptions(
         new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Decks")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comp"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setDescription("Decks that are generally only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
          new StringSelectMenuOptionBuilder()
          .setLabel("Meme Deck")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Decks")
          .setDescription(
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggro"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Decks")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("control"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          )
          .setValue("midrange"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Shortbow Decks")
          .setDescription("An option to view all decks")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const shortbowDecks = {
      compdecks: ["limerence", "neurotherapy", "venice"],
      ladderDecks: ["bayonet", "ginseng", "gomorrah", "gravepiratestache", "pawntrickstab", "trickmech"],
      memeDecks: ["tangen"],
      aggroDecks: ["gravepiratestache", "trickmech"],
      comboDecks: ["bayonet", "gravepiratestache", "tangen", "trickmech", "venice"],
      controlDecks: ["ginseng", "neurotherapy", "pawntrickstab"],
      midrangeDecks: ["gomorrah", "limerence", "tangen", "venice"],
      tempoDecks: ["bayonet"],
      allDecks: [
        "bayonet",
        "ginseng",
        "gomorrah",
        "gravepiratestache",
        "limerence",
        "neurotherapy",
        "pawntrickstab",
        "tangen", 
        "trickmech", 
        "venice"
      ]
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
    const toBuildLadderString = buildDeckString(shortbowDecks.ladderDecks);
    const toBuildAggroString = buildDeckString(shortbowDecks.aggroDecks);
    const toBuildComboString = buildDeckString(shortbowDecks.comboDecks);
    const toBuildControlString = buildDeckString(shortbowDecks.controlDecks);
    const toBuildString = buildDeckString(shortbowDecks.allDecks);
    const toBuildMidrangeString = buildDeckString(shortbowDecks.midrangeDecks);
    const toBuildTempoString = buildDeckString(shortbowDecks.tempoDecks);
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
    const alldecksrow = createButtons("venice", "bay");
    const bay = createButtons("helpall", "gseg");
    const gseg = createButtons("bayonet", "go");
    const go = createButtons("ginseng", "gps");
    const gps = createButtons("gomorrah", "lime");
    const lime = createButtons("gravepiratestache", "neuro");
    const neuro = createButtons("limerence", "pts");
    const pts = createButtons("neurotherapy", "tan");
    const tan = createButtons("pawntrickstab", "tmech");
    const tmech = createButtons("tangen", "vce");
    const vce = createButtons("trickmech", "allhelp");
    const comprow = createButtons("venice2", "lime2");
    const lime2 = createButtons("helpcomp", "neuro2");
    const neuro2 = createButtons("limerence2", "vce2");
    const vce2 = createButtons("neurotherapy2", "comphelp");
    const ladderrow = createButtons("trickemech2", "bay2");
    const bay2 = createButtons("helpladder", "gseg2");
    const gseg2 = createButtons("bayonet2", "go2");
    const go2 = createButtons("ginseng2", "gps2");
    const gps2 = createButtons("gomorrah2", "pts2");
    const pts2 = createButtons("gravepiratestache2", "tmech2");
    const tmech2 = createButtons("pawntrickstab2", "ladderhelp");
    const aggrorow = createButtons("trickmech3", "gps3");
    const gps3 = createButtons("helpaggro", "tmech3");
    const tmech3 = createButtons("gravepiratestache3", "aggrohelp");
    const comborow = createButtons("venice3", "bay3");
    const bay3 = createButtons("helpcombo", "gps4");
    const gps4 = createButtons("bayonet3", "tan2");
    const tan2 = createButtons("gravepiratestache4", "tmech4");
    const tmech4 = createButtons("tangen2", "vce3");
    const vce3 = createButtons("trickmech4", "combohelp");
    const controlrow = createButtons("pawntrickstab3", "gseg3");
    const gseg3 = createButtons("helpcontrol", "neuro3");
    const neuro3 = createButtons("ginseng3", "pts3");
    const pts3 = createButtons("neurotherapy3", "controlhelp");
    const midrangerow = createButtons("venice4", "go3");
    const go3 = createButtons("helpmidrange", "lime3");
    const lime3 = createButtons("gomorrah3", "tan3");
    const tan3 = createButtons("limerence3", "vce4");
    const vce4 = createButtons("tangen3", "midrangehelp"); 
    const [result] =
      await db.query(`select bayonet, ginseng, gomorrah, 
        gps, limerence, shamcontrol, pawntrickstab, tangen, trickmech, apotk from ntdecks nt 
        inner join hgdecks hg on nt.deckinfo = hg.deckinfo
        inner join wkdecks wk on nt.deckinfo = wk.deckinfo
        inner join gkdecks gk on nt.deckinfo = gk.deckinfo
        inner join sbdecks sb on nt.deckinfo = sb.deckinfo
        inner join ifdecks fi on nt.deckinfo = fi.deckinfo
        inner join ccdecks cc on nt.deckinfo = cc.deckinfo
        inner join bcdecks bc on nt.deckinfo = bc.deckinfo
        inner join zmdecks zm on nt.deckinfo = zm.deckinfo
        inner join czdecks cz on nt.deckinfo = cz.deckinfo`);
    const user = await client.users.fetch("824024125491380303");
    const shortbow = createHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${shortbowDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const alldecksEmbed = createHelpEmbed(
      `${user.displayName} Decks`,
      `My commands for decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${shortbowDecks.allDecks.length} total decks in Tbot`
    );
    const compEmbed = createHelpEmbed(
      `${user.displayName} Competitive Decks`,
      `My competitive decks made by ${user.displayName} are ${toBuildControlString}`,
      user.displayAvatarURL(),
      `To view the competitive decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${shortbowDecks.compdecks.length} competitive decks in Tbot`
    );
    const ladderEmbed = createHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My ladder decks made by ${user.displayName} are ${toBuildLadderString}`,
      user.displayAvatarURL(),
      `To view the ladder decks made by ${user.displayName} please click on the buttons below or use commands listed above
Note: ${user.displayName} has ${shortbowDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const aggroEmbed = createHelpEmbed(
      `${user.displayName} Aggro Decks`,
      `My aggro decks made by ${user.displayName} are ${toBuildAggroString}`,
      user.displayAvatarURL(),
      `To view the aggro decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${shortbowDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My combo decks made by ${user.displayName} are ${toBuildComboString}`,
      user.displayAvatarURL(),
      `To view the combo decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${shortbowDecks.comboDecks.length} combo decks in Tbot`
    );
    const controlEmbed = createHelpEmbed(
      `${user.displayName} Control Decks`,
      `My control decks made by ${user.displayName} are ${toBuildControlString}`,
      user.displayAvatarURL(),
      `To view the control decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${shortbowDecks.controlDecks.length} control decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My midrange decks made by ${user.displayName} are ${toBuildMidrangeString}`,
      user.displayAvatarURL(),
      `To view the midrange decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${shortbowDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const tempoEmbed = createHelpEmbed(
      `${user.displayName} Tempo Decks`,
      `My tempo decks made by ${user.displayName} are ${toBuildTempoString}`,
      user.displayAvatarURL(),
      `To view the tempo decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${shortbowDecks.tempoDecks.length} tempo decks in Tbot`
    );
     /**
     * The createDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
    function createDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
          { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
          { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
        )
        .setColor("#6679d9");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const gomorrah = createDeckEmbed(result, "gomorrah");
    const gravepiratestache = createDeckEmbed(result, "gps");
    const limerence = createDeckEmbed(result, "limerence");
    const pawntrickstab = createDeckEmbed(result, "pawntrickstab");
    const neurotherapy = createDeckEmbed(result, "shamcontrol");
    const ginseng = createDeckEmbed(result, "ginseng");
    const bayonet = createDeckEmbed(result, "bayonet");
    const trickmech = createDeckEmbed(result, "trickmech");
    const tangen = createDeckEmbed(result, "tangen");
    const venice = createDeckEmbed(result, "apotk");
    const m = await message.channel.send({
      embeds: [shortbow],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "control") {
        await i.update({
          embeds: [controlEmbed],
          components: [controlrow],
        });
      } else if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "aggro") {
        await i.update({
          embeds: [aggroEmbed],
          components: [aggrorow],
        });
      }
      else if (value == "combo") {
        await i.update({
          embeds: [comboEmbed],
          components: [comborow],
        });
      } 
      else if (value == "midrange") {
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]});
      } else if (value == "tempo") {
        await i.update({
          embeds: [tempoEmbed],
          components: [temporow],
        });
      }
      else if (value == "comp") {
       await i.update({
          embeds: [compEmbed],
          components: [comprow],
        });
      } 
      else if (value == "meme") {
        await i.reply({
          embeds: [tangen],
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
        allhelp: { embed: alldecksEmbed, component: alldecksrow },
        helpall: { embed: alldecksEmbed, component: alldecksrow },
        comphelp: { embed: compEmbed, component: comprow },
        helpcomp: { embed: compEmbed, component: comprow },
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpladder: { embed: ladderEmbed, component: ladderrow },
        midrangehelp: { embed: midrangeEmbed, component: midrangerow },
        helpmidrange: { embed: midrangeEmbed, component: midrangerow },
        helpcombo: { embed: comboEmbed, component: comborow },
        combohelp: { embed: comboEmbed, component: comborow },
        controlhelp: { embed: controlEmbed, component: controlrow },
        helpcontrol: { embed: controlEmbed, component: controlrow },
        tempohelp: { embed: tempoEmbed, component: temporow },
        helptempo: { embed: tempoEmbed, component: temporow },
        gps: { embed: gravepiratestache, component: gps },
        gravepiratestache: { embed: gravepiratestache, component: gps },
        gps2: { embed: gravepiratestache, component: gps2 },
        gravepiratestache2: { embed: gravepiratestache, component: gps2 },
        gps3: { embed: gravepiratestache, component: gps3 },
        gravepiratestache3: { embed: gravepiratestache, component: gps3 },
        gps4: { embed: gravepiratestache, component: gps4 },
        gravepiratestache4: { embed: gravepiratestache, component: gps4 },
        go: { embed: gomorrah, component: go },
        gomorrah: { embed: gomorrah, component: go },
        go2: { embed: gomorrah, component: go2 },
        gomorrah2: { embed: gomorrah, component: go2 },
        go3: { embed: gomorrah, component: go3 },
        gomorrah3: { embed: gomorrah, component: go3 },
        pts: { embed: pawntrickstab, component: pts },
        pawntrickstab: { embed: pawntrickstab, component: pts },
        pts2: { embed: pawntrickstab, component: pts2 },
        pawntrickstab2: { embed: pawntrickstab, component: pts2 },
        pts3: { embed: pawntrickstab, component: pts3 },
        pawntrickstab3: { embed: pawntrickstab, component: pts3 },
        lime: { embed: limerence, component: lime },
        limerence: { embed: limerence, component: lime },
        lime2: { embed: limerence, component: lime2 },
        limerence2: { embed: limerence, component: lime2 },
        lime3: { embed: limerence, component: lime3 },
        limerence3: { embed: limerence, component: lime3 },
        tan: { embed: tangen, component: tan },
        tangen: { embed: tangen, component: tan },
        tan2: { embed: tangen, component: tan2 },
        tangen2: { embed: tangen, component: tan2 },
        tan3: { embed: tangen, component: tan3 },
        tangen3: { embed: tangen, component: tan3 }, 
        tmech: { embed: trickmech, component: tmech },
        trickmech: { embed: trickmech, component: tmech },
        tmech2: { embed: trickmech, component: tmech2 },
        trickmech2: { embed: trickmech, component: tmech2 },
        tmech3: { embed: trickmech, component: tmech3 },
        trickmech3: { embed: trickmech, component: tmech3 },
        tmech4: { embed: trickmech, component: tmech4 },
        trickmech4: { embed: trickmech, component: tmech4 },
        bay: { embed: bayonet, component: bay },
        bayonet: { embed: bayonet, component: bay },
        bay2: { embed: bayonet, component: bay2 },
        bayonet2: { embed: bayonet, component: bay2 },
        bay3: { embed: bayonet, component: bay3 },
        bayonet3: { embed: bayonet, component: bay3 },
        bay4: { embed: bayonet, component: bay4 },
        bayonet4: { embed: bayonet, component: bay4 },
        neuro: { embed: neurotherapy, component: neuro },
        neurotherapy: { embed: neurotherapy, component: neuro },
        neuro2: { embed: neurotherapy, component: neuro2 },
        neurotherapy2: { embed: neurotherapy, component: neuro2 },
        neuro3: { embed: neurotherapy, component: neuro3 },
        neurotherapy3: { embed: neurotherapy, component: neuro3 },
        vce: { embed: venice, component: vce },
        venice: { embed: venice, component: vce },
        vce2:  {embed: venice, component: vce2},
        venice2: { embed: venice, component: vce2 },
        vce3: { embed: venice, component: vce3 },
        venice3: { embed: venice, component: vce3 },
        vce4: { embed: venice, component: vce4 },
        venice4: { embed: venice, component: vce4},
        gseg: { embed: ginseng, component: gseg },
        ginseng: { embed: ginseng, component: gseg },
        gseg2: { embed: ginseng, component: gseg2 },
        ginseng2: { embed: ginseng, component: gseg2 },
        gseg3: { embed: ginseng, component: gseg3 },
        ginseng3: { embed: ginseng, component: gseg3 }
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button action.",
          flags: MessageFlags.Ephemeral,
        });
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
