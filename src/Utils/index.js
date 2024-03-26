
export const getBooks=()=>{
    let books=[]
    const storedBooks= localStorage.getItem('books')
    if(storedBooks){
        books= JSON.parse(storedBooks)
    }
    return books
}