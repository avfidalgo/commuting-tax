var yourdata_transportmode = document.getElementById('yourdata_transportmode')
var yourdata_distance = document.getElementById('yourdata_distance')

var yourcosts_total = document.getElementById('yourcosts_total');
var yourcosts_direct = document.getElementById('yourcosts_direct');
var yourcosts_time = document.getElementById('yourcosts_time');
var yourcosts_external = document.getElementById('yourcosts_external');
var yourcosts_annual = document.getElementById('yourcosts_annual');

var yourtaxdeduction_deduction = document.getElementById('yourtaxdeduction_deduction');
var yourtaxdeduction_daily = document.getElementById('yourtaxdeduction_daily');
var yourtaxdeduction_annual = document.getElementById('yourtaxdeduction_annual');



onChangeTransportMode = function(event) {
    calculateCosts(event)
}

document.getElementById('yourdata_distance').addEventListener('input', function(event) {
    calculateCosts(event)
})

calculateCosts = function(event) {

  console.log(yourdata_distance.value);

    switch (true) {

        // Caso: carros diesel
        case yourdata_transportmode.value === 'car_diesel':

            yourcosts_total.value = document.getElementById('yourdata_distance').value * 10
            yourcosts_direct.value = 0
            yourcosts_time.value = 0
            yourcosts_external.value = 0
            yourcosts_annual.value = 0

            yourtaxdeduction_deduction.value = 0
            yourtaxdeduction_daily.value = 0
            yourtaxdeduction_annual.value = 0

            break

        // Caso: carros gasoline
        case  yourdata_transportmode.value === 'car_gasoline':
            yourcosts_total.value = document.getElementById('yourdata_distance').value * 10
            yourcosts_direct.value = 0
            yourcosts_time.value = 0
            yourcosts_external.value = 0
            yourcosts_annual.value = 0

            yourtaxdeduction_deduction.value = 0
            yourtaxdeduction_daily.value = 0
            yourtaxdeduction_annual.value = 0

            break


        case  yourdata_transportmode.value === 'car_electric':
            yourcosts_total.value = document.getElementById('yourdata_distance').value * 10
            yourcosts_direct.value = 0
            yourcosts_time.value = 0
            yourcosts_external.value = 0
            yourcosts_annual.value = 0

            yourtaxdeduction_deduction.value = 0
            yourtaxdeduction_daily.value = 0
            yourtaxdeduction_annual.value = 0
            break


        case  yourdata_transportmode.value === 'bus':
            yourcosts_total.value = document.getElementById('yourdata_distance').value * 10
            yourcosts_direct.value = 0
            yourcosts_time.value = 0
            yourcosts_external.value = 0
            yourcosts_annual.value = 0

            yourtaxdeduction_deduction.value = 0
            yourtaxdeduction_daily.value = 0
            yourtaxdeduction_annual.value = 0

            break

        case  yourdata_transportmode.value === 'train':
            yourcosts_total.value = document.getElementById('yourdata_distance').value * 10
            yourcosts_direct.value = 100

            yourcosts_time.value = 0
            yourcosts_external.value = 0
            yourcosts_annual.value = 0

            yourtaxdeduction_deduction.value = 0
            yourtaxdeduction_daily.value = 0
            yourtaxdeduction_annual.value = 0

            break

        case  yourdata_transportmode.value === 'bicycle':
            yourcosts_total.value = document.getElementById('yourdata_distance').value * 10
            yourcosts_direct.value = 0
            yourcosts_time.value = 0
            yourcosts_external.value = 0
            yourcosts_annual.value = 0

            yourtaxdeduction_deduction.value = 0
            yourtaxdeduction_daily.value = 0
            yourtaxdeduction_annual.value = 0

            break


    }


}
