<template>
	<button type="submit" class="search-form__button--submit search-form__button" @click.prevent="sendFormData">Найти
	</button>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: "SubmitButton",
		methods: {
			...mapActions( [
				'sendFormData'
			] )
		}
	};
</script>

<style scoped>
	.search-form__button.search-form__button--submit {
		width: 130px;
		height: 44px;
		flex: 0 1 auto;
		border: none;
		background: #5e9969;
		font-size: 20px;
		color: #fff;
		transition: opacity ease-in-out 0.3s;
	}

	@media all and (max-width: 768px) {
		.search-form__button.search-form__button--submit {
			width: 100%;
			margin-top: 1px;
		}
	}

	.search-form__button:hover {
		cursor: pointer;
		opacity: .8;
	}

</style>