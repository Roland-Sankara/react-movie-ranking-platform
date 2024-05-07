function GenreCard(props){
    return(
        <div className="w-[23%] rounded-lg bg-[#212846] text-center">
            <div>
                <img className="w-full rounded-t-lg" src={props.image} alt="card picture" />
            </div>
            <h2 className="text-2xl font-bold text-white p-4">{props.genre}</h2>
        </div>
    )
}

export default GenreCard;