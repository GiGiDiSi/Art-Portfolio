import ImgGrid from './ImgGrid.jsx';
function Gallery({works}){
    return(
        <>
            <h1>{works}</h1>
            <ImgGrid fol={works}/>
        </>
    );
}
export default Gallery;