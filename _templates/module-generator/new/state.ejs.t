---
to: src/store/<%=name%>/state.ts
---


export interface <%= h.inflection.capitalize(name) %>Interface {
<% if(locals.var1){ -%>
   <%=  var1 %>  : any,
<% } -%>
<% if(locals.var2){ -%>
   <%=  var2 %>  : any,
<% } -%>
<% if(locals.var3){ -%>
   <%=  var3 %>  : any,
<% } -%>
<% if(locals.var4){ -%>
   <%=  var4 %>  : any,
<% } -%>
<% if(locals.var5){ -%>
   <%=  var5 %>  : any,
<% } -%>
}

const state:  <%= h.inflection.capitalize(name) %>Interface = {
<% if(locals.var1){ -%>
   <%=  var1 %>  : null as null | any,
<% } -%>
<% if(locals.var2){ -%>
   <%=  var2 %>  : null as null | any,
<% } -%>
<% if(locals.var3){ -%>
   <%=  var3 %>  : null as null | any,
<% } -%>
<% if(locals.var4){ -%>
   <%=  var4 %>  : null as null | any,
<% } -%>
<% if(locals.var5){ -%>
   <%=  var5 %>  : null as null | any,
<% } -%>
};



export default state;