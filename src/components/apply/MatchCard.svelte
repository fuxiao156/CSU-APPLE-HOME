<script lang="ts">
    import { fly } from 'svelte/transition';
    export let options:{ name: string, selected: boolean,color:string }[] = [];
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
            <div style="display: flex;flex-direction: column;margin: 5px">
                <div style="display: flex;align-items: center;justify-content:center;background-color: {item.selected?item.color.selectedColor:item.color.color}" class="{item.selected? 'item-selected' : 'select-item'}" on:click={()=>selectItem(index)}>
                    <img src="{item.icon}" alt="icon" style="width: 50px;height: 50px"/>
                </div>
                <div style="width: 90px;text-align: center;color: #4E5969">
                    {item.name}
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .select-item{
        text-align: center;
        width: 90px;
        height: 90px;
        line-height: 40px;
      color: #4E5969;
        border-radius: 20px;
        transition: all 0.1s;
        cursor: pointer;

        &:hover{
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
    }

    .item-selected{
      text-align: center;
      width: 90px;
      height: 90px;
      line-height: 40px;
        color: white;
      border-radius: 20px;
      transition: all 0.1s;
      cursor: pointer;

      &:hover{
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      }
    }

</style>
