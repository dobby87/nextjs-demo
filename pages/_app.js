import "../styles/app.scss";
//
const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* <div>header</div> */}
      <Component {...pageProps} />
    </>
  );
};

export default App;
