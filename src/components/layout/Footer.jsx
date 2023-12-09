/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from "@mui/material";

const styles = css`

  .footer {
    min-height: 300px;
    background-color: black;
    padding: 30px 10px;
    color: white; 
    position: relative;

  }

  .sign {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #bbbbbb;
    font-size: 10px;
    font-weight: 100;
    letter-spacing: 1px;
    position: absolute;
    bottom: 7px;
    left: 0;

    span {
      color: #6ccff7;
    }
  }
`

export default function Footer() {

  return (
    <footer css={styles}>
      <div className="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle2" align="center" sx={{color: "grey"}}>
          Lorem
        </Typography>
        <Typography className="sign">ARWcode 2023 &copy; <span>&nbsp;Powered by MUI 5.14.20</span></Typography>
      </div>
    </footer>
  )
}