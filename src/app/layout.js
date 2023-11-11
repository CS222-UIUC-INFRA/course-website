import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
import NavBar from '@/components/navbar/navbar';
import MobileNavBar from '@/components/navbar/mobileNavbar';

export const metadata = {
    title: 'CS222@UIUC',
    description: 'Course Website for CS222@UIUC'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ChakraProvider>
                    <NavBar className='hidden sm:block'/>
                    <MobileNavBar className='sm:hidden'/>
                    <div style={{ margin: '20px' }}>
                    {children}
                    </div>
                </ChakraProvider>
            </body>
        </html>
    );
}
