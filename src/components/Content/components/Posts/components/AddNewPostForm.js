import React, { useRef } from "react";

export const AddNewPostForm = ({ setAddNewPostForm, postsList, setPostsList }) => {
    const newPostTitle = useRef();
    const newPostText = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: postsList.length + 1,
            title: newPostTitle.current.value,
            text: newPostText.current.value,
            liked: false,
        };
		const updatedPosts = [...postsList]
		updatedPosts.push(newPost)
		setPostsList(updatedPosts)
		setAddNewPostForm(false)
    };

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
