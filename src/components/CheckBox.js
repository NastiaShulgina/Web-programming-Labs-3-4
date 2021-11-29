// import React, { useState } from "react";
// import { Checkbox, Collapse } from "antd";

// const {Panel} = Collapse

// const cities = [
//     {
//         "_id": 1,
//         "name": "Lviv"
//     },
//     {
//         "_id": 2,
//         "name": "Kyiv"
//     },
//     {
//         "_id": 3,
//         "name": "London"
//     },
//     {
//         "_id": 4,
//         "name": "New York"
//     },
//     {
//         "_id": 5,
//         "name": "California"
//     }
// ]


// const CheckBox = () => {

//     const [Checked, setChecked] = useState([])

//     const handleToggle = (value) => {
//         const currentIndex = Checked.indexOf(value);
//         const newChecked = [...Checked];

//         if (currentIndex === -1){
//             newChecked.push(value)
//         } else {
//             newChecked.splice(currentIndex, 1)
//         }

//         setChecked(newChecked)
//     }

//     const renderCheckboxLists = () => cities.map((value, index) => (
//         <React.Fragment key={index}>
//             <Checkbox onChange={() => handleToggle(value._id)} type="checkbox" checked />
//             <span>{value.name}</span>
//         </React.Fragment>
//     ))

//     return (
//         <div>
//             <Collapse defaultActiveKey={['0']}>
//                 <Panel header key="1">
//                     {renderCheckboxLists()}
//                 </Panel>
//             </Collapse>
//         </div>
//     );
// }

// export default CheckBox;