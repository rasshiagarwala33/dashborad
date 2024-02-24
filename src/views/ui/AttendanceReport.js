import { Col, Row } from "reactstrap";
import { Card, CardBody } from "reactstrap";

const AttendanceReport = () => {
  return (
    <div>

    <Card>
      <CardBody>
        <div className="d-flex">
          <div className={`circle-box lg-box d-inline-block bg-light-success text-success`}>
            <i className="bi bi-wallet"></i>
          </div>
          <div className="ms-3">
            <h3 className="mb-0 font-weight-bold">$21k</h3>
            <small className="text-muted">Yearly Earning</small>
          </div>
        </div>
      </CardBody>
    </Card>
      
    </div>
  );
};

export default AttendanceReport;
