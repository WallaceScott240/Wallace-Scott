import axios from "axios";
import { useEffect, useState } from "react";
function DummyData2() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        console.log(Response);
      })
      .catch((Error) => console.error("Error fetching data:", Error));
  }, []);

  const [isLoading, setLoading] = useState(false);

  async function fetchAPi() {
    console.log("Loading...");
    setLoading(true);
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        console.log(Response);
      })
      .catch((Error) => console.error("Error fetching data:", Error))
      .then(async () => {
        setLoading(false);
        await fetchAPi();
      });
    console.log("DONE...");
  }

  return (
    <div className="row text-center">
      <button onClick={async (e) => await fetchAPi()}>Fetch API</button>
      <span>{isLoading ? "Loading..." : null}</span>
    </div>
  );
}
export default DummyData2;
