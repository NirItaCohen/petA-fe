import { useState } from "react";

export const RegularUser = () => {
  const [pets, setPets] = useState([]);

  console.log(pets);

  return <>Regular User</>;
};
