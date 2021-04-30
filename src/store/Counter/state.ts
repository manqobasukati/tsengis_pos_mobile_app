export interface CounterInterface {
  counterItems: any;
  totalOfCounterItems: any;
  checkoutCounterItems: any;
  addItem: any;
}

const state: CounterInterface = {
  counterItems: [
    {
      name: 'Mr Bread',
      prize: 11.5,
      quantity: 1,
    },
    {
      name: 'Yoghurt',
      prize: 15.5,
      quantity: 3,
    },
  ],
  totalOfCounterItems: null as null | any,
  checkoutCounterItems: null as null | any,
  addItem: null as null | any,
};

export default state;
