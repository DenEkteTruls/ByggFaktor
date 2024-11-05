<script>
    export let layout;
    export let class_;
</script>



<div class="{class_}">
    {#each layout as item}
        <svelte:component this={item.item} data={item.data}/>
    {/each}
</div>


<style>
    .cards-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
    }

    .cards-container-flexwrap {
        display: grid;
        grid-template-columns: repeat(4, minmax(180px, 1fr));
        gap: 20px;
        width: 100%;
    }

    @media (max-width: 1100px) {
    .cards-container-flexwrap {
        grid-template-columns: repeat(2, minmax(180px, 1fr));
    }
}
  
/*
    .cards-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 200px;
        gap: 20px;
    }
        */
</style>