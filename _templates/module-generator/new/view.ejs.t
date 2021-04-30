---
to: src/store/<%=name%>/views/<%= h.inflection.camelize(name) %>.vue
---
<template>
    <div>
         <% if(locals.var1){ -%>
            <div>
                value of <%= var1 %> is {{<%= var1 %>}}
            </div>
        <% } -%>
           <% if(locals.var2){ -%>
            <div>
                value of <%= var2 %> is {{<%= var2 %>}}
            </div>
        <% } -%>
           <% if(locals.var3){ -%>
            <div>
                value of <%= var3 %> is {{<%= var3 %>}}
            </div>
        <% } -%>
      <% if(locals.var4){ -%>
            <div>
                value of <%= var4 %> is {{<%= var4 %>}}
            </div>
        <% } -%>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex'

import { MODULES } from '@/store'

import { <%= h.inflection.camelize(name) %>Interface} from '@/store/<%= name %>/state'

import actions from '@/store/<%= name %>/actions'


export default Vue.extend({
  name: '<%= h.inflection.camelize(name) %>',
  computed:{
      ...mapState(MODULES.<%= h.changeCase.upper(name) %>, {
        <% if(locals.var1){ -%>
         <%= var1 %>(state:<%= h.inflection.camelize(name) %>Interface){
             return state.<%= var1 %>
        },
        <% } -%>
         <% if(locals.var2){ -%>
         <%= var2 %>(state:<%= h.inflection.camelize(name) %>Interface){
             return state.<%= var2 %>
        },
         <% } -%>
           <% if(locals.var3){ -%>
         <%= var3 %>(state:<%= h.inflection.camelize(name) %>Interface){
             return state.<%= var3 %>
        },
         <% } -%>
           <% if(locals.var4){ -%>
         <%= var4 %>(state:<%= h.inflection.camelize(name) %>Interface){
             return state.<%= var4 %>
        }
         <% } -%>
       
      } )
  }
});
</script>



