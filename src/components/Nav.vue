<template>

<!-- NAVBAR -->
	<div class="navbar">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="@/assets/favicon_OG_2.png" width="50" height="28">
			</a>

			<!-- BURGER FOR MOBILE -->
			<a role="button" v-bind:class="{'is-active': burgerState}" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
				data-target="navbarBasicExample" v-on:click="toggleBurger">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<!-- NAVBAR ITEMS -->
		<div id="navbarBasicExample" v-bind:class="{'is-active': burgerState}" class="navbar-menu">
			<div class="navbar-start">
				<span class="navbar-item" v-for="(navItem, i) in navItems" :key="i">
					<router-link v-if="navItem.navActive" class="has-text-black" :to="navItem.path">{{navItem.name}}</router-link>
				</span>
			</div>
			
			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a class="button is-primary">
							<strong>Sign up</strong>
						</a>
						<a class="button is-light">
							Log in
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Nav',
		props: {
			navItems: Array
		},
		data () {
			return {}
		},
		computed: {
			burgerState () {
				return this.$store.state.burgerActive
			}
		},
		methods: {
			toggleBurger () {
				this.$store.commit('toggleBurger')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navbar-menu {
		display: block;
		opacity: 0;

		position: absolute;
		/* or \float: left; width: 100%;*/
		left: 0;
		right: 0;

		transform: translateY(-50%);
		transition: all .2s ease-in-out;
		pointer-events: none;
	}

	.navbar-menu.is-active {
		position: relative;
		opacity: 1;
		transform: none;
		pointer-events: auto;
	}

	.burgerMoves.activated {
		position: relative;
	}
</style>

