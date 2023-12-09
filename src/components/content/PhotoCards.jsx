/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { 
  Grid, 
  Container 
} from "@mui/material";

import PhotoCard from "../content/PhotoCard";
import data from "../../data/photoCards.json";

const styles = css`

  .cardGrid {
    margin-top: 50px;
    padding: 20px 10px;
  }

  .card {

  }

  .cardMedia {
    padding-top: 56.25%;//16:9
  }

  .cardContent {

  }
`

export default function PhotoCards() {
  const { cards } = data;

  return (
    <div css={styles}>
      <Container maxWidth="md" className="cardGrid">
        <Grid container spacing={4} justifyContent="left">
          {cards.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <PhotoCard card={card}/>
            </Grid>))}
        </Grid>
      </Container>
    </div>
  )
}