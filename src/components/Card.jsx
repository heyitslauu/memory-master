import PropTypes from 'prop-types';

function Card({cardCharacters, cardClick}){
	return (
			<div className='grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6 px-6'>
					{
            cardCharacters.map((char) => {
              return (
                <div key={char.id} className='px-4 py-4 rounded-lg' style={{ backgroundColor: 'rgba(200, 100, 150, 0.4)'}} onClick={cardClick}>
                  <div className='flex items-center justify-center'>
                    <img src={char.src} alt={char.name} className='h-[200px] '/>
                  </div>
                  <h1 className='text-white text-center mt-4 text-3xl font-bold'>{char.name}</h1>
                </div>
              )
            })
          }
			</div>
	)
}


Card.propTypes = {
	cardCharacters: PropTypes.arrayOf(
			PropTypes.shape({
					id: PropTypes.string.isRequired,
					name: PropTypes.string.isRequired,
					src: PropTypes.string.isRequired,
					isClicked: PropTypes.bool.isRequired
			})
	),
	cardClick: PropTypes.func
}
export default Card;