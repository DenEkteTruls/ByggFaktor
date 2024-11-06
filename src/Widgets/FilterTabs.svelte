<script>
    import Tab from "./Tab.svelte";
    export let tabs;
</script>


<div class="container">
    {#if tabs.layer1}
        <div class="tab-container">
            {#each tabs.layer1 as tab}
                <Tab value={tab} layer="layer1" on:activated/>
            {/each}
        </div>
    {/if}
    {#if tabs.layer2}
        <div class="gap"></div>
        <div class="tab-container">
            {#each tabs.layer2 as tab}
                <Tab value={tab} layer="layer2" on:activated/>
            {/each}
        </div>
    {/if}
</div>



<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: fit-content;
    }

    .tab-container {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .gap {
        background-color: rgba(128, 128, 128, 0.402);
        height: 1px;
        width: 100%;
    }
</style>
