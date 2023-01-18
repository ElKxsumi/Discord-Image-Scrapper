
const prompt = require('prompt-sync')(); 
const { Client, InviteGuild } = require('discord.js-selfbot-v13');
const download = require('image-downloader');
const client = new Client({
    checkUpdate: false,
});
const path = require('path');
var config = require('./config.json');
var prefix = config.prefix
//MENU

function menu(){
console.log(`
    _                                                      _
 __| |____________________________________________________| |__
(__   ____________________________________________________   __)
   | |                                                    | |
   | |  ██╗  ██╗ █████╗ ███████╗██╗   ██╗███╗   ███╗██╗   | |
   | |  ██║ ██╔╝██╔══██╗██╔════╝██║   ██║████╗ ████║██║   | |
   | |  █████╔╝ ███████║███████╗██║   ██║██╔████╔██║██║   | |
   | |  ██╔═██╗ ██╔══██║╚════██║██║   ██║██║╚██╔╝██║██║   | |
   | |  ██║  ██╗██║  ██║███████║╚██████╔╝██║ ╚═╝ ██║██║   | |
   | |  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝   | |
 __| |____________________________________________________| |__
(__   ____________________________________________________   __)
   |_|                                                    |_|


                    [1] = Command
                    [2] = Channel ID
                    [3] = Close
`)

var choice = prompt("                           ")
console.clear()

if(choice == 1){
    command()
} else if(choice == 2){
    channel_id()
} else if(choice == 3){
    process.exit()
}





// CHANNEL ID
function channel_id(){

    console.log(`
    _                                                      _
 __| |____________________________________________________| |__
(__   ____________________________________________________   __)
   | |                                                    | |
   | |  ██╗  ██╗ █████╗ ███████╗██╗   ██╗███╗   ███╗██╗   | |
   | |  ██║ ██╔╝██╔══██╗██╔════╝██║   ██║████╗ ████║██║   | |
   | |  █████╔╝ ███████║███████╗██║   ██║██╔████╔██║██║   | |
   | |  ██╔═██╗ ██╔══██║╚════██║██║   ██║██║╚██╔╝██║██║   | |
   | |  ██║  ██╗██║  ██║███████║╚██████╔╝██║ ╚═╝ ██║██║   | |
   | |  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝   | |
 __| |____________________________________________________| |__
(__   ____________________________________________________   __)
   |_|                                                    |_|


   `)
   var chan_id = prompt("Channel ID:")
   client.on('ready', async () => {
    
  })
  
  client.on('message', async (message) => {
    var channele = client.channels.cache.get(chan_id)
    channele.messages.fetch().then(messages => {
        messages.forEach(msg => {
            var x = msg.attachments.toJSON()
            if(x[0] == undefined){
                return;
            } else {
                const options = {
                    url: x[0].attachment,
                    dest: path.resolve('./dl')
                  };
                  download.image(options)
                  .then(({ filename }) => {
                    console.log('Saved to', filename);
                  })
                  .catch((err) => console.error(err));
            }

        })

        })

  })
}








// DISCORD COMMANDS
function command(){
    console.log(`
    _                                                      _
 __| |____________________________________________________| |__
(__   ____________________________________________________   __)
   | |                                                    | |
   | |  ██╗  ██╗ █████╗ ███████╗██╗   ██╗███╗   ███╗██╗   | |
   | |  ██║ ██╔╝██╔══██╗██╔════╝██║   ██║████╗ ████║██║   | |
   | |  █████╔╝ ███████║███████╗██║   ██║██╔████╔██║██║   | |
   | |  ██╔═██╗ ██╔══██║╚════██║██║   ██║██║╚██╔╝██║██║   | |
   | |  ██║  ██╗██║  ██║███████║╚██████╔╝██║ ╚═╝ ██║██║   | |
   | |  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝   | |
 __| |____________________________________________________| |__
(__   ____________________________________________________   __)
   |_|                                                    |_|


   `)
client.on('ready', async () => {
  console.log('The command is '+config.token+'dl !')
})

client.on('message', async (message) => {

    if(message.content.startsWith(prefix + 'dl')){
        if(message.author.id === client.user.id){
            message.delete()

            message.channel.messages.fetch().then(messages => {
                messages.forEach(msg => {
                    var x = msg.attachments.toJSON()
                    if(x[0] == undefined){
                        return;
                    } else {
                        const options = {
                            url: x[0].attachment,
                            dest: path.resolve('./dl')
                          };
                          download.image(options)
                          .then(({ filename }) => {
                            console.log(filename);
                          })
                          .catch((err) => console.error(err));
                    }

                })

                })
    
        }
          }
        }) 
    }}
    client.login(config.token);
menu()