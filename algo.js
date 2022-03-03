const fs = require('fs')
const chalk = require("chalk")

function help(){
    const interface =`
    les commandes :
    1. node index.js help -> affichage des commandes
    2. node index.js list -> affichage des taches
    3. node index.js delete -> supression d'une tache
    4. node index.js add -> ajouter une nouvelle taches`;

    console.log(chalk.blue(interface));
}

module.exports = {help, add, supp, visuel};


function add() {
    reponse = process.argv[3];

    jsonReader('./data.json', (err, data) => {
        if(err) {
          console.log(err);
        } 
        else {

      let Nombre = Object.keys(data.tache).length;
      data.tache[Nombre] = reponse;

      fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
        if(err) {
          console.log(err);
        }
        console.log('Tache ajouté!');
      });
    }
  });
}

function jsonReader(filePath, cb) {
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        const object = JSON.parse(fileData);
        return cb & cb(null, object)
      } catch (err) {
          return cb && cb(err);
      }
    });
  }


  function supp() {
    number = process.argv[3]
    jsonReader('./data.json', (err, data) => {
        if(err) {
          console.log(err);
        } 
        else {

      let Nombre = Object.keys(data.tache).length;
      
        delete data.tache[number];

      fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
        if(err) {
          console.log(err);
        }

      });
    }
  });
  console.log('Tache supprimé!')
}

function visuel() {
    jsonReader('./data.json', (err, data) => {
        if(err) {
          console.log(err);
        } 
        else {
            
            for(i = 0; i < data.tache.length; i++)
            {
                if(data.tache[i] != "")
                {
                    console.log(chalk.green(i + " " + data.tache[i]))
                }
            }
    
    }
    });
}
