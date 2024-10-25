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

  function handleAddUser (email, username, password, phoneNumber) {
    axios.post("https://fakestoreapi.com/users", {
      body: JSON.stringify({
        id: users.lenght + 1,
        email: email,
        username: username,
        password: password,
        name: {
          firstname: "",
          lastname: "",
        },
        address: {
          city: "",
          street: "",
          number: 0,
          zipcode: "",
          geolocation: {
            lat: "",
            long: "",
          },
        },
        phone: phoneNumber,
      }),
    });
  }

  return (
    <UserContext.Provider value={{ users, handleAddUser }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
