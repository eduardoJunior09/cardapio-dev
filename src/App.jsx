import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header/index";
import Nav from "./Components/Nav/index";

export default function App() {
  return (
    <div className="flex align-start justify-center w-full h-full">
      <div className="flex flex-col gap-4 w-full lg:max-w-3/5">
        <Header />
        <div className="w-full">
          <Nav />
        </div>
        <div className="flex items-start justify-center flex-wrap gap-4 w-full h-auto px-4 py-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> 
          <Card />
          <Card /> 
        </div>
      </div>
    </div>
  );
}
