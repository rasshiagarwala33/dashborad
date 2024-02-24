import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const RecentAttendanceData = [
  {
    title: " Narendra Modi",
    icon: "bi bi-person",
    color: "info",
    date: "6 minute ago",
  },
  {
    title: "Obama",
    icon: "bi bi-person",
    color: "info",
    date: "6 minute ago",
  },
  {
    title: "Donald Trump",
    icon: "bi bi-person",
    color: "info",
    date: "6 minute ago",
  },
  
];

const RecentAttendance = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Recent </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Attendances
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {RecentAttendanceData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default RecentAttendance;
