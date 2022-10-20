import Leaf from "./Leaf";
import leaf1 from '../assets/images/leafs/leaf01.png'
import leaf2 from '../assets/images/leafs/leaf02.png'
import leaf3 from '../assets/images/leafs/leaf03.png'
import leaf4 from '../assets/images/leafs/leaf04.png'
import leaf5 from '../assets/images/leafs/leaf05.png'

const LeavesContainer = () => {
  return(
    <div>
      <Leaf className='leafWrapper-1' src={leaf1} />

      <Leaf className='leafWrapper-2' src={leaf2} />

      <Leaf className='leafWrapper-3' src={leaf3} />

      <Leaf className='leafWrapper-4' src={leaf4} />

      <Leaf className='leafWrapper-5' src={leaf5} />
    </div>
  )
}

export default LeavesContainer