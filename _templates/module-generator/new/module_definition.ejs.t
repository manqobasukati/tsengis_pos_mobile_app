---
inject: true
to: src/store/state.ts
after: modules
---
{
    name:'<%= name %>',
    link:'/<%= name %>',
    icon:'info'
},

