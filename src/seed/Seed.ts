import bcrypt from "bcryptjs"

interface SeedUser {
    email: string
    password: string
    name: string
    phone: string
    role: 'admin' | 'user'
}

interface SeedData {
    users: SeedUser[]
}

export const initialData: SeedData = {
    users: [
        {
            email: 'marco.ra2002@gmail.com',
            name: 'Marco Javier',
            password: bcrypt.hashSync('123456'),
            role: 'admin',
            phone:'945905580'
        },

        {
            email: 'user@gmail.com',
            name: 'User',
            password: bcrypt.hashSync('123456'),
            role: 'user',
            phone:'945987632'
        },
        
    ]
}