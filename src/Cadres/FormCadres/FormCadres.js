import React from 'react';
import './FormCadres.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from '../../Share/clock/clock';
import { Button, Col, Row, Container } from 'reactstrap'
function FormCadres(props) {
  const {onChangeLink, handleButtonMore, link} = props
 const valueFB = document.getElementById("More__Link__FB");


  return (
    <div id="cadres">
      <div className='customer__care'>Chăm sóc khác hàng</div>
      <div className='customer__line'></div>
      <div className='customer__clock'><Clock/></div>
      <Container id='customer__care__form'>
        <Row xs={12} className='info__cadres'>
          <Col xs={4} className='Name__CVT'>
            <span className='Name'>Tên CTV</span>
            <input></input>
          </Col >
          <Col xs={4} className='Department'>
            <span className='Name'>Phòng Ban</span>
            <input></input>
          </Col >
          <Col xs={4} className='specialized'>
            <span className='Name'>Chuyên Ngành</span>
            <select>
              <option></option>
              <option>chuyên ngành A</option>
              <option>chuyên ngành B</option>
              <option>chuyên ngành C</option>
              <option>chuyên ngành D</option>
              <option>chuyên ngành E</option>
            </select>
          </Col >
        </Row>
        <div className='Link__FB'>
            <span>Link FaceBook</span>
            <input id='More__Link__FB' placeholder='Thêm link facebook...' name='linkfb' value={link.linkfb}  onChange={(e)=>{onChangeLink(e)}}/>
        <button onClick={handleButtonMore}>Thêm</button>
        </div>
        </Container>
       
    </div>
  );
}

export default FormCadres;
