import { useState } from "react";

import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData.jsx";




function App() {
  const [sat, setSat] = useState(satData)
  //const displaySats = [...new Set(satData.map((data) => data.orbitType))]; CHANGED IN BELOW LINE TO orbitTypes per Carrie
  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        //displaySats={displaySats} changed to orbitTypes below per carrie
        orbitTypes={orbitTypes} //renamed
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;