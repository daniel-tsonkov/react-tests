import { useState } from "react";

export const Timer = (props) => {
  const [time, setTimez] = useState(props.start);

  setTimeout(() => {
    setTimez(time + 1);
  }, 1000);

  return (
    <div>
      <h2>Timer: {time} sec.</h2>
    </div>
  );
};