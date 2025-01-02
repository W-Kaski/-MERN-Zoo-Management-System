import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const ZookeeperProfile = () => {
    const { currentUser, response, error } = useSelector((state) => state.user);

    if (response) { console.log(response) }
    else if (error) { console.log(error) }

    return (
        <>
            <ProfileCard>
                <ProfileCardContent>
                    <ProfileText>Name: {currentUser.name}</ProfileText>
                    <ProfileText>Email: {currentUser.email}</ProfileText>
                    <ProfileText>ID: {currentUser.ID}</ProfileText>
                    <ProfileText>Venue: {currentUser.assignedVenue}</ProfileText>
                </ProfileCardContent>
            </ProfileCard>
        </>
    )
}

export default ZookeeperProfile

const ProfileCard = styled(Card)`
  margin: 20px;
  width: 400px;
  border-radius: 10px;
`;

const ProfileCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileText = styled(Typography)`
  margin: 10px;
`;