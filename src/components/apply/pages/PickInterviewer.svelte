<script lang="ts">
	import { fly } from 'svelte/transition';
	import Interviewer from '@/components/apply/Interviewer.svelte';
	import MatchTable from '@/components/apply/MatchTable.svelte';
	import { interviewers } from '../options'

	let ifShowMatchTable = false;
	let matchComplete = false;
	let loading = false;

	function showMatchTable(){
		ifShowMatchTable = true;
	}

	function match(){
		loading = true;
		ifShowMatchTable = false;
		matchComplete = false;
		setTimeout(() => {
			loading = false;
			setTimeout(() => {
				matchComplete = true;
			}, 200);
		}, 300);
		window.scrollTo({ behavior: 'smooth', top: 0 });
	}
</script>

<div class="pick-view-match-button" on:click={showMatchTable}>契合度匹配</div>
{#if ifShowMatchTable}
	<MatchTable on:closeMatchTable={()=> ifShowMatchTable = !ifShowMatchTable} on:match={match}/>
{/if}

<div transition:fly class="ml-10 mr-10 flex flex-col justify-center items-center gap-10 md:flex-row md:flex-wrap transition-all duration-300 {loading?'opacity-0':''}">
	{#each interviewers as card (card.code)}
		<Interviewer ifShowTags={matchComplete} avatar={card.avatar} code={card.code} intros={card.intros} tags={card.tags} SignalCopy={card.Signal}/>
	{/each}
</div>

<style lang="scss">
	.pick-view-match-button{
		margin-bottom: 20px;
		width: 150px;
		height: 40px;
		border-radius: 5px;
		background-color: white;
		color: #165DFF;
		border: 1px solid #165DFF;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
        transition: all ease-in-out 0.2s;

		&:hover{
			background-color: #165DFF;
			color: white;
		}
	}
</style>