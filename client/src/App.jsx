import './App.css';
import NavBar from './components/NavBar' ;
import Footer from "./components/Footer";
import Home from './pages/home';
function App() {
  return (
    <>
      <NavBar />
        <Home />
      <Footer />
    </>
  );
}

export default App;
