import { toast } from "react-toastify";

let counter = 0; 
let total = 0;
const messages = [];
let timeout;

const showToaster = (message,tags,plant)=>{
    counter++;
    console.debug("counter is  ",counter);
    console.debug("message is ",message)
    console.debug("tags plants ",tags,plant)
    // messages.push(message);
    toast.dismiss();
    clearTimeout(timeout)
   timeout = setTimeout(()=>{
       toast.error(message); 
   },2000)
}

const setTotalChart = (currentDashboard)=>{
     
    total = Object.keys(currentDashboard?.tags ?? {}).length;
    console.debug("total chart is  ",total);
}

export {showToaster,setTotalChart}