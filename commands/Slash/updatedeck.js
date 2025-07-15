const { SlashCommandBuilder, ChannelType, EmbedBuilder, MessageFlags } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('updatedeck')
    .setDescription('Submit an update to a PvZ Heroes decklist in Tbot')
    .addStringOption(option =>
      option.setName('name').setDescription('Name of the deck to update').setRequired(true))
    .addIntegerOption(option =>
      option.setName('deck_cost').setDescription('The cost of the deck').setRequired(true))
      .addStringOption(option =>
      option.setName('hero').setDescription('The hero of the deck').addChoices(
        { name: "Captain Combustible", value: "1100172143603482786"},
        { name: "Chompzilla", value: "1100171601045106819"}, 
        { name: "Citron/BC", value: "1100171558263193700"}, 
        {name: "Grass Knuckles", value: "1100171819148906628"}, 
        {name: "Green Shadow", value: "1100172254983241820"},
        {name: "Night Cap", value: "1100171997167747172"},
        {name: "Rose", value: "1100171855316406343"},
        {name: "Solar Flare", value: "1100171646557491220"},
        {name: "Spudow", value: "1100171758256013412"}, 
        {name: "Wall Knight", value: "1100171712391295006"}, 
        {name: "Brain Freeze", value: "1100170721994477668"}, 
        {name: "Electric Boogaloo", value: "1100171042380578857"},
        {name: "Huge Giganticus/SB", value: "1100170925208502282"},
        {name: "Impfinity", value: "1100170791594762260"}, 
        {name: "Immorticia", value: "1100171253790285904"}, 
        {name: "Neptuna", value: "1100170647050649620"}, 
        {name: "Rustbolt", value: "1100171459785150585"}, 
        {name: "Professor Brainstorm", value: "1100171115504078901"}, 
        {name: "Smash", value: "1100171177529446492"}, 
        {name: "Zmech", value: "1100170981013729410"},
      ).setRequired(true))
      .addStringOption(option => option.setName("deck_creator").setDescription("Put creators name. feel free to add optimized by: your name if you want credits").setRequired(true))
    .addAttachmentOption(option =>
      option.setName('image').setDescription('image of the decklist').setRequired(true))
       .addStringOption(option =>
      option.setName('description').setDescription('Short description of the deck').setRequired(false))
    .addStringOption(option =>
      option.setName('deck_archetype').setDescription('The archetype for the deck').setRequired(false)
      .addChoices(
        { name: 'Aggro', value: 'Aggro'},
        { name: 'Control', value: 'Control'},
        { name: 'Combo', value: 'Combo'},
        { name: 'Midrange', value: 'Midrange'},
        { name: "Tempo", value: 'Tempo'}
      ))
          .addStringOption(option =>
      option.setName('deck_type').setDescription('The type of deck it is').setRequired(false)
      .addChoices(
        {name: 'Budget', value: 'Budget'},
        { name: 'Competitive', value: 'Competitive'},
        { name: 'Ladder', value: 'Ladder'},
        { name: 'Meme', value: 'Meme'},
      )), 
  async execute(interaction) {
    const name = interaction.options.getString('name');
    const description = interaction.options.getString('description');
    const decktype = interaction.options.getString('deck_type');
    const deckarchetype = interaction.options.getString('deck_archetype');
    const image = interaction.options.getAttachment('image');
    const deckcost = interaction.options.getInteger('deck_cost');
    const hero = interaction.options.getString('hero');
    const deckcreator = interaction.options.getString('deck_creator');

    const forumChannel = interaction.client.channels.cache.get('1100160031128830104');

    if (!forumChannel || forumChannel.type !== ChannelType.GuildForum) {
      return interaction.reply({ content: '❌ Forum channel not found or invalid.', ephemeral: true });
    }
    const fields = [
  { name: 'Deck Cost', value: deckcost.toString(), inline: true },
];
if (aliases && aliases.trim() !== '') {
  fields.push({ name: 'Aliases', value: aliases, inline: true });
}
    if (deckarchetype) {
      fields.push({ name: 'Deck Archetype', value: deckarchetype, inline: true });
    }
    if (decktype) {
      fields.push({ name: 'Deck Type', value: decktype, inline: true });
    }
    const embed = new EmbedBuilder()
      .setTitle(`Update ${name}`)
      .setDescription(description)
        .addFields(fields) 
      .setColor("Random")
      .setFooter({ text: `Created By ${deckcreator} | Submitted by ${interaction.user.tag}`})

    if (image?.contentType?.startsWith('image/')) {
      embed.setImage(image.url);
    }

    // Create the thread in the forum
    const thread = await forumChannel.threads.create({
      name: `${name} needs an update`,
      message: {
        embeds: [embed],
      },
      appliedTags: [hero],
    });
    const starterMessage = await thread.fetchStarterMessage();
    await starterMessage.pin();
    await starterMessage.react('<:upvote:1081953853903220876>');
    await starterMessage.react('<:downvote:1081953860534403102>');
    await interaction.reply({
      content: `✅ Your deck has been submitted successfully! You can view it here: ${thread.url}`,
      ephemeral: MessageFlags.Ephemeral
    });
  },
};