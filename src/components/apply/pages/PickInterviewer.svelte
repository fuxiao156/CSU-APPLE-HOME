<script lang="ts">
	import { fly,fade } from 'svelte/transition';
	import Interviewer from '@/components/apply/Interviewer.svelte';
	import { InformationCircleIcon } from '@rgossiaux/svelte-heroicons/outline';
	import MatchTable from '@/components/apply/MatchTable.svelte';
	import { interviewers } from '../options'
    import ToolTip from '@/components/global/ToolTip.svelte';

	let ifShowMatchTable = true;
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

{#if !ifShowMatchTable}
	<div transition:fly>
		<div style="display: flex;align-items: center; margin-bottom: 20px;" class="justify-center gap-4">
            <ToolTip  text="已根据选择结果对面试官排序" position="left">
                <InformationCircleIcon class="w-5 h-5 cursor-pointer hover:text-blue-500 transition duration-300 ease-linear" />
            </ToolTip>
			<div id="button" class="pick-view-match-button" on:click={showMatchTable}>
					契合度匹配
			</div>
		</div>
		<div class="ml-10 mr-10 flex flex-col justify-center items-center gap-10 md:flex-row md:flex-wrap transition-all duration-300 {loading?'opacity-0':''}">
			{#each interviewers as card (card.code)}
				<Interviewer ifShowTags={matchComplete} avatar={card.avatar} code={card.code} intros={card.intros} tags={card.tags} SignalCopy={card.Signal}/>
			{/each}
		</div>
	</div>
	{:else}
		<div transition:fly={{duration:700, y:3000}}>
			<MatchTable on:closeMatchTable={()=> ifShowMatchTable = !ifShowMatchTable} on:match={match}/>
		</div>
{/if}



<style lang="scss">
	.pick-view-match-button{
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