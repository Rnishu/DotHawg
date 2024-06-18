import React from 'react'
import './Menu.css'
import MenuItem from '../components/MenuItem'

function Menu() {
  return <div className='menu-con'>
    <div className='main-menu'>
      <div className='menu-main-slogan'> BUNS STRAIGHT <br /> FROM HEAVEN </div>
      <div className='menu-main-content'>
        <p className='menu-main-content-text'> Meet the dogs</p>
        <div className='menu-main-content-items'>
         <MenuItem imageUrl='https://media.istockphoto.com/id/1130731707/photo/hot-dog-on-white.jpg?s=2048x2048&w=is&k=20&c=v2BkwE4mSB_Jb39tA0NlzDdx9g0wrVby1HR7l040qcw=' name='Classic Dog' />
         <MenuItem imageUrl='https://media.istockphoto.com/id/1130731707/photo/hot-dog-on-white.jpg?s=2048x2048&w=is&k=20&c=v2BkwE4mSB_Jb39tA0NlzDdx9g0wrVby1HR7l040qcw=' name='Spicy Dog' />
         <MenuItem imageUrl='https://media.istockphoto.com/id/1130731707/photo/hot-dog-on-white.jpg?s=2048x2048&w=is&k=20&c=v2BkwE4mSB_Jb39tA0NlzDdx9g0wrVby1HR7l040qcw=' name='Not Spicy Dog' />
         <MenuItem imageUrl='https://media.istockphoto.com/id/1130731707/photo/hot-dog-on-white.jpg?s=2048x2048&w=is&k=20&c=v2BkwE4mSB_Jb39tA0NlzDdx9g0wrVby1HR7l040qcw=' name='Little Spicy Dog' />
         <MenuItem imageUrl='https://media.istockphoto.com/id/1130731707/photo/hot-dog-on-white.jpg?s=2048x2048&w=is&k=20&c=v2BkwE4mSB_Jb39tA0NlzDdx9g0wrVby1HR7l040qcw=' name='Little More Spicy Dog' />
         <MenuItem imageUrl='https://media.istockphoto.com/id/1130731707/photo/hot-dog-on-white.jpg?s=2048x2048&w=is&k=20&c=v2BkwE4mSB_Jb39tA0NlzDdx9g0wrVby1HR7l040qcw=' name='Very Spice Dog Dog' />
        </div>
      </div>
      <div className='menu-semi-circle'></div>

    </div>
  </div>
}

export default Menu
