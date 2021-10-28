import React from "react"
import HomeScreen from "./Home"
import { userDataContext } from "../../Context"

export default function HomeScreenProvider({navigation}){
    return(
        <userDataContext.Consumer>
            {
                (value) => {
                    return(<HomeScreen value={value} navigation={navigation}/>)
                }
            }
        </userDataContext.Consumer>
        )
}