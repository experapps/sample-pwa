if('serviceWorker' in navigator){
    window.addEventListener('load' , function(){
        navigator.serviceWorker.register('./serviceWorker.js').then(function(){
            console.log('SW REgistered')
        } , function(err){
            console.log(err)
        })
    });
}else{
    console.log('nope')
}