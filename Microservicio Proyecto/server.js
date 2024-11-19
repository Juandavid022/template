const app = require('./app')
const dotenv = require('dotenv').config()

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`arrancó por puerto: ${app.get('port')}`)
})