import { busca } from "../api.jsx";
import { useState } from "react";
import { Link } from 'react-router-dom'

const ListaPost = ({ url }) => {
    const [posts, setPosts] = useState([])
    return (
        <section className="posts container">
            {
                posts.map((posts) =>
                    <section className="posts container">
                        {
                            posts.map((post) =>
                                <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`} >
                                    <article key={post.id}>
                                        <h3 className="cartao-post__titulo">
                                            {post.title}
                                        </h3>
                                        <p className="cartao-post__meta">
                                            {post.metadescription}
                                        </p>
                                    </article>
                                </Link>
                            )
                        }
                    </section>

                )
            }

        </section>
    )
}

export default ListaPost