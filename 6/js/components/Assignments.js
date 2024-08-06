import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList,AssignmentCreate },
    template: `
        <div class=" space-y-4">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
        </div>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish Projects', complete: false, id: 1, tag: 'math' },
                { name: 'Read Chapter', complete: false, id: 2, tag: 'science' },
                { name: 'Turn in Homework', complete: false, id: 3, tag: 'english' },
                { name: 'Write Chapter', complete: false, id: 4, tag: 'math' }
            ],
            newAssignmentName: ''
        }
    },
    computed: {
      
        filters(){
            return {
                
            inProgress: this.assignments.filter(assignment => !assignment.complete),
            completed: this.assignments.filter(assignment => assignment.complete)
       
            };
        }
    },
    methods: {
        add( name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
        });
    }
    }
}
