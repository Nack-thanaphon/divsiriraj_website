export default function Loader() {
  return (
    <div className="loader" onLoad={
        setTimeout(()=>{
     
        },200)
    }>
      <div>Loading...</div>
    </div>
  );
}
