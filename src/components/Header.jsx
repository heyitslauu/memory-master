import PropTypes from 'prop-types';

function Header({score}) {
  return (
    <div className="flex justify-between items-center px-4 py-2 text-white font-bold">
      <div className="header-logo flex gap-2 items-center">
        <img src="/vite.svg" alt="Logo" />
        <h3>Rick and Memorty</h3>
      </div>
      <div className="score-board">
        <h3>Score: <span>{score}</span></h3>
      </div>
    </div>
  )
}

Header.propTypes = {
  score: PropTypes.number.isRequired
}

export default Header