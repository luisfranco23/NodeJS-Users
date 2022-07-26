const router = require('express').Router()
const httpUsers = require('./users.http') 

// router.get('/users')

router.route('/users')
    .get(httpUsers.getAll)
    .post(httpUsers.create)

router.route('/users/:id')
    .get(httpUsers.getById)
    .put()
    .delete(httpUsers.deleteUser)


module.exports = {
    router
}
