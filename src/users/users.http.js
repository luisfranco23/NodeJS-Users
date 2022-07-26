const { getAllUsers,createUser,deleteUserById,getUserById,updateUserById } = require("./users.controllers")

const getAll = (req, res) => {
    const data = getAllUsers
    res.status(200).json(data)
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    if (id) {
        const data = getUserById(id)
        if (data.id) {
            res.status(200).json(data) 
        }else{
            res.status(400).json({message: 'Invalid ID'})
        }
    }else{
        res.status(400).json({message: 'Id is not a number'})
    }
}

const deleteUser = (req, res) => {
    const id = Number(req.params.id)
    if( typeof id === 'number'){
        const deleted = deleteUserById(id)
        if (deleted) {
            res.status(204).json
        }else{
            res.status(400).json({message: 'Try width'})
        }
    }else{
        res.data(400).json({message: 'Invalid ID'})
    }
}


const create = (req, res) => {
    const data = req.body
    if (data.name && data.age && data.email && data.country && data.phone){
        const response = createUser(data)
        res.status(201).json(response)
    }else{
        res.status(400).json({message: 'Invalid Arguments'})
    }
}

module.exports = {
    getAll,
    getById, 
    deleteUser,
    create
}