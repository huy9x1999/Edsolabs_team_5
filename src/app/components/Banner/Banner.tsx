import React from 'react';
import { Title, Pawn, Content, ViewBanner, MyButton } from './styled';
import Button from '@mui/material/Button';
interface Props {}

const Banner = (props: Props) => {
  return (
    <div>
      <Pawn>
        <ViewBanner>
          <Title>Become a Pawnshop</Title>
          <Content>
            Open your own pawn shop and discover a new business opportunity with
            an unmatched ROI. Be a part of the world's financial revolution.
          </Content>
          <MyButton className="banner" variant="outlined">
            Learn more
          </MyButton>
        </ViewBanner>
      </Pawn>
    </div>
  );
};

export default Banner;
