import './index.scss'
import tetris from './Tetris/img/tetris.png'
import { Link } from 'react-router-dom'
import tic from './TicTacToe/img/tic.png'

const Games = () => {


    return (
        <>
        <div className="container game-page">
            <div className="text-zone">
        <div className="image-grid">
        <Link to="/games/tetris" className='flat-button'>
            <div className="image-item">
            <img src={tetris} alt="tetris" />
            <p>Tetris</p>
            </div>
        </Link>

        <Link to="/games/tictactoe" className='flat-button'>
            <div className="image-item">
            <img src={tic} alt="tic" />
            <p>TicTakToe</p>
            </div>
        </Link>

        </div>

        </div>
        </div>
        </>
    )
}

export default Games
