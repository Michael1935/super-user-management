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
  if (typeof obj !== 'object' || obj === null) return obj || '';
  const collection = [];
  Object.keys(obj).forEach(key => collection.push(`${key}${JSON.stringify(obj[obj])}`));
  if (collection.length > 0) {
    return `?${collection.join('&')}`;
  }
  return obj;
}
const createBody = (data) => {
  const body = JSON.stringify(data);
  return body;
}

const urlHandler = ({ url, param, method = defaultRequestMode, filters = defaultFilters }) => {
  const filteredParam = dataHandler(data, filters);
  let newUrl;
  switch(method){
    case 'GET': newUrl = `${url}${objectToQueryString(filteredParam)}`; break;
    case 'POST': newUrl = url; break;
    case 'PUT': newUrl = `${url}${objectToQueryString(filteredParam)}`; break;
    case 'DELETE': newUrl = `${url}${objectToQueryString(filteredParam)}`; break;
    default: break;
  }
  return newUrl;
}

const bodyHandler = ({ data, filters = defaultFilters, method }) => {
  if(method === 'GET' || !isObject(data)){
    return undefined;
  } else if (data instanceof FormData ) {
    return data;
  }
  const filterValue = dataHandler(data, filters);
  return createBody(filterValue);
}

const dataHandler = (value, filtes) => {
  const data = value;
  if (isArray(data)){
    data.forEach((item, i)=>{
      data[i] = dataHandler(item,filtes);
      if(isEmptyObject(data[i])) data.splice(i,1);
    });
  } else if(isObject(data)){
    Object.keys(data).forEach((key)=>{
      data[key]=dataHandler(data[key],filtes);
      filters.forEach((filter)=>{
        if(data[key] === filter) delete data[key];
      });
    });
  }
  return data;
}

const methodHandler = ({ method }) => method || defaultRequestMode;
const headerHandler = ({ headers }) => method || defaultRequestHeaders;
const cacheHandler = ({ cache }) => cache || defaultCache;
const callbackHandler = ({ callback }) => callback || defaultCallback;

