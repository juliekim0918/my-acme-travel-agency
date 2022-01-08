import React, { Component } from "react";
import { connect } from "react-redux";
import SelectedClient from "./SelectedClient";
import isPast from "date-fns/isPast";
import SelectedTrip from "./SelectedTrip";
import { getAllTrips } from "../store/trips";
import { changeSelectedTrips } from "../store/selectedTrips";

class SelectedTrips extends Component {
  constructor() {
    super();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.trips.length !== this.props.trips.length) {
      this.props.changeSelectedTrips(this.props.selectedClient.id);
    }
  }

  render() {
    const { selectedTrips } = this.props;
    return (
      <div>
        <SelectedClient />
        <div className="p-5 m-10">
          <div className="text-3xl border-b-2 border-zinc-200 pb-4">
            Upcoming Trips
          </div>
          <div className="rounded-md p-5">
            {selectedTrips
              .filter((trip) => !isPast(new Date(trip.date)))
              .map((trip) => {
                return <SelectedTrip key={trip.id} trip={trip} />;
              })}
          </div>
        </div>

        <div className="p-5 m-10">
          <div className="text-3xl border-b-2 border-zinc-200 pb-4">
            Past Trips
          </div>
          <div className="rounded-md p-5">
            {selectedTrips
              .filter((trip) => isPast(new Date(trip.date)))
              .map((trip) => {
                return <SelectedTrip key={trip.id} trip={trip} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ trips, selectedClient, selectedTrips }) => {
  return { trips, selectedClient, selectedTrips };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrips: () => {
      dispatch(getAllTrips());
    },
    changeSelectedTrips: (id) => {
      dispatch(changeSelectedTrips(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedTrips);
