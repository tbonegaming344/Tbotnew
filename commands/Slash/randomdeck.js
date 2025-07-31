const {EmbedBuilder, SlashCommandBuilder, MessageFlags} = require('discord.js');
let db;
module.exports = {
  data: new SlashCommandBuilder()
    .setName('randomdeck')
    .setDescription('Get a random deck from the Tbot database')
    .addStringOption( option => option.setName('hero').setDescription('The hero of the wheel deck').addChoices(
        {name: "Beta Carrotina", value: "Beta Carrotina"},
        { name: "Captain Combustible", value: "Captain Combustible"},
        { name: "Chompzilla", value: "Chompzilla"}, 
        { name: "Citron", value: "Citron"}, 
        {name: "Grass Knuckles", value: "Grass Knuckles"}, 
        {name: "Green Shadow", value: "Green Shadow"},
        {name: "Night Cap", value: "Night Cap"},
        {name: "Rose", value: "Rose"},
        {name: "Solar Flare", value: "Solar Flare"},
        {name: "Spudow", value: "Spudow"}, 
        {name: "Wall Knight", value: "Wall Knight"}, 
        {name: "Brain Freeze", value: "Brain Freeze"}, 
        {name: "Electric Boogaloo", value: "Electric Boogaloo"},
        {name: "Huge Giganticus", value: "Huge Giganticus"},
        {name: "Super Brainz", value: "Super Brainz"},
        {name: "Impfinity", value: "Impfinity"}, 
        {name: "Immorticia", value: "Immorticia"}, 
        {name: "Neptuna", value: "Neptuna"}, 
        {name: "Rustbolt", value: "Rustbolt"}, 
        {name: "Professor Brainstorm", value: "Professor Brainstorm"}, 
        {name: "Smash", value: "Smash"}, 
        {name: "Zmech", value: "Zmech"},
        {name: "Plants", value: "Plants"},
        {name: "Zombies", value: "Zombies"}, 
        {name: "na", value: "na"}
      ).setRequired(true)),
  async execute(interaction) {
     if (!db) {
    db = require("../../index.js");
  }
    const heroInput = interaction.options.getString('hero');
    const heroDeckTables = {
          // Beta Carrotina
          "Beta Carrotina": "bcdecks",
          // Citron
          "Citron": "ctdecks",
          // Captain Combustible
          "Captain Combustible": "ccdecks",
          // Chompzilla
          "Chompzilla": "czdecks",
          // Grass Knuckles
          "Grass Knuckles": "gkdecks",
          // Green Shadow
          "Green Shadow": "gsdecks",

          // Nightcap
          "Night Cap": "ncdecks",
          // Rose
          "Rose": "rodecks",

          // Solar Flare
          "Solar Flare": "sfdecks",
          // Spudow
          "Spudow": "spdecks",
          // Wall-Knight
          "Wall Knight": "wkdecks",

          // Brain Freeze
          "Brain Freeze": "bfdecks",
          // Electric Boogaloo
          "Electric Boogaloo": "ebdecks",
          // Huge-Gigantacus
          "Huge Giganticus": "hgdecks",
          // Impfinity
          "Impfinity": "ifdecks",
          // Immorticia
          "Immorticia": "imdecks",
          // Neptuna
          "Neptuna": "ntdecks",
          // Professor Brainstorm
          "Professor Brainstorm": "pbdecks",
          // Rustbolt
          "Rustbolt": "rbdecks",
          // The Smash
          "Smash": "smdecks",
          // Zmech
          "Zmech": "zmdecks",
          //Super Brainz
          "Super Brainz": "sbdecks",
        };
        const tableName = heroDeckTables[heroInput];
          if (heroInput == "na") {
          try {
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
            on (bc.deckinfo = zm.deckinfo)
            where bc.deckinfo = "image link:"`);
            const deck = [];
            for (const key in result[0]) {
              const value = result[0][key];
              if (
                typeof value === 'string' && // ✅ Check if it's a string
                (value.includes(".png") ||
                 value.includes(".jpg") ||
                 value.includes(".jpeg") ||
                 value.includes(".webp")) &&
                !value.includes("budget")
              ) {
                deck.push(value);
              }
            }
            const embed = new EmbedBuilder()
              .setTitle("Random Deck")
              .setDescription("Here is your random deck")
              .setColor("Random")
              .setImage(deck[Math.floor(Math.random() * deck.length)]);

           await interaction.reply({
              embeds: [embed],
              flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            console.error(err);
            await interaction.reply({
              content: "Oops, something went wrong. Please try again later.",
              flags: MessageFlags.Ephemeral,
            });
          }
        } else if (heroInput == "plants") {
          try {
            const [result] = await db.query(`select * from bcdecks bc
                    inner join ccdecks cc 
                    on (bc.deckinfo = cc.deckinfo)
                    inner join ctdecks ct 
                    on (bc.deckinfo = ct.deckinfo)
                    inner join czdecks cz
                    on (bc.deckinfo = cz.deckinfo)
                    inner join gkdecks gk 
                    on (bc.deckinfo = gk.deckinfo)
                    inner join gsdecks gs 
                    on (bc.deckinfo = gs.deckinfo)
                    inner join ncdecks nc 
                    on (bc.deckinfo = nc.deckinfo)
                    inner join rodecks ro 
                    on (bc.deckinfo = ro.deckinfo)
                    inner join sfdecks sf 
                    on (bc.deckinfo = sf.deckinfo)
                    inner join spdecks sp 
                    on (bc.deckinfo = sp.deckinfo)
                    inner join wkdecks wk 
                    on (bc.deckinfo = wk.deckinfo)
                    where bc.deckinfo = "image link:"`);
            const deck = [];
            for (const key in result[0]) {
              const value = result[0][key];
              if (
                typeof value === 'string' && // ✅ Check if it's a string
                (value.includes(".png") ||
                 value.includes(".jpg") ||
                 value.includes(".jpeg") ||
                 value.includes(".webp")) &&
                !value.includes("budget")
              ) {
                deck.push(value);
              }
            }
            const embed = new EmbedBuilder()
              .setTitle("Random Plant Deck")
              .setDescription(`Here is your random plant Deck`)
              .setColor("Random")
              .setImage(deck[Math.floor(Math.random() * deck.length)]);

            await interaction.reply({
              embeds: [embed],
              flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            console.error(err);
            await interaction.reply({
              content: "Oops, something went wrong. Please try again later.",
              flags: MessageFlags.Ephemeral,
            });
          }
        } else if (heroInput == "zombies") {
          try {
            const [result] = await db.query(`select * from bfdecks bf
                    inner join ebdecks eb 
                    on (bf.deckinfo = eb.deckinfo)
                    inner join hgdecks hg
                    on (bf.deckinfo = hg.deckinfo)
                    inner join ifdecks fi 
                    on (bf.deckinfo = fi.deckinfo)
                    inner join imdecks im 
                    on (bf.deckinfo = im.deckinfo)
                    inner join ntdecks nt 
                    on (bf.deckinfo = nt.deckinfo)
                    inner join pbdecks pb 
                    on (bf.deckinfo = pb.deckinfo)
                    inner join rbdecks rb 
                    on (bf.deckinfo = rb.deckinfo)
                    inner join sbdecks sb 
                    on (bf.deckinfo = sb.deckinfo)
                    inner join smdecks sm 
                    on (bf.deckinfo = sm.deckinfo)
                    where bf.deckinfo = "image link:"`);
            const deck = [];
            for (const key in result[0]) {
              const value = result[0][key];
              if (
                typeof value === 'string' && 
                (value.includes(".png") ||
                 value.includes(".jpg") ||
                 value.includes(".jpeg") ||
                 value.includes(".webp")) &&
                !value.includes("budget")
              ) {
                deck.push(value);
              }
            }
            const embed = new EmbedBuilder()
              .setTitle("Random Zombie Deck")
              .setDescription(`Here is your random Zombie Deck`)
              .setColor("Random")
              .setImage(deck[Math.floor(Math.random() * deck.length)]);

            await interaction.reply({
              embeds: [embed],
              flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            console.error(err);
            await interaction.reply({
              content: "Oops, something went wrong. Please try again later.",
              flags: MessageFlags.Ephemeral,
            });
          }
        } else if (!tableName) {
          await interaction.reply({
            content: "Invalid hero name. Please try again.",
            flags: MessageFlags.Ephemeral,
          });
        }

        try {
          /**
           * The getRandomDeck function gets a random deck for the user to play
           * @param {*} tableName - The name of the table
           * @returns - The users deck
           */
          async function getRandomDeck(tableName) {
            const [result] = await db.query(
              `SELECT * FROM ${tableName} WHERE deckinfo = 'image link:'`
            );
            const deck = [];
            for (const key in result[0]) {
              const value = result[0][key];
              if (
                typeof value === 'string' && // ✅ Check if it's a string
                (value.includes(".png") ||
                 value.includes(".jpg") ||
                 value.includes(".jpeg") ||
                 value.includes(".webp")) &&
                !value.includes("budget")
              ) {
                deck.push(value);
              }
            }

            if (deck.length === 0) {
              throw new Error("No valid decks found.");
            }

            return deck;
          }

          try {
            const randomDeck = await getRandomDeck(tableName);
            const embed = new EmbedBuilder()
              .setTitle(
                `Random ${
                  heroInput.charAt(0).toUpperCase() + heroInput.slice(1)
                } Deck`
              )
              .setDescription(`Here is your random ${heroInput} deck`)
              .setColor("Random")
              .setImage(
                randomDeck[Math.floor(Math.random() * randomDeck.length)]
              );
            await interaction.reply({
              embeds: [embed],
              flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            console.error(err);
            await interaction.reply({
              content: "No valid decks found. Please try again later.",
              flags: MessageFlags.Ephemeral,
            });
          }
        } catch (err) {
          console.error(err);
          await interaction.reply({
            content: "Oops, something went wrong. Please try again later.",
            flags: MessageFlags.Ephemeral,
          });
        }
  },
};
