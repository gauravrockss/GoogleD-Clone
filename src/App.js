import { Route, Routes } from "react-router-dom";
import Clikkle from "./pages/Clikkle";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Campaigns from "./pages/Campaigns";
import Ads from "./pages/Ads";
import Cmail from "./pages/Cmail";
import Esign from "./pages/Esign";
import Files from "./pages/Files";
import Host from "./pages/Host";

const App = () => {
  return (
    <>
      <Header />
      <Container
        style={{
          maxWidth: "min(95%, 1296px)",
          marginInline: "auto",
          padding: 0,
        }}
      >
        <Routes>
          <Route path="/" element={<Clikkle />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/cmail" element={<Cmail />} />
          <Route path="/esign" element={<Esign />} />
          <Route path="/files" element={<Files />} />
          <Route path="/host" element={<Host />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;
