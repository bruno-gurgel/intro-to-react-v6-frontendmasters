import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Lulu" animal="Cat" breed="From the street" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
