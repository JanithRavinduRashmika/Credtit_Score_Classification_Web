import './ArticleCard.css'

const ArticleCard = ({image, title}) => {
    return (
        <div className='cardContainer'>

            <div className='cardImage'>
                <img src={image} alt="Description of image" />
            </div>
            <div className='cardTitle'>
                <h3>{title}</h3>
            </div>
            
        </div>
        
      );
   
}

export default ArticleCard