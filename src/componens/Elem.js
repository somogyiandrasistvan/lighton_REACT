import "./Elem.css";

function Elem(props) {
  function katt() {
    console.log("Elem");
    props.katt(props.index);
  }
  return (
    <div className={"elem"+props.ertek} onClick={katt}>

    </div>
  );
}

export default Elem;