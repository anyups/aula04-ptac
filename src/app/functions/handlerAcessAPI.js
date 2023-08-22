'use server'

const getLista = [
    {
        name: 'any',
        email: 'any@gmail.com',
        password: '123987',
        token: 'fhwoui324thb6ewr5ynh47ef3bv52wq4136r136qefr4v682qasd'
    },
    {
        name: 'iza',
        email: 'izabella@gmail.com',
        password: '789362',
        token: 'fhwoui324thb6ewr5ynh47ef3bv52wq4136r136qefr4v682q54b'
    },
    {
        name: 'gabriel',
        email: 'gabriel@gmail.com',
        password: '768970',
        token: 'fhwoui324thb6ewr5ynh47ef3bv52wq4136r136qefr4v682q54b/'
    },
    {
        name: 'mendes',
        email: 'mendes@gmail.com',
        password: '564812',
        token: 'fhwoui324thb6ewr5ynh47ef3bv52wq4136r136qefr4v682q651'
    }
]

const getUserAuthenticated = (user) => {
    let userAuth = {};
    getLista.map((usuario) => {
        if (usuario.email === user.email && usuario.password === user.password) {
            userAuth = usuario
        } 
    })
    return userAuth;
}

const getUsers = (user) =>{
    return getLista
}
export { getUsers, getUserAuthenticated };