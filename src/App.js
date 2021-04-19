import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Movie from "./component/Movie";
import Review from "./component/Review";
import request from "../src/request";
import MovieDetail from "./component/MovieDetail";

function App() {
  const [movieOption, setMovieOption] = useState(request.fetchDiscovery);
  return (
    <div className="App">
      {/* <Route exact path='/movie' component={Movie} /> */}
      <Switch>
        <Route>
          <Movie movieOption={movieOption} />
        </Route>
        <Route exact path="/review" component={Review} />
        <Route exact path="/movie/:movieId" component={MovieDetail} />
      </Switch>
    </div>
  );
}

export default App;
