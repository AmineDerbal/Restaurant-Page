const clear = () =>{
  const container = document.querySelector('.container');

  if (container){
    
    
    if(container.childElementCount > 0){
      let firstElement = container.firstElementChild;
      while(firstElement){
        firstElement.remove();
        firstElement = container.firstElementChild;
        
      }
    }
    container.remove();
  }
  
}
export default clear