import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // console.log("test");
    axios
      .get("https://randomuser.me/api/?results=24")
      .then((res) => setUserData(res.data.results));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <div className="cards">
        {userData &&
          userData.map((user, index) => <Card key={index} user={user} />)}
      </div>
    </div>
  );
};

export default App;
