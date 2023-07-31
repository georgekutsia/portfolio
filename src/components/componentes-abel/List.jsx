export default function List({ data }) {
    return <ul>
        {data.map((item, index) => <li key={index}>{item}</li>)}
        {/* {[
            <li>Lujuria</li>,
            <li>Pereza</li>,
            <li>Gula</li>,
            <li>Ira</li>,
        ]} */}
    </ul>
}


