import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
const [Comments, setComments]=useState([]);

useEffect((=>{
  const fetchComments=async()=>{
    try{
      const res=await axios.get(`/comments/${videoId}`);
      setComments(res.data);

    }catch(err){}
  }
  fetchComments(;)
}, [videoId]))

  return (
    <Container>
      <NewComment>
        <Avatar src='../img/logo.png' />
        <Input placeholder='Add a comment' />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
