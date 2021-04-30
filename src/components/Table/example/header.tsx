import styled from "styled-components";

const StyledTh = styled.th`
  background: #eff4f5;
  padding: 8px;
  font-size: 14px;
  color: #A5C437;

  &:first-child {
    border-top-left-radius: 5px;
    // border-bottom-right-radius: 4px;
    padding-left: 16px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    // border-bottom-left-radius: 4px;
    padding-right: 16px;
  }
`;

export default StyledTh;
