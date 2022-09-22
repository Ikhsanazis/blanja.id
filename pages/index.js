import styles from "../styles/Home.module.css";
import { Container, Navbar, Form, Row, Button } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import Navigationbar from "../components/Navbar";
import Slide from "../components/Slide";
import Category from "../components/Category";
import NewProduct from "../components/New";

export default function Home() {
  return (
    <div>
      <Navigationbar />
      <Container>
        <Slide/>
        <Category />
        <h4>New Product</h4>
        <NewProduct />
        <h4>Popular Product</h4>
        <NewProduct />
      </Container>
    </div>
  );
}
