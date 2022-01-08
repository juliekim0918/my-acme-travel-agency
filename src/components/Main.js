import React, { Component } from "react";
import { Listbox } from "@headlessui/react";
import Navbar from "./Navbar";
import AllTrips from "./AllTrips";
import SelectedTrips from "./SelectedTrips";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="grid grid-cols-3 gap-10 max-w-screen-2xl mx-auto my-5 xl:px-8 ">
          <div className="col-span-2 ">
            <div className="p-5 text-5xl font-semibold">
              Acme Travel Agency's Dashboard
            </div>
            <div className="shadow-lg rounded-md border-zinc-200 border-2 mt-5">
              <SelectedTrips />
            </div>
          </div>
          <div className="">
            <div className="p-5 text-3xl font-semibold">All upcoming trips</div>
            <div className="shadow-lg rounded-md border-zinc-200 border-2 overflow-scroll h-screen mt-5">
              <AllTrips />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
