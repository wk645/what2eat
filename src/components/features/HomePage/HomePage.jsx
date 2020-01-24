import React from "react";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./HomePage.css";

// import Search from "../Search/Search";
// import Results from "../Results/Results";

// const baseClass = "HomePage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `nav-tab-${index}`,
//     'aria-controls': `nav-tabpanel-${index}`,
//   };
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={event => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     marginTop: 20,
//   }
// }));

export default function HomePage() {
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);
  // const [userInput, setUserInput] = React.useState("");

  // const handleInputValue = (value) => {
  //   setUserInput(value);
  // }

  return (
    <div className='root'>
      {/* <h2>What2Eat</h2> */}
      {/* <br /> */}
    </div>
  );
}
