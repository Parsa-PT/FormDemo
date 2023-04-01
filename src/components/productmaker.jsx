import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Col, Row } from "react-bootstrap";
import "./product.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductHandler } from "../context/productHandler";

function ProducMaker() {
  const { productData } = useContext(ProductHandler);
  return (
    <>
      <CardGroup>
        <Row>
          {productData.map((item, id) => {
            return (
              <Col key={id} md="6" sm="12" lg="4">
                <Card className="cardbg  m-4">
                  <Card.Img
                    className="img-hover"
                    variant="top"
                    src={item.image}
                  />
                  <Card.Body className="text-white">
                    <Link to={`/product/${item.id}`}>
                      <Card.Title>{item.title}</Card.Title>
                    </Link>

                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </CardGroup>
    </>
  );
}

export default ProducMaker;
