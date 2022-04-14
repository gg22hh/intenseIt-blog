export const setToLocalStorage = (updatedPost) => {
    localStorage.setItem("blogPosts", JSON.stringify(updatedPost));
};

export const likePost = async (post, url, setPostsList, postsList) => {
    const updatedPost = { ...post, liked: !post.liked };

    const response = await fetch(url + post.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
    });

    if (response.ok) {
        const updatedPostFromServer = await response.json();
        setPostsList(
            postsList.map((post) => {
                if (post.id === updatedPostFromServer.id) {
                    return updatedPostFromServer;
                }

                return post;
            })
        );
    } else {
        console.log(`${response.status} - ${response.statusText}`);
    }
};

export const deleteData = async (postId, url, setPostsList, postsList) => {
    const areYouSure = window.confirm("Are you sure?");
    if (areYouSure) {
        const response = await fetch(url + postId, {
            method: "DELETE",
        });

        if (response.ok) {
            setPostsList(postsList.filter((post) => post.id !== postId));
        } else {
            console.log(`${response.status} - ${response.statusText}`);
        }
    }
};
