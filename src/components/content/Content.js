import './Content.css';
import RowData from '../../constants/URLS';
import Row from '../row/Row';
export default function Content() {
 
  return (
    <div className='content-wrapper'>
      {RowData.map((el)=>{
        return <Row title={el.title} url={el.url}/>
      })}
    </div>
  )
}
//52af2bc35f4b3c90ee5f16c03a00609b