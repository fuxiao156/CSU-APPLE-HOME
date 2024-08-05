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
        text-align: center;
        width: 90px;
        height: 40px;
        line-height: 40px;
        background-color: rgb(248 250 252);
        border-radius: 6px;
        transition: all linear 0.3s;
        cursor: pointer;

        &:hover{
            background-color: #c3dafe;
			box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.132);
        }
    }

    .item-selected{
        background-color: #60a5fa !important;
        color: white;
    }

</style>
