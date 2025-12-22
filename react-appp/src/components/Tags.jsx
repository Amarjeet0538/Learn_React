import {ClosedCaption} from 'lucide-react'

const Tags = ({content,type}) => {
  return (
    <button className="bg-white/10 flex px-2 mr-2 rounded-xl font-semibold cursor-pointer hover:text-blue-400 transition-all">
      {type === "eps" ? <ClosedCaption className="pr-2"/> : <></>}
      {content}
    </button>
  )
}

export default Tags