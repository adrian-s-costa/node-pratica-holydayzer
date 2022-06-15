import dayjs from "dayjs";
import express, { response } from "express";

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

const server = express();

server.get('/holidays', (request, response)=>{

    response.setHeader('Content-Type', 'text/html');

    response.write('Lista de feriados do ano: </br></br>');
    holidays.map((holiday)=>(response.write((`Data: ${holiday.date} Nome: ${holiday.name} </br>`))));

    response.end();

});

server.get('/is-today-holiday', (request, response)=>{
    const today = dayjs().format('M/D/YYYY');

    holidays.map(holiday => {if (today === holiday.date){
        response.send(`Sim, hoje é ${holiday.name}`);
        }
    })

    response.send(`Não, hoje não é feriado`)
})

server.listen(3000);

