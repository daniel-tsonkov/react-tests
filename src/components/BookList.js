import { Book } from "./Book";

export const BookList = (props) => {
  const bookElements = props.books.map(book => <Book
    title={book.title}
    year={book.year}
    price={book.price}
    author={book.author} />);

  return (
    <ul>
      {bookElements}
    </ul>
  );
};