import { all, takeLatest } from 'redux-saga/effects';
import { Types as HeaderTypes } from '../ducks/header';
import { header } from './header';

export default function* rootSaga() {
  yield all([takeLatest(HeaderTypes.ADD_REQUEST, header)]);
}
