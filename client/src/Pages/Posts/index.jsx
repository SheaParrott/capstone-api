import React, { Component } from 'react'
import './style.css'
import Post from '../../Components/Post/Post'
import Header from '../../Components/Header'
import axios from 'axios'
import Loading from '../../Components/Loading'
import auth from '../../auth'
import history from '../../history'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: false
    }
  }

  componentDidMount = () => {
    if (!auth.isAuthenticated()) {
      history.replace('/SignIn')
    } else {
      window.scrollTo(0, 0)
      this.getPosts()
    }
  }
  renderLoading = () => {
    return (
      <div className="marginFromHeader">
        <Loading />
      </div>
    )
  }
  getPosts = () => {
    const url =
      this.props.match.params.kind === 'interested'
        ? `/api/interested_posts/${this.props.match.params.profile_id}`
        : '/api/profile_taggings'

    axios
      .get(`${url}`, {
        headers: {
          Authorization: `Bearer ${auth.getIdToken()}`
        }
      })
      .then(response => {
        this.setState({ posts: response.data.posts })
      })
  }

  render() {
    if (!this.state.posts) {
      return this.renderLoading()
    }
    return (
      <div className="columnCentering">
        <Header />
        <div className="marginFromHeader">
          {this.state.posts.map((post, index) => {
            return (
              <Post
                removeFromInterested={this.removeFromInterested}
                onPostWithCommentsPage={false}
                key={index}
                post={post}
                onProfilePage={false}
                onPostsPage={true}
                getPosts={this.getPosts}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Posts

//
