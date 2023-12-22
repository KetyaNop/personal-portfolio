import "./App.css";

// Import Components
import Header from "./HeaderComponent/Header";
import AboutMe from "./AboutMeComponent/AboutMe";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
