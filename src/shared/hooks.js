import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../store/slices/auth";

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

export const useGetSinglePost = (url, postId) => {
    const [postList, setPostList] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getSinglePost = async () => {
            const response = await fetch(url + postId);
            if (response.ok) {
                const json = await response.json();
                setPostList(json);
                setIsLoading(false);
            } else {
                console.log("error");
            }
        };
        getSinglePost();
    }, [postId, url]);

    return [postList, setPostList, isLoading];
};

export const useLoginValidation = () => {
    const [loginValidationLength, setLoginValidationLength] = useState(false);
    const [loginValidationNumbers, setLoginValidationNumbers] = useState(false);
    const [passwordLength, setPasswordLength] = useState(false);
    const [passwordNumber, setPasswordNumber] = useState(false);
    const [passwordСapital, setPasswordCapital] = useState(false);
    const [passwordLower, setPasswordLower] = useState(false);
    const [passwordUnderline, setPasswordUnderline] = useState(false);
    const [userData, setUserData] = useState({
        login: "",
        password: "",
    });

    localStorage.setItem("user", userData.login);

    const dispatch = useDispatch();

    const handleLoginForm = (e) => {
        e.preventDefault();
        if (
            loginValidationLength &&
            loginValidationNumbers &&
            passwordLength &&
            passwordNumber &&
            passwordСapital &&
            passwordLower &&
            passwordUnderline
        ) {
            dispatch(logIn());
        }

        console.log(userData);
    };

    const handleLoginChange = (e) => {
        setUserData({ ...userData, login: e.target.value });
        e.target.value.length >= 4
            ? setLoginValidationLength(true)
            : setLoginValidationLength(false);
        /^[a-zA-Z1-9]+$/.test(e.target.value) === true
            ? setLoginValidationNumbers(true)
            : setLoginValidationNumbers(false);
    };

    const handlePasswordChange = (e) => {
        setUserData({ ...userData, password: e.target.value });
        e.target.value.length >= 6
            ? setPasswordLength(true)
            : setPasswordLength(false);
        /[1-9]/.test(e.target.value) === true
            ? setPasswordNumber(true)
            : setPasswordNumber(false);
        /[A-Z]/.test(e.target.value) === true
            ? setPasswordCapital(true)
            : setPasswordCapital(false);
        /[a-z]/.test(e.target.value) === true
            ? setPasswordLower(true)
            : setPasswordLower(false);
        /_/.test(e.target.value) === true
            ? setPasswordUnderline(true)
            : setPasswordUnderline(false);
    };

    const loginLengthColor = loginValidationLength ? "green" : "red";
    const loginNumbersColor = loginValidationNumbers ? "green" : "red";
    const passwordLengthColor = passwordLength ? "green" : "red";
    const passwordNumberColor = passwordNumber ? "green" : "red";
    const passwordСapitalColor = passwordСapital ? "green" : "red";
    const passwordLowerColor = passwordLower ? "green" : "red";
    const passwordUnderlineColor = passwordUnderline ? "green" : "red";

    return {
        handleLoginForm,
        handleLoginChange,
        handlePasswordChange,
        userData,
        loginLengthColor,
        loginNumbersColor,
        passwordLengthColor,
        passwordNumberColor,
        passwordСapitalColor,
        passwordLowerColor,
        passwordUnderlineColor,
    };
};

export const useLiveSearch = (posts, likedPosts) => {
    const [value, setValue] = useState("");

    const filtredPostsList = posts.filter((item) => {
        return (
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.description.toLowerCase().includes(value.toLowerCase())
        );
    });

    const filtredLikedPostsList = likedPosts.filter((item) => {
        return (
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.description.toLowerCase().includes(value.toLowerCase())
        );
    });

    return { value, setValue, filtredPostsList, filtredLikedPostsList };
};
