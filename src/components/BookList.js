import { Book } from "./Book";

export const BookList = (props) => {
  return (
    <ul>
      <Book
        title={props.books[0].title}
        author={props.books[0].author}
        year={props.books[0].year}
        price={props.books[0].price}
      />
      <Book />
      <Book />
      <Book />
    </ul>
  );
};