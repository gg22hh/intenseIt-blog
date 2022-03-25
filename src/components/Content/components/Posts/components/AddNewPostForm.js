import React, { useRef, useEffect } from "react";
import { POSTS_URL } from '../../../../../shared/projectData';
import { setToLocalStorage } from '../../../../../shared/projectFunctions';

export const AddNewPostForm = ({ setAddNewPostForm, postsList, setPostsList }) => {
    const newPostTitle = useRef();
    const newPostText = useRef();

    const addNewPost = async (e) => {
        e.preventDefault();
        const newPost = {
            title: newPostTitle.current.value,
            description: newPostText.current.value,
            liked: false,
        };
		// const updatedPosts = [...postsList, newPost]
		
		const response = await fetch(POSTS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        });

		if (response.ok) {
			const newPostToServer = await response.json()
			setPostsList([...postsList, newPostToServer])
		} else {
			console.log('error')
		}

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
