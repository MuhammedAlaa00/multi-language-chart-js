const Monthes_en = {
    'monthes_en':['jan', 'feb' , 'march' , 'april' , 'may', 'june' , 'july'],
}
const Monthes_fr = {
    'monthes_fr':['janu', 'febro' , 'marchels' , 'april' , 'mayo', 'june' , 'juli'],
}
const Monthes_ar = {
    'monthes_ar':['يناير', 'فبراير' , 'مارس' , 'ابريل' , 'مايو' , 'يونيو' , 'يوليو'],
}
let month_en = [];
let month_fr = [];
let month_ar = [];
month_en.push(Monthes_en);
month_fr.push(Monthes_fr);
month_ar.push(Monthes_ar);
localStorage.setItem('month_en', JSON.stringify(Monthes_en));
localStorage.setItem('month_fr', JSON.stringify(Monthes_fr));
localStorage.setItem('month_ar', JSON.stringify(Monthes_ar))    
let getEn = JSON.parse(localStorage.getItem('month_en'));
let getFr = JSON.parse(localStorage.getItem('month_fr'));
let getAr = JSON.parse(localStorage.getItem('month_ar'));
//////////////////////////////////////////////////////////////////////////////////////////////////// 
let ctx = document.getElementById('canvas').getContext('2d');
function getEnglish()
{
    window.myLine = new Chart(ctx, {
        type:'line',
        data:{
            labels:getEn.monthes_en,
            datasets:[{
                label:'my first dataset',
                backgroundColor:'rgba(0, 0, 0, 0)',
                borderColor:'blue',
                pointBorderColor:'black',
                data:[31, 47, 23, 11, 5, 20, 50]
            },{
                label:'my second dataset',
                backgroundColor:'rgba(0, 0, 0, 0)',
                borderColor:'red',
                pointBorderColor:'black',
                data:[30, 40, 13, 17, 15, 21, 45]
            }
        ]
        },
    });
};
function en()
{
    getEnglish();
};
function fr()
{
    window.myLine = new Chart(ctx, {
        type:'line',
        data:{
            labels:getFr.monthes_fr,
            datasets:[{
                label:'my first dataset',
                backgroundColor:'rgba(0, 0, 0, 0)',
                borderColor:'blue',
                pointBorderColor:'black',
                data:[31, 47, 23, 11, 5, 20, 50]
            },{
                label:'my second dataset',
                backgroundColor:'rgba(0, 0, 0, 0)',
                borderColor:'red',
                pointBorderColor:'black',
                data:[30, 40, 13, 17, 15, 21, 45]
            }
        ]
        },
    });
};
function ar()
{
    window.myLine = new Chart(ctx, {
        type:'line',
        data:{
            labels:getAr.monthes_ar,
            datasets:[{
                label:'my first dataset',
                backgroundColor:'rgba(0, 0, 0, 0)',
                borderColor:'blue',
                pointBorderColor:'black',
                data:[31, 47, 23, 11, 5, 20, 50]
            },{
                label:'my second dataset',
                backgroundColor:'rgba(0, 0, 0, 0)',
                borderColor:'red',
                pointBorderColor:'black',
                data:[30, 40, 13, 17, 15, 21, 45]
            }
        ]
        },
    });
};
