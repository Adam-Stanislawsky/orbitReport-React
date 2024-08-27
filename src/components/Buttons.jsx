import satData from "./components/satData.jsx";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  {displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  })}
  //code continues
  return (
    <div>
      <button>Placeholder Button</button>
      <button>All Orbits</button>
    </div>
  );
};

export default Buttons;