import { useContext } from 'react'
import { Box, Spacer } from '@chakra-ui/react'
import UserDetailsContext from '../../context/UserDetailsContext'

function UserDetailsCard() {
    const { details } = useContext(UserDetailsContext)
    console.log(details)
    return (

        <Box p='3' bg='white' m='3' maxW='sm' w='100%' borderWidth='1px' borderRadius='lg' borderColor='teal'>
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated>
                {details.item.name}
                <Spacer />
                {details.item.email}
                <Spacer />
                {details.item.phone}
                <Spacer />
                {details.item.username}
                <Spacer />
                {details.item.website}
                <Spacer />
                Company: {details.item.company.name}
                <Spacer />
                Address: {details.item.address.city} - {details.item.address.street} - {details.item.address.suite}
                <Spacer />
                
            </Box>

        </Box>
    )
}

export default UserDetailsCard