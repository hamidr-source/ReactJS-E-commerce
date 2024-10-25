import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();
export const useUsersData = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get(
        "https://fakestoreapi.com/users",
        (axios.defaults.headers.common["Authorization"] = 555)
      )
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
