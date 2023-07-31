export default function InputGallery({ data }) {
    return <div>
        {data.map((item) => <div key={item.title}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} />
            <p>{item.description}</p>
        </div>)}
    </div>
}


