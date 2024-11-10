import './Places.scss'
import vyborgImage from '/public/vyborg.jpeg';
import oranImage from '/public/oran.jpeg';
import moscowImage from '/public/moscow.jpeg';
import kazanImage from '/public/kazan.jpeg';
import kazan2Image from '/public/kazan2.jpeg';

function Places() {
    return ( 
        <div className="films-page">
            <h1>Места, которые мы посетили:</h1>
            <div className="films-container">
                <a href="http://www.etomesto.ru/trackab26311243/" target="_blank">
                    <div className="film-card">
                    <img src={vyborgImage} alt="Выборг" />
                    <p>Выборг</p>
                    </div>
                </a>
                <a href="http://www.etomesto.ru/track26bc311210/" target="_blank">
                <div className="film-card">
                    <img src={kazanImage} alt="Казань" />
                    <p>Казань</p>
                </div>
                </a>
                <a href="http://www.etomesto.ru/track890f311242/" target="_blank">
                <div className="film-card">
                    <img src={oranImage} alt="Ораниенбаум" />
                    <p>Ораниенбаум</p>
                </div>
                </a>
                <a href="http://www.etomesto.ru/track928d311218/" target="_blank">
                <div className="film-card">
                    <img src={moscowImage} alt="Москва" />
                    <p>Москва</p>
                </div>
                </a>
                <a href="http://www.etomesto.ru/track1a1a311971/" target="_blank">
                <div className="film-card">
                    <img src={kazan2Image} alt="Казань 2" />
                    <p>Казань 2</p>
                </div>
                </a>
            </div>
        </div>
    );
}

export default Places;