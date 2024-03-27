import { useEffect, useState } from 'react';
import { getBooks } from '../Utils';

import ChartCom from '../component/ChartCom';

const PagesToRead = () => {




  const [books, setBooks] = useState([])
  useEffect(() => {
    const storedBooks = getBooks()
    setBooks(storedBooks)

  }, [])


  return (
    <div>
      {
        books.map(book =><ChartCom key={book.bookId} book={book}> </ChartCom>)
      }

      
    </div>
  );
};

export default PagesToRead;