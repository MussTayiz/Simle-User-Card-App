import { Box, Badge, Button, Spacer} from '@chakra-ui/react'
import { useContext } from 'react'
import UserDetailsContext from '../../context/UserDetailsContext'

function UserCard(props) {
  const { setDetails } = useContext(UserDetailsContext)
  
  return (
    <Box bg='white' m='3' maxW='sm' w='100%' borderWidth='1px' borderRadius='lg' borderColor='teal'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated>
          {props.item.name}
          <Spacer />
          {props.item.email}
        </Box>
        <Box mt='2' mb='2'>
          <Button onClick={() => setDetails(props)}>Show Details...</Button>
        </Box>
    </Box>
  )
}

export default UserCard