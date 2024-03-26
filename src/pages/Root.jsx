import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Root = () => {
    return (
        <div className="max-w-6xl m-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;