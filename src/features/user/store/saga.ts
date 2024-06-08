import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { User as UserAuth } from 'firebase/auth';
import { all, put, takeLatest } from 'redux-saga/effects';

import { backendService } from '../../../services';
import formatError from '../../../utils/formatError';
import { User } from '../type';
import { actions as userAction } from './reducer';

function* signIn(action: PayloadAction<UserAuth>) {
  const user = action.payload;

  try {
    if (!user.uid) {
      throw new Error('User không hợp lệ');
    }

    const data: User = {
      id: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      photoURL: user.photoURL || '',
    };

    const result: WithApiResult<User> = yield backendService.post('/auth', { data });

    if (result.kind === 'ok') {
      const userData = result.data;
      yield put(
        userAction.fetch({
          auth: true,
          user: userData,
        })
      );
    } else {
      notification.error({ message: 'Lỗi truy vấn', description: formatError(result) });
      yield put(
        userAction.fetch({
          auth: false,
        })
      );
    }
  } catch ({ message }: any) {
    notification.error({ message: 'Lỗi truy vấn', description: message });
    yield put(
      userAction.fetch({
        auth: false,
      })
    );
  }
}

export default function* saga() {
  yield all([takeLatest(userAction.signIn.type, signIn)]);
}
