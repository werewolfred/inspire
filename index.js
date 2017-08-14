//require your dependencies
var express = require('express')
var bodyParser = require('body-parser')
var dbConnect = require('./config/db/mlab-config')
var todosRouter = require('./routes/todos')
var port = 3000


//tell your server what it needs to use
var server = express()
server.listen(port,()=>{
    console.log('listening on port: ', port)
})

server.use(express.static(__dirname + '/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

//register your todos routes as api/routes

var todoRouter = require('./routes/todos')
server.use('/api/todos', todoRouter)


//start your server listening....