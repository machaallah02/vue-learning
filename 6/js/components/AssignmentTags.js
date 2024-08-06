export default {
    template: `
    
            <div class="flex gap-2 mb-2 justify-between">
                <button

                @click="$emit('change', tag)"

                v-for="tag in tags"

                class="border border-gray-600 rounded px-2 text-xs"

                :class="{ 
                
                'border-blue-500  text-blue-500': currentTag === tag }" 

                >{{ tag }}</button>
                
            </div>
    `,

    props: {
        initialTags: {
            type: Array,
            required: true
        },
        currentTag: {
            type: String,
            required: true
        }
    },
    

 
    computed: {
        tags() {
            return ['All', ...new Set(this.initialTags)];
        }
    }
}