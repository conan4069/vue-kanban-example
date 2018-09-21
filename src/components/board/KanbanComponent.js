import vueKanban from "vue-kanban";

export default {
    data(){
        return {
            postblock: 'add',
            stages: [],
            blocks: [
                {
                  id: 1,
                  status: 'hola',
                  title: 'Test',
                },
                {
                  id: 2,
                  status: 'closed',
                  title: 'Test',
                },
            ],
        };
    },
    methods:{
        loadStages(){
            this.stages = ['hola','closed','baby'];
            this.stages.push(this.postblock);
            this.blocks.push({id:'add',status:'add'});
        }
    },
    mounted(){
        this.loadStages();
    }
};