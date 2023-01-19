import { FC, lazy, useState } from "react";
import { Card, Container, Text } from "@nextui-org/react"

import { Post } from "interfaces";
const Search = lazy(() => import("./modules/Search"));
const Loading = lazy(()=> import("../components/Loading"));
const PostCard = lazy(() => import("./modules/PostCard"));

const App: FC = () => {
  const [ isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState([]);

  const updateLoader = (loading: boolean) => {
    setIsLoading(loading);
  }

  const updatePosts = (posts: []) => {
    setPosts(posts);
  }

  return (
    <div className="mt-6 mx-3 flex items-center flex-col">
      <Card className="my-5 max-w-4xl">
        <Card.Header css={{ justifyContent: "center" }}>
          <Text h1 size={40} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%", textAlign: "center" }} weight="bold">
            Stay updated with <u>HACKER NEWS</u>
          </Text>
        </Card.Header>
        <Card.Body>
          <Search updateLoader={updateLoader} updatePosts={updatePosts} />
          <Container className="my-5">
            {isLoading ? <Loading /> : <></>}
            {posts.length !== 0 ? posts.map((post: Post) => <PostCard post={post} key={post?.objectID} />) : <></>}
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App
