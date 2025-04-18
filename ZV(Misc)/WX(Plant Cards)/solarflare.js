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
    .setColor("Red");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `solarflare`,
  aliases: [`sf`, `solar`, `flare`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Solar Flare Decks")
        .setEmoji("<:SFSip:1018934631531282532>")
        .setStyle(ButtonStyle.Danger)
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Solar Flare's decklists")
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
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Solar Flare Decks")
          .setValue("all")
          .setDescription("View all Solar Flare decks")
          .setEmoji("<:SFSip:1018934631531282532>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const solarFlareDecks = {
      budgetDecks: ["budgetswarmsf"],
      competitiveDecks: ["figlottery"],
      memeDecks: ["funnyflare", "healburn", "psychosolstice", "ramp2seedling"],
      aggroDecks: ["budgetswarmsf"],
      comboDecks: ["funnyflare", "healburn", "psychosolstice", "ramp2seedling"],
      midrangeDecks: [
        "figlottery",
        "funnyflare",
        "healburn",
        "psychosolstice",
        "ramp2seedling",
      ],
      allDecks: [
        "budgetswarmsf",
        "figlottery",
        "funnyflare",
        "healburn",
        "psychosolstice",
        "ramp2seedling",
      ],
    };
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
    const memerow = new CreateButtons("ramp2seedling", "ff");
    const ff = new CreateButtons("helpmeme", "hburn");
    const hburn = new CreateButtons("funnyflare", "psol");
    const psol = new CreateButtons("healburn", "r2s");
    const r2s = new CreateButtons("psychosolstice", "memehelp");
    const comborow = new CreateButtons("ramp2seedling2", "ff2");
    const ff2 = new CreateButtons("helpcombo", "hburn2");
    const hburn2 = new CreateButtons("funnyflare2", "psol2");
    const psol2 = new CreateButtons("healburn2", "r2s2");
    const r2s2 = new CreateButtons("psychosolstice2", "combohelp");
    const midrangerow = new CreateButtons("ramp2seedling3", "flottery");
    const flottery = new CreateButtons("helpmid", "ff3");
    const ff3 = new CreateButtons("figlottery", "hburn3");
    const hburn3 = new CreateButtons("funnyflare3", "psol3");
    const psol3 = new CreateButtons("healburn3", "r2s3");
    const r2s3 = new CreateButtons("psychosolstice3", "midhelp");
    const alldecksrow = new CreateButtons("ramp2seedling4", "bsf");
    const bsf = new CreateButtons("helpall", "flottery2");
    const flottery2 = new CreateButtons("budgetsf", "ff4");
    const ff4 = new CreateButtons("figlottery2", "hburn4");
    const hburn4 = new CreateButtons("funnyflare3", "psol4");
    const psol4 = new CreateButtons("psol4", "r2s4");
    const r2s4 = new CreateButtons("psychosolstice4", "allhelp");
    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMemeString = BuildDeckString(solarFlareDecks.memeDecks);
    const toBuildComboString = BuildDeckString(solarFlareDecks.comboDecks);
    const toBuildMidrangeString = BuildDeckString(
      solarFlareDecks.midrangeDecks
    );
    const toBuildString = BuildDeckString(solarFlareDecks.allDecks);
    const sf = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
      )
      .setTitle(
        "Solar Flare | <:Kabloom:1062502137826910268><:Solar:1062502678384607262>"
      )
      .setDescription("**\\- Flower Hero  -**")
      .setColor("Red")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Weed Whack <:Solar:1062502678384607262> \n A Zombie gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \n More Spore <:Kabloom:1062502137826910268> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Button Mushrooms in a lane of your choice. Then another  appears in a random lanes. \n Scorched Earth <:Solar:1062502678384607262> \n All Zombies on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Sunburn <:Kabloom:1062502137826910268><:Solar:1062502678384607262> \n Do 2 damage. \n You get +1<:Sun:1062501177679413409> for the rest of the game.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "When she's on fire, she's on FIRE. And so are the Zombies.",
        }
      );
    const embed = new CreateHelpEmbed(
      "Solar Flare Decks",
      `To view the Solar Flare decks please select an option from the select menu below!
  Note: Solar Flare has ${solarFlareDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
    );
    const memeEmbed = new CreateHelpEmbed(
      "Solar Flare Meme Decks",
      `My meme decks for Solar Flare(SF) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist",
      `To view the meme Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
  Note: Solar Flare has ${solarFlareDecks.memeDecks.length} meme decks in Tbot`
    );
    const allEmbed = new CreateHelpEmbed(
      "Solar Flare Decks",
      `My decks for Solar Flare(SF) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist",
      `To view the Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: Solar Flare has ${solarFlareDecks.allDecks.length} decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Solar Flare Combo Decks",
      `My combo decks for Solar Flare(SF) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist",
      `To view the combo Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
  Note: Solar Flare has ${solarFlareDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Solar Flare Midrange Decks",
      `My midrange decks for Solar Flare(SF) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist",
      `To view the midrange Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
  Note: Solar Flare has ${solarFlareDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from sfdecks`);
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
        .setColor("Yellow");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetsf = new CreateDeckEmbed(result, "budgetswarmsf");
    const funnyflare = new CreateDeckEmbed(result, "funnyflare");
    const healburn = new CreateDeckEmbed(result, "healburn");
    const figlottery = new CreateDeckEmbed(result, "healmidflare");
    const psychosolstice = new CreateDeckEmbed(result, "psychosolstice");
    const ramp2seedling = new CreateDeckEmbed(result, "ramp2seedling");
    const m = await message.channel.send({ embeds: [sf], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "comp") {
        await i.reply({ embeds: [figlottery], flags: MessageFlags.Ephemeral });
      } else if (value == "budget" || value == "aggro") {
        await i.reply({ embeds: [budgetsf], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
    }
    async function handleButtonInteraction(i) {
      const buttonActions = {
        cmd: { embed: embed, component: row },
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpall: { embed: allEmbed, component: alldecksrow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpmeme: { embed: memeEmbed, component: memerow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcombo: { embed: comboEmbed, component: comborow },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bsf: { embed: budgetsf, component: bsf },
        budgetsf: { embed: budgetsf, component: bsf },
        flottery: { embed: figlottery, component: flottery },
        figlottery: { embed: figlottery, component: flottery },
        flottery2: { embed: figlottery, component: flottery2 },
        figlottery2: { embed: figlottery, component: flottery2 },
        ff: { embed: funnyflare, component: ff },
        funnyflare: { embed: funnyflare, component: ff },
        ff2: { embed: funnyflare, component: ff2 },
        funnyflare2: { embed: funnyflare, component: ff2 },
        ff3: { embed: funnyflare, component: ff3 },
        funnyflare3: { embed: funnyflare, component: ff3 },
        ff4: { embed: funnyflare, component: ff4 },
        funnyflare4: { embed: funnyflare, component: ff4 },
        hburn: { embed: healburn, component: hburn },
        healburn: { embed: healburn, component: hburn },
        hburn2: { embed: healburn, component: hburn2 },
        healburn2: { embed: healburn, component: hburn2 },
        hburn3: { embed: healburn, component: hburn3 },
        healburn3: { embed: healburn, component: hburn3 },
        hburn4: { embed: healburn, component: hburn4 },
        healburn4: { embed: healburn, component: hburn4 },
        psol: { embed: psychosolstice, component: psol },
        psychosolstice: { embed: psychosolstice, component: psol },
        psol2: { embed: psychosolstice, component: psol2 },
        psychosolstice2: { embed: psychosolstice, component: psol2 },
        psol3: { embed: psychosolstice, component: psol3 },
        psychosolstice3: { embed: psychosolstice, component: psol3 },
        psol4: { embed: psychosolstice, component: psol4 },
        psychosolstice4: { embed: psychosolstice, component: psol4 },
        r2s: { embed: ramp2seedling, component: r2s },
        ramp2seedling: { embed: ramp2seedling, component: r2s },
        r2s2: { embed: ramp2seedling, component: r2s2 },
        ramp2seedling2: { embed: ramp2seedling, component: r2s2 },
        r2s3: { embed: ramp2seedling, component: r2s3 },
        ramp2seedling3: { embed: ramp2seedling, component: r2s3 },
        r2s4: { embed: ramp2seedling, component: r2s4 },
        ramp2seedling4: { embed: ramp2seedling, component: r2s4 },
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
      if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
