import React from 'react'
const Menucard=({ menuData }) => {
  //  console.log(menuData);
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map(( curele)=>{
      return(
        <>
        
        <div>
        <div className='card-container' key={curele.id}>
           <div className='card'>
               <div className='card-body'>
                   <span className='card-number card-circle subtle'>{curele.id}</span>
                   <span className='card-author subtle'>{curele.name}</span>
                   <h2 className='card-title'>{curele.name}</h2>
                   <span className='card-description subtle'>
                    {curele.description}
                   {/* Maggi in two minute just wait ohh yes delicious maggie is here
                   now you enjoy it please give your feed backfohg jhdgolhgh oohgohosh 
                   sghh dhgidhgdhghjgohgh euhg  */}
                   </span>
                   <div className='card-read'>Read</div>
               </div>
               <img src={curele.image} alt ='images' className='card-media'/>
               <span className='card-tag subtle'>Ordre now</span>
           </div>
       </div>
   </div>
   </>

      )


    })}
    </section>
    </>
   
  )
}
export default Menucard;