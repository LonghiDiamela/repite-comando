import "./styles.css";

let btnEnV=document.getElementById("btnEnv");

btnEnv.addEventListener("click",()=>{
  let cantidad:number=document.getElementById("dato1").value;
  let simbolo:number=document.getElementById("dato2").value;
  let x:number,
      linea:string="";
      for (x=1; x<= cantidad; x++){
        linea += simbolo;
      }
      console.log(linea);
});
