import { Action } from '@ngrx/store';
import { ICounter } from 'src/app/model/counter';
import * as CounterActions from '../actions/counter.actions';


const defaultValue : ICounter = {
  counter : 0
}

function counterReducer(
  state: ICounter = defaultValue,
  action: CounterActions.MyActionTypes) :ICounter  {
    console.log("[REDUCER]");

    switch (action.type) {
      case CounterActions.INCREMENT:{
        return {
          counter : state.counter + 1
        }
      }
      case CounterActions.DECREMENT:{
        return {
          counter : state.counter - 1
        }
      }
      case CounterActions.ADD_COUNTER :{
        return {
          counter : state.counter + action.value
        }
      }
      default:
        return state;
    }
  }

export default counterReducer;
