const express = require('express')
const api_helper = require('./API_helper')
require('dotenv').config()
const app = express()
const port = 3001

app.get('/', (req, res) => {
    api_helper.make_API_call('https://api.giphy.com/v1/gifs/search?api_key=' + process.env.API_KEY + '&q=cheeseburgers')
    .then(response => {
        res.json({
            "title": response.data[0].title,
            "file_url": response.data[0].url
        })
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
