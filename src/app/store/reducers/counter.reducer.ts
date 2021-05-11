import { Action } from '@ngrx/store';
import { ICounter } from 'src/app/model/counter';

const defaultValue : ICounter = {
  counter : 0
}

function counterReducer(
  state: ICounter = defaultValue,
  action: Action) :ICounter  {
    return state;
  }

export default counterReducer;
