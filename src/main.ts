import { Client } from "revolt.js";
import YAML from "yaml";
import fs from "fs"
import { CommandFramework } from "./ext/commands/framework"

const file = fs.readFileSync('./config.yml', 'utf8')
const config = YAML.parse(file)


let client = new Client();
let framework = new CommandFramework(client, "!")

client.on('ready', async () =>
    console.info(`Logged in as ${client.user!.username}!`)
);

client.on('message', async message => {
    if (message.content === 'sus') {
        message.channel!.sendMessage('sus!');
    }
});

// To login as a bot:
client.loginBot(config.token);