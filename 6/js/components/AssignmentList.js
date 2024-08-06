import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment, AssignmentTags
    },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                 <span class="text-gray-600">({{ assignments.length }})</span>
            </h2>

            <assignment-tags 
            :initial-tags="assignments.map(a => a.tag)"
            :current-tag="currentTag"
            @change="currentTag = $event"
             />

            <ul class="border border-gray-600 rounded p-4 divide-y divide-gray-600">

              <assignment

                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"

            /assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    },

    data(){

        return {
            currentTag: 'All'
        }

    },
    
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'All') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
       
    }
};
