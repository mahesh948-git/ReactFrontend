 
import React, { useEffect, useState } from "react";
 
function App() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);
 
  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;