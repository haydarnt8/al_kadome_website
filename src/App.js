import Slider from "./components/Slider"; 
import Card from "./components/Card";
import CategoryNav from "./components/CategoryNav";
function App() {
  return (
    <main className="bg-[#210707] flex flex-col items-center  ">
      <Slider />
      <CategoryNav />
      <Card />

    </main>
  );
}

export default App;
