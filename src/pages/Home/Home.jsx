import { useContext, useEffect, useState } from "react";
import { Admin } from "../../components/Admin/Admin";
import { WelcomeDiv } from "../../components/Welcome_Div/WelcomeDiv";
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

      {userType === "admin" ? <Admin /> : null}
    </>
  );
};
