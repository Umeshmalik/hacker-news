import { Badge } from "@nextui-org/react";
import { FC, useEffect, useRef, useState } from "react";

const Skelton: FC = () => <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
    <div className="w-12 bg-gray-300 h-12 rounded-full">
    </div>
    <div className="flex flex-col space-y-3">
        <div className="w-36 bg-gray-300 h-6 rounded-md ">
        </div>
        <div className="w-24 bg-gray-300 h-6 rounded-md ">
        </div>
    </div>
</div>

const Loading: FC<{ overlay?: string }> = ({ overlay = "None" }) => {
    const badgeRef = useRef<HTMLDivElement>(null);
    const [noOfSkelton, setNoOfSkelton] = useState(3);
    useEffect(() => {
        window.addEventListener("resize", () => { setNoOfSkelton(badgeRef.current?.offsetWidth as number/212) })
        setNoOfSkelton(badgeRef.current?.offsetWidth as number/212)
        return () => { window.removeEventListener("resize", () => { setNoOfSkelton(0) }) }
    }, [])
    return <div ref={badgeRef} className="w-4/5 h-56 border-2 rounded-md mx-auto my-10 flex justify-evenly">
        <Badge
            content= {overlay}
            color="secondary"
            css={{ backgroundColor: "transparent", zoom: "1.5", color: "cadetblue", borderColor: "cadetblue", display: overlay}}
            horizontalOffset="45%"
            verticalOffset="45%"
        >
            {Array.from({ length: noOfSkelton || 1 }).map((_, idx) => <Skelton key={idx}/>)}
        </Badge>
    </div >
}

export default Loading;