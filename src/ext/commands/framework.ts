import { Client } from "revolt.js";
import { Message } from "revolt.js/dist/maps/Messages";

export class CommandFramework {
    commands = {};
    client: Client;
    prefix: string;
    argSplitter = (str: string) => str.split(/\s+/g);

    constructor(client: Client, prefix: string) {
        this.client = client;
        this.prefix = prefix;

        this.client.on("message", async message => {

            if (this.checkPrefix(message)) {
                const args = this.argSplitter(message.content.replace(/<@!/g, "<@").substring(this.prefix.length).trim());
                const name = args.shift();
                console.log(name);
            }
            

        })

    }

    checkPrefix(msg: Message) {
        return msg.content.replace(/<@!/g, "<@").startsWith(this.prefix)
    }
}