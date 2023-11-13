// `app/page.js` is the UI for the `/` URL
'use client'
import { useSearchParams } from 'next/navigation'
import { getSinglePost } from "./ghost-client"
import { Card, CardBody, Text, Image } from '@chakra-ui/react'

export default async function BlogPage() {
    const searchParams = useSearchParams()
    const search = searchParams.get('name')
    const getPost = await getSinglePost(search)
    return (
      <div style = {{ padding : "30px" }}>
          {
            <>
              <div style = {{width: "100%"}} dangerouslySetInnerHTML = {{__html: getPost.html}}></div>
            </>
          }
      </div>
    )
  }