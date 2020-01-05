import React, { useState } from 'react';
import SearchSection from '../../components/SearchSection';
import SearchRequest from '../../api/SearchRequest';


const LogsPage = () => {
    //the date of logs being searched
    const [logsDate, setlogsDate] = useState('');

    const [logs, setLogs] = useState([])

    const HandlelogsDate = e => {
        setlogsDate(e.target.value);
      };

    const getLogs = () => {
        console.log(logsDate)
        // SearchRequest('http://localhost:5000/logs',logsDate, setLogs)
    }

    const mappedLogs = logs.map(({id, date, messages}) =>     
    <tr key={id}><th scope="row">{id}</th><td>{date}</td><td>{messages}</td></tr>);

  return (
    <main>
        <SearchSection 
        InputName1='date' InputType1='date' InputPh1='Date'
        InputName2='' InputType2='hidden' InputPh2=''
        SearchInput={HandlelogsDate} SearchRequest={getLogs} mappedTable={mappedLogs}
        thead1='Date' thead2='Messages' thead3=''
        />
    </main>
  );
}


export default LogsPage;
