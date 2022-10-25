import { Coins } from "../coinsModel";

export class CoinState{
    coins:Coins[]=[];
}

export enum coinsActionType{
    coinsUpdate = "coinsUpdate",
    coinsReset = "coinsReset",
    coinDelete = "coinDelete",
}

//how the action will be :) for less bugs
export interface coinsAction{
    type:coinsActionType;
    payload?:any;
}

//functions for dispatching coins
export function coinsUpdate(coins:Coins[]):coinsAction{
    return {type: coinsActionType.coinsUpdate , payload:coins}
}

export function coinsDelete(coinName:string):coinsAction{
    return {type: coinsActionType.coinDelete, payload: coinName};
}

export function coinReset(){
    return {type: coinsActionType.coinsReset, payload:null};
}

//reducer :)
export function coinReducer(currentState:CoinState = new CoinState, action:coinsAction):CoinState{
    const newState = {...currentState};

    switch(action.type){
        case coinsActionType.coinsUpdate:
            newState.coins = action.payload;
        break;

        case coinsActionType.coinDelete:
            newState.coins = newState.coins.filter(item=>item.name !== action.payload)
        break;

        case coinsActionType.coinsReset:
            newState.coins = [];
        break;
    }

    return newState;
}