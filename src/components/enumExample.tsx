import React from "react";

enum Status {
  Active = "ACTIVE", //Active,
  Inactive = "INACTIVE", //Inactive,
  Pending = "PENDING", //Pending
}

function getStatus(status: Status) {
  console.log(status);
}

getStatus(Status.Inactive);
