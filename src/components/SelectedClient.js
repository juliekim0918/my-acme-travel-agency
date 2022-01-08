import React, { Component } from "react";
import { Mail, Globe } from "react-feather";
import { connect } from "react-redux";

const SelectedClient = (props) => {
  const { selectedClient } = props;
  return (
    <div className="rounded-md p-5 m-10 flex flex-row gap-4">
      <div>
        <img src={selectedClient.avatarUrl} className="w-32" alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-3xl">{selectedClient.name}</div>
        <div className="text-md flex items-center gap-2">
          <Mail size={15} />
          {selectedClient.email}
        </div>
        <div className="text-md flex items-center gap-2">
          <Globe size={15} />
          {selectedClient.base ? selectedClient.base.name : ""}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectedClient }) => {
  return { selectedClient };
};
export default connect(mapStateToProps)(SelectedClient);
