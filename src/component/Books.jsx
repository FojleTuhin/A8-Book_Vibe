import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {

    const[books, setBooks]=useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])


    return (
        <div className="pb-28">
            <div className="mt-24">
                <h2 className="font-bold text-4xl text-center mb-9">Books</h2>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                {
                    books.map(book=><Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;