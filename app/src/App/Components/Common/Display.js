import React, {Component} from 'react';
import '../../../Styles/style.css';

class Display extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data[0]
    }
  }

  normalizeUrl(context) {
    if (!context) return null
    if (context && context.includes('http')) return context
    return `https://${context}`
  }

  setSquareImage(data) {
    let result = null;
    const imageExists = data.squareImage || data.person.imageExists
    const normalizeUrl = this.normalizeUrl
    if (!imageExists && data.gender === 'F') {
      console.log(data)
      result = '/woman.svg';
    } else if (!imageExists  && data.gender === 'M') {
      console.log(data)
      result = '/man.svg';
    } else {
      result = normalizeUrl(data.squareImage) || normalizeUrl(data.person.squareImage) || normalizeUrl(data.thumbnail);
    }
    return result;
  }

  evalAge(birthDate) {
    return Math.floor((new Date()).getFullYear() - (new Date(birthDate)).getFullYear())
  }

  render() {
    return (
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">NetWorth</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Residence</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((value, index) => {
            return (
              <tr key={index}>
                <th scope="row">
                  <img
                    src={this.setSquareImage(value)}
                    className="rounded float-left"
                    alt="profile"
                    width="100"
                    height="100"
                  />
                </th>
                <td>
                  <span
                    className="shift badge badge-pill badge-info"
                    style={{
                      fontSize: "18px"
                    }}
                  >
                    {index + 1}
                  </span>
                </td>
                <td className="bold">{value.person.name}</td>
                <td className="bold">{`${Math.round(
                  Number(value.estWorthPrev / 1000) * 100
                ) / 100} B`}</td>
                <td className="bold">{(value && value.birthDate) && this.evalAge(value.birthDate)}</td>
                <td className="bold">{value.gender}</td>
                <td className="bold">{value.countryOfCitizenship}</td>
                <td className="bold">{value.source}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export {
  Display
}
