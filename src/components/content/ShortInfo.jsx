/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { 
  Typography, 
  Button,
  Grid, 
  Container 
} from "@mui/material";

const styles = css`
  .button {
    background-color: #000000;

    &:hover {
      background-color: #1b1b1b;
    }
  }
`

export default function ShortInfo() {

  return (
    <div css={styles}>
      <Container maxWidth="sm" style={{marginTop: "140px"}}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Fashion Photo
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Hello everyone! This is my photo album presenting shots from fashion sessions. Most of the shots were made in Krakow and Leba.
        </Typography>
        <div style={{marginTop: "50px"}}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="contained" className="button">See my photos</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" style={{color: "black", borderColor: "black"}}>send message</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}