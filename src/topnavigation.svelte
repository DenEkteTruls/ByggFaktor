<script>

</script>


<div class="top-container">
    <div class="tt-l">
        <input type="text" placeholder="Søk her" id="search_field">
    </div>
    <div class="tt-r">
        <img src="icons/inbox.svg" alt="" id="notification">
        <div class="settings-container">

        </div>
        <div class="user-container">

        </div>
    </div>
</div>



<style>
    .top-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
    }

    .tt-l {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
        margin-left: 40px;
    }

    .tt-l > input {
        width: 250px;
        height: 30px;
        border-radius: 10px;
        padding: 0px 40px 0 40px;
        font-family: "poppins", sans-serif;
        font-weight: normal;
        font-size: 13px;
        outline: none;
        border: none;
        background-color: rgba(128, 128, 128, 0.176);
        color: rgba(0, 0, 0, 0.749);
        background-image: url('icons/search.png');
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 18px 18px;
        background-position: 10px;
        caret-color: rgba(0, 0, 0, 0.5);
    }

    .tt-r {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 12px;
    }

    .settings-container {
        width: 100px;
        height: 70%;
    }

    .user-container {
        width: 150px;
        height: 70%;
    }

    #notification {
        width: 22px;
        height: 22px;
    }
</style>