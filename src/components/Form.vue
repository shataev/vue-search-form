<template>
	<div class="search-form">
		<form class="search-form__content">
			<div class="search-form__main-fields">
				<div class="search-form__controls">
					<template v-if="isMainFormActive">
					<select-control v-for="control in mainFormSelectSettings"
									:key="control.name"
									class="search-form__select"
									:field-name-in-model="control.fieldNameInModel"
									:control-settings="control"></select-control>
					</template>
					<template v-else>
						<input-control :placeholder="searchInputPlaceholder"
									   field-name-in-model="search"></input-control>
					</template>
				</div>

				<submit-button></submit-button>
			</div>
			<div class="search-form__additional-fields" v-show="isAdditionalFieldsVisible">
				<price-range class="price-range-box"></price-range>
				<size-range class="size-range-box"></size-range>
			</div>
		</form>
		<div class="search-form__footer">
			<search-type-toggler></search-type-toggler>
			<additional-params-controls v-show="isMainFormActive"></additional-params-controls>
		</div>
	</div>
</template>

<script>
	//Компоненты футера
	import SearchTypeToggler from "./FormFooter/SearchTypeToggler";
	import AdditionalParamsControls from "./FormFooter/AdditionalParamsControls";

	//Компоненты основной формы поиска
	import SelectControl from './controls/SelectControl';
	import SubmitButton from './controls/SubmitButton';

	//Компонент поиска по названию
	import InputControl from './controls/InputControl';

	//Компоненты дополнительных полей основной формы
	import PriceRange from './AdditionalFields/PriceRange';
	import SizeRange from './AdditionalFields/SizeRange';

	import { mapState, mapGetters } from 'vuex';

	export default {
		name: "SearchForm",
		components: {
			SearchTypeToggler,
			AdditionalParamsControls,
			SelectControl,
			SubmitButton,
			InputControl,
			PriceRange,
			SizeRange
		},
		data () {
			return {
				searchInputPlaceholder: 'Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)'
			};
		},
		computed: {
			...mapGetters([
				'isAdditionalFieldsVisible'
			]),
			...mapState({
				isMainFormActive: state => {
					return state.activeFormType === 'main'
				},
				mainFormSelectSettings: state => state.mainFormSelectSettings
			})
		}
	};
</script>

<style scoped>
	.search-form {
		width: 100%;
		max-width: 940px;
		margin: 0 auto;
	}

	.search-form__content {
		padding: 36px 20px;
		background: linear-gradient( to right, #82b3e5, #a8d5e9);
	}

	.search-form__footer {
		display: flex;
		width: 100%;
		height: 45px;
		padding: 12px 20px;
		justify-content: space-between;
		background: #e6f2fe;
	}

	@media all and (max-width: 600px) {
		.search-form__footer {
			height: auto;
			flex-direction: column;
			align-items: center;
		}
	}


	.search-form__main-fields {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
		align-items: stretch;
		border-radius: 4px;
		overflow: hidden;
	}

	@media all and (max-width: 768px) {
		.search-form__main-fields {
			flex-direction: column;
		}
	}

	.search-form__controls {
		display: flex;
		flex: 1 1 auto;
		flex-wrap: nowrap;
	}

	@media all and (max-width: 600px) {
		.search-form__controls {
			flex-direction: column;
		}
	}

	.search-form__select {
		flex: 1 1 auto;
		width: 33%;
		margin-right: 1px;
	}

	@media all and (max-width: 600px) {
		.search-form__select {
			width: 100%;
			margin: 0 0 1px 0;
		}

		.search-form__select:last-child {
			margin-bottom: 0;
		}
	}

	.search-form__select:last-child {
		margin-right: 0;
	}

	/* Дополнительные поля формы (цена, метраж) */
	.search-form__additional-fields {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 28px 0 0;
	}

	.price-range-box {
		flex: 1 1 60%;
		margin: 0 20px 0 0;
	}

	.size-range-box {
		flex: 1 1 40%;
	}

	@media all and (max-width: 600px) {
		.search-form__additional-fields {
			flex-direction: column;
		}

		.price-range-box {
			width: 100%;
			margin: 0 0 20px  0;
		}

		.size-range-box {
			width: 100%;
		}
	}
</style>