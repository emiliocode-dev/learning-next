import PostCard from "@/components/PostCard";
import { Post } from "@/models/Post.model";

const loadPosts = async(): Promise<Array<Post>>=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    await new Promise((resolve)=>setTimeout(resolve, 4000)) 
    return data;
}
export default async function PostPage() {
    const posts: Array<Post> = await loadPosts();
  return (
    <>
        {
        posts.map((value, index)=>(
            <PostCard  post={value} key={index}/>
        ))
    }
    </>
  )
}
