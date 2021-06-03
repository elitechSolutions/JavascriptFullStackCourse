
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BitcoinPage from './pages/BitcoinPage';
import BitcoinPricePage from './pages/BitcoinPricePage';

function App(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/bitcoin/:currencyCode">
            <BitcoinPricePage />
          </Route>
          <Route path="/bitcoin">
            <BitcoinPage />
          </Route>
          <Route path="/">
            <p>This is the home page</p>
            <button onClick={() => { document.location = '/bitcoin' }}>Tell me about bitcoin</button>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
