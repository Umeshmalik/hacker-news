import { FC, lazy } from "react";
import { Card, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

import { PostCardProps } from "interfaces";
const Span = lazy(()=> import("../../components/Span"));

const PostCard: FC<PostCardProps> = ({ post }) => {
    return <Link to={`/post/${post.objectID || post?.id}`}>
        <Card css={{margin: "$10 $0", padding: "$1"}}>
            { post?.title ? <Card.Header>
                <Text h3 size={20} weight="bold" className="mx-3" >{post?.title}</Text>
                <Span icon="💯" className="bg-gray-100 text-gray-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900 capitalize w-fit p-1 my-2">{post?.points}</Span>
            </Card.Header> : <></>}
            <Card.Body className="capitalize">
                <Text h4 className="capitalize" weight="bold">✍️ {post.author}</Text>
                {post?.text ?
                    <Text span dangerouslySetInnerHTML={{ __html: post?.text as string }} />
                    :
                    <Text span className="truncate">{post.story_text}</Text>
                }
            </Card.Body>
        </Card>
    </Link>
}

export default PostCard;