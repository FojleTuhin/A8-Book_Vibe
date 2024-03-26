import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex px-28 py-20 justify-between bg-[#1313130D] mt-12 rounded-2xl">
            <div className="flex flex-col  justify-center">
                <p className="font-bold text-5xl">Books to freshen up <br /> your bookshelf</p>
                <NavLink to='/listed-books'><button className="btn w-48 bg-[#23BE0A] text-white mt-12">View The List</button></NavLink>
            </div>
            <div>
                <img className="flex" src="/public/1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;