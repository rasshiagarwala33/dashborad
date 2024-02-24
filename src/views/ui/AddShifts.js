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

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const  AddShifts = () => {
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi  me-2"> </i>
              Add Shifts
            </CardTitle>
            <CardBody>
              <Form>
              <FormGroup>
                  <Label for="ShiftName">Shift Name</Label>
                  <Input
                    id="ShiftName"
                    name="shiftname"
                    placeholder="Shift Name"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Start Time Monday">Start Time Monday</Label>
                  <Input
                    id="StartTimeMonday"
                    name="starttimemonday"
                    placeholder="9:00 AM"
                    type="time"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="End Time Monday">End Time Monday</Label>
                  <Input
                    id="EndTimeMonday"
                    name="endtimemonday"
                    placeholder="8:00 PM"
                    type="time"
                  />
                </FormGroup>
                <FormGroup check>
                  <Input name="check1" type="radio" />{" "}
                  <Label check className="form-label">
                  Off Day
                  </Label>
                </FormGroup>
                <FormGroup>
              <Label for="Start Time Tuesday">Start Time Tuesday</Label>
              <Input id="StartTimeTuesday" name="starttimetuesday" placeholder="9:00 AM" type="time" />
            </FormGroup>
          <FormGroup>
        <Label for="End Time Tuesday">End Time Tuesday</Label>
          <Input id="EndTimeTuesday" name="endtimetuesday" placeholder="8:00 PM" type="time" />
            </FormGroup>
            <FormGroup check>
                  <Input name="check2" type="radio" />{" "}
                  <Label check className="form-label">
                  Off Day
                  </Label>
                </FormGroup>
                <FormGroup>
  <Label for="Start Time Wednesday">Start Time Wednesday</Label>
  <Input id="StartTimeWednesday" name="starttimewednesday" placeholder="9:00 AM" type="time" />
</FormGroup>
<FormGroup>
  <Label for="End Time Wednesday">End Time Wednesday</Label>
  <Input id="EndTimeWednesday" name="endtimewednesday" placeholder="8:00 PM" type="time" />
</FormGroup>
<FormGroup check>
                  <Input name="check3" type="radio" />{" "}
                  <Label check className="form-label">
                  Off Day
                  </Label>
                </FormGroup>
<FormGroup>
  <Label for="Start Time Thursday">Start Time Thursday</Label>
  <Input id="StartTimeThursday" name="starttimethursday" placeholder="9:00 AM" type="time" />
</FormGroup>
<FormGroup>
  <Label for="End Time Thursday">End Time Thursday</Label>
  <Input id="EndTimeThursday" name="endtimethursday" placeholder="8:00 PM" type="time" />
</FormGroup>
<FormGroup check>
                  <Input name="check4" type="radio" />{" "}
                  <Label check className="form-label">
                  Off Day
                  </Label>
                </FormGroup>

<FormGroup>
  <Label for="Start Time Friday">Start Time Friday</Label>
  <Input id="StartTimeFriday" name="starttimefriday" placeholder="9:00 AM" type="time" />
</FormGroup>
<FormGroup>
  <Label for="End Time Friday">End Time Friday</Label>
  <Input id="EndTimeFriday" name="endtimefriday" placeholder="8:00 PM" type="time" />
</FormGroup>
<FormGroup check>
                  <Input name="check5" type="radio" />{" "}
                  <Label check className="form-label">
                  Off Day
                  </Label>
                </FormGroup>

<FormGroup>
  <Label for="Start Time Saturday">Start Time Saturday</Label>
  <Input id="StartTimeSaturday" name="starttimesaturday" placeholder="9:00 AM" type="time" />
</FormGroup>
<FormGroup>
  <Label for="End Time Saturday">End Time Saturday</Label>
  <Input id="EndTimeSaturday" name="endtimesaturday" placeholder="8:00 PM" type="time" />
</FormGroup>
<FormGroup check>
                  <Input name="check6" type="radio" />{" "}
                  <Label check className="form-label">
                  Off Day
                  </Label>
                </FormGroup>

<FormGroup>
  <Label for="Start Time Sunday">Start Time Sunday</Label>
  <Input id="StartTimeSunday" name="starttimesunday" placeholder="9:00 AM" type="time" />
</FormGroup>
<FormGroup>
  <Label for="End Time Sunday">End Time Sunday</Label>
  <Input id="EndTimeSunday" name="endtimesunday" placeholder="8:00 PM" type="time" />
</FormGroup>
<FormGroup check>
                  <Input name="check7" type="radio" />{" "}
                  <Label check className="form-label">
                  Off Day
                  </Label>
                </FormGroup>
              
                <Button className="mt-2">Add User</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default AddShifts;
  