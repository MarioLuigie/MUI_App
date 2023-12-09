/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PanelBar from "../content/PanelBar";
import ShortInfo from "../content/ShortInfo";

const styles = css`
  .button {
    background-color: #000000;

    &:hover {
      background-color: #1b1b1b;
    }
  }
`

export default function Header() {

  return (
    <header css={styles}>
      <PanelBar />
      <ShortInfo />
    </header>
  )
}