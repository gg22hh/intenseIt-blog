import React, { useState, useEffect } from "react";
import "./Posts.css";
import { PostItem } from "./components/PostItem";
import { SearchForm } from "../SearchForm/SearchForm";
import { AddNewPostForm } from './components/AddNewPostForm';
import { setToLocalStorage } from '../../../../shared/projectFunctions';
import loadingGif from '../../../../assets/images/loading.gif'

export const Posts = () => {
    const [postsList, setPostsList] = useState([]);
	const [addNewPostForm, setAddNewPostForm] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		const getPosts = async () => {
			const response = await fetch(
                "https://622a3b7fbe12fc4538b614ed.mockapi.io/intenseBlog/"
            );
			const json = await response.json()
			setPostsList(json)
			setIsLoading(false)
		}
		getPosts()
	}, [])

    const blogPosts = postsList.map((item, position) => {
        return (
            <PostItem
                key={item.id}
                image={item.image}
                title={item.title}
                text={item.description}
                liked={item.liked}
                setLike={() => setLike(position)}
                deletePost={() => deletePost(position)}
                position={position}
                postsList={postsList}
                setPostsList={setPostsList}
            />
        );
    });

    const setLike = (position) => {
        const updatedPost = [...postsList];
        updatedPost[position] = {
            ...updatedPost[position],
            liked: !updatedPost[position].liked,
        };

		setToLocalStorage(updatedPost)
		setPostsList(updatedPost)
    };

	const deletePost = (position) => {
		const updatedPost = [...postsList]
		const areYouSure = window.confirm(`Delete: ${updatedPost[position].title}`)
		areYouSure && updatedPost.splice(position, 1);

		setToLocalStorage(updatedPost);
		setPostsList(updatedPost)
	}

    return (
        <div className="posts">
            <div className="posts__header">
                <h2 className="posts__title">Posts</h2>
                <button
                    onClick={() => setAddNewPostForm(true)}
                    className="posts__addNewPost"
                >
                    Add new post
                </button>
                <SearchForm />
            </div>

            {addNewPostForm && (
                <AddNewPostForm
                    setAddNewPostForm={setAddNewPostForm}
                    setPostsList={setPostsList}
                    postsList={postsList}
                />
            )}

            <div className="posts__inner">
				{
					isLoading ? <img className='posts__loading' src={loadingGif} alt="" /> : blogPosts
				}
			

				
			</div>
        </div>
    );
};
