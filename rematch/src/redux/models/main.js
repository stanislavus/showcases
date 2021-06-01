import { List, Map } from 'immutable';
import Dexie from 'dexie';

const db = new Dexie('FriendDatabase');
db.version(1).stores({
  shapes: '++id,type,data'
});

const initialState = {
  shapes: List([]),
  isLoading: false,
};

export const main = {
  state: Map(initialState), // initial state
  reducers: {
    reset: () => Map(initialState),
    addShape: (state, payload) => state.set('shapes', state.get('shapes').push(payload)),
    load: (state, payload) => state.set('isLoading', payload),
  },
  effects: dispatch => ({
    async saveShapes(payload, rootState) {
      await db.shapes.add(payload);
    },
    async loadShapes(payload, rootState) {
      return db.shapes.toArray();
    },
  }),
}