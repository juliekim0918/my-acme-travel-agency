import React, { Component } from "react";
import { connect } from "react-redux";
import { getClients } from "../store/clients";
import { changeSelectedClient } from "../store/selectedClient";

class Navbar extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getClients();
    this.props.changeSelectedClient(1);
  }

  render() {
    const { clients, changeSelectedClient } = this.props;
    return (
      <header className="sticky top-0 z-20 backdrop-filter backdrop-blur">
        <div className="max-w-screen-2xl mx-auto xl:px-8">
          <div className="flex items-center justify-between px-4 py-5 border-b lg:px-8 sm:px-6 xl:px-0 border-gray-200">
            <img src="/logo.png" className=" h-16" alt="" />
            <select
              name=""
              id=""
              onChange={(evt) => changeSelectedClient(evt.target.value * 1)}
            >
              {clients.map((client) => {
                return (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ clients }) => {
  return { clients };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClients: () => {
      dispatch(getClients());
    },
    changeSelectedClient: (id) => {
      dispatch(changeSelectedClient(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
