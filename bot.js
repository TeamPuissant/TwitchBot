const TwitchBot = require('twitch-bot')
require('dotenv').config()

const Bot = new TwitchBot({
    username: 'TeamPuissant',
    oauth: 'oauth:' + process.env.OAUTH,
    channels: ['teampuissant']
})

Bot.on('join', channel => {
    console.log(`Joined channel: ${channel}`)
})

Bot.on('error', err => {
    console.log(err)
})

Bot.on('connect', channel => {
    console.log('Logged in.')
})

Bot.on('message', chatter => {
    if (chatter.message === '!test') {
        Bot.say('Command executed! PogChamp')
    }
})