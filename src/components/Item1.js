import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
 
 
  return (
    <div className="box">
      <Card >
        <CardImg  className="imageBox" src={require('../img/box.jpeg')} alt="Card image cap" />
        <CardBody className="textBox" >
          <CardTitle>Card title</CardTitle>
         
        </CardBody>
      </Card>
      
    </div>
  );
};

export default Example;