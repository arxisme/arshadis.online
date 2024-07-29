import React from 'react'

const signin = () => {
  return (
    <>
      <div className="flex flex-col w-screen"  >
        <form action="">
          <input type="email" placeholder='Enter eamil' />
          <input type='password' placeholder='Password'></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default signin
