import { useEffect, useState } from "react";
import { getWishes } from "../Utils";
import WishListCard from "./WishListCard";

const WishList = () => {

    const [wishes, setWishes]=useState([])
    useEffect(()=>{
        const storedWishess= getWishes()
        setWishes(storedWishess)
    },[])


    return (
        <div className="mt-8 mb-6">
            {
                wishes.map( book=> <WishListCard key={book.bookId} book={book}></WishListCard>)
            }

        </div>
    );
};

export default WishList;