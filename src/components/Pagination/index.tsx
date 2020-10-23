import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { PaginationContainer, ButtonNext, InputContainer } from "./styles";

const Pagination = (props: {
  pageProps: { pages: number; page: number };
  setPage: (param: number) => void;
}) => {
  return (
    <PaginationContainer>
      <ButtonNext
        onClick={() =>
          props.pageProps.page !== 0 && props.setPage(props.pageProps.page - 1)
        }
      >
        <MdChevronLeft />
      </ButtonNext>
      <InputContainer value={props.pageProps.page} type="number" />
      <div
        style={{
          fontFamily: "AmilTypeface",
          fontSize: 14,
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "left",
          color: "#c2cbd2",
          marginRight: 10,
        }}
      >
        de {Math.ceil(props.pageProps.pages)}
      </div>
      <ButtonNext
        onClick={() =>
          props.pageProps.page !== props.pageProps.pages &&
          props.setPage(props.pageProps.page + 1)
        }
      >
        <MdChevronRight />
      </ButtonNext>
    </PaginationContainer>
  );
};

export default Pagination;
