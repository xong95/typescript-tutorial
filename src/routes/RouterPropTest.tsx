import {Link} from "react-router-dom"
export default function RouterPropTest() {
    const menu ={
        name : "noodle",
        price : "5$",
    };
    return (
        <>
            <h1>Router Prop Test</h1>
            <Link to={{
                pathname : "/routerproptestresult",
                state : {
                    menu
                }
            }}>prop data</Link>
        </> 
    )
}