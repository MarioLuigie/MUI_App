/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { 
  Typography, 
  AppBar, 
  CssBaseline, 
  Toolbar, 
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

export default function PanelBar() {

  return (
    <div css={styles}>
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor: "black"}}>
        <Toolbar>
          <Camera style={{marginRight: "5px", color: "#b9b9b9"}}/>
          <Typography variant="h6">ONE.CINE_FASHION</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}