<script lang="ts">
	import { InformationCircleIcon, XCircleIcon } from '@rgossiaux/svelte-heroicons/outline';
    import { fade } from 'svelte/transition';
    import ToolTip from '@/components/global/ToolTip.svelte';
    import MatchCard from "./MatchCard.svelte";
    import { options, interviewers } from "./options";
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';
	import { on } from 'ramda';
    const dispatch = createEventDispatcher();

    let showIndex = 0;
    let matchAble = false;

    function last(){
        if(showIndex > 0){
            let temp = showIndex
            showIndex= -1;
            setTimeout(() => {
                showIndex = temp - 1;
            }, 150);
        }
    }
    function next(){
        if(showIndex < options.length - 1){
            let temp = showIndex;
            showIndex = -1;
            setTimeout(() => {
                showIndex = temp + 1;
            }, 150);
        }
    }

    function handleSelect(){
        matchAble = false;
        options.forEach(option => {
            option.options.forEach(item => {
                if(item.selected){
                    matchAble = true;
                    return;
                }
            });
        });
    }

    function match(){
        if(matchAble === false){
            return;
        }
        let selectItem = new Set();
        options.forEach(option => {
            option.options.forEach(item => {
                if(item.selected){
                    selectItem.add(item.name);
                }
            });
        });
        //进行排序
        interviewers.forEach(interviewer => {
            let count = 0;
            interviewer.tags.forEach(tag => {
                if(selectItem.has(tag.name)){
                    tag.selected = true;
                    count++;
                }else{
                    tag.selected = false;
                }
            });
            interviewer.tags.sort((a,b) => {
                if (a.selected !== b.selected) {
                    return b.selected ? 1 : -1;
                }
                // 如果 a.selected 和 b.selected 相同,返回 0
                    return 0;
            });
            interviewer.matchCount = count;
        });

        interviewers.sort((a,b) => b.matchCount - a.matchCount);
        console.log(interviewers);
        dispatch('match',{})
    }
</script>

<!--<div class="mask">-->
<!--遮罩层，存在bug-->
    <div class="match-table" transition:fade={{ duration: 200}}>
        <div class="flex justify-between items-center w-full">
            <div class="flex justify-start items-center gap-1">
                <ToolTip text="{showIndex<0?"":options[showIndex].describe}" position="bottom">
                    <InformationCircleIcon class="w-5 h-5 cursor-pointer hover:text-blue-500 transition duration-300 ease-linear" />
                </ToolTip>
                <div class="transition duration-100 ease-linear {showIndex<0?"opacity-0":"opacity-100"}">&nbsp{showIndex<0?"":"请选择你的"+options[showIndex].title}</div>
            </div>
            <ToolTip text="关闭窗口" position="bottom">
                <div class="flex gap-2 close-icon rounded-[20px]" on:click={()=>dispatch('closeMatchTable',{})}>
                    <XCircleIcon class="w-5 h-5" />
                </div>
            </ToolTip>
        </div>
        <div class="card-area">
            {#each options as option,index}
                {#if showIndex == index}
                    <MatchCard on:itemSelect={handleSelect} options={option.options}></MatchCard>
                {/if}
            {/each}
        </div>
        <div class="button-group">
            <div class="last-button {showIndex<=0?'disabled':''}" on:click={last}>上一项</div>
            <div class="finish-button {matchAble?'':'disabled'}" on:click={match}>匹配</div>
            <div class="next-button {showIndex== options.length-1?'disabled':''}" on:click={next}>下一项</div>
        </div>
    </div>
<!--</div>-->

<style lang="scss">
  .mask{
    position: fixed;
    top:56px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .match-table{
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 600px;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0 0 60px 1px rgba(0, 0, 0, 0.4);
        padding: 40px;
        height: 600px;
    }
    .close-icon{
        cursor: pointer;
        transition: all ease-in-out 0.3s;

        &:hover{
            color: #60a5fa;
            rotate: 180deg;
        }
    }
    .card-area{
        width: 100%;
        display: flex;
        flex-shrink: 0;
    }
    .button-group{
        display: flex;
        justify-content: center;
        width: 100%;
        gap:4px;
    }
    .last-button{
        transition: all ease-in-out 0.3s;
		margin-top: 40px;
		width: 100px;
		height: 40px;
		background-color: #f0f0f0;
		border-radius: 20px 0 0 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		&:hover{
			box-shadow: 0 0 60px 1px rgba(0, 0, 0, 0.4);
		}
    }
    .finish-button{
        transition: all ease-in-out 0.3s;
		margin-top: 40px;
		width: 100px;
		height: 40px;
		background-color: #f0f0f0;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		&:hover{
			box-shadow: 0 0 60px 1px rgba(0, 0, 0, 0.4);
		}
    }
    .next-button{
        transition: all ease-in-out 0.3s;
		margin-top: 40px;
		width: 100px;
		height: 40px;
		background-color: #f0f0f0;
		border-radius: 0 20px 20px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		&:hover{
			box-shadow: 0 0 60px 1px rgba(0, 0, 0, 0.4);
		}
    }
    .disabled{
        background-color: #f0f0f0;
        color: #c3dafe;
        cursor: not-allowed;
    }

  @media screen and (max-width: 768px) {
    .match-table{
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 0 60px 1px rgba(0, 0, 0, 0.4);
      padding: 20px 15px;
      height: 500px;
    }

    .close-icon:hover{
        transition: none;
    }
  }
</style>
