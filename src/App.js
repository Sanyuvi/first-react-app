
import './App.css';


function App() {
   
  return (
    <div className="App">
      <div className='Card-block'>
      <PriceCard1/>
      <PriceCard2/>
      <PriceCard3/>
      </div>      
    </div>
  );
}

export default App;

function PriceCard1(){
  return(
    <div className='PriceCard1'>
     
      <h5>FREE</h5>
      <h2>$0/month</h2><hr></hr>
        <p>&#10004;Single User</p>
        <p>&#10004;5GB Storage</p>
        <p>&#10004;Unlimited Public Projects</p>
        <p>&#10004;Community Access</p>
        <p  className='p1'>&#10005;Unlimited Private Projects</p>
        <p  className='p1'>&#10005;Dedicated Phone Support</p>
        <p  className='p1'>&#10005;Free Subdomain</p>
        <p  className='p1'>&#10005;Monthly Status Reports</p>  
        <button className='btn'>Button</button>    
      </div>
  )}
function PriceCard2(){
  return(

    <div className='PriceCard2'>
     
      <h5>PLUS</h5>
      <h2>$9/month</h2><hr></hr>
         <p>&#10004;5 User</p>
         <p>&#10004;50GB Storage</p>
         <p>&#10004;Unlimited Public Projects</p>
         <p>&#10004;Community Access</p>
         <p>&#10004;Unlimited Private Projects</p>
         <p>&#10004;Dedicated Phone Support</p>
         <p>&#10004;Free Subdomain</p>
         <p className='p1'>&#10005;Monthly Status Reports</p> 
         <button className='btn'>Button</button>   
    </div>
  )}
  function PriceCard3(){
    return(
<div className='PriceCard3'>
     
     <h5>PRO</h5>
     <h2>$49/month</h2><hr></hr>
        <p>&#10004;Unlimited User</p>
        <p>&#10004;150GB Storage</p>
        <p>&#10004;Unlimited Public Projects</p>
        <p>&#10004;Community Access</p>
        <p>&#10004;Unlimited Private Projects</p>
        <p>&#10004;Dedicated Phone Support</p>
        <p>&#10004;<strong>Unlimited </strong>Free Subdomain</p>
        <p>&#10004;Monthly Status Reports</p> 
        <button className='btn'>Button</button> 
              
</div>
  )
}
