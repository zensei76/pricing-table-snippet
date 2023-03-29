import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
export default App;


function App() {

  
  let cardData = [
    {
      title: "FREE",
      cost: 0,
      feature1: "✔ Single User",
      feature2: "✔ 5GB Storage",
      feature3: "✔ Unlimited Public Projects",
      feature4: "✔ Community Access",
      feature5: "✖ Unlimited Private Projects",
      feature6: "✖ Dedicated Phone Support",
      feature7: "✖ Free Subdomain",
      feature8: "✖ Monthly Status Reports",
    },
    {
      title: "PLUS",
      cost: 9,
      feature1: "✔ 5 User",
      feature2: "✔ 50GB Storage",
      feature3: "✔ Unlimited Public Projects",
      feature4: "✔ Community Access",
      feature5: "✔ Unlimited Private Projects",
      feature6: "✔ Dedicated Phone Support",
      feature7: "✔ Free Subdomain",
      feature8: "✖ Monthly Status Reports",
    },
    {
      title: "PRO",
      cost: 49,
      feature1: "✔ Unlimited User",
      feature2: "✔ 150GB Storage",
      feature3: "✔ Unlimited Public Projects",
      feature4: "✔ Community Access",
      feature5: "✔ Unlimited Private Projects",
      feature6: "✔ Dedicated Phone Support",
      feature7: "✔ Unlimited Free Subdomain",
      feature8: "✔ Monthly Status Reports",
    },
  ];
  return (
    <Container className='container'>
      <Row>
        {cardData.map((card) => (
          <PricingCard
            title={card.title}
            cost={card.cost}
            feature1={card.feature1}
            feature2={card.feature2}
            feature3={card.feature3}
            feature4={card.feature4}
            feature5={card.feature5}
            feature6={card.feature6}
            feature7={card.feature7}
            feature8={card.feature8}
          />
        ))}
      </Row>
    </Container>
  );
}

function PricingCard({
  title,
  cost,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  feature7,
  feature8,
}) {
  return (
    <Col lg='4'>
      <Card>
        <Card.Body>
          <Card.Title>
            <h5 className='card-title text-muted  text-center'>{title}</h5>
            <h6 className='card-price text-center'>
              ${cost}
              <span className='period'>/month</span>
            </h6>
          </Card.Title>
          <hr />
          <Card.Text>
            <div className='feature'> {feature1}</div>
            <div className='feature'> {feature2}</div>
            <div className='feature'> {feature3}</div>
            <div className='feature'> {feature4}</div>
            <div className='feature'> {feature5}</div>
            <div className='feature'> {feature6} </div>
            <div className='feature'> {feature7}</div>
            <div className='feature'> {feature8}</div>
          </Card.Text>
          <Button className='btn btn-primary '>BUTTON</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
