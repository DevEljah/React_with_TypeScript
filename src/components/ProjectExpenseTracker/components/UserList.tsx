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

// Note: //
// The "AbortController" is a way to cancel a request when the component unmounts or when a new request is made before the previous one has completed. By calling "controller.abort()" in the cleanup function, you cancel the ongoing request and prevent potential memory leaks.

// Using the "signal" option with the "axios.get" method, which allows you to pass the "AbortSignal" object to the request. When the AbortSignal is aborted, the request will be canceled.

// If the error is a "CanceledError", nothing is done, otherwise the error message is extracted and stored in the component's state for display in the UI.
