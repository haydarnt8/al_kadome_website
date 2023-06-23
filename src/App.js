import Slider from "./components/Slider"; 
import Cards from "./components/Cards";
import CategoryNav from "./components/CategoryNav";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <main className="bg-[#210707] flex flex-col items-center  ">
      <Slider />
      <Header/>
      <CategoryNav />
      <Cards />
      <Footer/>

    </main>
  );
}

export default App;
