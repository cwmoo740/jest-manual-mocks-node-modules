import a, { doStuff, historyStuff } from '../main';
import { globalSideEffect } from 'utils/history';
jest.mock('utils/history');

test('globalSideEffect', () => {
    expect(a).toEqual('123456');
    doStuff();
    expect(globalSideEffect).toHaveBeenCalledWith(a);
});

test('historyStuff', () => {
    expect(historyStuff()).toEqual(jasmine.objectContaining({ push: jasmine.any(Function) }));
});


