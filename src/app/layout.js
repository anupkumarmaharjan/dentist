import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export const metadata = {
	title: 'Dentistry',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={'flex flex-col flex-1 min-h-[100vh] text-base'}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
