// import history from './history.js';
import HomeNav from './components/homePage/Homenav';
import Home from './components/homePage/Home';
import Blog from './components/blogPage/Blog';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <HomeNav/>
    </div>
    <div>
    
      <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route path="blogpage" element={<Blog/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
