import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [firstUser, setfirstUser] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = res.data;
      const firstUser = res.data[0].name;
      setUsers(data);
      setfirstUser(firstUser);
    };
    getUser();
  }, []);

  return (
    <div>
      <h2>FetchData</h2>
      <h4>first user's name: {firstUser}</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
