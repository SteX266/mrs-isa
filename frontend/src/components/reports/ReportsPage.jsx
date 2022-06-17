import { useState } from "react";
import { Nav } from "react-bootstrap";
import RatingsReport from "./RatingsReport";

const types = {
  host: "Listing",
  captain: "Vessel",
  instructor: "Adventure",
};

function ReportsPage({ type }) {
  const serviceType = types[type];
  const [report, setReport] = useState(<RatingsReport type={serviceType} />);
  function changeReport(reportType) {
    switch (reportType) {
      case "score":
        setReport(<RatingsReport type={serviceType} />);
        break;
      case "revenue":
        break;
      case "attendance":
        break;
      default:
        break;
    }
  }
  return (
    <>
      <Nav variant="tabs" fill>
        <Nav.Item>
          <Nav.Link onClick={() => changeReport("score")}>
            Rating Report
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Revenue Report</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Attendance Report</Nav.Link>
        </Nav.Item>
      </Nav>
      <>{report}</>
    </>
  );
}

export default ReportsPage;
