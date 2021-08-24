const fs = require('fs')
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

Bot.on('message', chatter => {
    if (chatter.message === '!leaderboard' || chatter.message === '!lb') {
        const teams = []

        const data = fs.readFileSync('C:/Users/User/Documents/GitHub/MCGalaxy/bin/Debug/plugins/Tournament/leaderboard.txt', 'UTF-8')
        //const data = fs.readFileSync('../Plugins/Tournament/leaderboard.txt', 'UTF-8')

        const lines = data.split(/\r?\n/)

        lines.forEach((line) => {
            teams.push(line)
        })

        Bot.say('🏆 Current leaderboard: 🥇 1. ' + teams[0] + ' 🥈 2. ' + teams[1] + ' 🥉 3. ' + teams[2] + ' 4. ' + teams[3] + ' 5. ' + teams[4] + ' 6. ' + teams[5] + ' 7. ' + teams[6] + ' 8. ' + teams[7])
    }
})

console.log('Logged in.')