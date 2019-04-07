import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as FavoriteActions } from '../ducks/favorites';
import { Creators as HeaderActions } from '../ducks/header';

export function* header(action) {
  try {
    const { search } = action.payload;

    const { data } = yield call(api.get, `/repos/${search}`);

    yield put(HeaderActions.searchSuccess(search));

    const isDuplicated = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailure('Repositório Duplicado!'));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };
      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (err) {
    yield put(HeaderActions.searchFailure('Erro ao adicionar Repositório!'));
  }
}
