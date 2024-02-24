import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardGroup,
    Button,
    Row,
    Col,
  } from "reactstrap";
  import Blog from "../../components/dashboard/Blog";
  
  const BlogData = [
    {
      title: "This is simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
  
      title: "Lets be simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
  
      title: "Don't Lamp blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
  
      title: "Simple is beautiful",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
  ];
  
  const Cards = () => {
    return (
      <div>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <h5 className="mb-3">Shifts</h5>
        <Row>
          <h5 className="mb-3 mt-3">Current Shift</h5>

          <Col md="6" lg="3">
  <Card body color="light-info">
    <CardTitle tag="h5">Morning</CardTitle>
    <CardText>
     Monday
    </CardText>
    <CardText>
      Working Hours: 9:00 AM - 5:00 PM
    </CardText>
    <CardText>
      Hours: 8
    </CardText>
  </Card>
</Col>      <Col md="6" lg="3">
  <Card body color="light-info">
    <CardTitle tag="h5">Morning</CardTitle>
    <CardText>
     Tuesday
    </CardText>
    <CardText>
      Working Hours: 9:00 AM - 6:00 PM
    </CardText>
    <CardText>
      Hours: 8
    </CardText>
  </Card>
</Col>
<Col md="6" lg="3">
  <Card body color="light-info">
    <CardTitle tag="h5">Evening</CardTitle>
    <CardText>
     Wednesday
    </CardText>
    <CardText>
      Working Hours: 6:00 PM - 5:00 AM
    </CardText>
    <CardText>
      Hours: 8
    </CardText>
  </Card>
</Col>
        </Row>
      </div>
    );
  };
  
  export default Cards;
  