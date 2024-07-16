import { useEffect, useState } from "react";

function ApiCallTest() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchUsers();
  }, []);

  console.log(users, isLoading);

  return (
    <div>
      {isLoading ? (
        <h1>Loading data...</h1>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiCallTest;
