import { useEffect, useState } from "react";

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people`)
      .then(res => res.json())
      .then(result => {
        setCharacters(result.results);
      });
  }, []);

  return (
    <ul>
      {characters.map(e => (
        <li key={e.name}>{e.name}</li>
      ))}
    </ul>
  );
}