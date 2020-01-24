// import React from "react";
// import PropTypes from "prop-types";
// import Grid from "@material-ui/core/Grid";
// import "./CardList.css";

// const CardList = ({ children }) => (
//   <div>
//     <Grid container spacing={10}>
//       <Grid item xs={3}>
//         <ul className="allCards">
//           {React.Children.map(children, child => {
//             if (child.type.name !== "ContentCard") {
//               console.warn(
//                 `'CardList' expects children to be of type 'Card'; provided '${child.type.displayName}`
//               );
//             }
//             return <li>{child}</li>;
//           })}
//         </ul>
//       </Grid>
//     </Grid>
//   </div>
// );

// CardList.propTypes = {
//   children: PropTypes.node
// };

// CardList.defaultProps = {
//   children: undefined
// };

// export default CardList;

import React from "react";
import { Grid, Image } from "semantic-ui-react";

const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleDividedNumber;
