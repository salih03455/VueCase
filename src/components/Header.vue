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
		h1 {
			color: #fff;
			line-height: 20px;
		}
		span {
			background: yellow;
			padding: 0 2px;
			font-size: 13px;
		}
	}
</style>
