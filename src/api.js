import axios from 'axios'

export const GetUserList = async () => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    return data
}