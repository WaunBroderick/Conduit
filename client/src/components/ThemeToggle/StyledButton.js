import styled from "styled-components";

export default styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
`;
