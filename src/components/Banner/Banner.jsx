import { Col, Container, Row } from "react-bootstrap";
import productBg from "../../Images/table.jpg";
import "./banner.css";
const Banner = ({title}) => {
    return ( 
        <div className="image-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwir0uLazE6Z8EKbEn-fIKzQEam6ARxtILTvr4luDuQ&s" alt="Product-bg" />
            <div className="overlay">
                <Container>
                    <Row>
                        <Col>
                            <h2>{title}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Banner;