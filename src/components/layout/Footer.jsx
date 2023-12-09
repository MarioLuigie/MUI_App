/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from "@mui/material";

const styles = css`
  .footer {
    height: 300px;
    background-color: black;
    padding: 30px 10px;
    color: white; 
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
      </div>
    </footer>
  )
}