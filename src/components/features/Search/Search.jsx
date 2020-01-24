import React from 'react';
import './Search.css';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';

// import CityCodes from '../../../common/CityCodes';
// import CuisinesCodes from '../../../common/CuisinesCodes';
// import ZomatoService from '../../../services/ZomatoService';

// const options = [
//   {
//     value: 'Categories',
//     label: 'Categories',
//   },
//   {
//     value: 'City',
//     label: 'City',
//   },
//   {
//     value: 'Cuisine',
//     label: 'Cuisine',
//   },
//   {
//     value: 'Establishment',
//     label: 'Establishment',
//   },
// ];

export default function Search({ cb }) {
  const [userInput, setUserInput] = React.useState('');

  const handleChange = event => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('inside submit', userInput);
    cb(userInput);
    // const result = await ZomatoService.search({ entityId: 280, entityType: 'city', cuisinesId: 67 });
    // console.log('rrr', result);
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="enter a city..."
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}