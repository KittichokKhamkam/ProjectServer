const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const CarController = require('./controllers/CarController')
const CommentController = require('./controllers/CommentController')

module.exports = (app) => {

    // get all user
    app.get('/users', isAuthenController, UserController.index)

    //get all
    app.get('/users', UserController.index),

    //create 
    app.post('/user', UserController.create),

    //edit
    app.put('/user/:userId', UserController.put),

    //delete
    app.delete('/user/:userId', UserController.delete)

    //show
    app.get('/user/:userId', UserController.show)
    
    //login
    app.post('/login', UserAuthenController.login)

    // car route
    // create car
    app.post('/car', CarController.create)

    // edit car, suspend, active
    app.put('/car/:carId', CarController.put)

    // delete car
    app.delete('/car/:carId', CarController.remove)

    // get car by id
    app.get('/car/:carId', CarController.show)

    // get all car
    app.get('/cars', CarController.index)

    // comment route
    // create comment
    app.post('/comment',
        CommentController.create)

    // edit comment, suspend, active
    app.put('/comment/:commentId',
        CommentController.put)

    // delete comment
    app.delete('/comment/:commentId',
        CommentController.remove)

    // get comment by id
    app.get('/comment/:commentId',
        CommentController.show)

    // get all comment
    app.get('/comments',
        CommentController.index)

}