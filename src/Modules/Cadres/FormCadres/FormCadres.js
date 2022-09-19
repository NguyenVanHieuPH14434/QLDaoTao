import React, { useEffect } from "react";
import "./FormCadres.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "../../../Shared/clock/clock";
import { Button, Col, Row, Container } from "reactstrap";
import axios, { Axios } from "axios";
function FormCadres(props) {
  const { onChangeLink, handleButtonMore, link } = props;
 
  return (
    <div id="cadres">
      <div className="customer__care">Chăm sóc khác hàng</div>
      <div className="customer__line"></div>
      <div className="customer__clock">
        <Clock />
      </div>
      <Container id="customer__care__form">
        <Row xs={12} className="info__cadres">
          <Col xs={4} className="Name__CVT">
            <span className="Name">Tên CTV</span>
            <select
              name="NameCTV"
              id="selectNameCTV"
              onChange={(e) => {
                onChangeLink(e);
              }}
              value={link.NameCTV}
            >
              <option></option>
              <option>CTV 1</option>
              <option>CTV 2</option>
              <option>CTV 3</option>
              <option>CTV 4</option>
              <option>CTV 5</option>
            </select>
          </Col>
          <Col xs={4} className="Department">
            <span className="Name">Phòng Ban</span>
            <select
              name="Department"
              onChange={(e) => {
                onChangeLink(e);
              }}
              value={link.Department}
            >
              <option></option>
              <option>Phòng hành chính</option>
              <option>Phòng nhân sự</option>
              <option>Phòng tài chính</option>
            </select>
          </Col>
          <Col xs={4} className="specialized">
            <span className="Name">Chuyên Ngành</span>
            <select
              name="Specialized"
              onChange={(e) => {
                onChangeLink(e);
              }}
              value={link.Specialized}
            >
              <option></option>
              <option>Công nghệ thông tin </option>
              <option>Marketing</option>
              <option>Quản lý nhân sự</option>
              <option>Thiết kế</option>
              <option>Kế toán</option>
            </select>
          </Col>
        </Row>
        <div className="Link__FB">
          <span>Link FaceBook</span>
          <input
            id="More__Link__FB"
            placeholder="Thêm link facebook..."
            name="linkfb"
            value={link.linkfb ? link.linkfb : ""}
            onChange={(e) => {
              onChangeLink(e);
            }}
          />
          <button onClick={handleButtonMore}>Thêm</button>
        </div>
      </Container>
    </div>
  );
}

export default FormCadres;
