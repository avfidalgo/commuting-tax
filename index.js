var yourdata_transportmode = document.getElementById('yourdata_transportmode');
var yourdata_distance = document.getElementById('yourdata_distance');

onChangeTransportMode = function(event) {
    calculateCosts(event);
}

document.getElementById('yourdata_distance').addEventListener('input', function(event) {
    calculateCosts(event);
});



calculateCosts = function(event) {



    switch (true) {

        // Caso: carros diesel
        case document.getElementById('yourdata_transportmode').value === 'car_diesel':
            document.getElementById('yourcosts_total').value = document.getElementById('yourdata_distance').value * 10
            document.getElementById('yourcosts_direct').value = 0;
            document.getElementById('yourcosts_time').value = 0;
            document.getElementById('yourcosts_external').value = 0;
            document.getElementById('yourcosts_annual').value = 0;

            document.getElementById('yourtaxdeduction_deduction').value = 0;
            document.getElementById('yourtaxdeduction_daily').value = 0;
            document.getElementById('yourtaxdeduction_annual').value = 0;

            break;

            // Caso: carros gasoline
        case document.getElementById('yourdata_transportmode').value === 'car_gasoline':
            document.getElementById('yourcosts_total').value = document.getElementById('yourdata_distance').value * 10
            document.getElementById('yourcosts_direct').value = 0;
            document.getElementById('yourcosts_time').value = 0;
            document.getElementById('yourcosts_external').value = 0;
            document.getElementById('yourcosts_annual').value = 0;

            document.getElementById('yourtaxdeduction_deduction').value = 0;
            document.getElementById('yourtaxdeduction_daily').value = 0;
            document.getElementById('yourtaxdeduction_annual').value = 0;

            break;


        case document.getElementById('yourdata_transportmode').value === 'car_electric':
            document.getElementById('yourcosts_total').value = document.getElementById('yourdata_distance').value * 10
            document.getElementById('yourcosts_direct').value = 0;
            document.getElementById('yourcosts_time').value = 0;
            document.getElementById('yourcosts_external').value = 0;
            document.getElementById('yourcosts_annual').value = 0;

            document.getElementById('yourtaxdeduction_deduction').value = 0;
            document.getElementById('yourtaxdeduction_daily').value = 0;
            document.getElementById('yourtaxdeduction_annual').value = 0;
            break;


        case document.getElementById('yourdata_transportmode').value === 'bus':
            document.getElementById('yourcosts_total').value = document.getElementById('yourdata_distance').value * 10
            document.getElementById('yourcosts_direct').value = 0;
            document.getElementById('yourcosts_time').value = 0;
            document.getElementById('yourcosts_external').value = 0;
            document.getElementById('yourcosts_annual').value = 0;

            document.getElementById('yourtaxdeduction_deduction').value = 0;
            document.getElementById('yourtaxdeduction_daily').value = 0;
            document.getElementById('yourtaxdeduction_annual').value = 0;

            break;

        case document.getElementById('yourdata_transportmode').value === 'train':
            document.getElementById('yourcosts_total').value = document.getElementById('yourdata_distance').value * 10
            document.getElementById('yourcosts_direct').value = 0;
            document.getElementById('yourcosts_time').value = 0;
            document.getElementById('yourcosts_external').value = 0;
            document.getElementById('yourcosts_annual').value = 0;

            document.getElementById('yourtaxdeduction_deduction').value = 0;
            document.getElementById('yourtaxdeduction_daily').value = 0;
            document.getElementById('yourtaxdeduction_annual').value = 0;

            break;

        case document.getElementById('yourdata_transportmode').value === 'bicycle':
            document.getElementById('yourcosts_total').value = document.getElementById('yourdata_distance').value * 10
            document.getElementById('yourcosts_direct').value = 0;
            document.getElementById('yourcosts_time').value = 0;
            document.getElementById('yourcosts_external').value = 0;
            document.getElementById('yourcosts_annual').value = 0;

            document.getElementById('yourtaxdeduction_deduction').value = 0;
            document.getElementById('yourtaxdeduction_daily').value = 0;
            document.getElementById('yourtaxdeduction_annual').value = 0;

            break;


    }


}
