import { ModuleDefinition } from '@/types/module.model';

const state: StateInterface = {
  app_name: 'TsengisPOS',
  active_module: null as null | ModuleDefinition,
  modules: [
{
    name:'inventory',
    link:'/inventory',
    icon:'info'
},


{
    name:'Counter',
    link:'/Counter',
    icon:'info'
},


    
  ],
};

export interface StateInterface {
  app_name: string;
  active_module: null | ModuleDefinition;
  modules: ModuleDefinition[];
}

export default state;
