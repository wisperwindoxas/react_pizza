import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import FilterContext from "./components/context";

function Apps(){
    const [filter, setFilter] = React.useState([])
    return(
        <div>

            <Router>
                <React.StrictMode>
                    <FilterContext.Provider value={{filter, setFilter}}>
                        <App />
                    </FilterContext.Provider>
                </React.StrictMode>
            </Router>

        </div>
    )
}

ReactDOM.render(
   <Apps/>,
  document.getElementById('root')
);


