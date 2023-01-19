import { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

const Loading = lazy(() => import("../components/Loading"));
const Homepage = lazy(() => import("./Homepage"));
const Post = lazy(() => import("./modules/Post"));
const NotFound = lazy(()=> import("./modules/NotFound"));

const RouteContainer: FC = () => {
    return  <NextUIProvider>
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/post/:postId" element={<Post />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    </NextUIProvider>
}

export default RouteContainer;