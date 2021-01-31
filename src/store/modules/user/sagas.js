import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { id, username, email, ...rest } = payload.data;

    const password = 'asdasd';
    const password_confirmation = 'asdasd';
    
    const profile = Object.assign(
      { username, email, password, password_confirmation }, 
      rest.oldPassword ? rest : {}
    )

    const response = yield call(api.put, `users/${id}`, profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data))
  } catch (error) {
    console.tron.log(">>>>> error ao atualizar user: ", error);
    toast.error('Erro ao atualizar perfil!');
    yield put(updateProfileFailure())
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]); 