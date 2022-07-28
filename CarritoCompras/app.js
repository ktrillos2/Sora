const fetchData=async()=>{

    try{ const res=await fetch('api.json');
         const data=await res.json()
         console.log(data);
    le.log
    }catch(error){
        conso(error);
    }
    
}