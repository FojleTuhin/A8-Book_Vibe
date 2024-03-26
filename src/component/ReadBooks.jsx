
import { useEffect, useState } from "react";
import { getBooks } from "../Utils";
import ReadBooksCard from "./ReadBooksCard";

const ReadBooks = () => {

    const [books, setBooks]=useState([])
    useEffect(()=>{
        const storedBooks= getBooks()
        setBooks(storedBooks)
    },[])
     
    
    return (
        <div className="mt-8 mb-6">
            {
                books.map( book=> <ReadBooksCard key={book.bookId} book={book}></ReadBooksCard>)
            }

        </div>
    );
};

export default ReadBooks;