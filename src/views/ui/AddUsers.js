import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
  
  const  AddUsers = () => {
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi  me-2"> </i>
              Add Users
            </CardTitle>
            <CardBody>
              <Form>
              <FormGroup>
                  <Label for="SelectUser">Select User to Add</Label>
                  <Input id="SelectUser" name="selectuser" type="select">
                    <option>Team Leader</option>
                    <option>Employee</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="FirstName">First Name</Label>
                  <Input
                    id="FirstName"
                    name="firstname"
                    placeholder="John"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="LastName">Last Name</Label>
                  <Input
                    id="LastName"
                    name="lastname"
                    placeholder="Wick"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    id="Email"
                    name="email"
                    placeholder="example@gmail.com"
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    id="Password"
                    name="password"
                    placeholder="password"
                    type="password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="ConfirmPassword">Password</Label>
                  <Input
                    id="ConfirmPassword"
                    name="confirmpassword"
                    placeholder="confirm password"
                    type="password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="SelectDepartment">Select Department</Label>
                  <Input id="SelectDepartment" name="selectdepartment" type="select">
                    <option>US</option>
                    <option>Europe</option>
                    <option>India</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="SelectShift">Select Shift</Label>
                  <Input id="SelectShift" name="selectshift" type="select">
                    <option>Morning</option>
                    <option>Night</option>
                  </Input>
                </FormGroup>
                <Button className="mt-2">Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default AddUsers;
  