const fs=require('fs')
const fd=fs.openSync("data.json",'a')
const integre = require("./algo.js")


fs.readFile('data.json','utf8',function(err,data){
    const centent =data;
    if(data=="")
    {
        fs.writeFile('data.json','{"tache":[]}', function(err){
            if (err) throw err;

        });
    }

});

var detection = process.argv[2]

switch(detection){
    case "help" : 
        integre.help();
        break;
    case "add" :
        integre.add();
        break;
    case "delete" :
        integre.supp();
        break;
    case "list" :
        console.log("vous êtes dans list")
        break;
    default : 
        console.log("commande inconnu")
}