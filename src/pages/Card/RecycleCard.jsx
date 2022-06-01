import React, { Component, useState, useEffect } from "react";
import "./Card.css";
import { connect } from "react-redux";
import md5 from "md5";
import SEO from "../../components/SEO";

import { showPathEntries, entriesAreSame } from "../../utils/fileSystem";
import { FOLDER } from "../../utils/constants";
import { addRecycleEntry, setRecycleEntry, deleteRecycleEntry } from "../../actions/recycleBin";
import { setEntry } from "../../actions/fileSystem";


import RecycleIcon from "../../components/Icon/RecycleIcon";
import Add from "../../components/Add";
import FolderIcon from "../../assets/img/folder-icon.png";
import {useTheme} from "../../contexts/themeContext"
import emptyIcon from "../../assets/img/empty.svg"

// import FolderIcon from "../../assets/img/folder.png";
// class Card extends Component {
//   componentDidMount() {
//     console.log(this.props.fileSystem[md5("/SarvvidBox" + FOLDER)]);
//     console.log("Entry...", this.props.entry)
//     if (
//       !Object.keys(this.props.fileSystem).includes(
//         md5(this.props.location.pathname + FOLDER)
//       )
//     ) {
//       this.props.history.push("/");
//     }
//     console.log(this.props.entry);
//   }

//   componentDidUpdate() {
//     console.log(this.props.fileSystem[md5("/SarvvidBox" + FOLDER)]);
//     console.log("Entry...", this.props.entry)
//     if (
//       !Object.keys(this.props.fileSystem).includes(
//         md5(this.props.location.pathname + FOLDER)
//       )
//     ) {
//       this.props.history.push("/");
//     }
//     console.log(this.props.entry);
//   }

//   render() {
//     return (
      
//         this.props.entry[0] ? <div className="midPane_cards">
//         <SEO
//           url={this.props.match.url}
//           title={this.props.match.url}
//           image={FolderIcon}
//           description={this.props.match.url}
//         />

//         {this.props.entry.map((entry, _) => (
//           <Icon
//             entry={entry}
//             index={_}
//             key={`${entry.path}_${entry.type}`}
//             deleteFn={() => {
//               this.props.deleteEntry(md5(entry.path + entry.type));
//             }}
//             setEntry={(val) => this.props.setEntry(val)}
//           />
//         ))}
//       </div> : <div>hiii</div>
      
//     );
//   }
// }

const RecycleCard = (props) => {

  const [entryState, setEntryState] = useState(props.entry)
  const darkTheme = useTheme();

  


  useEffect(() => {
      console.log(props.recycleBin[md5("/SarvvidBox" + FOLDER)]);
      console.log("Entry...", props.entry)
      if (
        !Object.keys(props.recycleBin).includes(
          md5(props.location.pathname + FOLDER)
        )
      ) {
        props.history.push("/");
      }
      console.log(props.entry);

     
  }, [entryState, props.entry])

  console.log("recyclebin Card props...", props)

  // setTimeout(() => {
  //   window.location.reload()
  // }, 2000)

  // props.entry[0]

  const recycleFiles = Object.values(JSON.parse(localStorage.getItem("recycleBin")))
  console.log("recycled files...", recycleFiles)


  return (
      <div>
           { recycleFiles[0] ? 
          <div className={`midPane_cards ${darkTheme ? "dark-theme" : ""}`}  >
            
            <SEO
              url={props.match.url}
              title={props.match.url}
              image={FolderIcon}
              description={props.match.url}
              
            />
            
            
            {recycleFiles.map((entry, _) => (
              <RecycleIcon
                entry={entry}
                index={_}
                key={`${entry.path}_${entry.type}`}
                deleteFn={() => {
                  props.deleteEntry(md5(entry.path + entry.type));
                }}
                setEntry={(val) => props.setEntry(val)}
                setRecycleEntry={(val) => props.setRecycleEntry(val)}
              />
            ))}
          </div> : 
          
          <div className="show_empty_section" >
            <img src={emptyIcon} alt="empty" />
            <p>Feels empty over here, Upload some files 😉</p>
            <div className="upload_card">
              Upload your first file
            </div>

          </div> }
                {/* <div className="footer_msg" style={{marginTop:"2rem", color:"#acacac"}} >
                  <p>Made for Web3. Made with love from bharat</p>
                </div> */}
          </div>
          
        );
}

const mapStateToProps = (state, ownProps) => {
  console.log("ownprops...",ownProps.match.url);
  const path = ownProps.match.url;
  console.log("mapstatetoprops...",state.recycleBin);

  return {
    entry: state.recycleBin[md5(path + FOLDER)]
      ? state.recycleBin[md5(path + FOLDER)].children.map(
          (childrenID) => state.recycleBin[childrenID]
        )
      : [],
    recycleBin: state.recycleBin,
  };
};

export default connect(mapStateToProps, { addRecycleEntry, deleteRecycleEntry, setRecycleEntry, setEntry })(
  RecycleCard
);
