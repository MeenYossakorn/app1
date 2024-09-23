import React, { Component } from "react";
import "./products.css";

export default class Products extends Component {
  data = [
    ["React", 500],
    ["React Native", 600],
    ["Node.js", 450],
    ["MongoDB", 300],
    ["Express.js", 650],
  ];

  render() {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ชื่อ</th>
            <th>ราคา</th>
          </tr>
        </thead>
        <tbody>
          {this.data.map((d) => {
            return (
              <tr key={d[0]}>
                <td>{d[0]}</td>
                <td>{d[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
