<template>
<div>
    <kanban-board :stages="stages" :blocks="blocks">
        <div v-for="block in blocks" :slot="block.id">
            <div v-if="block.id == 'add'">
                <span style="font-size: 7rem;">+</span>
            </div>
            <div v-else>
                <h1>{{block.title}}</h1>
            </div>
        </div>
    </kanban-board>
</div>
 </template>
<script type="text/javascript" src="./KanbanComponent.js"></script>
<style lang="scss">
@import 'vue-kanban/src/assets/kanban.scss';
</style>
