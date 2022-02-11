<template>
    <div class="panel panel-default">
        <div class="panel-heading">Panels</div>
        <div class="panel-body">
            Panel content 
        </div>
    </div>
</template>


<script>

import {instance } from "../plugins/url";

export default {
    name: 'Example',
    data() {
        return {
            msg: 'basic panel example'
        }
    },
    created() {
        this.test();
    },
    methods: {
        test() {
            instance.get('/v1/api/fitsize');
        }
    }
}
</script>