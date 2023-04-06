import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = res.data;
      setUsers(data);
    };
    getUser();
  }, []);

  return (
    <div>
      <h2>FetchData</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
