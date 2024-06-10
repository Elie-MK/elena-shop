export interface user {
    id: number
    name: string
    email: string
    password: string
    isAdmin: string
}

export const UsersDummy:user[] = [
    {
        id:1, 
        name: 'admin',
        email: 'admin@admin.com', 
        password: 'admin',
        isAdmin: 'true'
    }, 
    {
        id:2, 
        name: 'Elena',
        email: 'elena@email.com', 
        password:"123456", 
        isAdmin: 'false'
    }
]