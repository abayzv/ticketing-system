<template>
    <div>
        <apexChart :options="options" :series="series" type="bar" height="350" />
    </div>
</template>

<script>
import apexChart from 'vue3-apexcharts'

export default {
    setup() {
        const options = {
            chart: {
                id: 'vuechart-example',
                stacked: true,
                fontFamily: 'Nunito',
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                max: 50,
                tickAmount: 5,
            },
            colors: ['#29BAA3', '#E5E5EF'],
            grid: {
                borderColor: '#E5E5EF',
                strokeDashArray: 10,
                position: 'back',
                padding: {
                    left: -15,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    borderRadiusApplication: 'around',
                    borderRadiusWhenStacked: 'around',
                    columnWidth: '10%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            }
        }

        const dataSeries = [{
            name: 'series-1',
            data: [45, 40, 50, 30, 40, 20, 30, 40, 40, 40, 45, 0],
        }]

        const zeroSeries = []
        dataSeries[0].data.forEach(element => {
            zeroSeries.push(50 - element)
        });

        const series = [...dataSeries, {
            name: 'series-2',
            data: zeroSeries
        }]


        return {
            options,
            series
        }
    },
    components: {
        apexChart
    }
}

</script>