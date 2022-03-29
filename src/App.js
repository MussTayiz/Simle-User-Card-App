import './App.css';
import { Flex, Box, Center } from '@chakra-ui/react'
import { UserDetailsProvider } from './context/UserDetailsContext'
import Header from './components/Header';
import UserCardList from './components/UserCardList'
import UserDetailsCard from './components/UserDetailsCard'

function App() {
  return (
    <UserDetailsProvider>
    <div className='App'>
      <Header />
      <Flex w='100%' p='3'>
        <Box w='3%'></Box>
        <Box bg='white' borderRadius='lg' h='600px' w='24%' overflowY="auto">
          <UserCardList />
        </Box>
        <Box w='75%' h='600px'><Center h='100%'><UserDetailsCard /></Center></Box>
      </Flex>

      <Flex m='5' w='100%' h='80px' h='80px' p='4' bg='teal' color='white' justifyContent='center'>
        This is the Footer
      </Flex>
    </div>
    </UserDetailsProvider>
  );
}

export default App;

/*
      header - content ve footer olsun
      headerda baslık olur
      contentte sol bolumde scroll etkin bir kullanıcı listesi olsun
      (box'lar içinde name  ve email  ) birtanede buton olsun tıklanınca contentin ortasında 
      detaylar listelensin 
      */