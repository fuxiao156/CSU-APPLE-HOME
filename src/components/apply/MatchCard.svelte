<script lang="ts">
    import { fly } from 'svelte/transition';
    export let options:{ name: string, selected: boolean }[] = [];
    import {createEventDispatcher, onMount} from 'svelte';
    const dispatch = createEventDispatcher();

    function selectItem(index:number){
        options[index].selected = !options[index].selected;
        dispatch('itemSelect',{});
    }

    function getRandomWidth() {
        return 110 + Math.floor(Math.random() * 26) - 12.5;
    }
    function getRandomMargin() {
        return  Math.floor(Math.random() * 31) - 15;
    }

    onMount(()=>{
        const items=document.querySelectorAll('#item')
        items.forEach(item=>{
            item.addEventListener('click',()=>{
                if (item.className.includes('item-selected')){
                    item.style.backgroundImage = 'url("/apply/boom.png")';
                    item.style.color='rgba(0,0,0,0)'
                    setTimeout(()=>{
                        item.style.backgroundImage = 'url("/apply/cloudSelected.png")';
                        item.style.color='#4E5969'
                    },1000)
                }
                if (item.className.includes('select-item')){
                    item.style.backgroundImage = 'url("/apply/cloud.png")';
                    item.style.color='#4E5969'
                }
            })
        })
        let direction = ['top', 'bottom', 'left', 'right'];
        let easing=['linear','ease','ease-in','ease-out','ease-in-out']
        let distance = 15; // 可以调整移动距离
        let animationTime = '2s';
        function randomMove() {
            items.forEach((item)=>{
                let rand1 = Math.floor(Math.random() * 4);
                let rand2 = Math.floor(Math.random() * 5);
                let move = direction[rand1];
                let newTop = 0;
                let newLeft = 0;

                if (move === 'top') {
                    newTop = -distance;
                } else if (move === 'bottom') {
                    newTop = distance;
                } else if (move === 'left') {
                    newLeft = -distance;
                } else if (move === 'right') {
                    newLeft = distance;
                }
                item.style.transition = `transform ${animationTime} ${easing[rand2]}`;
                item.style.transform = `translate(${newLeft}px, ${newTop}px)`;
            })
        }
        randomMove()
        setInterval(randomMove, 2000);
    })
</script>

<div class="flex flex-col justify-center items-center gap-5 w-full"  transition:fly={{ duration: 100, y:10 }}>
    <div class="mt-6 flex flex-wrap gap-1 justify-middle align-middle">
        {#each options as item,index (item.name)}
            <div
                    id="item"
                    class="{item.selected? 'item-selected' : 'select-item'}"
                    on:click={()=>selectItem(index)}
                    style="
                    background-size:{getRandomWidth()+'px'};
                    margin-left:{getRandomMargin()+'px'};
                    margin-top:{getRandomMargin()+'px'}"
            >
                {item.name}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .select-item{
      height: 125px;
      width: 125px;
      display: flex;
      background-image: url("/apply/cloud.png");
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-position: center center;
      color: #4E5969;
        transition: all linear 0.2s;
        cursor: pointer;

        &:hover{
          transform: translateY(-10px);
        }
    }

    .item-selected{
      height: 125px;
      width: 125px;
      display: flex;
      background-image: url("/apply/cloudSelected.png");
      align-items: center;
      justify-content: center;
      color: #4E5969;
      background-repeat: no-repeat;
      background-position: center center;
      transition: all linear 0.2s;
      cursor: pointer;

      &:hover{
        transform: translateY(-10px);
      }
    }

</style>
