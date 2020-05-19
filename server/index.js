const express = require('express')
const ctrl = require('./controllers/messages_controller')
const app = express()

app.use(express.json())

app.get('/api/messages', ctrl.read)
app.post('/api/messages', ctrl.create)
app.put('/api/messages/:message_id', ctrl.update)
app.delete('/api/messages/:message_id', ctrl.delete)

SERVER_PORT = 3001

app.listen(SERVER_PORT, () => console.log(`Server running on port: ${SERVER_PORT}`))