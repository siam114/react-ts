import { use } from "react"

function Posts({postDataPromise}) {

    const posts = use(postDataPromise)
    console.log(posts)
return (
    <div>
        <h1>Posts: {posts.length}</h1>
    </div>
)
}

export default Posts