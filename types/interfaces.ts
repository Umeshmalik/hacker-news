export interface SearchProps {
    updateLoader: Function,
    updatePosts: Function
}

export interface Post {
    author?: string;
    created_at?: Date;
    objectID?: string;
    story_text?: string;
    title?: string;
    text?: string;
    id?: number;
    points?: number;
    children?: object[];
    type?: string;
    url?: string;
}

export interface PostCardProps {
    post: Post
}