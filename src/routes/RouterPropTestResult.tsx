interface propTypes {
    location: {
        state: {
            menu :{
                name : any,
                price : any
            }
        }
    }
}

export default function RouterPropTestResult(props : propTypes) {
    console.log(props)
    const name = props.location.state.menu.name;
    const price = props.location.state.menu.price;
    return (
        <>
            <h1>Router Prop RouterPropTestResult</h1>
            <div>{name}</div>
            <div>{price}</div>
        </> 
    )
}