import { useState } from "react"
import { Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img-svg";

export const Contactc = () => {
        const formInitialDetails = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        }
        const [formDetails, setFormDetails] = useState(formInitialDetails);
        const [buttonText, setButtonText] = useState('Send');
        const [status, setStatus] = useState({});


        return (
        <section className="contact" id="connect">
            <Container>
              <Row ClassName="align-items-center">
                <col md={6}>
                    <img src ={contactImg} alt="Entre em contato comigo"/>
                </col>
                </Row>  
            </Container>
        </section>
    )
}