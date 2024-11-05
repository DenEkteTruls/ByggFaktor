<script>
    import {items, calcs} from "./lib/adm.js"

    function move_to(link) {
        window.location.href = link;
    }
</script>



<div class="left-container">
    <h1 id="title">ByggFaktor</h1>
    <div class="left-t1">
        {#each items as item}
            <div class="nav-obj" on:click={move_to(item.link)}>
                <img alt="" class="nav-img" src="{item.icon}">
                <p>{item.name}</p>
            </div>
        {/each}
    </div>
    <div class="breaker"></div>
    <div class="left-t2">
        <p id="calcs-title">Kalkulatorer</p>
        {#each calcs as calc}
            <div class="nav-obj nav-obj-tight">
                <p>{calc.name}</p>
            </div>
        {/each}
    </div>
</div>



<style>
.left-container {
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: left;
    margin: 8px 0px 30px 30px;
    min-width: 170px !important;
}

.nav-obj {
    display: grid;
    grid-template-columns: 20px calc(100% - 20px);
    justify-content: center;
    align-items: center;
    height: 45px;
    padding: 0 20px;
    cursor: pointer;
    width: fit-content;
    gap: 10px;
}

.nav-obj:hover {
    background-color: #4980FF;
    color: white;
    font-weight: normal;
    border-radius: 10px;
}

.nav-obj:hover > img {
    filter: invert(1);
}

.nav-obj-tight {
    height: 35px;
    grid-template-columns: 100%;
    padding-bottom: 6px;
}

.nav-obj > p {
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: normal;
    width: fit-content;
}

.nav-img {
    width:  18px !important;
    height: 18px !important;
}


#title {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 35px;
}

#calcs-title {
    font-size: 12px;    
    font-weight: normal;
    text-align: left;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 20px; 
}

.breaker {
    width: calc(100% + 30px);
    height: 1px;
    background-color: rgba(128, 128, 128, 0.119);
    margin-left: -30px;
    margin-top: 10px;
}

</style>