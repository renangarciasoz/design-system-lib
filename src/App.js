import React from "react";

import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
