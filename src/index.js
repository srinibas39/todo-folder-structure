const express = require('express')
const { PORT } = require('./config/server.config')
const bodyParser = require('body-parser');
const { routerV1 } = require('./router/v1/routes');
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text())

app.use('/api',routerV1)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

