import React, { useRef, useState } from "react";
import { POSTS_URL } from "../../../../../shared/projectData";

export const ChangeSinglePost = ({
    postList,
    setActiveChangeForm,
    postsList,
    setPostsList,
    setPostList,
}) => {
    const [title, setTitle] = useState(postList?.title);
    const [text, setText] = useState(postList?.description);

    const changeTitle = useRef();
    const changeText = useRef();

    const changePost = async (e) => {
        e.preventDefault();

        const updatedPost = {
            ...postList,
            title: changeTitle.current.value,
            description: changeText.current.value,
        };

        const response = await fetch(POSTS_URL + postList.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),
        });

        if (response.ok) {
            const updatedPostFromServer = await response.json();
            setPostList(updatedPostFromServer);
            setPostsList(
                postsList.map((post) => {
                    if (post.id === updatedPostFromServer.id) {
                        return updatedPostFromServer;
                    }

                    return post;
                })
            );
        } else {
            console.log(`Error`);
        }

        setActiveChangeForm(false);
    };

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
