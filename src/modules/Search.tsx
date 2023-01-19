import { FC, useEffect, useRef } from "react";
import { Button, Container, Input } from "@nextui-org/react";

import { fetchPosts } from "../../api";
import { SearchProps } from "interfaces";

const Search: FC<SearchProps> = ({ updateLoader, updatePosts}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=> {
        inputRef.current?.addEventListener("keypress", enterEvent)
        return () => { inputRef.current?.removeEventListener("keypress", enterEvent) }
    }, [])

    const enterEvent = (e: KeyboardEvent) => {
        if(e.key !== "Enter") return;
        fetch();
    }

    const fetch = async () => {
        const query = inputRef.current?.value as string;
        if(!query) return;
        updatePosts([]);
        updateLoader(true);
        const data = await fetchPosts({query});
        updatePosts(data?.hits || []);
        updateLoader(false)
    }

    return (<Container className="flex justify-center">
        <Input ref={inputRef} aria-label="search" type="text" className="w-64 mx-5" placeholder="start typing..." />
        <Button auto flat onPress={fetch}>Search!</Button>
    </Container>)
}

export default Search;