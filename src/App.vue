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
		background: #E0EAFC;
		background: linear-gradient(to bottom, #CFDEF3, #E0EAFC);
		width: 100%;
		height: 100vh;
	}

	.search-form-container {
		width: 100%;
		max-width: 940px;
		margin: 0 auto;
		padding: 50px 0 0;
	}

	.additional-fields__field {
		background: #e6f2fe;
	}
</style>
