import React, { Component } from "react";
import { connect } from "react-redux";
import SelectedClient from "./SelectedClient";
import isPast from "date-fns/isPast";
import SelectedTrip from "./SelectedTrip";

class SelectedTrips extends Component {
  constructor() {
    super();
  }

  render() {
    const { selectedClient, selectedTrips } = this.props;
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
                return <SelectedTrip trip={trip} />;
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
                return <SelectedTrip trip={trip} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedClient, selectedTrips }) => {
  return { selectedClient, selectedTrips };
};

export default connect(mapStateToProps)(SelectedTrips);
