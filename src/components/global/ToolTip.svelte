<script>
    import { fly } from 'svelte/transition';
    export let text = "";
    export let position = "top";
    
    let visible = false;
</script>

<div 
    class="tooltip-container" 
    on:mouseover={() => visible = true} 
    on:mouseleave={() => visible = false}
    on:click={() => visible = !visible}
>
    <slot></slot>
    {#if visible}
        <d-iv class={`tooltip-text ${position}`} transition:fly={{ duration: 200, y:-10 }}>
            {text}
        </d-iv>
    {/if}
</div>

<style>
    .tooltip-container {
        position: relative;
        display: inline-block;
    }

    .tooltip-text {
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        white-space: nowrap;
        transition: all 0.3s ease;
        font-size: 16px;
    }

    .tooltip-text.top {
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
    }

    .tooltip-text.bottom {
        top: 125%;
        left: 50%;
        margin-left: -60px;
    }

    .tooltip-text.left {
        top: 50%;
        right: 125%;
        margin-top: -16px;
    }

    .tooltip-text.right {
        top: 50%;
        left: 125%;
        margin-top: -16px;
    }
</style>