import './Films.scss'
import topiImage from '/src/assets/topi.jpg';
import challengersImage from '/src/assets/challengers.jpg';
import insideOutImage from '/src/assets/Inside_Out_2_poster.jpg';
import soulImage from '/src/assets/soul1.webp';
import oppenheimerImage from '/src/assets/oppenheimer.jpg';
import bbImage from '/src/assets/bb.webp';
import bcsImage from '/src/assets/bcs.jpg';

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