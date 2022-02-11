<template>


    <div class="container">
        <ul class="list-group">
            <li class="list-group-item" v-for="size in lista" v-bind:key="size.brnSz">
            {{size.sourceAsMap.nncSz}}
            <div class="btn-group pull-right" style="font-size: 12px; line-height: 1;">
                <button type="button" class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                더보기<span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                <li><a href="#">삭제</a></li>
                </ul>
            </div>
            </li>
        </ul>

        <div class="panel panel-default">
            <div class="panel-heading">Panels</div>
            <div class="panel-body">
                Panel content 
            </div>
        </div>
    </div>
</template>


<script>

import {instance } from "../plugins/url";

export default {
    name: 'Example',
    data() {
        return {
            msg: 'basic panel example',
            lista: [],
        }
    },
    created() {
        this.test();
    },
    methods: {
        test() {
            instance.get('/v1/api/fitsize')
            .then(response => {
                this.lista = response.data;
                console.log(this.lista);
            });
        }
    }
}
</script>