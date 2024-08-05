export default {
    template: `
      <form @submit.prevent="add">
            <div class=" border border-gray-600 rounded p-2">
                <input id="new-assignment" v-model="newAssignment" placeholder="New Assignment.." class="text-black rounded p-2" />
                <button type="submit" @click="addAssignment" class="bg-white text-black rounded-l p-2">Add</button>
            </div>
      </form>
    `,
  
    data () {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            
            this.newAssignment = ''
        }
    
    }
}