<script>
	import '../app.postcss';
	import '../app.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link href="https://fonts.cdnfonts.com/css/open-sans?styles=17414,17407" rel="stylesheet" />
	<title>Alexandre Dorigny</title>
</svelte:head>

<main class="container p-5 md:py-10 xl:px-10 2xl:px-20">
	<header>
		<div class="flex justify-between items-center mb-10 md:mb-20">
			<img
				src="{base}/logo.svg"
				alt="Logo contenant le prénom alexandre"
				class="w-[80px] md:w-[120px]"
				draggable="false"
			/>
			<a href="https://www.malt.fr/profile/alexandredorigny" class="md:hidden">
				<img
					src="{base}/malt.svg"
					alt="Lien malt"
					class="w-[100px] md:w-[140px]"
					draggable="false"
				/>
			</a>
			<div class="hidden md:flex items-center">
				<a class="mr-6 xl:mr-10 text-lg xl:text-xl leading-[1px]" href="#tools"
					>Mes compétences & outils</a
				>
				<a class="mr-6 xl:mr-10 text-lg xl:text-xl leading-[1px]" href="#projects">Mes projets</a>
				<a class="mr-6 xl:mr-10 text-lg xl:text-xl leading-[1px]" href="#contact">Contact</a>
				<a href="https://www.malt.fr/profile/alexandredorigny">
					<img
						src="{base}/malt.svg"
						alt="Lien malt"
						class="inline-block w-[100px]"
						draggable="false"
					/>
				</a>
			</div>
		</div>
	</header>
	<slot />
	<footer
		class="flex flex-col md:flex-row md:justify-between items-center text-sm md:text-base font-bold mt-20 md:mt-40 xl:mt-60 lg:text-lg"
	>
		<nav class="flex">
			<a class="mr-10" href="https://dribbble.com"><p>Dribbble</p></a>
			<a class="mr-10" href="https://malt.fr"><p>Malt</p></a>
			<a href="https://dribbble.com"><p>Mon CV</p></a>
		</nav>
		<img
			src="{base}/alexandre_square.png"
			alt="Alexandre Dorigny"
			class="w-[130px] my-6"
			draggable="false"
		/>
		<div class="md:min-w-[240px] md:text-right">
			<a href="#top">
				<p class="bg-no-repeat bg-right pr-5" style="background-image: url('{base}/arrow.svg')">
					Retour en haut
				</p>
			</a>
		</div>
	</footer>
</main>

<style>
</style>
