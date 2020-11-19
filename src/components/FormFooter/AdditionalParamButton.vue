<template>
	<button type="button" class="additional-param-button"
			@click="toggleAdditionalParamVisibilty(buttonSettings.identifier)"
			:class="{'additional-param-button--is-active': buttonSettings.isActive}"
	>
		<span class="additional-param-button__icon icon" :class="iconClassObj"></span>
		<span class="additional-param-button__title">{{buttonSettings.title}}</span>
	</button>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: "AdditionalParamButton",
		props: {
			/*
			Данные для кнопки. Объект вида:
			{
				title: 'Цена',
				isActive: false,
				identifier: 'price',
				iconClass: 'icon-price'
			}
			*/
			buttonSettings: {
				type: Object,
				required: true
			}
		},
		computed: {
			iconClassObj(){
				return {
					'icon-add': !this.buttonSettings.isActive,
					'icon-remove': !!this.buttonSettings.isActive
				}
			}
		},
		methods: {
			...mapActions( [ 'toggleAdditionalParamVisibilty' ] ),
		}
	};
</script>

<style scoped>
	.additional-param-button {
		display: flex;
		align-items: center;
		margin-right: 23px;
		border: none;
		background: transparent;
		font-size: 16px;
		color: #5c738a;
		cursor: pointer;
	}

	.additional-param-button:last-child {
		margin: 0;
	}

	.additional-param-button--is-active {
		color: #798590;
	}

	.additional-param-button__icon {
		margin: 0 10px 0 0;
	}


</style>