import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { busca } from '../api';

const Post = () => { 
  const { id } = useParams()  
  const[post, setPost] = useState({})

  useEffect(() => {
    busca(`/posts/${id}`, setPost)
  }, [id])

  return(
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <h3 className="cartao-post__meta">{post.metadescription}</h3>
        <br />
        <p className="carta__texto">{post.body}</p>
      </article>
    </main>
  )
}

export default Post
