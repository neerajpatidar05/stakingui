import { Button } from 'bootstrap';
import React,{useEffect,useState} from 'react'


 function Navbar() {
const [bcd,setbcd]=useState(0);
useEffect(() => {
  

  return () => {
    
  }
}, [bcd])

  const abc=()=>{
    let ab=Math.random();
setbcd(ab)
    console.log("abc",ab)
  }
    require('./property.css');
 
      return (
    <div className='container1'>
  <nav className="navbar navbar-expand-md navbar-dark navbarnavbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img className="logo" ></img>        
    </a>
    <div className=' mx-1'>
  <a href='#'> <img src="./opensea-icon.webp" height ="50" width="50" className='mx-2'/></a>
  <a href='#'> <img src="./discord-icon.png" height ="50" width="50" className='mx-2' /></a>
       <a href='#'> <img src="./twitter-icon.png" height ="50" width="50" className='mx-2' /></a>
       </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className='navlist' >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        
        <li className="nav-item mx-2 ">
        <a class="nav-link active " aria-current="page" href="#">WULFZ HOUSE</a>
        </li>
        <li className="nav-item">
        <a class="nav-link active" aria-current="page" href="#">SHOP</a>
        </li>
        <li className="nav-item"> 
        <a class="nav-link active " aria-current="page" href="#">NFT</a>
        </li>
     
      
        
      </ul>
     </div>     

    
      
    </div>
  </div>
  <div className="border-2px"></div>
</nav>

<div className='container'>
<div className='row '>
  <div className='cards shadow p-3 mb-5 rounded  ' >
  <div className='wulfz '>
        <img src='./wolf-icon.svg' className='wolfimage'></img>
        <div className='wolfchild text-center'><p> 0 </p> <p>Staked</p></div>
        
       
</div>
<div className='wulfz'>
<img src='./cash-icon.svg'className='wolfimage'></img>
        <div className='wolfchild text-center'><p> 0 /DAY</p> <p>Yield</p></div>
        
       
</div>
<div className='wulfz'>
<img src='./baoxiang-icon.svg'className='wolfimage'></img>
        <div className='wolfchild text-center'><p> 0 </p> <p>Balance</p></div>
        </div>
        
        <div className='wulfz'>
        <img src='./clock-icon.svg'className='wolfimage '></img>
        <div className='wolfchild text-center'><p> 0 </p> <p>Pending</p></div>
        </div>
        
  </div>
</div>

</div>
<div className='row'>
  <div className='col-md-3 '>
  
  <div className='card poolcard p-2 m-2  text-center shadow  rounded '>
<p>Total Pool Balance</p>
<p>10000 THICK</p>
  </div></div>
  <div className='col-md-3 '>
  <div className='card poolcard p-2 m-2  text-center shadow  mb-5  rounded '>
  <p>Bonus Reward Pool</p>
  <p>126 THICK</p>
  <p>0 days 0 hour 0 minutes 0 seconds</p>
</div></div><div className='col-md-3 '>
<div className='card poolcard p-2 m-2 text-center shadow  mb-5  rounded '>
<p>Total Players</p>
<p>12</p>
</div></div><div className='col-md-3 ' >
<div className='card poolcard  p-2 m-2 text-center shadow  mb-5  rounded   '>
<p>My Stake Reward</p>
<p>1.0 THICK</p>
</div>
</div>


     </div>

<div className='card stakingcard p-2 text-center shadow  rounded '>
<p className='stakingheader'>STAKING</p>
<div className='stakingbutton'>
<button type="button" class="btn btn-light btn-md"  onClick={abc}>WULFZ</button>
        <button type="button" class="btn btn-light btn-md" >PUPZ</button>
        <button type="button" class="btn btn-light btn-md">ALPHA</button>
  </div>
  <div className='icons'><div><img src='./wolf-icon.svg'></img>
  <div><p>WULFZ : 0</p>
<p>Available</p></div>
    </div><div>
  <img src='./Awoo-icon.svg'></img>
  <div><p>$AWOO : 0</p>
<p>Per staked</p></div></div>
  </div><div className='stakingbutton'>
  <button type="button" class="btn btn-light btn-md" >APPROVE</button>
        <button type="button" class="btn btn-light btn-md">MAX</button>
        </div>
  </div>

  <div className='card stakingcard p-2 text-center shadow rounded unstakecard '>
<p className='stakingheader'>UNSTAKING</p>
<div className='stakingbutton'>
<button type="button" class="btn btn-light btn-md"  onClick={abc}>WULFZ</button>
        <button type="button" class="btn btn-light btn-md" >PUPZ</button>
        <button type="button" class="btn btn-light btn-md">ALPHA</button>
  </div>
  <div className='icon2'><div><img src='./wolf-icon.svg'></img>
  <div><p>WULFZ : 0</p>
<p>Available</p></div>
    </div>
  </div><div className='stakingbutton'>
  <button type="button" class="btn btn-light btn-md" >UNSTAKE</button>
        <button type="button" class="btn btn-light btn-md">MAX</button>
        </div>
  </div>

    </div>
  )
        }
export default Navbar

























// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// function Navbar() {
//     return(
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Features</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

//     );
    
// }
// export default Navbar;
