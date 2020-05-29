import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Joke = () => {
    return (
            <Container>
                <Button variant="primary" as={Link} to="/signin" block>
                    Ma blague
                </Button>
            </Container>
    );
};

export default Joke;