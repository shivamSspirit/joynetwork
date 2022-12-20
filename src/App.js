import "./App.css";
import AllRoutes from "./Routes/routes";
import { Provider } from 'react-redux';
import { store, history } from './store';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


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
