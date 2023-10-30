<template>
    <div>
        <h1>Show Car</h1>
        <p>id: {{ car.id }}</p>
        <p>title: {{ car.title }}</p>
        <p>content: {{ car.content }}</p>
        <p>category: {{ car.category }}</p>
        <p>status: {{ car.status }}</p>
        <p>
            <button v-on:click="navigateTo('/car/edit/' + car.id)">แก้ไข car</button>
            <button v-on:click="navigateTo('/cars')">กลับ</button>
        </p>
    </div>
</template>
<script>
import CarsService from '@/services/CarsService'
export default {
    data() {
        return {
            car: null
        }
    },
    async created() {
        try {
            let carId = this.$route.params.carId
            this.car = (await CarsService.show(carId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }
}
</script>
<style scoped></style>