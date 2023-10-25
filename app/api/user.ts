import { User } from '../utils/types'

export const getAllUsers = async (
    searchString: string = ''
): Promise<User[]> => {
    let users: User[] = []
    try {
        const res = await fetch(
            `http://jsonplaceholder.typicode.com/users?name_like=${searchString}`,
            { cache: 'no-store' }
        )
        users = await res.json()
    } catch (error) {
        console.log('Error in getUsers:: ', error)
    }
    return users
}

export const getUserDetails = async (
    userId: number
): Promise<Partial<User>> => {
    let user: Partial<User> = {}
    try {
        const res = await fetch(
            `http://jsonplaceholder.typicode.com/users/${userId}`,
            { cache: 'no-store' }
        )
        user = await res.json()
        return user
    } catch (error) {
        console.log('Error in getUserDetails:: ', error)
    }
    return user
}
