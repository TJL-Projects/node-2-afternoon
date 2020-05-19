let messages = []
let id = 0

module.exports = {

    read: (req, res) => {
        res.status(200).send(messages)
    },

    create: (req, res) => {
        const {text, time} = req.body

        messages.push({id, text, time})

        id++

        res.status(200).send(messages)

    },

    update: (req, res) => {
        const {message_id} = req.params
        const {text,time} = req.body

        let index = messages.findIndex(element => element.id === +message_id)

        if(index === -1){
            res.status(404).send('no message available')
        }

        let newMessage = messages[index]

        messages[index] = {
            id: +message_id,
            text: text || newMessage.text,
            time: time
        }

        res.status(200).send(messages)
    },
    
    delete: (req, res) => {
        let {message_id} = req.params

        let index = messages.findIndex(element => element.id === +message_id)

        // if(index === -1){
        //     res.status(404).send('No message to delete')
        // }

        messages.splice(index, 1)

        res.status(200).send(messages)
    }
}