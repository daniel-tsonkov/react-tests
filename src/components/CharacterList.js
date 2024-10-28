import { useEffect, useState } from "react";

export const CharacterList = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/2`)
      .then(res => res.json())
      .then(result => {
        setCharacters(result);
      });
  }, []);

  return (
    <ul>
      <li>{characters?.name || 'Loading...'}</li>
    </ul>
  );
}