import { SerialPort } from 'serialport';
import { pool } from "../DataAccess/db.js"

export const registrarLecturaArea = async (req, res) => {

    try {
        const port = new SerialPort({
            path: 'COM3',
            baudRate: 9600,
            autoOpen: false
        });

        const { id_area, time } = req.body;
        console.log(req.body.data)
        const [result1] = await pool.query(
            "INSERT INTO monitoreo(id_area_lectura) VALUES (?)",
            [id_area]
        );
        port.open(async () => {
            const a = []
            let i = 0 
            port.on('data', async function (data) {    
                if (!a.includes(data.toString('hex'))) {
                    const n = 7
                    a.push(data.toString('hex'))
                    const tag = data.toString('hex')
                    const [result2] = await pool.query(
                        "INSERT INTO lectura(id_monitoreo, tags) VALUES (?, ?)",
                        [result1.insertId, tag.slice(-n)]
                    );
                    console.log(a)
                }
                if (i == time) {
                    res.json({
                        id_monitoreo: result1.insertId,
                        id_area_lectura: id_area,
                        activos: a
                    });
                    a.length = 0
                    i = 0;
                    port.close()
                }
                console.log(i)
                i++;          
            })  
        })
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const registrarLectura = async (req, res) => {

    try {
        const port = new SerialPort({
            path: 'COM3',
            baudRate: 9600,
            autoOpen: false
        });

        const { time } = req.body;
        port.open(async () => {
            const a = []
            const b = []
            let i = 0 
            port.on('data', async function (data) {    
                if (!a.includes(data.toString('hex'))) {
                    const n = 7
                    a.push(data.toString('hex'))
                    const tag = data.toString('hex')
                    b.push(tag.slice(-n))
                    console.log(b)
                }
                if (i == time) {
                    res.json(
                        b
                    );
                    a.length = 0
                    i = 0;
                    port.close()
                }
                console.log(i)
                i++;          
            })  
        })
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getLecturaMonitoreo = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM lectura WHERE id_monitoreo = ?", [req.params.id]
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}