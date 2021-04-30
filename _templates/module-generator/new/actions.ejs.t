---
to: src/store/<%=name%>/actions.ts
---

import { ActionTree } from 'vuex';

import { StateInterface } from 'src/store/state'
import { <%=  h.changeCase.upper(name) %>_MUTATIONS } from './mutations';

import { <%= h.inflection.camelize(name) %>Interface} from './state'

export enum <%= h.changeCase.upper(name) %>_ACTIONS {
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

const actions: ActionTree< <%=h.inflection.camelize(name)%>Interface, StateInterface > = {
<% if(locals.var1){ -%>
    [<%= h.changeCase.upper(name) %>_ACTIONS.<%=  h.changeCase.upper(var1) %>](context, payload){
        context.commit(<%= h.changeCase.upper(name)%>_MUTATIONS.<%=h.changeCase.upper(var1)%>, payload)
    },
 <% } -%>
 <% if(locals.var2){ -%>
    [<%= h.changeCase.upper(name) %>_ACTIONS.<%=  h.changeCase.upper(var2) %>](context, payload){
        context.commit(<%= h.changeCase.upper(name)%>_MUTATIONS.<%=h.changeCase.upper(var2)%>, payload)
    },
 <% } -%>
 <% if(locals.var3){ -%>
    [<%= h.changeCase.upper(name) %>_ACTIONS.<%=  h.changeCase.upper(var3) %>](context, payload){
        context.commit(<%= h.changeCase.upper(name)%>_MUTATIONS.<%=h.changeCase.upper(var3)%>, payload)
    },
 <% } -%>
 <% if(locals.var4){ -%>
    [<%= h.changeCase.upper(name) %>_ACTIONS.<%=  h.changeCase.upper(var4) %>](context, payload){
        context.commit(<%= h.changeCase.upper(name)%>_MUTATIONS.<%=h.changeCase.upper(var4)%>, payload)
    },
 <% } -%>
 <% if(locals.var5){ -%>
    [<%= h.changeCase.upper(name) %>_ACTIONS.<%=  h.changeCase.upper(var5) %>](context, payload){
        context.commit(<%= h.changeCase.upper(name)%>_MUTATIONS.<%=h.changeCase.upper(var5)%>, payload)
    },
 <% } -%>

    
}

export default actions;