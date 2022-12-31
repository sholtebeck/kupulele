const Comments = ({ comments }) => {

    return (
    <div id="comments">
    <h2>Comments ({comments.length}):</h2>

    {comments.map(comment => (
        <div className="comment" key={comment.text}>
            <h4>{comment.date} ({comment.user}): {comment.text}</h4>
        </div>
    ))}
    </div>
    );
 }

export default Comments;