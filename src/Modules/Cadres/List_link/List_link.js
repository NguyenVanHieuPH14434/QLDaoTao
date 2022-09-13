import React, { useState } from "react";
import "./List_link.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import StarRating from "../../../Shared/StarRating/StarRating";
// import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import ReactPaginate from "react-paginate";
function ListLink(props) {
  const { linkFB } = props;
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 7;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(linkFB.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
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
            {linkFB
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((item, index) => {
                return (
                  <tr key={index} className="Row__Table__Link">
                    <td className="NameLinkFB">
                      <span className="NameLink">{item.linkfb}</span>
                    </td>
                    <td>
                      <StarRating />
                    </td>
                    <td className="custom__edit">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faTrashCan} />{" "}
                      </span>
                    </td>
                  </tr>
                );
              })}

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
export default ListLink;
