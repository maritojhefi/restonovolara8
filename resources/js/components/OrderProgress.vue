<template>
<div>
    <li class="text-muted"><strong>Estado:</strong><span class="m-l-15">{{statusNew}}</span></li>
   
    <div class="progress">
       <progressbar now="100" label type="primary" v-if="statusNew =='finalizado'" striped animated></progressbar>
    </div>
</div>
        
</template>

<script>

import {progressbar} from 'vue-strap'

export default {
    components:{
        progressbar
    },
    props:[
        'status','cuenta_id'
    ],
    data(){
        return{
            statusNew:this.status,

        }
    },
    mounted(){
       window.Echo.channel('status-track.'+this.cuenta_id)
        .listen('OrderStatusChangedEvent',(cuenta)=>
        {
            this.statusNew=cuenta.estado
        });
    }
}
</script>