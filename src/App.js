//to link the pages, importing from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ShoppingList from "./ShoppingList";
import RecipeFinder from "./RecipeFinder";
// import Hero from "./components/heroBanner";
import Footer from "./components/Footer";
import Card from "./components/NavCardGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
          <header>
          {/* <Hero /> */}
          </header>
            {/*using Routes to link between pages */}
           <Routes>
              <Route path="/ShoppingList" exact element={<ShoppingList />} />
              <Route path="/RecipeFinder" exact element={<RecipeFinder />} />
            </Routes>
          </div>
        <Card />
        </Router>
      </div>
      <Footer/>
    </>
  );
}
export default App;
