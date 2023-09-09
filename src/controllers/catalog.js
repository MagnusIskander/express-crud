const fs = require('fs');
const path = require('path');
const catalogFilePath = path.join(__dirname, '../data/catalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogFilePath, 'utf-8'));
// const catalog = require('../data/catalog.json');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const catalogController = {
    master: (req, res) => {
        res.render('catalog', { catalog, toThousand } );
    },

    add: (req, res) => {
        res.render('catalog/add');
    },

    plus: (req, res) => {
		console.log(req.file);

		let newBook = {
		id: catalog[catalog.length - 1].id + 1,
			...req.body,
			pic: req.file ? req.file.filename : 'no-cover.jpg'
        };

            catalog.push(newBook);

			fs.writeFileSync(catalogFilePath, JSON.stringify(catalog, null, ' '));

			res.redirect('/catalog');
	},

    detail: (req, res) => {
        let idBook = req.params.id;

		let book = catalog.find(book => book.id == idBook);

        console.log(book);

		// res.render('catalog/detail', { title: book.title, book, pic, toThousand });
		res.render('catalog/detail', { title: book.title, book, toThousand });

        // res.render('catalog/detail', { catalog } );
    },

    edit: (req, res) => {
        let id = req.params.id;

		let editBook = catalog.find(book => book.id == id);

		res.render('catalog/edit', { editBook });
        
        // res.render('catalog/edit', { catalog } );
    },

    update: (req, res) => {
        let id = req.params.id;

		let editBook = catalog.find(book => book.id == id);

		editBook = {
			id: editBook.id,
			...req.body
		};

        let newBooks = catalog.map(book => {
            if (book.id === editBook.id)
            {
                return book = { ...editBook };
            }
            
            return book;
        });

        fs.writeFileSync(catalogFilePath, JSON.stringify(newBooks, null, ' '));

        // window.location.reload('http://localhost:5000/catalog/' + editBook.id);
        res.redirect('/catalog/' + editBook.id);
        // window.location.reload();
        // return false;

        // function refresh() {    
        //     setTimeout(function () {
        //         location.reload()
        //     }, 100);
        // }

        // res.render('catalog/edit', { catalog } );
    },

    editPic: (req, res) => {
		let id = req.params.id;
		let editPic = catalog.find(book => book.id == id);

		res.render('catalog/edit-pic', {editPic} );
	},
	
	updatePic: (req, res) => {
		let id = req.params.id;
		let editPic = catalog.find(pic => pic.id == id);

		editPic = {
			id: editPic.id,
			// bannerImage: bannerImage,
			pic: req.file
		}; 
		
		let newPic = catalog.map(pic => {   
			if (pic.id === editPic.id)
            {
				return pic = { ...editPic };
			}
			
            return pic;
		});

		fs.writeFileSync(catalogFilePath, JSON.stringify(newPic, null, ' '));
		
        res.redirect('/catalog/');
	},

    delete: (req, res) => {
		let id = req.params.id;
        
        let finalCatalog = catalog.filter(book => book.id != id);

        fs.writeFileSync(catalogFilePath, JSON.stringify(finalCatalog, null, ' '));

		res.redirect('/catalog'); 


        // res.render('catalog/delete', { catalog } );
    }
}


module.exports = catalogController;
