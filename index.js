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