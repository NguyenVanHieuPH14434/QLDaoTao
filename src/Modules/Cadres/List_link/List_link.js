import React, { useState, useEffect, memo } from "react";
import "./List_link.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCopy } from "@fortawesome/free-regular-svg-icons";
// import StarRating from "../../../Shared/StarRating/StarRating";
import axios from 'axios';
// import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import ReactPaginate from "react-paginate";
import { library } from "@fortawesome/fontawesome-svg-core";
import ReactStars from "react-rating-stars-component";
function ListLink(props) {
  const { HandleDelete, listInfo, } = props;
  const [indexStarRating, setIndexStarRating] = useState()
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 7;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(listInfo.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // Copylink fb
  const HandleCopylink = (id) => {
    let clipBoard = listInfo[id].linkfb;
    navigator.clipboard.writeText(clipBoard);
  }

  // StarRating
  const handleRating = (i) => {
    let update = listInfo[i]
    let data = { ...update, StarRating: indexStarRating };
    axios.post(`http://localhost:8080/api/customer/update/${listInfo[i]._id}`, data).then(
      res => {
        console.log(res.data);
      }
    )
  }
  const firstExample = {
    size: 20,
    count: 5,
    value: 0,
    edit: true,

  };
  return (
    <div className="Table" >
      <div id="FormTable">
        <Table id="FormTableLink" bordered>
          <thead className="Form__title">
            <tr>
              <th className="LinkFB">Link FaceBook</th>
              <th className="evaluate">Đánh giá</th>
              <th className="custom">Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            {listInfo.map((item, index) => {
              return (
                <tr key={index} className="Row__Table__Link">
                  <td className="NameLinkFB">
                    <input className="NameLink" value={item.linkfb} disabled />
                    <span className="iconCopy" onClick={e => { HandleCopylink(index) }}> <FontAwesomeIcon icon={faCopy} id="Copy" /> </span>
                  </td>
                  <td>
                    {/* <span> <StarRating setIndexStarRating={setIndexStarRating} /></span> */}
                    <span> <ReactStars {...firstExample} /></span>
                  </td>
                  <td>
                    <button onClick={e => { handleRating(index) }}>đánh giá</button>
                  </td>
                  <td className="custom__edit" onClick={e => { HandleDelete(index) }} >
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faTrashCan} id="TrashCan" />{" "}
                    </span>
                  </td>
                </tr>
              );
            }).slice(pagesVisited, pagesVisited + usersPerPage)}

            <tr>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="pagination">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
export default memo(ListLink);
