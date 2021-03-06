const fs = require('fs')
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'icons')
    },
    filename: function (req, file, cb) {
        cb(null, `${req.query.glyphiconname}.png`)
        //   cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
const bcrypt = require('bcrypt')
const saltRounds = 10

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/glyphs?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const GlyphIconSchema = new mongoose.Schema({
    name: String,
    types: mongoose.Schema.Types.Array
}, { collection : 'myglyphicons' })

const GlyphIconModel = mongoose.model('GlyphIconModel', GlyphIconSchema);

app.post('/api/glyphicons/create', upload.single('myFile'), (req, res) => {
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    if (!req.file) {
        return res.json({ status: 'Error' })
    }

    let query = GlyphIconModel.find({  })
    query.exec((err, allGlyphIcons) => {
        if (err) {
            return res.json({ "status": "Error" })
        }
        
        let glyphIconExists = false

        allGlyphIcons.forEach(glyphIcon => {
            if(glyphIcon.name.includes(req.query.glyphiconname)){
                glyphIconExists = true
            }
        })
        if (glyphIconExists) {
            return res.json({ status: 'Error' })

        } else {
            let glyphIcon = new GlyphIconModel({ name: req.query.glyphiconname, types: req.query.glyphicontypes.split(',') })
            glyphIcon.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    // return res.json({ "status": "OK" })
                    return res.redirect('http://localhost:8080/')
                }
            })
        }
    })

})

app.get('/api/glyphicons/get', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.sendFile(`${__dirname}/icons/${req.query.glyphiconname}.png`)

})

app.get('/api/glyphicons/all', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryOfIcons = GlyphIconModel.find({  })
    queryOfIcons.exec((err, allGlyphIcons) => {
        if (err){
            return res.json({ status: 'Erorr' })
        }
        return res.json({ status: 'OK', glyphicons: allGlyphIcons })
    })

})


app.get('**', (req, res) => { 

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)

})

// const port = process.env.PORT || 8080
const port = 4000

app.listen(port)