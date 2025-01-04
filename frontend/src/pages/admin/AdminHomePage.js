import { Container, Box, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllZookeepers } from "../../redux/zookeeperRelated/zookeeperHandle";
import { getAllVenues } from "../../redux/venueRelated/venueHandle";
import { getAllAnimals } from "../../redux/animalRelated/animalHandle";
import { getAllFinances } from "../../redux/financeRelated/financeHandle";

import Zookeepers from "../../assets/images/Zookeeper.png";
import Venues from "../../assets/images/Venue.png";
import Animals from "../../assets/images/Animal.png";
import Finance from "../../assets/images/Finance.png";
import { useEffect } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const { zookeeperList } = useSelector((state) => state.zookeeper);
  const { venueList } = useSelector((state) => state.venue);
  const { animalList } = useSelector((state) => state.animal);
  const { financeList } = useSelector((state) => state.finance);

  const { currentUser } = useSelector((state) => state.user);

  const adminID = currentUser._id;

  useEffect(() => {
    dispatch(getAllZookeepers(adminID));
    dispatch(getAllVenues(adminID));
    dispatch(getAllAnimals(adminID));
    dispatch(getAllFinances(adminID));
  }, [adminID, dispatch]);

  const numberOfZookeepers = zookeeperList && zookeeperList.length;
  const numberOfVenues = venueList && venueList.length;
  const numberOfAnimals = animalList && animalList.length;
  const numberOfFinances = financeList && financeList.length;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Box flex={1} minWidth={260}>
          <StyledPaper>
            <img src={Zookeepers} alt="Zookeepers" />
            <Title>Total Zookeepers</Title>
            <Data start={0} end={numberOfZookeepers} duration={2.5} />
          </StyledPaper>
        </Box>
        <Box flex={1} minWidth={260}>
          <StyledPaper>
            <img src={Venues} alt="Venues" />
            <Title>Total Venues</Title>
            <Data start={0} end={numberOfVenues} duration={5} />
          </StyledPaper>
        </Box>
        <Box flex={1} minWidth={260}>
          <StyledPaper>
            <img src={Animals} alt="Animals" />
            <Title>Total Animals</Title>
            <Data start={0} end={numberOfAnimals} duration={2.5} />
          </StyledPaper>
        </Box>
        <Box flex={1} minWidth={260}>
          <StyledPaper>
            <img src={Finance} alt="Finance" />
            <Title>Finance</Title>
            <Data start={0} end={numberOfFinances} duration={2.5} prefix="$" />
          </StyledPaper>
        </Box>
      </Box>
    </Container>
  );
};

const StyledPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + 0.6vw);
  color: green;
`;
export default AdminHomePage;
