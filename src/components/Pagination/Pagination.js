import React from "react";
import { paginationStyle } from "@assets/jss";
import { useStyles } from "@hooks";
import { Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, page, handlePageClick }) => {
  const c = useStyles(paginationStyle);
  return (
    <Grid
      container
      className={c.pagination}
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <ReactPaginate
        initialPage={0}
        forcePage={page - 1}
        previousLabel={<ArrowBackIosIcon />}
        breakLabel={"..."}
        pageClassName="page"
        previousLinkClassName="arrow"
        nextLinkClassName="arrow"
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={data => handlePageClick(data.selected + 1)}
        nextLabel={<ArrowForwardIosIcon />}
      />
    </Grid>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  handlePageClick: PropTypes.func
};

export default Pagination;
