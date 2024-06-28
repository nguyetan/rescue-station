import { create } from 'apisauce';
import test from 'ava';

const requestSetup = {
  firstStation: 1,
  lastStation: 50,
  numberStation: 10,
};

const api = create({
  baseURL: 'http://localhost:5013',
  withCredentials: true,
});

test('valid request to get P-Center', async (t) => {
  const param = requestSetup;

  const result = await api.post('/findPCenter', { data: param });
  if (result.ok) {
    const data = result.data as any;
    t.deepEqual(Object.keys(data[0]).sort(), ['Id', 'FacilityPoints', 'XX', 'YY'].sort());

    t.pass();
  } else {
    t.fail();
  }
});

test('test valid type PCenter', async (t) => {
  const param = requestSetup;

  const result = await api.post('/findPCenter', { data: param });

  if (result.ok) {
    const data = result.data as any;
    t.deepEqual(Object.keys(data[0]).sort(), ['Id', 'FacilityPoints', 'XX', 'YY'].sort());

    const dataTest = data[0];
    t.is(typeof dataTest.Id, 'number');
    t.is(typeof dataTest.FacilityPoints, 'number');
    t.is(typeof dataTest.XX, 'number');
    t.is(typeof dataTest.YY, 'number');
  } else {
    t.fail();
  }
});

test('test valid number poit result PCenter', async (t) => {
  const param = requestSetup;
  const result = await api.post('/findPCenter', { data: param });
  if (result.ok) {
    const data = result.data as any;
    t.is(data.length, param.numberStation);
  } else {
    t.fail();
  }
});

test('invalid request to get P-Center', async (t) => {
  const param = requestSetup;

  const result = await api.post('/findPCenter', { param });
  if (result.ok) {
    t.fail();
  } else {
    t.pass();
  }
});
