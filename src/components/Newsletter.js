import { Col, Row, Alert } from "react-bootstrap";
import {useEffect, useState} from "react";

export const Newsletter = ({onValidated, status, message}) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(status === 'success') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            })
    }

    const clearFields = () => {
        setEmail('');
    }

    function submitSend(e) {
        e.preventDefault();
        alert("This function in developing!");
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subcribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={submitSend}>
                            <div className="new-email-bx">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}