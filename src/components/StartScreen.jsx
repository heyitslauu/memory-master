import PropTypes from 'prop-types';

function StartScreen({handleGameStart}) {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <div className=" font-bold px-10 py-10 rounded-md" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <h1 className='text-4xl text-cyan-300'>Rick and Memorty</h1>
            <div className='mt-4 flex flex-col gap-y-2'>
                <button className='cursor-pointer rounded-md text-base font-medium outline-none py-2 bg-blue-900 text-white border-2 ' onClick={handleGameStart}>Start Game</button>
                <button 
                    className='cursor-pointer rounded-md text-base font-medium py-2 outline-none border-2 border-white  text-white'
                    role="link"
                    onClick={() => openInNewTab("https://github.com/heyitslauu/memory-master")}
                >Source Code
                </button>
            </div>
        </div>
    )
}

StartScreen.propTypes = {
    handleGameStart: PropTypes.func.isRequired,
};

export default StartScreen;