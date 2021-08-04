var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data= JSON.parse(this.response); 
    var sum = data.filter((element)=> element.region=== 'Asia');
    console.log(sum);
    var sum1 = data.filter((element)=>element.population<200000);
    console.log(sum1);
    var total = data.reduce((a,b)=>{
      data.population = a+b });
    console.log(total)
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
        //var cname= data[i].name;
    //var lang= data[i].latlng;
    //weatherdata(cname,...lang);
  //  }
//}

//function weatherdata(name,lat,lang){
//console.log(name+" "+lat+" "+lang);

//var req = new XMLHttpRequest;
//var url =  'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=0eefe96e369255bdc3b1a997fe87d9ce';
//req.open('GET',url,true);
//req.send();
//req.onload=function(){
  //  var data=JSON.parse(this.response);
    //console.log(`${name}:${data.main.temp}`);
//}



}  