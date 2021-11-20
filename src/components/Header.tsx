import React, { FC } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header
      style={{
        backgroundImage:
          "url(https://d11tujlfic6kel.cloudfront.net/wallpapers2/081/721/379/072/original/pixel_twinkling_stars.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // backgroundAttachment: "fixed",
        padding: 0,
        marginBottom: "30px",
        height: "20vh",
      }}
    >
      {/* <div
        className="hero-body"
        style={{
          backgroundImage:
            "url(https://static.tildacdn.com/tild6464-3163-4962-a432-333065316134/mar14_gdpr-campaign_.gif)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          padding: 0,
          marginBottom: "30px",
          height: "25vh",
        }}
      ></div> */}
    </header>
  );
};

export default Header;
