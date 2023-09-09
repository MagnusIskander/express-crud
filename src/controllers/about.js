const fs = require('fs');
const path = require('path');
const catalogFilePath = path.join(__dirname, '../data/catalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogFilePath, 'utf-8'));


const aboutController = {
    master: (req, res) => {
        res.render('about');
    }
}


module.exports = aboutController; 
