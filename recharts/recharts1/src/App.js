import { useState, useEffect } from "react";
import Average1 from "./components/Average1";
import Rechart1 from "./components/Rechart1";

function App() {

  const [data, setdata] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
      const data = await res.json();
      console.log(data);
      setdata(data?.data);
    };
    fetchDatas();
  }, []);

  return (
    <div className="App">
      <Rechart1 data={data} />
    </div>
  )

}

export default App;
