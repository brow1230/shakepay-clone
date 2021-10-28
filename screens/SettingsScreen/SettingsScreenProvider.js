import React from "react"
import SettingsScreen from "./Settings"
import { userDataContext } from "../../Context"

export default function SettingsScreenProvider(){
    return(
        <userDataContext.Consumer>
            {
                (value) => {
                    return(<SettingsScreen value={value}/>)
                }
            }
        </userDataContext.Consumer>
        )
}