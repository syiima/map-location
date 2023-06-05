import { Col, Row } from 'antd';

import { History } from './History';
import { Maps } from './Maps';

import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';


function App() {
  return (
    <div className="App">

      <Row>
        <Col span={12}>
          <History />
        </Col>
        <Col span={12}>
          <Maps/>
        </Col>
      </Row>
       

      {/* Maps pls */}

      {/* <History/> */}
    </div>
  );
}

export default App;
