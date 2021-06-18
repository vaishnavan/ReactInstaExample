import axios from 'axios';
import React, { Component } from 'react'
import './postDisplay.css';

class PostDisplay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             instaArr:[],
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3000/insta")
        .then((res) => {
            this.setState({
                instaArr:res.data
            })
        })
    }

    handleDelete = (id) => {
        
        axios.delete(`http://localhost:3000/insta/${id}`)
        .then((res)=> {
            console.log(res);
            const deletePost = this.state.instaArr.filter((data) => data.id !== id);
            this.setState({
                instaArr:deletePost
            })
        })

        //const posts = this.state.posts.filter(item => item.id !== id);
    }
    

    render() {
        const {instaArr} = this.state;
        return (
            <div>
                <div className="card-main">
                    {instaArr.reverse().map((data, i) => {
                        return(
                        <div key={i} className="card">
                            <div className="card_header">
                                <div className="avatar"></div>
                                <div className="userName_profile">
                                    <h3>{data.userName}</h3>
                                </div>
                            </div>
                            <div className="card_post">
                                <img src={data.postUrl} alt="no" />
                            </div>
                            <div className="card_desc">
                                <p>{data.desc}</p>
                                <span style={{fontSize:"12px"}}>{data.postDate}</span>
                                <button onClick={() => this.handleDelete(data.id)} style={{margin:"0 10px"}}>Delete</button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PostDisplay
