import { useEffect, useState, Suspense, lazy } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Slide from 'react-reveal/Slide';
import Audio from './components/audio';
import LoadingScreen from './components/loadingScreen';
import './App.css';

const Home = lazy(() => import('./components/home'));

const Projects = lazy(() => import('./components/projects'));
const Contact = lazy(() => import('./components/contact'));
const About = lazy(() => import('./components/about'));
const Votes = lazy(() => import('./components/votes'));

function App() {

  useEffect(() => {
    async function changeTitle() { 
      const vitico = ["v", "i", "t", "i", "c", "o", ".tk | Portfolio"];
      document.title = "";
      for (let x = 0; x < vitico.length; x++) {
        document.title += vitico[x];
        await new Promise(async resolve => {
          setTimeout(resolve, 1500);
        });
      }
    }
    changeTitle();
  }, []);


  return (
    <Router>
      <Route path="/" component={Audio} />
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        </Route>



        <Route exact path="/about">
          <Suspense fallback={<LoadingScreen />}>
            <About />
          </Suspense>
        </Route>
        <Route exact path="/contact">
          <Suspense fallback={<LoadingScreen />}>
            <Contact />
          </Suspense>
        </Route>
        <Route exact path="/projects">
          <Suspense fallback={<LoadingScreen />}>
            <Projects />
          </Suspense>
        </Route>
        <Route exact path="/votes">
          <Suspense fallback={<LoadingScreen />}>
            <Votes />
          </Suspense>
        </Route>


        <Route path="*">
          <Suspense fallback={<LoadingScreen />}>
            <Slide bottom>
              <div className="error">
                <h1>Error 404</h1>
                <hr/>
                <code>TypeError:<br/>cannot read property "page" of undefined</code>
                <Link className="cross" to="/">🍩<span> Go back</span></Link>
              </div>
            </Slide>
          </Suspense>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
