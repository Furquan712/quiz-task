import {Col, Row, Spinner} from "react-bootstrap";

const Loader = () => {
    return (
       <>
          <Row>
              <Col className='text-center'>
                  <Spinner animation="grow" variant="light" />
                  <Spinner animation="grow" variant="light" />
                  <Spinner animation="grow" variant="light" />
              </Col>
          </Row>
       </>
    );
};

export default Loader;