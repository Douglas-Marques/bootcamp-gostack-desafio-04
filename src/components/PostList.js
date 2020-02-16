import React, { Component } from 'react'
import './PostList.css'

import Post from './Post'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Henrique Kalife',
          avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
        },
        date: '09 Nov 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
            },
            content: " A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          },
          {
            id: 2,
            author: {
              name: 'Rodrigo Abreu',
              avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
            },
            content: "Olha a oportunidade aí, padrinho!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Douglas Marques',
          avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
        },
        date: '08 Nov 2019',
        content: 'Caraca, React é bom mesmo!',
        comments: [
          {
            id: 3,
            author: {
              name: 'Douglas Silva',
              avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
            },
            content: "Eu te avisei ;)"
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )
  }
}

export default PostList
