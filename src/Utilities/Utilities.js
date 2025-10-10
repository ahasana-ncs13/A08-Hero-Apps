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

const removeStoredApp =(id)=>{
     const storedAPP = getStoredApp()
     const IdSTR = String(id)
     const removedApp = storedAPP.filter( appId => appId != id )
     const removedAppSTR = JSON.stringify(removedApp)
     localStorage.setItem("installApp",removedAppSTR)
}

export {setAppToStored,getStoredApp,removeStoredApp}