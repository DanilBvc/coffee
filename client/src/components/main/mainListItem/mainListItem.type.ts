import { type productItem } from '../../../modules/products/store';

export interface mainListItemType {
  product: productItem;
  addOrder: (item: productItem) => void;
}
