const userDB = []
/*
    {
        id: 1,
        name: "",
        age: 20,
        email: "",
        country: "",
        phone: ""
    }
*/
const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {
    const filteredBD = userDB.filter((user) => user.id === id)
    return filteredBD[0]
}

const createUser = (userObj) => {
    if (userDB.length === 0) {
        const newUser = {
            id: 1,
            name: userObj.name,
            age: userObj.age,
            email: userObj.email,
            country: userObj.country,
            phone: userObj.phone,
        }
        userDB.push(newUser)
        return newUser
    }
    const newUser = {
        id: userDB[userDB.length - 1].id + 1,
        name: userObj.name,
        age: userObj.age,
        email: userObj.email,
        country: userObj.country,
        phone: userObj.phone,
    }
    userDB.push(newUser)
    return newUser
}

const updateUserById = (data,id) => {
    const user = userDB.findIndex((index) => index.id === id)
    if (user !== -1) {
        userDB[user] = {
            id: id,
            name: data.name,
            age: data.age,
            email: data.email,
            country: data.country,
            phone: data.phone
        }
    }else {
        createUser(data)
    }
    return userDB[user]
}


const deleteUserById = (id) => {
    const index = userDB.findIndex(user => user.id === id)
    if (index !== -1) {
        userDB.splice(index,1)
        return true
    }else{
        return false
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}