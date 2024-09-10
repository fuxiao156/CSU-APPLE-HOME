<script>
	import Img from '@/components/img/Img.svelte';
	import { fly } from 'svelte/transition';
</script>

<div transition:fly class="flex flex-col justify-center items-center gap-5">
	<a style="color: blue" href="https://ocn8ft3ji71k.feishu.cn/share/base/form/shrcnClnDR5jE4TVnySatMoNPJd">
		点击文字跳转至简历投递网站，或扫码进行填写
	</a>
	<Img
			clazz="w-96 hover:shadow-lg rounded-lg transition-shadow duration-300"
			src="apply/QRCode.jpg"
			alt="qr code"
	/>
</div>
