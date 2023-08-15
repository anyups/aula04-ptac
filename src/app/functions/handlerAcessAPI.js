'use server'

const getLista = [
    {
        name: 'any',
        email: 'any@gmail.com',
        password: '123987',
        token: 'fhwoui324thb6ewr5ynh47ef3bv52wq4136r136qefr4v682q54b'
    },
    {
        name: 'iza',
        email: 'izabella@gmail.com',
        password: '789362',
        token: 'wg354qewr5h4gqe6af4bz2dx1cbx2fg4jfgt4ykjeserf4g5qae4'
    },
    {
        name: 'gabriel',
        email: 'gabriel@gmail.com',
        password: '768970',
        token: '1w41th25w41ets0g56s2r4t1tbg96sr0th9wr4t0h9w74tj9h68/'
    },
    {
        name: 'mendes',
        email: 'mendes@gmail.com',
        password: '564812',
        token: 'a4wdg21awed3g54ae3r4ga534erg54ar0baeae54g0a9er5ghrg0'
    }
]

const getUserAuthenticated = (user) => {
    let userAuth = {};
    getLista.map((user) => {
        
    })
}

const getUsers = (user) =>{
    let lista = {};
    getLista.map(user);
    return lista.redirect('/pages/dashboard');
}
export { getUsers, getUserAuthenticated, getLista };