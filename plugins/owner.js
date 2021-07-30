const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════Teddy BoT═════╗*\n           \n*⚜═teddy═⚜*\n\n*owner Anshab - http://Wa.me/+919061245363*\n* *\n🔰instagram:- https://youtube.com/cCHUTECH*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Anshabdemon*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═teddy Owner Anshabdemon═💥*\n\n*💘 https://github.com/Hisham-Muhammed/Sophia*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://yout.be/_4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════teddy═════╗*\n           \n*⚜═Teddy═⚜*\n\n*owner Anshabdemon - http://Wa.me/+919061245363*\n* *\n🔰Youtube: https://youtube.comc/ICHUECH*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Anshabdemon*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Teddy Owner Anshabdemon═💥*\n\n*💘 https://github.com/Hisham-Muhammed/Sophia*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

