import React from "react";
import { createStore, combineReducers } from 'redux'


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
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountOfClaim
        }
    }
};


// Departments -Reducers


const claimHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]
    }

    return oldListOfClaims
};

const accounting = (money = 100, action) => {
    if (action.type === 'CREATE_POLICY') {
        return money + action.payload.cash
    } else if (action.type === 'CREATE_CLAIM') {
        return money - action.payload.amountOfClaim
    }

    return money;
};

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload]
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(policy => policy.name !== action.payload.name)
    }

    return listOfPolicies;
}; 


const Comp = () => {
    return <div>Components</div>
}


const ourDepartments = combineReducers({
    policies: policies,
    claimHistory: claimHistory,
    accounting: accounting
});

const store = createStore(ourDepartments)

console.log('store1:', store.getState());


store.dispatch(createPolicy('Kamran', 40))
store.dispatch(createPolicy('Cavidan', 70))
store.dispatch(createPolicy('Kenan', 50))

console.log('store2:', store.getState());

store.dispatch(createClaim('Kamran', 100))
console.log('store3:', store.getState());


store.dispatch(deletePolicy('Kamran'))
console.log('store4:', store.getState());


export default Comp


