import { Container, VStack } from '@chakra-ui/react'
import type { ReactElement } from 'react'

import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: {children: ReactElement}): JSX.Element {
    return (
        <Container>
            <VStack spacing={2} align="right">
                <Header />
                {children}
                <Footer />
            </VStack>
        </Container>
    )
}
