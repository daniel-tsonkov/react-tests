import { useState } from "react";

export const Book = (props) => {
  const [highlited, setHighlited] = useState(false);

  const clickHandler = () => {
    setHighlited(state => !state);
  };

  let style = {};
  if (highlited) {
    style.backgroundColor = 'blue';
  }

  return (

    <li onClick={clickHandler} style={style}>
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