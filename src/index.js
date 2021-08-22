import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route} from "react-router-dom"
import './index.css';
import Home from "./pages/home"
import About from "./pages/about"
import Post from "./pages/post"
import NotFound from "./pages/notfound"
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
    <ChakraProvider>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/404" component={NotFound} />
                <Route exact path="/post/:id" render={props => <Post {...props} />} />
            </div>
        </Router>
    </ChakraProvider>, 
    document.getElementById('root')
);

