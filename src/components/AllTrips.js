import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllTrips } from "../store/trips";
import { MapPin } from "react-feather";
import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

class AllTrips extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getTrips();
  }

  render() {
    const { trips } = this.props;
    return (
      <div className="rounded-md p-5">
        {trips.map((trip) => {
          return (
            <div
              key={trip.id}
              className="rounded-md my-5 first:mt-0 bg-cyan-800 grid grid-cols-3 h-48 relative"
            >
              <div className="rounded-full w-3 h-3 bg-white absolute -top-1.5 right-1/3"></div>
              <div className="rounded-full w-3 h-3 bg-white absolute -bottom-1.5 right-1/3"></div>
              <div className="col-span-2 border-r-2 border-dotted mr-1 p-4">
                <div className="text-2xl font-medium text-white">
                  {trip.client.name}
                </div>
                <div className="flex flex-row my-2">
                  <div className="flex">
                    <MapPin className="text-white" size={15} />
                    <div className="text-white text-sm ml-1">
                      {trip.client.base.name}
                    </div>
                  </div>
                  <div className="w-10 mx-2 flex flex-col justify-center">
                    <hr className="border-dotted" />
                  </div>
                  <div className="flex">
                    <MapPin className="text-white" size={15} />
                    <div className="text-white text-sm ml-1">
                      {trip.city.name}
                    </div>
                  </div>
                </div>

                <div className="text-sm my-2 bg-white max-w-max text-cyan-800 py-1 px-3 rounded-md">
                  {trip.purpose}
                </div>
                <div className="absolute bottom-0 text-white mb-4">
                  <button className="font-semibold">Delay</button>
                </div>
              </div>
              <div className="col-span-1 p-4">
                <div className="text-white text-sm">
                  {format(new Date(trip.date), "MMM dd, yyyy h:mm aaa")}
                </div>
                <div className="bg-red-300 py-1 px-3 rounded-md my-2 text-sm">
                  {formatDistanceToNow(new Date(trip.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ trips }) => {
  return { trips };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrips: () => {
      dispatch(getAllTrips());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTrips);
