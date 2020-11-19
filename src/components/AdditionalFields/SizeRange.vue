<template>
	<div class="price-range">
		<template v-if="sizeRangeData.isActive">
			<input-control class="size-range__from additional-fields__field size-range__field"
						   placeholder="От" type="number"  field-name-in-model="sizeFrom"></input-control>
			<input-control class="size-range__to additional-fields__field size-range__field"
						   placeholder="До" type="number"  field-name-in-model="sizeTo"></input-control>
			<span class="size-range__measure">м<sup>2</sup></span>
		</template>
		<template v-else>
			<button-plug title="Добавить метраж" param-identifier="size"></button-plug>
		</template>
	</div>
</template>

<script>
	import InputControl from '../controls/InputControl';
	import ButtonPlug from '../controls/ButtonPlug';

	import { mapState, mapActions } from 'vuex';

	export default {
		name: "SizeRange",
		components: {
			InputControl,
			ButtonPlug
		},
		computed: {
			...mapState( {
				sizeRangeData: state => state.additionalParams.find( param => param.identifier === 'size' )
			} )
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

	.size-range__field {
		flex: 1 1 auto;
		margin-right: 1px;
	}

	.size-range__to {
		margin-right: 0;
	}

	.size-range__measure {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 0 0 54px;
		background: #C2E2F0;
		font-size: 18px;
		color: #333333;
	}
</style>