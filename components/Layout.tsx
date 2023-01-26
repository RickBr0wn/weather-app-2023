import { Flex } from '@chakra-ui/react'
import Navbar from './Navbar'

interface _LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: _LayoutProps): JSX.Element => {
	return (
		<Flex h={'100vh'} w={'100vw'} flexDir={'column'}>
			<Navbar />
			{/* The navbar is 80px tall */}
			<Flex
				// bg='red.200'
				maxWidth={'container.lg'}
				m={'auto'}
				p={8}
				flexDir={'column'}
				h={'calc(100vh - 80px)'}
			>
				{children}
			</Flex>
		</Flex>
	)
}

export default Layout
