const {
  ContainerBuilder,
  SectionBuilder,
  TextDisplayBuilder,
  ThumbnailBuilder,
  MessageFlags,
  SeparatorSpacingSize
} = require("discord.js");
module.exports = {
    name: `plantkeeporscrap`, 
    aliases: [`plantkeep`, `plantscrap`, `plantcraft`, `plantkos`, `plantrecycle`, `pkos`], 
    category: `Miscellaneous`,
    run: async (client, message, args) => {
        const container = new ContainerBuilder();
        const tierText2 = new TextDisplayBuilder().setContent([
          "### Notes", 
          "- **TIERS ARE UNORDERED**",
          "- **Craft** is a tier brought back, since it's now a lot more clear which cards are worth putting sparks towards", 
          "- **Use** means that a card is immediately helpful for budget decks while also being valuable to keep for later.",  
          "- **Keep** meanwhile means a card is worth keeping for decks that you'll make later once you own enough higher rarity cards", 
          "- [Reddit Post](https://www.reddit.com/r/PvZHeroes/comments/1msgpme/updated_keep_or_scrap_august_2025_explanation/)"
        ].join("\n"));
        container.addTextDisplayComponents(tierText2);
        container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
        const tierText3 = new TextDisplayBuilder().setContent([
          "# Guardian",
          "- **Pecanolith** is now Scrap. Gravitree is better top-end that ends up being more lethal without backfire. It was Keepable before Quarterly fix, now it's not worth it", 
          "- **Hot Date** is Keep tier. It was put in Keepable before since it wasn't useful on a budget, but Keep tier is now fitting for the card's limits", 
          "- **Body-Gourd** and **Soul Patch** are Keepable now. Recent buffs made then a lot more runnable. Soul Patch is a weaker Poppies, not saying it's bad", 
          "- **Pear Cub** and **Red Stinger** are Use. Recent buffs have made them much more ideal to use"
        ].join("\n"));
        const guardianImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406625953924513933/guardiankeep.webp?ex=68a32601&is=68a1d481&hm=622aa2cad975b860a40ff1bb252f35168402cd5533e39cc63069f96c2779a9d5&=&format=webp")
        const guardianSection = new SectionBuilder()
          .addTextDisplayComponents(tierText3)
          .setThumbnailAccessory(guardianImage);
          container.addSectionComponents(guardianSection);
       container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
        const tierText4 = new TextDisplayBuilder().setContent([
          "# Kabloom",
          "- **Banana Launcher**, **Reincarnation**, **Pineclone**, and **Gloom-Shroom** are Scrap. Gloom and Pineclone were already bad cards that stopped being useful as budget options due to power-creep. Blauncher and Reincarnation are too niche to keep on a budget. You typically either want better aggro options or more sparks to put towards Fig", 
          "- **Astro-Shroom** is just Keepable now. A fine budget option and you still want it for Cycle Cap, but Nightcap at max is a lot more flexible and other heroes just don't bother with this card", 
          "- **Fireweed** in Keep since it's used in most of Kabloom decks nowadays, due to the class having a slower pace nowadays and wanting the control and value it brings. You can scrap it if you need the sparks and have no plans for using Kabloom heroes, but they all want this card (yes, even Nightcap likes this card sometimes)"
        ].join("\n"));
        const kabloomImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406626184451592372/kabloomkeep.webp?ex=68a32638&is=68a1d4b8&hm=de66193cd1116b5b6f991dc0bc19bbfdd726f112cd1cd4660be9324cfbdbb812&=&format=webp&width=995&height=873")
        const kabloomSection = new SectionBuilder()
          .addTextDisplayComponents(tierText4)
          .setThumbnailAccessory(kabloomImage);
        container.addSectionComponents(kabloomSection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText5 = new TextDisplayBuilder().setContent([
        "# Mega-Grow", 
        "- **Espresso Fiesta** is Craft now. The card is genuinely broken on some heroes, and it's generally really good now", 
        "- **Lily of the Valley** and **Apotatosaurus** are now Keep and Use respectively. **Apotato** is good top-end that can help finish games, while **Lily** is more consistently good in decks 10k sparks and up after its buff",
         "-  **Spinach** is Keepable now, since a lot of Leafy cards got buffs. It's like a more versatile Onion Rings with weaker effects", 
        "- **Black-Eyed Pea** is Scrap now. Card is genuinely not good anymore ever since Cabbage got its buff. Pea Patch also takes its spot in decks, and Umbrella being more playable means BEP isn't necessary for trick tech", 
      ].join("\n"));
      const megaGrowImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406626381072306176/megagrowkeep.webp?ex=68a32667&is=68a1d4e7&hm=ad2ee8e28730eb6bce897ea66f9608a6325d319bdab66d04d1697a4db70a1dcb&=&format=webp")
      const megaGrowSection = new SectionBuilder()
        .addTextDisplayComponents(tierText5)
        .setThumbnailAccessory(megaGrowImage);
      container.addSectionComponents(megaGrowSection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText6 = new TextDisplayBuilder().setContent([
        "# Smarty", 
        "- **Laser Cattail** is Keep, it's actually a good on a budget. It's versatile, relevant to budget strategies, and leads to strong decks",
        "- **Sportacus** in Scrap, generally underperforms, even in aggro, and Smarty has better tempo options now", 
        "- **Dark Matter Dragonfruit** in Keep, as Smarty has more of a focus on midrange and control than before", 
        "- **Winter Melon** and **Snapdragon** are Keepable since they're good board control that get used competitively and are okay on a budget. Winter doesn't fall into the same traps less effective 6-drops do since it at least does something when played and actively supports strong boards. Snapdragon overall is a fine card that similarly supports your boards with Splash Damage"
      ].join("\n"));
      const smartyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406626601143369759/smartykeep.webp?ex=68a3269b&is=68a1d51b&hm=885e02855ea36b6252dee2b6deaed90ae4836484d309dbf027d7faec58d135ef&=&format=webp&width=399&height=350")
      const smartySection = new SectionBuilder()
        .addTextDisplayComponents(tierText6)
        .setThumbnailAccessory(smartyImage);
      container.addSectionComponents(smartySection);
      container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText7 = new TextDisplayBuilder().setContent([
        "# Solar", 
        "- **Sun-Shroom is craft**. Card's busted", 
        "- **Aloesaurus** and **Wing-Nut** are Scrap. Similar to Pecan, they were really only recommended for the meta at that time. Aloe made up for the lack of lethality Solar had, while Wing-Nut was a simple answer to Quarterly. Both cards are completely unnecessary to keep now", 
        "- **Cross-Pollination** and **Taco** are Keepable since slower decks like the sustain and have niche use at max. Not that useful on a budget, but can be valuable to have for certain strategies", 
        "- **Briar** is still Scrap, still worth 4k sparks"
      ].join("\n"));
      const solarImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1406626808060973056/smartykeep.webp?ex=68a326cc&is=68a1d54c&hm=672e954669a47f62bb2a06e2194648e2e3627fc86baedc6e018727d04edbb812&=&format=webp&width=991&height=873")
      const solarSection = new SectionBuilder()
        .addTextDisplayComponents(tierText7)
        .setThumbnailAccessory(solarImage);
      container.addSectionComponents(solarSection);
      container.setAccentColor(65280);
      await message.channel.send({
      components: [container],
      flags: MessageFlags.IsComponentsV2,
      allowedMentions: { 
        users: []
      }
    });
    }
  }