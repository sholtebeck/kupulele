import { useState, useEffect  } from 'react';
import useUser from '../hooks/useUser';
import {getDate} from './butterfly-data';
import {setButterfly} from '../firebase/firestore';

const AddComment = ({ butterfly, onComment }) => {
    const { user } = useUser();
    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        if (commentText) {
            const newComment={date:getDate(), user:name, text: commentText }
            let newButterfly= {...butterfly };
            if (newButterfly.comments) {
                newButterfly.comments.push(newComment);
            } else {
                newButterfly.comments=[newComment];
            }
            await setButterfly(newButterfly);
            onComment(newButterfly);
        } 
        setName('');
        setCommentText('');
    }

    useEffect(() => {
        if (user) { setName(user.email); }
        setCommentText('');
      }, [user]);

    return (
        <div id="add-comment">
            <p />
            <h2>Add a Comment:</h2>
                    <textarea
                    placeholder="Comment Text"
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                rows="3"
                cols="40" />
        <input 
        placeholder="Name (Email)"  value={name}
        onChange={(event) => { setName(event.target.value); }}
        />
        {commentText && <button onClick={addComment}><i className="plus icon" /></button> }
        </div>
    )
}

export default AddComment;