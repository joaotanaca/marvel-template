import styled from "styled-components";

export const CardContainer = styled.div`
  flex-basis: calc(20% - 40px);
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  border: solid 1px #d8dde6;
  border-bottom-color: #ed1d24;
  border-bottom-width: 2px;
  background-color: #ffffff;
`;

export const TitleCard = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.44;
  text-align: center;
  color: #4a4a4a;
`;

export const ImageCard = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-size: cover;
`;

export const DescriptionCard = styled.p`
  font-size: 14px;
  line-height: 1.64;
  letter-spacing: normal;
  text-align: center;
  color: #4a4a4a;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
