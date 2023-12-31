import React, { Component } from "react";
export default class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsurl} = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl}  className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

//************************************************************************** FUNCTION BASED ****************************************************************************************** */

// import React from "react";
// const Newsitem = (props)=>{
//     let {title,description,imageurl,newsurl} = props;
//     return (
//       <div>
//         <div className="card">
//           <img src={imageurl} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{description}...</p>
//             <a href={newsurl}  className="btn btn-primary">Read more</a>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Newsitem
