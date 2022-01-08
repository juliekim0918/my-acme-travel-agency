import React, { Component } from "react";
import { connect } from "react-redux";
import { MapPin, Trash } from "react-feather";
import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import isPast from "date-fns/isPast";

const SelectedTrip = ({ trip, selectedClient }) => {
  return (
    <div
      key={trip.id}
      className="rounded-md my-5 first:mt-0 bg-cyan-800 grid grid-cols-3 h-48 relative"
    >
      <div className="rounded-full w-3 h-3 bg-white absolute -top-1.5 right-1/3"></div>
      <div className="rounded-full w-3 h-3 bg-white absolute -bottom-1.5 right-1/3"></div>
      <div className="col-span-2 border-r-2 border-dotted mr-1 p-4">
        <div className="flex flex-row my-2">
          <div className="flex">
            <MapPin className="text-white" size={25} />
            <div className="text-white text-2xl ml-1">
              {selectedClient.base.name}
            </div>
          </div>
          <div className="w-10 mx-2 flex flex-col justify-center">
            <hr className="border-dotted border-2" />
          </div>
          <div className="flex">
            <MapPin className="text-white" size={25} />
            <div className="text-white text-2xl ml-1">{trip.city.name}</div>
          </div>
        </div>
        <div className="text-sm my-2 bg-white max-w-max text-cyan-800 py-1 px-3 rounded-md">
          {trip.purpose}
        </div>
      </div>
      <div className="col-span-1 p-4">
        <div className="text-white text-xl">
          {format(new Date(trip.date), "MMM dd, yyyy h:mm aaa")}
        </div>
        {!isPast(new Date(trip.date)) ? (
          <div>
            <button className="text-white border-2 border-white py-1 px-3 rounded-md my-2 text-center">
              Delay by a week
            </button>{" "}
            <div className="absolute bottom-3 right-3 text-white">
              <button>
                <Trash />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectedClient }) => {
  return { selectedClient };
};

export default connect(mapStateToProps)(SelectedTrip);
