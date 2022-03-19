import './styles.css';

const Info = ({info, name, group}) => {
  return (
    <li className='group-item'>
        <div className='item-detail'>
          <img className='item-img' src='/done.svg' alt='done' />
          <span>
            <p className='item-info'>{info}</p>
            <p className='item-name'>{name}</p>
          </span>
        </div>
        <span>
          <p className='item-info'>...</p>
          <p className='item-info'>{group || 'Default group'}</p>
        </span>
    </li>
  )
}

export default Info;
