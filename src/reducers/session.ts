import { User, SessionAction } from '../model/session';
import storage from '../storage';
import { SET_CURRENT_USER } from '../actions/session';

const initialState: User = { name: '' };

const session = (
  state = storage.get('session') || initialState,
  action: SessionAction,
) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const data = { ...state, name: action.payload };
      storage.set('session', data);
      return data;
    default:
      return { ...state };
  }
}

export { session }
