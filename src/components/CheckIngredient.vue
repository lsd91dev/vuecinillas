<template>
<div class="container">
    <label :for="id_ingredient" class="check-small"><small> Check the ingredient </small></label>
    
    <div class="container-check">
        <input type="checkbox" class="checkbox" :id="id_ingredient">
        <label :for="id_ingredient"></label>
    </div>
</div>
</template>

<script>

export default {
    name: 'CheckIngredient',
    props:{
        id_ingredient: {
            type: String, Number
        }
    },
}
</script>

<style scoped>

.container-check {
    cursor:pointer;
    position: absolute;
    right: 0;
    top: 50%;
    width:2em;
    height:2em;
    transform: translateY(-50%);
}

.check-small {
    font-style:italic;
    cursor:pointer;
    font-size:0.9em;
}

.container-check input {
    opacity: 0;
    height:0;
    width:0;
}

.container-check label {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #598a6a;
    border-radius: 1em;
}


.checkbox:checked + label:after{
    position: absolute;
    content: '';
    top: 50%;
    bottom: 0;
    left: 50%;
    right: 0;
    width: 5px;
    height: 15px;
    transform: translate(-50%, -50%) rotate(45deg);
    border: solid white;
    border-width: 0 3px 3px 0;
}

.checkbox:checked + label {
    background-color: #598a6a
}
</style>