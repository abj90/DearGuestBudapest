import React from "react";

const TabTable = ({ feature }) => {
  return (
    <tbody>
      <tr>
        <td>{feature.date}</td>
        <td>{feature.day}</td>
        <td>{feature.holidayName}</td>
        {/*<td>{feature.comment}</td>*/}
      </tr>
    </tbody>
  );
};

export default TabTable;
