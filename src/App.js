import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Blog from './Blog/Blog';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="contents">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/blog' element = {<Blog/>}></Route>
          </Routes>
          {/* <Switch>
              <Route exact path = '/'>
                <Blog/>
              </Route>
          </Switch>
          <Switch>
              <Route exact path = '/'>
                <Programs/>
              </Route>
          </Switch> */}
        </div>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
