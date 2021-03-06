const fs = require("fs")

fs.readdirSync('./commands').forEach(dir => {
    const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) { 

        var data = fs.readFileSync(`./commands/${dir}/${file}`, "utf-8");



        if (!data.includes("const embed") &&!data.includes("let embed") &&!data.includes("var embed") && data.includes("MessageEmbed()")) {
            console.log("Embed Problem!   ", dir + "/" + file)
        }

        if (data.includes(".createReactionCollector")) {
            console.log("(Can be not error, only check) createReactionCollector   ", dir + "/" + file)
        }

        if (data.includes(".awaitReactions")) {
            console.log("(Can be not error, only check) awaitReactions  ", dir + "/" + file)
        }

        if (data.includes(".awaitMessages")) {
            console.log("(Can be not error, only check) .awaitMessages   ", dir + "/" + file)
        }

        //WARN FOR ADDFIELDS!
        if (data.includes("addField")) {
            //   console.log("Embed warn! (To string)   ", dir+"/"+file)
        }


        //CAN FETCH BOT INVITE LINK 
        if (data.includes("permissions")) {
            console.log("(Can bots invite link) Permisson  ", dir + "/" + file)
        }

        if (data.includes("unknown")) {
            console.log("unknown   ", dir + "/" + file)
        }

        if (data.includes("setPresence")) {
            console.log("setPresence   ", dir + "/" + file)
        }

        if (data.includes("fetchVanityCode")) {
            console.log("fetchVanityCode   ", dir + "/" + file)
        }
        if (data.includes(".owner")) {
            console.log("guild.owner   ", dir + "/" + file)
        }


        if (data.includes(" .voice")) {
            console.log("guild.voice   ", dir + "/" + file)
        }
        if (data.includes(".ban")) {
            console.log("(Can be not error, only check) ban  ", dir + "/" + file)
        }
        if (data.includes(".kick")) {
            console.log("(Can be not error, only check) kick   ", dir + "/" + file)
        }




        if (data.includes(".delete")) {
            console.log("(Can be not error, only check) delete() .   ", dir + "/" + file)
        }
        if (data.includes("roles.create")) {
            console.log("roles.create   ", dir + "/" + file)
        }
        if (data.includes("WebhookClient")) {
            console.log("(Can be not error, only check) WebhookClient  ", dir + "/" + file)
        }
        if (data.includes("Typing")) {
            console.log("(Can be not error, only check) Typing  ", dir + "/" + file)
        }



        const newData = data
            .replace(/.send\(embed\)/g, ".send({embeds: [embed]})")
            .replace(/.reply\(embed\)/g, ".reply({embeds: [embed]})")


            .replace(/.ownerID/g, ".ownerId")
            .replace(/.channelID/g, ".channelId")
            .replace(/CUSTOM_STATUS/g, "CUSTOM")
         //   .replace(/text/g, `GUILD_TEXT`)
           // .replace(/dm/g, `DM`)
            .replace(/category/g, `GUILD_CATEGORY`)
            // .replace(/message/g, `messageCreate`)//IMPORTANT
            .replace(/.fetchBans/g, `.bans.fetch`)
            .replace(/.fetchInvites/g, `.invites.fetch`)
            .replace(/.member\(/g, `.members.cache.get(`)
            .replace(/.overwritePermissions\(/g, `.permissionOverwrites.set(`)


            .replace(/.updateOverwrite/g, `.permissionOverwrites.edit`)
            .replace(/.hasPermission/g, `.permissions.has`)
            .replace(/.createOverwrite/g, `.permissionOverwrites.create`)

            .replace(/MANAGE_EMOJIS/g, `MANAGE_EMOJIS_AND_STICKERS`)
            .replace(/DISCORD_PARTNER/g, `PARTNERED_SERVER_OWNER`)
            .replace(/VERIFIED_DEVELOPER/g, `EARLY_VERIFIED_BOT_DEVELOPER`)



            .replace(/.addMember/g, `.members.add`)

        fs.writeFileSync(`./commandsV13/${dir}/${file}`, newData)

    }
})



