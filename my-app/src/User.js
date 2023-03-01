import {userData} from './userData';

 export default function User() {
  return (
    <div>
    {userData.map((info) => (
      <div key={info}>
      <h1>{info.firstname}</h1>
      <h2>{info.lastname}</h2>
      <h3>{info.age}</h3>
      </div>
    ))}
    </div>
  )
}


