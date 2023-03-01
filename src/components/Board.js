import react from 'react'
import Perfil from './Perfil';
import Questions from './Questions';
import Status from './Status';

const Board = () => {
    return (
        <div className='board-container'>
            <div className='menu-lateral'>
                <div>  <Perfil /></div>
            </div>
            <div className='board'>



                <Status />


                <Questions />


            </div>
        </div>
    )
}
export default Board;