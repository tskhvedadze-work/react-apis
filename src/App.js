import { User } from "./components/User/User";
import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");

  async function get_users(searchKeyword) {
    try {
      setError("");
      setLoading(true);
      const resp = await axios.get(
        `https://dummyjson.com/users/search?q=${searchKeyword}`
      );
      setUsers(resp.data?.users);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    get_users(searchKeyword);
  }, [searchKeyword]);

  return (
    <>
      <input
        placeholder="Search"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      {error && <div>რახდება არვიცი</div>}
      {loading ? (
        <div>იტვირთება</div>
      ) : (
        <ul>
          {users.map((user) => {
            return <User user={user} />;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
