<template>
	<input :type="type" :placeholder="placeholder" class="input-control" v-model="inputValue">
</template>

<script>
	export default {
		name: "InputControl",
		props: {
			placeholder: {
				type: String
			},
			type: {
				type: String,
				required: false,
				default: 'text'
			},
			fieldNameInModel: {
				type: String,
				required: true
			}
		},
		computed: {
			inputValue: {
				get () {
					return this.$store.state.formModel[ this.fieldNameInModel ];
				},
				set ( value ) {
					debugger;
					this.$store.commit( 'updateFormModelField', { fieldName: this.fieldNameInModel, value } );
				}
			}
		}
	};
</script>

<style scoped>
	.input-control {
		width: 100%;
		border: none;
		font-size: 18px;
		padding: 0 20px;
		color: #798590;
	}

	/* Chrome, Safari, Edge, Opera */
	.input-control::-webkit-outer-spin-button,
	.input-control::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	.input-control[type=number] {
		-moz-appearance: textfield;
	}
</style>