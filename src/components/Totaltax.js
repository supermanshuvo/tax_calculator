import React,{useState} from 'react'

function Totaltax() {
     const [conditon1,setCondition1]=useState(0)
     const [conditon2,setCondition2]=useState(0)
     const [conditon3,setCondition3]=useState(0)
     const [conditon4,setCondition4]=useState(0)
     const [conditon5,setCondition5]=useState(0)
     const [conditon6,setCondition6]=useState(0)

     //amount
     const[amount1,setAmount1]=useState(0)
     const[amount2,setAmount2]=useState(0)
     const[amount3,setAmount3]=useState(0)
     const[amount4,setAmount4]=useState(0)
     const[amount5,setAmount5]=useState(0)
     const[amount6,setAmount6]=useState(0)

     //dividable amount
     const[taxable1,setTaxable1]=useState(0)
     const[taxable2,setTaxable2]=useState(0)
     const[taxable3,setTaxable3]=useState(0)
     const[taxable4,setTaxable4]=useState(0)
     const[taxable5,setTaxable5]=useState(0)
     const[taxable6,setTaxable6]=useState(0)

    const handleChange=()=>{
      
    //male tax
    let item = 4000000;
    setAmount1(item)
    let gender= "male"
    let a=5000
    let b=30000
    let c=60000
    let d= 100000
    

    
    if(gender==="male"){
      console.log("i am a male")
      let t1=300000;
      let t2=100000;
      let t3=300000;
      let t4=400000;
      let t5=500000;
      //condition1

      if(item>1600000){
        
        let amnt2=item-t1
        setAmount2(amnt2)
        let amnt3=amnt2-t2;
        setAmount3(amnt3)
        let amnt4= amnt3-t3;
        setAmount4(amnt4)
        let amnt5=amnt4-t4;
        setAmount5(amnt5)
        let amnt6=amnt5-t5
        setAmount6(amnt6)

        let tax1=item-1600000;

        setTaxable1(t1)
        setTaxable2(t2)
        setTaxable3(t3)
        setTaxable4(t4)
        setTaxable5(t5)
        setTaxable6(tax1)

        let paidTax1= (tax1*25)/100
        let totalTax1= paidTax1+a+b+c+d
        console.log(paidTax1)
        setCondition1(a)
        setCondition2(b)
        setCondition3(c)
        setCondition4(d)
        setCondition5(paidTax1)
        setCondition6(totalTax1)

      }

      //condition2
      else if(item>1100000){
        let amnt2=item-t1
        setAmount2(amnt2)
        let amnt3=amnt2-t2;
        setAmount3(amnt3)
        let amnt4= amnt3-t3;
        setAmount4(amnt4)
        let amnt5=amnt4-t4;
        setAmount5(amnt5) 

        let tax2=item-1100000;

        setTaxable1(t1)
        setTaxable2(t2)
        setTaxable3(t3)
        setTaxable4(t4)
        setTaxable5(tax2)


        let paidTax2=(tax2*20)/100
        let totalTax2= paidTax2+a+b+c
        
        setCondition1(a)
        setCondition2(b)
        setCondition3(c)
        setCondition4(paidTax2)
        setCondition6(totalTax2)

        }
      
      //condition3
      else if(item>700000){

        let amnt2=item-t1
        setAmount2(amnt2)
        let amnt3=amnt2-t2;
        setAmount3(amnt3)
        let amnt4= amnt3-t3;
        setAmount4(amnt4)

        let tax3=item-700000;

        setTaxable1(t1)
        setTaxable2(t2)
        setTaxable3(t3)
        setTaxable4(tax3)

        let paidTax3=(tax3*15)/100 ;
        let totalTax3=paidTax3+a+b
        setCondition1(a)
        setCondition2(b)
        setCondition3(paidTax3)
        setCondition6(totalTax3)

        }
      
      //condition4

      else if(item>400000){
         let amnt2=item-t1
         setAmount2(amnt2)
         let amnt3=amnt2-t2;
         setAmount3(amnt3)

         let tax4=item-400000;

         setTaxable1(t1)
         setTaxable2(t2)
         setTaxable3(tax4)

         let paidTax4=(tax4*10)/100
         let totalTax4=paidTax4+a
         setCondition1(a)
         setCondition2(paidTax4)
        setCondition6(totalTax4)

      }
      
      //condition5

      else if(item>300000){
         let amnt2=item-t1
         setAmount2(amnt2)

         let tax5=item-300000;

         setTaxable1(t1)
         setTaxable2(tax5)

         let totalTax5=(tax5*5)/100 ;
         setCondition1(totalTax5)
         setCondition6(totalTax5)
         
        }

      else{
         console.log("you don't have to pay tax")
        }

    }


    else{

       let t1=350000;
       let t2=100000;
       let t3=300000;
       let t4=400000;
       let t5=500000;
       console.log("i am a female")

       //condition1

       if(item>1650000){
        let amnt2=item-t1
        setAmount2(amnt2)
        let amnt3=amnt2-t2;
        setAmount3(amnt3)
        let amnt4= amnt3-t3;
        setAmount4(amnt4)
        let amnt5=amnt4-t4;
        setAmount5(amnt5)
        let amnt6=amnt5-t5
        setAmount6(amnt6)

        let tax1=item-1650000;

        setTaxable1(t1)
        setTaxable2(t2)
        setTaxable3(t3)
        setTaxable4(t4)
        setTaxable5(t5)
        setTaxable6(tax1)

        let paidTax1= (tax1*25)/100
        let totalTax1= paidTax1+a+b+c+d
        console.log(paidTax1)
        setCondition1(a)
        setCondition2(b)
        setCondition3(c)
        setCondition4(d)
        setCondition5(paidTax1)
        setCondition6(totalTax1)
       }

       //condition2

       else if(item>1150000){

         let amnt2=item-t1
         setAmount2(amnt2)
         let amnt3=amnt2-t2;
         setAmount3(amnt3)
         let amnt4= amnt3-t3;
         setAmount4(amnt4)
         let amnt5=amnt4-t4;
         setAmount5(amnt5)

         let tax2=item-1150000;

         setTaxable1(t1)
         setTaxable2(t2)
         setTaxable3(t3)
         setTaxable4(t4)
         setTaxable5(tax2)


         let paidTax2=(tax2*20)/100
         let totalTax2= paidTax2+a+b+c
        
         setCondition1(a)
         setCondition2(b)
         setCondition3(c)
         setCondition4(paidTax2)
         setCondition6(totalTax2)
       }
       
       //condition3

       else if(item>750000){

         let amnt2=item-t1
         setAmount2(amnt2)
         let amnt3=amnt2-t2;
         setAmount3(amnt3)
         let amnt4= amnt3-t3;
         setAmount4(amnt4)

         let tax3=item-750000;
  
         setTaxable1(t1)
         setTaxable2(t2)
         setTaxable3(t3)
         setTaxable4(tax3)

         let paidTax3=(tax3*15)/100 ;
         let totalTax3=paidTax3+a+b
         setCondition1(a)
         setCondition2(b)
         setCondition3(paidTax3)
         setCondition6(totalTax3)
       }

       //condition4

       else if(item>450000){

         let amnt2=item-t1
         setAmount2(amnt2)
         let amnt3=amnt2-t2;
         setAmount3(amnt3)

         let tax4=item-450000;

         setTaxable1(t1)
         setTaxable2(t2)
         setTaxable3(tax4)

         let paidTax4=(tax4*10)/100
         let totalTax4=paidTax4+a
         setCondition1(a)
         setCondition2(paidTax4)
         setCondition6(totalTax4)
       }

       //condition5

       else if(item>350000){

         let amnt2=item-t1
         setAmount2(amnt2)

         let tax5=item-350000;

         setTaxable1(t1)
         setTaxable2(tax5)

         let totalTax5=(tax5*5)/100 ;
         setCondition1(totalTax5)
         setCondition6(totalTax5)
       }
       
       else{
         console.log("you don't have to pay tax")
       }

    }

  }
    return (
       
      
          <div className='py-4'>
             <h1>Payable Tax</h1>
             <table className="table boarder shadow">
             <thead className="thead-dark">
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th>Rate</th>
                  <th>Tax</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>first tk</td>
                 <td>{taxable1}</td>
                 <td>from</td>
                 <td>{amount1}</td>
                 <td>0</td>
                 <td>0</td>
                 
               </tr>

               <tr>
                 <td>next tk</td>
                 <td>{taxable2}</td>
                 <td>from</td>
                 <td>{amount2}</td>
                 <td>5</td>
                 <td>{conditon1}</td>
                
               </tr>

               <tr>
                 <td>next tk</td>
                 <td>{taxable3}</td>
                 <td>from</td>
                 <td>{amount3}</td>
                 <td>10</td>
                 <td>{conditon2}</td>
                 
               </tr>

               <tr>
                 <td>next tk</td>
                 <td>{taxable4}</td>
                 <td>from</td>
                 <td>{amount4}</td>
                 <td>15</td>
                 <td>{conditon3}</td>
                 
               </tr>

               <tr>
                 <td>next tk</td>
                 <td>{taxable5}</td>
                 <td>from</td>
                 <td>{amount5}</td>
                 <td>20</td>
                 <td>{conditon4}</td>
                
               </tr>

               <tr>
                 <td>next tk</td>
                 <td>{taxable6}</td>
                 <td>from</td>
                 <td>{amount6}</td>
                 <td>25</td>
                 <td>{conditon5}</td>
                 
               </tr>

               <tr>
                 <td>Total payable Tax</td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td>{conditon6}</td>
               </tr>


             
              
            </tbody>
  
          </table>


       <button onClick={handleChange}>click</button>
    </div>
  );

    
}

export default Totaltax