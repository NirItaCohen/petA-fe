import { useState } from "react";
import { Admin } from "../../components/Admin/Admin";
import { WelcomeDiv } from "../../components/Welcome_Div/WelcomeDiv";
import { RegularUser } from "../../components/Regular_User/RegularUser";
import { Guest } from "../../components/Guest/Guest";

export const Home = () => {
  const [userType, setUserType] = useState("admin");

  return (
    <>
      <WelcomeDiv user={userType} />

      {userType === "admin" ? (
        <Admin />
      ) : userType === "regularUser" ? (
        <RegularUser />
      ) : (
        <Guest />
      )}
    </>
  );
};
