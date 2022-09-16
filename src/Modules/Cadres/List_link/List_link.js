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
  const { setLink, link, listInfo, HandleDelete, resListInfo } = props;
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 7;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(listInfo.length / usersPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const Copylink = (id) => {
    let clipBoard = listInfo[id].linkfb;
    navigator.clipboard.writeText(clipBoard);
    setLink({ linkfb: "" });
    setTimeout(() => {
      let htmlCopy = document.getElementsByClassName("iconCopy");
      htmlCopy[id].style.color = "black";
    }, 200);
    let htmlCopy = document.getElementsByClassName("iconCopy");
    htmlCopy[id].style.color = "green";
  };
  return (
    <div className="Table">
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
            {listInfo
                  .map((item, index) => {
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

                  .slice(pagesVisited, pagesVisited + usersPerPage)}

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
