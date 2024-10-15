export default function Main({data}) {
  
    return (
        
        <div className="imgContainer">
            {/* <img className="bgImage" src="mars.png" alt={data?.title || 'bg-img'} /> */}
            <iframe className="bgImage" src={data?.url} ></iframe>
        </div>

    )
}