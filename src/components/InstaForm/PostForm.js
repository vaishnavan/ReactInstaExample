import axios from 'axios'
import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import './postform.css'

class PostForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userName: '',
      postUrl: '',
      desc: '',
      postDate: ''
    }
  }

  handleChange = (e) => {
      const {name, value} = e.target;
      this.setState({
          [name]:value
      })
  }

  handleClick = (e) => {
      //e.preventDefault();
      const userPost = {
          userName: this.state.userName,
          postUrl: this.state.postUrl,
          desc: this.state.desc,
          postDate:this.state.postDate,
      }
      axios.post("http://localhost:3000/insta", userPost)
      .then((res) => {
          this.props.history.push("/")
      })
  }

  render () {
    return (
      <div>
        <form autoComplete='off'>
          <div className='myform'>
            <div className='form_heading'>
              <h2>MyInstagram Story</h2>
            </div>
            <div className='input_main'>
              <div className='input_data'>
                <input placeholder='UserName' name='userName' type='text' onChange={this.handleChange} />
              </div>
              <div className='input_data'>
                <input placeholder='Image URL' name='postUrl' type='text' onChange={this.handleChange} />
              </div>
              <div className='input_data'>
                <input placeholder='Description' name='desc' type='text' onChange={this.handleChange} />
              </div>
              <div className='input_data'>
                <input name='postDate' type='date' onChange={this.handleChange} />
              </div>
              <div className='btn'>
                <button onClick={this.handleClick}>Share</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm
