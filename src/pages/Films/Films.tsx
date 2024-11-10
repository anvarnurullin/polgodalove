import './Films.scss'
import topiImage from '/public/topi.jpg';
import challengersImage from '/public/challengers.jpg';
import insideOutImage from '/public/Inside_Out_2_poster.jpg';
import soulImage from '/public/soul1.webp';
import oppenheimerImage from '/public/oppenheimer.jpg';
import bbImage from '/public/bb.webp';
import bcsImage from '/public/bcs.jpg';

function Films() {
    return (
        <div className="films-page">
            <h1>Фильмы и сериалы, которые мы смотрели вместе:</h1>
            <div className="films-container">
                <div className="film-card">
                    <img src={topiImage} alt="Топи" />
                    <p>Топи</p>
                </div>
                <div className="film-card">
                    <img src={challengersImage} alt="" />
                    <p>Challengers</p>
                </div>
                <div className="film-card">
                    <img src={insideOutImage} alt="" />
                    <p>Inside Out 2</p>
                </div>
                <div className="film-card">
                    <img src={soulImage} alt="" />
                    <p>Soul</p>
                </div>
                <div className="film-card">
                    <img src={oppenheimerImage} alt="" />
                    <p>Oppenheimer</p>
                </div>
                <div className="film-card">
                    <img src={bbImage} alt="" />
                    <p>Breaking Bad</p>
                </div>
                <div className="film-card">
                    <img src={bcsImage} alt="" />
                    <p>Better Call Saul</p>
                </div>
            </div>
        </div>
    );
}

export default Films;