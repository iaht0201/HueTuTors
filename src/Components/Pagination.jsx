import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [numberPage, setNumberPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <nav>
      <ul className="pagination flex gap-5 justify-center">
        <li>
          {" "}
          <Button
            disabled={numberPage == 1}
            onClick={() => {
              paginate(numberPage - 1);
              setNumberPage(numberPage - 1);
            }}
            className={`page-link cursor-pointer text-black p-3  ${
              numberPage == 1 && "bg-gray-100"
            }`}
          >
            Prev
          </Button>
        </li>
        {pageNumbers.map((number, index) => (
          <li key={index} className="page-item">
            <Button
              onClick={() => {
                paginate(number);
                setNumberPage(number);
                handleClick();
              }}
              className={`page-link cursor-pointer text-black p-3 ${
                currentPage == number ? "text-red" : ""
              } `}
            >
              {number}
            </Button>
          </li>
        ))}
        <li>
          {" "}
          <Button
            disabled={numberPage == pageNumbers.length}
            onClick={() => {
              paginate(numberPage + 1);
              setNumberPage(numberPage + 1);
            }}
            className={`page-link cursor-pointer text-black p-3  ${
              numberPage == pageNumbers.length && "bg-gray-100"
            }`}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
