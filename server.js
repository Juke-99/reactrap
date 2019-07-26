const express = require('express')
const path = require('path')
const app = express()
const port = 4000

const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')

const config = require('./webpack.config')

app.use(webpackMiddleware(
    webpack(config), {publicPath: '/'}
))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'about.html'))
})

app.listen(port, () => console.log(`Success ${port} start.`))