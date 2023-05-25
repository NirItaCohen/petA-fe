import { useContext, useEffect, useState } from "react";
import { Admin } from "../../components/Admin/Admin";
import { WelcomeDiv } from "../../components/Welcome_Div/WelcomeDiv";
import { RegularUser } from "../../components/Regular_User/RegularUser";
import { Guest } from "../../components/Guest/Guest";
import { AppContext } from "../../App";

export const Home = () => {
  const { user } = useContext(AppContext);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    if (user) {
      setUserType(user.role);
    }
  }, [user]);

  return (
    <>
      {userType !== "admin" ? <WelcomeDiv user={userType} /> : null}

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
