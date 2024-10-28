import { useEffect, useState } from "react";
import styles from "./Book.module.css";

export const Book = (props) => {
  const [highlited, setHighlited] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    console.log('M');
  }, []);

  useEffect(() => {
    console.log('UP ' + props.title);
  }, [highlited, props.title]);

  useEffect(() => {
    console.log('Double ' + props.title);
  }, [deleted, props.title]);

  const clickHandler = () => {
    setHighlited(state => !state);
  };

  const deleteHandler = () => {
    setDeleted(state => !state);
  };

  let style = {};
  if (deleted) {
    style.backgroundColor = 'red';
  }
  if (highlited) {
    style.backgroundColor = 'blue';
  };
  return (

    <li style={style}>
      <article>
        <h2>{props.title}</h2>
        <div>Year: {props.year}</div>
        <div>Price: {props.price}</div>
        <footer>
          <span>Author: {props.author}</span>
          <button onClick={clickHandler}>Highlight</button>
          <button onClick={deleteHandler}>Delete</button>
        </footer>
      </article>
    </li>
  );
};