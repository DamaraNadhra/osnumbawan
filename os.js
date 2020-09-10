const Discord = require('discord.js');

const client = new Discord.Client();

const ms = require('ms');

const prefix = '&'

const config = require('./config.json');
client.config = config;

const { GiveawaysManager } = require('discord-giveaways');

client.giveawayManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#00FBFF",
        embedColorEnd: "#FF00E0",
        reactions: '🎉'
    }
});
//here make variable for polls

client.on('message', async (message) => {

if (message.channel.type === 'dm') return;

let sazgr = message.guild.members.cache.find(saz => saz.id === '688052882129682499')
let misteree = message.guild.members.cache.find(ee => ee.id === '632506405370200084')
let nihilo =  message.guild.members.cache.find(nihil => nihil.id === '688776325212667926')
let uhd = message.guild.members.cache.find(uh => uh.id === '559479208007696395')
let gato = message.guild.members.cache.find(gato => gato.id === '694488949980135444')
let shamanApprentice  = message.guild.roles.cache.find(appren => appren.id === '712346176220954664')
let shamanMaster  = message.guild.roles.cache.find(master => master.id === '712346843849424926')
let shamanHighlord  = message.guild.roles.cache.find(lord => lord.id === '712346899209781338')

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const kosList = new Discord.MessageEmbed()
    .setColor('#FF000F ')
    .setTitle('KOS List')
    .setDescription('This is OS clan\'s KOS list')
    .addFields(
        { name: 'Clan KOS:', value: `- All of TaCo clan
        - All of REAL clan
        - All of BBG2 clan
        - Most of BFB clan
        - Most of -GK- clan
        - Most of * * * * clan`},
        { name: 'Player KOS:', value: `- Neptune aka Galatea(-GK-)
        - Jupiter (-GK-)
        - NateFreezes (****)
        - KidFlash (TaCo)
        - Hiddeinnn (TaCo)| but he spares bossers
        - 69Dot (VC)
        - Asta (BFB)
        - asui (-GK-)
        - MAGEOfJUSTICE (TaCo)
        - LegendsNeverDie4
        - Gronun
        - LXV (BBG2)
        - Scrizen (BBG2)
        - Kayan (BBG2)
        - ooMINATOoo (BBG2)
        - LIPER (sSs)
        - ibss (BFB)
        - Aelin (BFB)
        - arrow000acenova (BBG2)
        - Zuhaer (Ivy)
        
        Dm <@${gato.user.id}> to update the list
        Type \`${prefix}kos 2\` to open second page`}
    )

    const kos2 = new Discord.MessageEmbed()
    .setTitle("KOS list")
    .setColor('#FF000F ')
    .setDescription("This is OS clan's kos")
    .addFields(
        {name : 'Player KOS 2', value: `- Arvis (Amit)
        - Hexraerdaz (TaCo)
        - IcyNipples
        - Triplebaka101
        - Jabberwocky (Ivy) --> suggested by <@${uhd.user.id}>
        - SOCCERGOD --> suggested by <@${misteree.user.id}>
        - Dest (-GK-) --> suggested by <@${misteree.user.id}>
        - gangstercat --> suggested by <@${misteree.user.id}>
        - 69dot --> suggested by <@${misteree.user.id}>
        `}
    )

    if(message.content == 'OSNAMBAWAN'){
        message.reply("OSNAMBAWAN!!!!");
    }

    if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
       const helpEmbed = new Discord.MessageEmbed()
        .setColor('#06F6DD')
        .setTitle('Order of The Shamans', 'https://discord.gg/7kRxgg3')
        .setDescription(`Hi! I'm the OS's official bot, nice to meet you, My creator was a mage in this clan
        I'm pretty sure he's called "GatotKaca <:mage:713701096966717471>", he created me to help OS clan in discord , I'm still new so I don't have many commands. Here's my command`)
        .setThumbnail('https://i.imgur.com/OCHoFgH.png')
        .setAuthor( 'OS Official Bot', 'https://i.imgur.com/OCHoFgH.png')
        .addFields(
            { name: '__Member commands:__', value: "```kos \nhelp  \nunkos \nlibrary \nwarrior library \nshaman library \narcher library \nmage library \nrank``` ", inline: true},
            { name: '__Admin commands:__', value: "```kick \nban \ntempmute \nunmute```", inline: true}
        )
        .setFooter('OS NUMBA WANN ')

        message.channel.send(helpEmbed)
        } else {
            message.reply(`You're not OS member yikes gtfo, pepega <:Yikes:718741173035859999>
            `)
        }
       
    } else 
    if (message.content.toLowerCase() === (`${prefix}kos`)) {

        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
           
            message.channel.send(kosList)
        
           
        } else {
            message.reply('You don\'t have permission U PEPEGA <:Yikes:718741173035859999>')
        }

        
    } else
    if (command === 'unkos') {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {

            const unKos = new Discord.MessageEmbed()
            .setTitle('UnKOS List')
            .setDescription('This is OS clan UnKOS list!')
            .setColor('#F60606 ')
            .addFields(
                { name: 'Player UnKos:', value: `+ Most/Everyone in BOT
                + Kormo
                + Nikitis
                + GllVll
                + SkaadoosH
                + Lasui
                + Zake
                + StarcHy
                + Aphelion
                + Silla
                + Sixtys
                + Halluxia (Alyxia)
                + Zerkupal
                + Aramis <- Not really sure who they are
                `},
                { name: 'Clan UnKos:', value: 'Nothing cuz BL is suck <:pepelaugh:712506193788272701>'}
            )
            
            message.channel.send(unKos)
        
        } else {
            message.reply(`You don't have permission <:pepelaugh:712506193788272701>`)
        }

    } else
    if (command === 'library') {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const library = new Discord.MessageEmbed()
            .setColor('#06F60A ')
            .setTitle('Library!')
            .setDescription('This is OS clan\'s personal `library`')
            .addFields(
                { name: 'Warrior Books <:warrior:713701040519905330>:', value: `dm <@${sazgr.user.id}> to obtain the books
                dm <@${nihilo.user.id}> to obtain the books 
                type \`${prefix}warrior library\` for more information`},
                { name: 'Shaman Books <:shaman:713463624450179212>:', value: `dm <@${misteree.user.id}> to obtain the books
                dm <@${nihilo.user.id}> to obtain the books
                type \`${prefix}shaman library\` for more information`},
                { name: 'Mage Books <:mage:713701096966717471>:', value: `dm <@${sazgr.user.id}> to obtain the books
                dm <@${nihilo.user.id}> to obtain the books
                type \`${prefix}mage library\` for more information`},
                { name: 'Archer Books <:archer:713701070714437722>:', value: `dm <@${nihilo.user.id}> to obtain the books
                type \`${prefix}archer library\` for more information`}
            )

            message.channel.send(library)
        } else {
            message.reply(`You don't have permission lmao <:pepelaugh:712506193788272701>`)
        }
    } else 
    if (message.content.toLowerCase().startsWith(`${prefix}warrior library`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const warriorLibrary = new Discord.MessageEmbed()
            .setTitle('Warrior Library <:warrior:713701040519905330>')
            .setColor('ad3f17 ')
            .setDescription('This is ~OS~ clan\'s personal `warrior library`')
            .addFields(
                { name: `Sazgr's warrior books:`, value: `<:warriorbook:747473472145326163> Colossal Reconstruction = :white_check_mark::negative_squared_cross_mark::white_check_mark:
                <:warriorbook:747473472145326163> Slash = :white_check_mark: 
                <:warriorbook:747473472145326163> Crescent Swipe = :white_check_mark: 
                <:warriorbook:747473472145326163> Bulkwark = :white_check_mark: 
                <:warriorbook:747473472145326163> Taunt = :white_check_mark:
                <:warriorbook:747473472145326163> Crusader's Courage = :white_check_mark:
                <:warriorbook:747473472145326163> Unholy Warcry = :white_check_mark:
                <:warriorbook:747473472145326163> Centrifugal Laceration = :white_check_mark:
                <:warriorbook:747473472145326163> Armor Reinforcement = :white_check_mark: 
                pls dm <@${sazgr.user.id}> to obtain the books
                type \`${prefix}[name of books]\` for detailed information `}
            )
             
            message.channel.send(warriorLibrary)
        } else {
            message.reply(`You don't have permission to use this command`)
        }
    } else 
    if (message.content.toLowerCase().startsWith(`${prefix}mage library`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            let mageLibrary = new Discord.MessageEmbed()
            .setTitle('Mage Library <:mage:713701096966717471>')
            .setColor('00f2ff ')
            .setDescription('This is ~OS~ clan\'s personal `mage library`')
            .addFields(
                { name: ` Sazgr's and ExNihilo's mage books:`, value : `<:magebook:747473707932582042> Icicle Orb = \:white_check_mark:
                <:magebook:747473707932582042> Chilling Radiance = \:white_check_mark:
                <:magebook:747473707932582042> Ice Bolt = \:white_check_mark:
                <:magebook:747473707932582042> Hypotermic Frenzy = \:white_check_mark:
                <:magebook:747473707932582042> Ice Shield = \:white_check_mark:
                <:magebook:747473707932582042> Enchantments = \:white_check_mark:
                <:magebook:747473707932582042> Arctic Aura = \:white_check_mark:
                pls dm <@${sazgr.user.id}> and <@${nihilo.user.id}> to obtain the books `}
            )
            message.channel.send(mageLibrary)

        } else {
            message.reply(`You dont have permission to use this command`)
        }
    } else 
    if (message.content.toLowerCase().startsWith(`${prefix}shaman library`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const shamanLibrary = new Discord.MessageEmbed()
            .setTitle('Shaman Library <:shaman:713463624450179212>')
            .setColor('0000ff ')
            .setDescription('This is ~OS~ clan\'s personal `shaman library`')
            .addFields(
                { name: `MisterEE/UltraMarine's and ExNihilo's shaman books:`, value: `<:shamanbook:747474128923000993> Decay = \:white_check_mark:
                <:shamanbook:747474128923000993> Revitalize = \:white_check_mark:
                <:shamanbook:747474128923000993> Mend = \:white_check_mark:
                <:shamanbook:747474128923000993> Spirit Animal = \:white_check_mark:
                <:shamanbook:747474128923000993> Soul Harvest = \:white_check_mark:
                <:shamanbook:747474128923000993> Plague Spreader = \:white_check_mark:
                <:shamanbook:747474128923000993> Agonize = \:white_check_mark:
                <:shamanbook:747474128923000993> Healing Totem = \:white_check_mark:
                pls dm <@${misteree.user.id}> or <@${nihilo.user.id}> to obtain the books  `}
            )
            message.channel.send(shamanLibrary)
        } else {
            message.reply(`You don't have permission to use this command`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}archer library`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const archerLibrary = new Discord.MessageEmbed()
            .setTitle('Archer Library <:archer:713701070714437722>')
            .setColor('00ff00 ')
            .setDescription('This is ~OS~ clan\'s personal `archer book`')
            .addFields(
                { name: 'ExNihilo\'s archer books', value: `<:archerbook:747473966482063420> Swift Shot = \:white_check_mark:
                <:archerbook:747473966482063420> Precise Shot = \:white_check_mark:
                <:archerbook:747473966482063420> Invigorate = \:white_check_mark:
                <:archerbook:747473966482063420> Temporal Dilation = \:white_check_mark:
                <:archerbook:747473966482063420> Pathfinding = \:white_check_mark:
                pls dm <@${nihilo.user.id}> to obtain the books `}
            )
            message.channel.send(archerLibrary)
        } else {
            message.reply(`You don't have permission to use this command`)
        }
    } else 
    if (command === 'rank') {
        if ( message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const rankEmbed = new Discord.MessageEmbed()
            .setTitle('OS Discord Rank <:osnumbawan:713088262838681731>')
            .setColor('00ff00 ')
            .setDescription('Order Of the Shamans has their own rank at discord, the ranks shows your contribution')
            .addFields(
                { name: `Shaman Apprentice`, value: `Shaman Apprentice Is the rank/role that you gained after joining OS, it contains clan members and assistants`},
                { name: `Shaman Master`, value: `Shaman Master Is the rank/role that you gained after you achieve Officer role in game, you must prove your existence to obtain this role`},
                { name: `Shaman Highlord`, value: `Shaman HIghlord Is the highest rank/role that you can achieve in this discord. Because Shaman Highlord = owner clan, just fyi, Shaman Highlord role is \`almost impossible\` `}
            )

            message.channel.send(rankEmbed)
        } else {
            message.reply(`You're not even in OS clan <:Yikes:718741173035859999>`)
        }
    } else 
    if (message.content.toLowerCase().startsWith(`${prefix}kos 2`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            let gato = message.guild.members.cache.find(gato => gato.id === '694488949980135444')
            message.channel.send(kos2)
        } else {
            message.reply(`You don't have permission to use this command`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}colossal reconstruction`) || message.content.toLowerCase().startsWith(`${prefix}coloss`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const coloss = new Discord.MessageEmbed()
            .setTitle('Colossal Reconstruction')
            .setColor('ad3f17 ') 
            .addFields(
                { name: `Type : Warrior <:warrior:713701040519905330> \nName: Colossal Reconstruction <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = \:white_check_mark:
                <:warriorbook:747473472145326163> Level 3 = \:x: 
                <:warriorbook:747473472145326163> Level 4 = \:white_check_mark:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
            )
            message.channel.send(coloss)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else 
    if (message.content.toLowerCase().startsWith(`${prefix}unholy warcry`) || message.content.toLowerCase().startsWith(`${prefix}warcry`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const unholy = new Discord.MessageEmbed()
            .setTitle('Unholy Warcry')
            .setColor('ad3f17 ') 
            .addFields(
                { name: `Type : Warrior <:warrior:713701040519905330> \nName: Unholy Warcry <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = \:white_check_mark:
                <:warriorbook:747473472145326163> Level 3 = \:x: 
                <:warriorbook:747473472145326163> Level 4 = \:white_check_mark: (last stock!)
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
            )
            message.channel.send(unholy)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}crusader courage`) || message.content.toLowerCase().startsWith(`${prefix}crusader`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const crusader = new Discord.MessageEmbed()
            .setTitle('Crusader Courage')
            .setColor('ad3f17 ') 
            .addFields(
                { name: `Type : Warrior <:warrior:713701040519905330> \nName: Crusader Courage <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = \:white_check_mark:
                <:warriorbook:747473472145326163> Level 3 = \:x: 
                <:warriorbook:747473472145326163> Level 4 = \:white_check_mark:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
            )
            message.channel.send(crusader)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}bulkwark`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const bulkwark = new Discord.MessageEmbed()
            .setTitle('Bulkwark')
            .setColor('ad3f17 ') 
            .addFields(
                { name: `Type : Warrior <:warrior:713701040519905330> \nName: Bulkwark <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = \:white_check_mark:
                <:warriorbook:747473472145326163> Level 3 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 4 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 5 = \:x:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
            )
            message.channel.send(bulkwark)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}slash`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const slash = new Discord.MessageEmbed()
            .setTitle('Slash')
            .setColor('ad3f17 ') 
            .addFields(
                { name: `Type : Warrior <:warrior:713701040519905330> \nName: Slash <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = \:white_check_mark:
                <:warriorbook:747473472145326163> Level 3 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 4 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 5 = \:x:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
            )
            message.channel.send(slash)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else 
    if (message.content.toLowerCase().startsWith(`${prefix}crescent swipe`) || message.content.toLowerCase().startsWith(`${prefix}swipe`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const crescent = new Discord.MessageEmbed()
            .setTitle('Crescent Swipe')
            .setColor('ad3f17 ') 
            .addFields(
                { name: `Type : Warrior <:warrior:713701040519905330> \nName: Crescent Swipe <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = \:white_check_mark:
                <:warriorbook:747473472145326163> Level 3 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 4 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 5 = \:x:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
            )
            message.channel.send(crescent)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else 
    if (message.content.toLowerCase().startsWith(`${prefix}taunt`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Taunt = new Discord.MessageEmbed()
            .setTitle('Taunt')
            .setColor('ad3f17 ') 
            .addFields(
                { name: `Type : Warrior <:warrior:713701040519905330> \nName: Taunt <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = \:white_check_mark:
                <:warriorbook:747473472145326163> Level 3 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 4 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 5 = \:white_check_mark:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
            )
            message.channel.send(Taunt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}centrifugal laceration`) || message.content.toLowerCase().startsWith(`${prefix}centri`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Centrifugal = new Discord.MessageEmbed()
            .setTitle('Centrifugal Laceration')
            .setColor('ad3f17 ') 
            .addFields(
                { name: `Type : Warrior <:warrior:713701040519905330> \nName: Centrifugal Laceration <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = \:white_check_mark:
                <:warriorbook:747473472145326163> Level 3 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 4 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 5 = \:white_check_mark:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
            )
            message.channel.send(Centrifugal)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}armor reinforcement`) || message.content.toLowerCase().startsWith(`${prefix}reinforcement`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const centrifugal = new Discord.MessageEmbed()
            .setTitle('Armor Reinforcement')
            .setColor('ad3f17 ') 
            .addFields(
                { name: `Type : Warrior <:warrior:713701040519905330> \nName: Armor Reinforcement <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = \:white_check_mark:
                <:warriorbook:747473472145326163> Level 3 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 4 = \:white_check_mark: 
                <:warriorbook:747473472145326163> Level 5 = \:white_check_mark:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
            )
            message.channel.send(centrifugal)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else 
    if (message.content.toLowerCase().startsWith(`${prefix}icicle orb`) || message.content.toLowerCase().startsWith(`${prefix}orb`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Icicle = new Discord.MessageEmbed()
            .setAuthor('Icicle Orb', 'https://i.imgur.com/01f8plG.png')
            .setColor('00f2ff ') 
            .addFields(
                { name: `Type : Mage <:mage:713701096966717471> \nName: Icicle Orb <:magebook:747473707932582042>`, value: `<:magebook:747473707932582042> Level 2 = \:x:
                <:magebook:747473707932582042> Level 3 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 4 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 5 = \:white_check_mark:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0) and <@${nihilo.user.id}> `}
            )
            message.channel.send(Icicle)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}chilling radiance`) || message.content.toLowerCase().startsWith(`${prefix}chill`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const radiance = new Discord.MessageEmbed()
            .setAuthor('Chilling Radiance', 'https://i.imgur.com/QZc6MIx.png')
            .setColor('00f2ff ') 
            .addFields(
                { name: `Type : Mage <:mage:713701096966717471> \nName: Chilling Radiance <:magebook:747473707932582042>`, value: `<:magebook:747473707932582042> Level 2 = \:white_check_mark:
                <:magebook:747473707932582042> Level 3 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 4 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 5 = \:white_check_mark:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0) and <@${nihilo.user.id}> `}
            )
            message.channel.send(radiance)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}ice shield`) || message.content.toLowerCase().startsWith(`${prefix}shield`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const shield = new Discord.MessageEmbed()
            .setAuthor('Ice Shield', 'https://i.imgur.com/aALdlEh.png')
            .setColor('00f2ff ') 
            .addFields(
                { name: `Type : Mage <:mage:713701096966717471> \nName: Ice Shield <:magebook:747473707932582042>`, value: `<:magebook:747473707932582042> Level 2 = \:x:
                <:magebook:747473707932582042> Level 3 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 4 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 5 = \:white_check_mark:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0) and <@${nihilo.user.id}> `}
            )
            message.channel.send(shield)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}hypothermic frenzy`) || message.content.toLowerCase().startsWith(`${prefix}frenzy`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const hypothermic = new Discord.MessageEmbed()
            .setAuthor('Hypothermic Frenzy', 'https://i.imgur.com/aMQO89W.png')
            .setColor('00f2ff ') 
            .addFields(
                { name: `Type : Mage <:mage:713701096966717471> \nName: Hypothermic Frenzy <:magebook:747473707932582042>`, value: `<:magebook:747473707932582042> Level 2 = \:x:
                <:magebook:747473707932582042> Level 3 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 4 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 5 = \:white_check_mark:
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0) and <@${nihilo.user.id}> `}
            )
            message.channel.send(hypothermic)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}enchantments`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const enchant = new Discord.MessageEmbed()
            .setAuthor('Enchantment', 'https://i.imgur.com/NSnJjv1.png')
            .setColor('00f2ff ') 
            .addFields(
                { name: `Type : Mage <:mage:713701096966717471> \nName: Enchantments <:magebook:747473707932582042>`, value: `<:magebook:747473707932582042> Level 2 = \:x:
                <:magebook:747473707932582042> Level 3 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 4 = \:white_check_mark: 
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0) and <@${nihilo.user.id}> `}
            )
            message.channel.send(enchant)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else 
    if (message.content.toLowerCase().startsWith(`${prefix}arctic aura`) || message.content.toLowerCase().startsWith(`${prefix}aura`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const aura = new Discord.MessageEmbed()
            .setAuthor('Arctic Aura', 'https://i.imgur.com/FK4WBjG.png')
            .setColor('00f2ff ') 
            .addFields(
                { name: `Type : Mage <:mage:713701096966717471> \nName: Arctic Aura <:magebook:747473707932582042>`, value: `<:magebook:747473707932582042> Level 2 = \:white_check_mark:
                <:magebook:747473707932582042> Level 3 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 4 = \:white_check_mark: 
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0) and <@${nihilo.user.id}> `}
            )
            message.channel.send(aura)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}ice bolt`) || message.content.toLowerCase().startsWith(`${prefix}bolt`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setAuthor('Ice Bolt', 'https://i.imgur.com/Ix7awLF.png')
            .setColor('00f2ff ') 
            .addFields(
                { name: `Type : Mage <:mage:713701096966717471> \nName: Ice Bolt <:magebook:747473707932582042>`, value: `<:magebook:747473707932582042> Level 2 = \:white_check_mark:
                <:magebook:747473707932582042> Level 3 = \:white_check_mark: 
                <:magebook:747473707932582042> Level 4 = \:white_check_mark:
                <:magebook:747473707932582042> Level 5 = \:white_check_mark:  
                This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0) and <@${nihilo.user.id}> `}
            )
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}agonize`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setAuthor('Agonize', 'https://i.imgur.com/mx3MmuN.png')
            .setColor('0000ff ') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Agonize <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 5 = \:white_check_mark:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}revitalize`) || message.content.toLowerCase().startsWith(`${prefix}rev`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setAuthor('Revitalize', 'https://i.imgur.com/N23myft.png')
            .setColor('0000ff ') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Revitalize <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 5 = \:white_check_mark:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}healing totem`) || message.content.toLowerCase().startsWith(`${prefix}totem`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setAuthor('Healing Totem', 'https://i.imgur.com/6bjYO0C.png')
            .setColor('0000ff ') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Healing Totem <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}canine howl`) || message.content.toLowerCase().startsWith(`${prefix}howl`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setAuthor('Canine Howl', 'https://i.imgur.com/kv1f5a7.png')
            .setColor('0000ff ') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Canine Howl <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 5 = \:white_check_mark:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}spirit animal`) || message.content.toLowerCase().startsWith(`${prefix}spirit`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setAuthor('Spirit Animal', 'https://i.imgur.com/BdgGayF.png')
            .setColor('0000ff ') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Spirit Animal <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 5 = \:white_check_mark:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}mend`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setAuthor('Mend', 'https://i.imgur.com/vNZ3hNZ.png')
            .setColor('0000ff ') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Mend <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 5 = \:x:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}decay`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('0000ff ')
            .setAuthor('Decay', 'https://i.imgur.com/btdXRQy.png') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Decay <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 5 = \:white_check_mark:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}mimir`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('0000ff ')
            .setAuthor(`Mimir's Well`, 'https://i.imgur.com/FEzqwrW.png') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Mimir's Well <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 5 = \:white_check_mark:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}plague spreader`) || message.content.toLowerCase().startsWith(`${prefix}plague`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('0000ff ')
            .setAuthor(`Plague Spreader`, 'https://i.imgur.com/VSPiLia.png') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Plague Spreader <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 5 = \:white_check_mark:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}soul harvest`) || message.content.toLowerCase().startsWith(`${prefix}soul`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('0000ff ')
            .setAuthor(`Soul Harvest`, 'https://i.imgur.com/cQThcEr.png') 
            .addFields(
                { name: `Type : Shaman <:shaman:713463624450179212> \nName: Soul Harvest <:shamanbook:747474128923000993>`, value: `<:shamanbook:747474128923000993> Level 2 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 3 = \:white_check_mark: 
                <:shamanbook:747474128923000993> Level 4 = \:white_check_mark:
                <:shamanbook:747474128923000993> Level 5 = \:white_check_mark:  
                This data according to <@${misteree.user.id}> and <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}precise shot`) || message.content.toLowerCase().startsWith(`${prefix}precise`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('00ff00 ')
            .setAuthor(`Precise Shot`, 'https://i.imgur.com/tzh9btj.png') 
            .addFields(
                { name: `Type : Archers <:archer:713701070714437722> \nName: Precise Shot <:archerbook:747473966482063420>`, value: `<:archerbook:747473966482063420> Level 2 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 3 = \:white_check_mark: 
                <:archerbook:747473966482063420> Level 4 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 5 = \:white_check_mark:  
                <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}poison arrow`) || message.content.toLowerCase().startsWith(`${prefix}poison`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('00ff00 ')
            .setAuthor(`Poison Arrow`, 'https://i.imgur.com/QjzqoF2.png') 
            .addFields(
                { name: `Type : Archers <:archer:713701070714437722> \nName: Poison Arrow <:archerbook:747473966482063420>`, value: `<:archerbook:747473966482063420> Level 2 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 3 = \:white_check_mark: 
                <:archerbook:747473966482063420> Level 4 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 5 = \:white_check_mark:  
                <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}invigorate`) || message.content.toLowerCase().startsWith(`${prefix}invig`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('00ff00 ')
            .setAuthor(`Invigorate`, 'https://i.imgur.com/EJgz9Vu.png') 
            .addFields(
                { name: `Type : Archers <:archer:713701070714437722> \nName: Invigorate <:archerbook:747473966482063420>`, value: `<:archerbook:747473966482063420> Level 2 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 3 = \:white_check_mark: 
                <:archerbook:747473966482063420> Level 4 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 5 = \:white_check_mark:  
                <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}cranial puncture`) || message.content.toLowerCase().startsWith(`${prefix}cranial`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('00ff00 ')
            .setAuthor(`Cranial Punctures`, 'https://i.imgur.com/LjhXEZS.png') 
            .addFields(
                { name: `Type : Archers <:archer:713701070714437722> \nName: Cranial Puncture <:archerbook:747473966482063420>`, value: `<:archerbook:747473966482063420> Level 2 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 3 = \:white_check_mark: 
                <:archerbook:747473966482063420> Level 4 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 5 = \:white_check_mark:  
                <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}pathfinding`) || message.content.toLowerCase().startsWith(`${prefix}path`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('00ff00 ')
            .setAuthor(`Pathfinding`, 'https://i.imgur.com/qaQIQla.png') 
            .addFields(
                { name: `Type : Archers <:archer:713701070714437722> \nName: Pathfinding <:archerbook:747473966482063420>`, value: `<:archerbook:747473966482063420> Level 2 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 3 = \:white_check_mark: 
                <:archerbook:747473966482063420> Level 4 = \:white_check_mark:  
                <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}temporal dilation`) || message.content.toLowerCase().startsWith(`${prefix}temporal`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('00ff00 ')
            .setAuthor(`Temporal Dilation`, 'https://i.imgur.com/gN4gTcQ.png') 
            .addFields(
                { name: `Type : Archers <:archer:713701070714437722> \nName: Temporal Dilation <:archerbook:747473966482063420>`, value: `<:archerbook:747473966482063420> Level 2 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 3 = \:white_check_mark: 
                <:archerbook:747473966482063420> Level 4 = \:white_check_mark: 
                <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}serpent arrow`) || message.content.toLowerCase().startsWith(`${prefix}serpent`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('00ff00 ')
            .setAuthor(`Serpent Arrows`, 'https://i.imgur.com/jSFx3yA.png') 
            .addFields(
                { name: `Type : Archers <:archer:713701070714437722> \nName: Serpent Arrows <:archerbook:747473966482063420>`, value: `<:archerbook:747473966482063420> Level 2 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 3 = \:white_check_mark: 
                <:archerbook:747473966482063420> Level 4 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 5 = \:white_check_mark:  
                <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase().startsWith(`${prefix}swift shot`) || message.content.toLowerCase().startsWith(`${prefix}swift`)) {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const Bolt = new Discord.MessageEmbed()
            .setColor('00ff00 ')
            .setAuthor(`Swift Shot`, 'https://i.imgur.com/Qon2Gk4.png') 
            .addFields(
                { name: `Type : Archers <:archer:713701070714437722> \nName: Swift Shot <:archerbook:747473966482063420>`, value: `<:archerbook:747473966482063420> Level 2 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 3 = \:white_check_mark: 
                <:archerbook:747473966482063420> Level 4 = \:white_check_mark:
                <:archerbook:747473966482063420> Level 5 = \:white_check_mark:  
                <@${nihilo.user.id}> books inventory!
                donating books is very allowed `}
            )
            
            message.channel.send(Bolt)
        } else {
            message.reply(`You're not even in OS clan lmaoo`)
        }
    } else
    if (message.content.toLowerCase() == `${prefix}shaman apprentice`) {
        let team1 = message.guild.roles.cache.get('712346176220954664').members.map((member) => `<@${member.id}>`).join('\n');
        message.channel.send({embed: {
            title: `List of the Shaman Apprentice!`,
            color: `#00FF0C `,
            description: `${team1}`,
            footer: {
                text: 'You can type `&shaman [tier] to more` '
            }
        }})
    } else
    if (message.content.toLowerCase() == `${prefix}shaman master`) {
        let team1 = message.guild.roles.cache.get('712346843849424926').members.map((member) => `<@${member.id}>`).join('\n');
        message.channel.send({embed: {
            title: `List of the Shaman Master!`,
            color: `#FF00F0 `,
            description: `${team1}`,
            footer: {
                text: 'You can type `&shaman [tier] to more` '
            }
        }})
    } else
    if (message.content.toLowerCase() == `${prefix}shaman highlord`) {
        let team1 = message.guild.roles.cache.get('712346899209781338').members.map((member) => `<@${member.id}>`).join('\n');
        message.channel.send({embed: {
            title: `List of the Shaman Highlord?`,
            color: `#FF9E00 `,
            description: `cmon dude everybody know if Shaman Highlord is only \n${team1}`,
            footer: {
                text: 'You can type `&shaman [tier] to more` '
            }
        }})
    } else
    if (command === 'osgmake') {
        if (!message.member.roles.cache.has('712372685484720201')) return message.channel.send('You are not allowed to start a giveaway!');

        let channel = message.mentions.channels.first();

        if (!channel) return message.channel.send('Please provide me a channel mentions!');

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('You are not using the correct formatting time in ms!');

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid winner number!');

        let giveawayPrize = args.slice(3).join(" ");
        if (!giveawayPrize) return message.channel.send('Okay then I will giveaway nothing')

        client.giveawayManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: client.config.hostedBy ? message.author : null,

            messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "") + "<a:givekiri:752066019396288512><a:givekiri:752066019396288512> **GIVEAWAY** <a:givekanan:752066019496951848><a:givekanan:752066019496951848>",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "") + "<a:givekiri:752066019396288512><a:givekiri:752066019396288512> **GIVEAWAY ENDED** <a:givekanan:752066019496951848><a:givekanan:752066019496951848>",
            timeRemaining: "Time remaining: **{duration}**",
            inviteToParticipate: "React with 🎉 to enter",
            winMessage: "Congratulations! {winners}, you won the **{prize}**",
            embedFooter: "Giveaway time!",
            noWinner: "Couldn't determine a winner!",
            hostedBy: "Hosted by {user}",
            winners: "winners",
            endedAt: "Ends At",
            units: {
                seconds: "seconds",
                minutes: "minutes",
                hours: "hours",
                days: "days",
                pluralS: false
            }
        }
        })
        message.channel.send(`Giveaway starting in ${channel}`);
    } else
    if (command === 'reroll') {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to reroll a giveaways");

        if (!args[0]) return message.channel.send("No giveaway ID provided");

        let giveaway = client.giveawayManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawayManager.giveaways.find((g) => g.messageID === args[0]);

        if (!giveaway) return message.channel.send("Cannot find an giveaway with that ID!");

        client.giveawayManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Giveaway rerolled')
        }).catch((e) => {
            if (e.startsWith(`Giveaway with ID ${giveaway.messageID} is not ended`)) {
                message.channel.send("This giveaway hasn't ended yet") 
            } else {
                console.error(e);
                message.channel.send('An error occured')
            }
        })
    } else
    if (command === 'end') {
        if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
            return message.channel.send(':x: You need to have the manage messages permissions to reroll giveaways.');
        }
    
       
        if(!args[0]){
            return message.channel.send(':x: You have to specify a valid message ID!');
        }
    
        
        let giveaway = 
        
        client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
       
        client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);
    
        
        if(!giveaway){
            return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') + '`.');
        }
    
        
        client.giveawaysManager.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        })
     
        .then(() => {
     
            message.channel.send('Giveaway will end in less than '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)){
                message.channel.send('This giveaway is already ended!');
            } else {
                console.error(e);
                message.channel.send('An error occured...');
            }
        });
    
    
    } else 
    if (command === 'poll') {
        let pollMessage = args[0];
        let aggree = args[1];
        let disagree = args[2];
        const agreeEmoji = '<a:verified:753654287338569778>'
        const disagreeEmoji = '<:no:753654286134542447>'
        if (!pollMessage) return message.reply("What are you going to poll?")
        if (!aggree) return message.reply('Please insert the aggree statement')
        if (!disagree) return message.reply("Please insert the disagree statement")
        const pollEmbed = new Discord.MessageEmbed()
        .setTitle('Poll!')
        .setColor('#00FF2A')
        .addFields(
            { name: pollMessage, value: `
            <a:verified:753654287338569778> ${aggree}
            
            <:no:753654286134542447> ${disagree}`}
        )
        
        message.delete();
        let msg = await message.channel.send(pollEmbed);
        await msg.react('753654287338569778')
        await msg.react('753654286134542447')
 
        
        const filter = (reaction, user) => reaction.emoji.name === '<a:verified:753654287338569778>' || reaction.emoji.name === '<:no:753654286134542447>'

        const result = msg.awaitReactions(filter, {time: 5000});
        message.channel.send(`Voting is complete! agree: ${result.get('<a:verified:753654287338569778>').count-1}`)


    }

})
client.on('message', (message) => {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'kick'){
        if (message.member.hasPermission('KICK_MEMBERS')) {
            const userKick = message.mentions.users.first() || args.slice(1).join(' ');
            let reason = args.slice(1).join(' ');
            const modLog = client.channels.cache.find(channel => channel.id === '747499541812478054');

            if (userKick.hasPermission('KICK_MEMBERS')) return message.channel.send({embed: {
                color: 15158332,
                author: {
                    name: 'OS Official Bot',
                    icon_url: 'https://i.imgur.com/OCHoFgH.png'
                },
                description: `\:rofl: You can't kick an admin lmaoo \:rofl:`,
                image: {
                    url: 'https://media.giphy.com/media/3oEdv07JVXwhImYGWc/giphy.gif'
                },
            }})

            if (!reason) return message.reply('Pls provide me a reason!')

            if (userKick) {
                var member = message.guild.member(userKick);
    
                if (member) {
                    member.kick(reason).then(() => {
                        modLog.send({embed: {
                            color: 15158332,
                            author: {
                                name: 'OS Official Bot',
                                icon_url: 'https://i.imgur.com/OCHoFgH.png'
                            },
                            fields: [
                                {
                                name: `Kicked:`,
                                value: `${userKick.tag}`,
                                inline: true
                                },
                                {
                                name: `Reason:`,
                                value: `${reason}`,
                                inline: false
                                },
                                {
                                name: 'Responsible moderator:',
                                value: `<@${message.author.id}>`
                                }
                            ],
                            
                        }})
                        message.channel.send({embed: {
                            color: 15158332,
                            author: {
                                name: 'OS Official Bot',
                                icon_url: 'https://i.imgur.com/OCHoFgH.png'
                            },
                            description: `kicked <@${userKick.id}> from the server!`,
                            fields: [{
                                name: 'Reason:',
                                value: reason,
                                inline: false
                            }]
                        }});
                    }).catch(err => {
                        message.reply(`I was not able to kick that user.`)
                        console.log(err);
                    })
                } else {
                    message.reply('that user is not in the server.')
                }
            } else {
                message.reply('you need to state the person you want to kick')
            }
        } else {
            message.reply(`You don't have permission to use this command`)
        }
    } else
    if (command === 'tempmute') {
        if (message.member.hasPermission('MUTE_MEMBERS')) {
        
            let person = message.guild.member(message.mentions.users.first() || message.guild.member(args[1]) || args.slice(2).join(' '));

            if (!person) return message.reply('Bruh, what\'s wrong with you, or do you want me to mute a ghost? That\'s funny though');
            if (person.hasPermission('MUTE_MEMBERS')) return message.channel.send({embed: {
                color: 15158332,
                author: {
                    name: 'OS Official Bot'
                },
                description: 'You can\'t mute an admin lmao',
                image: {
                    url: 'https://media.giphy.com/media/3oEdv07JVXwhImYGWc/giphy.gif'
                }
            }})

            let mainrole = message.guild.roles.cache.find(role => role.name === 'VG');
            let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
            let time = args[1];
            let reason = args.slice(2).join(' ');
            const tempmuteLog = message.guild.channels.cache.find(channel => channel.id === '747499541812478054');


            if (!muterole) {
                message.channel.send('this channel does not include a mute role...I will create one!');
                
            } else 
            if (!time) {
                return message.reply('please enter a time to mute the user for!')
            } else 
            if (!reason) {
                return message.reply('please enter the reason why u mute him/her/it')
            }

            person.roles.remove(mainrole.id);
            person.roles.add(muterole.id);

            message.channel.send({embed: {
                color: 0x0099ff,
                author: {
                    name: 'OS Official Bot'
                },
                description: `\:hammer: Bippity Boppity! <@${person.user.id}> has been muted for ${ms(ms(time))}`,
                fields: [{
                    name: 'Reason:',
                    value: reason,
                    inline: false
                }] 
            }});

                tempmuteLog.send({embed: {
                    color: 15158332,
                    author: {
                        name: 'OS Official Bot',
                        icon_url: 'https://i.imgur.com/OCHoFgH.png'
                    },
                    fields: [
                        {
                        name: `Temporarly muted!`,
                        value: `${person.user.tag}`,
                        },
                        {
                        name: 'Reason:',
                        value: reason,
                        },
                        {
                        name: 'Duration',
                        value: `${ms(ms(time))}`
                        },
                        {
                        name: 'Responsible moderator:',
                        value: `<@${message.author.id}>`
                        }
                    ]
                }})

                person.send({embed: {
                    color: 15158332,
                    author: {
                        name: 'OS Official Bot',
                        icon_url: 'https://i.imgur.com/OCHoFgH.png'
                    },
                    title: '\:lock: You have been temporarly muted from OS Server! \:mute:',
                    fields: [
                        {
                        name: 'Reason:',
                        value: reason,
                        inline: false
                        },
                        {
                        name: 'Duration:',
                        value: time,
                        inline: false
                        },
                        {
                        name: 'Responsible Moderator',
                        value: `<@${message.author.id}>`
                        }
                    ],
                }})
            
                setTimeout(function () {
                    person.roles.add(mainrole.id);
                    person.roles.remove(muterole.id);
                    if (person.roles.cache.has(mainrole.id)) return;
                    message.channel.send({embed: {
                        color: 0x0099ff,
                        author: {
                            name: 'OS Official Bot'
                        },
                        description: `Hup! Hup! ${ms(ms(time))} has passed! <@${person.user.id}> is now unmuted!`,
                        fields: [{
                            name: 'Reason:',
                            value: 'Mute time expired!',
                            inline: false
                        }]
                    }})
                    person.send({embed: {
                        color: 15158332,
                        author: {
                            name: 'OS Official Bot',
                            icon_url: 'https://i.imgur.com/kUi20Yz.png'
                        },
                        description: '\:unlock: You have been unmuted! \:loud_sound: ',
                        fields: [
                            {
                            name: 'Reason:',
                            value: 'Mute time expired',
                            inline: false
                            },
                            {
                            name: 'Duration:',
                            value: time,
                            inline: false
                            },
                        ],
                    }})
                }, ms(time));
        } else {
            message.reply(`You don't have permission to use this command pepega`)
        }
    } else 
    if (command === 'unmute') {
        if (message.member.hasPermission('MUTE_MEMBERS')) {
            let person = message.guild.member(message.mentions.users.first() || args.slice(1).join(' '));
    
            if (!person) return message.reply('This person is not exist');
            if (person.hasPermission('MUTE_MEMBERS')) return message.channel.send({embed: {
                color: 15158332,
                author: {
                    name: 'OS Official Bot'
                },
                description: '\:weary: You can\'t mute or even unmute an Admin \:triumph:',
                image: {
                    url: 'https://media.giphy.com/media/okrv1eWeKVM9W/giphy.gif'
                }
            }})
    
            let unmuterole = message.guild.roles.cache.find(role => role.name === 'VG');
            let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
            const unmuteLog = message.guild.channels.cache.find(channel => channel.id === '747499541812478054');
            let reason = args.slice(1).join(' ');
    
            if (!muterole) {
                message.reply('this server doesnt have a mute role');
            } else 
            if (!reason) {
                message.reply('please provide a reason why u unmute')
            } 
            if (person.roles.cache.has(unmuterole.id)) return message.reply('Bruh focus! he\'s already muted before u type this command')
                person.roles.remove(muterole.id);
                person.roles.add(unmuterole.id);
        
                message.channel.send({embed: {
                    color: 3066993,
                    author: {
                        name: 'OS Official Bot'
                    },
                    description: `<@${person.user.id}> has been unmuted by the admin`,
                    fields: [{
                        name: 'Reason:',
                        value: reason,
                        inline: false
                    },
                {
                    name: 'Responsible moderator:',
                    value: `<@${message.author.id}>`
                }]
                }})

            unmuteLog.send({embed: {
                color: 15158332,
                author: {
                    name: 'OS Official Bot',
                    icon_url: 'https://i.imgur.com/OCHoFgH.png'
                },
                fields: [
                    {
                    name: 'Unmuted!',
                    value: `${person.user.tag}`,
                    },
                    {
                    name: 'Reason:',
                    value: reason,
                    },
                    {
                    name: 'Responsible moderator:',
                    value: `<@${message.author.id}>`
                    }
                ]
            }})

            person.send({embed: {
                    color: 15158332,
                    author: {
                        name: 'OS Official Bot',
                        icon_url: 'https://i.imgur.com/OCHoFgH.png'
                    },
                    title: '\:unlock: You have been unmuted! \:loud_sound: ',
                    description: '\:star_struck: Someone has decided to unmute you yay! \:star_struck: ',
                    fields: [
                        {
                        name: 'Reason:',
                        value: reason,
                        inline: false
                        },
                        {
                        name: 'Responsible moderator',
                        value: `<@${message.author.id}>`
                        }
                    ],
                }})
            
        }
    } else 
    if (command === 'war') {
        if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
            const channels = message.guild.channels.cache.find(channel => channel.name === 'war-reinforcements');
        let warRole = message.guild.roles.cache.find(roles => roles.name === 'War');
        let reasonz = args.slice(0).join(' ');

        if (!reasonz) return message.reply('Pls provide me a description u pepega <:Pepega:718511496216313866>');

        message.delete();

        channels.send(`${warRole}`)
        channels.send({embed: {
            title: 'THIS IS A WAR PING!',
            color: 15158332,
            fields: [
                {
                name: 'Announcement!',
                value: reasonz,
                },
                {
                name: 'Announced by:',
                value: `<@${message.author.id}>`,
                inline: false,
                },
                {
                name: 'Join this comms!',
                value: 'https://discord.gg/BfrAhcq'
                }
            ],
            timestamp: new Date(),
        }})
        } else {
            message.reply(`You don't have permission to use this command`)
        }
    }
})

client.once('ready', () => {
    console.log('OS NUMBA WANN!'),
    client.user.setActivity('Hordes.io | &help os', {type: 'PLAYING'}).then(presense => console.log(`Activity set to ${presense.activities[0].name}`))
})
client.login(process.env.token)



