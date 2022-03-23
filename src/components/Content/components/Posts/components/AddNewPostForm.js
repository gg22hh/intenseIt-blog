import React, { useRef, useEffect } from "react";
import { setToLocalStorage } from '../../../../../shared/projectFunctions';

export const AddNewPostForm = ({ setAddNewPostForm, postsList, setPostsList }) => {
    const newPostTitle = useRef();
    const newPostText = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: postsList.length + 1,
            title: newPostTitle.current.value,
            description: newPostText.current.value,
            liked: false,
        };
		const updatedPosts = [...postsList, newPost]
		
		setPostsList(updatedPosts);
		setToLocalStorage(updatedPosts)
		setAddNewPostForm(false)
    };

	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') setAddNewPostForm(false)
		}
		window.addEventListener('keyup', handleEscape)
		return () => window.removeEventListener("keyup", handleEscape);
	})

    return (
        <>
            <form onSubmit={addNewPost} className="form">
                <button
                    onClick={() => setAddNewPostForm(false)}
                    className="form__close"
                >
                    &#10008;
                </button>
                <h1>Add new Post</h1>
                <div>
                    <input
                        type="text"
                        className="form__login"
                        placeholder="Title"
                        ref={newPostTitle}
                        required
                    />
                </div>
                <div>
                    <textarea
                        className="form__textarea"
                        cols="30"
                        rows="7"
                        placeholder="Description"
                        ref={newPostText}
                        required
                    />
                </div>
                <button type="submit" className="form__btn">
                    Отправить
                </button>
            </form>
            <div
                onClick={() => setAddNewPostForm(false)}
                className="overlay"
            ></div>
        </>
    );
};
