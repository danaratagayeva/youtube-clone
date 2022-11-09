import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get('/videos/random')
      console.log(res.data)
      setVideos(res.data)
    }
    fetchVideos()
  }, [])

  return (
    <Container>
      {videos.map((video) => (
        <Card video={video} key={video._id} />
      ))}
    </Container>
  )
}

export default Home
