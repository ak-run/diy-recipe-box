//to link the pages, importing from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ShoppingList } from "./ShoppingList";
import { RecipeFinder } from "./RecipeFinder";
// import Hero from "./components/heroBanner";
import { Footer } from "./components/Footer";
import { Cards } from "./components/NavCardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddRecipe } from "./AddRecipe";

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
              <Route path="/ShoppingList" element={<ShoppingList />} />
              <Route path="/RecipeFinder" element={<RecipeFinder />} />
              <Route path="/AddRecuoe" element={<AddRecipe />} />
            </Routes>
          </div>
          <Cards />
        </Router>
      </div>
      <Footer/>
    </>
  );
}
export default App;
