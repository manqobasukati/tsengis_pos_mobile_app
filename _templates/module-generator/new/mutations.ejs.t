---
to: src/store/<%=name%>/mutations.ts
---

import { MutationTree } from 'vuex';

import { <%= h.inflection.camelize(name) %>Interface} from './state'

export enum <%= h.changeCase.upper(name) %>_MUTATIONS {
  <% if(locals.var1){ -%>
   <%=  h.changeCase.upper(var1) %>  = "<%= var1 %>",
<% } -%>
  <% if(locals.var2){ -%>
   <%=  h.changeCase.upper(var2) %>  = "<%= var2 %>",
<% } -%>
  <% if(locals.var3){ -%>
   <%=  h.changeCase.upper(var3) %>  = "<%= var3 %>",
<% } -%>
  <% if(locals.var4){ -%>
   <%=  h.changeCase.upper(var4) %>  = "<%= var4 %>",
<% } -%>
  <% if(locals.var5){ -%>
   <%=  h.changeCase.upper(var5) %>  = "<%= var5 %>",
<% } -%>

}

const mutations: MutationTree< <%=h.inflection.camelize(name)%>Interface > = {
<% if(locals.var1){ -%>
  [<%= h.changeCase.upper(name) %>_MUTATIONS.<%=  h.changeCase.upper(var1) %>](state:<%=h.inflection.camelize(name)%>Interface, payload){
      state.<%= var1 %> = payload;
  },
<% } -%>
<% if(locals.var2){ -%>
  [<%= h.changeCase.upper(name) %>_MUTATIONS.<%=  h.changeCase.upper(var2) %>](state:<%=h.inflection.camelize(name)%>Interface, payload){
      state.<%= var2 %> = payload;
  },
<% } -%>
<% if(locals.var3){ -%>
  [<%= h.changeCase.upper(name) %>_MUTATIONS.<%=  h.changeCase.upper(var3) %>](state:<%=h.inflection.camelize(name)%>Interface, payload){
      state.<%= var3 %> = payload;
  },
<% } -%>
<% if(locals.var4){ -%>
  [<%= h.changeCase.upper(name) %>_MUTATIONS.<%=  h.changeCase.upper(var4) %>](state:<%=h.inflection.camelize(name)%>Interface, payload){
      state.<%= var4 %> = payload;
  },
<% } -%>
<% if(locals.var5){ -%>
  [<%= h.changeCase.upper(name) %>_MUTATIONS.<%=  h.changeCase.upper(var5) %>](state:<%=h.inflection.camelize(name)%>Interface, payload){
      state.<%= var5 %> = payload;
  },
<% } -%>

}

export default mutations;