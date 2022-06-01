import React, { useState } from "react";
import "./MiddlePaneShared.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import RecycleCard from "./Card/RecycleCard";
import { Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import {
  useTheme,
  useThemeUpdate,
  useMenuToggle,
} from "../contexts/themeContext";

// New

import moonIcon from "../assets/img/moon.svg";
import sunIcon from "../assets/img/sun.svg";
import gridIcon from "../assets/img/grid.svg";
import gridDarkIcon from "../assets/img/griddark.svg";
import emptyIllustration from "../assets/img/mascot_recyclebin.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const RecycleBinViewFiles = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const toggleMenu = useMenuToggle();
  const classes = useStyles();
  const [emptyFiles, setEmptyFiles] = useState(true);

  return (
    <div
      className={`middlePane  ${toggleMenu ? "" : "opened"} ${
        darkTheme ? "dark-theme" : ""
      }`}
    >
      <div className="middlePane_upper">
        <SearchBar />
        <div
          className={`theme-toggle ${darkTheme ? "dark" : ""}`}
          onClick={() => toggleTheme()}
        >
          <div className="theme-btn">
            <img src={moonIcon} alt="dark" />
            <img src={sunIcon} alt="light" />
          </div>
        </div>
      </div>
      <div
        className="middlePane_cards_recycle"
        style={{ background: `${darkTheme ? "#121212" : "#fff"}` }}
      >
        {false ? (
          <div className={`empty_files_recycle ${darkTheme ? "dark" : ""}`}>
            <img src={emptyIllustration} alt="empty" />
            <p>Whohoo! Empty recycle bin. All cleared up</p>
          </div>
        ) : (
          <div className="recycle_files">
            <div className="midPane-header">
              <div className="navigation-container" style={{ width: "100%" }}>
                <div className="navigation-subcontainer">
                  <h2 style={{ marginRight: "auto" }}>Recycle Bin</h2>
                  <div className="layout-toggle">
                    {darkTheme ? (
                      <img src={gridDarkIcon} alt="grid" />
                    ) : (
                      <img src={gridIcon} alt="grid" />
                    )}
                  </div>
                </div>

                <Navigation />
              </div>
            </div>
            <div className="table-header">
              <p>Name</p>
              <p>Size</p>
              <p>Type</p>
            </div>
            <Route path="*" component={RecycleCard} />
          </div>
        )}

        <div
          className="footer_msg"
          style={{ marginTop: "2rem", color: "#acacac" }}
        ></div>
      </div>
      <div
        className="footer_msg"
        style={{ marginTop: "2rem", color: "#acacac" }}
      >
        <p>Made for Web3. Made with ❤️ from Bharat(India)</p>
      </div>
    </div>
  );
};

export default RecycleBinViewFiles;
