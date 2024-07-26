export default {
    template: `
        <button 
        :class="{
        'border rounded px-5 py-2 disabled:cursor': true,
        'bg-gray-200 hover:bg-gray-400': type === 'primary',
        'bg-purple-500 hover:bg-purple-700 text-white': type === 'secondary',
        'bg-green-500 hover:bg-green-700 text-white': type === 'success',
        'is-loading': processing
        }" 
        :disabled="processing"
        >
            <slot />
        </button>
    `,

    props: {

        type:{
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }

    }


};
