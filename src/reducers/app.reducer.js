import _ from 'lodash';

const INITIAL_STATE = {
  some_state: true
};

export default function(state = INITIAL_STATE, action) {
  let newState = _.cloneDeep(state);

  return state;
}
