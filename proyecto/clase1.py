from prettytable import PrettyTable
tabla = PrettyTable()
factor = 0
def condicion ():
    factor  = float (input("Digite el factor de servicio "))
    if (factor >= 1 and factor <= 3):
        form(factor)
    else:
        print ("El valor es incorrecto digite un numero entre 1 y 3")
        condicion()

def form(var1):
    caudal = float (input("Digite el caudal "))
    tempe = float (input("Digite la temperatura de entrada "))
    temps = float (input("Digite la temperatura de salida "))
    const=1000
    const2= 0.0003069
    
    DiametroDt = caudal*(tempe-temps)*var1*const*const2
    
    print("El resultado es: ", round(DiametroDt))
    opcion(DiametroDt)



def opcion (Dt):
    valor = float (input("Digite el numero de una de las dos opciones: 1) Centrigutos. 2) Absorsion."))
    if (valor == 1):
        cantidad1 = float (input("Digite la cantidad de 500:"))
        cantidad2 = float (input("Digite la cantidad de 750:"))
        cantidad3 = float (input("Digite la cantidad de 1000:"))
        

        valorC= (1000*cantidad1)+(1500*cantidad2)+(2000*cantidad3)

        print("el valor es: ", valorC)

        Tm=Dt*1.5
        if valorC<=Dt:
            print("Las tecnologias seleccionadas no suministran el tamaño del DT")
            opcion(Dt)
        elif valorC >= Tm:
            print("Las tecnologias seleccionadas superan el tope del DT")
            opcion(Dt)
        else:
            centri(valorC)

    elif (valor == 2):
        cantidad1 = float (input("Digite la cantidad de 500:"))
        cantidad2 = float (input("Digite la cantidad de 750:"))
        cantidad3 = float (input("Digite la cantidad de 1000:"))
        

        valora= (1000*cantidad1)+(1500*cantidad2)+(2000*cantidad3)

        
        Tm=Dt*1.5

        if valora<=Dt:
            print("Las tecnologias seleccionadas no suministran el tamaño del DT")
            opcion(Dt)
        elif valora >= Tm:
            print("Las tecnologias seleccionadas superan el tope del DT")
            opcion(Dt)
        else:
            absor(valora)
def centri(var):
    rp=var*0.3190995427365
    g=(var*511.13199046407)/1000
    c=(var*0.0035174111853)*(1925000/0.88)
    o=c*0.03

    capex=var*0.0035174111853
    ft=capex*1000000
    e=capex*1700000
    b=capex*2000000

    tabla.field_names = ['Energia','Emision','Capex(Dolares por Megavatios)','opex(Dolares al año)']
    tabla.add_row(['Red publica',e,g,ft])
    tabla.add_row(['Microturbina a gas',rp,o,rp])
    tabla.add_row(['Solar fotovoltaica',b,b,e])
    tabla.add_row(['Energia eolica',ft,ft,c])
    tabla.add_row(['Energia biomasa',c,capex,g])
    
    print(tabla)
    

    
    
def absor(var):
    
    g=(var*511.13199046407)/1000
    c=(var*0.0035174111853)*(1925000/0.88)
    o=c*0.03

    capex=var*0.0035174111853
    ft=(capex*1000000)*1.015
    
    b=capex*2000000

    tabla.field_names = ['Energia','Emision CO2','Capex(Dolares por Megavatios)','opex(Dolares al año)']
    tabla.add_row(['MicroTurbina a gas',g,g,g])
    tabla.add_row(['Solar termica',capex,capex,capex])
    tabla.add_row(['energia biomasa',b,b,b])
    
    
    print(tabla)




    
condicion()
