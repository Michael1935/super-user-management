import 'whatwg-fetch';
import { message } from 'antd';

const defaultRequestHeaders = new Headers();
defaultRequestHeaders.append('Content-Type', 'application/json; chartset=UTF-8');
const defaultRequestmethods = 'GET';
const defaultRequestmode = 'cors';
const defaultCache = 'default';
const defaultCallback = () => {};
const defaultError = () => {};
const defaultFilter = [];
const isObject = obj => typeof obj === 'object' && obj !== null;
const isEmptyObject = obj => isObject(obj) && object.keys(obj).length <= 0;
const isArray = obj => Array.isArray(obj);
const objectToQueryString = (obj) => {
    if()
}
