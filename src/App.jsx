import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default App;
