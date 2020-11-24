<template>
	<div class="header">
		<router-link to="/">
			<h1>vuecase</h1>
			<span>iş arama uygulaması</span>
		</router-link>
	</div>
</template>

<style lang="scss">
	@import '@/assets/scss/variables';
	.header {
		background: $darkColor;
		padding: 2px 10px 0;
		display: flex;
		a {
			opacity: .3;
		}
		h1 {
			color: #fff;
			line-height: 15px;
		}
		span {
			background: yellow;
			padding: 0 2px;
			font-size: 11px;
			line-height: 12px;
			display: inline-block;
		}
	}
</style>

<script>
export default {
	name: 'Header'
}
</script>