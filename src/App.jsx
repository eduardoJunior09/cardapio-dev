import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header/index";
import Nav from "./Components/Nav/index";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <div className="w-full px-4">
        <Nav />
      </div>
      <div className="w-full px-4">
        <Card />
      </div>
    </div>
  );
}
