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

import photoCards from "./data/photoCards.json";

const styles = css`
  .button {
    background-color: #000000;

    &--small {
      color: black;
      border-color: #afafaf;
    }

    &:hover {
      background-color: #1b1b1b;
    }
  }

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

  .footer {
    height: 300px;
    background-color: black;
    padding: 30px 10px;
    color: white; 
  }
`

export default function App() {

  const { cards } = photoCards;

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
        <div>
          <Container maxWidth="md" className="cardGrid">
            <Grid container spacing={4} justifyContent="left">
              {cards.map((card, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
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
                      <Button variant="outlined" size="small" className="button--small">View</Button>
                      <Button variant="outlined" size="small" className="button--small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
                ))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer className="footer">
                <Typography variant="h6" align="center" gutterBottom>
                  Footer
                </Typography>
                <Typography variant="subtitle2" align="center" sx={{color: "grey"}}>
                  Lorem
                </Typography>
      </footer>
    </div>
  )
}

 
