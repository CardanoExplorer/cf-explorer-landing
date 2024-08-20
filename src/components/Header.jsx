// src/components/Header.jsx
import React from "react";
import { Box, Typography, styled } from "@mui/material";
import cardanoLogo from "/assets/logo.svg";
import githubLogo from "/assets/github.svg";

export const HeaderSection = styled("header")`
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: url("/assets/hero-banner.svg");

  &::before {
    content: "";
    height: 344px;
    position: absolute;
    inset: 0;
    background-image: linear-gradient(248deg, #305bbd, #0035ad);
    z-index: -1;
  }
`;

function Header() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "64px",
          overflow: "hidden",
          background: "#FFF",
        }}
      >
        <a href={import.meta.env.VITE_CARDANO_URL}>
            <img src={cardanoLogo} style={{ margin: "1rem 0 0 2.05rem" }} />
        </a>
        <a href={import.meta.env.VITE_GITHUB_URL}>
          <img
            src={githubLogo}
            style={{ float: "right", margin: "1rem 2.05rem 0 0" }}
          />
        </a>
      </Box>
      <HeaderSection>
        <Box
          sx={{
            margin: { xs: "3rem 2.05rem 0 2.05rem;", sm: "5rem 2.05rem 0 4.05rem" },
            color: "#fff",
          }}
        >
          <Typography variant="h1" gutterBottom>
            Explorers
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            List of Cardano Explorers from our Community and Foundation.
          </Typography>
        </Box>
      </HeaderSection>
    </>
  );
}

export default Header;
