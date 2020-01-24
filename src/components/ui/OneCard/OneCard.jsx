import React from "react";

// export default class OneCard extends React.Component {
//   render() {
//     console.log("props in one card", this.props.location.state);
//     return (
//       <div>
//         <p>One Card</p>
//       </div>
//     );
//   }
// }

function OneCard({ location }) {
  return (
    <div>
      {console.log("props", location)}
      <p>One Card</p>
    </div>
  );
}

export default OneCard;

// OneCard.propTypes = {
//   location: propTypes.object
// };
