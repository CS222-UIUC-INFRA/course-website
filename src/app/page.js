import SampleComponent from '@/components/SampleComponent/SampleComponent';
import Image from 'next/image';
import { ChakraProvider } from '@chakra-ui/react'

// Added this for testing, can be removed later
import { Card, CardBody } from '@chakra-ui/react'

export default function Home() {
    return (
            <Card>
                <CardBody>
                    {/* Delete the SampleComponent before starting work on the page */}
                    <SampleComponent samplePropTitle="This is a Sample Component" />
                </CardBody>
            </Card>
    );
}
