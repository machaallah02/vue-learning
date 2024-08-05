export default {
    template: `
      <li>
            <label class="flex items-center justify-between">
                {{ assignment.name }}

            <input type="checkbox" v-model="assignment.complete" class="ml-2">
            </label>
      </li>
    `,

    props: {
        assignment: {
            type: Object,
            required: true
        }
    }
}