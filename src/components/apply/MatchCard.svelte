<script lang="ts">
    import { fly } from 'svelte/transition';
    export let options:{ name: string, selected: boolean }[] = [];
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function selectItem(index:number){
        options[index].selected = !options[index].selected;
        dispatch('itemSelect',{});
    }
</script>

<div class="flex flex-col justify-center items-center gap-5 w-full"  transition:fly={{ duration: 100, y:10 }}>
    <div class="mt-6 flex flex-wrap gap-1 justify-center">
        {#each options as item,index}
            <div class="select-item {item.selected? 'item-selected' : ''}" on:click={()=>selectItem(index)}>
                {item.name}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .select-item{
      display: flex;
      align-items: center;
      justify-content: center;
        background-image: url('/apply/cloud.png');
      background-size: 130px 100px;
      width: 130px;
      height: 100px;
      color: #4E5969;
        transition: all linear 0.2s;
        cursor: pointer;

        &:hover{

        }
    }

    .item-selected{

    }

</style>
