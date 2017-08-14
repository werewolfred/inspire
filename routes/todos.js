// You should put your todo schema should go here
var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
    currentTask: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false }
})

var Todos = mongoose.model('todo', todoSchema)

router.get('/', function (req, res, next) {
    Todo.find({})
        .then((todos) => {
            res.send(todos)
        })
        .catch(next)
})
router.post('/', function (req, res, next) {
    Todos.create(req.body)
        .then((todo) => {
            res.send(todo)
        })
        .catch(next)
})
router.delete('/:todoId', (erq, res, next) => {
    var todoId = req.params.todoId
    var updateTodoObj = req.body
    Todos.findByIdAndUpdate(todoId, updatedTodoObj)
        .then(todo => {
            res.send({ message: 'successfully updated Todo' })
        })
        .catch(next)
})
router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.json({ success: false, error: err })
    } else {
        res.json({ success: false, error: err.message })
    }
}
module.exports = router
