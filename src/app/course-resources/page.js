import { getPosts } from "./ghost-client"
import { Card, CardBody, Text, Image } from '@chakra-ui/react'
import Link from 'next/link'

export default async function CourseResources() {
  const getPost = await getPosts()
  return (
    <>
    <div style = {{ padding : "30px", display: "flex", flexDirection: "row" }}>
        {
          getPost?.map(
            item => {
              return <>
                <Link href={`/blog?name=${item.slug}`}>
                <Card maxW='sm' maxH='sm' minH='sm' marginRight={"40px"}>
                    <CardBody>
                        <Image
                        src={item.feature_image}
                        alt='Image'
                        borderRadius='sm'
                        />
                        <Text align="center">{item.title}</Text>
                    </CardBody>
                </Card>
                </Link>
              </>
            })
        }
    </div>
    </>
  )
}