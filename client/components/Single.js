import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const { postId } = this.props.params;
        // post index comes fron adress bar and is taken from the params
        const index = this.props.posts.findIndex((post) => post.code === postId);
        // console.log(i);
        const post = this.props.posts[index];
        // console.log(posts);
        const postComments = this.props.comments[postId] || [];
        
        return (
            <div className="single-photo">
                <Photo
                    index={index}
                    post={post}
                    {...this.props}
                />
                <Comments 
                    postComments={postComments}
                    {...this.props}
                />
            </div>
        )
    }
});

export default Single;