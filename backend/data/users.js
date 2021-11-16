import bcrypt from 'bcryptjs'

const users = [
    {
        name:"Admin User",
        email: "admin@gmail.com",
        password: bcrypt.hashSync('123', 10),
        isAdmin: true
    },
    {
        name:"Doreen Dodoo",
        email: "doreen@gmail.com",
        password: bcrypt.hashSync('123', 10)
       
    },
    {
        name:"Angie Amengu",
        email: "angie@gmail.com",
        password: bcrypt.hashSync('123', 10)
     
    }
]

export default users