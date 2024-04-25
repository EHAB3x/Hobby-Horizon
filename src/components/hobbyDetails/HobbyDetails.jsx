import './hobbyDetails.css'

// eslint-disable-next-line react/prop-types
const HobbyDetails = ({hobbyDetails}) => {
  return (
    <div className="hobby__details">
        <div className="hobby__details-landing"  style={{backgroundImage: `url(${hobbyDetails.img})`}}>
            <div className="hobby__details-overlay">
                <h1>{hobbyDetails.name}</h1>
                <p>{hobbyDetails.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HobbyDetails