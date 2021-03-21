<template>
    <div class="no-results">
        <div class="svg-container">
            <img src="@/assets/icons/Feeling-sorry-bro.svg" />
        </div>
        <p> It seems there is no results... </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>

    div.no-results {
    animation: aparition 1s;
    margin:auto;
    left: 50%;
    text-align:center;
    transform: translate(-50%);
    top: 50%;
    position: absolute;
    width: 50%;
    
    }
    
    div.no-results div.svg-container {
        width:15em;
        height:15em;
        margin: auto;
    }
    div.no-results p{
        color:#252625;
        font-size:2.5em;
    }

    @keyframes aparition {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    

</style>