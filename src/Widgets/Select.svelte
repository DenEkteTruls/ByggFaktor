<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    
    export let options;
    export let caller;
    export let title;

    let selected = "";

    function change() {
        dispatch("selected", {
            "value": selected
        })
    }
</script>

<label for="load-select">{title}</label>
<select name="loads" id="load-select" bind:value={selected} on:change={change}>
    <option value=""></option>
    {#each options as option}
        <option value={option[caller]}>{option[caller]}</option>
    {/each}
</select>



<style>
    select {
        width: 438px;
        height: 35px;
        padding: 5px 10px;
        font-size: 14px;
        border-radius: 10px;
    }
</style>