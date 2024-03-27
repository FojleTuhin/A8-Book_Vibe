import { useEffect, useState } from "react";
import {  getWishList } from "../Utils";
import WishListCard from "./WishListCard";

const WishList = () => {


    const [books, setBooks]=useState([])
    useEffect(()=>{
        const storedBooks= getWishList()
        setBooks(storedBooks)
    },[])
    return (
        <div className="mt-8 mb-6">
        {
            books.map( book=> <WishListCard key={book.bookId} book={book}></WishListCard>)
        }

    </div>
    );
};

export default WishList;