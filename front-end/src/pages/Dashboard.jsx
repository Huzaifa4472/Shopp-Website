import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
const Container = styled.div`
  height: 100%;
  width: 100%;
`;
const Dashboard = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Dashboard;
