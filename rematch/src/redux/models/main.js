import { List, Map } from 'immutable';
import Dexie from 'dexie';

const db = new Dexie('ShapeDatabase');
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
    addShapes: (state, payload) => state.set('shapes', List(payload)),
    load: (state, payload) => state.set('isLoading', payload),
  },
  effects: dispatch => ({
    async saveShapes(payload, rootState) {
      db.transaction('rw', db.shapes, async() => {
        rootState.main.get('shapes').forEach(async shape => await db.shapes.add(shape));
      }).catch(e => {
        alert(e.stack || e);
      });
    },
    async loadShapes(payload, rootState) {
      db.transaction('rw', db.shapes, async() => {
        dispatch.main.addShapes(await db.shapes.toArray());
      }).catch(e => {
        alert(e.stack || e);
      });
    },
  }),
}