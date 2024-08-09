"use client"
import { useSession } from "next-auth/react";
const ButtonPage = () => {

  const { data: session } = useSession();
  return (
    <div>
      {
        session ? "Login" : "Logout"
      }
      This is a button
    </div>
  );
};

export default ButtonPage;