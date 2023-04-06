import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [firstUser, setFirstUser] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = res.data;
        const firstUser = res.data[0].name;
        setUsers(data);
        setFirstUser(firstUser);
      } catch (err: any) {
        setError(err.message);
      }
    };
    getUser();
  }, []);

  return (
    <div>
      <h2>FetchData</h2>
      {error ? (
        <p className="text-danger"> {error} </p>
      ) : (
        <div>
          <h4>first user's name: {firstUser}</h4>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserList;
