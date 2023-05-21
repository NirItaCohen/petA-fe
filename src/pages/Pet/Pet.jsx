import { useParams } from "react-router-dom";

export const Pet = () => {
  const { pet } = useParams();
  const decodedPet = JSON.parse(decodeURIComponent(pet));

  return (
    <>
      <h1>{decodedPet.name}'s page</h1>
    </>
  );
};
