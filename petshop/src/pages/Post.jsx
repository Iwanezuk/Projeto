import {useState, useEffect } from 'react';
import { busca } from '../api/api';

const Post = () => { 
  const[post, setPost] = useState({})

  useEffect(() => {
    busca(`/posts/${id}`, setPost)
  }, [id])

  return(

  )
}

export default Post
