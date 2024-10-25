import { useEffect, useState } from "react";

export const Book = (props) => {
  const [highlited, setHighlited] = useState(false);
  const [marked, setMarkerd] = useState(false);

  useEffect(() => {
    console.log('M');
  }, []);

  useEffect(() => {
    console.log('UP ' + props.title);
  }, [highlited, props.title]);

  useEffect(() => {
    console.log('Double ' + props.title);
  }, [marked, props.title]);
  const clickHandler = () => {
    setHighlited(state => !state);
  };

  const deleteHandler = () => {
    setMarkerd(state => !state);
  };

  let style = {};
  if (marked) {
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
          <button onClick={clickHandler}>Highlight</button>
          <button onClick={deleteHandler}>Delete</button>
          <span>Author: {props.author}</span>
        </footer>
      </article>
    </li>
  );
};