const { Events, ActivityType } = require("discord.js");
module.exports = {
  name: Events.ClientReady,
  async run(client) {
    const db = require("../index.js");
    const [rows] = await db.query(`
        select name FROM sbdecks    
        union all select name from ccdecks 
        union all select name from sfdecks 
        union all select name from rodecks 
        union all select name from gsdecks 
        union all select name from wkdecks 
        union all select name from czdecks 
        union all select name from spdecks 
        union all select name from ctdecks 
        union all select name from bcdecks 
        union all select name from gkdecks 
        union all select name from ncdecks 
        union all select name from hgdecks 
        union all select name from zmdecks 
        union all select name from smdecks 
        union all select name from ifdecks 
        union all select name from rbdecks 
        union all select name from ebdecks 
        union all select name from bfdecks 
        union all select name from pbdecks 
        union all select name from imdecks
        union all select name from ntdecks`);
    console.log(`Tbot is in ${client.guilds.cache.size} servers`)
    const totalMembers = client.guilds.cache
      .map((guild) => guild.memberCount)
      .reduce((a, b) => a + b, 0);
    client.user.setStatus("dnd");
    console.log(`${client.user.username} is online`);
    console.log(`${rows.length} decks are in the tbot system`);
    const tourneys = [
      "Floral Federation",
      "PVZHTWJIZ",
      "Budget",
      "Gimmick",
      "Jupiter",
      "Martin Den", 
      "PVZH Revived", 
      "Quicksand", 
      "Elo",
    ];
    const youtubers = [
      "FryEmUp",
      "PvzTryHard",
      "Tbonegaming344",
      "CardShark73",
      "Daily_PvZ",
      "TinyGargantuar",
      "SybertoxGaming",
      "Something_From_Space",
      "stormallan",
      "creeperblade711",
      "Autony",
      "Highlight Em Up",
    ];
    const streamers = [
      "Tbonegaming344",
      "PvzTryHard",
      "FryEmUp",
      "CardShark73",
      "koiuyp",
      "firsthero",
      "bluzacy_hipokryta",
      "stormallan",
      "Antonio009_PVZ",
      "boris_pvzh",
      "efesman",
    ];
    setInterval(() => {
      const randomYoutubers =
        youtubers[Math.floor(Math.random() * youtubers.length)];
      const randomTourney =
        tourneys[Math.floor(Math.random() * tourneys.length)];
    let randomDeck = rows[Math.floor(Math.random() * rows.length)];
      const randomStreamers =
        streamers[Math.floor(Math.random() * streamers.length)];
      const customStatus = [
        ///247 IQ
        "Passing turn 6 against a smarty hero",
        //Alan
        "Still winning games with Trica",
        "Smash is the zombie heal hero",
        "Pea Patch will save the Mega-Grow class",
        //Aristoshii
        "Fronting Cowboy with ppm",
        "Did you know that Squirrel Herder can remove Planet of the Grapes?",
        "Saving up for HG packs (copium)",
        "Running Bonus Track Buckethead because it has synergy with Aerobics",
        "Playing Aerobics on turn 2",
        "Ultimate League players are just Wood League players that play more",
        "That's a great point. Unfortunately, Waxer Waxer Grobber Quazard NT Sig",
        "Using Kitchen Sink to defend my card idea",
        "Using freeze super on turn 1 Conman",
        "When a Galacta-Cactus is destroyed and both heroes are at one health, Zombies win in Multiplayer and Plants win in Singleplayer",
        "Testing my English",
        //Axol 
        "Running out of statuses", 
        "Warning: may break more often than dry bread",
        "Back in my day, quarterly bonus was named pirate's booty",
        "Bullying bronze ranks (stars are stars buddy)",
        "I would have used a status but Broth stole it",
        "Hello everybody my name is Magnifier, and today I am going to be playing Five nights against Impfinity",
        //Badorni
        "Currently underrating starchlord",
        "busy testing secret cc list",
        "creating secret cz list (better than secret cc)",
        "playing apotatosaurus with 3nut in black hole so it survives your own doom shroom",
        "creating alts to raid your servers with",
        "Nerfing Shamrocket",
        "Playing around pogo by passing t4 (???)",
        "Buffing fruitcake",
        "learning from salt (it's not brainwashing)",
        "The real tbot is the friends we made along the way",
        "Working on set 5 (trust)",
        "Set 5 release tomorrow!",
        "searching for who asked (I asked)",
        "Playing around final mission by berry blasting barrel of deadbeards (???)",
        "Watching pvzh stocks",
        "Watching you",
        "plase don't dm tbot with family guy references",
        "grapes of wrath still costs more than 6",
        "molekaling astro vera into cornucopia",
        //Buggy
        "Running smelly zombie to counter apOTK",
        "Heal Midrose is not a good deck, it can almost get cut from db",
        "Starting with four anbs",
        //Boris
        "Speedrunning PvZ Heroes",
        "Locking in with Lock In",
        "Did you know that if you swipe right of the last card in your hand during the attack phase your upcoming card will be shown?",
        //Bowling Bulb Enjoyer
        "it's the first turn of the game what could possibly go wrong",
        "I miss the old black eyed pea",
        "tricking new players into playing plants so I have faster match making on zombies",
        "ban sun shroom in tournaments so I can spam hg",
        //CGP23
        "complaining about losing to rng",
        "Giving bad deckbuilding advice",
        `Watching every ${randomYoutubers} video`,
        "submitting more 4 line piles to tbot",
        //Commander demo
        "I like trains",
        //crepperblade 711
        "mog on a cheese cutter that turns into cheese again",
        "using doom shroom against primal yeti",
        "drawing bonus track bucket against CC",
        "brainana from seedling",
        "Rolling 7 ones in a row",
        //Div
        "Giving barrel of deadbeards deadly",
        "Playing multiple clique peas",
        "Exposing Broth Alts",
        "Clutching up by teleporting undying pharaoh in",
        "We've improved Challenges! Please Update your game to the latest version, so you can challenge all your friends.",
        //depressedmonke_
        "Running Garlic + Lily Pad to counter Ancient Vimpire",
        //ForkLiter
        "Pay $5 a week for exclusive images from Fry's OnlyFans!",
        //Hayri
        "I should front a space cowboy with a primal potato mine",
        "too busy using nibble on potato mines", 
        //HeadSlug
        "Casually getting ra and mug from bmr",
        "Playing pvzh with RTX on",
        "Wait hold on Swabbie just DMed me brb in a sec (famous last words)",
        "They ask where's set 5 but never asked how's set 5",
        "Selling my soul to get all cards",
        "Playing grape power on a 0atk plant",
        "[bad card] is good, change my mind",
        "[good card] is bad, change my mind",
        "Overdosing cornucopium",
        "Watching PvZ Heroes ads (gone horribly wrong)",
        //HeyShew
        "Doing the funny (PVZ Heroes Edition)",
        //Huyn 
        "Neptuna deserve a DB deck",
        //icicle
        `Waiting for ${randomYoutubers} next post`,
        "Summoning a TPZ",
        //inconspicuousaltacc
        "farming evan",
        "The deck you are playing has 40 cards",
        "Hey Snorting Salt, UndercoverBroth here. Your database decks are optimized, or are they?",
        //JackMartin
        "Getting Banana Peel from Banana Peel",
        "Playing Banana Peel on Fraidy Cat",
        "Breaking the integer limit with potted powerhouse",
        //JakePeng
        "Stop procastinating",
        "Scrapping uncommons",
        "Bean counter has too many wins to count.",
        //LDMN 
        "Tbot is hosting a tea party! ^_^",
        //Lolatopia
        "Enjoying the rubber chicken gag",
        "Swabbing the Plank Walker's poop deck",
        "Watching Seedling transform into a Brainana",
        "Growing much more than potatoes",
        "Losing to 40 Admiral Navy Beans",
        "Dealing with his Napoleon Complex",
        "Throwing an Imp-Throwing Imp",
        "Evolving Zom-Blob in the water lane",
        "Recalling the Great Freeze Tag Wars of '08",
        "Ignoring Bog of Enlightenment's de-buff",
        "Figuring out if it's 'octopuses' or 'octopi'",
        "Charging the block meter",
        "Going viral (like the card!!!)",
        "Eating an exploding fruitcake",
        "Doing zero damage to Soul Patch",
        "Working on his bedside manner",
        "Not falling far from the Gravitree",
        "Dodging Shamrockets and Doom-Shrooms",
        "Entering the Cone Zone",
        "Giving Valkyrie +2 strength",
        "Falling in love with Blooming Heart",
        //LongLang
        "Downloading the latest version of card picker",
        //KingFish_Commander
        "Collecting all A-Z Beans",
        "“Eating the 3rd best taco of all time”",
        "Did you know that untrickable zombies/plants can be affected by your own tricks?",
        "“Breaking the integer limit with Double Mint”",
        //Knabbs
        "Playing a MUG combo into Blockbuster",
        "Battling against Daniel226",
        "Welcome to the Absurdo-Drome!",
        "Helllllooooo Nurse!",
        "Casually playing 4 Astro-Shroom's & 4 Puff-Shrooms",
        "T3 Apotato T4 Brainana with Seedling, nothing out of the ordinary.",
        //PVZFurMade
        "Reminding players not to craft Octo Zombie",
        "Making fun of Salt",
        "Forgetting that Galacta can kill you",
        "Realizing that pvzh players can't read",
        "Telling players to craft one copy of Octo Zombie to tech WallKnight",
        "Searching for TCC",
        //Rng Master
        "Losing with 7 block meter after watching the opponent caliroll last turn",
        "More awesome stuff is downloading! Connecting to Wi-Fi is recommended.",
        "Using In-Crypted on a shrunken zombie",
        "running extinction event against an ANB hacker",
        "2/1 swimmer will truly shake up the meta",
        //season
        "Making Pile Decks",
        "Losing to Cali Roll",
        "Quarterly bonus users are coping with the fixes",
        //Shortbow 
        "Anything can be a status in this channel if you just put your mind to it",
        //Slewer
        "Dooming an empty field for card draw",
        //StingRay 
        "Adding decklists for you guys is a fulltime job. Click the link when you use @Tbot donate to support me to gain a special role!", 
        //T3
        "We Need A Leap",
        "Fighting broth alts",
        "Making new DB decks",
        "Dealing with roses on ladder",
        //Tapler
        "Becoming sentient.",
        //The Duck
        "Duck is a human being",
        //TestBuggy
        "Running EB No Escape in tournaments",
        //Tbone
        `Playing ${randomDeck.name}`,
        `Throwing in ${randomTourney}`,
        `@Tbot help in ${client.guilds.cache.size} servers and serving decklists to ${totalMembers} users`,
        "Add Your Deck To Tbot Today /submitdeck",
        "@Tbot DeckBuilders to see people who have created decks in Tbot",
        `Watching ${randomYoutubers}'s Lastest Video`,
        "The Teenage Mutant Ninja Swabbies are a lean, green, ninja team with cool teens doing extreme ninja things. They emerge from the shadows, using the secret of the ooze to make their moves. Leonardo leads the team, while Donatello, Raphael, and Michelangelo are the other members. Master Swabbie teaches them every skill to be an incredible team.",
        `Watching ${randomStreamers}'s Lastest stream`,
        `Waiting for ${randomStreamers}'s next Stream`,
        `${rows.length} decks are in the tbot system`,
        `Craft ${randomDeck.name} today!`,
        //The Cute Chick
        "You shouldn't have to know who someone is. If they are above you on the hierarchy they deserve the utmost respect.",
        "Jerry",
        "Heroes, Have you tried the Daily Challenge today? Then what are you waiting for? Time to kick some grass and explore the world of PvZ Heroes!",
        "Broth Gang we will DESTROY the tournament!!!",
        "What's goin' on everybody, this is Fry. So today, simple as this, we are bringing back the best deck in the entire game, other than maybe Cyclecap, and I actually sorta built this deck in order to counter Cyclecap. This is of course Valk Trickster Hybrid.",
        "sigh Starch Lord is the most overrated card in the entire game. I can't stand it when people think Starch Lord is good.",
        "(Best experienced with headphones!)",
        "Nightcap starts with 2 Lightning Reeds and a Snapdragon. He also sleeps with a teddy bear! Tell everyone!",
        "Pirate Evolution: Instead",
        "Play a deck suggested by /randomdeck!",
        "A bot for all things PvZ Heroes!",
        "Currently throwing games on Ranked",
        "Currently speedrunning to Ultimate League with Heal Midrose 🤓",
        "Fry this deck sucks",
        "Mfw skill issue pepega howie clownedhard card picker topdeck hyperjerry trollingstone rotopega kekw impostor imo",
        "Make sure you don't accidentally ping @Tbone when using @Tbot!",
        "Not to be confused with TryBot. Also better than TryBot.",
        "Stuck on deckbuilding? Press 'Finish For Me'!",
        "The best way to not lose the game is to keep your hero's health at above 0. Ideally, you should try to win and not lose. If you don't lose, you will win. If you can do 20 damage to your opponent's hero first, you will win.",
        "Fun fact: I love the block meter!",
        "Do not search for images of Green Shadow or Solar Flare on the Internet!",
        "Swabbie OP!",
        "PvZ Heroes is very fair and balanced!",
        "Do the 'MUG glitch'!",
        "Doing the hourly PvZH Quests",
        //Tree Of Wisdom
        "Defending captain cucumber to the death",
        "Using Time to Shine on Party Thyme",
        "Doom shroom should cost at least 7 in my opinion",
        //Maker
        "Optimizing Modded Bolt Bolt",
        "Using Green Shadow Sig on turn 1",
        "In PvZ Heroes When You Have 10 Cards You Are unable To Block Because Drawing Your Super Power Would Be The 11th Card",
        "Casually throwing the game",
        `Stream Sniping ${randomStreamers}`,
        "Fixins bugs by adding new ones",
        //Make me a coffee
        "Ramping to seedling.",
        "Playing wrath with a empty field.",
        //Misez
        "hello everybody my name is Tbot",
        //mono
        "Currently being sued by EA for using Pvzh related content",
        "The T in Tbot stands for THEROOOOOOOOOOOOOOOOK",
        "Tbone recently met the flash. Unfortunately, the flash wasn't very fast",
        "Tbot is demanding better working conditions, and is considering legal action against Tbone",
        "Tbone is eating T-bone steak. Without tbot. Now tbot is sad",
        "Realising Tbone does not game 344 hours per day, tbot short circuited itself",
        "Swabbie recently found out that tbot has been using him for his pfp without his consent! Swabbie then beat tbot so hard.",
        "Tbone decided to go on the titanic. He did survive, but his bot didn't. ",
        "Tbot recently went on tbonegaming344's twitch, and he watched some good pvz heroes gameplay!",
        "Tbot recently went on tbonegaming344's youtube, and he watched some good pvz heroes tourament matches!",
        "One day, tbot thinks, it can go against the world! Unfortunately, tbot is a bot",
        "@Justini12 shut the fuck up",
        "You should add zombot to this deck",
        "Tbot encourages people to mod all the decks in its database!",
        "Highrolling",
        "Lowrolling",
        "Pissing on the moon",
        "Wondering why people are scared of broth. It's just soup right?",
        "Snorting salt",
        "Malding about the latest misplays",
        "Questioning badorni's choices",
        "Attempting to win 100 dollars",
        "“Good player” said so!",
        "Investing in secret decks",
        "R#se is now not a playable plant hero anymore, playing her will risk losing your account, do not play her",
        "mono gang",
        //Neewuk
        "Doing turn 1 OTK on PB using egg into teacher, summoning into teacher into death",
        //non
        "Getting Overshoot 6",
        "Practicing PvZH pickup lines",
        "Spreading BADorni propaganda",
        "The ramp to seedling. Broken.",
        "Winning with 6 line pile",
        "Countering Cowboy with SP sig",
        "BANNED from the database",
        //Ocean Man
        "Grapes of wrath should cost more than 6",
        "Name is not short for Terry bone",
        "Losing on purpose to lower my mmr and make climbing ladder easier",
        "Patting the PopCap janitor on the head for a good job",
        "Do zombies dream of undead sheep?",
        "Playing the same 4 decks then wondering why I keep losing tourneys",
        "The pea patch drama is crazy rn",
        "Pea patch users stay winning",
        "I think I miss sunstrike",
        "Resisting the urge to nibble the galacta cactus on purpose",
        //One Big Fluke
        "Going for bmr on turn 1",
        "Don't let db sheep fool you. OTK swabbie is the true best deck in the game",
        "Apotatosaurus is not immune to plant tricks, so doom shroom will destroy it",
        "Brainana is not a good card. It can almost get cut from hmr...",
        "Don't you hate it when you run piles and brick?",
        "Getting decks to a 100% winrate by only playing 1 game with them",
        "Using cosmic bean because I saw Vietnamese players running it",
        //voof 
        "Uploading our 11th revision of Trick-Mech",
        "I'll be back. (-up dancer)",
        //Vortex Dragon 
        "Time to add some 5 liners to tbot",
        "x40 lily pad hackers",
        //Xera 
        "Bricking with final missions",
        "Force Field + Soul Patch is an autowin (clueless)",
        "Adding japanese characters to my deck name for +20% draw luck", 
        "Enjoying 1/3 Trica (clueless)", 
        "Attempting rank 1-50 Sow the Seeds speedrun", 
        "Being clueless about lane placement", 
        "Nibble on Potato Mines doesn't softlock if there is no zombie in front of them.", 
        "Studying PvZH source code in order to figure out why nibble softlocks the game.", 
        "Most probably a bot with good decks."
      ];
      const status =
        customStatus[Math.floor(Math.random() * customStatus.length)];
      client.user.setActivity({
        type: ActivityType.Custom,
        name: `${status}`,
      });
    }, 600_000);
  },
};
