<script>
    import Navigation from "../../navigation.svelte";
    import Topnavigation from "../../topnavigation.svelte";
    import Dashboard from "./Dashboard.svelte";
</script>


    
<div class="main-container">
    <Navigation/>
    <div class="right-container">
        <Topnavigation/>
        <Dashboard/>
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
        overflow-y: hidden;
    }

    .right-container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 70px calc(100% - 70px);
    }
</style>