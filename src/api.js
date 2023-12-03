import axios from 'axios';
const searchImages = async (term) => {
    const response= await axios.get('https://api.unsplash.com/search/photos',{
     headers:{
       Authorization:'Client-ID 3ttivB_7d-yLasvuRvGEQVIEO-S_UGz8YPW2yI737M8'
     },
     params:{
       query: term,
     },
    });
    
    return response.data.results; 
   };

   export default searchImages;