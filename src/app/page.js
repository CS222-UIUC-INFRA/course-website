import SampleComponent from '@/components/SampleComponent/SampleComponent';
import Image from 'next/image';
import { ChakraProvider } from '@chakra-ui/react'

// Added this for testing, can be removed later
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function Home() {
    return (
        <ChakraProvider>
            <div>
                {/* Delete the SampleComponent before starting work on the page */}
                <SampleComponent samplePropTitle="This is a Sample Component" />
            </div>
            <Card>
                <CardBody>
                    <SampleComponent samplePropTitle="This is a Sample Component" />
                </CardBody>
            </Card>
        </ChakraProvider>
    );
}
