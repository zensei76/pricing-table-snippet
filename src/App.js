import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col, CardGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <Container className="container">
      <Row >
        <Col lg='4' >
          <Card >
            <Card.Body>
              <Card.Title>
                <h5 class='card-title text-muted  text-center'>
                  Free
                </h5>
                <h6 class='card-price text-center'>
                  $0<span class='period'>/month</span>
                </h6>
              </Card.Title>
              <hr />
              <Card.Text>
                <ul className='fa-ul'>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Single User
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    5GB Storage
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Community Access
                  </li>
                  <li className='text-muted'>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li className='text-muted'>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li className='text-muted'>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    Free Subdomain
                  </li>
                  <li className='text-muted'>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Button className='btn btn-primary '>BUTTON</Button>
          </Card>
        </Col>
        <Col lg='4'>
          <Card>
            <Card.Body>
              <Card.Title>
                <h5 class='card-title text-muted  text-center'>
                  Plus
                </h5>
                <h6 class='card-price text-center'>
                  $9<span class='period'>/month</span>
                </h6>
              </Card.Title>
              <hr />
              <Card.Text>
                <ul className='fa-ul'>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    5 Users
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    50GB Storage
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Community Access
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Free Subdomain
                  </li>
                  <li className='text-muted'>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Button className='btn btn-primary '>BUTTON</Button>
          </Card>
        </Col>
        <Col lg='4'>
          <Card>
            <Card.Body>
              <Card.Title>
                <h5 class='card-title text-muted  text-center'>
                  Pro
                </h5>
                <h6 class='card-price text-center'>
                  $49<span class='period'>/month</span>
                </h6>
              </Card.Title>
              <hr />
              <Card.Text>
                <ul className='fa-ul'>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <strong>Unlimited Users</strong>
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    500GB Storage
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Community Access
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <strong>Unlimited</strong>Free Subdomain
                  </li>
                  <li>
                    <span className='fa-li'>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            
            <Button className='btn btn-primary '>BUTTON</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
