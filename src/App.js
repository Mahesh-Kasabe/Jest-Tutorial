import { useState } from "react";
import "./App.css"

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <input type="text" placeholder="username" value={username} onChange={(e) => {
        setUsername(e.target.value)
      }}/>
      <input type="password" placeholder="password" value="password" />
      <button > Login </button>
      <span data-testid="error" > something went wrong </span>

    </div>
  );
}

export default App;
