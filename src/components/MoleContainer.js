import {useEffect, useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [theMole, SetTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        SetTheMole(false)
    }
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={SetTheMole} handleClick={handleClick} /> : <EmptySlot toggle={SetTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}


export default MoleContainer