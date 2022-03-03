const fs=require('fs')
const fd=fs.openSync("data.json",'a')



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
        console.log("vous êtes dans help")
        break;
    case "add" :
        console.log("vous êtes dans add")
        break;
    case "delete" :
        console.log("vous êtes dans delete")
        break;
    case "list" :
        console.log("vous êtes dans list")
        break;
    default : 
        console.log("commande inconnu")
}