/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { 
  Typography, 
  Button,
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
} from "@mui/material";
import PropTypes from "prop-types";

const styles = css`
  .button {
    color: black;
    border-color: #afafaf;

    &:hover {
      border-color: #1b1b1b;
    }
  }

  .card {

  }

  .cardMedia {
    padding-top: 56.25%;//16:9
  }

  .cardContent {

  }
`

export default function PhotoCard({
  card
}) {

  return (
    <div css={styles}>
      <Card className="card">
        <CardMedia 
          className="cardMedia"
          image={card.image}
          title="Fashion shots"
        />
        <CardContent className="cardContent">
          <Typography variant="h5" gutterBottom>
            {card.heading}
          </Typography>
          <Typography>
            {card.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" className="button">View</Button>
          <Button variant="outlined" size="small" className="button">Edit</Button>
        </CardActions>
      </Card>
    </div>
  )
}

PhotoCard.propTypes = {
  card: PropTypes.object
}