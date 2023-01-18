<template>
    <div>
        <Title>Team Performance</Title>

        <PerformanceTeam class="mt-5" v-if="type == 'team'" :data="performanceData" />
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: {
        type: {
            type: String,
            default: 'team'
        }
    },
    setup(props) {

        const performanceData = ref([])

        if (props.type == 'team') {
            performanceData.value = [
                {
                    name: 'Team A',
                    thisMonthTicket: 10,
                    lastMonthTicket: 10,
                    npsLastMonth: 10,
                    npsThisMonth: 10,
                    yearlyNPS: 10,
                },
                {
                    name: 'Team B',
                    thisMonthTicket: 10,
                    lastMonthTicket: 10,
                    npsLastMonth: 10,
                    npsThisMonth: 10,
                    yearlyNPS: 10,
                },
                {
                    name: 'Team C',
                    thisMonthTicket: 10,
                    lastMonthTicket: 10,
                    npsLastMonth: 10,
                    npsThisMonth: 10,
                    yearlyNPS: 10,
                },
                {
                    name: 'Team D',
                    thisMonthTicket: 10,
                    lastMonthTicket: 10,
                    npsLastMonth: 10,
                    npsThisMonth: 10,
                    yearlyNPS: 10,
                },
                {
                    name: 'Team E',
                    thisMonthTicket: 10,
                    lastMonthTicket: 10,
                    npsLastMonth: 10,
                    npsThisMonth: 10,
                    yearlyNPS: 10,
                }
            ]
        }

        return {
            performanceData
        }
    },
}
</script>