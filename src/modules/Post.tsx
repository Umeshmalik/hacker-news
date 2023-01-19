import { Card, Text } from "@nextui-org/react";
import { FC, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPost } from "../../api";
import { Post } from "interfaces";
const Loading = lazy(()=> import("../../components/Loading"));
const Comment = lazy(() => import("./PostCard"));
const Span = lazy(()=> import("../../components/Span"));

const Post: FC = () => {
    const { postId = "" } = useParams();
    const [data, setData] = useState<Post | null>();
    useEffect(() => {
        getData();
        return () => { setData(null); }
    }, [])

    const getData = async () => {
        const data = await fetchPost({ postId });
        setData(data);
    }

    if(!data) return <Loading />

    return <div className="mt-6 mx-3 flex justify-center">
        <Card className="my-5 max-w-4xl p-2">
            <Card.Header css={{ justifyContent: "center" }}>
                <Text h3 size={30} weight="bold">{data?.title}</Text>
            </Card.Header>
            <Card.Body>
                <section className="flex justify-between">
                    <section>
                        <Span icon="✍️" className="bg-gray-100 text-gray-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 capitalize w-fit p-1 my-2">{data?.author}</Span>
                        <Span icon="Type:" className="bg-indigo-100 text-indigo-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 capitalize w-fit p-1 my-2">{data?.type}</Span>
                        <Span icon="⏱️" className="bg-red-100 text-red-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 capitalize w-fit p-1 my-2">{new Date(data?.created_at as Date).toLocaleDateString()}</Span>
                        <Span icon="💯" className="bg-green-100 text-green-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 capitalize w-fit p-1 my-2">{data.points}</Span>
                    </section>
                    <a href={data?.url} className='to-blue-700' target="_blank">🔗 Original Story</a>
                </section>
                <Text h3 className="my-3" size={20} weight="bold">Comments</Text>
                <section>
                    {data?.children ? data.children.map((comment, idx) => <Comment post={comment} key={idx}/> ) : <></>}
                </section>

            </Card.Body>
        </Card>
    </div>
}

export default Post;