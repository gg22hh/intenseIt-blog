import { useEffect, useState } from "react";

export const useGetPosts = (url) => {
    const [postsList, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getPosts = async () => {
            const response = await fetch(url);
            if (response.ok) {
                const json = await response.json();
                setList(json);
                setIsLoading(false);
            } else {
                console.log("error");
            }
        };
        getPosts();
    }, [url]);

    return [postsList, setList, isLoading];
};

export const useGet = (url) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(url);
            if (response.ok) {
                const json = await response.json();
                setList(json);
            } else {
                console.log("error");
            }
        };
        getPosts();
    }, [url]);

    return list;
};
