
import { useEffect, useState } from "react";
import { getBooks } from "../Utils";
import ReadBooksCard from "./ReadBooksCard";


const ReadBooks = () => {

    const [books, setBooks]=useState([])
    const [display, setDisplay]=useState([])
    useEffect(()=>{
        const storedBooks= getBooks()
        setBooks(storedBooks)
        setDisplay(storedBooks)
    },[])

      
    
    return (
        <div className="mt-8 mb-6">
            {
                display.map( book=> <ReadBooksCard key={book.bookId} book={book}></ReadBooksCard>)
            }

        </div>
    );
};

export default ReadBooks;