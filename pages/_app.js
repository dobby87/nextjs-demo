import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import configureStore from "../store/index";
import "../styles/app.scss";

//
const App = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      {/* <div>header</div> */}
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(configureStore)(App);
