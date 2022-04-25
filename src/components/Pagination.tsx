import React from "react"
import ReactPaginate from "react-paginate"
import styled from "styled-components/macro"
import { DefaultContainer } from "../styles/DefaultContainer"

interface PaginationProps {
  numberOfPages: number
  onPageChange: (Selection: Selection) => void
  isPageLoading: boolean
}

interface Selection {
  selected: number
}

function Pagination({
  numberOfPages,
  onPageChange,
  isPageLoading,
}: PaginationProps) {
  return (
    <PaginationContainer isPageLoading={isPageLoading}>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={numberOfPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName="pagination-bar"
        pageClassName="page"
        activeClassName="active-page"
        previousLinkClassName={"btn-link"}
        nextLinkClassName={"btn-link"}
        disabledClassName="disabled-btn"
        disabledLinkClassName="disabled-btn"
        breakClassName="break"
      />
    </PaginationContainer>
  )
}

interface PaginationContainerProps {
  isPageLoading: boolean
}

const PaginationContainer = styled(DefaultContainer)<PaginationContainerProps>`
  max-width: 65%;
  height: auto;
  margin-bottom: 80px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.745),
    rgba(255, 255, 255, 0.595)
  );

  .pagination-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 100%;
    width: 100%;
    gap: 5px;

    border-radius: 10px;
    padding: 8px;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    backdrop-filter: blur(5px);
    --webkit-backdrop-filter: 5px;

    @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: rgba(236, 236, 236, 0.89);
    }
  }

  .page {
    background-color: rgba(255, 255, 255, 0.885);
    height: 20px;
    width: 20px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .active-page {
    border: ${p => (p.isPageLoading ? "none" : "1px solid black")};
    border-top: 1px solid black;
    animation: ${p => (p.isPageLoading ? "rotate 0.6s infinite linear" : "")};
  }

  .break {
    cursor: pointer;
  }

  .disabled-btn {
    color: rgba(201, 201, 201, 0.8);
    cursor: none;
  }

  .btn-link {
    cursor: pointer;
  }

  @media (max-width: 968px) {
    max-width: 95%;

    .page {
      width: 14px;
      height: 14px;
      padding: 12px;
    }
  }
`

export { Pagination }
