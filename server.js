const express = require("express")
const data = [
    {
        "fuel_level": 129.72890338361188,
        "timestamp": 1724610655272,
        "speed": 36.72727272727273,
        "location": {
            "latitude": 14.217769045454544,
            "longitude": 79.13915177272726
        }
    },
    {
        "fuel_level": 127.03518454639533,
        "timestamp": 1724610784000,
        "speed": 43.69230769230769,
        "location": {
            "latitude": 14.209112015384616,
            "longitude": 79.14947342307693
        }
    },
    {
        "fuel_level": 126.33781763826607,
        "timestamp": 1724610908833,
        "speed": 39.833333333333336,
        "location": {
            "latitude": 14.2007526,
            "longitude": 79.1602944
        }
    },
    {
        "fuel_level": 127.42339312406578,
        "timestamp": 1724611029166,
        "speed": 34.083333333333336,
        "location": {
            "latitude": 14.191590658333332,
            "longitude": 79.16542106666667
        }
    },
    {
        "fuel_level": 125.92862481315397,
        "timestamp": 1724611153750,
        "speed": 39.166666666666664,
        "location": {
            "latitude": 14.1847901,
            "longitude": 79.17331204166666
        }
    },
    {
        "fuel_level": 127.03518454639533,
        "timestamp": 1724611029166,
        "speed": 39.166666666666664,
        "location": {
            "latitude": 14.2007526,
            "longitude": 79.16542106666667
        }
    },
    {
        "fuel_level": 127.02483615039668,
        "timestamp": 1724611153750,
        "speed": 39.833333333333336,
        "location": {
            "latitude": 14.191590658333332,
            "longitude": 79.17331204166666
        }
    },
    {
        "fuel_level": 127.02483615039668,
        "timestamp": 1724611279583,
        "speed": 39.166666666666664,
        "location": {
            "latitude": 14.1847901,
            "longitude": 79.18266786666665
        }
    },
    {
        "fuel_level": 127.02483615039668,
        "timestamp": 1724611404692,
        "speed": 38.916666666666664,
        "location": {
            "latitude": 14.177347441666667,
            "longitude": 79.18707457692307
        }
    },
    {
        "fuel_level": 126.84977578475338,
        "timestamp": 1724611535000,
        "speed": 38.916666666666664,
        "location": {
            "latitude": 14.16517456923077,
            "longitude": 79.19393123846154
        }
    },
    {
        "fuel_level": 126.84977578475338,
        "timestamp": 1724611660333,
        "speed": 38.666666666666664,
        "location": {
            "latitude": 14.153451999999998,
            "longitude": 79.20152732500001
        }
    },
    {
        "fuel_level": 126.84977578475338,
        "timestamp": 1724611785230,
        "speed": 37.53846153846154,
        "location": {
            "latitude": 14.1449069,
            "longitude": 79.20635827692308
        }
    },
    {
        "fuel_level": 125.28531667041149,
        "timestamp": 1724611913000,
        "speed": 37.53846153846154,
        "location": {
            "latitude": 14.13490806153846,
            "longitude": 79.20689314545453
        }
    },
    {
        "fuel_level": 125.04555365644765,
        "timestamp": 1724612036000,
        "speed": 37.53846153846154,
        "location": {
            "latitude": 14.123662381818184,
            "longitude": 79.21161084615386
        }
    },
    {
        "fuel_level": 123.34445371142618,
        "timestamp": 1724612166833,
        "speed": 37.53846153846154,
        "location": {
            "latitude": 14.113708938461539,
            "longitude": 79.21897634166668
        }
    },
    {
        "fuel_level": 123.14749470712776,
        "timestamp": 1724612291583,
        "speed": 40.54545454545455,
        "location": {
            "latitude": 14.102005233333335,
            "longitude": 79.22641634166666
        }
    },
    {
        "fuel_level": 123.07912844036697,
        "timestamp": 1724612417363,
        "speed": 40.75,
        "location": {
            "latitude": 14.093405108333334,
            "longitude": 79.23396693636363
        }
    },
    {
        "fuel_level": 122.82944120100083,
        "timestamp": 1724612561545,
        "speed": 40.75,
        "location": {
            "latitude": 14.085770263636363,
            "longitude": 79.2469342
        }
    },
    {
        "fuel_level": 122.82944120100083,
        "timestamp": 1724612687300,
        "speed": 41.6,
        "location": {
            "latitude": 14.077689663636363,
            "longitude": 79.25632564000001
        }
    },
    {
        "fuel_level": 122.60779816513761,
        "timestamp": 1724612813666,
        "speed": 41.6,
        "location": {
            "latitude": 14.067975809999998,
            "longitude": 79.2651007
        }
    },
    {
        "fuel_level": 122.11264016309889,
        "timestamp": 1724612945777,
        "speed": 43.09090909090909,
        "location": {
            "latitude": 14.061436611111112,
            "longitude": 79.2799894
        }
    },
    {
        "fuel_level": 121.8985728848114,
        "timestamp": 1724613080111,
        "speed": 45.25,
        "location": {
            "latitude": 14.057932544444444,
            "longitude": 79.29079846666667
        }
    },
    {
        "fuel_level": 121.53160040774719,
        "timestamp": 1724613215777,
        "speed": 45.25,
        "location": {
            "latitude": 14.052748288888889,
            "longitude": 79.303562
        }
    },
    {
        "fuel_level": 121.03784403669724,
        "timestamp": 1724613341375,
        "speed": 45.25,
        "location": {
            "latitude": 14.044937555555556,
            "longitude": 79.3175778875
        }
    },
    {
        "fuel_level": 120.48053511005685,
        "timestamp": 1724613519777,
        "speed": 44,
        "location": {
            "latitude": 14.036140587499998,
            "longitude": 79.32976431
        }
    },
    {
        "fuel_level": 120.34330027170228,
        "timestamp": 1724613644000,
        "speed": 45.25,
        "location": {
            "latitude": 14.025236633333334,
            "longitude": 79.3303356888889
        }
    },
    {
        "fuel_level": 119.71958174904944,
        "timestamp": 1724613772100,
        "speed": 44,
        "location": {
            "latitude": 14.011814125,
            "longitude": 79.330540575
        }
    },
    {
        "fuel_level": 118.6058301647655,
        "timestamp": 1724613899500,
        "speed": 42.666666666666664,
        "location": {
            "latitude": 13.998557950000002,
            "longitude": 79.33695222499999
        }
    },
    {
        "fuel_level": 118.6058301647655,
        "timestamp": 1724614027444,
        "speed": 38.6,
        "location": {
            "latitude": 13.9858943375,
            "longitude": 79.33970532222222
        }
    },
    {
        "fuel_level": 118.6058301647655,
        "timestamp": 1724614164833,
        "speed": 34.833333333333336,
        "location": {
            "latitude": 13.97520958888889,
            "longitude": 79.34745131666666
        }
    },
    {
        "fuel_level": 116.840937896071,
        "timestamp": 1724614282875,
        "speed": 34.833333333333336,
        "location": {
            "latitude": 13.963652433333335,
            "longitude": 79.352600175
        }
    },
    {
        "fuel_level": 116.48980297269269,
        "timestamp": 1724614390363,
        "speed": 34.833333333333336,
        "location": {
            "latitude": 13.954893075000001,
            "longitude": 79.35559646363636
        }
    },
    {
        "fuel_level": 115.93155893536122,
        "timestamp": 1724614606454,
        "speed": 46.3,
        "location": {
            "latitude": 13.949560718181822,
            "longitude": 79.3657442
        }
    },
    {
        "fuel_level": 115.6273764258555,
        "timestamp": 1724614735700,
        "speed": 50,
        "location": {
            "latitude": 13.927348890909093,
            "longitude": 79.36943128
        }
    },
    {
        "fuel_level": 115.59315589353609,
        "timestamp": 1724614875000,
        "speed": 50,
        "location": {
            "latitude": 13.911368290000002,
            "longitude": 79.37572029
        }
    },
    {
        "fuel_level": 115.40096785343934,
        "timestamp": 1724615005636,
        "speed": 50,
        "location": {
            "latitude": 13.894780450000003,
            "longitude": 79.3815817909091
        }
    },
    {
        "fuel_level": 115.14638783269962,
        "timestamp": 1724615132500,
        "speed": 47.4,
        "location": {
            "latitude": 13.878235254545455,
            "longitude": 79.38785795
        }
    },
    {
        "fuel_level": 115.07777393708953,
        "timestamp": 1724615258000,
        "speed": 47.4,
        "location": {
            "latitude": 13.86452547,
            "longitude": 79.39553550833334
        }
    },
    {
        "fuel_level": 114.74077608142493,
        "timestamp": 1724615367000,
        "speed": 47.4,
        "location": {
            "latitude": 13.851818575000001,
            "longitude": 79.39866628
        }
    },
    {
        "fuel_level": 114.07182512144345,
        "timestamp": 1724615662166,
        "speed": 45.63636363636363,
        "location": {
            "latitude": 13.8399143,
            "longitude": 79.40834260833333
        }
    },
    {
        "fuel_level": 113.90076335877862,
        "timestamp": 1724615788750,
        "speed": 45.63636363636363,
        "location": {
            "latitude": 13.80872245,
            "longitude": 79.41526231666667
        }
    },
    {
        "fuel_level": 113.77568995889607,
        "timestamp": 1724615913363,
        "speed": 47,
        "location": {
            "latitude": 13.796357891666668,
            "longitude": 79.42024404545454
        }
    },
    {
        "fuel_level": 113.36354961832059,
        "timestamp": 1724616194153,
        "speed": 47,
        "location": {
            "latitude": 13.782277981818181,
            "longitude": 79.44523111538462
        }
    },
    {
        "fuel_level": 113.18702290076334,
        "timestamp": 1724616319333,
        "speed": 47,
        "location": {
            "latitude": 13.758259707692307,
            "longitude": 79.45749620833332
        }
    },
    {
        "fuel_level": 113.3969465648855,
        "timestamp": 1724616444769,
        "speed": 45.63636363636363,
        "location": {
            "latitude": 13.748733158333335,
            "longitude": 79.46761816923078
        }
    },
    {
        "fuel_level": 112.61662425784564,
        "timestamp": 1724616548250,
        "speed": 44.75,
        "location": {
            "latitude": 13.739554453846157,
            "longitude": 79.476819125
        }
    },
    {
        "fuel_level": 112.55284791544335,
        "timestamp": 1724616665000,
        "speed": 42.61538461538461,
        "location": {
            "latitude": 13.731722037499999,
            "longitude": 79.4850533
        }
    },
    {
        "fuel_level": 112.55284791544335,
        "timestamp": 1724616881666,
        "speed": 41.111111111111114,
        "location": {
            "latitude": 13.720495,
            "longitude": 79.49270643333335
        }
    },
    {
        "fuel_level": 112.14914856136231,
        "timestamp": 1724617015692,
        "speed": 41.111111111111114,
        "location": {
            "latitude": 13.69954477777778,
            "longitude": 79.50232510000001
        }
    },
    {
        "fuel_level": 112.14914856136231,
        "timestamp": 1724617140333,
        "speed": 41.111111111111114,
        "location": {
            "latitude": 13.69016776923077,
            "longitude": 79.50788940833333
        }
    },
    {
        "fuel_level": 111.68893129770993,
        "timestamp": 1724617266000,
        "speed": 44.30769230769231,
        "location": {
            "latitude": 13.685195091666666,
            "longitude": 79.51229690833334
        }
    },
    {
        "fuel_level": 111.60598943041693,
        "timestamp": 1724617395166,
        "speed": 44.30769230769231,
        "location": {
            "latitude": 13.671349199999998,
            "longitude": 79.513023575
        }
    },
    {
        "fuel_level": 110.19593167121879,
        "timestamp": 1724617521083,
        "speed": 44.30769230769231,
        "location": {
            "latitude": 13.656121758333333,
            "longitude": 79.513023575
        }
    },
    {
        "fuel_level": 110.19593167121879,
        "timestamp": 1724617646923,
        "speed": 44.30769230769231,
        "location": {
            "latitude": 13.641907041666665,
            "longitude": 79.513023575
        }
    },
    {
        "fuel_level": 110.19593167121879,
        "timestamp": 1724617768272,
        "speed": 41.5,
        "location": {
            "latitude": 13.629535476923078,
            "longitude": 79.51229690833334
        }
    },
    {
        "fuel_level": 109.90445282009817,
        "timestamp": 1724617929333,
        "speed": 37.84615384615385,
        "location": {
            "latitude": 13.61892207272727,
            "longitude": 79.51194237777777
        }
    },
    {
        "fuel_level": 109.90445282009817,
        "timestamp": 1724618053300,
        "speed": 37.84615384615385,
        "location": {
            "latitude": 13.616075916666668,
            "longitude": 79.51194237777777
        }
    },
    {
        "fuel_level": 109.90445282009817,
        "timestamp": 1724618177111,
        "speed": 41.5,
        "location": {
            "latitude": 13.60971428,
            "longitude": 79.51194237777777
        }
    },
    {
        "fuel_level": 109.60513107827346,
        "timestamp": 1724618304545,
        "speed": 45.45454545454545,
        "location": {
            "latitude": 13.597870322222224,
            "longitude": 79.51344329090911
        }
    },
    {
        "fuel_level": 105.87155963302753,
        "timestamp": 1724618428375,
        "speed": 47.81818181818182,
        "location": {
            "latitude": 13.587744972727274,
            "longitude": 79.51503455000001
        }
    },
    {
        "fuel_level": 105.87155963302753,
        "timestamp": 1724618549000,
        "speed": 47.81818181818182,
        "location": {
            "latitude": 13.571827449999999,
            "longitude": 79.52062144444444
        }
    },
    {
        "fuel_level": 105.87155963302753,
        "timestamp": 1724618686000,
        "speed": 47.81818181818182,
        "location": {
            "latitude": 13.558410866666668,
            "longitude": 79.53307843636364
        }
    },
    {
        "fuel_level": 105.12253361819783,
        "timestamp": 1724618810818,
        "speed": 47.81818181818182,
        "location": {
            "latitude": 13.551288127272727,
            "longitude": 79.5342157
        }
    },
    {
        "fuel_level": 105.12253361819783,
        "timestamp": 1724618932909,
        "speed": 47.81818181818182,
        "location": {
            "latitude": 13.539091172727273,
            "longitude": 79.5342157
        }
    },
    {
        "fuel_level": 105.12253361819783,
        "timestamp": 1724619045555,
        "speed": 46.81818181818182,
        "location": {
            "latitude": 13.52821739090909,
            "longitude": 79.53466602727272
        }
    },
    {
        "fuel_level": 103.13547586797556,
        "timestamp": 1724619217666,
        "speed": 42.72727272727273,
        "location": {
            "latitude": 13.523027533333336,
            "longitude": 79.53466602727272
        }
    },
    {
        "fuel_level": 102.31008717310088,
        "timestamp": 1724619339000,
        "speed": 41.18181818181818,
        "location": {
            "latitude": 13.505700383333336,
            "longitude": 79.53466602727272
        }
    },
    {
        "fuel_level": 101.73100871731008,
        "timestamp": 1724619466636,
        "speed": 41.18181818181818,
        "location": {
            "latitude": 13.490934945454542,
            "longitude": 79.5382395090909
        }
    },
    {
        "fuel_level": 101.41742770167427,
        "timestamp": 1724619595400,
        "speed": 41.18181818181818,
        "location": {
            "latitude": 13.477762681818183,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 96.41914226124752,
        "timestamp": 1724619725583,
        "speed": 0,
        "location": {
            "latitude": 13.473206600000001,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 88.61803229450288,
        "timestamp": 1724619854142,
        "speed": 0,
        "location": {
            "latitude": 13.473206600000001,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 86.96832579185522,
        "timestamp": 1724620047000,
        "speed": 0,
        "location": {
            "latitude": 13.473206600000001,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 86.96832579185521,
        "timestamp": 1724620171300,
        "speed": 0,
        "location": {
            "latitude": 13.4732066,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 86.96832579185521,
        "timestamp": 1724620299444,
        "speed": 0,
        "location": {
            "latitude": 13.4732066,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 86.96832579185521,
        "timestamp": 1724620428090,
        "speed": 0,
        "location": {
            "latitude": 13.4732066,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 86.96832579185521,
        "timestamp": 1724620542111,
        "speed": 0,
        "location": {
            "latitude": 13.4732066,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 86.96832579185521,
        "timestamp": 1724620670545,
        "speed": 0,
        "location": {
            "latitude": 13.4732066,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 86.96832579185521,
        "timestamp": 1724620795777,
        "speed": 0,
        "location": {
            "latitude": 13.4732066,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 86.96832579185521,
        "timestamp": 1724620922923,
        "speed": 0,
        "location": {
            "latitude": 13.4732066,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 86.96832579185522,
        "timestamp": 1724621048000,
        "speed": 0,
        "location": {
            "latitude": 13.4732066,
            "longitude": 79.5403516
        }
    },
    {
        "fuel_level": 87.96220713333012,
        "timestamp": 1724621168727,
        "speed": 28.636363636363637,
        "location": {
            "latitude": 13.4732066,
            "longitude": 79.54142586363636
        }
    },
    {
        "fuel_level": 95.23361254130486,
        "timestamp": 1724621293615,
        "speed": 35,
        "location": {
            "latitude": 13.470763872727273,
            "longitude": 79.5491542
        }
    },
    {
        "fuel_level": 99.95509057152893,
        "timestamp": 1724621418666,
        "speed": 35,
        "location": {
            "latitude": 13.458008176923077,
            "longitude": 79.55967023333334
        }
    },
    {
        "fuel_level": 99.95509057152893,
        "timestamp": 1724621539000,
        "speed": 35,
        "location": {
            "latitude": 13.446658583333333,
            "longitude": 79.56100635
        }
    },
    {
        "fuel_level": 99.95509057152893,
        "timestamp": 1724621667857,
        "speed": 35,
        "location": {
            "latitude": 13.434053441666665,
            "longitude": 79.56232895000001
        }
    },
    {
        "fuel_level": 99.95509057152893,
        "timestamp": 1724621790375,
        "speed": 0.6428571428571429,
        "location": {
            "latitude": 13.42914773571429,
            "longitude": 79.5623399
        }
    },
    {
        "fuel_level": 96.25862076519972,
        "timestamp": 1724621917272,
        "speed": 0,
        "location": {
            "latitude": 13.429145000000004,
            "longitude": 79.5623399
        }
    },
    {
        "fuel_level": 95.03943424996056,
        "timestamp": 1724622045875,
        "speed": 0,
        "location": {
            "latitude": 13.429145000000002,
            "longitude": 79.5623399
        }
    },
    {
        "fuel_level": 95.03943424996056,
        "timestamp": 1724622161111,
        "speed": 0,
        "location": {
            "latitude": 13.429145000000002,
            "longitude": 79.5623399
        }
    },
    {
        "fuel_level": 95.03943424996056,
        "timestamp": 1724622289846,
        "speed": 10.538461538461538,
        "location": {
            "latitude": 13.429145000000002,
            "longitude": 79.5628470923077
        }
    },
    {
        "fuel_level": 96.9654030180346,
        "timestamp": 1724622409000,
        "speed": 46.61538461538461,
        "location": {
            "latitude": 13.428970500000004,
            "longitude": 79.57405646363635
        }
    },
    {
        "fuel_level": 100.75913242009135,
        "timestamp": 1724622535000,
        "speed": 49.833333333333336,
        "location": {
            "latitude": 13.425725563636366,
            "longitude": 79.58964137692307
        }
    },
    {
        "fuel_level": 100.75913242009135,
        "timestamp": 1724622665076,
        "speed": 49.833333333333336,
        "location": {
            "latitude": 13.418895469230769,
            "longitude": 79.60698893076923
        }
    },
    {
        "fuel_level": 100.85806697108069,
        "timestamp": 1724622790250,
        "speed": 49.833333333333336,
        "location": {
            "latitude": 13.412232784615385,
            "longitude": 79.62384606666667
        }
    },
    {
        "fuel_level": 100.85806697108069,
        "timestamp": 1724622915692,
        "speed": 47.666666666666664,
        "location": {
            "latitude": 13.408983024999998,
            "longitude": 79.6383929
        }
    },
    {
        "fuel_level": 100.75913242009135,
        "timestamp": 1724623040666,
        "speed": 47.666666666666664,
        "location": {
            "latitude": 13.408983024999998,
            "longitude": 79.651160375
        }
    },
    {
        "fuel_level": 100.41447137337549,
        "timestamp": 1724623161000,
        "speed": 44.15384615384615,
        "location": {
            "latitude": 13.408236163636362,
            "longitude": 79.66340175
        }
    },
    {
        "fuel_level": 100.18370368316295,
        "timestamp": 1724623286384,
        "speed": 41.84615384615385,
        "location": {
            "latitude": 13.408236163636362,
            "longitude": 79.6785177846154
        }
    },
    {
        "fuel_level": 99.4020554344441,
        "timestamp": 1724623409090,
        "speed": 41.72727272727273,
        "location": {
            "latitude": 13.408236163636362,
            "longitude": 79.69026207272726
        }
    },
    {
        "fuel_level": 99.28699955015743,
        "timestamp": 1724623537000,
        "speed": 41.84615384615385,
        "location": {
            "latitude": 13.408236163636362,
            "longitude": 79.70126676153846
        }
    },
    {
        "fuel_level": 97.70887007729115,
        "timestamp": 1724623656666,
        "speed": 41.84615384615385,
        "location": {
            "latitude": 13.40238956923077,
            "longitude": 79.71119254444443
        }
    },
    {
        "fuel_level": 97.70887007729115,
        "timestamp": 1724623782083,
        "speed": 42,
        "location": {
            "latitude": 13.40034901111111,
            "longitude": 79.72392049999999
        }
    },
    {
        "fuel_level": 97.68607910308316,
        "timestamp": 1724623904700,
        "speed": 42,
        "location": {
            "latitude": 13.3988928625,
            "longitude": 79.73622213000002
        }
    },
    {
        "fuel_level": 97.38461538461539,
        "timestamp": 1724624028700,
        "speed": 42,
        "location": {
            "latitude": 13.397755290000001,
            "longitude": 79.74594679
        }
    },
    {
        "fuel_level": 97.04959514170041,
        "timestamp": 1724624160500,
        "speed": 42,
        "location": {
            "latitude": 13.395759033333333,
            "longitude": 79.7579683
        }
    },
    {
        "fuel_level": 97.04959514170041,
        "timestamp": 1724624300333,
        "speed": 42,
        "location": {
            "latitude": 13.395759033333333,
            "longitude": 79.768557
        }
    },
    {
        "fuel_level": 96.83760683760686,
        "timestamp": 1724624428500,
        "speed": 39.875,
        "location": {
            "latitude": 13.395759033333333,
            "longitude": 79.7776910125
        }
    },
    {
        "fuel_level": 96.25506072874494,
        "timestamp": 1724624556444,
        "speed": 39.55555555555556,
        "location": {
            "latitude": 13.3950501625,
            "longitude": 79.78938627777778
        }
    },
    {
        "fuel_level": 95.42726279568384,
        "timestamp": 1724624691222,
        "speed": 39.875,
        "location": {
            "latitude": 13.388606622222222,
            "longitude": 79.80018977777777
        }
    },
    {
        "fuel_level": 95.10024088971458,
        "timestamp": 1724624816111,
        "speed": 39.875,
        "location": {
            "latitude": 13.379727366666666,
            "longitude": 79.80955385555555
        }
    },
    {
        "fuel_level": 94.95255232097337,
        "timestamp": 1724624946888,
        "speed": 42.111111111111114,
        "location": {
            "latitude": 13.372511622222223,
            "longitude": 79.81990366666666
        }
    },
    {
        "fuel_level": 94.95255232097337,
        "timestamp": 1724625073222,
        "speed": 42.111111111111114,
        "location": {
            "latitude": 13.366933111111111,
            "longitude": 79.82997827777778
        }
    },
    {
        "fuel_level": 94.79014406645985,
        "timestamp": 1724625205000,
        "speed": 42.111111111111114,
        "location": {
            "latitude": 13.356750877777777,
            "longitude": 79.8406143
        }
    },
    {
        "fuel_level": 94.24963924963923,
        "timestamp": 1724625372500,
        "speed": 42.111111111111114,
        "location": {
            "latitude": 13.34988279,
            "longitude": 79.8610545
        }
    },
    {
        "fuel_level": 94.24963924963923,
        "timestamp": 1724625502250,
        "speed": 39.22222222222222,
        "location": {
            "latitude": 13.344665800000001,
            "longitude": 79.872522475
        }
    },
    {
        "fuel_level": 93.72943722943721,
        "timestamp": 1724625622777,
        "speed": 34.333333333333336,
        "location": {
            "latitude": 13.336503581818182,
            "longitude": 79.88220496666665
        }
    },
    {
        "fuel_level": 93.37902837902837,
        "timestamp": 1724625755000,
        "speed": 34.333333333333336,
        "location": {
            "latitude": 13.335952262500001,
            "longitude": 79.89249595999999
        }
    },
    {
        "fuel_level": 93.34848484848483,
        "timestamp": 1724625889727,
        "speed": 34.333333333333336,
        "location": {
            "latitude": 13.334475109090905,
            "longitude": 79.90101995454545
        }
    },
    {
        "fuel_level": 93.30775285320739,
        "timestamp": 1724626013181,
        "speed": 34.333333333333336,
        "location": {
            "latitude": 13.334070930000001,
            "longitude": 79.91052707272728
        }
    },
    {
        "fuel_level": 92.31404958677686,
        "timestamp": 1724626135222,
        "speed": 39.8,
        "location": {
            "latitude": 13.334070930000001,
            "longitude": 79.92347847777776
        }
    },
    {
        "fuel_level": 92.26070226070225,
        "timestamp": 1724626265111,
        "speed": 39.8,
        "location": {
            "latitude": 13.328619788888888,
            "longitude": 79.9346555111111
        }
    },
    {
        "fuel_level": 91.47186147186147,
        "timestamp": 1724626389900,
        "speed": 39.916666666666664,
        "location": {
            "latitude": 13.326676244444444,
            "longitude": 79.94718112
        }
    },
    {
        "fuel_level": 89.71548059783355,
        "timestamp": 1724626523666,
        "speed": 39.916666666666664,
        "location": {
            "latitude": 13.32445346,
            "longitude": 79.95795425
        }
    },
    {
        "fuel_level": 89.17381637969872,
        "timestamp": 1724626657583,
        "speed": 39.916666666666664,
        "location": {
            "latitude": 13.319337874999997,
            "longitude": 79.96777619999999
        }
    },
    {
        "fuel_level": 89.05920060331823,
        "timestamp": 1724626784666,
        "speed": 40.111111111111114,
        "location": {
            "latitude": 13.315956075000003,
            "longitude": 79.98193996666666
        }
    },
    {
        "fuel_level": 88.35344394167923,
        "timestamp": 1724626907916,
        "speed": 43.166666666666664,
        "location": {
            "latitude": 13.314291622222223,
            "longitude": 79.99641523333334
        }
    },
    {
        "fuel_level": 86.40648567119156,
        "timestamp": 1724627028250,
        "speed": 43.166666666666664,
        "location": {
            "latitude": 13.311772033333332,
            "longitude": 80.01210162500001
        }
    },
    {
        "fuel_level": 86.40648567119156,
        "timestamp": 1724627148083,
        "speed": 43.166666666666664,
        "location": {
            "latitude": 13.31101564166667,
            "longitude": 80.02562788333334
        }
    },
    {
        "fuel_level": 85.290605966403,
        "timestamp": 1724627278583,
        "speed": 48.07692307692308,
        "location": {
            "latitude": 13.310618424999996,
            "longitude": 80.03951607500001
        }
    },
    {
        "fuel_level": 84.77180552197392,
        "timestamp": 1724627401250,
        "speed": 48.07692307692308,
        "location": {
            "latitude": 13.310133841666664,
            "longitude": 80.04642231666666
        }
    },
    {
        "fuel_level": 84.77180552197392,
        "timestamp": 1724627534076,
        "speed": 43.166666666666664,
        "location": {
            "latitude": 13.306714399999999,
            "longitude": 80.05278059230767
        }
    },
    {
        "fuel_level": 84.54713933091192,
        "timestamp": 1724627659500,
        "speed": 38.5,
        "location": {
            "latitude": 13.294766738461542,
            "longitude": 80.06594011666668
        }
    },
    {
        "fuel_level": 82.29528105482304,
        "timestamp": 1724627779250,
        "speed": 48.07692307692308,
        "location": {
            "latitude": 13.287379116666665,
            "longitude": 80.07788369999999
        }
    },
    {
        "fuel_level": 82.29528105482304,
        "timestamp": 1724627929166,
        "speed": 48.166666666666664,
        "location": {
            "latitude": 13.280835641666668,
            "longitude": 80.08872939166666
        }
    },
    {
        "fuel_level": 81.95038167938932,
        "timestamp": 1724628047181,
        "speed": 48.18181818181818,
        "location": {
            "latitude": 13.276324666666667,
            "longitude": 80.10068966363636
        }
    },
    {
        "fuel_level": 81.95038167938932,
        "timestamp": 1724628175384,
        "speed": 48.18181818181818,
        "location": {
            "latitude": 13.273344954545456,
            "longitude": 80.11568136923077
        }
    },
    {
        "fuel_level": 81.95038167938932,
        "timestamp": 1724628295700,
        "speed": 48.18181818181818,
        "location": {
            "latitude": 13.26644595,
            "longitude": 80.13105479999999
        }
    },
    {
        "fuel_level": 81.95038167938932,
        "timestamp": 1724628425615,
        "speed": 48.18181818181818,
        "location": {
            "latitude": 13.26644595,
            "longitude": 80.14853881538463
        }
    },
    {
        "fuel_level": 81.53053435114505,
        "timestamp": 1724628553000,
        "speed": 46,
        "location": {
            "latitude": 13.26644595,
            "longitude": 80.14853881538463
        }
    },
    {
        "fuel_level": 80.85877862595422,
        "timestamp": 1724628723800,
        "speed": 44.30769230769231,
        "location": {
            "latitude": 13.285379119999998,
            "longitude": 80.14903014000001
        }
    },
    {
        "fuel_level": 80.78978273634763,
        "timestamp": 1724628847181,
        "speed": 35.18181818181818,
        "location": {
            "latitude": 13.295472227272727,
            "longitude": 80.1536538
        }
    },
    {
        "fuel_level": 80.5763358778626,
        "timestamp": 1724628977909,
        "speed": 28.125,
        "location": {
            "latitude": 13.299147363636363,
            "longitude": 80.15512646363635
        }
    },
    {
        "fuel_level": 79.37474290415464,
        "timestamp": 1724629100555,
        "speed": 28.666666666666668,
        "location": {
            "latitude": 13.30421958888889,
            "longitude": 80.16362866666667
        }
    },
    {
        "fuel_level": 79.27853192559074,
        "timestamp": 1724629227125,
        "speed": 28.125,
        "location": {
            "latitude": 13.3091185,
            "longitude": 80.17197268749999
        }
    },
    {
        "fuel_level": 77.58597285067874,
        "timestamp": 1724629355777,
        "speed": 28.666666666666668,
        "location": {
            "latitude": 13.315376811111111,
            "longitude": 80.17938348888887
        }
    },
    {
        "fuel_level": 77.58597285067874,
        "timestamp": 1724629490700,
        "speed": 28.125,
        "location": {
            "latitude": 13.32174527,
            "longitude": 80.1835258
        }
    },
    {
        "fuel_level": 77.58597285067874,
        "timestamp": 1724629618000,
        "speed": 28.125,
        "location": {
            "latitude": 13.32760185,
            "longitude": 80.186479125
        }
    },
    {
        "fuel_level": 77.58597285067874,
        "timestamp": 1724629746444,
        "speed": 28.666666666666668,
        "location": {
            "latitude": 13.32760185,
            "longitude": 80.19018403333334
        }
    },
    {
        "fuel_level": 77.58597285067874,
        "timestamp": 1724629873375,
        "speed": 25.5,
        "location": {
            "latitude": 13.32760185,
            "longitude": 80.1944289375
        }
    },
    {
        "fuel_level": 77.0487682252388,
        "timestamp": 1724630001222,
        "speed": 29.22222222222222,
        "location": {
            "latitude": 13.32760185,
            "longitude": 80.19948903333334
        }
    },
    {
        "fuel_level": 77.0487682252388,
        "timestamp": 1724630136777,
        "speed": 29.22222222222222,
        "location": {
            "latitude": 13.326187911111111,
            "longitude": 80.20532662222223
        }
    },
    {
        "fuel_level": 76.99597787833082,
        "timestamp": 1724630264250,
        "speed": 40,
        "location": {
            "latitude": 13.318422733333334,
            "longitude": 80.21166475
        }
    },
    {
        "fuel_level": 75.89366515837102,
        "timestamp": 1724630390777,
        "speed": 40,
        "location": {
            "latitude": 13.3100193375,
            "longitude": 80.21507533333335
        }
    },
    {
        "fuel_level": 75.25407239819002,
        "timestamp": 1724630527300,
        "speed": 42.22222222222222,
        "location": {
            "latitude": 13.296873844444445,
            "longitude": 80.22623795000001
        }
    },
    {
        "fuel_level": 75.12132352941177,
        "timestamp": 1724630661100,
        "speed": 42.22222222222222,
        "location": {
            "latitude": 13.288355450000001,
            "longitude": 80.24092945999999
        }
    },
    {
        "fuel_level": 75.18049270990446,
        "timestamp": 1724630783222,
        "speed": 40,
        "location": {
            "latitude": 13.284274790000001,
            "longitude": 80.25240125555555
        }
    },
    {
        "fuel_level": 75.18049270990446,
        "timestamp": 1724630910500,
        "speed": 36.111111111111114,
        "location": {
            "latitude": 13.282544411111111,
            "longitude": 80.26023281
        }
    },
    {
        "fuel_level": 74.67239819004524,
        "timestamp": 1724631038777,
        "speed": 35.3,
        "location": {
            "latitude": 13.277512960000001,
            "longitude": 80.26459551111111
        }
    },
    {
        "fuel_level": 74.29424333836099,
        "timestamp": 1724631169727,
        "speed": 24.5,
        "location": {
            "latitude": 13.268458288888887,
            "longitude": 80.27339177272728
        }
    },
    {
        "fuel_level": 72.14335664335664,
        "timestamp": 1724631295400,
        "speed": 21.818181818181817,
        "location": {
            "latitude": 13.262365863636365,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724631413818,
        "speed": 14.3,
        "location": {
            "latitude": 13.25814963,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724631548400,
        "speed": 10.090909090909092,
        "location": {
            "latitude": 13.2528833,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724631675125,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724631803000,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724631930500,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724632061000,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724632189454,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724632330600,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724632445800,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.67307692307692,
        "timestamp": 1724632576916,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.66185897435896,
        "timestamp": 1724632697125,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.64201183431952,
        "timestamp": 1724632822461,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.63621794871794,
        "timestamp": 1724632947583,
        "speed": 0,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.63621794871794,
        "timestamp": 1724633058300,
        "speed": 18.2,
        "location": {
            "latitude": 13.2524583,
            "longitude": 80.27460659999998
        }
    },
    {
        "fuel_level": 71.63621794871794,
        "timestamp": 1724633196777,
        "speed": 18.2,
        "location": {
            "latitude": 13.2503523,
            "longitude": 80.27442562
        }
    },
    {
        "fuel_level": 71.49145299145299,
        "timestamp": 1724633324375,
        "speed": 18.2,
        "location": {
            "latitude": 13.241363477777778,
            "longitude": 80.27402995555556
        }
    },
    {
        "fuel_level": 71.22863247863248,
        "timestamp": 1724633451888,
        "speed": 18.2,
        "location": {
            "latitude": 13.232183062500003,
            "longitude": 80.27389788750001
        }
    },
    {
        "fuel_level": 71.22863247863248,
        "timestamp": 1724633565636,
        "speed": 11.333333333333334,
        "location": {
            "latitude": 13.222099422222222,
            "longitude": 80.27323957777777
        }
    },
    {
        "fuel_level": 70.83916083916084,
        "timestamp": 1724633707538,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70,
        "timestamp": 1724633834307,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70,
        "timestamp": 1724633959583,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70,
        "timestamp": 1724634084923,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70,
        "timestamp": 1724634209916,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70,
        "timestamp": 1724634330250,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70,
        "timestamp": 1724634455538,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70,
        "timestamp": 1724634580666,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70.00320512820512,
        "timestamp": 1724634702363,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70.0034965034965,
        "timestamp": 1724634826153,
        "speed": 0,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.2731566
        }
    },
    {
        "fuel_level": 70.55608974358975,
        "timestamp": 1724634946416,
        "speed": 0.9,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.27392355833332
        }
    },
    {
        "fuel_level": 75.02920608802962,
        "timestamp": 1724635075545,
        "speed": 0.9,
        "location": {
            "latitude": 13.221385,
            "longitude": 80.27792313636364
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724635212600,
        "speed": 0.9,
        "location": {
            "latitude": 13.221642460000004,
            "longitude": 80.27910499
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724635337555,
        "speed": 0.9,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724635451833,
        "speed": 0,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724635578416,
        "speed": 0,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724635703461,
        "speed": 0,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724635837833,
        "speed": 0,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724635960250,
        "speed": 0,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724636085692,
        "speed": 0,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724636214818,
        "speed": 0,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724636331000,
        "speed": 0,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724636453083,
        "speed": 0,
        "location": {
            "latitude": 13.2216733,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724636581909,
        "speed": 0,
        "location": {
            "latitude": 13.221673300000003,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724636706923,
        "speed": 0,
        "location": {
            "latitude": 13.221673300000003,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724636836000,
        "speed": 0,
        "location": {
            "latitude": 13.221673300000003,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724636949100,
        "speed": 0,
        "location": {
            "latitude": 13.221673300000003,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724637079777,
        "speed": 0,
        "location": {
            "latitude": 13.221673300000003,
            "longitude": 80.27910999999999
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724637198400,
        "speed": 0,
        "location": {
            "latitude": 13.221673300000003,
            "longitude": 80.27911
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724637326571,
        "speed": 0,
        "location": {
            "latitude": 13.221673300000003,
            "longitude": 80.27911000000002
        }
    },
    {
        "fuel_level": 75.04524886877827,
        "timestamp": 1724637471833,
        "speed": 1.3333333333333333,
        "location": {
            "latitude": 13.221673300000003,
            "longitude": 80.27941065833333
        }
    },
    {
        "fuel_level": 75.04524886877827,
        "timestamp": 1724637590333,
        "speed": 2.6666666666666665,
        "location": {
            "latitude": 13.221673300000003,
            "longitude": 80.28092271666667
        }
    },
    {
        "fuel_level": 75.7786576168929,
        "timestamp": 1724637733000,
        "speed": 2.6666666666666665,
        "location": {
            "latitude": 13.221673308333335,
            "longitude": 80.28096064166668
        }
    },
    {
        "fuel_level": 75.80693815987932,
        "timestamp": 1724637889666,
        "speed": 2.6666666666666665,
        "location": {
            "latitude": 13.221767441666666,
            "longitude": 80.28131660000001
        }
    },
    {
        "fuel_level": 75.83521870286576,
        "timestamp": 1724638018666,
        "speed": 1.3333333333333333,
        "location": {
            "latitude": 13.222061241666664,
            "longitude": 80.2815516
        }
    },
    {
        "fuel_level": 76.08345902463549,
        "timestamp": 1724638138000,
        "speed": 0.6666666666666666,
        "location": {
            "latitude": 13.222094999999998,
            "longitude": 80.2815516
        }
    },
    {
        "fuel_level": 76.11065405183052,
        "timestamp": 1724638266777,
        "speed": 0,
        "location": {
            "latitude": 13.222094999999998,
            "longitude": 80.2815516
        }
    },
    {
        "fuel_level": 76.12273755656108,
        "timestamp": 1724638406500,
        "speed": 0,
        "location": {
            "latitude": 13.222094999999998,
            "longitude": 80.2815516
        }
    },
    {
        "fuel_level": 76.12273755656108,
        "timestamp": 1724638543545,
        "speed": 0,
        "location": {
            "latitude": 13.222094999999998,
            "longitude": 80.2815516
        }
    },
    {
        "fuel_level": 76.11065405183052,
        "timestamp": 1724638664900,
        "speed": 0,
        "location": {
            "latitude": 13.222103489999999,
            "longitude": 80.2815516
        }
    },
    {
        "fuel_level": 76.11065405183052,
        "timestamp": 1724638789500,
        "speed": 0,
        "location": {
            "latitude": 13.222103489999999,
            "longitude": 80.28153026999999
        }
    },
    {
        "fuel_level": 75.14734162895927,
        "timestamp": 1724638927777,
        "speed": 0,
        "location": {
            "latitude": 13.222103489999999,
            "longitude": 80.281269525
        }
    },
    {
        "fuel_level": 74.73179761415055,
        "timestamp": 1724639061444,
        "speed": 1.1111111111111112,
        "location": {
            "latitude": 13.222103489999999,
            "longitude": 80.28106330000001
        }
    },
    {
        "fuel_level": 74.19871794871796,
        "timestamp": 1724639207222,
        "speed": 1.3636363636363635,
        "location": {
            "latitude": 13.221665888888888,
            "longitude": 80.27969664444444
        }
    },
    {
        "fuel_level": 74.10470085470085,
        "timestamp": 1724639331545,
        "speed": 6.222222222222222,
        "location": {
            "latitude": 13.221665888888888,
            "longitude": 80.27830902222223
        }
    },
    {
        "fuel_level": 74.09401709401709,
        "timestamp": 1724639460875,
        "speed": 10.75,
        "location": {
            "latitude": 13.221665888888888,
            "longitude": 80.27786526363636
        }
    },
    {
        "fuel_level": 72.19711538461539,
        "timestamp": 1724639590222,
        "speed": 11.11111111111111,
        "location": {
            "latitude": 13.223336055555556,
            "longitude": 80.2760851625
        }
    },
    {
        "fuel_level": 72.19711538461539,
        "timestamp": 1724639710272,
        "speed": 11.11111111111111,
        "location": {
            "latitude": 13.233102245454546,
            "longitude": 80.2760851625
        }
    },
    {
        "fuel_level": 72.19711538461539,
        "timestamp": 1724639838333,
        "speed": 11.363636363636363,
        "location": {
            "latitude": 13.234336309090912,
            "longitude": 80.2760851625
        }
    },
    {
        "fuel_level": 72.3974358974359,
        "timestamp": 1724639964111,
        "speed": 21.7,
        "location": {
            "latitude": 13.234336309090912,
            "longitude": 80.27954734444444
        }
    },
    {
        "fuel_level": 72.3974358974359,
        "timestamp": 1724640092000,
        "speed": 15.583333333333334,
        "location": {
            "latitude": 13.234336309090912,
            "longitude": 80.28296495454543
        }
    },
    {
        "fuel_level": 72.3974358974359,
        "timestamp": 1724640221500,
        "speed": 11.363636363636363,
        "location": {
            "latitude": 13.234336309090912,
            "longitude": 80.28842546000001
        }
    },
    {
        "fuel_level": 72.3974358974359,
        "timestamp": 1724640341666,
        "speed": 11.363636363636363,
        "location": {
            "latitude": 13.232468959999997,
            "longitude": 80.29493133333334
        }
    },
    {
        "fuel_level": 72.49423076923078,
        "timestamp": 1724640467833,
        "speed": 11.363636363636363,
        "location": {
            "latitude": 13.229854824999999,
            "longitude": 80.29805745833333
        }
    },
    {
        "fuel_level": 72.49423076923078,
        "timestamp": 1724640600083,
        "speed": 9.583333333333334,
        "location": {
            "latitude": 13.228442033333332,
            "longitude": 80.29885267499999
        }
    },
    {
        "fuel_level": 73.14423076923079,
        "timestamp": 1724640734500,
        "speed": 0.5,
        "location": {
            "latitude": 13.227257716666664,
            "longitude": 80.29885267499999
        }
    },
    {
        "fuel_level": 73.175,
        "timestamp": 1724640854750,
        "speed": 0.4166666666666667,
        "location": {
            "latitude": 13.22716528,
            "longitude": 80.29885267499999
        }
    },
    {
        "fuel_level": 73.82760180995476,
        "timestamp": 1724640976600,
        "speed": 0,
        "location": {
            "latitude": 13.226960000000002,
            "longitude": 80.29885267499999
        }
    },
    {
        "fuel_level": 74.96970839617897,
        "timestamp": 1724641117777,
        "speed": 0,
        "location": {
            "latitude": 13.226960000000002,
            "longitude": 80.29868660000001
        }
    },
    {
        "fuel_level": 75.04113533525297,
        "timestamp": 1724641257090,
        "speed": 0,
        "location": {
            "latitude": 13.226960000000002,
            "longitude": 80.29868660000001
        }
    },
    {
        "fuel_level": 75.04319210201561,
        "timestamp": 1724641370928,
        "speed": 0,
        "location": {
            "latitude": 13.226960000000002,
            "longitude": 80.2986866
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724641504000,
        "speed": 0,
        "location": {
            "latitude": 13.226960000000002,
            "longitude": 80.2986866
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724641634909,
        "speed": 0,
        "location": {
            "latitude": 13.22696,
            "longitude": 80.2986866
        }
    },
    {
        "fuel_level": 75.04524886877826,
        "timestamp": 1724641750833,
        "speed": 0,
        "location": {
            "latitude": 13.22696,
            "longitude": 80.2986866
        }
    },
    {
        "fuel_level": 75.04319210201561,
        "timestamp": 1724641882500,
        "speed": 0,
        "location": {
            "latitude": 13.22696,
            "longitude": 80.2986866
        }
    },
    {
        "fuel_level": 75.04319210201561,
        "timestamp": 1724642006000,
        "speed": 0,
        "location": {
            "latitude": 13.22696,
            "longitude": 80.2986866
        }
    },
    {
        "fuel_level": 74.78714177978884,
        "timestamp": 1724642138357,
        "speed": 0,
        "location": {
            "latitude": 13.22696,
            "longitude": 80.29852772222222
        }
    },
    {
        "fuel_level": 73.74547511312218,
        "timestamp": 1724642260181,
        "speed": 0,
        "location": {
            "latitude": 13.226971266666666,
            "longitude": 80.29820329999998
        }
    },
    {
        "fuel_level": 73.74547511312218,
        "timestamp": 1724642380714,
        "speed": 0,
        "location": {
            "latitude": 13.226993742857145,
            "longitude": 80.2981089
        }
    },
    {
        "fuel_level": 75.70187956839541,
        "timestamp": 1724642530833,
        "speed": 0,
        "location": {
            "latitude": 13.227010049999999,
            "longitude": 80.29772302857143
        }
    },
    {
        "fuel_level": 75.70187956839541,
        "timestamp": 1724642654769,
        "speed": 0.23076923076923078,
        "location": {
            "latitude": 13.227010049999999,
            "longitude": 80.2974354
        }
    },
    {
        "fuel_level": 75.70187956839541,
        "timestamp": 1724642786666,
        "speed": 0,
        "location": {
            "latitude": 13.227010049999999,
            "longitude": 80.297365
        }
    },
    {
        "fuel_level": 76.43356643356644,
        "timestamp": 1724642906384,
        "speed": 0.23076923076923078,
        "location": {
            "latitude": 13.227010049999999,
            "longitude": 80.297365
        }
    },
    {
        "fuel_level": 77.01168929110105,
        "timestamp": 1724643026090,
        "speed": 0,
        "location": {
            "latitude": 13.226929076923076,
            "longitude": 80.29715547692307
        }
    },
    {
        "fuel_level": 79.0045248868778,
        "timestamp": 1724643151250,
        "speed": 0,
        "location": {
            "latitude": 13.226879999999996,
            "longitude": 80.29708159999998
        }
    },
    {
        "fuel_level": 79.23453996983407,
        "timestamp": 1724643267875,
        "speed": 0,
        "location": {
            "latitude": 13.226604683333333,
            "longitude": 80.29708159999998
        }
    },
    {
        "fuel_level": 79.23453996983407,
        "timestamp": 1724643404636,
        "speed": 0,
        "location": {
            "latitude": 13.226501646153842,
            "longitude": 80.29708159999998
        }
    },
    {
        "fuel_level": 79.23453996983407,
        "timestamp": 1724643535583,
        "speed": 0.23076923076923078,
        "location": {
            "latitude": 13.226501646153842,
            "longitude": 80.29734550000002
        }
    },
    {
        "fuel_level": 79.0045248868778,
        "timestamp": 1724643645307,
        "speed": 0.23076923076923078,
        "location": {
            "latitude": 13.226501646153842,
            "longitude": 80.29756306923079
        }
    },
    {
        "fuel_level": 76.99321266968325,
        "timestamp": 1724643775000,
        "speed": 0.42857142857142855,
        "location": {
            "latitude": 13.226686261538463,
            "longitude": 80.2975946
        }
    },
    {
        "fuel_level": 72.17307692307692,
        "timestamp": 1724643905692,
        "speed": 0.42857142857142855,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29797139230769
        }
    },
    {
        "fuel_level": 72.17307692307692,
        "timestamp": 1724644037142,
        "speed": 0.42857142857142855,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.2989815285714
        }
    },
    {
        "fuel_level": 72.17307692307692,
        "timestamp": 1724644161181,
        "speed": 0.42857142857142855,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.51923076923076,
        "timestamp": 1724644314750,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.51923076923076,
        "timestamp": 1724644438333,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.51923076923076,
        "timestamp": 1724644563750,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.51923076923076,
        "timestamp": 1724644688666,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.52083333333331,
        "timestamp": 1724644804000,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.5224358974359,
        "timestamp": 1724644934538,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.52366863905326,
        "timestamp": 1724645059416,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.52366863905326,
        "timestamp": 1724645185000,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.52366863905326,
        "timestamp": 1724645314923,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.52307692307693,
        "timestamp": 1724645444400,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.52307692307693,
        "timestamp": 1724645565692,
        "speed": 0,
        "location": {
            "latitude": 13.226816600000005,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.51923076923075,
        "timestamp": 1724645696714,
        "speed": 0.5,
        "location": {
            "latitude": 13.226878992857147,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.34478021978022,
        "timestamp": 1724645828250,
        "speed": 10.5,
        "location": {
            "latitude": 13.228143991666665,
            "longitude": 80.29900999999998
        }
    },
    {
        "fuel_level": 72.34478021978022,
        "timestamp": 1724645952111,
        "speed": 10.5,
        "location": {
            "latitude": 13.230670122222222,
            "longitude": 80.2987205
        }
    },
    {
        "fuel_level": 71.55929487179486,
        "timestamp": 1724646078666,
        "speed": 10.5,
        "location": {
            "latitude": 13.233108850000002,
            "longitude": 80.29295181111111
        }
    },
    {
        "fuel_level": 70.73878205128204,
        "timestamp": 1724646208000,
        "speed": 10.5,
        "location": {
            "latitude": 13.234484258333332,
            "longitude": 80.28670841666667
        }
    },
    {
        "fuel_level": 70.04157885493503,
        "timestamp": 1724646336500,
        "speed": 17.666666666666668,
        "location": {
            "latitude": 13.235303566666667,
            "longitude": 80.28252509166667
        }
    },
    {
        "fuel_level": 70.04157885493503,
        "timestamp": 1724646459909,
        "speed": 14.727272727272727,
        "location": {
            "latitude": 13.235963145454546,
            "longitude": 80.27932078333333
        }
    },
    {
        "fuel_level": 68.96557780119426,
        "timestamp": 1724646584384,
        "speed": 10.272727272727273,
        "location": {
            "latitude": 13.239883030769231,
            "longitude": 80.27615343636363
        }
    },
    {
        "fuel_level": 68.90618513906188,
        "timestamp": 1724646712090,
        "speed": 10.272727272727273,
        "location": {
            "latitude": 13.248252981818183,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 67.19593192195931,
        "timestamp": 1724646835214,
        "speed": 10.272727272727273,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 67.0303326810176,
        "timestamp": 1724646959000,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.08828006088281,
        "timestamp": 1724647086923,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724647206700,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724647343000,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724647478416,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724647606500,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724647727545,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724647853250,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724647984000,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724648104727,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724648234461,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724648365000,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724648495461,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724648629166,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724648751000,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724648881666,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724649011454,
        "speed": 0,
        "location": {
            "latitude": 13.249545000000003,
            "longitude": 80.2742383
        }
    },
    {
        "fuel_level": 66.00456621004568,
        "timestamp": 1724649140818,
        "speed": 0,
        "location": {
            "latitude": 13.249648881818178,
            "longitude": 80.27424908181816
        }
    },
    {
        "fuel_level": 65.87380655873807,
        "timestamp": 1724649259166,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999997
        }
    },
    {
        "fuel_level": 65.07420091324201,
        "timestamp": 1724649385000,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999997
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724649515230,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724649638636,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724649762666,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999997
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724649895615,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999997
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724650026000,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724650156615,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724650281250,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999997
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724650402000,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724650547076,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724650677181,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724650805666,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724650932625,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724651060222,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724651196222,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724651323375,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724651451111,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724651578875,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724651693428,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724651823272,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724651954500,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724652086000,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724652217888,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724652345375,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27425
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724652468909,
        "speed": 0,
        "location": {
            "latitude": 13.2496616,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724652606900,
        "speed": 0,
        "location": {
            "latitude": 13.249661599999998,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724652727200,
        "speed": 0,
        "location": {
            "latitude": 13.2496616,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65,
        "timestamp": 1724652854500,
        "speed": 0,
        "location": {
            "latitude": 13.2496616,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65.03320880033209,
        "timestamp": 1724652978545,
        "speed": 0,
        "location": {
            "latitude": 13.249867972727275,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 65.72229140722294,
        "timestamp": 1724653095818,
        "speed": 0,
        "location": {
            "latitude": 13.250578627272729,
            "longitude": 80.27424999999998
        }
    },
    {
        "fuel_level": 66.82648401826482,
        "timestamp": 1724653238777,
        "speed": 0,
        "location": {
            "latitude": 13.250600000000002,
            "longitude": 80.27416493636363
        }
    },
    {
        "fuel_level": 67.00913242009132,
        "timestamp": 1724653363500,
        "speed": 0.38461538461538464,
        "location": {
            "latitude": 13.250600000000002,
            "longitude": 80.2741416
        }
    },
    {
        "fuel_level": 67.00913242009132,
        "timestamp": 1724653488400,
        "speed": 0,
        "location": {
            "latitude": 13.250600000000002,
            "longitude": 80.2741416
        }
    },
    {
        "fuel_level": 67.45872848612575,
        "timestamp": 1724653615769,
        "speed": 0,
        "location": {
            "latitude": 13.250626084615387,
            "longitude": 80.2741416
        }
    },
    {
        "fuel_level": 69.68282402528978,
        "timestamp": 1724653733454,
        "speed": 0,
        "location": {
            "latitude": 13.250710690909091,
            "longitude": 80.27402865384616
        }
    },
    {
        "fuel_level": 74.1491798642534,
        "timestamp": 1724653870250,
        "speed": 0,
        "location": {
            "latitude": 13.250766600000002,
            "longitude": 80.27390660000002
        }
    },
    {
        "fuel_level": 94.32373148106197,
        "timestamp": 1724653994625,
        "speed": 0,
        "location": {
            "latitude": 13.250766600000002,
            "longitude": 80.27390660000002
        }
    },
    {
        "fuel_level": 136.61081156018778,
        "timestamp": 1724654121888,
        "speed": 0,
        "location": {
            "latitude": 13.250766600000002,
            "longitude": 80.27390660000002
        }
    },
    {
        "fuel_level": 196.11198459003364,
        "timestamp": 1724654256363,
        "speed": 0,
        "location": {
            "latitude": 13.250766600000002,
            "longitude": 80.27390660000002
        }
    },
    {
        "fuel_level": 259.57877006934376,
        "timestamp": 1724654386285,
        "speed": 0,
        "location": {
            "latitude": 13.250766600000002,
            "longitude": 80.27390660000002
        }
    },
    {
        "fuel_level": 318.6341991341991,
        "timestamp": 1724654512600,
        "speed": 0,
        "location": {
            "latitude": 13.250766600000002,
            "longitude": 80.27394910000001
        }
    },
    {
        "fuel_level": 363.5735930735931,
        "timestamp": 1724654654200,
        "speed": 0,
        "location": {
            "latitude": 13.250766600000002,
            "longitude": 80.27398059230768
        }
    },
    {
        "fuel_level": 378.1583694083694,
        "timestamp": 1724654777333,
        "speed": 0,
        "location": {
            "latitude": 13.250766600000002,
            "longitude": 80.27399160000002
        }
    },
    {
        "fuel_level": 379.34824434824435,
        "timestamp": 1724654900923,
        "speed": 0.46153846153846156,
        "location": {
            "latitude": 13.250774838461542,
            "longitude": 80.27399160000002
        }
    },
    {
        "fuel_level": 379.7186147186147,
        "timestamp": 1724655020000,
        "speed": 0.46153846153846156,
        "location": {
            "latitude": 13.25139477777778,
            "longitude": 80.27399160000002
        }
    },
    {
        "fuel_level": 379.8018648018648,
        "timestamp": 1724655138272,
        "speed": 0.46153846153846156,
        "location": {
            "latitude": 13.251771600000003,
            "longitude": 80.27398059230768
        }
    },
    {
        "fuel_level": 382.51546072974645,
        "timestamp": 1724655269785,
        "speed": 0.46153846153846156,
        "location": {
            "latitude": 13.251771600000003,
            "longitude": 80.27389266363637
        }
    },
    {
        "fuel_level": 384.37693259121824,
        "timestamp": 1724655403357,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000003,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.5926800472255,
        "timestamp": 1724655531000,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000003,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.5926800472255,
        "timestamp": 1724655657000,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000003,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.5926800472255,
        "timestamp": 1724655785909,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000003,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.5926800472255,
        "timestamp": 1724655923000,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000001,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.43722943722946,
        "timestamp": 1724656047700,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000001,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.43722943722946,
        "timestamp": 1724656170444,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000001,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.43290043290045,
        "timestamp": 1724656295777,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.3939393939394,
        "timestamp": 1724656430444,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.3530543530544,
        "timestamp": 1724656558000,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 384.06926406926397,
        "timestamp": 1724656686777,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.87445887445887,
        "timestamp": 1724656819750,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.8600288600289,
        "timestamp": 1724656941222,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.8600288600289,
        "timestamp": 1724657077111,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.8672438672438,
        "timestamp": 1724657204250,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.8672438672438,
        "timestamp": 1724657332222,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.8672438672438,
        "timestamp": 1724657467555,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.87926887926886,
        "timestamp": 1724657595125,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.87926887926886,
        "timestamp": 1724657720700,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.8672438672439,
        "timestamp": 1724657865625,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.8672438672439,
        "timestamp": 1724657993222,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.86580086580085,
        "timestamp": 1724658128777,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.8504088504088,
        "timestamp": 1724658258222,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.7253487253487,
        "timestamp": 1724658383777,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.7253487253487,
        "timestamp": 1724658515222,
        "speed": 0,
        "location": {
            "latitude": 13.2517716,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.7253487253487,
        "timestamp": 1724658634909,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000001,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.7253487253487,
        "timestamp": 1724658763083,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000001,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.71753246753246,
        "timestamp": 1724658883454,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000001,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.7175324675324,
        "timestamp": 1724659009583,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000003,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.7175324675324,
        "timestamp": 1724659140181,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000003,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.69933097205825,
        "timestamp": 1724659268333,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000001,
            "longitude": 80.27386160000002
        }
    },
    {
        "fuel_level": 383.66522366522366,
        "timestamp": 1724659386833,
        "speed": 0,
        "location": {
            "latitude": 13.251771600000001,
            "longitude": 80.27386929999999
        }
    },
    {
        "fuel_level": 383.65981240981245,
        "timestamp": 1724659515625,
        "speed": 0,
        "location": {
            "latitude": 13.251608158333331,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724659636000,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724659755636,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724659875000,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724660008166,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724660125545,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724660259166,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724660385416,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724660509600,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724660639166,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724660765230,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724660890416,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724661011750,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724661141900,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724661261166,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724661396461,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724661523000,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724661642000,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.65800865800867,
        "timestamp": 1724661770100,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724661890777,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724662025444,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724662152875,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724662273125,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724662400555,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724662528625,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724662656666,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724662791222,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.6580086580086,
        "timestamp": 1724662919500,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27387
        }
    },
    {
        "fuel_level": 383.64117364117357,
        "timestamp": 1724663045866,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.27391186000001
        }
    },
    {
        "fuel_level": 383.63906926406924,
        "timestamp": 1724663181222,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.2739183
        }
    },
    {
        "fuel_level": 383.60028860028854,
        "timestamp": 1724663316888,
        "speed": 0,
        "location": {
            "latitude": 13.251593299999998,
            "longitude": 80.2739183
        }
    },
    {
        "fuel_level": 383.5353535353536,
        "timestamp": 1724663443888,
        "speed": 1.7777777777777777,
        "location": {
            "latitude": 13.251732377777778,
            "longitude": 80.27398923333334
        }
    },
    {
        "fuel_level": 382.9028379028379,
        "timestamp": 1724663565875,
        "speed": 16.1,
        "location": {
            "latitude": 13.25229764,
            "longitude": 80.274813275
        }
    },
    {
        "fuel_level": 378.5606060606061,
        "timestamp": 1724663696600,
        "speed": 16.1,
        "location": {
            "latitude": 13.25229764,
            "longitude": 80.2808048
        }
    },
    {
        "fuel_level": 373.9805194805194,
        "timestamp": 1724663825000,
        "speed": 16.1,
        "location": {
            "latitude": 13.25229764,
            "longitude": 80.28925944999999
        }
    },
    {
        "fuel_level": 373.64935064935065,
        "timestamp": 1724663957818,
        "speed": 16.1,
        "location": {
            "latitude": 13.25229764,
            "longitude": 80.29073659999999
        }
    },
    {
        "fuel_level": 373.25265643447455,
        "timestamp": 1724664090125,
        "speed": 0,
        "location": {
            "latitude": 13.252168299999997,
            "longitude": 80.2907366
        }
    },
    {
        "fuel_level": 372.6109307359307,
        "timestamp": 1724664218777,
        "speed": 0,
        "location": {
            "latitude": 13.252168299999997,
            "longitude": 80.2907366
        }
    },
    {
        "fuel_level": 372.3232323232323,
        "timestamp": 1724664353222,
        "speed": 0,
        "location": {
            "latitude": 13.252168299999997,
            "longitude": 80.2907366
        }
    },
    {
        "fuel_level": 372.3208273208273,
        "timestamp": 1724664476000,
        "speed": 0,
        "location": {
            "latitude": 13.252168299999997,
            "longitude": 80.2907366
        }
    },
    {
        "fuel_level": 372.3208273208273,
        "timestamp": 1724664593111,
        "speed": 0,
        "location": {
            "latitude": 13.252168299999997,
            "longitude": 80.2907366
        }
    },
    {
        "fuel_level": 372.3191094619666,
        "timestamp": 1724664727000,
        "speed": 0,
        "location": {
            "latitude": 13.252168299999997,
            "longitude": 80.2907366
        }
    },
    {
        "fuel_level": 372.31842231842234,
        "timestamp": 1724664898888,
        "speed": 0,
        "location": {
            "latitude": 13.252168299999997,
            "longitude": 80.2907366
        }
    },
    {
        "fuel_level": 372.3191094619666,
        "timestamp": 1724665036000,
        "speed": 0,
        "location": {
            "latitude": 13.252168299999997,
            "longitude": 80.2907461285714
        }
    },
    {
        "fuel_level": 372.3304473304473,
        "timestamp": 1724665154625,
        "speed": 17.11111111111111,
        "location": {
            "latitude": 13.252159242857141,
            "longitude": 80.2937449625
        }
    },
    {
        "fuel_level": 373.02308802308795,
        "timestamp": 1724665282111,
        "speed": 23.25,
        "location": {
            "latitude": 13.251938075,
            "longitude": 80.3024766111111
        }
    },
    {
        "fuel_level": 373.56749311294766,
        "timestamp": 1724665416666,
        "speed": 29.181818181818183,
        "location": {
            "latitude": 13.251938075,
            "longitude": 80.30995311111111
        }
    },
    {
        "fuel_level": 373.56902356902356,
        "timestamp": 1724665545625,
        "speed": 29.181818181818183,
        "location": {
            "latitude": 13.251938075,
            "longitude": 80.31926829999999
        }
    },
    {
        "fuel_level": 373.9637445887446,
        "timestamp": 1724665665818,
        "speed": 29.181818181818183,
        "location": {
            "latitude": 13.262155272727272,
            "longitude": 80.32506995454546
        }
    },
    {
        "fuel_level": 374.02597402597405,
        "timestamp": 1724665799888,
        "speed": 29.181818181818183,
        "location": {
            "latitude": 13.266584777777778,
            "longitude": 80.32689957777778
        }
    },
    {
        "fuel_level": 373.9637445887446,
        "timestamp": 1724665943444,
        "speed": 25.818181818181817,
        "location": {
            "latitude": 13.273528666666667,
            "longitude": 80.32709883333334
        }
    },
    {
        "fuel_level": 373.76426603699326,
        "timestamp": 1724666081000,
        "speed": 25.333333333333332,
        "location": {
            "latitude": 13.281924222222223,
            "longitude": 80.32879051111111
        }
    },
    {
        "fuel_level": 373.76426603699326,
        "timestamp": 1724666215636,
        "speed": 24.11111111111111,
        "location": {
            "latitude": 13.29113238181818,
            "longitude": 80.32879051111111
        }
    },
    {
        "fuel_level": 373.76426603699326,
        "timestamp": 1724666333400,
        "speed": 24.11111111111111,
        "location": {
            "latitude": 13.29827062,
            "longitude": 80.32879051111111
        }
    },
    {
        "fuel_level": 371.7272727272727,
        "timestamp": 1724666470000,
        "speed": 24,
        "location": {
            "latitude": 13.306424955555556,
            "longitude": 80.32879051111111
        }
    },
    {
        "fuel_level": 369.13086913086914,
        "timestamp": 1724666605000,
        "speed": 21.77777777777778,
        "location": {
            "latitude": 13.313248488888886,
            "longitude": 80.32833458888888
        }
    },
    {
        "fuel_level": 368.67965367965365,
        "timestamp": 1724666663000,
        "speed": 11.333333333333334,
        "location": {
            "latitude": 13.3140566,
            "longitude": 80.32494178461538
        }
    },
    {
        "fuel_level": 368.62914862914863,
        "timestamp": 1724666863230,
        "speed": 7,
        "location": {
            "latitude": 13.316548299999996,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 368.5281385281386,
        "timestamp": 1724666996454,
        "speed": 0.38461538461538464,
        "location": {
            "latitude": 13.316548299999996,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.91223927587566,
        "timestamp": 1724667127909,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724667261000,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724667402400,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724667526000,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724667661000,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724667782923,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724667903000,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999996,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724668034700,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999996,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724668158500,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999996,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724668282181,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999996,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724668414230,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999996,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57575757575756,
        "timestamp": 1724668537000,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999996,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57335257335257,
        "timestamp": 1724668660750,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999996,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57335257335257,
        "timestamp": 1724668781500,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57335257335257,
        "timestamp": 1724668919444,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57335257335257,
        "timestamp": 1724669046600,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57142857142856,
        "timestamp": 1724669135000,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.57142857142856,
        "timestamp": 1724669357111,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.5613275613276,
        "timestamp": 1724669474333,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.5517075517076,
        "timestamp": 1724669607875,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.5517075517076,
        "timestamp": 1724669740090,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.53246753246754,
        "timestamp": 1724669869222,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.53246753246754,
        "timestamp": 1724669997125,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.55627705627705,
        "timestamp": 1724670111285,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.55627705627705,
        "timestamp": 1724670302000,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.5565175565176,
        "timestamp": 1724670430111,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.5565175565176,
        "timestamp": 1724670557000,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.5800865800866,
        "timestamp": 1724670676250,
        "speed": 0,
        "location": {
            "latitude": 13.316548299999997,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.60822510822516,
        "timestamp": 1724670782600,
        "speed": 0,
        "location": {
            "latitude": 13.3165483,
            "longitude": 80.32493
        }
    },
    {
        "fuel_level": 367.78571428571433,
        "timestamp": 1724670971400,
        "speed": 0,
        "location": {
            "latitude": 13.316633790000001,
            "longitude": 80.3249923
        }
    },
    {
        "fuel_level": 368.5216450216451,
        "timestamp": 1724671134750,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.3250433
        }
    },
    {
        "fuel_level": 368.5216450216451,
        "timestamp": 1724671234900,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.32504330000002
        }
    },
    {
        "fuel_level": 368.5216450216451,
        "timestamp": 1724671365000,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.32504330000002
        }
    },
    {
        "fuel_level": 368.52543290043303,
        "timestamp": 1724671494272,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.32504330000002
        }
    },
    {
        "fuel_level": 368.5216450216451,
        "timestamp": 1724671614333,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.32504330000002
        }
    },
    {
        "fuel_level": 368.51130351130365,
        "timestamp": 1724671746363,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.32504330000002
        }
    },
    {
        "fuel_level": 368.51130351130365,
        "timestamp": 1724671873000,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.3250433
        }
    },
    {
        "fuel_level": 368.51130351130365,
        "timestamp": 1724672018222,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.3250433
        }
    },
    {
        "fuel_level": 368.5146103896105,
        "timestamp": 1724672143125,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.3250433
        }
    },
    {
        "fuel_level": 368.5113035113036,
        "timestamp": 1724672271222,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.3250433
        }
    },
    {
        "fuel_level": 368.5113035113036,
        "timestamp": 1724672404333,
        "speed": 0,
        "location": {
            "latitude": 13.3167033,
            "longitude": 80.3250433
        }
    },
    {
        "fuel_level": 368.5146103896105,
        "timestamp": 1724672634111,
        "speed": 0,
        "location": {
            "latitude": 13.3168109,
            "longitude": 80.32564681111111
        }
    },
    {
        "fuel_level": 368.54016354016363,
        "timestamp": 1724672745000,
        "speed": 0,
        "location": {
            "latitude": 13.31681825,
            "longitude": 80.32690745
        }
    },
    {
        "fuel_level": 368.95021645021643,
        "timestamp": 1724672884000,
        "speed": 0,
        "location": {
            "latitude": 13.3168499,
            "longitude": 80.3271683
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724672970000,
        "speed": 0,
        "location": {
            "latitude": 13.3168666,
            "longitude": 80.3272583
        }
    },
    {
        "fuel_level": 369.5238095238095,
        "timestamp": 1724673093000,
        "speed": 0,
        "location": {
            "latitude": 13.3168666,
            "longitude": 80.3272583
        }
    },
    {
        "fuel_level": 369.93506493506493,
        "timestamp": 1724673425000,
        "speed": 0,
        "location": {
            "latitude": 13.3168666,
            "longitude": 80.3272583
        }
    },
    {
        "fuel_level": 370.4112554112554,
        "timestamp": 1724673590000,
        "speed": 0,
        "location": {
            "latitude": 13.3168666,
            "longitude": 80.3272583
        }
    },
    {
        "fuel_level": 370.4112554112554,
        "timestamp": 1724673755000,
        "speed": 0,
        "location": {
            "latitude": 13.3168666,
            "longitude": 80.3272583
        }
    },
    {
        "fuel_level": 370.4112554112554,
        "timestamp": 1724673920000,
        "speed": 0,
        "location": {
            "latitude": 13.3168666,
            "longitude": 80.3272583
        }
    },
    {
        "fuel_level": 370.4112554112554,
        "timestamp": 1724674086000,
        "speed": 0,
        "location": {
            "latitude": 13.3168666,
            "longitude": 80.3272583
        }
    },
    {
        "fuel_level": 370.4112554112554,
        "timestamp": 1724674236000,
        "speed": 0,
        "location": {
            "latitude": 13.3168666,
            "longitude": 80.3272583
        }
    },
    {
        "fuel_level": 370.34632034632034,
        "timestamp": 1724674574000,
        "speed": 0,
        "location": {
            "latitude": 13.3168666,
            "longitude": 80.3288583
        }
    },
    {
        "fuel_level": 369.40476190476187,
        "timestamp": 1724674739000,
        "speed": 0,
        "location": {
            "latitude": 13.3167783,
            "longitude": 80.3288583
        }
    },
    {
        "fuel_level": 369.3073593073593,
        "timestamp": 1724674905000,
        "speed": 0,
        "location": {
            "latitude": 13.3167783,
            "longitude": 80.3288583
        }
    },
    {
        "fuel_level": 369.3073593073593,
        "timestamp": 1724675065000,
        "speed": 0,
        "location": {
            "latitude": 13.3167783,
            "longitude": 80.3288583
        }
    },
    {
        "fuel_level": 369.2099567099567,
        "timestamp": 1724675230500,
        "speed": 0,
        "location": {
            "latitude": 13.3167783,
            "longitude": 80.3288583
        }
    },
    {
        "fuel_level": 369.2099567099567,
        "timestamp": 1724675560000,
        "speed": 0,
        "location": {
            "latitude": 13.3167783,
            "longitude": 80.3290516
        }
    },
    {
        "fuel_level": 369.2099567099567,
        "timestamp": 1724675720000,
        "speed": 0,
        "location": {
            "latitude": 13.3167716,
            "longitude": 80.3290516
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724675866000,
        "speed": 0,
        "location": {
            "latitude": 13.3167716,
            "longitude": 80.3290516
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724676023000,
        "speed": 0,
        "location": {
            "latitude": 13.3167716,
            "longitude": 80.32919
        }
    },
    {
        "fuel_level": 369.6103896103896,
        "timestamp": 1724676193000,
        "speed": 0,
        "location": {
            "latitude": 13.3167683,
            "longitude": 80.3296
        }
    },
    {
        "fuel_level": 370.1623376623377,
        "timestamp": 1724676354000,
        "speed": 0,
        "location": {
            "latitude": 13.3166999,
            "longitude": 80.3296
        }
    },
    {
        "fuel_level": 370.1623376623377,
        "timestamp": 1724676514000,
        "speed": 0,
        "location": {
            "latitude": 13.3166999,
            "longitude": 80.3296
        }
    },
    {
        "fuel_level": 370.1623376623377,
        "timestamp": 1724676695000,
        "speed": 0,
        "location": {
            "latitude": 13.3166999,
            "longitude": 80.3296
        }
    },
    {
        "fuel_level": 370.1623376623377,
        "timestamp": 1724677059500,
        "speed": 0,
        "location": {
            "latitude": 13.3166999,
            "longitude": 80.3296
        }
    },
    {
        "fuel_level": 369.9458874458874,
        "timestamp": 1724677173000,
        "speed": 0,
        "location": {
            "latitude": 13.3166999,
            "longitude": 80.3296
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724677333000,
        "speed": 0,
        "location": {
            "latitude": 13.3166999,
            "longitude": 80.3296
        }
    },
    {
        "fuel_level": 369.1873278236915,
        "timestamp": 1724677498000,
        "speed": 0,
        "location": {
            "latitude": 13.3166999,
            "longitude": 80.3296
        }
    },
    {
        "fuel_level": 368.99350649350646,
        "timestamp": 1724677706000,
        "speed": 0,
        "location": {
            "latitude": 13.3166999,
            "longitude": 80.32965276666665
        }
    },
    {
        "fuel_level": 368.91053391053384,
        "timestamp": 1724677897545,
        "speed": 0,
        "location": {
            "latitude": 13.316694933333332,
            "longitude": 80.33017159999999
        }
    },
    {
        "fuel_level": 368.91053391053384,
        "timestamp": 1724678010500,
        "speed": 0,
        "location": {
            "latitude": 13.316673300000001,
            "longitude": 80.33017159999999
        }
    },
    {
        "fuel_level": 368.99350649350646,
        "timestamp": 1724678409000,
        "speed": 0,
        "location": {
            "latitude": 13.316673300000001,
            "longitude": 80.3301716
        }
    },
    {
        "fuel_level": 369.1873278236915,
        "timestamp": 1724678616500,
        "speed": 0,
        "location": {
            "latitude": 13.3166733,
            "longitude": 80.33034455
        }
    },
    {
        "fuel_level": 369.33116883116884,
        "timestamp": 1724678743000,
        "speed": 0,
        "location": {
            "latitude": 13.3166379,
            "longitude": 80.330455
        }
    },
    {
        "fuel_level": 369.4787157287157,
        "timestamp": 1724678904000,
        "speed": 0,
        "location": {
            "latitude": 13.316635000000002,
            "longitude": 80.330455
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724679124800,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724679239000,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724679364538,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724679489416,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724679613333,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724679744923,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724679870250,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724679995692,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724680120666,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724680241000,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724680366384,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724680491416,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724680619500,
        "speed": 0,
        "location": {
            "latitude": 13.316635,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724680743000,
        "speed": 0,
        "location": {
            "latitude": 13.316635000000002,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724680858125,
        "speed": 0,
        "location": {
            "latitude": 13.316635000000002,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724680986444,
        "speed": 0,
        "location": {
            "latitude": 13.316635000000002,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724681113500,
        "speed": 0,
        "location": {
            "latitude": 13.316635000000002,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724681241222,
        "speed": 0,
        "location": {
            "latitude": 13.316635000000002,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724681377000,
        "speed": 0,
        "location": {
            "latitude": 13.316635000000002,
            "longitude": 80.33045500000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724681505125,
        "speed": 0,
        "location": {
            "latitude": 13.316635000000002,
            "longitude": 80.3305106125
        }
    },
    {
        "fuel_level": 368.8906926406926,
        "timestamp": 1724681632000,
        "speed": 0,
        "location": {
            "latitude": 13.316623112499999,
            "longitude": 80.3306033
        }
    },
    {
        "fuel_level": 368.68927368927376,
        "timestamp": 1724681732600,
        "speed": 0,
        "location": {
            "latitude": 13.3166033,
            "longitude": 80.3306033
        }
    },
    {
        "fuel_level": 368.52813852813864,
        "timestamp": 1724681900375,
        "speed": 0,
        "location": {
            "latitude": 13.316603299999999,
            "longitude": 80.3308116
        }
    },
    {
        "fuel_level": 368.52813852813864,
        "timestamp": 1724682020555,
        "speed": 0,
        "location": {
            "latitude": 13.316581600000003,
            "longitude": 80.3308116
        }
    },
    {
        "fuel_level": 368.5281385281386,
        "timestamp": 1724682148625,
        "speed": 0,
        "location": {
            "latitude": 13.316581600000003,
            "longitude": 80.3308116
        }
    },
    {
        "fuel_level": 368.52813852813864,
        "timestamp": 1724682338000,
        "speed": 0,
        "location": {
            "latitude": 13.316581600000003,
            "longitude": 80.3308116
        }
    },
    {
        "fuel_level": 368.52813852813864,
        "timestamp": 1724682537000,
        "speed": 0,
        "location": {
            "latitude": 13.3165816,
            "longitude": 80.33084050000001
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724682744000,
        "speed": 0,
        "location": {
            "latitude": 13.316569399999999,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724682996000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724683161500,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.491341991342,
        "timestamp": 1724683327000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.5021645021645,
        "timestamp": 1724683487000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.5238095238095,
        "timestamp": 1724683653000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.8051948051948,
        "timestamp": 1724683977000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.8051948051948,
        "timestamp": 1724684168000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.89177489177484,
        "timestamp": 1724684308000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.8917748917749,
        "timestamp": 1724684479000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.8917748917749,
        "timestamp": 1724684644000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.91341991341994,
        "timestamp": 1724684810000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.92424242424244,
        "timestamp": 1724685150000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.92424242424244,
        "timestamp": 1724685310000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.91674991674995,
        "timestamp": 1724685476000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.91341991341994,
        "timestamp": 1724685688600,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.91341991341994,
        "timestamp": 1724685816230,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.9134199134199,
        "timestamp": 1724685940000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.9134199134199,
        "timestamp": 1724686058250,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.91674991674995,
        "timestamp": 1724686165000,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 369.91735537190084,
        "timestamp": 1724686317363,
        "speed": 0,
        "location": {
            "latitude": 13.316515,
            "longitude": 80.3312016
        }
    },
    {
        "fuel_level": 370.0601250601251,
        "timestamp": 1724686448444,
        "speed": 0,
        "location": {
            "latitude": 13.316420445454543,
            "longitude": 80.3311916
        }
    },
    {
        "fuel_level": 370.0601250601251,
        "timestamp": 1724686580333,
        "speed": 0,
        "location": {
            "latitude": 13.316420445454543,
            "longitude": 80.3311916
        }
    },
    {
        "fuel_level": 370.0601250601251,
        "timestamp": 1724686703222,
        "speed": 0,
        "location": {
            "latitude": 13.316420445454543,
            "longitude": 80.3311916
        }
    },
    {
        "fuel_level": 370.0601250601251,
        "timestamp": 1724686808375,
        "speed": 0,
        "location": {
            "latitude": 13.3164249,
            "longitude": 80.33133935000001
        }
    },
    {
        "fuel_level": 369.81872294372295,
        "timestamp": 1724686951500,
        "speed": 0,
        "location": {
            "latitude": 13.3164249,
            "longitude": 80.33158
        }
    },
    {
        "fuel_level": 368.5155122655123,
        "timestamp": 1724687157500,
        "speed": 0,
        "location": {
            "latitude": 13.3164249,
            "longitude": 80.33158
        }
    },
    {
        "fuel_level": 368.5155122655123,
        "timestamp": 1724687334000,
        "speed": 0,
        "location": {
            "latitude": 13.3164249,
            "longitude": 80.33158
        }
    },
    {
        "fuel_level": 368.5155122655123,
        "timestamp": 1724687709000,
        "speed": 0,
        "location": {
            "latitude": 13.3164249,
            "longitude": 80.33230000000002
        }
    },
    {
        "fuel_level": 368.6284927194018,
        "timestamp": 1724687831181,
        "speed": 0,
        "location": {
            "latitude": 13.3162766,
            "longitude": 80.33230000000002
        }
    },
    {
        "fuel_level": 368.63906926406924,
        "timestamp": 1724687956833,
        "speed": 0,
        "location": {
            "latitude": 13.3162766,
            "longitude": 80.33230000000002
        }
    },
    {
        "fuel_level": 368.7121212121212,
        "timestamp": 1724688091750,
        "speed": 0,
        "location": {
            "latitude": 13.316276599999998,
            "longitude": 80.33230000000002
        }
    },
    {
        "fuel_level": 368.7121212121212,
        "timestamp": 1724688223500,
        "speed": 0,
        "location": {
            "latitude": 13.316276599999998,
            "longitude": 80.33230000000002
        }
    },
    {
        "fuel_level": 368.7121212121212,
        "timestamp": 1724688350444,
        "speed": 0,
        "location": {
            "latitude": 13.316276599999998,
            "longitude": 80.33230000000002
        }
    },
    {
        "fuel_level": 368.7445887445888,
        "timestamp": 1724688486777,
        "speed": 0,
        "location": {
            "latitude": 13.316276599999998,
            "longitude": 80.33230000000002
        }
    },
    {
        "fuel_level": 368.8047138047138,
        "timestamp": 1724688621222,
        "speed": 0,
        "location": {
            "latitude": 13.316276599999998,
            "longitude": 80.33230000000002
        }
    },
    {
        "fuel_level": 368.86243386243393,
        "timestamp": 1724688761000,
        "speed": 0,
        "location": {
            "latitude": 13.316276599999998,
            "longitude": 80.33254697999999
        }
    },
    {
        "fuel_level": 369.08658008658006,
        "timestamp": 1724688876400,
        "speed": 6,
        "location": {
            "latitude": 13.3162636,
            "longitude": 80.33367611999999
        }
    },
    {
        "fuel_level": 369.48051948051943,
        "timestamp": 1724689010888,
        "speed": 6,
        "location": {
            "latitude": 13.31615176,
            "longitude": 80.34199071111112
        }
    },
    {
        "fuel_level": 370.11093073593076,
        "timestamp": 1724689146500,
        "speed": 6,
        "location": {
            "latitude": 13.315464411111112,
            "longitude": 80.34383351250001
        }
    },
    {
        "fuel_level": 371.0840548340548,
        "timestamp": 1724689275750,
        "speed": 6,
        "location": {
            "latitude": 13.3135357875,
            "longitude": 80.34383351250001
        }
    },
    {
        "fuel_level": 371.0840548340548,
        "timestamp": 1724689409250,
        "speed": 3.875,
        "location": {
            "latitude": 13.31172475,
            "longitude": 80.34383351250001
        }
    },
    {
        "fuel_level": 371.0840548340548,
        "timestamp": 1724689539916,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383351250001
        }
    },
    {
        "fuel_level": 371.0840548340548,
        "timestamp": 1724689665923,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.4996392496393,
        "timestamp": 1724689791000,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.4960317460318,
        "timestamp": 1724689914250,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.4911754911755,
        "timestamp": 1724690041416,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.4960317460318,
        "timestamp": 1724690167000,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.4996392496393,
        "timestamp": 1724690294100,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.4996392496393,
        "timestamp": 1724690426833,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.48051948051943,
        "timestamp": 1724690555923,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.48051948051943,
        "timestamp": 1724690680583,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.4689754689755,
        "timestamp": 1724690806909,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.4689754689755,
        "timestamp": 1724690936538,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.4689754689755,
        "timestamp": 1724691061333,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.56122448979596,
        "timestamp": 1724691186642,
        "speed": 0,
        "location": {
            "latitude": 13.31133,
            "longitude": 80.34383330000001
        }
    },
    {
        "fuel_level": 370.5930735930736,
        "timestamp": 1724691301400,
        "speed": 0,
        "location": {
            "latitude": 13.311306650000002,
            "longitude": 80.34379415000001
        }
    },
    {
        "fuel_level": 370.60822510822516,
        "timestamp": 1724691433125,
        "speed": 0,
        "location": {
            "latitude": 13.3112833,
            "longitude": 80.343755
        }
    },
    {
        "fuel_level": 370.6195887445888,
        "timestamp": 1724691558800,
        "speed": 0,
        "location": {
            "latitude": 13.3112833,
            "longitude": 80.343755
        }
    },
    {
        "fuel_level": 370.6709956709957,
        "timestamp": 1724691688500,
        "speed": 0,
        "location": {
            "latitude": 13.3112833,
            "longitude": 80.343755
        }
    },
    {
        "fuel_level": 370.7455507455507,
        "timestamp": 1724691813444,
        "speed": 0,
        "location": {
            "latitude": 13.3112833,
            "longitude": 80.343755
        }
    },
    {
        "fuel_level": 370.8417508417508,
        "timestamp": 1724691938000,
        "speed": 0,
        "location": {
            "latitude": 13.311546077777777,
            "longitude": 80.343755
        }
    },
    {
        "fuel_level": 371.23647186147184,
        "timestamp": 1724692065250,
        "speed": 0,
        "location": {
            "latitude": 13.313925575,
            "longitude": 80.34348587777777
        }
    },
    {
        "fuel_level": 371.23647186147184,
        "timestamp": 1724692185909,
        "speed": 4.25,
        "location": {
            "latitude": 13.314333299999998,
            "longitude": 80.3432053875
        }
    },
    {
        "fuel_level": 371.23647186147184,
        "timestamp": 1724692318625,
        "speed": 4.555555555555555,
        "location": {
            "latitude": 13.3143333,
            "longitude": 80.3431933
        }
    },
    {
        "fuel_level": 371.23647186147184,
        "timestamp": 1724692439000,
        "speed": 4.25,
        "location": {
            "latitude": 13.3150760125,
            "longitude": 80.34319329999998
        }
    },
    {
        "fuel_level": 370.96320346320346,
        "timestamp": 1724692567444,
        "speed": 0,
        "location": {
            "latitude": 13.315921066666668,
            "longitude": 80.3423107875
        }
    },
    {
        "fuel_level": 369.62481962481957,
        "timestamp": 1724692704900,
        "speed": 0,
        "location": {
            "latitude": 13.316168299999996,
            "longitude": 80.33572367777778
        }
    },
    {
        "fuel_level": 369.0440115440115,
        "timestamp": 1724692833833,
        "speed": 0,
        "location": {
            "latitude": 13.316168299999998,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.9458874458875,
        "timestamp": 1724692970333,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.66612554112555,
        "timestamp": 1724693098500,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.6628186628186,
        "timestamp": 1724693226444,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.6628186628186,
        "timestamp": 1724693346000,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.66612554112555,
        "timestamp": 1724693474125,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.66762866762866,
        "timestamp": 1724693595500,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.66883116883116,
        "timestamp": 1724693729500,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.66883116883116,
        "timestamp": 1724693857555,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.67965367965365,
        "timestamp": 1724693997500,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.67965367965365,
        "timestamp": 1724694120500,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.68777056277054,
        "timestamp": 1724694249800,
        "speed": 0,
        "location": {
            "latitude": 13.3161683,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.70779220779224,
        "timestamp": 1724694368900,
        "speed": 0,
        "location": {
            "latitude": 13.31616947,
            "longitude": 80.33281
        }
    },
    {
        "fuel_level": 368.8506493506494,
        "timestamp": 1724694502000,
        "speed": 0,
        "location": {
            "latitude": 13.316259800000001,
            "longitude": 80.33264262
        }
    },
    {
        "fuel_level": 369.4913419913419,
        "timestamp": 1724694595000,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.33140481999999
        }
    },
    {
        "fuel_level": 370.32227032227024,
        "timestamp": 1724694788777,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.3658008658008,
        "timestamp": 1724694922888,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.3658008658008,
        "timestamp": 1724695031000,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.3658008658008,
        "timestamp": 1724695205500,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.39201539201537,
        "timestamp": 1724695346666,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.3935458480912,
        "timestamp": 1724695464222,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.3935458480912,
        "timestamp": 1724695595636,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.40043290043286,
        "timestamp": 1724695727375,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.40043290043286,
        "timestamp": 1724695828571,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.40043290043286,
        "timestamp": 1724696023000,
        "speed": 0,
        "location": {
            "latitude": 13.316263300000001,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.40043290043286,
        "timestamp": 1724696184000,
        "speed": 0,
        "location": {
            "latitude": 13.3162633,
            "longitude": 80.331295
        }
    },
    {
        "fuel_level": 370.34632034632034,
        "timestamp": 1724696523000,
        "speed": 0,
        "location": {
            "latitude": 13.3162633,
            "longitude": 80.331295
        }
    }
]

const app = express();
  
  // Part 1: Find Fuel Fill Events
  function calculateFuelFillEvents(data) {
    let fuelFills = [];
    let totalFuelConsumed = 0;
    
    for (let i = 1; i < data.length; i++) {
      let prevFuelLevel = data[i - 1].fuel_level;
      let currentFuelLevel = data[i].fuel_level;
  
      // Check for fuel fill event (when current fuel level is higher than the previous one)
      if (currentFuelLevel > prevFuelLevel) {
        const fuelAdded = currentFuelLevel - prevFuelLevel;
        const fuelFillEvent = {
          fuel_added: fuelAdded,
          location: data[i].location,
          timestamp: data[i].timestamp,
        };
        fuelFills.push(fuelFillEvent);
      }
  
      // Calculate total fuel consumed (when fuel level decreases)
      if (currentFuelLevel < prevFuelLevel) {
        totalFuelConsumed += prevFuelLevel - currentFuelLevel;
      }
    }
  
    return { fuelFills, totalFuelConsumed };
  }
  
  const { fuelFills, totalFuelConsumed } = calculateFuelFillEvents(data);
  
  // Output fuel fill events
  console.log("Fuel Fill Events:", fuelFills);
  
  // Output total fuel consumed
  console.log("Total Fuel Consumed:", totalFuelConsumed);
  
  app.listen(3045,()=>{
    console.log('server running on port');
})