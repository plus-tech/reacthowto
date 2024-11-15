import './reference.css';

export default function Reference({title, urlname, url}){
  return (
    <div className='reference ref-fade'>
      {title}
      <br/>
      <a href={url}> {urlname} </a>
    </div>
  )
}
