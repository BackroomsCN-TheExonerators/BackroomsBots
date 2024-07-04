import mineflayer = require('mineflayer');
import * as dotenv from 'dotenv';
dotenv.config();

const hostUrl = process.env.HOST_URL,
    portNumber = parseInt(process.env.PORT),
    username = process.env.USERNAME,
    password = process.env.PASSWORD;

const bot = mineflayer.createBot({
    host: hostUrl || 'localhost', // Change this to the ip you want.
    port: portNumber as number || 25565, // Change this to the port you want.
    client: undefined,
    brand: 'vanilla',
    auth: "microsoft",
    username: username,
    password: password,
    version: "1.20.4",
});

