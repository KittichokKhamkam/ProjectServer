<template>
    <div>
        <h1>Create Car</h1>
        <form v-on:submit.prevent="createCar">
            <p>title: <input type="text" v-model="car.title"></p>
            <p>content: <input type="text" v-model="car.content"></p>
            <p>category: <input type="text" v-model="car.category"></p>
            <p>status: <input type="text" v-model="car.status"></p>
            <p><button type="submit">create car</button></p>
        </form>
    </div>
</template>
<script>
import CarsService from '@/services/CarsService'
export default {
    data() {
        return {
            car: {
                title: '',
                thumbnail: 'null',
                pictures: 'null',
                content: '',
                category: '',
                status: 'saved'
            }
        }
    },
    methods: {
        async createCar() {
            try {
                await CarsService.post(this.car)
                this.$router.push({
                    name: 'cars'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped></style>