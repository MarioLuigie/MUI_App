/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { 
  Typography, 
  AppBar, 
  Button,
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  CssBaseline, 
  Grid, 
  Toolbar, 
  Container 
} from "@mui/material";
import { Camera } from '@mui/icons-material';

const styles = css`
  .button {
    background-color: #000000;

    &:hover {
      background-color: #1b1b1b;
    }
  }
`

export default function App() {

  return (
    <div css={styles}>
      <header>
        <CssBaseline />
        <AppBar position="relative" style={{backgroundColor: "black"}}>
          <Toolbar>
            <Camera style={{marginRight: "5px", color: "#b9b9b9"}}/>
            <Typography variant="h6">ONE.CINE_FASHION</Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <div>
          <Container maxWidth="sm" style={{marginTop: "100px"}}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Fashion Photo
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone! This is my photo album presenting shots from fashion sessions. Most of the shots were made in Krakow and Leba.
            </Typography>
            <div style={{marginTop: "50px"}}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  {/* <Button variant="contained" color="primary">See my photos</Button> */}
                  {/* <Button variant="contained" style={{backgroundColor: "black"}}>See my photos</Button> */}
                  <Button variant="contained" className="button">See my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" style={{color: "black", borderColor: "black"}}>send message</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}

 
