import './Calendar.css';

export default function Calendar() {

    return (
        <>
            <div className="Calendar container-fluid" id="Calendario">
                <div className="Calendar-Header row">
                    <h1 className='display-2'>CALENDARIO</h1>
                    <h4 className="display-5"> Seleccioná una fecha para ver mas información.</h4>
                </div>
                <div className="Calendar-Dates row">
                    <div className="Date-Container col-sm-6 col-md-4 col-lg-2">
                        <div className='Date'>
                            <h2>25</h2>
                            <h3>MAY</h3>
                        </div>
                        <h4 className="Evento">Revolución de Mayo</h4>
                    </div>

                    <div className="Date-Container  col-sm-6 col-md-4 col-lg-2">
                        <div className='Date'>
                            <h2>9</h2>
                            <h3>JUL</h3>
                        </div>
                        <h4 className="Evento">Dia de la Bandera</h4>
                    </div>

                    <div className="Date-Container col-sm-6 col-md-4 col-lg-2">
                        <div className='Date'>
                            <h2>20</h2>
                            <h3>JUL</h3>
                        </div>
                        <h4 className="Evento">Dia de la Emancipación de la Corona Española</h4>
                    </div>

                    <div className="Date-Container col-sm-6 col-md-4 col-lg-2">
                        <div className='Date'>
                            <h2>33</h2>
                            <h3>JUL</h3>
                        </div>
                        <h4 className="Evento">Todavía no nos pusimos de a cuerdo a ver que celebrar en el día que nos regalaron</h4>
                    </div>

                    <div className="Date-Container col-sm-6 col-md-4 col-lg-2">
                        <div className='Date'>
                            <h2>1</h2>
                            <h3>AGO</h3>
                        </div>
                        <h4 className="Evento">AL FIN COBRAMOS FUE ETERNO EL MES PASADO</h4>
                    </div>

                    <div className="Date-Container col-sm-6 col-md-4 col-lg-2">
                        <div className='Date'>
                            <h2>20</h2>
                            <h3>AGO</h3>
                        </div>
                        <h4 className="Evento">Ya no se que poner la verdad</h4>
                    </div>

                    <div className="Date-Container col-sm-6 col-md-4 col-lg-2">
                        <div className='Date'>
                            <h2>24</h2>
                            <h3>SEP</h3>
                        </div>
                        <h4 className="Evento">Cumple memush e.e</h4>
                    </div>

                    <div className="Date-Container col-sm-6 col-md-4 col-lg-2">
                        <div className='Date'>
                            <h2>23</h2>
                            <h3>NOV</h3>
                        </div>
                        <h4 className="Evento">Cumpleaños</h4>
                    </div>

                    <div className="Date-Container col-sm-6 col-md-4 col-lg-2">
                        <div className='Date'>
                            <h2>+</h2>
                        </div>
                        <h4>Ver todo</h4>
                    </div>
                </div>
            </div>
        </>
    )
};