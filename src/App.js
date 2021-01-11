import "./App.css";
import Wrapper from "./containers/wrapper";

const navJson = [
  { text: "Option 1", id: "1" },
  { text: "Option 2", id: "2" },
  { text: "Option 3", id: "3" },
  { text: "Option 4", id: "4" },
  { text: "Option 5", id: "5" }
];

function App() {
  return <Wrapper navbarElements={navJson} />;
}

export default App;
