import React,{useState} from "react"
import {Box,styled,TextField,Button, Typography} from "@mui/material";
import {getdata} from "../api"
export const Weather=()=>{
    const [city,setcity]=useState("");
    const [data,setdata]=useState({});
    const {temp_c,temp_f,last_updated,icon,humidity,cloud,region,country,name,display}=data;
    const complete=[{"name":"Name","data":name},{"name":"Region","data":region},{"name":"Country","data":country},{"name":"Temprature in Celsius","data":temp_c},{"name":"Temprature in Farenhiet","data":temp_f},{"name":"Last Update Date","data":last_updated},{"name":'Humidity',"data":humidity+'%'},{"name":"Clouds","data":cloud+"%"}]
    const Outerbox=styled(Box)(({theme})=>({
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        width:'90vw',
        height:'auto',
        margin:'5vh auto',
        boxShadow:'2px 2px 4px 4px #89CFF0',
        borderTopLeftRadius:'50px',
        borderBottomRightRadius:'50px',
        [theme.breakpoints.up("md")]:{
               width:'80vw'
        }

    }))
    const Image=styled(Box)(({theme})=>({
        backgroundImage:"url('pictures/weather.jpeg')",
        display:'none',
        width:"40vw",
        height:'auto',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        borderTopLeftRadius:'50px',
        borderBottomRightRadius:'50px',
        [theme.breakpoints.up("md")]:{
            width:'35vw'
     },
     [theme.breakpoints.up("sm")]:{
        display:'block'
     }
    }))
    const Inner=styled(Box)(({theme})=>({
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:'1rem',
        width:'100%',
        height:'80vh',
        [theme.breakpoints.up("md")]:{
            width:'45vw',
            padding:'2rem',
     }
    }))
    const Styledbox=styled(Box)(({theme})=>({
        display:'flex',
        flexDirection:'column',
        width:'90%',
        [theme.breakpoints.up("md")]:{
            width:'45vw'
     }
        
    }))
    const Shadow=styled(Typography)(({theme})=>({
        textShadow:'1px 1px #00008b',
    }))
    const handlechange=(e)=>{
     setcity(e.target.value);
    }
    return(
        <>
    <Outerbox>
            
            <Image />
            <Inner>
                <Box component="form" autoComplete="off" noValidate key={"12"}>
            <TextField variant="standard" autoFocus={true} label="Your city name.." sx={{width:{xs:'8rem',md:'12rem',lg:'12rem',xl:'12rem',sm:'10rem'}}}required value={city} onChange={handlechange}/>
            <Button variant="outlined" sx={{height:'3rem',marginLeft:'1rem'}} onClick={async ()=>setdata(await getdata(city))}>Check</Button>
            </Box>
            {
                display===true? <Styledbox>
                    <Box component="img" src={"https:"+icon} sx={{width:'6rem',height:'6rem',objectFit:'center',margin:'auto'}}/>
                    {
                        complete.map((elem,index)=>{
                            const {name,data}=elem;
                            return(
                            <Box key={index} sx={{display:"flex",justifyContent:'space-between',width:'80%',margin:'.4rem auto'}}>
                            <Shadow>{name}:</Shadow>
                            <Shadow>{data}</Shadow>
                            </Box>)
})
                    }
                   
                   
                </Styledbox>:null
            }
           
            </Inner>
        </Outerbox>
        </>
    )
}