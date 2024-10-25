import { useEffect, useState } from "react";

export const Book = (props) => {
  const [highlited, setHighlited] = useState(false);
  const [marked, setMarkerd] = useState(false);

  useEffect(() => {
    console.log('M');
  }, []);
  useEffect(() => {
    console.log('UP' + props.title);
  }, [highlited]);

  const clickHandler = () => {
    setHighlited(state => !state);
  };

  const doubleClickHandler = () => {
    console.log('Double Click');
    setMarkerd(state => !state);
  };

  let style = {};
  if (highlited) {
    style.backgroundColor = 'blue';
  } else if (marked) {
    style.backgroundColor = 'red';
  }

  return (

    <li onClick={clickHandler} onDoubleClick={doubleClickHandler} style={style}>
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