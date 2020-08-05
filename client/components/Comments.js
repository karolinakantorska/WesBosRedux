import React from 'react';

const Comments = React.createClass({
    renderComment(comment, index){
        //console.log(comment);
        return(
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button 
                        className="remove_coment" 
                        onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}
                    >&times;</button>
                </p>
            </div>
        )
            
        
    },
    handleSubmit(event){
        event.preventDefault();
        //console.log('submitting the form');
        //console.log(this.refs);
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        // console.log(postId, author, comment );
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form 
                    ref="commentForm" 
                    className="comment_form"
                    onSubmit={this.handleSubmit}
                >
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
});

export default Comments;