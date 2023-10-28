import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';

export const metadata = {
    title: 'CS222@UIUC',
    description: 'Course Website for CS222@UIUC'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body><ChakraProvider>{children}</ChakraProvider></body>
        </html>
    );
}
