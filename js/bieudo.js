google.charts.load('current', { 'packages': ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Ngày');   
    data.addColumn('number', 'Mắc mới');
    data.addColumn('number', 'Đang điều trị');
    data.addColumn('number', 'Đã khỏi');
    data.addColumn('number', 'Tử vong');
    data.addRows([
        [new Date(2021, 7, 1), 693, 10197, 407, 0],
        [new Date(2021, 7, 2), 693, 10197, 407, 0],
        [new Date(2021, 7, 3), 914, 11256, 248, 0],
        [new Date(2021, 7, 4), 876, 11977, 176, 2],
        [new Date(2021, 7, 5), 1089, 12872, 203, 4],
        [new Date(2021, 7, 6), 1019, 13839, 55, 7],
        [new Date(2021, 7, 7), 997, 14361, 480, 5],
        [new Date(2021, 7, 8), 1307, 15279, 393, 3],
        [new Date(2021, 7, 9), 1616, 16865, 34, 5],
        [new Date(2021, 7, 10), 1844, 18496, 220, 2],
        [new Date(2021, 7, 11), 1945, 20371, 56, 6],
        [new Date(2021, 7, 12), 2367, 22692, 56, 6],
        [new Date(2021, 7, 13), 2296, 22692, 222, 7],
        [new Date(2021, 7, 14), 2924, 27621, 71, 6],
        [new Date(2021, 7, 15), 3379, 30904, 64, 69],
        [new Date(2021, 7, 16), 3321, 33890, 332, 18],
        [new Date(2021, 7, 17), 3705, 37315, 292, 0],
        [new Date(2021, 7, 18), 5887, 42857, 355, 29],
        [new Date(2021, 7, 19), 4175, 46592, 380, 80],
        [new Date(2021, 7, 20), 4789, 50991, 396, 0],
        [new Date(2021, 7, 21), 5343, 55784, 528, 36],
        [new Date(2021, 7, 22), 6164, 60528, 1450, 0],
        [new Date(2021, 7, 23), 7295, 65720, 2115, 0],
        [new Date(2021, 7, 24), 9225,72929,2047,0],
        [new Date(2021, 7, 25), 7525,78705,1755,0],
        [new Date(2021, 7, 26), 7859,84427,2006,154],
        [new Date(2021, 7, 27), 7911,90739,1602,0],
        [new Date(2021, 7, 28), 6555,92683,1602,106],
        [new Date(2021, 7, 29), 7593,95721,4323,233],
        [new Date(2021, 7, 30), 8622,100368,3704,928],
        [new Date(2021, 7, 31), 8620,105597,3250,145],
    ]);
    var linearOptions = {
        title: 'biểu đồ dịch bệnh Việt Nam trong tháng7(nguồn: internet)',
        hAxis: {
            title: 'Ngày',
        },
        vAxis: {
            scaleType: 'Số ca mắc',
            ticks: [0,100,5000,10000,20000,40000,60000,80000,100000]
        },
        colors: ['red', 'yellow', 'green', 'black'],
    };
    var linearChart = new google.visualization.LineChart(document.getElementById('Disease__charts'));
    linearChart.draw(data, linearOptions);
}