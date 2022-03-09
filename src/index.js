import React from "react";

// people dropping off a form
const createPolicy = (name, cash) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name,
      cash
    }
  }
};


const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  }
};

const createClaim = (name, amountOfClaim) => {

  return {
    type: 'CREATE-CLAIM',
    payload: {
      name,
      amountOfClaim
    }
  }
};


// Departments -Reducers


const claimHistory = (oldListOfClaims, action) => {
  if (action.type === 'CREATE-CLAIM') {
    return [...oldListOfClaims, action.payload]
  }

  return oldListOfClaims
};

const accounting = (money, action) => {
  if (action.type === 'CREATE_POLICY') {
    return money + action.payload.amountOfClaim
  }
}