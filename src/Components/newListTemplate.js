import React from 'react';
const NewsListTemplate = (props) => {

    
  
    const news = props.data.map( (item) => {
      return (
        
     
    <div className="articleBody">
        
       <div>
       <p>
      <h1>
          {item.title}
      </h1>
      {/* <span className="date">
          <i className="fa fa-clock-o"/>
          {item.date}
      </span> */}
       </p>
       
       </div>
        <div className="articleText"
        dangerouslySetInnerHTML={{
            __html:item.body
        }}
    >
 
    </div>
    </div>
      );
    })

    return(
       <div>
           {news}
       </div>
        
    )
}
 
export default NewsListTemplate ;