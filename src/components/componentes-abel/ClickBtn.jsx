export default function ClickBtn() {

    const clicked = () => {
        console.log("Hola");
    }

    return <button onClick={clicked}>
        Click me
    </button>
}


