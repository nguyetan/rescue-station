import { notification } from 'antd';
import { all, put, takeLatest } from 'redux-saga/effects';

import { backendService } from '../../../services';
import formatError from '../../../utils/formatError';
import { User } from '../../user/type';
import { Feedback } from '../type';
import { actions as managerAction } from './reducer';

function* getUsers() {
  try {
    const result: WithApiResult<CustomObject<User>> = yield backendService.post('/user', {
      action: 'get',
    });

    if (result.kind === 'ok') {
      yield put(managerAction.fetchUsers({ users: result.data }));
    } else {
      notification.error({ message: formatError(result) });
    }
  } catch (error) {
    notification.error({ message: formatError(error) });
  }
}

function* getFeedbacks() {
  try {
    const result: WithApiResult<CustomObject<Feedback>> = yield backendService.post('/feedback', {
      action: 'get',
    });

    if (result.kind === 'ok') {
      yield put(managerAction.fetchFeedbacks({ feedbacks: result.data }));
    } else {
      notification.error({ message: formatError(result) });
    }
  } catch (error) {
    notification.error({ message: formatError(error) });
  }
}

export default function* saga() {
  yield all([
    takeLatest(managerAction.getUsers.type, getUsers),
    takeLatest(managerAction.getFeedbacks.type, getFeedbacks),
  ]);
}
