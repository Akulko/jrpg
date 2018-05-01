import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
`;

const Value = styled.div`
  width: ${props => props.theme.value / props.theme.max * props.theme.width}px;
  height: 12px;
  background: ${props => props.theme.background};
  color: #fff;
  border: 1px solid ${props => props.theme.border};
  position: absolute;
  top: 9px;
  left: 10px;
  font-size: 11px;
`;

const Indicators = styled.p`
  padding-left: 12px;
  margin: 0;
`;
const ProgressBar = props => {
  return (
    <Wrapper>
      <Value theme={props.theme}>
        <Indicators>
          {props.theme.value}/{props.theme.value}
        </Indicators>
      </Value>
    </Wrapper>
  );
};

export default ProgressBar;
