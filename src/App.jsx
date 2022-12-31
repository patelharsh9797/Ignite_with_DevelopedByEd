// TODO: Routers
import { Routes, Route } from "react-router-dom";

// TODO: Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

// TODO: styling and animations
import GlobalStyle from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
