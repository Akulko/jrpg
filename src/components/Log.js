import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const EntryBox = styled.div``;
const Entry = styled.p``;
const ClearButton = styled.button``;

const Log = ({ entries, clearLog }) => {
  let i = 0;
  return (
    <Wrapper>
      <EntryBox>
        {entries.map(entry => <Entry key={i++}>{entry}</Entry>)}
      </EntryBox>
      <ClearButton onClick={clearLog}>Clear Log</ClearButton>
    </Wrapper>
  );
};

export default Log;
