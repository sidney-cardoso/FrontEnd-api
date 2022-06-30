const url = 'http://localhost:5000/api'

const getUsers = () => {
    axios
        .get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.log(error))
}

const addNewUser = newUser => {
    axios
        .post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
}
const getUser = id => {
    axios
        .get(`${url}/${id}`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch(error => console.log(error))
}
const updateUser = (id, userUpdated) => {
    axios
        .put(`${url}/${id}`, userUpdated)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
}
const deleteUser = id => {
    axios
        .delete(`${url}/${id}`)
        .then(response => console.log(response))

        .catch(error => console.log(error))
}

const userUpdated = {
    name: 'Lucas',
    city: 'São Gonçalo',
    avatar: 'https://randomuser.me/api/portraits/'
}
const newUser = {
    name: 'John',
    avatar: 'https://i.pravatar.cc/300',
    city: 'New York'
}

getUsers()
getUser(1)
addNewUser(newUser)
updateUser(3, userUpdated)
deleteUser(4)
