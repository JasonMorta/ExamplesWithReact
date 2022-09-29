import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const products = [{
 id: "1",
 product_name: "Dress",
 description: "Black dress",
 price: "£80",
 image: ""
}, {
 id: "2",
 product_name: "Top",
 description: "Stripe Top",
 price: "£30",
 image: ""
}, {
 id: "3",
 product_name: "Trousers",
 description: "Black Trousers",
 price: "£40",
 image: ""
}];

function Job(props) {

 const listJobs = props.jobs.map((job) => 
 < Col>
  < Card style={ { width: '18rem' } }>
   < Card.Body>
    < Card.Title> {
     job.job_title
     } < /Card.Title> <Card.Text> {job.company}</Card.Text>
      < Card.Text> {
       job.date
       } < /Card.Text> 
       
       </Card.Body>
        < /Card></Col> 
        
        );


         return ( 

          < Container>
          < Row> 
          {listJobs} 
          < /Row> 
          
          </Container>
 
 );
}

export default Jobs;