import { ModuleDefinition } from '@/types/module.model';

const state: StateInterface = {
  app_name: 'TsengisPOS',
  active_module: {
    name: 'Counter',
    link: '/Counter',
    icon: 'info',
  },
  modules: [
    {
      name: 'Inventory',
      link: '/inventory',
      icon: 'keyboard',
    },

    {
      name: 'Counter',
      link: '/Counter',
      icon: 'info',
    },
  ],
};

export interface StateInterface {
  app_name: string;
  active_module: null | ModuleDefinition;
  modules: ModuleDefinition[];
}

export default state;
