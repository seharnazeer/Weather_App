import React,{useState} from "react"
import {Box,styled,TextField,Button, Typography} from "@mui/material";
import {getdata} from "../api"
import weatherImage from '../assets/pictures/weather.jpeg'
const Outerbox=styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    height:"80vh",
    width:'90vw',
    margin:'10vh auto',
    boxShadow:'2px 2px 4px 4px #89CFF0',
    borderTopLeftRadius:'50px',
    borderBottomRightRadius:'50px',
    [theme.breakpoints.up("md")]:{
         alignItems:"center",
           width:'80vw',
           margin:'10vh auto',
           height:"80vh",
    },
    [theme.breakpoints.down("sm")]:{
       height:"auto"
    }

}))
const Image=styled(Box)(({theme})=>({
    backgroundImage: `url('${weatherImage}')`,
    display:'none',
    width:"20%",
    height:'100%',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    borderTopLeftRadius:'50px',
    borderBottomRightRadius:'50px',
    [theme.breakpoints.up("md")]:{
        width:'35vw',
        display:'block'
 },
 [theme.breakpoints.up("sm")]:{
   
 }
}))
const Inner=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:'1rem',
    width:'100%',
    [theme.breakpoints.up("md")]:{
        width:'45vw',
        padding:'2rem',
 }
}))
const Styledbox=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:"center",
    width:'90%',
    padding:'1rem',
    [theme.breakpoints.up("md")]:{
        width:'45vw',
        padding:"0rem"
 }
    
}))
const Shadow=styled(Typography)(({theme})=>({
    textShadow:'1px 1px #00008b',
}))
export const Weather=()=>{
    const [city,setcity]=useState("");
    const [data,setdata]=useState({});
    const {temp_c,temp_f,last_updated,icon,humidity,cloud,region,country,name,display}=data;
    const complete=[{"name":"Name","data":name},{"name":"Region","data":region},{"name":"Country","data":country},{"name":"Temprature in Celsius","data":temp_c},{"name":"Temprature in Farenhiet","data":temp_f},{"name":"Last Update Date","data":last_updated},{"name":'Humidity',"data":humidity+'%'},{"name":"Clouds","data":cloud+"%"}]

    const handlechange=(e)=>{
     setcity(e.target.value);
    }
    return(
        <>
    <Outerbox>
            <Image />
            <Inner>
                <Box component="form" autoComplete="off" noValidate key={"12"}>
            <TextField variant="standard" label="Your city name.." sx={{width:{xs:'8rem',md:'12rem',lg:'12rem',xl:'12rem',sm:'10rem'}}}required value={city} onChange={handlechange}/>
            <Button variant="outlined" sx={{height:'3rem',marginLeft:'1rem'}} onClick={async ()=>setdata(await getdata(city))}>Check</Button>
            </Box>
            {
                display===true? <Styledbox>
                    <Box component="img" src={"https:"+icon} sx={{width:'6rem',height:'6rem',objectFit:'center',margin:'auto'}}/>
                    {
                        complete.map((elem,index)=>{
                            const {name,data}=elem;
                            return(
                                <>
                            <Box key={index} sx={{display:"flex",justifyContent:"space-between",width:"80%",margin:'1rem',
                           borderBottom:"1px solid #edeaea",padding:"0rem 1rem"}}>
                            <Shadow>{name}:</Shadow>
                            <Shadow>{data}</Shadow>
                            </Box>
                            </>)
})
                    }
                   
                   
                </Styledbox>:null
            }
           
            </Inner>
        </Outerbox>
        </>
    )
}