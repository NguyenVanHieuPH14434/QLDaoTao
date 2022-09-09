import React, { useState } from 'react';
import './List_link.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Table } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan } from "@fortawesome/free-regular-svg-icons"
import StarRating from '../../Share/StarRating/StarRating';
function ListLink(props) {
    const {  linkFB, openTableLink } = props
   

    return (
        <div id='FormTable'>
            <Table id='FormTableLink' bordered>
                <thead  className='Form__title' >
                    <tr >
                        <th className='LinkFB'>
                            Link FaceBook
                        </th>
                        <th className='evaluate'>
                            Đánh giá
                        </th>
                        <th className='custom'>
                            Tùy chỉnh
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { linkFB.map((item, index) => {
                        return (
                            <tr key={index} className='Row__Table__Link'>
                                <td className='NameLinkFB'>
                                    <span className='NameLink'>{item.linkfb}</span>
                                </td>
                                <td>
                                    < StarRating />
                                </td>
                                <td className='custom__edit'>
                                    <span> <FontAwesomeIcon icon={faTrashCan} /> </span>
                                </td>
                            </tr>
                        )
                    })
                    }
                    {/* <tr>
                        <td className='NameLinkFB'>
                            <span className='NameLink'> https://www.facebook.com/profile.php?id=100025209167</span>
                        </td>
                        <td>
                            Otto
                        </td>
                        <td className='custom__edit'>
                            <span> <FontAwesomeIcon icon={faTrashCan} /> </span>
                        </td>   
                    </tr>
                    <tr>
                        <td className='NameLinkFB'>
                            <span className='NameLink'> https://www.facebook.com/minhlahathuy?Y5XzYzNDc2MDE1NDk4Nzk0MQ3D</span>
                        </td>
                        <td>
                            Otto
                        </td>
                        <td className='custom__edit'>
                            <span> <FontAwesomeIcon icon={faTrashCan} /> </span>
                        </td>
                    </tr>
                    <tr>
                        <td className='NameLinkFB'>
                            <span className='NameLink'> https://www.facebook.com/iamthientinh?comment_id=Y29tbWVudDoz</span>
                        </td>
                        <td>
                            Otto
                        </td>
                        <td className='custom__edit'>
                            <span> <FontAwesomeIcon icon={faTrashCan} /> </span>
                        </td>
                    </tr>
 */}


                </tbody>
            </Table>
        </div>
    );
}
export default ListLink;