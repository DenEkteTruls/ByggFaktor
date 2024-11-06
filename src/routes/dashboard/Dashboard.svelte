<script>
    import CardsContainer from "../../Widgets/CardsContainer.svelte";
    import Card1 from "../../Widgets/Card1.svelte";
    import Card2 from "../../Widgets/Card2.svelte";
</script>


<div class="main-container">
    <div class="container">
        <h1 id="dash-title">Dashboard</h1>
        <CardsContainer layout={[
            {"item": Card1, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday",
                "icon": "icons/users.svg"
            }},
            {"item": Card1, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday",
                "icon": "icons/users.svg"
            }},
            {"item": Card1, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday",
                "icon": "icons/users.svg"
            }},
            {"item": Card1, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday",
                "icon": "icons/users.svg"
            }}
        ]} class_="cards-container-flexwrap"/>

        <CardsContainer layout={[
            {"item": Card2, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday"
            }},
            {"item": Card2, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday"
            }},

            {"item": Card2, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday"
            }},

            {"item": Card2, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday"
            }},

            {"item": Card2, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday"
            }},

            {"item": Card2, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday"
            }},

            {"item": Card2, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday"
            }},

            {"item": Card2, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday"
            }},

            {"item": Card2, "data": {
                "title": "Total Users",
                "content": "40,687",
                "growth": "8.4% up from yesterday"
            }}
        ]} class_="cards-container"/>
    </div>
</div>



<style>
    .main-container {
        width: 100%;
        height: 100%;
        max-height: 100%;
        background-color: whitesmoke;
        overflow-y: scroll;
    }
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: calc(100% - 60px);
        height: 100%;
        margin: 10px auto 0 auto;
        gap: 20px;
    }

    #dash-title {
        font-size: 30px;
        margin: 15px 0 0 20px;
    }
</style>