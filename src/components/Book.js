import { useState } from "react";

export const Book = (props) => {
  const [highlited, setHighlited] = useState(false);

  const clickHandler = () => {
    highlited(true);
  };

  return (

    <li onClick={clickHandler}>
      <article>
        <h2>{props.title}</h2>
        <div>Year: {props.year}</div>
        <div>Price: {props.price}</div>
        <footer>
          <span>Author: {props.author}</span>
        </footer>
      </article>
    </li>
  );
};