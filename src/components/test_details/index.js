import React, { useState } from "react";
import styles from "./test_details.module.scss";
import { Container, Row, Col } from "react-bootstrap";
// Icons
import { CgDatabase } from "react-icons/cg";

function Index() {
  //  Username and test details will be received via props or redux ...
  let userName = "ADI";

  let testData = [
    { roll_no: "1", grade_given: "A", grade_mark: "90" },
    { roll_no: "2", grade_given: "B", grade_mark: "80" },
  ];

  let renderTestDetails = () => {
    if (testData.length === 0) {
      return (
        <div className={styles.no_dataDiv}>
          <CgDatabase className={styles.noDataIcon} />
          <h4>No Data</h4>
        </div>
      );
    } else {
      return testData.map((test) => {
        return (
          <Row className={styles.details_row}>
            <Col className={styles.test_col}>
              <h4>{test.roll_no}</h4>
            </Col>
            <Col className={styles.test_col}>
              <h4>{test.grade_given}</h4>
            </Col>
            <Col className={styles.test_col}>
              <h4>{test.grade_mark}</h4>
            </Col>
          </Row>
        );
      });
    }
  };

  return (
    <div className={styles.test_details}>
      <h2 className={styles.title}>
        ExamApp - Giving Accurate feedback for assesments
      </h2>
      <div className={styles.details_wrapper}>
        <h2 className={styles.details_title}>
          Welcome back {userName} heres a summary of your saved tests
        </h2>
        <Container fluid className={styles.details_header}>
          <Row>
            <Col className={styles.header_title}>
              <h4>Roll No</h4>
            </Col>
            <Col className={styles.header_title}>
              <h4>Grade Given</h4>
            </Col>
            <Col className={styles.header_title}>
              <h4>Grade Mark</h4>
            </Col>
          </Row>
        </Container>
        <Container className={styles.test_container} fluid>
          {renderTestDetails()}
        </Container>
      </div>
      <h2 className={styles.copyright}>Copyright @2021</h2>
    </div>
  );
}

export default Index;
