import React, { useState, useEffect, memo } from "react";
import "./List_link.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCopy } from "@fortawesome/free-regular-svg-icons";
import StarRating from "../../../Shared/StarRating/StarRating";
import axios from "axios";
// import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import ReactPaginate from "react-paginate";
import { library } from "@fortawesome/fontawesome-svg-core";
function ListLink(props) {
  const { setLink, HandleDelete, setValueDate, valueDate,resListInfo, handleFilter, handleAllLink} = props;
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const [data, setData] = useState(listInfo);
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(resListInfo.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const Copylink = (id) => {
    let clipBoard = resListInfo[id].linkfb;
    navigator.clipboard.writeText(clipBoard);
    setLink({ linkfb: "" });
  };



  return (
    <div className="Table">
      <span className="Filter__ListLink">
        <input type='date' id="dateTime"  onChange={e => setValueDate(e.target.value)} value={valueDate}></input>
        <button onMouseUp={handleFilter}>Lọc</button>
        <button onMouseUp={handleAllLink}>ALL link</button>

      </span>

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
<<<<<<< HEAD
            {resListInfo.length? resListInfo
              .map((item, index) => {
                return (
                  <tr key={index} className="Row__Table__Link">
                    <td className="NameLinkFB">
                      <input
                        className="NameLink"
                        value={item.linkfb}
                        onChange={(e) => { }}
                        disabled
                      />
                      <span
                        className="iconCopy"
                        onClick={(e) => {
                          Copylink(index);
                        }}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faCopy} id="Copy" />{" "}
                      </span>
                    </td>
                    <td>
                      <StarRating indexStart />
                    </td>
                    <td
                      className="custom__edit"
                      onMouseUp={(e) => {
                        HandleDelete(index);
                      }}
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          id="TrashCan"
                        />{" "}
                      </span>
                    </td>
                  </tr>
                );
              })
              .slice(pagesVisited, pagesVisited + usersPerPage)
              : <h4 style={{ marginLeft:'5%' }}>Chưa có dữ liệu</h4>
              }
=======
            {
              link.NameCTV === '' ? 
              (listInfo.map((item, index) => {
                    return (
                      <tr key={index} className="Row__Table__Link">
                        <td className="NameLinkFB">
                          <input
                            className="NameLink"
                            value={item.linkfb}
                            onChange={(e) => {}}
                            disabled
                          />
                          <span
                            className="iconCopy"
                            onClick={(e) => {
                              Copylink(index);
                            }}
                          >
                            {" "}
                            <FontAwesomeIcon icon={faCopy} id="Copy" />{" "}
                          </span>
                        </td>
                        <td>
                          <StarRating indexStart />
                        </td>
                        <td
                          className="custom__edit"
                          onClick={(e) => {
                            HandleDelete(index);
                          }}
                        >
                          <span>
                            {" "}
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              id="TrashCan"
                            />{" "}
                          </span>
                        </td>
                      </tr>
                    );
                  }))
              : (data.map((item, index) => {
                    return (
                      <tr key={index} className="Row__Table__Link">
                        <td className="NameLinkFB">
                          <input
                            className="NameLink"
                            value={item.linkfb}
                            onChange={(e) => {}}
                            disabled
                          />
                          <span
                            className="iconCopy"
                            onClick={(e) => {
                              Copylink(index);
                            }}
                          >
                            {" "}
                            <FontAwesomeIcon icon={faCopy} id="Copy" />{" "}
                          </span>
                        </td>
                        <td>
                          <StarRating indexStart />
                        </td>
                        <td
                          className="custom__edit"
                          onClick={(e) => {
                            HandleDelete(index);
                          }}
                        >
                          <span>
                            {" "}
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              id="TrashCan"
                            />{" "}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                  

                  ).slice(pagesVisited, pagesVisited + usersPerPage)}

>>>>>>> 56e159249e531ff66cb2af7283da4459cf21685f
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
<<<<<<< HEAD
export default memo(ListLink);
=======
export default ListLink;
>>>>>>> 56e159249e531ff66cb2af7283da4459cf21685f
