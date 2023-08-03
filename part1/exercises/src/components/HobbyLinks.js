export default function HobbyLinks() {
    let hobbyArray = ['www.wowhead.com', 'www.cinemark.com'];
    return (
        <div>
            <p><a href = {hobbyArray[0]}>World of Warcraft</a></p>
            <p><a href = {hobbyArray[1]}>Movies</a></p>
        </div>
    );
}