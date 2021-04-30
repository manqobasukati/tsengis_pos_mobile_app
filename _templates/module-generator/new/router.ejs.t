---
inject: true
to: src/router/index.ts
after: routes
---

  {
    path: '/<%= name %>',
    name:'<%= h.inflection.camelize(name) %>',
    component: ()=>{
      return import('@/store/<%= name %>/views/<%= h.inflection.camelize(name) %>.vue')
    }
  },
