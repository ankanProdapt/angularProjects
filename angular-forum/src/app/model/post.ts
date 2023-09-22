import { Comment } from "./comment";
import { User } from "./user";

export interface Post {
    title: string;
    author: User;
    content: string;
    comments: Comment[];
    likesCount: number;
}