// increment likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index,
    }
}
// add comment
export function addComment(postId, author, comment){
    console.log('dispatching add comment');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
    }
}
// delete comment
export function removeComment(postId, index) {
    console.log('remove comment');
    return {
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
}
