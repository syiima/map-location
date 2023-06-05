import { Col, Row } from 'antd';

import { History } from './History';
import { Maps } from './Maps';

import '../assets/css/App.css';


function App() {
  return (
    <div className="App">

      <Row>
        <Col span={6}>
          <History />
        </Col>
        <Col span={18}>
          <Maps/>
        </Col>
      </Row>
       

      {/* Maps pls */}

      {/* <History/> */}
    </div>
  );
}

export default App;
