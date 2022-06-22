import './Calendar.css';

export default function Calendar() {

    return (
        <>
            <div className="Calendar" id="Calendario">
                <h1>CALENDARIO</h1>
                <p className="Intro-Text"> Seleccioná una fecha para ver mas información.</p>
                <div className="Calendar-Dates">
                    <div className="Date-Container">
                        <div className='Date'>
                            <h2>25</h2>
                            <h3>MAY</h3>
                        </div>
                        <h4>Revolución de Mayo</h4>
                    </div>

                    <div className="Date-Container">
                        <div className='Date'>
                            <h2>9</h2>
                            <h3>JUL</h3>
                        </div>
                        <h4>Dia de la Bandera</h4>
                    </div>

                    <div className="Date-Container">
                        <div className='Date'>
                            <h2>20</h2>
                            <h3>JUL</h3>
                        </div>
                        <h4>Dia de la Emancipación de la Corona Española</h4>
                    </div>

                    <div className="Date-Container">
                        <div className='Date'>
                            <h2>33</h2>
                            <h3>JUL</h3>
                        </div>
                        <h4>Todavía no nos pusimos de a cuerdo a ver que celebrar en el día que nos regalaron</h4>
                    </div>

                    <div className="Date-Container">
                        <div className='Date'>
                            <h2>1</h2>
                            <h3>AGO</h3>
                        </div>
                        <h4>AL FIN COBRAMOS FUE ETERNO EL MES PASADO</h4>
                    </div>

                    <div className="Date-Container">
                        <div className='Date'>
                            <h2>20</h2>
                            <h3>AGO</h3>
                        </div>
                        <h4>Ya no se que poner la verdad</h4>
                    </div>

                    <div className="Date-Container">
                        <div className='Date'>
                            <h2>24</h2>
                            <h3>SEP</h3>
                        </div>
                        <h4>Cumple memush e.e</h4>
                    </div>

                    <div className="Date-Container">
                        <div className='Date'>
                            <h2>23</h2>
                            <h3>NOV</h3>
                        </div>
                        <h4>Cumpleaños B)</h4>
                    </div>

                    <div className="Date-Container">
                        <div className='Date'>
                            <h2>+</h2>
                        </div>
                        <h4>Ver Todo</h4>
                    </div>
                </div>
            </div>
        </>
    )
};