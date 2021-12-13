import MyRouter from "./router";
import { Provider } from "react-redux";

import myStore from "./store";
import { GlobalStyle } from "./config/styled/global";

function App() {
  return (
    <Provider store={myStore}>
      <GlobalStyle />
      <MyRouter />
    </Provider>
  );
}

export default App;
