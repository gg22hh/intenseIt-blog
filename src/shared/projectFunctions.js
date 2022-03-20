export const setToLocalStorage = (updatedPost) => {
	localStorage.setItem('blogPosts', JSON.stringify(updatedPost))
}