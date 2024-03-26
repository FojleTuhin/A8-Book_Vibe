import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const {bookId, bookName, author, image, rating, tags, category } = book;

    return (
        <Link to={`/book/${bookId}`}>
            <div className="card w-[374px]  flex flex-col gap-6 p-6 border rounded-2xl">
                <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
                    <img className="w-32 h-40" src={image} alt="" />
                </figure>
                <div>
                    <div>
                        {
                            tags.map((tag, index) => <span className="bg-[#23BE0A0D] rounded-full mr-4 text-[#23BE0A]" key={index}><a className=" font-medium px-4 py-2" href="">{tag}</a></span>)
                        }

                    </div>
                    <div className="mt-4 ">
                        <p className="text-2xl font-bold">{bookName}</p>
                        <p className="mt-4 font-medium mb-5">{author}</p>

                        <hr />
                        <div className="mt-5 flex justify-between">
                            <p className="font-medium">{category}</p>
                            <div className="flex gap-2 items-center">
                                <p>{rating}</p>
                                <FaRegStar className="h-6 w-6" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default Book;