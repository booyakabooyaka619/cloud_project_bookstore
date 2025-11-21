import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum OrderStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}



type EagerBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly author?: string | null;
  readonly featured?: boolean | null;
  readonly price?: number | null;
  readonly orders?: (BookOrder | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly author?: string | null;
  readonly featured?: boolean | null;
  readonly price?: number | null;
  readonly orders: AsyncCollection<BookOrder>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Book = LazyLoading extends LazyLoadingDisabled ? EagerBook : LazyBook

export declare const Book: (new (init: ModelInit<Book>) => Book) & {
  copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

type EagerBookOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BookOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly book?: Book | null;
  readonly order?: Order | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookOrdersId?: string | null;
  readonly orderBookOrdersId?: string | null;
}

type LazyBookOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BookOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly book: AsyncItem<Book | undefined>;
  readonly order: AsyncItem<Order | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookOrdersId?: string | null;
  readonly orderBookOrdersId?: string | null;
}

export declare type BookOrder = LazyLoading extends LazyLoadingDisabled ? EagerBookOrder : LazyBookOrder

export declare const BookOrder: (new (init: ModelInit<BookOrder>) => BookOrder) & {
  copyOf(source: BookOrder, mutator: (draft: MutableModel<BookOrder>) => MutableModel<BookOrder> | void): BookOrder;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: string;
  readonly date?: string | null;
  readonly total?: number | null;
  readonly bookOrders?: (BookOrder | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: string;
  readonly date?: string | null;
  readonly total?: number | null;
  readonly bookOrders: AsyncCollection<BookOrder>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}