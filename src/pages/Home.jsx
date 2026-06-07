import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Home() {

  const { visits, setVisits } = useContext(AppContext);

  return (
    <div className="page">

      <h1>Home Page</h1>

      <p>Welcome to our SPA Project.</p>

      <button onClick={() => setVisits(visits + 1)}>
        Visit Count : {visits}
      </button>

    </div>
  );
}

export default Home;