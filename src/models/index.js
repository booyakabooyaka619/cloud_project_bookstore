// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "SUCCESS": "SUCCESS",
  "FAILED": "FAILED"
};

const { Book, BookOrder, Order } = initSchema(schema);

export {
  Book,
  BookOrder,
  Order,
  OrderStatus
};