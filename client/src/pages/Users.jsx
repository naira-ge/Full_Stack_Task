
const Users = () => {
  return (
    <section className='container-users'>
      <h2>User List</h2>
      <div className='wrapper-group'>
        <ul>
          <li className='group-item'>
              <div className='item-detail'>
                <img className='item-img' src='/ok.svg' alt='done' />
                <span>
                  <p className='item-info'>John</p>
                  <p className='user-fullname'>John Doe</p>
                </span>
              </div>
              <span>
                <p className='item-info'>...</p>
                <p className='item-info'>John Doe</p>
              </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Users;
