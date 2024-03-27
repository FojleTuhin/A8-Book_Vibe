import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../Utils";
import { saveWishlist } from "../Utils";

const ViewDetails = () => {

    const allBooks = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt= parseInt(bookId);
    const book= allBooks.find(books=> books.bookId === bookIdInt);
    
    const handleRead=(book)=>{
        saveBook(book)
    }

    const handleWish=()=>{
        saveWishlist(book)
    }
    
    return (
        <div className="grid grid-cols-2 mt-14 mb-14 gap-12">
            <div className="bg-[#1313130D] p-20 rounded-2xl">
                <img src={book.image} alt="book" />
            </div>
            <div>
                <p className="text-4xl font-bold mb-4">{book.bookName}</p>
                <p className="text-xl font-medium mb-6">{book.author}</p>
                <hr />
                <p className="text-xl font-medium mb-6 mt-5">{book.category}</p>
                <hr />
                <p className="mt-6 mb-7 text-[#131313B2]"><span className="font-bold text-black">Review:</span> {book.review}</p>

                <div className="flex items-center gap-10">
                    <p className="font-bold">Tag</p>
                    {
                    book.tags.map((tag,index)=> <span className="bg-[#23BE0A0D] rounded-full mr-4 text-[#23BE0A]" key={index}><a className=" font-medium px-4 py-2" href="">{tag}</a></span>)
                   }
                </div>
                <hr className="mt-6 mb-6" />

                <div>
                    <p className="mt-3 text-[#131313B2]">Number of Pages:      <span className="font-semibold text-black">{book.totalPages}</span> </p>
                    <p className="mt-3 text-[#131313B2]">Publisher:            <span className="font-semibold text-black">{book.publisher}</span></p>
                    <p className="mt-3 text-[#131313B2]">Year of Publishing:   <span className="font-semibold text-black">{book.yearOfPublishing}</span></p>
                    <p className="mt-3 text-[#131313B2]">Rating:               <span className="font-semibold text-black">{book.rating}</span></p>
                </div>

                <div className="mt-12">
                    <button onClick={()=>handleRead(book)} className="btn  px-7  bg-none text-xl font-semibold mr-4">Read</button>
                    <button onClick={()=>handleWish(book)} className="btn px-7 bg-[#50B1C9] text-xl font-semibold text-white">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;