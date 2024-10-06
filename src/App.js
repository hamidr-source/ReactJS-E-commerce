import HomePage from "./Pages/HomePage/HomePage";
import ProductProvider from "./Context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <HomePage />
      </div>
    </ProductProvider>
  );
}

export default App;
