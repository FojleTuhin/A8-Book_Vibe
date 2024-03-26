import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">Oppss!!</h2>
            <h3 className="text-2xl font-semibold">Page not found</h3>
           <Link to='/'> <button className="btn font-bold text-xl mt-6 bg-[#401F71] text-white">Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;