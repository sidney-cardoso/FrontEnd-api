const url = 'http://localhost:5000/api'
const getUsers = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => (renderApiResult.textContent = JSON.stringify(data)))
        .catch(error => console.error(error))
}
const getUser = id => {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })

        .catch(error => console.error(error))
}
const addUser = newUser => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => (alertApi.textContent = data))
        .catch(error => console.error(error))
}
const updateUser = (updatedUser, id) => {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => (alertApi.textContent = data))
        .catch(error => console.error(error))
}

const deleteUser = id => {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => (alertApi.textContent = data))
        .catch(error => console.error(error))
}

const newUser = {
    name: 'john Doe',
    avatar: 'https://picsum.photos/200/300',
    city: 'Rio de Janeiro'
}
addUser(newUser)

const updatedUser = {
    name: 'jane Doe',
    avatar: 'https://picsum.photos/200/300',
    city: 'Rio Grande do Norte'
}

updateUser(updatedUser, 4)

deleteUser(4)
getUsers()
getUser(1)
