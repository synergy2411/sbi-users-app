export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";     // Should reset counter value to 0

export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT = "SUBTRACT";     // Should subtrat 5 from the Counter


// Action Creators

export class onIncrement{
  readonly type = INCREMENT;
}

export class onDecrement{
  readonly type = DECREMENT;
}

export class onAdd{
  readonly type = ADD_COUNTER;
  constructor(public value : number){}
}

export type MyActionTypes = onIncrement | onDecrement | onAdd;
