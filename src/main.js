import { globalSideEffect } from 'utils/history'; // this should be mocked
import { createBrowserHistory } from 'history'; // this should NOT be mocked but is

const a = '123' + 456;
export function doStuff() {
    globalSideEffect(a);
}
export function historyStuff() {
    return createBrowserHistory();
}
export default a;
