import thunk from 'redux-thunk';
import logger from '../logger/logger';
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
  logger
);