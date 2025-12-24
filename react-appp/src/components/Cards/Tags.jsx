import {ClosedCaption} from 'lucide-react'

const Tags = ({content,type}) => {
  return (
    <button className="bg-white/10 flex py-0.5 px-2 mr-2 rounded-xl cursor-pointer hover:text-blue-400 transition-all duration-300 font-mont">
      {type === "eps" ? <ClosedCaption className="pr-2"/> : <></>}
      {content}
    </button>
  )
}

export default Tags