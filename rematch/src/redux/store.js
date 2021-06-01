import { init } from '@rematch/core';
import * as models from './models';

console.log('MODELS', models);
const store = init({ models });

export default store;