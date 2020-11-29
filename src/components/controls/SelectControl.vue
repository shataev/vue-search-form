<template>
	<select :name="controlSettings.name" class="select-control"  v-model="selectValue">
		<option :value="option.id" v-for="option in controlSettings.data">{{option
			.title}}</option>
	</select>
</template>

<script>
	export default {
		name: "SelectControl",
		props: {
			controlSettings: {
				type: Object,
				required: true
			},
			fieldNameInModel: {
				type: String,
				required: true
			}
		},
		computed: {
			selectValue: {
				get () {
					return this.$store.state.formModel[ this.fieldNameInModel ] || this.controlSettings.data[0].id;
				},
				set ( value ) {
					this.$store.commit( 'updateFormModelField', { fieldName: this.fieldNameInModel, value } );
				}
			}
		}
	};
</script>

<style scoped>
	.select-control {
		position: relative;
		height: 44px;
		padding: 0 30px 0 20px;
		font-size: 18px;
		color: #333333;
		border: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-image: linear-gradient(45deg, transparent 50%, #63758c 50%), linear-gradient(135deg, #63758c 50%, transparent 50%);
		background-position: calc(100% - 21px) 20px, calc(100% - 15px) 20px;
		background-size: 6px 6px, 6px 6px;
		background-repeat: no-repeat;
		cursor: pointer;
	}

	@media all and (max-width: 768px) {

	}
</style>