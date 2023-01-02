import './App.css';
import Header from './header/Header';
import Introduction from './introduction/Introduction';
import Navbar from './navbar/Navbar';
import Experience from './experience/Experience';
import Projects from './projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Introduction></Introduction>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}

export default App;
