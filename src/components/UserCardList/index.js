import { useContext } from 'react'
import UserCard from '../UserCard'
import { GetUserList } from '../../api'
import { useQuery } from 'react-query'

function UserCardList() {
    const { isLoading, error, data } = useQuery('users', GetUserList)

    if (isLoading) return "Loading..."

    if (error) return "An error has occurred: " + error.message

    return (
        
            data.map((item, key) => 
                <UserCard key={key} item={item}/>
            )
            
        
    )
}

export default UserCardList