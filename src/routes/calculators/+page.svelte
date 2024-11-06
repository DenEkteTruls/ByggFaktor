<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    import Navigation from "../../navigation.svelte";
    import Topnavigation from "../../topnavigation.svelte";
    import LoadCalc from "./LoadCalc.svelte";
    import MaterialCalc from "./MaterialCalc.svelte";
    import CostCalc from "./CostCalc.svelte";
    import TimeCalc from "./TimeCalc.svelte";
    import ArealVolumeCalc from "./ArealVolumeCalc.svelte";
    import TransportCalc from "./TransportCalc.svelte";

    function get_calc_id() {
        const url = $page.url;
        let id = url.searchParams.get("id")
        return id;
    }

    const id = get_calc_id()
</script>



<div class="main-container">
    <Navigation/>
    <div class="right-container">
        <Topnavigation/>
        {#if id == 1}
            <LoadCalc/>
        {:else if id == 2}
            <MaterialCalc/>
        {:else if id == 3}
            <CostCalc/>
        {:else if id == 4}
            <TimeCalc/>
        {:else if id == 5}
            <ArealVolumeCalc/>
        {:else if id == 6}  
            <TransportCalc/>
        {:else if id == 7}
        {/if}
    </div>
</div>



<style>
    .main-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        font-family: "Poppins", sans-serif;
        margin: 0 auto;
    }

    .right-container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 70px calc(100% - 70px);
    }
</style>