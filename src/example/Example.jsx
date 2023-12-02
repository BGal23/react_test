import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Component } from "react";

export const Function1 = (props) => (
  <>
    <h3>Number {props.name}</h3>
    <p>
      Komponent funkcyjny, jezeli nie dajemy return nawias musi być zwykły (...)
    </p>
  </>
);

export const Function2 = ({
  name,
  photo = "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=1200:*",
  children,
}) => {
  return (
    <>
      <h3>Number {name}</h3>
      <p>Komponent funkcyjny, return i nawias klamrowy</p>
      {children}
      <img src={photo} alt="cat" width="300px" />
    </>
  );
};

export class Class1 extends Component {
  createList = (value) => {
    const list = [];
    for (let i = 1; i <= 5; i++) {
      list.push(
        <li key={uuidv4()}>
          Element nr {i} z wartością {value * i}
        </li>
      );
    }

    return list;
  };

  render() {
    const { name, value } = this.props;
    return (
      <>
        <h3>Number {name}</h3>
        <p>Komponent classowy, odnosząc sie do propsa musimy wstawić this</p>
        {this.props.value > 10 && (
          <p>Warunek sprawdza czy liczba jest więkasza niz 10</p>
        )}
        {this.props.value > 20 ? (
          <p>Jest ok</p>
        ) : (
          <p>
            Ten warunek sprawdza czy liczba jest większa niz 20 jeśli nie to
            spełniony jest 2 warunek
          </p>
        )}
        <h3>Pętla wywołująca zbiór elementów (li)</h3>
        <ul>{this.createList(value)}</ul>
      </>
    );
  }
}

Function1.propTypes = {
  name: PropTypes.string,
};

Function2.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  children: PropTypes.object,
};

Class1.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};
