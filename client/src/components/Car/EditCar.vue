<template>
    <div>
        <h1>Edit Car</h1>
        <form v-on:submit.prevent="editCar">
            <p>title: <input type="text" v-model="car.title"></p>
            <p>content: <input type="text" v-model="car.content"></p>
            <p>category: <input type="text" v-model="car.category"></p>
            <p>status: <input type="text" v-model="car.status"></p>
            <p>
                <button type="submit">update car</button>
                <button v-on:click="navigateTo('/cars')">กลับ</button>
            </p>
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
                status: ''
            }
        }
    },
    methods: {
        async editCar() {
            try {
                await CarsService.put(this.car)
                this.$router.push({
                    name: 'cars'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let carId = this.$route.params.carId
            this.car = (await CarsService.show(carId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>  