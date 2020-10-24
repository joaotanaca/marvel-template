import styled from "styled-components";

export const ContainerCards = styled.div`
  width: calc(100% - 120px);
  margin: 30px auto 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(69, 91, 99, 0.08);
  padding: 30px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export const InputFilter = styled.input`
  flex-basis: 20%;
  border-radius: 3px;
  background-color: #ffffff;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  padding: 15px 0;
  font-size: 14px;
  text-align: left;
  color: #4a4a4a;
  margin-right: 40px;
`;

export const FilterContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0 30px;
`;

export const Title = styled.h3`
  flex-basis: 100%;
  font-size: 36px;
  font-weight: 300;
  color: #ed1d24;
  text-align: left;
`;
