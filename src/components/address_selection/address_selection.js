import React from 'react';

const AddressSelection = ({address, balance}) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Your Ethereum Address</h3>
      </div>
      <div className="panel-body row">
        <div className="col-md-6">
          {address}
        </div>
        <div className="col-md-6">
          Ether Available: {balance}
        </div>
      </div>
    </div>
  )
}

export { AddressSelection };
