import React from 'react';
import  {Container, Row, Col} from 'reactstrap';
import Todo from './Components/Todo/Todos'

function App() {
  return (
    <Container >
      <Row>
        <Col>
          <Todo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
