import React, { useRef, useState, useEffect } from "react";
import { setToLocalStorage } from '../../../../../shared/projectFunctions';

export const ChangePostForm = ({
    setActiveChangeForm,
    position,
    postsList,
    setPostsList,
}) => {
	const [title, setTitle] = useState(postsList[position].title)
	const [text, setText] = useState(postsList[position].description)

    const changeTitle = useRef();
    const changeText = useRef();

    const changePost = (e) => {
        e.preventDefault();

        const updatedPosts = [...postsList];
        updatedPosts[position] = {
            ...updatedPosts[position],
            title: changeTitle.current.value,
			description: changeText.current.value
        };

		setPostsList(updatedPosts)
		setToLocalStorage(updatedPosts);
		setActiveChangeForm(false)
    };

	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') setActiveChangeForm(false)
		}
		window.addEventListener('keyup', handleEscape)
		return () => window.removeEventListener("keyup", handleEscape);
	})

    return (
        <>
            <form onSubmit={changePost} className="form">
                <button
                    onClick={() => setActiveChangeForm(false)}
                    className="form__close"
                >
                    &#10008;
                </button>
                <h1>Change Post</h1>
                <div>
                    <input
                        type="text"
                        className="form__login"
                        ref={changeTitle}
                        value={title}
						onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <textarea
                        cols="30"
                        rows="10"
                        className="form__textarea"
						value={text}
						onChange={(e) => setText(e.target.value)}
                        ref={changeText}
                    ></textarea>
                </div>
                <button type="submit" className="form__btn">
                    Change
                </button>
            </form>
            <div
                onClick={() => setActiveChangeForm(false)}
                className="overlay"
            ></div>
        </>
    );
};