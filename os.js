const Discord = require('discord.js');

const client = new Discord.Client();

const ms = require('ms');

const prefix = '&'
const db = require('quick.db');
const giveaways = new db.table('giveaways')
const profiles = new db.table('books')
const config = require('./config.json');
client.config = config;

const { GiveawaysManager } = require('discord-giveaways');

client.giveawayManager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#00FBFF",
        embedColorEnd: "#FF00E0",
        reactions: '🎉'
    }
});

client.on('message', async (message) => {
    
        if (message.channel.type === 'dm') return;

        let sazgr = message.guild.members.cache.find(saz => saz.id === '688052882129682499')
        let misteree = message.guild.members.cache.find(ee => ee.id === '632506405370200084')
        let nihilo =  message.guild.members.cache.find(nihil => nihil.id === '688776325212667926')
        let uhd = message.guild.members.cache.find(uh => uh.id === '559479208007696395')
        let gato = message.guild.members.cache.find(gato => gato.id === '694488949980135444')
        let libraryGuardian = message.guild.roles.cache.get('756468980176388158')
        let shamanApprentice  = message.guild.roles.cache.find(appren => appren.id === '712346176220954664')
        let shamanMaster  = message.guild.roles.cache.find(master => master.id === '712346843849424926')
        let shamanHighlord  = message.guild.roles.cache.find(lord => lord.id === '712346899209781338')
        aliases = profiles.get('books.aliases')
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
        if (message.content.toLowerCase().startsWith(`${prefix}warrior library`)) {
            if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
                const profiles = new db.table('profiles')
                const slash = profiles.get(`profiles.slash.library`)
                const crescent = profiles.get(`profiles.crescentswipe.library`)
                const bulkwark = profiles.get(`profiles.bulkwark.library`)
                const taunt = profiles.get(`profiles.taunt.library`)
                const unholy = profiles.get(`profiles.unholywarcry.library`)
                const crusader = profiles.get(`profiles.crusadercourage.library`)
                const armor = profiles.get(`profiles.armorreinforcement.library`)
                const centrifugal = profiles.get(`profiles.centrifugallaceration.library`)
                const colossal = profiles.get(`profiles.colossalreconstruction.library`)
                const warriorLibrary = new Discord.MessageEmbed()
                .setTitle('Warrior Library <:warrior:713701040519905330>')
                .setColor('ad3f17 ')
                .setDescription('This is ~OS~ clan\'s personal `warrior library`')
                .addFields(
                    { name: `Sazgr's warrior books:`, value: `<:warriorbook:747473472145326163> Colossal Reconstruction = ${colossal}
                    <:warriorbook:747473472145326163> Slash = ${slash} 
                    <:warriorbook:747473472145326163> Crescent Swipe = ${crescent}
                    <:warriorbook:747473472145326163> Bulkwark = ${bulkwark} 
                    <:warriorbook:747473472145326163> Taunt = ${taunt}
                    <:warriorbook:747473472145326163> Crusader's Courage = ${crusader}
                    <:warriorbook:747473472145326163> Unholy Warcry = ${unholy}
                    <:warriorbook:747473472145326163> Centrifugal Laceration = ${centrifugal}
                    <:warriorbook:747473472145326163> Armor Reinforcement = ${armor}
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
                const profiles = new db.table('profiles')
                const orb = profiles.get(`profiles.icicleorb.library`)
                const chill = profiles.get(`profiles.chillingradiance.library`)
                const bolt = profiles.get(`profiles.bolt.library`)
                const hypo = profiles.get(`profiles.hypothermicfrenzy.library`)
                const shield = profiles.get(`profiles.iceshield.library`)
                const enchant = profiles.get(`profiles.enchantment.library`)
                const arctic = profiles.get(`profiles.arcticaura.library`)
                let mageLibrary = new Discord.MessageEmbed()
                .setTitle('Mage Library <:mage:713701096966717471>')
                .setColor('00f2ff ')
                .setDescription('This is ~OS~ clan\'s personal `mage library`')
                .addFields(
                    { name: ` Sazgr's and ExNihilo's mage books:`, value : `<:magebook:747473707932582042> Icicle Orb = ${orb}
                    <:magebook:747473707932582042> Chilling Radiance = ${chill}
                    <:magebook:747473707932582042> Ice Bolt = ${bolt}
                    <:magebook:747473707932582042> Hypotermic Frenzy = ${hypo}
                    <:magebook:747473707932582042> Ice Shield = ${shield}
                    <:magebook:747473707932582042> Enchantment = ${enchant}
                    <:magebook:747473707932582042> Arctic Aura = ${arctic}
                    pls dm <@${sazgr.user.id}> and <@${nihilo.user.id}> to obtain the books `}
                )
                message.channel.send(mageLibrary)

            } else {
                message.reply(`You dont have permission to use this command`)
            }
        } else 
        if (message.content.toLowerCase().startsWith(`${prefix}shaman library`)) {
            if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
                const profiles = new db.table('profiles')
                const decay = profiles.get(`profiles.decay.library`)
                const revitalize = profiles.get(`profiles.revitalize.library`)
                const mend = profiles.get(`profiles.mend.library`)
                const spirit = profiles.get(`profiles.spiritanimal.library`)
                const soul = profiles.get(`profiles.soulharvest.library`)
                const plague = profiles.get(`profiles.plaguespreader.library`)
                const agonize = profiles.get(`profiles.agonize.library`)
                const totem = profiles.get(`profiles.healingtotem.library`)
                const shamanLibrary = new Discord.MessageEmbed()
                .setTitle('Shaman Library <:shaman:713463624450179212>')
                .setColor('0000ff ')
                .setDescription('This is ~OS~ clan\'s personal `shaman library`')
                .addFields(
                    { name: `MisterEE/UltraMarine's and ExNihilo's shaman books:`, value: `<:shamanbook:747474128923000993> Decay = ${decay}
                    <:shamanbook:747474128923000993> Revitalize = ${revitalize}
                    <:shamanbook:747474128923000993> Mend = ${mend}
                    <:shamanbook:747474128923000993> Spirit Animal = ${spirit}
                    <:shamanbook:747474128923000993> Soul Harvest = ${soul}
                    <:shamanbook:747474128923000993> Plague Spreader = ${plague}
                    <:shamanbook:747474128923000993> Agonize = ${agonize}
                    <:shamanbook:747474128923000993> Healing Totem = ${totem}
                    pls dm <@${misteree.user.id}> or <@${nihilo.user.id}> to obtain the books  `}
                )
                message.channel.send(shamanLibrary)
            } else {
                message.reply(`You don't have permission to use this command`)
            }
        } else
        if (message.content.toLowerCase().startsWith(`${prefix}archer library`)) {
            if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
                const profiles = new db.table('profiles')
                const swift = profiles.get(`profiles.swiftshot.library`)
                const preciseshot = profiles.get(`profiles.preciseshot.library`)
                const invig = profiles.get(`profiles.invigorate.library`)
                const temp = profiles.get(`profiles.temporaldilation.library`)
                const path = profiles.get(`profiles.pathfinding.library`)
                const archerLibrary = new Discord.MessageEmbed()
                .setTitle('Archer Library <:archer:713701070714437722>')
                .setColor('00ff00 ')
                .setDescription('This is ~OS~ clan\'s personal `archer book`')
                .addFields(
                    { name: 'ExNihilo\'s archer books', value: `<:archerbook:747473966482063420> Swift Shot = ${swift}
                    <:archerbook:747473966482063420> Precise Shot = ${preciseshot}
                    <:archerbook:747473966482063420> Invigorate = ${invig}
                    <:archerbook:747473966482063420> Temporal Dilation = ${temp}
                    <:archerbook:747473966482063420> Pathfinding = ${path}
                    pls dm <@${nihilo.user.id}> to obtain the books `}
                )
                message.channel.send(archerLibrary)
            } else {
                message.reply(`You don't have permission to use this command`)
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
                const profiles = new db.table('profiles')
                const level1 = profiles.get(`profiles.colossalreconstruction.level1`)
                const level2 = profiles.get(`profiles.colossalreconstruction.level2`)
                const level3 = profiles.get(`profiles.colossalreconstruction.level3`)
                const level4 = profiles.get(`profiles.colossalreconstruction.level4`)
                const level5 = profiles.get(`profiles.colossalreconstruction.level5`)
                const coloss = new Discord.MessageEmbed()
                .setTitle('Colossal Reconstruction')
                .setColor('ad3f17 ') 
                .addFields(
                    { name: `Type : Warrior <:warrior:713701040519905330> \nName: Colossal Reconstruction <:warriorbook:747473472145326163>`, value: `<:warriorbook:747473472145326163> Level 2 = ${level2}
                    <:warriorbook:747473472145326163> Level 3 = ${level3} 
                    <:warriorbook:747473472145326163> Level 4 = ${level4}
                    This data according to <@${sazgr.user.id}> [databooks](https://docs.google.com/spreadsheets/d/1GkIJUAhlCBJGlCxbzN0Wb8g9i6if591rJZiKepejh10/edit#gid=0)  `}
                )
                message.channel.send(coloss)
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
        if (message.content.toLowerCase().startsWith(`${prefix}mage skill`)) {
            if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
                const mageSkillEmbed = new Discord.MessageEmbed()
                .setTitle('<:mage:713701096966717471> Mage Skill info').setURL('https://media.discordapp.net/attachments/712370407369605132/754304464638443530/HMWNAAAAAElFTkSuQmCC.png?width=1026&height=280')
                .setImage('https://media.discordapp.net/attachments/712370407369605132/754304464638443530/HMWNAAAAAElFTkSuQmCC.png?width=1026&height=280')
                .setColor('00f2ff ') 
                .setFooter('Find more commands with &help')
                message.channel.send(mageSkillEmbed)
            } else {
                return message.reply('You\'re not in OS clan yikes')
            }
        } else
        if (message.content.toLowerCase().startsWith(`${prefix}archer skill`)) {
            if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
                const archerSkillEmbed = new Discord.MessageEmbed()
                .setTitle('<:archer:713701070714437722> Archer Skill info').setURL('https://media.discordapp.net/attachments/712370407369605132/754304411148222504/ALK3eqqjJUIYAAAAAElFTkSuQmCC.png')
                .setImage('https://media.discordapp.net/attachments/712370407369605132/754304411148222504/ALK3eqqjJUIYAAAAAElFTkSuQmCC.png')
                .setColor('00ff00 ')
                .setFooter('Find more commands with &help')
                message.channel.send(archerSkillEmbed)
            } else {
                return message.reply('You\'re not in OS clan yikes')
            }
        } else
        if (message.content.toLowerCase().startsWith(`${prefix}shaman skill`)) {
            if (message.member.roles.cache.has('712346176220954664') || message.member.roles.cache.has('712346843849424926') || message.member.roles.cache.has('712346899209781338')) {
                const shamanSkillEmbed = new Discord.MessageEmbed()
                .setTitle('<:shaman:713463624450179212> Shaman Skill info').setURL('https://media.discordapp.net/attachments/712370407369605132/754304322443018260/f1XrVrFLcr3Bc5cmoNAEfRx4bu6Ub8f902dPLObau1AAAAAElFTkSuQmCC.png?width=1026&height=260')
                .setImage('https://media.discordapp.net/attachments/712370407369605132/754304322443018260/f1XrVrFLcr3Bc5cmoNAEfRx4bu6Ub8f902dPLObau1AAAAAElFTkSuQmCC.png?width=1026&height=260')
                .setColor('0000ff ') 
                .setFooter('Find more commands with &help')
                message.channel.send(shamanSkillEmbed)
            } else {
                return message.reply('You\'re not in OS clan yikes')
            }
        } else
        if (message.content.startsWith(prefix)) {
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
                console.log(giveaways.get('profiles.data'))
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
                if (message.content.includes('|')) {
                    const argument = message.content.slice('&poll'.length)
                    const splat = argument.split('|');
                    const pollMessage = splat[0].trim();
                    const aggree = splat[1].trim();
                    const disagree = splat[2].trim();
                
            const agreeEmoji = '<a:verified:753654287338569778>'
            const disagreeEmoji = '<:no:753654286134542447>'
            if (!pollMessage) return message.reply("What are you going to poll?")
            if (!aggree) return message.reply('Please insert the aggree statement')
            if (!disagree) return message.reply("Please insert the disagree statement")
            const falter = m => m.author.id === message.author.id
                const pollEmbed = new Discord.MessageEmbed()
                .setTitle('Poll!')
                .setColor('#00FF2A')
                .addFields(
                    { name: `<a:ini:753853854117920850> ${pollMessage}`, value: `
                    <a:verified:753654287338569778> ${aggree}
                    
                    <:no:753654286134542447> ${disagree}`}
                )
                await message.channel.send('Alright the poll has been set, how long u will gonna host the poll?');
                message.channel.awaitMessages(falter, {max: 1, time: 30000}).then(async collect => {
                    if (collect.first().content.endsWith('s') && collect.first().content.endsWith('m') && collect.first().content.endsWith('h') && collect.first().content.endsWith('d')) return message.reply("Sorry sir, that's not a number, please restart from the beginning!")
                    let time = collect.first().content;
                
                message.delete();
                let msg = await message.channel.send(pollEmbed);
                await msg.react('753654287338569778')
                await msg.react('753654286134542447')
        
                
                const filter = (reaction, user) => reaction.emoji.id === '753654287338569778' || reaction.emoji.id === '753654286134542447'
        
                const result = await msg.awaitReactions(filter, {time: ms(time)}).then((collected) => {
                    if (msg.reactions.cache.get('753654287338569778').count === 1 && msg.reactions.cache.get('753654286134542447').count === 1) return message.channel.send("No one voted sorry this poll is aborted")
                    if (msg.reactions.cache.get('753654287338569778').count-1 > msg.reactions.cache.get('753654286134542447').count-1) {
                    let resutEmbed = new Discord.MessageEmbed()
                    .setTitle('Voting Complete!')
                    .setColor('#00FF2A')
                    .addFields( 
                        {name: pollMessage, value: `<a:verified:753654287338569778> ${aggree} => ${msg.reactions.cache.get('753654287338569778').count-1}
                        
                        <:no:753654286134542447> ${disagree} => ${msg.reactions.cache.get('753654286134542447').count-1}
                        
                        **Final Answer is:** <a:verified:753654287338569778> **${aggree}** `}
                    )
                msg.edit(resutEmbed)
                msg.reactions.removeAll()
                    } else
                    if (msg.reactions.cache.get('753654287338569778').count-1 < msg.reactions.cache.get('753654286134542447').count-1) {
                        let resutEmbed = new Discord.MessageEmbed()
                        .setTitle('Voting Complete!')
                        .setColor('#00FF2A')
                        .addFields( 
                            {name: pollMessage, value: `<a:verified:753654287338569778> ${aggree} => ${msg.reactions.cache.get('753654287338569778').count-1}
                            
                            <:no:753654286134542447> ${disagree} => ${msg.reactions.cache.get('753654286134542447').count-1}
                            
                            **Final Answer is:** <:no:753654286134542447> **${disagree}** `}
                        )
                    msg.edit(resutEmbed)
                    msg.reactions.removeAll()
                    } else
                    if (msg.reactions.cache.get('753654287338569778').count-1 === msg.reactions.cache.get('753654286134542447').count-1) {
                        let resutEmbed = new Discord.MessageEmbed()
                        .setTitle('Voting Complete!')
                        .setColor('#00FF2A')
                        .addFields( 
                            {name: pollMessage, value: `<a:verified:753654287338569778> ${aggree} => ${msg.reactions.cache.get('753654287338569778').count-1}
                            
                            <:no:753654286134542447> ${disagree} => ${msg.reactions.cache.get('753654286134542447').count-1}
                            
                            **Final Answer is:** <a:nitro:753855915223941122> **Draw** `}
                        )
                    msg.edit(resutEmbed)
                    msg.reactions.removeAll()
                    }
                })
                })
                }
            
                
        
        
            } else 
            if (command === 'coinrain') {
                message.channel.send('Coin rain has started please type `CATCH`')
                let filter = m => m.content.toLowerCase() === 'catch' && !userVotes.has(m.author.id);
                const collector = message.channel.createMessageCollector(filter, {max: 10, time: 5000});
                let userVotes = new Map()
                await pollResult(collector, userVotes);
                let entries = [...userVotes.entries()]
                let entrymap = entries.map(entry => entry[0]).join(', ')
                console.log(entrymap)
                message.channel.send({embed: {
                    color: '#00D5FF',
                    title: 'The event is over',
                    description: `Players: ${entrymap}`,
                    fields: [
                        {
                        name: "Everyone got 10,000 coins!",
                        value: 'Please collect the rewards from the summoner!'
                        }
                    ]
                }})
                
                
                function pollResult(collector, userVotes) {
                    return new Promise((resolve, rejects) => {
                        collector.on('collect', m => {
                            let option = m.content.toLowerCase();
                            if (!userVotes.has(m.author.username)) {
                                userVotes.set(m.author.username, m.content)
                            } else {
                                return
                            }
                
                        })
                
                        collector.on('end', s => {
                            console.log(`Collected ${s.size} votes!`);
                            resolve(s);
                        })
                    })
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
            if (command === 'update') {
                const profiles = new db.table('profiles')
                const skillName = args[0];
                const level = args[1];
                const stock = args.slice(2).join(' ')
                if (!skillName) return message.channel.send('Please provide me a skill name! \n\n`examples: chillingradiance, temporaldilation, icebolt, etc`')
                if (!level) return message.channel.send('Please provide me the level of that skill \n\n`examples: level1, level2, level3`')
                if (!stock) return message.channel.send('Please provide me the conditions is it stocked? or not \n\n`Make sure you add :white_check_mark: or :x:`')
                if (!stock === '✅' || !stock === '❌') return message.channel.send('stock must be a emoji ✅ or ❌')
                profiles.set(`profiles.${skillName}.${level}`, stock)
        
                return message.channel.send(`Alright **${skillName} ${level}** has been set to ${stock}`)
                
            } else
            if (command === 'updateall') {
                const profiles = new db.table('profiles')
                const skillName = args[0];
                const stock = args[1]
                if (!skillName) return message.channel.send('Please provide me a skill name \n\n`examples: chillingradiance, temporaldilation, icebolt`')
                if (!stock === '✅' || !stock === '❌') return message.channel.send('stock must be a emoji ✅ or ❌')
                profiles.set(`profiles.${skillName}.level2`, stock)
                profiles.set(`profiles.${skillName}.level3`, stock)
                profiles.set(`profiles.${skillName}.level4`, stock)
                profiles.set(`profiles.${skillName}.level5`, stock)
        
                return message.channel.send(`**${skillName}** has been set to ${stock}`)
            } else
            if (command === 'restock') {
                const profiles = new db.table('profiles')

                const reactionFilter = (reaction, user) => {
                    return (reaction.emoji.name === '✅' || reaction.emoji.name === '❌') && user.id === message.author.id 
                }
        
                message.channel.send('What skill do you want to restock? \n\n`chillingradiance, temporaldilation, icebolt [all in lower case and no spaces!]`')
        
                const filter = (user) => {
                    return user.author.id === message.author.id
                }
                message.channel.awaitMessages(filter, {max: 1, time: 60000, errors: ['time']})
                .then(async collected => {
                    const skillName = collected.first().content
                    console.log(skillName)
        
                    await message.channel.send("what level? \n\n`example: level1, level2, level3 etc`")
                    message.channel.awaitMessages(filter, {time: 60000, max: 1, errors: ['time']})
                    .then(async collects => {
                        const name = collects.first().content;
                        console.log(name)
        
                        let msr = await message.channel.send('Stocked or not?')
                        await msr.react('✅')
                        await msr.react('❌')
                        msr.awaitReactions(reactionFilter, {time: 60000, max: 1, errors: ['time']})
                        .then(collector => {
                            if (collector.first().emoji.name === '✅') {
                                let stocked = collector.get('✅');
                                profiles.set(`books.${skillName}.${name}`, ':white_check_mark:')
                                
                                return message.channel.send(`Alright **${skillName} ${name}** has been set to :white_check_mark: `)
                            } else 
                            if (collector.first().emoji.name === '❌') {
                                let notStocked = collector.get('❌')
                                profiles.set(`books.${skillName}.${name}`, ':x:')

                                return message.channel.send(`Alright **${skillName} ${name}}** has been set yo :x:`)
                            }
                        })
        
                    })
                })
                
            } else
            if (command === 'updatelibrary') {
                const profiles = new db.table('profiles')
                const skillName = args[0]
                const stock = args[1];
                if (!skillName) return message.channel.send('Please provide me a skill name to update \n\n`examples: chillingradiance, temporaldilation, icebolt`')
                if (!stock) return message.channel.send('Please provide me the conditions is it stocked? or not \n\n`Make sure you add :white_check_mark: or :x:`')
                if (!stock === '✅' || !stock === '❌') return message.channel.send('stock must be a emoji ✅ or ❌')
                profiles.set(`profiles.${skillName}.library`, stock)
                console.log(stock)
                message.channel.send('succesfull')
            }  else 
            if (command.startsWith('stockout')){ 
                finalMessage = "What book???? lbstockout|bookname or lbstockout|bookname.level2"
                
                
                const books = command.split('|')
                for(i = 1; i < books.length; i++){
                    finalMessage=""
                    if(profiles.has(`books.${books[i]}`)){
                        if(books[i].includes('.')){
                            profiles.set(`books.${books[i]}`,':x:')
                            finalMessage+= `the book ${books[i]} is now out of stock\n`
                        }else{
                            bookLevels = Object.keys(profiles.get(`books.${books[i]}`))
                            for(var i=0; i<bookLevels.length;i++){
                                profiles.set(`books.${books[i]}.${bookLevels[i]}`,':x:')
                            }
                            // profiles.set(`books.${books[i]}.level2`,':x:')
                            // profiles.set(`books.${books[i]}.level3`,':x:')
                            // profiles.set(`books.${books[i]}.level4`,':x:')
                            // profiles.set(`books.${books[i]}.level5`,':x:')
                            finalMessage+= `the book ${books[i]} is now out of stock\n`
                        }
                    }else{
                        finalMessage+= `the book ${books[i]} is not found in database\n`
                    }
                }
                
                console.log(books[1])
                
                return message.channel.send(finalMessage)
            }else if ( Object.keys(profiles.get('books')).includes(command) ) {
                console.log(command)
                console.log(profiles.get(`books.${command}`))
        
                bookname = command.replace('_',' ')
                bookname = bookname.split(' ');
                for (var i = 0; i < bookname.length; i++) {
                    bookname[i] = bookname[i].charAt(0).toUpperCase() + bookname[i].slice(1); 
                }
                bookname = bookname.join(' ')
                charType = profiles.get(`books.${command}.type`)
                if(charType.toLowerCase() == 'shaman'){
                    charType += ' <:shaman:713463624450179212>'
                    charBook = '<:shamanbook:747474128923000993>'
                    colorBook = '0000ff'
                }else if(charType.toLowerCase() == 'mage'){
                    charType += ' <:mage:713701096966717471>'
                    charBook = '<:magebook:747473707932582042>'
                    colorBook = '00f2ff'
                }else if(charType.toLowerCase() == 'warrior'){
                    charType += ' <:warrior:713701040519905330>'
                    charBook = '<:warriorbook:747473472145326163>'
                    colorBook = 'ad3f17'
                }else if(charType.toLowerCase() == 'archer'){
                    charType += ' <:archer:713701070714437722>'
                    charBook = '<:archerbook:747473966482063420>'
                    colorBook = '00ff00'
                }
                
                const levels = Object.keys(profiles.get(`books.${command}`))
                levelsString = ""
                for(var i=0;i<levels.length;i++){
                    if(["type","color","picture"].includes(levels[i])){ 
                        continue
                    }
                    levelsString += charBook + " " + levels[i].charAt(0).toUpperCase() + levels[i].match('evel') + " " + levels[i].charAt(5) + " = " + profiles.get(`books.${command}.${levels[i]}`) +"\n"
                }
                // colorBook = profiles.get(`profiles.${command}.color`)
                // console.log(profiles.get(`books.${command}.picture`))
                
                if(profiles.has(`books.${command}.picture`)){
                    mesEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${bookname}`, `${profiles.get(`books.${command}.picture`)}`)
                    .setColor(`${colorBook}`) 
                    .addFields(
                        { name: `Type : ${charType}`, value: `${levelsString} Please DM the ${libraryGuardian} to obtain the books`}
                    )
                    return message.channel.send(mesEmbed)
                }else{
                    mesEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${bookname}`)
                    .setColor(`${colorBook}`) 
                    .addFields(
                        { name: `Type : ${charType}`, value: `${levelsString} Please DM the ${libraryGuardian} to obtain the books`}
                    )
                    return message.channel.send(mesEmbed)
                }
        
            } else if(Object.keys(aliases).includes(command)){
                console.log(profiles.get(`books.aliases.${aliases[command]}`))
        
                bookname = aliases[command].replace('_',' ')
                bookname = bookname.split(' ');
                for (var i = 0; i < bookname.length; i++) {
                    bookname[i] = bookname[i].charAt(0).toUpperCase() + bookname[i].slice(1); 
                }
                bookname = bookname.join(' ')
                charType = profiles.get(`books.${aliases[command]}.type`)
                if(charType.toLowerCase() == 'shaman'){
                    charType += ' <:shaman:713463624450179212>'
                    charBook = '<:shamanbook:747474128923000993>'
                    colorBook = '0000ff'
                }else if(charType.toLowerCase() == 'mage'){
                    charType += ' <:mage:713701096966717471>'
                    charBook = '<:magebook:747473707932582042>'
                    colorBook = '00f2ff'
                }else if(charType.toLowerCase() == 'warrior'){
                    charType += ' <:warrior:713701040519905330>'
                    charBook = '<:warriorbook:747473472145326163>'
                    colorBook = 'ad3f17'
                }else if(charType.toLowerCase() == 'archer'){
                    charType += ' <:archer:713701070714437722>'
                    charBook = '<:archerbook:747473966482063420>'
                    colorBook = '00ff00'
                }
                
                const levels = Object.keys(profiles.get(`books.${aliases[command]}`))
                levelsString = ""
                for(var i=0;i<levels.length;i++){
                    if(["type","color","picture"].includes(levels[i])){ 
                        continue
                    }
                    levelsString += charBook + " " + levels[i] + " = " + profiles.get(`books.${aliases[command]}.${levels[i]}`) +"\n"
                }
        
                colorBook = profiles.get(`books.${aliases[command]}.color`)
                // console.log(colorBook)
                
                if(profiles.has(`books.${aliases[command]}.picture`)){ //boon I made some different 
                    mesEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${bookname}`, `${profiles.get(`books.${aliases[command]}.picture`)}`)
                    .setColor(`${colorBook}`) 
                    .addFields(
                        { name: `Type : ${charType} \nName: ${bookname} ${charBook}`, 
                        value: levelsString}
                    )
                    return message.channel.send(mesEmbed)
                }else{
                    mesEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${bookname}`)
                    .setColor(`${colorBook}`) 
                    .addFields(
                        { name: `Type : ${charType} \nName: ${bookname} ${charBook}`, 
                        value: levelsString}
                    )
                    return message.channel.send(mesEmbed)
                }
        
        
            }else if (command === 'checkbooks') {
                let desc = profiles.get('books')
                console.log(desc)
            }else if (command === 'bookslist') {
                let desc = profiles.get('books')
                message.channel.send(Object.keys(desc))
            }else if (command === 'checkdata') {
                let desc = profiles.all()
                console.log(desc)
            }else if (command === 'addcolor') {
                if (message.member.roles.cache.has(`756468980176388158`) || message.member.hasPermission('ADMINISTRATOR')) {
                const skillName = args[0]
                if (!profiles.has(`books.${skillName}.color`)) return message.reply('Sorry but I cannot find this book in the database')
                const color = args[1];
                profiles.set(`books.${skillName}.color`, color)
                return message.channel.send('Succesful')
            } else {
                return message.reply(`Oof only ${libraryGuardian.name} who can use this command \n\n\`Please ask ${libraryGuardian.name}s to trigger this command\``)
            }
            } else if (command === 'addemoji') {
                if (message.member.roles.cache.has(`756468980176388158`) || message.member.hasPermission('ADMINISTRATOR')) {
                const skillName = args[0]
                if (!profiles.has(`books.${skillName}.emoji`)) return message.reply('Sorry but I cannot find this book in the database')
                const emoji = args[1];
                profiles.set(`books.${skillName}.emoji`, emoji)
                return message.channel.send('Succesful')
                }
            } else if (command.startsWith('stockin')){ 
                if (message.member.roles.cache.has(`756468980176388158`) || message.member.hasPermission('ADMINISTRATOR')) {
                finalMessage = "What book?? lbstockin|bookname or lbstockin|bookname.level2"
                
                const books = command.split('|') 
                for(i = 1; i < books.length; i++){
                    finalMessage = ""
                    if(profiles.has(`books.${books[i]}`)) {
                        if(books[i].includes('.')){
                            const bookName = books[i].split('.')
                            bookname = bookName[0].replace('_', ' ')
                            bookname = bookname.split(' ')
                            for (var j = 0; j < bookname.length; j++) {
                                bookname[j] = bookname[j].charAt(0).toUpperCase() + bookname[j].slice(1); 
                            }
                            bookname = bookname.join(' ')
                            profiles.set(`profiles.${books[i]}`,'✅') 
                            message.channel.send(`Okay the book **${bookname}** **${bookName[1].match('level')} ${bookName[1].charAt(5)}** has been stocked`)
                        } else {
                            bookLevels = Object.keys(profiles.get(`books.${books[i]}`))
                            for(var j=0; j<bookLevels.length;j++){
                                curbook = `books.${books[i]}.${bookLevels[j]}`
                                profiles.set(curbook,'✅')
                            }
                            message.channel.send(`Okay the book **${books[i]}** has been stocked`)
                        }
                    } else {
                        await message.channel.send(`the book **${books[i]}** is not found in database, but I can add this into database, should I add this unknown book into database?\n\n\`answer with yes or no\``)
                        const filter = m => m.author.id === message.author.id
                        const skillFilter = m =>  m.author.id === message.author.id 
                        await message.channel.awaitMessages(filter, {time: 60000, max: 1, errors: ['time']})
                        .then(async collected => {
                            if (collected.first().content.toLowerCase() === 'yes') {
                                // console.log(books[i])
                                await message.channel.send('Alright so you decided to add that book into database, now let\'s talk about the levels \n\n`please insert the levels (min:2,max: 5), examples: 2 or 3 `')
                                await message.channel.awaitMessages(filter, {time:60000, max:1, errors:['time']})
                                .then(collector=>{
                                    let maxLevel = collector.first().content;
                                    for(var j=2;j<=maxLevel;j++){
                                        profiles.set(`books.${books[i]}.level${j}`,'✅')
                                    }
                                })
                                await message.channel.send('Alright the book ' + books[i]+ ' has been added into database, next what type is this book? \n\n`Answer with: Warrior, Mage, Archer, Shaman WARNING: IF U CHOSE OTHER THAN THOSE IT WILL ERROR!`')
                                await message.channel.awaitMessages(filter, {time: 60000, max: 1, errors: ['time']})
                                .then(collector => {
                                    let bookType = collector.first().content;//dont lowercase
        
                                    profiles.set(`books.${books[i]}.type`, bookType)
                                })
                                await message.channel.send('Okie! the book\'s type has been declared, do you need aliases? \n\n`if you need just input the aliases, and if you don\'t just say no`');
                                await message.channel.awaitMessages(filter, {time: 60000, max: 1})
                                .then(collects => {
                                    let alias = collects.first().content;
                                    profiles.set(`books.aliases.${alias}`, `${books[i]}`)// OH pog idea
                                    console.log(alias)
                                    message.channel.send(`The books has been updated in database! you can check it by typing **${prefix}${books[i]}** or **${prefix}${alias}**`)
                                })
                                // console.log(books[i])
                                
                            } else
                            if (collected.first().content.toLowerCase() === 'no') {
                                message.channel.send('Uhhh okay then I will not add the book to the database')
                            } else {
                                message.reply('I\'m sorry but that is an invalid answer, please answer with yes or no')
                            }
                        })
                    }
                }
                
                
            } else {
                return message.reply(`Oof only ${libraryGuardian.name} who can use this command \n\n\`Please ask ${libraryGuardian.name}s to trigger this command\``)
            }
            } else if (command === 'addtype') {
                if (message.member.roles.cache.has(`756468980176388158`) || message.member.hasPermission('ADMINISTRATOR')) {
                    const skillName = args[0]
                    if (!profiles.has(`books.${skillName}.type`)) return message.reply('Sorry but I cannot find this book in the database')
                    const type = args[1];
                    profiles.set(`books.${skillName}.type`, type)
                    return message.channel.send('Succesful')
                } else {
                    return message.reply(`Oof only ${libraryGuardian.name} who can use this command \n\n\`Please ask ${libraryGuardian.name}s to trigger this command\``)
                }
            } else if (command === 'deletebook') {
                if (message.member.roles.cache.has(`756468980176388158`) || message.member.hasPermission('ADMINISTRATOR')) {
                    if (!profiles.has(`book.${args}`)) return message.reply('Hmmmm, seems that book is not exist in the Database!')
                    profiles.delete(`books.${args}`)
                    return message.channel.send('Succesful')
                } else {
                    return message.reply(`Oof only ${libraryGuardian.name} who can use this command \n\n\`Please ask ${libraryGuardian.name}s to trigger this command\``)
                }
            }  else if (command === 'addpicture') {
                if (message.member.roles.cache.has(`756468980176388158`) || message.member.hasPermission('ADMINISTRATOR')) {
                    const skillName = args[0]
                    if (!profiles.has(`books.${skillName}`)) return message.reply('Sorry but I cannot find this book in the database')
                    const pic = args[1];
                    profiles.set(`books.${skillName}.picture`, pic)
                    return message.channel.send('Succesful')
                } else {
                    return message.reply(`Oof only ${libraryGuardian.name} who can use this command \n\n\`Please ask ${libraryGuardian.name}s to trigger this command\``)
                }
            } else if (command === 'deletedb') {
                if (message.member.hasPermission('ADMINISTRATOR')) {
                    profiles.delete('books')
                } else {
                    return message.reply('you do not have permission to use this command')
                }
            } else if (command === 'checkdb') {
                console.log(profiles.all())
                return message.channel.send('Please see the log console!')
            }
        } 


    
})
client.on('message', (message) => {
    try{
        

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

    }catch(err){
        message.reply(err)
    }

})

client.once('ready', () => {
    console.log('OS NUMBA WANN!'),
    client.user.setActivity('Hordes.io | &help os', {type: 'PLAYING'}).then(presense => console.log(`Activity set to ${presense.activities[0].name}`))
})
client.login(process.env.token)



