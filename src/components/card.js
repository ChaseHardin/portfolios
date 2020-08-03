import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const SummaryCard = (props) => {
    return (
        <Card>
        <Card.Img variant="top" src={props.pic} style={{width:  '100%', height: '400px', objectFit: 'cover'}}/>
            <Card.Body>
                <Card.Title>Rustic Coffee Table  <Badge variant="secondary">$550</Badge></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="dark">Details</Button>
            </Card.Body>
        </Card>
    )
}
