import styles from "../styles/Detail.module.css";
import { Container, Nav, Col, Card, Row, Button } from "react-bootstrap";
import Navigationbar from "../components/Navbar";
import Navs from "../components/Navs";
import Rating from "../components/Rating";
import { AiFillStar } from "react-icons/ai";
import NewProduct from "../components/New";
import Image from "next/image";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export default function Home() {
  const product = [
    { image: "/images/detail1.png" },
    { image: "/images/detail2.png" },
    { image: "/images/detail3.png" },
    { image: "/images/detail4.png" },
    { image: "/images/detail5.png" },
  ];
  return (
    <div>
      <Navigationbar />
      <Container>
        <Navs />
        <div className="mt-5 d-flex">
          <Col lg={4} className="">
            <Image
              src="/images/detail3.png"
              alt="category"
              width={378}
              height={378}
              layout="responsive"
            />
            <div className="d-flex mt-2 ">
              {product.map((item, index) => (
                <Col key={index} className="d-flex justify-content-center ">
                  {/* <Card style={{ width: "65px" }} className=""> */}
                  <Image
                    className=""
                    src={item.image}
                    alt="product"
                    width={65}
                    height={65}
                    layout=""
                  />
                  {/* </Card> */}
                </Col>
              ))}
            </div>
          </Col>
          <Col lg={8} className="">
            <div className="ms-5">
              <h4>Baju Muslim Pria</h4>
              <p className="text-secondary"> Zalora Cloth</p>
              <span className="d-flex">
                <Rating className="mt-1" />
                <p className="text-secondary d-flex align-items-center">(10)</p>
              </span>
              <small>Price</small>
              <h4 className="mb-5">$ 20.0</h4>
              <h6 classNamme="mt-3">Color</h6>
              <Col className="d-flex col-3 mb-4">
                <div className={`${styles.color} bg-dark`}></div>
                <div className={`${styles.color} bg-danger`}></div>
                <div className={`${styles.color} bg-primary`}></div>
                <div className={`${styles.color} bg-success`}></div>
              </Col>
              <Row className="">
                <Col lg={3} className="">
                  <h6> Size</h6>
                  <div className="d-flex">
                    <Col lg={3}>
                      <Button
                        variant="outline-secondary"
                        className={`${styles.rounded}`}
                      >
                        <FiPlus />
                      </Button>
                    </Col>
                    <Col
                      lg={4}
                      className="d-flex fs-5  align-items-center justify-content-center"
                    >
                      12
                    </Col>
                    <Col>
                      <Button
                        variant="outline-secondary"
                        className={`${styles.rounded}`}
                      >
                        <FiMinus />
                      </Button>
                    </Col>
                  </div>
                </Col>
                <Col lg={3} className="">
                  <h6> Jumlah</h6>
                  <div className="d-flex">
                    <Col lg={3}>
                      <Button
                        variant="outline-secondary"
                        className={`${styles.rounded}`}
                      >
                        <FiPlus />
                      </Button>
                    </Col>
                    <Col
                      lg={4}
                      className="d-flex fs-5  align-items-center justify-content-center"
                    >
                      12
                    </Col>
                    <Col>
                      <Button
                        variant="outline-secondary"
                        className={`${styles.rounded}`}
                      >
                        <FiMinus />
                      </Button>
                    </Col>
                  </div>
                </Col>
              </Row>
              <div className="d-flex justify-content-between mt-5">
                <Button
                  className={`${styles.button} col-2`}
                  variant="outline-primary"
                >
                  Chat
                </Button>
                <Button
                  className={`${styles.button} col-3`}
                  variant="outline-primary"
                >
                  Add Bag
                </Button>
                <Button
                  className={`${styles.button} col-6`}
                  variant="outline-primary"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </Col>
        </div>
        <h5 className="mt-5">Informasi Product</h5>
        <h6 className="mt-4">Condition</h6>
        <h6 className="text-danger">New</h6>
        <h6 className="mt-4">Description</h6>
        <div>
          <p className="Text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis
            laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Praesent sed enim vel turpis
            blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat.
            Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris
            vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl
            at, ornare suscipit magna. Donec non magna rutrum, pellentesque
            augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec
            pharetra quam. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac
            felis. In ultricies rutrum tempus. Mauris vel molestie orci.
          </p>
        </div>
        <h5 className="mt-5">Product Review</h5>
        <div className="d-flex mt-4">
          <Col className="col-1">
            <div className="d-flex">
              <p className="fs-2">5.0</p>
              <p className="align-items-end d-flex ">/10</p>
            </div>
            <Rating />
          </Col>
          <Col className="col-2 ms-5">
            {[...Array(6)]?.map((index) => (
              // <Row className=" d-flex justify-content-between" key={index}>
              <div
                className=" d-flex justify-content-between"
                key={index}
                style={{ marginTop: "-15PX" }}
              >
                <span>
                  <AiFillStar className="text-warning" />
                  <small>5</small>
                </span>
                <span className=" ">
                  <p>(5)</p>
                </span>
              </div>
              // </Row>
            ))}
          </Col>
        </div>
        <h4 className="mt-5">You May Also Like This</h4>
        <p className="text-secondary">You’ve never seen it before!</p>
        <NewProduct />
      </Container>
    </div>
  );
}
