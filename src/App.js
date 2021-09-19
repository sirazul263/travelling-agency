import Main from "./components/Main/Main";
import Sidebar from "./components/SideBar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
function App() {
  return (
    <Row>
      <Col md={3} className="sidebar">
        <Sidebar />
      </Col>
      <Col md={9} className="main">
        <Main />
      </Col>
    </Row>
  );
}

export default App;
