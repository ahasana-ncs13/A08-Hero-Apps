import { toast } from "react-toastify"

const getStoredApp = ()=>{
    const storedAppSTR = localStorage.getItem("installApp")
    if(storedAppSTR){
        const storedAPPconvert = JSON.parse(storedAppSTR)
        return storedAPPconvert;
    }
    else{
        return []
    }
}

const setAppToStored = (id)=>{
    const storedAPP = getStoredApp()
    if(storedAPP.includes(id)){
        toast("App is already installed")
    }
    else{
        storedAPP.push(id)
        const setstoredAppSTR = JSON.stringify(storedAPP)
        localStorage.setItem("installApp",setstoredAppSTR)
    }
}

export {setAppToStored,getStoredApp}