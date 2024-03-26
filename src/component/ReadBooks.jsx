import { CiLocationOn } from "react-icons/ci";
import { AiOutlineFilePdf } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

const ReadBooks = () => {
    
    return (
        <div className="mt-8 mb-6">
            <div className="border rounded-2xl flex gap-6 p-6">
                <div className="bg-[#1313130D] rounded-2xl w-[230px] h-[230px] flex justify-center items-center">
                    <img className="h-[172px] w-[132px]" src="/public/1.png" alt="" />
                </div>
                <div className="w-full">
                    <p className="text-2xl font-bold mb-4">The Catcher in the Rye</p>
                    <p className="text-[#131313CC] font-medium mb-4">By : Awlad Hossain</p>

                    <div className="flex mb-4">
                        <p className="font-bold">Tag</p>


                        <p className="flex justify-center items-center gap-2 "><CiLocationOn className="w-6 h-6" />Year of Publishing: 1924</p>
                    </div>
                    <div className="flex gap-6">
                        <p className="text-[#13131399] flex gap-2"><GoPerson className="w-6 h-6"/> Publisher: Scribner</p>
                        <p className="text-[#13131399] flex gap-2"><AiOutlineFilePdf className="w-6 h-6"/> Page 192</p>
                    </div>

                    <hr className="mt-4 mb-4"/>

                    <div className="flex gap-4">
                        <p className="px-5 py-3 bg-[#328EFF26] text-[#328EFF] rounded-full">Category: Classic</p>
                        <p className="px-5 py-3 bg-[#FFAC3326] text-[#FFAC33] rounded-full">Rating: 4.5</p>
                        <Link><button className="btn bg-[#23BE0A] text-white rounded-full">View details</button></Link>
                        
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ReadBooks;