export default function BookList() {
   let pageTitle = "Books to Read";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689809645i/52857700.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687463048i/90202302.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677175478i/116536542.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} height="200" alt="House of Flame and Shadow by Sarah J. Maas" />
         <img src={book2} height="200" alt="Iron Flame by Rebecca Yarros" />
         <img src={book3} height="200" alt="Things We Left Behind by Lucy Score" />
      </div>      
   );
}