import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {

    state = {
        posts: [], 
    }
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/posts');
        this.setState({posts:response.data});
        console.log(response.data);
    }

    render() {
        const { posts } = this.state;
        return (
        <div className="posts-list">
            {posts.map(post => (
                <article key={post.id}>
                    <strong>{post.title}</strong>

                    <p>{post.body}</p>

                    <a href={post.id}>Acessar Comentarios</a>
                </article>
            ))}
        </div>
            )
    }
}