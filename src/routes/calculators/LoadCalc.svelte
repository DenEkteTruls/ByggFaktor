<script>
    import { load_woodC24 } from "$lib/tables/load.js";
    import FilterTabs from "../../Widgets/FilterTabs.svelte";
    import Select from "../../Widgets/Select.svelte";
    import { autoMerge, merge } from "$lib/adm.js";
    import Result from "../../Widgets/Result.svelte";

    let DIM = "";
    let CC = {};

    $: tabs = {
        "layer1": ["Betong", "Trevirke", "Stål"],
        "layer2": ["c38", "c24", "T-bjelke", "H-bjelke", "limtredrager"],
        "active": {
            "layer1": [],
            "layer2": []
        }
    };

    $: cc_tabs = {
        "layer1": [],
        "active": {
            "layer1": []
        }
    };

    $: result = Object.values(CC);


    function eventHandlerActivated(e) {
        let tab = e.detail.tab;
        let layer = e.detail.layer;

        if (tabs.active[layer].includes(tab)) {
            const index = tabs.active[layer].indexOf(tab);
            tabs.active[layer].splice(index, 1);
            console.log("REMOVED:",tab);
        } else {
            tabs.active[layer].push(tab);
            console.log("ADDED:",tab);
        }
    }


    function selected_dim(e) {
        DIM = e.detail.value;
        for(let i = 0; i < load_woodC24.length; i++) {
            if(load_woodC24[i].dim == DIM) {
                CC = load_woodC24[i].loads;
            }
        }
        console.log(DIM, CC);
        cc_tabs.layer1 = Object.keys(CC);
    }
</script>



<div class="main-container">
    <div class="container">
        <h1 id="dash-title">Bæreevne</h1>
        <FilterTabs tabs={tabs} on:activated={eventHandlerActivated} />
        <div class="calc-field">
            <Select title="Velg dimensjon" options={load_woodC24} caller="dim" on:selected={selected_dim}/>  <!-- DIMENSJONER -->
        </div>
        <FilterTabs tabs={cc_tabs} on:activated={eventHandlerActivated}/>
        <Result result={result}/>
    </div>
</div>



<style>
    .main-container {
        width: 100%;
        height: 100%;
        background-color: whitesmoke;
    }
    .container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: calc(100% - 60px);
        height: 100%;
        margin: 10px auto 0 40px;
        gap: 20px;
    }

    .calc-field {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    #dash-title {
        font-size: 30px;
        margin: 15px 0 0 0;
    }
</style>