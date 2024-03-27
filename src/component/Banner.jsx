import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="md:flex md:px-28 md:py-20 px-12 py-8 justify-between bg-[#1313130D] mt-12 rounded-2xl">
            <div className="flex flex-col  justify-center">
                <p className="font-bold text-4xl md:text-5xl">Books to freshen up <br /> your bookshelf</p>
                <div className="flex justify-center">
                <NavLink to='/listed-books'><button className="btn w-48 bg-[#23BE0A] text-white mt-12">View The List</button></NavLink>

                </div>
            </div>
            <div className="mt-8 md:mt-0">
                <img className="flex m-auto md:w-[318px] md:h-[394px] h-[280px] w-auto" src="https://blog-cdn.reedsy.com/directories/gallery/110/large_aabfef4fc0dbce2626dcdd247e6e56b9.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;