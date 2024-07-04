import mineflayer = require('mineflayer');
import {pathfinder, Movements, goals} from "mineflayer-pathfinder";
import mcData = require('minecraft-data')


class BasicBot{
    public bot: mineflayer.Bot = null;
    public minecraftDat = null
    public constructor() {
        const hostUrl = process.env.HOST_URL,
            portNumber = parseInt(process.env.PORT),
            username = process.env.USERNAME,
            password = process.env.PASSWORD;

        this.bot = mineflayer.createBot({
            host: hostUrl || 'localhost', // Change this to the ip you want.
            port: portNumber as number || 25565, // Change this to the port you want.
            client: undefined,
            brand: 'vanilla',
            auth: "microsoft",
            username: username,
            password: password,
            version: "1.20.4",
        })

        this.bot.loadPlugin(pathfinder)

        this.minecraftDat = mcData(this.bot.version)
    }

    public followPlayer(playername: string) {
        const goal = new this.GoalFollow(this.bot.players[playername]?.entity, 1)

    }
}