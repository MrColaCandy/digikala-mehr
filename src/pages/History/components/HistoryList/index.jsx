import { BsListCheck } from "react-icons/bs";
import { TbChevronRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import {  useRef, useState } from "react";
import { TbChevronLeft } from "react-icons/tb";

import HistoryItem from "@components/HistoryItem";
import usePersian from "@components/hooks/usePersian";

import './style.css';



function HistoryList({ itemsPerPage,histories }) {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const { convert } = usePersian();
  const listRef = useRef(null);
  const totalPages = Math.ceil(histories?.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = histories?.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));

  };

  
 
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  };
  function handleBackButtonClick() {
    navigate(-1)
  }
  return (
    <section className="historyList">
      <header className="historyList__header">
        <div onClick={handleBackButtonClick} className="historyList__headerGoBackLink">بازگشت</div>
        <section className="historyList__headerTitleWrapper">
          <BsListCheck className="historyList__headerTitleIcon" />
          <span className="historyList__headerTitleText">تاریخچه پرداخت‌ها</span>
        </section>
      </header>

      <section className="allPaymentsListWrapper">

        <header className="allPaymentsHeader">
          <div className="allPaymentsHeader__dateTitle">تاریخ</div>
          <div className="allPaymentsHeader__statusTitle">وضعیت</div>
          <div className="allPaymentsHeader__projectTitle">پروژه</div>
          <div className="allPaymentsHeader__costTitle">مبلغ</div>
        </header>

        <ul ref={listRef} className="allPaymentsList">
          {currentItems?.map((history) => (
            <HistoryItem key={history.id} history={history} />
          ))}
        </ul>


      </section>

      {
        itemsPerPage < histories?.length &&

        <section className="allPaymentsSlidePagination">
          <button onClick={handlePrevPage} className="allPaymentsSlidePagination__perviousBtn"><TbChevronRight />قبلی</button>

          <section className="allPaymentsSlidePagination__pagesNumbers">
            {Array.from({ length: totalPages }, (_, index) => (
              <li style={{ backgroundColor: currentPage === index + 1 ? '#00B189' : 'inherit' }} className="allPaymentsSlidePagination__pagesNumbersItem" key={index} onClick={() => handlePageChange(index + 1)}>
                {convert(index + 1)}
              </li>
            ))}
          </section>

          <button onClick={handleNextPage} className="allPaymentsSlidePagination__nextBtn">بعدی<TbChevronLeft /></button>
        </section>
      }

    </section>
  )
}

export default HistoryList;