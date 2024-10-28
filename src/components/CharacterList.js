export const CharacterList = () => {
  fetch(`https://swapi.dev/api/people/2`)
    .then(res => res.json())
    .then(characters => {
      console.log(characters);
    });

  return (
    <ul>
      <li>Loading...</li>
    </ul>
  );
}