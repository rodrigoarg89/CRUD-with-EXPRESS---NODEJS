//const userDB = []

const userDB = [{
    "id": 1,
    "name": "",
    "age": 20,
    "email": "",
    "country": "",
    "phone": ""
}];

//controlador para retornar todos mis users
const getAllUsers = () => {
    return userDB
};

const getUserById = (id) => {
    const filteredDB = userDB.filter((user) =>user.id === id)
    return filteredDB[0]
};

const createUser = (userObj) => {
    if (userDB.length === 0){
        const newUser = {
            id:  1,
            name: userObj.name,
            age: userObj.age,
            email: userObj.email,
            country: userObj.country,
            phone: userObj.phone
        }
        userDB.push(newUser)
        return newUser //siempre retornar algo n los controladorrees
    }
    const newUser = {
        id:  userDB[userDB.length-1].id + 1,
        name: userObj.name,
        age: userObj.age,
        email: userObj.email,
        country: userObj.country,
        phone: userObj.phone
    }
    userDB.push(newUser)
    return newUser
}

const deleteUser = (id) => {
    const index = userDB.findIndex(item => item.id === id)
    if(index !== -1) {
        userDB.splice(index, 1)
        // return true
    }
        // return false
        return userDB
    }


const updateUser = (id, data) => {
    const index = userDB.findIndex(item => item.id === id)
    if (data.name && data.age && data.email && data.country && data.phone) {//tienen q estar todos los campos llenos
        userDB[index] = {
            id,
            name: data.name,
            age: data.age,
            email: data.email,
            country: data.country,
            phone: data.phone
        }
        return userDB[index]
    } else {
        createUser(data)
        return userDB.at(-1)
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
};