import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

function NewProduct() {
  return (
    <>
      <Row xs={1} md={5} className="g-3 mb-5">
        {Array.from({ length: 15 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src="/images/product.png"
                height={135}
                width={238}
              />
              <Card.Body>
                <Card.Title>Men{`'`}s formal suit - Black & White</Card.Title>
                <Card.Subtitle>$ 40.0</Card.Subtitle>
                <Card.Text>Zalora Cloth</Card.Text>
                <div className="d-flex text-warning">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default NewProduct;
