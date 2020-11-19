<template>
	<button type="button"
			class="button-plug"
			@click="toggleAdditionalParamVisibilty(paramIdentifier)">{{title}}
	</button>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: "ButtonPlug",
		props: {
			title: {
				type: String
			},
			paramIdentifier: {
				type: String,
				required: true
			}
		},
		methods: {
			...mapActions([
				'toggleAdditionalParamVisibilty'
			])
		}
	};
</script>

<style scoped>
	.button-plug {
		width: 100%;
		background: transparent;
		border: 1px solid #506981;
		border-radius: 4px;
		font-size: 18px;
		color: #506981;
		transition: opacity ease-in-out 0.3s;
	}

	.button-plug:hover {
		cursor: pointer;
		opacity: .8;
	}
</style>