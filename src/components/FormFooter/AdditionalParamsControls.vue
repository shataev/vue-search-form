<template>
	<div class="additional-params-controls">
		<additional-param-button v-for="param in additionalParams"
								 :key="param.identifier"
								 :buttonSettings="param"
		></additional-param-button>

	</div>
</template>

<script>
	import AdditionalParamButton from './AdditionalParamButton';

	import { mapState } from 'vuex';

	export default {
		name: "AdditionalParamsControls",
		components: {
			AdditionalParamButton
		},
		computed: {
			...mapState({
				'additionalParams': state => state.additionalParams
			})
		}
	};
</script>

<style scoped>
	.additional-params-controls {
		display: flex;
	}
</style>