let display;
export const getdata=async (city)=>{
    try{
    const data=fetch(`https://api.weatherapi.com/v1/current.json?key=0ba5f5590db5451e8e2145418220107&q=${city}&aqi=no`)
    const realdata=(await data).json();
    const {current:{temp_c,temp_f,last_updated,condition:{icon},humidity,cloud}}=(await realdata);
    const {location:{region,name,country}}=(await realdata);
    display=true;
    return ({
        temp_c,temp_f,last_updated,icon,humidity,cloud,region,name,country,display
    })}
    catch(error){
     alert("Enter correct city or state name");
    display=false;
     return(display);
    }
   
}