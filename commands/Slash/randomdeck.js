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

    // Helper function to get a deck and reply, avoiding repeated code
    const getAndSendRandomDeck = async (query, title, description) => {
      try {
        const [result] = await db.query(query);

        if (!result || result.length === 0 || !result[0]) {
          throw new Error("No decks found in the database for this category.");
        }

        const deck = [];
        for (const key in result[0]) {
          const value = result[0][key];
          if (
            typeof value === 'string' &&
            (value.includes(".png") || value.includes(".jpg") || value.includes(".jpeg") || value.includes(".webp")) &&
            !value.includes("budget")
          ) {
            deck.push(value);
          }
        }

        if (deck.length === 0) {
          throw new Error("No valid deck images found in the result.");
        }

        const embed = new EmbedBuilder()
          .setTitle(title)
          .setDescription(description)
          .setColor("Random")
          .setImage(deck[Math.floor(Math.random() * deck.length)]);

        await interaction.reply({
          embeds: [embed],
          flags: MessageFlags.Ephemeral,
        });
      } catch (err) {
        console.error(err);
        await interaction.reply({
          content: "Oops, something went wrong or no decks were found. Please try again later.",
          flags: MessageFlags.Ephemeral,
        });
      }
    };

    const heroDeckTables = {
      "Beta Carrotina": "bcdecks", "Citron": "ctdecks", "Captain Combustible": "ccdecks",
      "Chompzilla": "czdecks", "Grass Knuckles": "gkdecks", "Green Shadow": "gsdecks",
      "Night Cap": "ncdecks", "Rose": "rodecks", "Solar Flare": "sfdecks",
      "Spudow": "spdecks", "Wall Knight": "wkdecks", "Brain Freeze": "bfdecks",
      "Electric Boogaloo": "ebdecks", "Huge Giganticus": "hgdecks", "Impfinity": "ifdecks",
      "Immorticia": "imdecks", "Neptuna": "ntdecks", "Professor Brainstorm": "pbdecks",
      "Rustbolt": "rbdecks", "Smash": "smdecks", "Zmech": "zmdecks", "Super Brainz": "sbdecks",
    };
    const tableName = heroDeckTables[heroInput];

    if (heroInput === "na") {
      const query = `SELECT * FROM bcdecks bc INNER JOIN bfdecks bf ON (bc.deckinfo = bf.deckinfo) INNER JOIN ccdecks cc ON (bc.deckinfo = cc.deckinfo) INNER JOIN ctdecks ct ON (bc.deckinfo = ct.deckinfo) INNER JOIN czdecks cz ON (bc.deckinfo = cz.deckinfo) INNER JOIN ebdecks eb ON (bc.deckinfo = eb.deckinfo) INNER JOIN gkdecks gk ON (bc.deckinfo = gk.deckinfo) INNER JOIN gsdecks gs ON (bc.deckinfo = gs.deckinfo) INNER JOIN hgdecks hg ON (bc.deckinfo = hg.deckinfo) INNER JOIN ifdecks fi ON (bc.deckinfo = fi.deckinfo) INNER JOIN imdecks im ON (bc.deckinfo = im.deckinfo) INNER JOIN ncdecks nc ON (bc.deckinfo = nc.deckinfo) INNER JOIN ntdecks nt ON (bc.deckinfo = nt.deckinfo) INNER JOIN pbdecks pb ON (bc.deckinfo = pb.deckinfo) INNER JOIN rbdecks rb ON (bc.deckinfo = rb.deckinfo) INNER JOIN rodecks ro ON (bc.deckinfo = ro.deckinfo) INNER JOIN sbdecks sb ON (bc.deckinfo = sb.deckinfo) INNER JOIN sfdecks sf ON (bc.deckinfo = sf.deckinfo) INNER JOIN smdecks sm ON (bc.deckinfo = sm.deckinfo) INNER JOIN spdecks sp ON (bc.deckinfo = sp.deckinfo) INNER JOIN wkdecks wk ON (bc.deckinfo = wk.deckinfo) INNER JOIN zmdecks zm ON (bc.deckinfo = zm.deckinfo) WHERE bc.deckinfo = "image link:"`;
      await getAndSendRandomDeck(query, "Random Deck", "Here is your random deck");
    } else if (heroInput === "Plants") {
      const query = `SELECT * FROM bcdecks bc INNER JOIN ccdecks cc ON (bc.deckinfo = cc.deckinfo) INNER JOIN ctdecks ct ON (bc.deckinfo = ct.deckinfo) INNER JOIN czdecks cz ON (bc.deckinfo = cz.deckinfo) INNER JOIN gkdecks gk ON (bc.deckinfo = gk.deckinfo) INNER JOIN gsdecks gs ON (bc.deckinfo = gs.deckinfo) INNER JOIN ncdecks nc ON (bc.deckinfo = nc.deckinfo) INNER JOIN rodecks ro ON (bc.deckinfo = ro.deckinfo) INNER JOIN sfdecks sf ON (bc.deckinfo = sf.deckinfo) INNER JOIN spdecks sp ON (bc.deckinfo = sp.deckinfo) INNER JOIN wkdecks wk ON (bc.deckinfo = wk.deckinfo) WHERE bc.deckinfo = "image link:"`;
      await getAndSendRandomDeck(query, "Random Plant Deck", "Here is your random plant Deck");
    } else if (heroInput === "Zombies") {
      const query = `SELECT * FROM bfdecks bf INNER JOIN ebdecks eb ON (bf.deckinfo = eb.deckinfo) INNER JOIN hgdecks hg ON (bf.deckinfo = hg.deckinfo) INNER JOIN ifdecks fi ON (bf.deckinfo = fi.deckinfo) INNER JOIN imdecks im ON (bf.deckinfo = im.deckinfo) INNER JOIN ntdecks nt ON (bf.deckinfo = nt.deckinfo) INNER JOIN pbdecks pb ON (bf.deckinfo = pb.deckinfo) INNER JOIN rbdecks rb ON (bf.deckinfo = rb.deckinfo) INNER JOIN sbdecks sb ON (bf.deckinfo = sb.deckinfo) INNER JOIN smdecks sm ON (bf.deckinfo = sm.deckinfo) WHERE bf.deckinfo = "image link:"`;
      await getAndSendRandomDeck(query, "Random Zombie Deck", "Here is your random Zombie Deck");
    } else if (tableName) {
      // This is now the final case for a valid hero
      const query = `SELECT * FROM ${tableName} WHERE deckinfo = 'image link:'`;
      const title = `Random ${heroInput.charAt(0).toUpperCase() + heroInput.slice(1)} Deck`;
      const description = `Here is your random ${heroInput} deck`;
      await getAndSendRandomDeck(query, title, description);
    } else {
      // This handles any other invalid input
      await interaction.reply({
        content: "Invalid hero name. Please try again.",
        flags: MessageFlags.Ephemeral,
      });
    }
  },
};
