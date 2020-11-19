<template>
	<div class="price-range">
		<template v-if="priceRangeData.isActive">
			<input-control class="price-range__from additional-fields__field price-range__field"
						   placeholder="От" type="number" field-name-in-model="priceFrom"></input-control>
			<input-control class="price-range__to additional-fields__field price-range__field"
						   placeholder="До" type="number"  field-name-in-model="priceTo"></input-control>

			<select-control class="price-range__price-type additional-fields__field price-range__field"
							field-name-in-model="priceType"
							:control-settings="{name:'priceType', data: priceRangeData.priceTypes}"></select-control>
		</template>
		<template v-else>
			<button-plug title="Добавить цену" param-identifier="price"></button-plug>
		</template>
	</div>
</template>

<script>
	import SelectControl from '../controls/SelectControl';
	import InputControl from '../controls/InputControl';
	import ButtonPlug from '../controls/ButtonPlug';

	import { mapState, mapActions } from 'vuex';

	export default {
		name: "PriceRange",
		components: {
			SelectControl,
			InputControl,
			ButtonPlug
		},
		computed: {
			...mapState( {
				priceRangeData: state => state.additionalParams.find( param => param.identifier === 'price' )
			} )
		},
		methods: {
			...mapActions([
				'toggleAdditionalParamVisibilty'
			])
		}
	};
</script>

<style scoped>
	.price-range {
		display: flex;
		justify-content: space-between;
		height: 44px;
		border-radius: 4px;
		overflow: hidden;
	}

	.price-range__field {
		flex: 1 1 33.33%;
		margin-right: 1px;
	}

	.price-range__field:last-child {
		margin-right: 0;
	}
</style>