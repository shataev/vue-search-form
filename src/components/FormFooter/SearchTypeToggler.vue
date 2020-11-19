<template>
	<div class="search-type-toggler">
		<span class="search-type-toggler__button"
			  :class="getButtonClassObj(buttons.left.value)"
			  @click="activeFormTypeClickHandler(buttons.left.value)">{{buttons.left.title}}</span>

		<label class="search-type-toggler__toggler">
			<input type="checkbox" class="search-type-toggler__checkbox"
				   v-model="currentActiveFormType"
				   @change="setActiveFormType( currentActiveFormType )"
				   true-value="main"
				   false-value="byName"
			>
			<div class="search-type-toggler__slider"></div>
		</label>

		<span class="search-type-toggler__button"
			  :class="getButtonClassObj(buttons.right.value)"
			  @click="activeFormTypeClickHandler(buttons.right.value)">{{buttons.right.title}}</span>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex';

	export default {
		name: "SearchTypeToggler",
		data: function () {
			return {
				currentActiveFormType: 'main',
				buttons: {
					left: {
						title: 'Основной поиск',
						value: 'main'
					},
					right: {
						title: 'Искать по названию',
						value: 'byName'
					}
				}
			};
		},
		computed: {
			...mapState( {
				activeFormType: state => state.activeFormType === 'main'
			} )
		},
		methods: {
			...mapActions( [
				'setActiveFormType'
			] ),
			activeFormTypeClickHandler ( value ) {
				this.currentActiveFormType = value;
				this.setActiveFormType( value );
			},
			getButtonClassObj ( buttonValue ) {
				return {
					'search-type-toggler__button--is-active': this.currentActiveFormType === buttonValue
				};
			}
		}
	};
</script>

<style scoped>
	.search-type-toggler {
		display: flex;
		align-items: center;
	}

	.search-type-toggler__toggler {
		width: 40px;
		height: 22px;
		display: flex;
		margin: 0 13px;
		background: #5e9969;
		border-radius: 11px;
		cursor: pointer;
	}

	.search-type-toggler__checkbox {
		display: none;
	}

	.search-type-toggler__slider {
		width: 22px;
		height: 22px;
		border: 2px solid #5e9969;
		border-radius: 50%;
		background: #fff;
	}

	.search-type-toggler__button {
		font-size: 16px;
		color: #506981;
		border-bottom: 1px dotted;
		cursor: pointer;
	}

	.search-type-toggler__button--is-active {
		color: #adb9c4;
		border-bottom: none;
		cursor: default;
	}

	.search-type-toggler__slider {
		transition: .3s;
	}

	.search-type-toggler__checkbox + .search-type-toggler__slider {
		transform: translateX(18px);
	}

	.search-type-toggler__checkbox:checked + .search-type-toggler__slider {
		transform: translateX(0);
	}

</style>