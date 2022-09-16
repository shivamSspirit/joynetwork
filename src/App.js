import "./App.css";
import AllRoutes from "./Routes/routes";
import { Provider } from 'react-redux';
import { store, history } from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AllRoutes history={history} />
      </Provider>
    </div>
  );
}

export default App;
