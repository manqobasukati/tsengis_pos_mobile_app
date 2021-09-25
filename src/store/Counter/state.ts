import { CounterItem } from '@/types/CounterItem.model';

export interface CounterInterface {
  counterItems: CounterItem[];
  totalOfCounterItems: number;
  checkoutCounterItems: any;
  addItem: any;
}

const state: CounterInterface = {
  counterItems: [
    {
      name: 'Mr Bread',
      prize: 11.5,
      quantity: 1,
      _id: '0A',
    },
    {
      name: 'Yoghurt',
      prize: 15.5,
      quantity: 3,
      _id: '0B',
    },
  ] as CounterItem[],
  totalOfCounterItems: 27.0,
  checkoutCounterItems: null as null | any,
  addItem: null as null | any,
};

export default state;
