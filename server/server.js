const express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    })
})

app.get('/users', (req, res) => {
    var users = []
    users.push({
        name: 'Saint',
        age: 24
    })
    users.push({
        name: 'Save',
        age: 19
    })
    res.send(users)
})
app.listen(3000)

module.exports.app = app