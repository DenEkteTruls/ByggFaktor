<script>
    export let data;
</script>


<div class="container">
    <p id="title">{data.title}</p>
    <h1 id="content">{data.content}</h1>
    <p id="growth">{data.growth}</p>
    <img src="{data.icon}" alt="" id="icon"/>
</div>



<style>
    .container {
        width: auto;
        min-width: 180px;
        height: 160px;
        background-color: white;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        padding-left: 20px;
        position: relative;
        flex-grow: 4;
    }

    #title {
        font-size: 15px;
        font-family: "poppins", sans-serif;
        margin-top: 18px;
        color: rgba(42, 42, 42, 0.687);
    }

    #content {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 28px;
        font-weight: bold;
    }

    #growth {
        font-size: 14px;
    }

    #icon {
        width: 55px;
        object-fit: cover;
        position: absolute;
        right: 8%;
        top: 15%;
        border-radius: 100%;
        box-shadow: 0 0 20px 0 rgba(110, 96, 255, 0.404);
    }
</style>
