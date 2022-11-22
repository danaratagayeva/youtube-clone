import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { useLocation } from 'react-router-dom'
import { darkTheme, lightTheme } from '../utils/Theme'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`

export const Search = () => {
  const [videos, setVideos] = useState([])
  const query = useLocation().search

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`)
      setVideos(res.data)
    }
    fetchVideos()
  }, [query])

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  )
}
