<script lang="ts">
	import Separator from '../libs/Separator.svelte';
	import VanillaTilt from 'vanilla-tilt';
	import { base } from '$app/paths';

	const skills = [
		'UX design',
		'UI design',
		"Animation d'atelier",
		"Management d'équipe",
		'HTML',
		'CSS',
		'Communication digitale',
		'CMS',
		'Cadrage',
		'Suivi de projet',
		'Prototypage',
		'Agilité'
	];

	const icons = [
		['/stacks/html_5.svg', 'HTML 5'],
		['/stacks/css_3.svg', 'CSS 3'],
		['/stacks/wordpress.svg', 'Wordpress'],
		['/stacks/drupal.svg', 'Drupal'],
		['/stacks/invision.svg', 'Invision'],
		['/stacks/sketch.svg', 'Sketch'],
		['/stacks/zeplin.svg', 'Zeplin'],
		['/stacks/figma.svg', 'Figma'],
		['/stacks/marvel.svg', 'Marvel'],
		['/stacks/procreate.svg', 'Procreate'],
		['/stacks/adobe_illustrator.svg', 'Adobe Illustrator'],
		['/stacks/adobe_photoshop.svg', 'Adobe Photoshop'],
		['/stacks/adobe_indesign.svg', 'Adobe Indesign'],
		['/stacks/adobe_xd.svg', 'Adobe XD']
	];
</script>

<section class="xl:flex xl:flex-row-reverse">
	<div class="w-[70%] md:w-fit m-auto relative md:translate-x-[120px] xl:translate-x-0 xl:mr-0">
		<img
			src="{base}/alexandre.jpg"
			alt="Alexandre Dorigny"
			draggable="false"
			class="m-auto rounded-full"
		/>
		<blockquote
			data-tilt
			class="hidden md:block py-3 px-5 border border-gray-500 rounded-2xl w-[280px] absolute top-0 right-[254px]"
		>
			<h3 class="text-sm font-bold">“Très heureux du travail effectué. Rapide et efficace.”</h3>
			<p class="text-sm">- Taro / Storm INC.</p>
		</blockquote>
		<blockquote
			data-tilt
			class="hidden md:block py-3 px-5 border border-gray-500 rounded-2xl w-[280px] absolute top-[121px] right-[316px]"
		>
			<h3 class="text-sm font-bold">
				“Alexandre a su répondre à mes attentes en me proposant des visuels adaptés à nos envies !
				Force de proposition et très bon travail !”
			</h3>
			<p class="text-sm">- Steeve / Rec’im</p>
		</blockquote>
		<blockquote
			data-tilt
			class="hidden md:block py-3 px-5 border border-gray-500 rounded-2xl w-[280px] absolute top-[294px] right-[194px]"
		>
			<h3 class="text-sm font-bold">
				“Alexandre a su comprendre parfaitement mon univers et a été à l’écoute de mes attentes ! ”
			</h3>
			<p class="text-sm">- Céline / NVRZ</p>
		</blockquote>
	</div>
	<div
		class="mt-10 md:mt-40 text-center lg:max-w-[650px] lg:mx-auto xl:text-left xl:mx-0 xl:max-w-[531px]"
	>
		<h1 class="text-2xl font-bold md:text-4xl lg:text-5xl">Alexandre Dorigny</h1>
		<h2 class="text-2xl md:text-4xl lg:text-5xl">UX/UI Designer Freelance</h2>
		<Separator class="my-6 lg:my-9 mx-auto w-40 md:w-48 lg:w-56 xl:ml-0" />
		<p class="text-sm md:text-base lg:text-lg text-justify">
			Passionné par l’UX/UI design et le graphisme, j'apporte mes connaissances au service de votre
			entreprise pour vous aider à construire votre identité graphique, vous accompagner dans vos
			projet ou encire répondre à vos divers problématiques.
		</p>
		<p class="text-sm md:text-base lg:text-lg text-justify mt-4">
			La réalisation de logos, chartes graphiques et maquettes web sont des domaines qui me plaisent
			énormément. Je peux également travailler sur de la création d'affiches, flyers ou tout autre
			support pour rendre vos communications plus percutantes.
		</p>
		<div class="flex mt-10 justify-around xl:block">
			<a href="{base}/" class="inline-block xl:mr-12">
				<p
					class="text-sm md:text-base lg:text-lg py-3 px-4 md:py-5 md:px-6 bg-electric text-dark rounded-2xl font-bold"
				>
					Télécharger mon CV
				</p>
			</a>
			<a href="{base}/" class="inline-block">
				<p
					class="text-sm md:text-base lg:text-lg py-3 px-4 md:py-5 md:px-6 bg-electric text-dark rounded-2xl font-bold"
				>
					Mon portfolio
				</p>
			</a>
		</div>
	</div>
</section>
<section id="tools" class="mt-10 pt-10 md:mt-20 md:pt-20 lg:mt-32 lg:pt-32 text-center">
	<h1 class="text-2xl font-bold md:text-4xl lg:text-5xl">Mes Compétences & outils</h1>
	<Separator class="mt-2 mb-4 mx-auto w-16 md:mt-3 md:mb-12 md:w-24 lg:mt-4 lg:mb-24 lg:w-32" />
	<ul
		class="flex flex-wrap justify-center text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold"
	>
		{#each skills as skill, i}
			<li class="m-2 lg:m-3 {i % 2 ? '' : 'text-electric'}">{skill}</li>
		{/each}
	</ul>
	<div class="bg-no-repeat bg-center bg-contain" style="background-image: url({base}/wave2.svg)">
		<ul
			class="flex flex-wrap justify-center py-10 md:py-14 md:mt-10 lg:mt-20 lg:max-w-[700px] lg:mx-auto"
		>
			{#each icons as [src, alt]}
				<li class="m-2 w-7 sm:m-4 sm:w-9 md:m-5 md:w-11 lg:w-14">
					<img src={base + src} {alt} />
				</li>
			{/each}
		</ul>
	</div>
</section>
<section id="projects" class="mt-10 pt-10 md:mt-20 md:pt-20 lg:mt-32 lg:pt-32 text-center">
	<h1 class="text-2xl font-bold md:text-4xl lg:text-5xl">Mes projets</h1>
	<Separator class="mt-2 mb-4 mx-auto w-16 md:mt-3 md:mb-12 md:w-24 lg:mt-4 lg:mb-24 lg:w-32" />
	<div class="flex flex-col md:grid md:grid-cols-2 md:gap-5 xl:grid-cols-3">
		<img id="geebl" src="{base}/projects/geebl.png" alt="Geebl" class="py-2 md:py-0 md:w-full" />
		<img id="r" src="{base}/projects/r.png" alt="R" class="py-2 md:py-0 md:w-full" />
		<img
			id="duotime"
			src="{base}/projects/duotime.png"
			alt="Duotime"
			class="py-2 md:py-0 md:w-full"
		/>
		<img id="wyloo" src="{base}/projects/wyloo.png" alt="Wyloo" class="py-2 md:py-0 md:w-full" />
		<img id="geebl" src="{base}/projects/stiud.png" alt="Geebl" class="py-2 md:py-0 md:w-full" />
		<img id="dropee" src="{base}/projects/dropee.png" alt="Dropee" class="py-2 md:py-0 md:w-full" />
		<img
			id="davidovich"
			src="{base}/projects/davidovich.png"
			alt="Davidovich"
			class="py-2 md:py-0 md:w-full"
		/>
		<img
			id="alunison"
			src="{base}/projects/alunison.png"
			alt="Alunison"
			class="py-2 md:py-0 md:w-full"
		/>
	</div>
</section>
<section id="contact" class="mt-10 pt-10 md:mt-20 md:pt-20 lg:mt-32 lg:pt-32 text-center">
	<h1 class="text-2xl font-bold md:text-4xl lg:text-5xl">Contact</h1>
	<Separator class="mt-2 mb-4 mx-auto w-16 md:mt-3 md:mb-12 md:w-24 lg:mt-4 lg:mb-24 lg:w-32" />
	<a href="mailto:alexandre.dorigny@gmail.com"
		><p class="font-bold text-xl md:text-3xl text-electric">Alexandre.dorigny@gmail.com</p></a
	>
</section>

<style>
	blockquote {
		background: linear-gradient(
			114.49deg,
			rgba(255, 255, 255, 0.33) -21.49%,
			rgba(255, 255, 255, 0) 111.75%
		);
		backdrop-filter: blur(70px);
	}
</style>
