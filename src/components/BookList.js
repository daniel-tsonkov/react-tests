import { Book } from "./Book";

export const BookList = (props) => {
  //const bookElements = props.books.map(book => <Book {...book} />);

  return (
    <ul>
      {props.books.map((book, index) => <Book key={index} {...book} />)}
    </ul>
  );
};