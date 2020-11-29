<template>
	<div id="app">
		<div class="search-form-container">
			<search-form></search-form>
		</div>
	</div>
</template>

<script>
	import SearchForm from './components/Form.vue';

	export default {
		name: 'App',
		components: {
			SearchForm
		}
	};
</script>

<style>
	@import "./main.css";

	#app {
		display: flex;
		width: 100%;
		min-width: 320px;
		height: 100%;
		min-height: 100vh;
		background: #E0EAFC;
		background: linear-gradient(to bottom, #CFDEF3, #E0EAFC);
	}

	.search-form-container {
		width: 100%;
		margin: 0 auto;
		padding: 20px;
	}

	.additional-fields__field {
		background: #e6f2fe;
	}
</style>
