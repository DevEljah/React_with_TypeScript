import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
interface User {
  id: number;
  name: string;
}

const url = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [firstUser, setFirstUser] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    const getUser = async () => {
      try {
        const res = await axios.get<User[]>(url, { signal: controller.signal });
        const data = res.data;
        setIsLoading(false);
        const firstUser = res.data[0].name;
        setUsers(data);
        setFirstUser(firstUser);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      }
    };
    getUser();
    return () => controller.abort();
  }, []);

  const handleDeleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios.delete(`${url}/${user.id}`).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const handleAddUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Dev" }; //in the real world app it'a form based!
    setUsers([newUser, ...users]);

    axios
      .post(url, newUser)
      .then(({ data: sevedUser }) => setUsers([sevedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const handleUpdateUser = (user: User) => {
    const originalUsers = [...users];

    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // axios.put()
    axios.patch(`${url}/${user.id}`, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      <h2>FetchData</h2>
      {isLoading ? (
        <div className="spinner-border"></div>
      ) : error ? (
        <p className="text-danger"> {error} </p>
      ) : (
        <div>
          <h4>first user's name: {firstUser}</h4>
          <button onClick={handleAddUser} className="btn btn-primary mb-3">
            Add User
          </button>
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user.id}
                className="list-group-item d-flex justify-content-between"
              >
                {user.name}
                <div>
                  <button
                    onClick={() => handleUpdateUser(user)}
                    className="btn btn-outline-secondary mx-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserList;

// Note: //
// The "AbortController" is a way to cancel a request when the component unmounts or when a new request is made before the previous one has completed. By calling "controller.abort()" in the cleanup function, you cancel the ongoing request and prevent potential memory leaks.

// Using the "signal" option with the "axios.get" method, which allows you to pass the "AbortSignal" object to the request. When the AbortSignal is aborted, the request will be canceled.

// If the error is a "CanceledError", nothing is done, otherwise the error message is extracted and stored in the component's state for display in the UI.

// "axios.put()" vs "axios.patch()": //
// Both "axios.put()" and "axios.patch()" are HTTP methods for updating resources on a server, but they have some key differences:

// "PUT" is used for replacing an entire resource (or an object) with a new representation, while "PATCH" is used for updating a resource partially (one or more of it's[object's] properties).
// !! Some backend do not support the "PATCH" !!
