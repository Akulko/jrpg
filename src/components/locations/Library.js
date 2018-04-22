import React from "react";
import Log from "../Log";
import styled from "styled-components";

const Wrapper = styled.div``;
const LearnButton = styled.button``;
const ReturnButton = styled.button``;

const Library = props => {
  return (
    <Wrapper>
      <LearnButton>Учиться</LearnButton>
      <ReturnButton>Назад</ReturnButton>
      <Log />
    </Wrapper>
  );
};
