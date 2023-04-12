let boton = document.getElementById('boton');
let respuesta = document.getElementById('respuesta');
let calcular = document.getElementById('cuadros');
let e1 = document.getElementById('e1');
let e12 = document.getElementById('e12');
let g1 = document.getElementById('g1');
let g12 = document.getElementById('g12');
let ft1 = document.getElementById('ft1');
let ft12 = document.getElementById('ft12');
let ft13 = document.getElementById('ft13');
let rp1 = document.getElementById('rp1');
let rp12 = document.getElementById('rp12');
let o1 = document.getElementById('o1');
let b1 = document.getElementById('b1');
let b12 = document.getElementById('b12');
let gt1 = document.getElementById('gt1');
let c1 = document.getElementById('c1');
let c12 = document.getElementById('c12');
let cx = document.getElementById('capex');
let ag = document.getElementById('ag');
let ag1 = document.getElementById('ag1');
let ag2 = document.getElementById('ag2');
let acapex = document.getElementById('acapex');
let acapex1 = document.getElementById('acapex1');
let acapex2 = document.getElementById('acapex2');
let ab1 = document.getElementById('ab1');
let ab2 = document.getElementById('ab2');
let ab3 = document.getElementById('ab3');



boton.addEventListener('click', procesar);

function procesar(){
    let fact =   parseFloat(document.getElementById('fact').value);
    if (fact>=1 && fact<=3){
        
        let caudal = parseFloat(document.getElementById('caudal').value);
        let tempe = parseFloat(document.getElementById('tempe').value);
        let temps = parseFloat(document.getElementById('temps').value);
    
    
        var const1 = 1000;
        var const2 = 0.0003069; 
        var Diametro = caudal*(tempe-temps)*fact*const1*const2;

        respuesta.innerHTML= Diametro;

    }else{
        respuesta.innerHTML="El factor de servicio debe ser mayor a 1 y menor que 3";
    }
    
}


function centrifugo(){
    let fact =   parseFloat(document.getElementById('fact').value);
    if (fact>=1 && fact<=3){
        let a500 = parseFloat(document.getElementById('ab500').value);
        let a750 = parseFloat(document.getElementById('ab750').value);
        let a1000 = parseFloat(document.getElementById('ab1000').value);
        let c500 = parseFloat(document.getElementById('cen500').value);
        let c750 = parseFloat(document.getElementById('cen750').value);
        let c1000 = parseFloat(document.getElementById('cen1000').value);
        let rp = parseFloat(document.getElementById('rp1').value);
        let g = parseFloat(document.getElementById('g1').value);
        let c = parseFloat(document.getElementById('c1').value);
        let o = parseFloat(document.getElementById('o1').value);
        let capex = parseFloat(document.getElementById('capex').value);
        let ft = parseFloat(document.getElementById('ft1').value);
        let e = parseFloat(document.getElementById('e1').value);
        let b = parseFloat(document.getElementById('b1').value);
        let caudal = parseFloat(document.getElementById('caudal').value);
        let tempe = parseFloat(document.getElementById('tempe').value);
        let temps = parseFloat(document.getElementById('temps').value);
    
    
        var const1 = 1000;
        var const2 = 0.0003069; 
        var tdt = caudal*(tempe-temps)*fact*const1*const2;



        var totalc= (500*c500)+(750*c750)+(1000*c1000);
        var totala= (500*a500)+(750*a750)+(1000*a1000)
        var totales = totala + totalc;
        var tmax = tdt + (tdt*0.5);
        if (totales<=tdt){
            respuesta1.innerHTML="LAS TECNOLOGÍAS SELECCIONADAS NO SUMINISTRAN EL TAMAÑO DEL DT";
        }else if (totales >= tmax){
            respuesta1.innerHTML="LAS TECNOLOGÍAS SELECCIONADAS SUPERAN EL TOPE DEL DT";
        }else{
            var totalc= (500*c500)+(750*c750)+(1000*c1000);
            rp=totalc*0.3190995427365;
            g=(totalc*511.13199046407)/1000;	
            c=(totalc*0.0035174111853)*(1925000/0.88);	
            o=c*0.03;	
    	
            capex=totalc*0.0035174111853;	
            ft=capex*1000000;
            e=capex*1700000;
            b=capex*2000000;

            rp1.innerHTML= rp;
            rp12.innerHTML= rp;
            g1.innerHTML= g;
            g12.innerHTML= g;
            c1.innerHTML= c;
            c12.innerHTML= c;
            o1.innerHTML= o;
            cx.innerHTML= capex;
            ft1.innerHTML= ft;
            ft12.innerHTML= ft;
            ft13.innerHTML= ft;
            e1.innerHTML= e;
            e12.innerHTML= e;
            b1.innerHTML= b;
            b12.innerHTML= b;



        }
        
        var const1 = 1000;
        var const2 = 0.0003069; 
        var Diametro = caudal*(tempe-temps)*fact*const1*const2;

        respuesta.innerHTML= Diametro;

    }else{
        respuesta1.innerHTML="El factor de servicio debe ser mayor a 1 y menor que 3";
    }
    
}



function absorcion(){
    let fact =   parseFloat(document.getElementById('fact').value);
    if (fact>=1 && fact<=3){
        let a500 = parseFloat(document.getElementById('ab500').value);
        let a750 = parseFloat(document.getElementById('ab750').value);
        let a1000 = parseFloat(document.getElementById('ab1000').value);
        let c500 = parseFloat(document.getElementById('cen500').value);
        let c750 = parseFloat(document.getElementById('cen750').value);
        let c1000 = parseFloat(document.getElementById('cen1000').value);
        let rp = parseFloat(document.getElementById('rp1').value);
        let g = parseFloat(document.getElementById('g1').value);
        let c = parseFloat(document.getElementById('c1').value);
        let o = parseFloat(document.getElementById('o1').value);
        let capex = parseFloat(document.getElementById('capex').value);
        let ft = parseFloat(document.getElementById('ft1').value);
        let e = parseFloat(document.getElementById('e1').value);
        let b = parseFloat(document.getElementById('b1').value);
        let caudal = parseFloat(document.getElementById('caudal').value);
        let tempe = parseFloat(document.getElementById('tempe').value);
        let temps = parseFloat(document.getElementById('temps').value);
        var const1 = 1000;
        var const2 = 0.0003069; 
        var tdt = caudal*(tempe-temps)*fact*const1*const2;



        var totalc= (500*c500)+(750*c750)+(1000*c1000);
        var totala= (500*a500)+(750*a750)+(1000*a1000)
        var totales = totala + totalc;
        var tmax = tdt + (tdt*0.5);
        if (totales<=tdt){
            respuesta1.innerHTML="LAS TECNOLOGÍAS SELECCIONADAS NO SUMINISTRAN EL TAMAÑO DEL DT";
        }else if (totales >= tmax){
            respuesta1.innerHTML="LAS TECNOLOGÍAS SELECCIONADAS SUPERAN EL TOPE DEL DT";
        }else{
            var totala= (500*a500)+(750*a750)+(1000*a1000)
            g=(totala*511.13199046407)/1000		
            c=((totala * 0.0035174111853)*(1925000/0.88));	
            o=c*0.03		
  		
            capex=totala*0.0035174111853		
            ft=(capex*1000000)*1.015		
            b=capex*2000000 
        
            ag.innerHTML= g;
            ag1.innerHTML= g;
            ag2.innerHTML= g;
            acapex.innerHTML= capex;
            acapex1.innerHTML= capex;
            acapex2.innerHTML= capex;
            ab1.innerHTML= b;
            ab2.innerHTML= b;
            ab3.innerHTML= b;
        
        }
        var const1 = 1000;
        var const2 = 0.0003069; 
        var Diametro = caudal*(tempe-temps)*fact*const1*const2;

        respuesta1.innerHTML= "El Diametro es: "+Diametro;
    }else{
        respuesta1.innerHTML="El factor de servicio debe ser mayor a 1 y menor que 3";
    }
        
    
    
}


