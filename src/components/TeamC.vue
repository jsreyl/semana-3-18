<template>
    <div class="card text-white bg-dark">
        <div class="d-flex justify-content-center p-5">
            <img class="w-75" :src="member.image">
        </div>
        <div class="card-body">
            <h5 class="card-title"> {{ member.nombre }} ({{member.codigo}}) </h5>
            <p class="card-text text-justify">{{ member.descripcion }} </p>
            <p> {{ member.rol }} </p>
        </div>
        <div class="card-footer">
            <small class="text-muted">MisiónTIC 2022 Member</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamC",
        props: {
            'member': Object
            }
    }
</script>

<style scoped>

</style>
