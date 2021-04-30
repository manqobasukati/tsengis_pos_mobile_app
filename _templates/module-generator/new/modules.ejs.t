---
inject: true
to: src/store/index.ts
after: MODULES
---
 <%=  h.changeCase.upper(name) %> =  '<%=  name %>',

