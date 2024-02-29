function doSomething(){
    console.log("hello world!");
}
function Button(){
    return(
        <div>
            <button onClick={doSomething}>click me!</button>
        </div>
    )
}
export default Button