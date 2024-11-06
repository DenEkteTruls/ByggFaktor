<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    let check = false;

    export let value;
    export let layer;

    function clicked() {
        dispatch("activated", { "tab": value, "layer": layer});
        check = !check;
    }
</script>



{#if check}
    <div class="container hightlight" on:click={clicked}>
        <p class="hightlight-p">{value}</p>
    </div>
{:else}
    <div class="container" on:click={clicked}>
        <p>{value}</p>
    </div>
{/if}



<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: 10px;
        padding: 8px 18px;
        border-radius: 10px;
        outline: 2px solid rgba(101, 101, 101, 0.657);
        transition: .05s all ease-in-out;
    }

    .container:hover {
        cursor: pointer;
        outline: 2px solid #6AAB9C;
        border: none;
    }
    
    .hightlight {
        background-color: #6AAB9C;
        outline: 2px solid #6AAB9C;
    }

    .hightlight-p {
        color: white;
    }

    p {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-weight: normal;
        color: rgba(70, 70, 70, 0.957);
    }
</style>