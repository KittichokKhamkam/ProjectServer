<template>
    <div>
        <div class="car-header">
            <h2>ส่วนจัดการรถยนตร์</h2>
            <div>
                <button v-on:click="navigateTo('/car/create')">create car</button>
                <strong> จํานวน : </strong> {{ cars.length }}
            </div>
            <br>
        </div>
        <div v-if="cars.length === 0" class="empty-car">
            *** ไม่มีข้อมูล***
        </div>
        <div v-for="car in cars" v-bind:key="car.id" class="car-list">
            <!-- <p>id: {{ car.id }}</p> -->

            <h3>{{ car.title }}</h3>
            <div v-html="car.content.slice(0, 200) + '...'"></div>
            <div class="car-info">
                <p><strong>Category:</strong> {{ car.category }}</p>
                <p><strong>status:</strong> {{ car.status }}</p>
                <!-- <p>status: {{ blog.status }}</p> -->
                <p>
                    <button v-on:click="navigateTo('/car/' + car.id)">ดู car</button>
                    <button v-on:click="navigateTo('/car/edit/' + car.id)">แก้ไข car</button>
                    <button v-on:click="deleteBlog(car)">ลบข้อมูล</button>
                </p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>   
<script>
import CarsService from '@/services/CarsService'
export default {
    data() {
        return {
            cars: []
        }
    },
    async created() {
        this.cars = (await CarsService.index()).data
    },
    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteCar(car) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await CarsService.delete(car)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.cars = (await CarsService.index()).data
        }
    }
}
</script>
<style scoped>
.empty-car {
    width: 100%;
    text-align: center;
    padding: 10px;
    background: darksalmon;
    color: white;
}

/* thumbnail */
.thumbnail-pic img {
    width: 200px;
    padding: 5px 10px 0px 0px;
}

.car-info {
    float: left;
}

.car-pic {
    float: left;
}

.clearfix {
    clear: both;
}

.car-list {
    border: solid 1px #dfdfdf;
    margin-bottom: 10px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
}

.car-header {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}</style>