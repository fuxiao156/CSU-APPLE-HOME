<script>

	import Img from "@/components/img/Img.svelte";

</script>
<div class="mt-10 p-20 flex flex-col justify-center items-center">
	<div class="hidden sm:block poster">
		<div class="picture w-96 h-96">
			<Img src="contactUs/undraw_contact_us_re_4qqt.svg" alt="contact us" />
		</div>
		<h1 class="title top-10 right-0 text-7xl md:top-10 md:right-0">联系我们</h1>
		<div class="content flex flex-col top-32 text-xl gap-5">
			<div>
				<p>实验室邮箱:</p>
				<p>csuiosclub@gmail.com</p>
			</div>
			<div>
				<p>学生负责人微信:</p>
				<p>Y-An_0426</p>
			</div>
		</div>
	</div>
	<div class="flex flex-col justify-center items-start gap-5 sm:hidden">
		<Img src="contactUs/undraw_contact_us_re_4qqt.svg" alt="contact us" />
		<h1 class="text-5xl">联系我们</h1>
		<div class="content flex flex-col top-32 text-xl gap-5">
			<div>
				<p>实验室邮箱:</p>
				<p>csuiosclub@gmail.com</p>
			</div>
			<div>
				<p>学生负责人微信:</p>
				<p>l15986059328</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.poster {
		width: 70vw;
		height: 100vh;
		max-width: 30rem;
		position: relative;
		.title {
			height: 80vh;
			position: absolute;
			writing-mode: vertical-lr;
		}
		.picture {
			top: 20rem;
			position: absolute;
		}
		.content {
			position: absolute;
		}
	}
</style>
