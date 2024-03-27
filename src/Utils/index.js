import toast from "react-hot-toast"



export const getBooks=()=>{
    let books=[]
    const storedBooks= localStorage.getItem('books')
    if(storedBooks){
        books= JSON.parse(storedBooks)
    }
    return books
}



export const saveBook = book =>{
    let books= getBooks()
    const isExist= books.find(b => b.bookId === book.bookId)

    if(isExist){
        return toast.error('You have already read this book');
    }

    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Books added to read list');
}



export const getWishes=()=>{
    let wishes=[]
    const storedWishes= localStorage.getItem('wishes')
    if(storedWishes){
        wishes= JSON.parse(storedWishes)
    }
    return wishes
}

export const saveWishes = book =>{
    let wishes= getWishes()
    const isExist= wishes.find(b => b.bookId === book.bookId)

    let books= getBooks()
    const isExisting= books.find(b => b.bookId === book.bookId)


    if(isExist || isExisting){
        return toast.error('You have already read this book');
    }

   else{
    wishes.push(book)
    localStorage.setItem('wishes', JSON.stringify(wishes))
    toast.success('Books added to wishes list');
   }
}