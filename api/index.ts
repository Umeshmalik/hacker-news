import axios from "axios";

interface FetchPostsProps {
    query: string
}

interface FetchPostProps {
    postId: string
}

const hackerNewsApi = import.meta.env.VITE_HACKER_NEWS_API

export const fetchPosts = async ({query}: FetchPostsProps) => (await axios.get(`${hackerNewsApi}/api/v1/search?query=${query}`))?.data;

export const fetchPost = async ({postId}: FetchPostProps) => (await axios.get(`${hackerNewsApi}/api/v1/items/${postId}`))?.data;