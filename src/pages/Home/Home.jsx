import { useContext, useEffect, useState } from "react";
import { Admin } from "../../components/Admin/Admin";
import { WelcomeDiv } from "../../components/Welcome_Div/WelcomeDiv";
import { AppContext } from "../../App";

import "./home.css";
import BGimg from "./BGimg";
import ActionCard from "../../components/Action_Card/ActionCard";
import Footer from "../../components/Footer/Footer";

export const Home = () => {
  const { user } = useContext(AppContext);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    if (user) {
      setUserType(user.role);
    }
  }, [user]);

  if (userType !== "admin") {
    return (
      <>
        <BGimg />
        <WelcomeDiv user={userType} />
        <div className="action-cards">
          <ActionCard action="about" />
          <ActionCard action="adopt" />
        </div>
        <Footer />
      </>
    );
  }

  return <>{userType === "admin" ? <Admin /> : null}</>;
};
