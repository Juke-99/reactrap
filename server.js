const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Hello World'))
app.use('/basic', express.static('./src/basic'))
app.use('/browser', express.static('./src/browser'))
app.listen(port, () => console.log(`Success ${port} start.`))