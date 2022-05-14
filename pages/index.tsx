import type { NextPage } from 'next'
import { VStack, Heading } from '@chakra-ui/react'


const Home: NextPage = () => {
  return (
    <VStack spacing={5}>
        <Heading as='h1'>
            Package Manager for C++ Developers
        </Heading>
        <Heading as={'h2'} size={'md'}>
            Poac is a C++ package manager which is for open source software.
            <br/>
            Easy to introduce to your projects; you can use packages intuitively.
        </Heading>
    </VStack>
  )
}

export default Home
